import { Component } from '@angular/core';
import { Universidad } from '../../interfaces/universidad';
import { UniversidadService } from '../../services/universidad.service';

@Component({
  selector: 'app-by-united-kingdom',
  templateUrl: './by-united-kingdom.component.html',
  styles: []
})
export class ByUnitedKingdomComponent {

  public universidades: Universidad[] = [];
  public initialValue: string = '';

  constructor(private universidadService: UniversidadService){}

  ngOnInit(): void {
    this.universidadService.searchByUnitedKingdom('a').subscribe((data) => {
      this.universidades = data;
      console.log(this.universidades);
    });
  }

}
