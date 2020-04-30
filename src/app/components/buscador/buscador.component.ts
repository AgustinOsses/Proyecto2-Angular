import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {HeroesService, Heroe} from '../../servicios/heroes.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
  
  termino:string;

  heroArr:Heroe[]=[];

  constructor(private activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService, private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.termino = (params['termino']);
      this.heroArr = this._heroesService.buscarHeroes(params['termino'])
      console.log(this.heroArr);

    });
  }

  verHeroe(inx:number){
    this.router.navigate(['/heroe',inx]);

  }

}
