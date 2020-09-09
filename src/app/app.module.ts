import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { BudgetGeneratorModule } from './functions/views/budget-generator/budget-generator.module'
import { CrudModule } from './functions/views/crud/crud.module'
import { CustomersModule } from './functions/views/customers/customers.module'
import { FinancialModule } from './functions/views/financial/financial.module'
import { MarketingModule } from './functions/views/marketing/marketing.module'
import { StockModule } from './functions/views/stock/stock.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainComponent } from './template/main/main.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BudgetGeneratorModule,
    CrudModule,
    CustomersModule,
    FinancialModule,
    MarketingModule,
    StockModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
