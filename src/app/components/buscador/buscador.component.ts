import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {HeroesService, Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroArr:Heroe[]=[];

  constructor(private activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      console.log(params['termino']);
      // this.heroArr = this._heroesService.buscarHeroes(params['termino'])
      console.log(this.heroArr);

    });
  }

}
