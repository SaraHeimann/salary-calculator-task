using calculator_backend.Models;
using calculator_backend.Services;
using MySalaryCalculatorApi.Enums;

namespace MySalaryCalculatorApi.Services
{
    public class SalaryService : ISalaryService
    {
        private const double HoursPerMonthForFullTime = 170;
        private const double BaseSalaryPerHourForJunior = 100;
        private const double BaseSalaryPerHourForSenior = 120;
        private const double SalaryIncreasePerManagementLevel = 20;
        private const double SeniorityBonusPercentage = 1.25;
        private const double AdditionalWorkBonusGroupA = 1;
        private const double AdditionalWorkBonusGroupB = 0.5;

        public SalaryCalculationResult CalculateSalary(SalaryCalculationModel model)
        {
            if (model.ExperienceYears < 0 || model.JobPercentage <= 0 || model.JobPercentage > 100)
            {
                throw new ArgumentException("Invalid input values. Please ensure all inputs are logical and valid.");
            }

            // Calculate base salary
            double baseSalaryPerHour = model.JobRole == JobRoleEnum.Junior ? BaseSalaryPerHourForJunior : BaseSalaryPerHourForSenior;
            baseSalaryPerHour += (int)model.ManagementLevel * SalaryIncreasePerManagementLevel;
            double baseSalary = baseSalaryPerHour * HoursPerMonthForFullTime * (model.JobPercentage / 100);

            // Calculate seniority bonus
            double seniorityBonus = baseSalary * model.ExperienceYears * SeniorityBonusPercentage / 100;

            // Calculate additional work bonus
            double additionalWorkBonus = 0;
            if (model.IsEligibleForAdditionalWork)
            {
                additionalWorkBonus = baseSalary * (model.AdditionalWorkGroup == AdditionalWorkGroupEnum.GroupA ? AdditionalWorkBonusGroupA : AdditionalWorkBonusGroupB) / 100;
            }

            // Calculate base salary before raise
            double baseSalaryBeforeRaise = baseSalary + seniorityBonus + additionalWorkBonus;

            // Calculate raise percentage based on base salary and management level
            double raisePercentage =
              baseSalaryBeforeRaise <= 20000 ? 1.5 :
              baseSalaryBeforeRaise <= 30000 ? 1.25 :
              1;
            raisePercentage += (int)model.ManagementLevel * 0.1;

            // Calculate raise amount
            double raiseAmount = baseSalaryBeforeRaise * raisePercentage / 100;

            // Calculate final salary
            double finalSalary = baseSalaryBeforeRaise + raiseAmount;

            // Create and return SalaryCalculationResult object
            return new SalaryCalculationResult
            {
                BaseSalary = baseSalary,
                SeniorityBonusPercentage = SeniorityBonusPercentage,
                SeniorityBonusAmount = seniorityBonus,
                AdditionalWorkBonus = additionalWorkBonus,
                BaseSalaryBeforeRaise = baseSalaryBeforeRaise,
                RaisePercentage = raisePercentage,
                RaiseAmount = raiseAmount,
                FinalSalary = finalSalary,
            };
        }
    }
}
