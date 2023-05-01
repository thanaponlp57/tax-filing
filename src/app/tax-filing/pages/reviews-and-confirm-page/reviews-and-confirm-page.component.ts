import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputDetailPage } from '../../models/input-detail-page.model';
import { FilingTypes } from '../../constants/filing-types.constants';
import { TaxData } from '../../models/tax-data.model';

@Component({
  selector: 'app-reviews-and-confirm-page',
  templateUrl: './reviews-and-confirm-page.component.html',
  styleUrls: ['./reviews-and-confirm-page.component.scss']
})
export class ReviewsAndConfirmPageComponent implements OnInit {

  public additionalFilingType: string = FilingTypes.Additional_Filing_VALUE;
  public taxData!: TaxData;
  
  @Input() inputDetailPage!: InputDetailPage | null;
  @Output() getTaxData = new EventEmitter<TaxData>();

  constructor() { }

  ngOnInit(): void {
    if (this.inputDetailPage !== null) {

      const taxData = new TaxData(
        this.inputDetailPage.filingType.value,
        this.inputDetailPage.month.value,
        this.inputDetailPage.year.value,
        this.inputDetailPage.saleAmount,
        this.inputDetailPage.taxAmount,
        this.inputDetailPage.surcharge,
        this.inputDetailPage.penalty,
        this.inputDetailPage.totalAmount,
      )

      this.setTaxData(taxData);
      this.emitTaxData(taxData)
    }
  }

  setTaxData(taxData: TaxData): void {
    this.taxData = taxData;
  }

  emitTaxData(taxData: TaxData): void {
    this.getTaxData.emit(taxData);
  }

}
