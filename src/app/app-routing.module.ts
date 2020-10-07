import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { LoggedGuard } from './core/auth/guards/logged.guard';
import { HeaderComponent } from './core/layout/header/header.component';
import { LoginComponent } from './core/layout/login/login.component';
import { SidenavComponent } from './core/layout/sidenav/sidenav.component';
import { FeaturesComponent } from './features/features.component';

const CENTER_VIEW_ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  {
    path: '',
    children: [
      {
        path: 'dashboard', loadChildren: () => import ('./features/dashboard/dashboard.module')
          .then(m => m.DashboardModule),
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
    ],
    canActivate: [AuthGuard]
  }
];

const LAYOUT_ROUTES: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full', canActivate: [LoggedGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoggedGuard] },
  {
    path: '', component: FeaturesComponent,
    children: [
      { path: '', component: HeaderComponent, outlet: 'header', canActivate: [AuthGuard] },
      { path: '', component: SidenavComponent, outlet: 'sidenav', canActivate: [AuthGuard] },
      { path: '', children: [...CENTER_VIEW_ROUTES], canActivate: [AuthGuard] }
    ]
  },
  { path: '**', component: LoginComponent, canActivate: [LoggedGuard] }
];

const APP_ROUTES: Routes = [
  ...LAYOUT_ROUTES
];






@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES,
    { useHash: false , onSameUrlNavigation: 'reload' }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
