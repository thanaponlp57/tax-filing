export class TaxData {

  public readonly filingType: string;
  public readonly month: string;
  public readonly year: string;
  public readonly saleAmount: number;
  public readonly taxAmount: number;
  public readonly surcharge?: number;
  public readonly penalty?: number;
  public readonly totalAmount?: number;

  constructor(
    filingType: string,
    month: string,
    year: string,
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
