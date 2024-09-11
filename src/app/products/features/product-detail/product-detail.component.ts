import { Component, effect, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styles: ``
})
export  default class  ProductDetailComponent {

  id=input.required<string>

  constructor(){
      effect(()=>{
        console.log(this.id)
      });
  }


}