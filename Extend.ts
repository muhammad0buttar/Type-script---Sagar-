class Departments {
  public name: string;
  protected account: number;
  private accessLevel: string;

  constructor(name: string, account: number, accessLevel: string) {
    this.name = name;
    this.account = account;
    this.accessLevel = accessLevel;

    this.departmentName();
  }

  protected departmentName(): number {
    return this.account;
  }
}

class Department3 extends Departments {
  security() {
    console.log("officers");
  }

  protected departmentName(): number {
    return this.account;
  }

  public printDetails(): void {
    console.log(`Department: ${this.name}`);
    console.log(`Account: ${this.departmentName()}`);
  }
}

const sales = new Department3("Sales", 1001, "User");
const development = new Departments("Development", 1002, "Admin");

console.log(sales);
console.log(development);

// sales.printDetails();
//development.printDetails();
