// using Engineer constructor
const Engineer = require("../lib/Engineer");
describe("Engineer", () => {
  // creating engineer object
  it("creates an Engineer object", () => {
    const engineer = new Engineer(
      "Andy",
      30,
      "andy1234@google.com",
      "andy1234"
    );

    expect(engineer.github).toEqual(expect.any(String));
  });

  // gets github from getGithub()
  it("gets engineer github value", () => {
    const engineer = new Engineer(
      "Andy",
      30,
      "andy1234@google.com",
      "andy1234"
    );

    expect(engineer.getGithub()).toEqual(
      expect.stringContaining(engineer.github.toString())
    );
  });

  // gets role from getRole()
  it("gets role of employee", () => {
    const engineer = new Engineer(
      "Andy",
      30,
      "andy1234@google.com",
      "andy1234"
    );

    expect(engineer.getRole()).toEqual("Engineer");
  });
});
