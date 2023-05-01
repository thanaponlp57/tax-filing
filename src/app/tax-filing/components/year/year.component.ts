import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Year } from '../../models/year.model';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent  implements OnInit{

  public selectedYear!: Year | null;

  @Output() getYear = new EventEmitter<Year>();
  @Input()  years!: Year[]; 

  ngOnInit(): void {
    const years = this.years;

    this.setYears(years);
  }

  private setYears(years: Year[]): void {
    this.years = years;
  }

  public setYear(year: Year): void {
    this.selectedYear = year;
  }


  public emitYear(month: Year): void {
    this.getYear.emit(month);
  }

}