import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { BackersHeaders } from '../headers/backers.headers';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor
    (
      private http: HttpClient,
      private BackersHeaders: BackersHeaders
    ) {}
  insertUserData(Payload): Observable<any>{
    const APIEndPoint = `${environment.API_URL}/user/add`;
    return this.http.post(APIEndPoint, Payload, this.BackersHeaders.setTokenHeaders('POST')); 
  }

  userLogin(Payload){
    const APIEndPoint = `${environment.API_URL}/user/login`;
    return this.http.post(APIEndPoint, Payload, this.BackersHeaders.setTokenHeaders('POST')); 
  }
}
