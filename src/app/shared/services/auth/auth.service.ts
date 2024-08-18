import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../../base/env';
import { userData } from '../../interfaces/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private _HttpClient: HttpClient) { }

  sendRegister(userData:userData): Observable<any> { 
    return this._HttpClient.post(`${Environment.baseUrl}/api/v1/auth/signup`, userData)
  }
}
