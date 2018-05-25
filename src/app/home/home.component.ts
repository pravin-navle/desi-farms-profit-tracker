import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/interval';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  profit:number =0;
  milk:number =0;
  ice:number =0;
  bi:number =0;
  response = {};
  nowDate = new Date();
  info:any= {
    myDate : this.nowDate.getFullYear()+'-'+ '0'+(this.nowDate.getMonth()+1)+'-'+this.nowDate.getDate(),
    profit1: '',
    profit2: '',
    profit3: '',
    profit4: '',
    profit5:'',
    profit6: '',
    profit7: '',
    profit8 :'',
    profit9 :'',
    profit10 :'',
    profit11:'',
    profit12 : ''
         };
 
  ccow(cgold) {
    this.info.profit1 = cgold * 8 ;
    this.hello();
  }
  cbuf(crbm) {
    this.info.profit2 = crbm * 6 ;
    this.hello();
  }
  cgirc(cgir){
    this.info.profit3= cgir * 15;
    this.hello();
  }
  rcow(rgold) {
    this.info.profit4 = rgold * 4 ;
    this.hello();
  }
  rbuf(rrbm) {
    this.info.profit5 = rrbm * 3 ;
    this.hello();
  }
  rgirc(rgir){
    this.info.profit6= rgir * 8;
    this.hello();
  }
  koreo(oreo){
    this.info.profit7 = oreo * 10;
    this.hello();
  }
  kchoc(choc){
    this.info.profit8 = choc * 8;
    this.hello();
  }
  kmag(mag){
    this.info.profit9 = mag * 12;
    this.hello();
  }
  lassi(lassi){
    this.info.profit10 = lassi * 11;
    this.hello();
  }
  dahi(dahi){
    this.info.profit11 = dahi * 7;
    this.hello();
  }
  paneer(paneer){
    this.info.profit12 = paneer * 25;
    this.hello();
  }
  hello(){
   this.info.profit = this.info.profit1 + this.info.profit2 + this.info.profit3 + this.info.profit4 + this.info.profit5 + this.info.profit6 + this.info.profit7 + this.info.profit8 + this.info.profit9 + this.info.profit10 + this.info.profit11 + this.info.profit12;
   this.info.milk = this.info.profit1 + this.info.profit2 + this.info.profit3 + this.info.profit4 + this.info.profit5 + this.info.profit6;
   this.info.ice = this.info.profit7 + this.info.profit8 + this.info.profit9;
   this.info.bi = this.info.profit10 + this.info.profit11 + this.info.profit12;
  }
  
  constructor(private api : ApiService, private router:Router) { 
    this.get(this.info);

  }

  submit(info){
    this.api
    .submit(this.info)
    .subscribe( () => {
      this.Dashboard();});
  }
  inc(){
    console.log("hello");
    this.info.cgold= ++this.info.cgold;
    this.ccow(this.info.cgold);
  }
  dec(){
    console.log("hello");
    this.info.cgold= --this.info.cgold;
    this.ccow(this.info.cgold);
  }
  get(info){
    this.api
        .get(info)
        .subscribe( data=> {
         this.response = data;
         console.log(this.response);
         this.info.cgold = this.response[0].cgold;
         this.info.crbm = this.response[0].crbm;
         this.info.cgir = this.response[0].cgir;
         this.info.rgold = this.response[0].rgold;
         this.info.rrbm = this.response[0].rrbm;
         this.info.rgir = this.response[0].rgir;
         this.info.oreo = this.response[0].oreo;
         this.info.choc = this.response[0].choc;
         this.info.mag = this.response[0].mag;
         this.info.lassi = this.response[0].lassi;
         this.info.dahi = this.response[0].dahi;
         this.info.paneer = this.response[0].paneer;
         this.info.profit = this.response[0].profit;
         this.info.milk = this.response[0].milk;
         this.info.ice = this.response[0].ice;
         this.info.bi = this.response[0].bi;
         if(this.response[0]["error"]){
          this.info.cgold = 0;
          this.info.crbm = 0;
          this.info.cgir = 0;
          this.info.rgold = 0;
          this.info.rrbm = 0;
          this.info.rgir = 0;
          this.info.oreo = 0;
          this.info.choc = 0;
          this.info.mag = 0;
          this.info.lassi = 0;
          this.info.dahi = 0;
          this.info.paneer = 0;
         }
         this.ccow(this.info.cgold);
         this.cbuf(this.info.crbm);
         this.cgirc(this.info.cgir);
         this.rcow(this.info.rgold);
         this.rbuf(this.info.rrbm);
         this.rgirc(this.info.rgir);
         this.koreo(this.info.oreo);
         this.kchoc(this.info.choc);
         this.kmag(this.info.mag);
         this.lassi(this.info.lassi);
         this.dahi(this.info.dahi);
         this.paneer(this.info.paneer);
        });
    // console.log("Logged in");
    // this.router.navigate(['/dashboard']);
  }
  
Dashboard(){
  this.router.navigate(['/']);
}


  ngOnInit() {
  }

}
