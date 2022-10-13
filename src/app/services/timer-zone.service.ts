import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class TimerZoneService {

  constructor(private http: HttpClient) { }

  public getTimeZone(payload: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    return this.http.post(`https://oracle.garrysmod.com.br/https://tradertimerzone.com/handle.php`, payload, { headers, responseType: 'text' }).toPromise();
  }

  public minify(payload: any){
    let data = qs.stringify({
      'code': payload
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post(`https://oracle.garrysmod.com.br/https://htmlcompressor.com/compress`, data, { headers, responseType: 'text' }).toPromise();
  }
}
