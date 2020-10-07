import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'dashboard', loadChildren: () => import ('./dashboard/dashboard.module')
          .then(m => m.DashboardModule),
      },
      {
        path: 'rents', loadChildren: () => import ('./rents/rents.module')
          .then(m => m.RentsModule)
      },
      {
        path: 'employees', loadChildren: () => import ('./employees/employees.module')
          .then(m => m.EmployeesModule)
      },
      {
        path: 'products', loadChildren: () => import ('./products/products.module')
          .then(m => m.ProductsModule)
      },
      {
        path: 'settings', loadChildren: () => import ('./settings/settings.module')
          .then(m => m.SettingsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
