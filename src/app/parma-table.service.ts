import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParmaTableService {

  httpparams3 = new HttpParams()
    .set('count', 5)
    .set('urls', true)
    .set('httpsUrls', true);

  constructor(private http: HttpClient) { }

  LoadParam(strkey: string)
  {
    console.log('LoadParam:'+strkey);
    console.log(this.httpparams3);

    this.httpparams3 = new HttpParams()
    .set('count', strkey)
    .set('urls', true)
    .set('httpsUrls', true);

    console.log(this.httpparams3);

    return this.http
      .get<string[]>(
        'https://shibe.online/api/shibes',
        { params: this.httpparams3 }
      )
  }
}
