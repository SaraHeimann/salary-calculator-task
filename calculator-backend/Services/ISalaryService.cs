using calculator_backend.Models;

namespace calculator_backend.Services
{
    public interface ISalaryService
    {
        SalaryCalculationResult CalculateSalary(SalaryCalculationModel model);

    }
}
