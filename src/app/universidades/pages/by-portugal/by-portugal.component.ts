import { Component } from '@angular/core';
import { Universidad } from '../../interfaces/universidad';
import { UniversidadService } from '../../services/universidad.service';

@Component({
  selector: 'app-by-portugal',
  templateUrl: './by-portugal.component.html',
  styles: []
})
export class ByPortugalComponent {

  public universidades: Universidad[] = [];
  public initialValue: string = '';

  constructor(private universidadService: UniversidadService){}

  ngOnInit(): void {

  }

  buscarUniPortugal(term: any) {
    console.log('hola');
    console.log(term);
    this.universidadService.searchByPortugal(term).subscribe((data) => {
      this.universidades = data;
      console.log(this.universidades);
    });
  }

}
