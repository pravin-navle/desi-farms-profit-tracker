import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { RouterModule, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
  chart = [];
  optionsList = [
    {id: 1,  name : "Java"},
    {id: 2,  name : "C"},
    {id: 3,  name : "C++"},
    {id: 4,  name : "AngularJs"},
    {id: 5,  name : "JavaScript"}
  ];
  
  info:any= {};
  constructor(private api : ApiService, private router:Router) { }
  total:any = 0;
  plot(info){
    this.api
    .plot(info)
    .subscribe( res => {
      console.log(res);
      let bi = res['list'].map(res => res.bi);
    
      let milk = res['list'].map(res => res.milk);
      let ice = res['list'].map(res => res.ice);
      let date = res['list'].map(res => res.date);
      let total = res['list'].map(res => res.tot);
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: date,
          datasets: [
            { 
              label:'Milk',
              data: milk,
              backgroundColor:"#3cba9f",
              borderColor: "#3cba9f",
              fill: false
             
            },
            { label:'Ice-Cream',
              data: ice,
              backgroundColor:"#ff0000",
              borderColor: "#ff0000",
              fill: false
            },
            { label:'Bi-Products',
              data: bi,
              backgroundColor:"#0000ff",
              borderColor: "#0000ff",
              fill: false
            },
            { label:'Total Profit',
            data: total,
            backgroundColor:"#000",
            borderColor: "#000",
            fill: false
          },
          ]
        },
        options: {
          legend: {
            display: true
          },
          
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Date',
                fontSize : 30
              }
              
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Profit in Rs',
                fontSize : 30
              }
            }],
          }
        }
      });
     
      console.log(bi);
      console.log(date);
    });
  }

  ngOnInit() {
    
}

}
