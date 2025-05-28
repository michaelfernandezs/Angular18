import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { ProductItemCart } from '../interfaces/product.interface';
import { StorageService } from './storage.service';

interface State {
  products: ProductItemCart[];
  loaded: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CartStateService {
  private _storageService = inject(StorageService);

  // Estado reactivo del carrito
  private state = signal<State>({
    products: [],
    loaded: false,
  });

  // Computed: Exponer partes del estado
  readonly products = computed(() => this.state().products);
  readonly loaded = computed(() => this.state().loaded);
  readonly totalItems = computed(() => this.state().products.length);
  readonly totalPrice = computed(() =>
    this.state().products.reduce((total, p) => total + p.price * p.quantity, 0)
  );

  constructor() {
    // Cargar productos desde almacenamiento al iniciar
    effect(() => {
      this._storageService.loadProducts().subscribe((products) => {
        console.log('Loaded from storage:', products);
        this.state.set({
          products,
          loaded: true,
        });
      });
    } ,
      {allowSignalWrites: true} // Permitir escritura en el estado dentro del efecto
  );

    // Guardar en storage cada vez que los productos cambien
    effect(() => {
      const { products, loaded } = this.state();
      if (loaded) {
        this._storageService.saveProducts(products);
        console.log('Saved to storage:', products);
      }
    });
  }

  // Obtener el estado completo si lo necesitas
  getState() {
    return this.state();
  }

  // Añadir producto al carrito
  addProduct(product: ProductItemCart) {
    const current = this.state().products;
    const index = current.findIndex((p) => p.id === product.id);

    let updatedProducts;
    if (index !== -1) {
      // Si ya existe, actualizar cantidad
      updatedProducts = current.map((p, i) =>
        i === index ? { ...p, quantity: p.quantity + product.quantity } : p
      );
    } else {
      // Si no existe, añadir nuevo
      updatedProducts = [...current, product];
    }

    this.state.update((s) => ({
      ...s,
      products: updatedProducts,
    }));
  }

  // Eliminar producto del carrito
  removeProduct(productId: number) {
    const updatedProducts = this.state()
      .products
      .filter((p) => p.id !== productId);

    this.state.update((s) => ({
      ...s,
      products: updatedProducts,
    }));
  }

  // Vaciar el carrito
  clearCart() {
    this.state.update((s) => ({
      ...s,
      products: [],
    }));
  }
}
