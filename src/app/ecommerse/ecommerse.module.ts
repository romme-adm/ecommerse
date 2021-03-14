import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {EcommerseRoutingModule} from './ecommerse.routing.module';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    EcommerseRoutingModule,
  ]
})
export class EcommerseModule { }
