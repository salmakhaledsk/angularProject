import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/icategory';
import {  FormsModule } from '@angular/forms';
import { BorderImageDirective } from '../../directive/border-image.directive';
import { AstreskSepPipe } from '../../pipes/astresk-sep.pipe';


@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,BorderImageDirective,AstreskSepPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  totalOrderPrice:number=0;
  selectedCatId:number=1;
  products: Iproduct[];
  categories:ICategory[]

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'product1',
        price: 100,
        quantity: 10,
        imgUrl:
          'https://fastly.picsum.photos/id/509/200/200.jpg?hmac=F3VucjvZ_2eEx_ObPM7NJ_Ymq5jESSGCuXo_8japTZc',
        catId: 1,
      },
      {
        id: 2,
        name: 'product2',
        price: 200,
        quantity: 20,
        imgUrl:
          'https://fastly.picsum.photos/id/509/200/200.jpg?hmac=F3VucjvZ_2eEx_ObPM7NJ_Ymq5jESSGCuXo_8japTZc',
        catId: 2,
      },
      {
        id: 3,
        name: 'product3',
        price: 300,
        quantity: 30,
        imgUrl:
          'https://fastly.picsum.photos/id/509/200/200.jpg?hmac=F3VucjvZ_2eEx_ObPM7NJ_Ymq5jESSGCuXo_8japTZc',
        catId: 3,
      },
      {
        id: 4,
        name: 'product4',
        price: 400,
        quantity: 40,
        imgUrl:
          'https://fastly.picsum.photos/id/509/200/200.jpg?hmac=F3VucjvZ_2eEx_ObPM7NJ_Ymq5jESSGCuXo_8japTZc',
        catId: 1,
      },
      {
        id: 5,
        name: 'product5',
        price: 500,
        quantity: 50,
        imgUrl:
          'https://fastly.picsum.photos/id/509/200/200.jpg?hmac=F3VucjvZ_2eEx_ObPM7NJ_Ymq5jESSGCuXo_8japTZc',
        catId: 2,
      },
      {
        id: 6,
        name: 'product6',
        price: 600,
        quantity: 60,
        imgUrl:
          'https://fastly.picsum.photos/id/509/200/200.jpg?hmac=F3VucjvZ_2eEx_ObPM7NJ_Ymq5jESSGCuXo_8japTZc',
        catId: 3,
      },
      {
        id: 7,
        name: 'product7',
        price: 700,
        quantity: 70,
        imgUrl:
          'https://fastly.picsum.photos/id/509/200/200.jpg?hmac=F3VucjvZ_2eEx_ObPM7NJ_Ymq5jESSGCuXo_8japTZc',
        catId: 3,
      },
      {
        id: 8,
        name: 'product8',
        price: 800,
        quantity: 80,
        imgUrl:
          'https://fastly.picsum.photos/id/509/200/200.jpg?hmac=F3VucjvZ_2eEx_ObPM7NJ_Ymq5jESSGCuXo_8japTZc',
        catId: 3,
      },
      {
        id: 9,
        name: 'product9',
        price: 900,
        quantity: 90,
        imgUrl:
          'https://fastly.picsum.photos/id/509/200/200.jpg?hmac=F3VucjvZ_2eEx_ObPM7NJ_Ymq5jESSGCuXo_8japTZc',
        catId: 3,
      },
    ];

    this.categories=[
      {id:1,name:'mobile'},
      {id:2,name:'laptop'},
      {id:3,name:'tablet'},
    ]
  }

  buy(Price:number,count:string){
    this.totalOrderPrice=Price*+count
    // this.totalOrderPrice=Price*Number(count)
    // this.totalOrderPrice=Price*parseInt(count)
  }
////track all element element by ellement if any change in unique one fix ut onbly not all collection
  trackby(index:number,prd:Iproduct){
    return index;
  }
}
