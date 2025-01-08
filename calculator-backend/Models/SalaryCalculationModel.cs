using MySalaryCalculatorApi.Enums;
using System.ComponentModel.DataAnnotations;

namespace calculator_backend.Models
{
    public class SalaryCalculationModel
    {
        [Required]
        public double JobPercentage { get; set; }

        [Required]
        public JobRoleEnum JobRole { get; set; }

        [Required]
        public ManagementLevelEnum ManagementLevel { get; set; }

        [Required]
        public double ExperienceYears { get; set; }

        [Required]
        public bool IsEligibleForAdditionalWork { get; set; }

        public AdditionalWorkGroupEnum? AdditionalWorkGroup { get; set; }
    }
}

