import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriverFormComponent } from './template-driver-form.component';

describe('TemplateDriverFormComponent', () => {
  let component: TemplateDriverFormComponent;
  let fixture: ComponentFixture<TemplateDriverFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDriverFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDriverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
