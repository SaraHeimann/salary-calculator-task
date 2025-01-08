import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalaryInputFormComponent } from './salary-input-form.component';

describe('SalaryInputFormComponent', () => {
  let component: SalaryInputFormComponent;
  let fixture: ComponentFixture<SalaryInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryInputFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
