import { Injectable } from "@angular/core";
import {  ProductItemCart } from "../interfaces/product.interface";
import { Observable, of } from "rxjs";
// This service is responsible for loading and saving products to localStorage.
// It provides methods to retrieve products from localStorage and save products to localStorage.
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
