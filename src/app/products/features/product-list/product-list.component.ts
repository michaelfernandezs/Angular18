import { Component ,inject} from '@angular/core';
import { ProductsSateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers:[ProductsSateService],

})
export  default class ProductListComponent {
    productsState=inject(ProductsSateService);
  }

