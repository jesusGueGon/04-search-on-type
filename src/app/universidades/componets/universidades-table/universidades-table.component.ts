import { Component, Input } from '@angular/core';
import { Universidad } from '../../interfaces/universidad';

@Component({
  selector: 'app-universidades-table',
  templateUrl: './universidades-table.component.html',
  styleUrls: ['./universidades-table.component.css']
})
export class UniversidadesTableComponent {

  @Input()
  public universities: Universidad[] = [];



}
