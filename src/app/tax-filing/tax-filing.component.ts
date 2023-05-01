import { ChangeDetectorRef, Component } from '@angular/core';
import { InputDetailPage } from './models/input-detail-page.model';
import { TaxData } from './models/tax-data.model';

@Component({
  selector: 'app-tax-filing',
  templateUrl: './tax-filing.component.html',
  styleUrls: ['./tax-filing.component.scss']
})
export class TaxFilingComponent  {

  public currentStep: number = 1;
  public isNextClicked: boolean = false;

  public inputDetailPage!: InputDetailPage | null;
  public taxData!: TaxData;

  constructor(private cd: ChangeDetectorRef) {
   }

  setInputDetailPage(inputDetailPage: InputDetailPage | null): void {
    this.inputDetailPage = inputDetailPage;
  }

  setTaxData(taxData: TaxData): void {
    this.taxData = taxData;
    this.cd.detectChanges();
  } 

  next(inputDetailPage: InputDetailPage | null): void {
    if (inputDetailPage === null) return;

    this.currentStep++;
  }

  back(): void {
    this.currentStep--;

    if (this.currentStep < 1) {
      this.currentStep = 1;
    }
  }

}
