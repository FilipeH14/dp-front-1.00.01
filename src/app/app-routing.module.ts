import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'

const routes: Routes = [
  /*{ path: '' , component: AppComponent },*/
  {
    path : 'crud',
    loadChildren : () => import('./functions/views/crud/crud.module')
        .then(m => m.CrudModule)
  },
  {
    path : 'budget_generator',
    loadChildren : () => import('./functions/views/budget-generator/budget-generator.module')
        .then(m => m.BudgetGeneratorModule)
  },
  {
    path : 'customers',
    loadChildren : () => import('./functions/views/customers/customers.module')
        .then(m => m.CustomersModule)
  },
  {
    path : 'financial',
    loadChildren : () => import('./functions/views/financial/financial.module')
        .then(m => m.FinancialModule)
  },
  {
    path : 'marketing',
    loadChildren : () => import('./functions/views/marketing/marketing.module')
        .then(m => m.MarketingModule)
  },
  {
    path : 'stock',
    loadChildren : () => import('./functions/views/stock/stock.module')
        .then(m => m.StockModule)
  },
  {
    path: '',
    redirectTo: '/crud',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
