import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule)},
  {path: 'shop', loadChildren: () => import('./module/shop/shop.module').then(m => m.ShopModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
