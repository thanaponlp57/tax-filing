import { Year } from "../models/year.model";

export class Years {

    public static generateAll(startYear: number, endYear: number) {
        return Array.from({ length: endYear - startYear + 1 }, (_, index) => {
            const year = (startYear + index).toString();

            return new Year(year, year);
        });
    }

}
