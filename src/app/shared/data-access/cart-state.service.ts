import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
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

  // BehaviorSubject para manejar el estado
  private stateSubject = new BehaviorSubject<State>({
    products: [],
    loaded: false,
  });

  // Observable para exponer el estado
  state$ = this.stateSubject.asObservable();

  // Cargar productos desde el servicio de almacenamiento y actualizar el estado
  loadProducts$ = this._storageService.loadProducts().pipe(
    map((products) => ({
      products,
      loaded: true,
    })),
    tap((newState) => {
      console.log('Loaded products:', newState.products); // Ver en consola los productos cargados
      this.stateSubject.next(newState); // Actualizar el estado
    })
  );

  constructor() {
    // Cargar productos al inicializar el servicio
    this.loadProducts$.subscribe();
  }

  // Método para obtener el estado actual
  getState() {
    return this.stateSubject.getValue();
  }

  // Puedes añadir otras acciones o modificaciones de estado aquí
  load() {
    const currentState = this.getState();
    console.log('Current state products:', currentState.products); // Ver en consola los productos actuales
  }
}
