import { Utils } from '../helpers/utils';

export class Surcharge {
    public readonly total: number | null;

    constructor(
        taxAmount: number,
        surchargeRate: number,
        roundedBy: number,
        utils: Utils
    ) {
        this.total = this.calculateTotalSurcharge(taxAmount, surchargeRate);

        if (roundedBy > 0) {
            this.total = utils.roundBy(this.total, roundedBy);
        }
    }

    public calculateTotalSurcharge(
        taxAmount: number,
        surchargeRate: number
    ): number {
        return taxAmount * surchargeRate;
    }
}
