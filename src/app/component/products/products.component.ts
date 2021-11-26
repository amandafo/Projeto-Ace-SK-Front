import { CartService } from './../../service/cart.service';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any;
  searchKey: string = "";
  constructor(
    private api : ApiService,
    private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;

      this.productList.forEach((a : any) => {
        Object.assign(a,{quantity:1, total: a.price});
      });
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addToCart(item : any){
    this.cartService.addToCart(item);
  }

}
