import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { ICategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [FormsModule,ProductsComponent,CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  selectedCatId:number=1;
  categories:ICategory[];
  TotalOrderPrice:number=0


  constructor() {
    this.categories=[
      {id:1,name:'mobile'},
      {id:2,name:'laptop'},
      {id:3,name:'tablet'},
    ];
  }
viewTotalPrice(TOP:number){
this.TotalOrderPrice=TOP
}
}
