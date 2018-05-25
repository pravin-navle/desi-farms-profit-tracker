import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ApiService {

  constructor(private _http:Http) { }
  submit(info){
    return this._http.post("http://localhost/desi/insert.php/",info)
    .map(res=>res.json());
    
  }
  get(info){
    return this._http.post("http://localhost/desi/get.php/",info)
      .map(res=>res.json());
  }
  plot(info){
    return this._http.post("http://localhost/desi/chart.php/",info)
      .map(res=>res.json());
  }

}
