import { Component, inject } from '@angular/core';
import { ProductsSateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { Product, ProductItemCart } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductsSateService],
})
export default class ProductListComponent {
  productsState = inject(ProductsSateService);
  cartState$ = inject(CartStateService);  // Usamos state$ para suscribirnos al estado de cart

  constructor() {
    
      console.log('Cart state in component:', this.cartState$.products);  // Ver productos del carrito en consola
   
  }

  changePage() {
    const page = this.productsState.State.page() + 1;
    this.productsState.changePage$.next(page);
  }
addToCart(product: Product) {
  const productItem: ProductItemCart = {
    product,
    quantity: 1,               // cantidad inicial (puedes hacer que el usuario la elija)
    price: product.price,      // puedes guardar también el precio unitario
    id: product.id,            // usamos el ID del producto como ID de carrito
  };

  this.cartState$.addProduct(productItem);
}
}
