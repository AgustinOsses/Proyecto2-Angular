import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../servicios/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  heroe:Heroe[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesSerive : HeroesService 
    ){ 
    this.activatedRoute.params.subscribe(params =>{
      this.heroe = this._heroesSerive.getHeroe(params['id']);
    });

  }
  ngOnInit(): void {
  }

}