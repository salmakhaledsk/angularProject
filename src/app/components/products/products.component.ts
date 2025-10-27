import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/icategory';
import {  FormsModule } from '@angular/forms';
import { BorderImageDirective } from '../../directive/border-image.directive';
import { AstreskSepPipe } from '../../pipes/astresk-sep.pipe';
import { StaticProductsService } from '../services/static-products.service';



@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,BorderImageDirective,AstreskSepPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  totalOrderPrice:number=0;
  filteredProducts:Iproduct[];
  // selectedCatId:number=1;
  products: Iproduct[];
  @Input () receivedSelectedCatId:number=1
  @Output() onTotalPriceChanged:EventEmitter<number>
  

  constructor(private PrdService:StaticProductsService) {

    this.products = this.PrdService.products;

  
    this.filteredProducts=this.products
     this.onTotalPriceChanged=new EventEmitter<number>();

  }

  buy(Price:number,count:string){
    this.totalOrderPrice+=Price*+count
    // this.totalOrderPrice=Price*Number(count)
    // this.totalOrderPrice=Price*parseInt(count)
    this.onTotalPriceChanged.emit(this.totalOrderPrice)
  }
////track all element element by ellement if any change in unique one fix ut onbly not all collection
  trackby(index:number,prd:Iproduct){
    return index;
  }

  // filterProducts(){
  //   this.filteredProducts = this.products.filter((prd) => prd.catId == this.receivedSelectedCatId);
  // }
//   ngOnChanges(){
// this.filterProducts();
    
//   }

  ngOnChanges(){
  this.filteredProducts= this.PrdService.gatproductsByCatId(this.receivedSelectedCatId)
  }
}
