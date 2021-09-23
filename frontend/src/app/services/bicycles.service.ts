import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bicycle } from '../models/bicycle';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BicyclesService {

  endpoint: string = "http://localhost:8080/bicycles";

  constructor(private httpClient: HttpClient) { }

  getBicycles(): Observable<Bicycle[]>{
    return this.httpClient.get<Bicycle[]>(this.endpoint);
  }

  getBicycleById(id: number): Observable<Bicycle>{
    return this.httpClient.get<Bicycle>(this.endpoint + "/" + id);
  }

  createBicycle(bicycle: Bicycle){
    console.log("createBicycle")
    console.log(JSON.stringify(bicycle))
    this.httpClient.post<Bicycle>(this.endpoint, JSON.stringify(bicycle), httpOptions);
  }
}
