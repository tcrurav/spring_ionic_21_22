import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bicycle } from '../models/bicycle';

const httpOptionsUsingJSON = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
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
    const encodedBody = new URLSearchParams();
    encodedBody.append("model", bicycle.model);
    encodedBody.append("year", bicycle.year.toString());
    const body = encodedBody.toString();

    console.log("createBicycle")
    console.log(JSON.stringify(bicycle))
    this.httpClient.post<Bicycle>(this.endpoint, body, httpOptions).subscribe(() => {
      console.log("volvió")
    });
  }

  createBicycleUsingJson(bicycle: Bicycle){
    const body = JSON.stringify(bicycle);

    console.log("createBicycle")
    console.log(JSON.stringify(bicycle))
    this.httpClient.post(this.endpoint, body, httpOptionsUsingJSON).subscribe(() => {
      console.log("volvió también")
    });
  }
}
