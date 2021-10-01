import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bicycle } from '../models/bicycle';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptionsUsingUrlEncoded = {
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

  createBicycle(bicycle: Bicycle): Observable<Bicycle>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("model", bicycle.model);
    bodyEncoded.append("year", bicycle.year.toString());
    const body = bodyEncoded.toString();

    console.log("createBicycle")
    console.log(JSON.stringify(bicycle))
    return this.httpClient.post<Bicycle>(this.endpoint, body, httpOptionsUsingUrlEncoded);
  }

  createBicycleUsingJSON(bicycle: Bicycle): Observable<Bicycle>{
    return this.httpClient.post<Bicycle>(this.endpoint, JSON.stringify(bicycle), httpOptions);
  }

  deleteBicycle(idBicycle: number): Observable<Bicycle>{
    return this.httpClient.delete<Bicycle>(this.endpoint + "/" + idBicycle);
  }
}
