import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParmaTableService {

  httpparams3 = new HttpParams()
    .set('count', '5')
    .set('urls', true)
    .set('httpsUrls', true);

  constructor(private http: HttpClient) { }

  LoadParam(strkey: string)
  {
    this.httpparams3.set('count', strkey);
    return this.http
      .get<string[]>(
        'https://shibe.online/api/shibes',
        { params: this.httpparams3 }
      )
  }
}
