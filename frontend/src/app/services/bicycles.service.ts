import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bicycle } from '../models/bicycle';

@Injectable({
  providedIn: 'root'
})
export class BicyclesService {

  endpoint: string = "http://localhost:8080/bicycles";

  constructor(private httpClient: HttpClient) { }

  getBicycles(): Observable<Bicycle[]>{
    return this.httpClient.get<Bicycle[]>(this.endpoint);
  }
}
