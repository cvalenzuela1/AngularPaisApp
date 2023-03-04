import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs";

import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit{

  pais!: Country;

  constructor 
  ( 
    private activatedRoute: ActivatedRoute, 
    private paisesService: PaisesService,
    
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisesService.verPais(id)),
        tap(console.log)
      )
      .subscribe( (pais) => {
        this.pais = pais[0];
        console.log(this.pais);
      });
  }
}
