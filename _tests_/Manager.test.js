// using Manager constructor
const Manager = require("../lib/Manager");

describe("Manager", () => {
  // creating manager object
  it("creates an Manager object", () => {
    const manager = new Manager("Andy", 30, "andy1234@google.com", 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
  });

  // gets role from getRole()
  it("gets role of employee", () => {
    const manager = new Manager("Andy", 30, "andy1234@google.com");

    expect(manager.getRole()).toEqual("Manager");
  });
});
