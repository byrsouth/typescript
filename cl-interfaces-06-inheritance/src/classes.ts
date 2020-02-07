abstract class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  static createEmployee(name: string){
    return {name: name};
  }

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

   abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe(){
    console.log('IT Dept.');
  }
}

class AccountingDepartment extends Department {

  private lastReport: string;

  private static instance: AccountingDepartment;

  static getInstance(): AccountingDepartment{
    if(AccountingDepartment.instance){
      return this.instance;
    }
    this.instance  = new AccountingDepartment('D1', []);
    return this.instance;
  }

  get mostRecentReport() {
    if ( this.lastReport){
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(report: string) {
    if(!report){
      throw new Error('Please pass in a valid value');
    }
    this.addReport(report);
  }

   
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if(name === 'Max'){
      return;
    }
    this.employees.push(name);
  }
  describe(this: Department){
    console.log(this);
  }
}
const employee1 = Department.createEmployee('Byron');
console.log('Employee: '  + employee1.name);
const it = new ITDepartment('d1', ['Max']);


it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = AccountingDepartment.getInstance();

console.log(accounting);
accounting.addReport('Something went wrong...');
accounting.addEmployee('Max');
accounting.addEmployee('Byron');

accounting.printEmployeeInformation();
accounting.printReports();
accounting.mostRecentReport = 'New Report';

console.log(accounting.mostRecentReport);



// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();