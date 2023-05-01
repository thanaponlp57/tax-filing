import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaxFilingComponent } from './tax-filing/tax-filing.component';
import { FilingTypeComponent } from './tax-filing/components/filing-type/filing-type.component';
import { FormsModule } from '@angular/forms';
import { MonthComponent } from './tax-filing/components/month/month.component';
import { YearComponent } from './tax-filing/components/year/year.component';
import { SaleAmountComponent } from './tax-filing/components/sale-amount/sale-amount.component';
import { TaxAmountComponent } from './tax-filing/components/tax-amount/tax-amount.component';
import { SurchargeComponent } from './tax-filing/components/surcharge/surcharge.component';
import { PenaltyComponent } from './tax-filing/components/penalty/penalty.component';
import { TotalAmountComponent } from './tax-filing/components/total-amount/total-amount.component';
import { InputDetailPageComponent } from './tax-filing/pages/input-detail-page/input-detail-page.component';
import { ReviewsAndConfirmPageComponent } from './tax-filing/pages/reviews-and-confirm-page/reviews-and-confirm-page.component';

import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
  declarations: [
    AppComponent,
    TaxFilingComponent,
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent,

    InputDetailPageComponent,
    ReviewsAndConfirmPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxCurrencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
