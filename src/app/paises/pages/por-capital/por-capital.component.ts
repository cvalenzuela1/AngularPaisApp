import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string = "";
  isError: boolean = false;
  capitales: Country[] = [];
  
  constructor( private paisService: PaisesService ) { }

  buscar( termino: string ): void {

    this.isError = false;
    this.termino = termino;

    this.paisService.buscarCapital( this.termino )
      .subscribe( (resp) => {
        this.capitales = resp;
      }, (err) => {
        this.isError = true;
        this.capitales = [];
      });
  }
}
