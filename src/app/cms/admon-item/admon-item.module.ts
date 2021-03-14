import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSectionComponent } from './add-section/add-section.component';



@NgModule({
  declarations: [AddSectionComponent],
  imports: [
    CommonModule
  ],
  exports:[AddSectionComponent]
})
export class AdmonItemModule { }
