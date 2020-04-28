import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HeroesService} from '../../../servicios/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  heroe:any[] =[];

  constructor( private _heroesService:HeroesService ,
               private router:Router) 
  { }

  ngOnInit(): void {
  }

buscarHeroe(termino:string){
  this.router.navigate(['/buscar',termino]);
}


}
