import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SalaryCalculationResponse } from '../salary.service';

@Component({
  selector: 'app-salary-result',
  templateUrl: './salary-result.component.html',
  styleUrls: ['./salary-result.component.scss'],
  imports: [CommonModule],
})
export class SalaryResultComponent {
  @Input()
  salaryData!: SalaryCalculationResponse;
}
