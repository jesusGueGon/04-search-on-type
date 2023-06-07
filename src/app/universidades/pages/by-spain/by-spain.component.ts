import { Component, OnInit } from '@angular/core';
import { UniversidadService } from '../../services/universidad.service';
import { Universidad } from '../../interfaces/universidad';

@Component({
  selector: 'app-by-spain',
  templateUrl: './by-spain.component.html',
  styles: []
})
export class BySpainComponent implements OnInit{

  public universidades: Universidad[] = [];
  public initialValue: string = '';

  constructor(private universidadService: UniversidadService){}


  ngOnInit(): void {
    this.universidadService.searchBySpain('h').subscribe((data) => {
      this.universidades = data;
      console.log(this.universidades);
    });
  }




}
