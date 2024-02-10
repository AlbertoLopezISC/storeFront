import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';
import { DetailStoreComponent } from './detail-store/detail-store.component';

const routes: Routes = [
  { 
    path: '', component: StoreComponent 
  },
  {
    path: 'detail', component: DetailStoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
