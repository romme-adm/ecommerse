import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoriesBarComponent } from './product-categories-bar.component';

describe('ProductCategoriesBarComponent', () => {
  let component: ProductCategoriesBarComponent;
  let fixture: ComponentFixture<ProductCategoriesBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoriesBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoriesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
