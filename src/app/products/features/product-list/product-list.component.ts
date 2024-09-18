import { Component, inject } from '@angular/core';
import { ProductsSateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { Product } from '../../../shared/interfaces/product.interface';

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
  cartState$ = inject(CartStateService).state$;  // Usamos state$ para suscribirnos al estado de cart

  constructor() {
    this.cartState$.subscribe((cartState) => {
      console.log('Cart state in component:', cartState.products);  // Ver productos del carrito en consola
    });
  }

  changePage() {
    const page = this.productsState.State.page() + 1;
    this.productsState.changePage$.next(page);
  }

  addToCart(product:Product){
  //this
  }
}
