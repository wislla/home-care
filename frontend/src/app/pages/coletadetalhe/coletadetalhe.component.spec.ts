import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColetadetalheComponent } from './coletadetalhe.component';

describe('ColetadetalheComponent', () => {
  let component: ColetadetalheComponent;
  let fixture: ComponentFixture<ColetadetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColetadetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColetadetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
