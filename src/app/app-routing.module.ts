import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'dashboard', loadChildren: () => import ('./features/dashboard/dashboard.module')
          .then(m => m.DashboardModule)
      },
      {
        path: 'rents', loadChildren: () => import ('./features/rents/rents.module')
          .then(m => m.RentsModule)
      },
      {
        path: 'employees', loadChildren: () => import ('./features/employees/employees.module')
          .then(m => m.EmployeesModule)
      },
      {
        path: 'products', loadChildren: () => import ('./features/products/products.module')
          .then(m => m.ProductsModule)
      },
      {
        path: 'settings', loadChildren: () => import ('./features/settings/settings.module')
          .then(m => m.SettingsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
