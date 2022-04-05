const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should create an employee object", () => {
    const employee = new Employee("Andy", 30, "andy1234@google.com");

    expect(employee.name).toEqual(expect.stringContaining("Andy"));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(
      expect.stringContaining("andy1234@google.com")
    );
  });

  it("Should get the employee's name with the getName() method ", () => {
    const employee = new Employee("Andy", 30, "andy1234@google.com");

    expect(employee.getName()).toEqual("Andy");
  });

  it("Should get the employee's id with the getId() method", () => {
    const employee = new Employee("Andy", 30, "andy1234@google.com");

    expect(employee.getId()).toEqual(30);
  });

  it("Should get the employee's email address with the getEmail() method", () => {
    const employee = new Employee("Andy", 30, "andy1234@google.com");

    expect(employee.getEmail()).toEqual("andy1234@google.com");
  });
});
