import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

    // local storage variable
    userData: any = {};
    history:any;

  constructor(private http:HttpService) 
  
  {
          // get user local storage information
          if (localStorage.getItem('userData') !== undefined) {
            this.userData = JSON.parse(localStorage.getItem('userData'));
          }
  }


  ngOnInit() {
    this.http.viewPastOrder(this.userData.email).subscribe(http=>{
      this.history = http;
    })
  }

  cancelRequest(id)
  {
    this.http.cancelRequest(id).subscribe(http=>{
      this.ngOnInit();
    })
  }

}
