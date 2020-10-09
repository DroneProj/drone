import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpService} from '../../services/http.service';
import * as _ from 'lodash' ;
import { NavController } from '@ionic/angular';
import {CartService} from '../../services/cart.service';






@Component({
  selector: 'app-field',
  templateUrl: './field.page.html',
  styleUrls: ['./field.page.scss'],
})

export class FieldPage implements OnInit {

  
  field;
  books:any;
  books$:any;
  cart = [];
  items = [];

  constructor(public route: ActivatedRoute,public http:HttpService,public navCtrl:NavController,public cartservice:CartService) 
  {
    this.field = this.route.snapshot.paramMap.get('field');
  }

  ngOnInit() {
    this.cart = this.cartservice.getCart();
    this.items = this.cartservice.getProducts();
    this.http.viewbooksbyfield(this.field).subscribe(http=>{
      this.books$ = http;
    })

  }

  filterJsonData(ev:any)
  {
    // this.initializeJsonData();
    const val= ev.target.value;
    if(val && val.trim() != '')
    {
      this.books$ = this.books$.filter((item)=>{
        return (item.author.toLowerCase().indexOf(val.toLowerCase())> -1 || item.booktitle.toLowerCase().indexOf(val.toLowerCase())> -1)
      })
    }
  }

  refresh()
  {
    this.ngOnInit();
  }

  addToCart(book)
  {
    this.cartservice.addProduct(book);
  }

  openCart()
  {
    this.navCtrl.navigateForward('/cart');
  }

  clearCart()
  {
    this.cartservice.getCart().length = 0;
  }

}
