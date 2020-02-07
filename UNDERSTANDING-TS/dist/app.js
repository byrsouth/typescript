"use strict";
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //  private name: string;
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    Department.prototype.describe = function () {
        console.log("Department: (" + this.id + "): " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('1', 'Accounting');
accounting.describe();
accounting.addEmployee('Byron');
accounting.addEmployee('Josh');
accounting.printEmployeeInformation();
accounting.addEmployee('Steve');
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map