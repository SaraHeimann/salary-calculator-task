import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SalaryCalculationRequest {
  positionPercentage: number;
  professionalLevel: string;
  managementLevel: string;
  yearsOfExperience: number;
  isEntitledToBonus: boolean;
  group: string | null;
}

export interface SalaryCalculationResponse {
  baseSalaryPerHour: number;
  baseSalary: number;
  seniorityBonusAmount: number;
  seniorityBonusPercentage: number;
  additionalWorkBonus: number;
  baseSalaryBeforeRaise: number;
  raisePercentage: number;
  raiseAmount: number;
  finalSalary: number;
}

@Injectable({ providedIn: 'root' })
export class SalaryService {
  private baseUrl = 'https://localhost:7116/api/Salary';

  constructor(private http: HttpClient) {}

  calculateSalary(
    data: SalaryCalculationRequest | any
  ): Observable<SalaryCalculationResponse> {
    const params = new HttpParams({
      fromObject: {
        JobPercentage: data.positionPercentage,
        JobRole: data.professionalLevel,
        ManagementLevel: data.managementLevel,
        ExperienceYears: data.yearsOfExperience,
        IsEligibleForAdditionalWork: data.isEntitledToBonus,
        AdditionalWorkGroup: data.group,
      },
    });

    return this.http.get<SalaryCalculationResponse>(this.baseUrl, { params });
  }
}
