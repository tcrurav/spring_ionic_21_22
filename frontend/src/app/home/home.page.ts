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

  constructor(private router: Router, private bicycleService: BicyclesService) {}
  
  ngOnInit(): void {
    this.bicycleService.getBicycles().subscribe((b: Array<Bicycle>) => {
      this.bikes = b;
    })
  }

  goToOtherPage(){
    this.router.navigateByUrl("/other-page");
  }

}
