import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Surcharge } from '../../models/surcharge.model';
import { Utils } from '../../helpers/utils';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.scss']
})
export class SurchargeComponent implements OnChanges {

  public surcharge!: number | null;

  @Input() taxAmount!: number | null;
  @Input() surchargeRate!: number;
  @Input() roundedBy!: number;

  @Output() getSurcharge = new EventEmitter<number | null>();
  
  ngOnChanges(changes: SimpleChanges): void {

    let surcharge = null;
    
    if (changes.taxAmount.currentValue > 0) {
      const taxAmountResult = new Surcharge(
        changes.taxAmount.currentValue,
        this.surchargeRate,
        this.roundedBy,
        new Utils()
      );

      surcharge = taxAmountResult.total;
    }
    
    this.setSurcharge(surcharge);
    this.emitSurcharge(surcharge);
  }

  private setSurcharge(surcharge: number | null): void {
    this.surcharge = surcharge;
  }

  public emitSurcharge(surcharge: number | null): void {
    this.getSurcharge.emit(surcharge);
  }

}
