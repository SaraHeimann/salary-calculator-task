import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SalaryCalculationResponse, SalaryService } from '../salary.service';

@Component({
  selector: 'app-salary-input-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './salary-input-form.component.html',
  styleUrl: './salary-input-form.component.scss',
})
export class SalaryInputFormComponent {
  constructor(private http: HttpClient, private salaryService: SalaryService) {}

  @Output() salaryCalculated = new EventEmitter<SalaryCalculationResponse>();

  positionPercentages = [
    { value: 100, label: '100%' },
    { value: 75, label: '75%' },
    { value: 50, label: '50%' },
  ];

  professionalLevels = [
    { value: '0', label: 'מתחיל' },
    { value: '1', label: 'מנוסה' },
  ];

  managementLevels = [
    { value: 'None', label: 'ללא' },
    { value: '1', label: 'רמת ניהול 1' },
    { value: '2', label: 'רמת ניהול 2' },
    { value: '3', label: 'רמת ניהול 3' },
    { value: '4', label: 'רמת ניהול 4' },
  ];

  additionalWork = [
    { value: true, label: 'true' },
    { value: false, label: 'false' },
  ];

  salaryForm = new FormGroup({
    positionPercentage: new FormControl('', [Validators.required]),
    professionalLevel: new FormControl('', [Validators.required]),
    managementLevel: new FormControl('', [Validators.required]),
    yearsOfExperience: new FormControl('', [
      Validators.required,
      Validators.min(0),
    ]),
    isEntitledToBonus: new FormControl(false),
    group: new FormControl(''),
  });

  onSubmit() {
    if (this.salaryForm.valid) {
      const formData = this.salaryForm.value;
      this.salaryService.calculateSalary(formData).subscribe({
        next: (response) => {
          this.salaryCalculated.emit(response);
        },
        error: (error) => {
          console.error('Error calculating salary:', error);
        },
      });
    }
  }
}
