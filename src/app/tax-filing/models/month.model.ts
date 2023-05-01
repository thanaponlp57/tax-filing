export class Month {
    public readonly label: string;
    public readonly value: string;
    public readonly isPastMonth: boolean;
  
    constructor(label: string, value: string) {
      this.label = label;
      this.value = value;
      this.isPastMonth = this.getIsPastMonth(parseInt(value), new Date().getMonth());
    }

    private getIsPastMonth(month: number, currentMonth: number): boolean {
        return currentMonth >= month;
    }
    
}
