# Salary Calculator Project

## Overview
This project is a web-based salary calculator designed to help employees estimate their salaries based on multiple parameters such as job percentage, professional level, management level, years of experience, and eligibility for bonuses. The project consists of a backend implemented in ASP.NET Core and a frontend built with Angular.

## Features
- Input fields for job parameters (e.g., job percentage, professional level, etc.).
- Calculates the base salary, seniority bonus, and additional work bonuses.
- Displays detailed salary breakdown, including total raises and final salary.

## Technologies Used
- **Frontend**: Angular with TypeScript
- **Backend**: ASP.NET Core
- **Styling**: SCSS
- **API Communication**: HTTPClient

## Prerequisites
- Node.js (v14 or higher)
- Angular CLI (v13 or higher)
- .NET SDK (v6 or higher)
- A modern web browser

## Getting Started

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/SaraHeimann/salary-calculator-task.git
   cd salary-calculator-task/backend
   ```
2. Restore dependencies:
   ```bash
   dotnet restore
   ```
3. Run the backend server:
   ```bash
   dotnet run
   ```
4. The backend server will be available at `https://localhost:7116`.

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd salary-calculator-task/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Angular development server:
   ```bash
   ng serve
   ```
4. Open your browser and navigate to `http://localhost:4200`.

## How to Use
1. Fill in the required fields on the form:
   - Job Percentage
   - Professional Level
   - Management Level
   - Years of Experience
   - Eligibility for Additional Work Bonuses
2. Click the "חשב שכר" button.
3. View the salary breakdown on the results page.

## Folder Structure
```
project_root
├── backend
│   ├── Controllers
│   ├── Models
│   ├── Services
│   └── Program.cs
├── frontend
│   ├── src
│   │   ├── app
│   │   │   ├── salary-input-form
│   │   │   ├── salary-result
│   │   │   └── services
│   ├── angular.json
│   └── package.json
```

## Notes
- Ensure CORS is enabled in the backend to allow communication with the Angular frontend.
- Update the backend URL in `SalaryService` if the API is hosted on a different server.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

