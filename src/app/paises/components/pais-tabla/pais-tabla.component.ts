import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {

  @Input() paises: Country[] = [];
  @Input() version: string = "";

  constructor() { }

  ngOnInit() {
  }

}
