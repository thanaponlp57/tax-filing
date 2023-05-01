import { FilingType } from "../models/filing-type.model"

export class FilingTypes {

    public static readonly Ordinary_Filing_LABEL = 'Ordinary Filing';
    public static readonly Additional_Filing_LABEL = 'Additional Filing';
    
    public static readonly Ordinary_Filing_VALUE = '0';
    public static readonly Additional_Filing_VALUE = '1';

    public static readonly ALL: FilingType[] = [
        new FilingType(FilingTypes.Ordinary_Filing_LABEL, FilingTypes.Ordinary_Filing_VALUE),
        new FilingType(FilingTypes.Additional_Filing_LABEL, FilingTypes.Additional_Filing_VALUE),
    ];

}