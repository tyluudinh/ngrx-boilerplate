import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  private urlRoot = 'https://5e5f2b13b5c43c0014ef9612.mockapi.io/ngrx';

  constructor(
    private http?: HttpClient
  ) { }
  get(path) {
    return this.http.get(`${this.urlRoot}${path}`);
  }
}
