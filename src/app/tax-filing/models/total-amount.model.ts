export class TotalAmount {

    public readonly total: number;

    constructor(
        taxAmount: number,
        surcharge: number,
        penalty: number
    ) {
        this.total = this.calculateTotalAmount(taxAmount, surcharge, penalty);
    }

    public calculateTotalAmount(
        taxAmount: number,
        surcharge: number,
        penalty: number
    ): number {
        return taxAmount + surcharge + penalty;
    }


}
