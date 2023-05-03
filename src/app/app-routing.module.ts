import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthComponent } from './authentications/admin-auth/admin-auth.component';
import { NotFoundComponent } from './authentications/not-found/not-found.component';
import { AuhGuardGuard } from './authentications/guard/auh-guard.guard';
import { CarousalComponent } from './reusable-components/carousal/carousal.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AdminAuthComponent },
  {path: 'admin', canActivate:[AuhGuardGuard], loadChildren: () => import('./pages/admin-dashboard/admin-dashboard.module').then((m)=> m.AdminDashboardModule) },
  { path: '**', component: NotFoundComponent },
  { path: 'carousal', component: CarousalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
