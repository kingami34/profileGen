const Manager = require("../lib/manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Caleb", 1, "test@test.com", testValue, "manager");
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "manager";
    const e = new Manager("Caleb", 1, "test@test.com", 100, "manager");
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Caleb", 1, "test@test.com", testValue, "manager");
    expect(e.getOfficeNumber()).toBe(testValue);
});