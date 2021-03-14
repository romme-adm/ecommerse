import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProductListComponent } from './section-product-list.component';

describe('SectionProductListComponent', () => {
  let component: SectionProductListComponent;
  let fixture: ComponentFixture<SectionProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
