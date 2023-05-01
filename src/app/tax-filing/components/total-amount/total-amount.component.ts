import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TotalAmount } from '../../models/total-amount.model';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.scss']
})
export class TotalAmountComponent implements OnChanges {

  public totalAmount!: number;

  @Input() taxAmount!: number | null;
  @Input() surcharge!: number | null;
  @Input() penalty!: number;

  @Output() getTotalAmount = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {

    let taxAmount = 0;
    if (changes.taxAmount?.currentValue > 0) {
      taxAmount = changes.taxAmount.currentValue;
    }

    let surcharge = 0;
    if (changes.surcharge?.currentValue > 0) {
      surcharge = changes.surcharge.currentValue;
    }

    const totalAmount = new TotalAmount(taxAmount, surcharge, this.penalty);
    this.setTotalAmount(totalAmount.total);
    this.emitTotalAmount(totalAmount.total);
  }

  setTotalAmount(totalAmount: number): void {
    this.totalAmount = totalAmount;
  }

  public emitTotalAmount(totalAmount: number): void {
    this.getTotalAmount.emit(totalAmount);
  }


}
