import { Component, EventEmitter, Output } from '@angular/core';
import { FilingTypes } from '../../constants/filing-types.constants';
import { InputDetailPage } from '../../models/input-detail-page.model';
import { FilingType } from '../../models/filing-type.model';
import { Month } from '../../models/month.model';
import { Year } from '../../models/year.model';
import { PenaltyRates } from '../../constants/penalty-rates.constants';
import { SurchargeRates } from '../../constants/surchargerate-rates.constants';
import { TaxRates } from '../../constants/tax-rates.constants';
import { Months } from '../../constants/months.constants';
import { Years } from '../../constants/years.constants';

@Component({
  selector: 'app-input-detail-page',
  templateUrl: './input-detail-page.component.html',
  styleUrls: ['./input-detail-page.component.scss'],
})
export class InputDetailPageComponent {
  public filingTypes = FilingTypes.ALL;
  public additionalFilingType: string = FilingTypes.Additional_Filing_VALUE;
  public months = Months.ALL;
  public years = Years.generateAll(2020, new Date().getFullYear());
  public taxRate7Percent = TaxRates.RATE_7_PERCENT;
  public surchargeRate10Percent = SurchargeRates.RATE_10_PERCENT;
  public penaltyRate200PerUnit = PenaltyRates.PENALTY_RATE_200_PER_UNIT;

  public filingType!: FilingType;
  public month!: Month;
  public year!: Year;
  public saleAmount!: number | null;
  public taxAmount!: number | null;
  public surcharge!: number | null;
  public penalty!: number;
  public totalAmount!: number;

  public isTaxAmountWithinRange!: boolean;
  public isFormValid!: boolean;

  inputDetailPage: InputDetailPage | null = null;

  @Output() getInputDetailPage = new EventEmitter<InputDetailPage | null>();

  public setFilingType(filingType: FilingType): void {
    this.filingType = filingType;

    this.setIsFormValid();
    this.emitInputDetailPage(this.generateInputDetailPage(this.isFormValid));
  }

  public setMonth(month: Month): void {
    this.month = month;

    this.setIsFormValid();
    this.emitInputDetailPage(this.generateInputDetailPage(this.isFormValid));
  }

  public setYear(year: Year): void {
    this.year = year;

    this.setIsFormValid();
    this.emitInputDetailPage(this.generateInputDetailPage(this.isFormValid));
  }

  public setSaleAmount(saleAmount: number): void {
    this.saleAmount = saleAmount;

    this.setIsFormValid();
    this.emitInputDetailPage(this.generateInputDetailPage(this.isFormValid));
  }

  public setTaxAmount(taxAmount: number | null): void {
    this.taxAmount = taxAmount;

    this.setIsFormValid();
    this.emitInputDetailPage(this.generateInputDetailPage(this.isFormValid));
  }

  public setIsTaxAmountWithinRange(isTaxAmountWithinRange: boolean): void {
    this.isTaxAmountWithinRange = isTaxAmountWithinRange;

    this.setIsFormValid();
    this.emitInputDetailPage(this.generateInputDetailPage(this.isFormValid));
  }

  public setSurcharge(surcharge: number | null): void {
    this.surcharge = surcharge;

    this.setIsFormValid();
    this.emitInputDetailPage(this.generateInputDetailPage(this.isFormValid));
  }

  public setPenalty(penalty: number): void {
    this.penalty = penalty;

    this.setIsFormValid();
    this.emitInputDetailPage(this.generateInputDetailPage(this.isFormValid));
  }

  public setTotalAmount(totalAmount: number): void {
    this.totalAmount = totalAmount;

    this.setIsFormValid();
    this.emitInputDetailPage(this.generateInputDetailPage(this.isFormValid));
  }

  public generateInputDetailPage(isFormValid: boolean): InputDetailPage | null {

    if (!isFormValid) return null;


    let result = null;
    if (this.filingType.value === FilingTypes.Ordinary_Filing_VALUE) {
      result = new InputDetailPage(
        this.filingType,
        this.month,
        this.year,
        this.saleAmount!,
        this.taxAmount!
      );
    } else if (this.filingType.value === FilingTypes.Additional_Filing_VALUE) {
      result = new InputDetailPage(
        this.filingType,
        this.month,
        this.year,
        this.saleAmount!,
        this.taxAmount!,
        this.surcharge!,
        this.penalty,
        this.totalAmount
      );
    }

    return result;
  }

  public generateIsFormValid(): boolean {
    const isFilingTypeValid = this.filingType !== undefined && this.filingType !== null;
    const isMonthValid = this.month !== undefined && this.month !== null;
    const isYearValid = this.year !== undefined && this.year !== null;
    const isSaleAmountValid = this.saleAmount !== undefined && this.saleAmount !== null;
    const isTaxAmountValid = this.taxAmount !== undefined && this.taxAmount !== null && this.isTaxAmountWithinRange;

    return (
      isFilingTypeValid &&
      isMonthValid &&
      isYearValid &&
      isSaleAmountValid &&
      isTaxAmountValid
    );
  }

  public setIsFormValid(): void {
    const isFilingTypeValid = this.filingType !== undefined && this.filingType !== null;
    const isMonthValid = this.month !== undefined && this.month !== null;
    const isYearValid = this.year !== undefined && this.year !== null;
    const isSaleAmountValid = this.saleAmount !== undefined && this.saleAmount !== null;
    const isTaxAmountValid = this.taxAmount !== undefined && this.taxAmount !== null && this.isTaxAmountWithinRange;

    this.isFormValid = isFilingTypeValid && isMonthValid && isYearValid && isSaleAmountValid && isTaxAmountValid;
  }

  public emitInputDetailPage(inputDetailPage: InputDetailPage | null): void {
    this.getInputDetailPage.emit(inputDetailPage);
  }
}
