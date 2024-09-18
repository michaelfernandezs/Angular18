import { Injectable } from "@angular/core";
import {  ProductItemCart } from "../interfaces/product.interface";
import { Observable, of } from "rxjs";
import { json } from "stream/consumers";
@Injectable({
    providedIn: 'root'
})

export class StorageService {
    loadProducts(): Observable<ProductItemCart[]>{
        const rowProducts=localStorage.getItem('products');

        return of (rowProducts?JSON.parse(rowProducts):[])
    }

    saveProducts(products: ProductItemCart[]): void {
        localStorage.setItem('products', JSON.stringify(products));
    }
}
