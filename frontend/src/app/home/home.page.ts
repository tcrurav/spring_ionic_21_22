import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bicycle } from '../models/bicycle';
import { BicyclesService } from '../services/bicycles.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public bikes: Array<Bicycle> = [];
  public myBike: Bicycle;

  constructor(private router: Router, private bicycleService: BicyclesService) {}
  
  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo(){
    this.bicycleService.getBicycles().subscribe((b: Array<Bicycle>) => {
      this.bikes = b;
    })

    this.bicycleService.getBicycleById(3).subscribe( (b: Bicycle) => {
      this.myBike = b;
      console.log("llegó b");
      console.log(b.model)
    });
  }

  goToOtherPage(){
    this.router.navigateByUrl("/other-page");
  }

  addAnotherBicycle(){
    console.log("addAnotherBicycle")
    const bicycle: Bicycle = { id: 0, model: "peperonilla", year: 1976 };
    this.bicycleService.createBicycle(bicycle).subscribe(() => {
      this.loadInfo();
    });
  }

  addAnotherBicycleUsingJSON(){
    console.log("addAnotherBicycleUsingJSON")
    const bicycle: Bicycle = { id: 0, model: "peperonilla", year: 1976 };
    this.bicycleService.createBicycleUsingJSON(bicycle).subscribe(() => {
      this.loadInfo();
    });
  }

  deleteBicycle(idBicycle: number){
    this.bicycleService.deleteBicycle(idBicycle).subscribe(() => {
      this.loadInfo();
    });
  }

}
