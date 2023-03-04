import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {


  regiones: string[] = [
    "EU",
    "EFTA",
    "CARICOM",
    "PA",
    "AU",
    "USAN",
    "EEU",
    "AL",
    "ASEAN",
    "CAIS",
    "CEFTA",
    "NAFTA",
    "SAARC"
  ];
  regionActiva: string = "";  
  paises: Country[] = [];

  constructor( private paisesService: PaisesService ) { }

  activarRegion(region: string) {
    this.regionActiva = region;

    this.paisesService.verRegionalBloc(this.regionActiva)
      .subscribe( region => {
        console.log(region);
        this.paises = region;
      });
  }
}