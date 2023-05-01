import { Utils } from '../helpers/utils';

export class TaxAmount {
    public readonly total: number;

    constructor(
        saleAmount: number,
        taxRate: number,
        roundedBy: number,
        utils: Utils
    ) {
        this.total = this.calculateTotalTaxAmount(saleAmount, taxRate);

        if (roundedBy > 0) {
            this.total = utils.roundBy(this.total, roundedBy);
        }
    }

    public calculateTotalTaxAmount(saleAmount: number, taxRate: number): number {
        return saleAmount * taxRate;
    }

}
