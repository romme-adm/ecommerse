import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./view-main/view-main.module')
    .then(m => m.ViewMainModule),
  },
  {
    path: 'detalle_de_producto',
    loadChildren: () => import('./ecommerse/ecommerse.module')
    .then(m => m.EcommerseModule),
  },
  {
    path: '',
    loadChildren: () => import('./view-main/view-main.module')
    .then(m => m.ViewMainModule),
  }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }