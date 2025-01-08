import { Component } from '@angular/core';
import { SalaryInputFormComponent } from './salary-input-form/salary-input-form.component';
import { SalaryResultComponent } from './salary-result/salary-result.component';
import { SalaryCalculationResponse } from './salary.service';

@Component({
  selector: 'app-root',
  imports: [SalaryInputFormComponent, SalaryResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'salary-calculator';
  salaryData!: SalaryCalculationResponse;
}
