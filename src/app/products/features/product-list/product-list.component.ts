import { Component ,inject} from '@angular/core';
import { ProductsSateService } from '../../data-access/products-state.service';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers:[ProductsSateService],

})
export  default class ProductListComponent {
    productsState=inject(ProductsSateService);
  }

