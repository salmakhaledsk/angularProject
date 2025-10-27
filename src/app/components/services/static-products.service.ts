import { Injectable } from '@angular/core';
import { Iproduct } from '../../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
products:Iproduct[]
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
   }
    getAllProducts():Iproduct[]{
      return this.products;
    }
    getProductsById(id:number):Iproduct|null{
   let product= this.products.find((prd)=>prd.id==id)
   
   return product?product:null
    }
    gatproductsByCatId(catId:number):Iproduct[]{
     return  this.products.filter((prd)=>prd.catId==catId)
    }
}
