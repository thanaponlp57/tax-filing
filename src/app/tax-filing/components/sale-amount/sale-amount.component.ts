import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.scss']
})
export class SaleAmountComponent{

  public saleAmount!: number;

  @Output() getSaleAmount = new EventEmitter<number>();

  public emitSaleAmount(saleAmount: number): void {
    this.getSaleAmount.emit(saleAmount);
  }

}
