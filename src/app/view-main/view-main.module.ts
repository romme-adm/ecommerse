import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ProductCategoriesBarComponent } from './product-categories-bar/product-categories-bar.component';
import { SectionProductListComponent } from './section-product-list/section-product-list.component';
import { HomeComponent } from './home/home.component';
import {ViewMainRoutingModule} from './view-main.routing.module';
import {AdmonItemModule} from '../cms/admon-item/admon-item.module';
import {SearchFilterComponent} from './search-filter/search-filter.component';
import { ContactAreaComponent } from './home/contact-area/contact-area.component';
import { AboutComponent } from './home/about/about.component';

@NgModule({
  declarations: [NavbarComponent, CarrouselComponent, ProductCategoriesBarComponent, SectionProductListComponent, HomeComponent,SearchFilterComponent, ContactAreaComponent, AboutComponent],
  exports : [NavbarComponent,CarrouselComponent,ProductCategoriesBarComponent,SectionProductListComponent,HomeComponent],
  imports: [
    CommonModule,
    ViewMainRoutingModule,
    AdmonItemModule
  ]
})
export class ViewMainModule { }
