import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Month } from '../../models/month.model';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit{

  public selectedMonth!: Month | null;

  @Output() getMonth = new EventEmitter<Month>();
  @Input()  months!: Month[];
  
  ngOnInit(): void {
    const months = this.months;

    this.setMonths(months);
  }

  private setMonths(months: Month[]): void {
    this.months = months;
  }

  public setMonth(month: Month): void {
    this.selectedMonth = month;
  }


  public emitMonth(month: Month): void {
    this.getMonth.emit(month);
  }

}