import { Month } from "../models/month.model";

export class Months {
    public static readonly January_LABEL = 'January';
    public static readonly February_LABEL = 'February';
    public static readonly March_LABEL = 'March';
    public static readonly April_LABEL = 'April';
    public static readonly May_LABEL = 'May';
    public static readonly June_LABEL = 'June';
    public static readonly July_LABEL = 'July';
    public static readonly August_LABEL = 'August';
    public static readonly September_LABEL = 'September';
    public static readonly October_LABEL = 'October';
    public static readonly November_LABEL = 'November';
    public static readonly December_LABEL = 'December';

    public static readonly January_VALUE = '01';
    public static readonly February_VALUE = '02';
    public static readonly March_VALUE = '03';
    public static readonly April_VALUE = '04';
    public static readonly May_VALUE = '05';
    public static readonly June_VALUE = '06';
    public static readonly July_VALUE = '07';
    public static readonly August_VALUE = '08';
    public static readonly September_VALUE = '09';
    public static readonly October_VALUE = '10';
    public static readonly November_VALUE = '11';
    public static readonly December_VALUE = '12';

    public static ALL: Month[] = [
        new Month(Months.January_LABEL, Months.January_VALUE),
        new Month(Months.February_LABEL, Months.February_VALUE),
        new Month(Months.March_LABEL, Months.March_VALUE),
        new Month(Months.April_LABEL, Months.April_VALUE),
        new Month(Months.May_LABEL, Months.May_VALUE),
        new Month(Months.June_LABEL, Months.June_VALUE),
        new Month(Months.July_LABEL, Months.July_VALUE),
        new Month(Months.August_LABEL, Months.August_VALUE),
        new Month(Months.September_LABEL, Months.September_VALUE),
        new Month(Months.October_LABEL, Months.October_VALUE),
        new Month(Months.November_LABEL, Months.November_VALUE),
        new Month(Months.December_LABEL, Months.December_VALUE),
    ];
}
