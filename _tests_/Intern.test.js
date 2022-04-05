// using Intern constructor
const Intern = require("../lib/Intern");

describe("Intern sub class of employee", () => {
  // creating intern object
  it("creates an Intern object", () => {
    const intern = new Intern("Andy", 30, "andy1234@google.com", "VC");

    expect(intern.school).toEqual(expect.any(String));
  });

  // gets school from getSchool()
  it("gets employee school", () => {
    const intern = new Intern("Andy", 30, "andy1234@google.com", "VC");

    expect(intern.getSchool()).toEqual(
      expect.stringContaining(intern.school.toString())
    );
  });

  // gets role from getRole()
  it("gets role of employee", () => {
    const intern = new Intern("Andy", 30, "andy1234@google.com", "VC");

    expect(intern.getRole()).toEqual("Intern");
  });
});
