import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BackersHeaders {
  constructor (
   
  ) {}
    setHeaders(type: string) {
        let headerObject = new HttpHeaders().set('Content-Type', 'application/json');
        headerObject = headerObject.append('Authorization', 'basic user:password');
        headerObject = headerObject.append('Authorization-Type', 'Preemptive');
        headerObject = headerObject.append('Access-Control-Allow-Headers', 'Content-Type');
        headerObject = headerObject.append('Access-Control-Allow-Methods', type);
        headerObject = headerObject.append('Access-Control-Allow-Origin', '*');
        return { headers: headerObject };
    }


    setTokenHeaders(type: string) {
        // const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        let headerObject = new HttpHeaders();
        headerObject = headerObject.append('Content-Type', 'application/json');
        // headerObject = headerObject.append('Authorization', 'basic user:password');
        headerObject = headerObject.append('Authorization-Type', 'Preemptive');
        headerObject = headerObject.append('Access-Control-Allow-Headers', 'Content-Type');
        headerObject = headerObject.append('Access-Control-Allow-Methods', type);
        // headerObject = headerObject.append('Access-Control-Allow-Origin', '*');
        // if (!!currentUser && !!currentUser.token) {
        //     headerObject = headerObject.append('AuthToken', currentUser.token);
        // }
        return { headers: headerObject };
    }
}
