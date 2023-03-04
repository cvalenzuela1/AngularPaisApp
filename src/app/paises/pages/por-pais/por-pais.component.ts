import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})

export class PorPaisComponent {
  
  termino: string = "";
  isError: boolean = false;
  paises : Country[] = [];

  paisesSugeridos: Country[] = [];

  constructor( private paisService: PaisesService ) { }

  buscar( termino: string ): void {

    this.isError = false;
    this.termino = termino;

    this.paisService.buscarPais( this.termino )
      .subscribe( resp => {
        this.paises = resp;
      }, (err) => {
        this.isError = true;
        this.paises = [];
      });
  }

  sugerencias( termino: string ): void {
    this.isError = false;

    this.paisService.buscarPais( termino )
      .subscribe( paises => this.paisesSugeridos = paises.splice(0,3),
      (err) => this.paisesSugeridos = []
    );
  }

}
