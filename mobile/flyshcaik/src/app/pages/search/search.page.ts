import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  books:any;
  books$:any;
  constructor(public http:HttpService) { }

  ngOnInit() {
    this.http.viewAllBooks().subscribe(http=>{
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

}
