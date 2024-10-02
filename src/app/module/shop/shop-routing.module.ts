import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopItemComponent } from './shop-item/shop-item.component';

const routes: Routes = [
  {path:'',component:ShopListComponent},
  {path:'item/:id',component:ShopItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
