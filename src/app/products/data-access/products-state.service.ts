import { inject, Injectable } from "@angular/core";
import { Product } from "../../shared/interfaces/product.interface";
import{signalSlice} from 'ngxtension/signal-slice'
import { ProductService } from "./products.service";
import { map } from "rxjs";
interface State{
    products:Product[];
    status:'loading'|'success'|'error';
}
@Injectable()
export class ProductsSateService{
    private productsService=inject(ProductService);
    private initialState: State = {
       products:[],
       status:'loading'as const,
      };

    State=signalSlice({
        initialState:this.initialState,
        sources:[

          this.productsService
          .getProducts()
          .pipe(map((products)=>({products,status:'success' as const}))),
        ],

    });


}
