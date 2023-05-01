import { FilingType } from "./filing-type.model";
import { Month } from "./month.model";
import { Year } from "./year.model";

export class InputDetailPage {

  public readonly filingType: FilingType;
  public readonly month: Month;
  public readonly year: Year;
  public readonly saleAmount: number;
  public readonly taxAmount: number;
  public readonly surcharge?: number;
  public readonly penalty?: number;
  public readonly totalAmount?: number;

  constructor(
    filingType: FilingType,
    month: Month,
    year: Year,
    saleAmount: number,
    taxAmount: number,
    surcharge?: number,
    penalty?: number,
    totalAmount?: number
  ) {
    this.filingType = filingType;
    this.month = month;
    this.year = year;
    this.saleAmount = saleAmount;
    this.taxAmount = taxAmount;
    this.surcharge = surcharge;
    this.penalty = penalty;
    this.totalAmount = totalAmount;
  }

}
