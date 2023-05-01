import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TaxAmount } from '../../models/tax-amount.model';
import { Utils } from '../../helpers/utils';
import { TaxRates } from '../../constants/tax-rates.constants';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.scss']
})
export class TaxAmountComponent implements OnChanges {

  public originalTaxAmount!: number | null;
  public taxAmount!: number | null;

  @Input() saleAmount!: number | null;
  @Input() taxRate!: number;
  @Input() roundedBy!: number;

  @Output() getTaxAmount = new EventEmitter<number | null>();
  @Output() getIsTaxAmountWithinRange = new EventEmitter<boolean>();
  

  ngOnChanges(changes: SimpleChanges): void {

    let taxAmount = null;
    
    if (changes.saleAmount.currentValue > 0) {
      const taxAmountResult = new TaxAmount(
        changes.saleAmount.currentValue,
        this.taxRate, 
        this.roundedBy,
        new Utils()
      );

      taxAmount = taxAmountResult.total;
    }
    
    this.setOriginalTaxAmount(taxAmount);
    this.setTaxAmount(taxAmount);
    this.emitTaxAmount(taxAmount);
    this.emitIsTaxAmountWithinRange(this.generateIsTaxAmountWithinRange(taxAmount, taxAmount))
  }

  private setOriginalTaxAmount(originalTaxAmount: number | null): void {
    this.originalTaxAmount = originalTaxAmount;
  }

  private setTaxAmount(taxAmount: number | null): void {
    this.taxAmount = taxAmount;
  }

  public generateIsTaxAmountWithinRange(
    originalTaxAmount: number | null, 
    taxAmount: number | null,
    taxRate: number = TaxRates.RATE_20_PER_UNIT
  ): boolean {

    
    if (taxAmount !== null && originalTaxAmount !== null) {
      const diff = Math.abs(originalTaxAmount - taxAmount);
  
      return diff <= taxRate;
    }

    return originalTaxAmount === null && taxAmount === null;
  }

  public emitTaxAmount(taxAmount: number | null): void {
    this.getTaxAmount.emit(taxAmount);
  }

  public emitIsTaxAmountWithinRange(status: boolean): void {
    this.getIsTaxAmountWithinRange.emit(status);
  }

}