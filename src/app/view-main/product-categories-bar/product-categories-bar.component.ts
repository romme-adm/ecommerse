import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-categories-bar',
  templateUrl: './product-categories-bar.component.html',
  styleUrls: ['./product-categories-bar.component.css']
})
export class ProductCategoriesBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  AdmonSection()
  {
    window.postMessage("open_add_section_form",location.href);
  }

}
