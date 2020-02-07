class Department {
 //  private name: string;
   private employees: string[] = [];

    constructor(private readonly id: string, public name: string){
        this.name = name;
        this.id = id;
    }

    describe(this: Department) {
        console.log(`Department: (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('1', 'Accounting');
accounting.describe();
accounting.addEmployee('Byron');
accounting.addEmployee('Josh');
accounting.printEmployeeInformation();

accounting.addEmployee('Steve');
accounting.printEmployeeInformation();

