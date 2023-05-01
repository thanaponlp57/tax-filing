export class Utils {

    roundBy(number: number, roundedBy: number): number {
        const factor = Math.pow(10, roundedBy);
        return Math.round(number * factor) / factor;
    }
}


