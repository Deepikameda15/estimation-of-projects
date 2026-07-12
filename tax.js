let salary=1500000;
let tax=0;

if (salary<1200000){
    tax=1;
   
}
else if(salary>=1200000 && salary<1500000)
{
    tax=5;
    

}
else if(salary>=1500000 && salary<2000000)
{
    tax=10;
   
    

}
else if(salary>=2000000 && salary<2500000)
{
    tax=15;
    


}
else if(salary>=2500000 && salary<3000000)
{
    tax=20;
    

}
else{

}

let taxAmount = (salary * tax) / 100;
let annualSalary = salary - taxAmount;
let monthlySalary = annualSalary / 12;

// PF and PT deductions
let pf = 200;
let pt = 1800;
let oneMonthSalary = monthlySalary - (pf + pt);

// Daily and hourly salary
let oneDaySalary = oneMonthSalary / 22;
let oneHourSalary = oneDaySalary / 8;


console.log("Annual Salary :", salary);
console.log("Tax Percentage :", tax + "%");
console.log("Tax Amount :", taxAmount);
console.log("Salary After Tax :", annualSalary);
console.log("Monthly Salary :", oneMonthSalary);
console.log("Daily Salary :", oneDaySalary);
console.log("Hourly Salary :", oneHourSalary);

