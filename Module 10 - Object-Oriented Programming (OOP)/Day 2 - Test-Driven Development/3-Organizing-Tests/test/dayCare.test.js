const DayCare = require("../dayCare");
const Child = require("../child");

describe("DayCare", () => {
  describe("Initialization", () => {
    it("should create an object with 'children' array, 'capacity' number, and 'ageLimit' number", () => {
      const dayCare = new DayCare();

      // TODO: Add a comment describing the purpose of the following statement
      // Tests to validate the code.
      expect(dayCare).toEqual({ children: [], capacity: 3, ageLimit: 6 });
    });
  });

  describe("addChild", () => {
    it("should add a child to the 'children' array", () => {
      // TODO: Add a comment describing the purpose of the following declarations
      // Create a child object with Tammy who is 1 and and dayCare object for testing. This sets up the test case.
      const child = new Child("Tammy", 1);
      const dayCare = new DayCare();

      // TODO: Add a comment describing the purpose of the following method
      // Test the .addChild function.
      dayCare.addChild(child);

      // TODO: Add a comment describing the purpose of the following statements
      // These are the expectations of the test, i.e. added one kid and not sure about second.
      expect(dayCare.children.length).toEqual(1);
      expect(dayCare.children[0]).toBe(child);
    });

    it("should not add a child over the 'ageLimit'", () => {
      const child = new Child("Tammy", 8);
      const dayCare = new DayCare();

      dayCare.addChild(child);

      // TODO: Add a comment describing the purpose of the following statement
      // Tests whether the kid is added (shouldn’t be)
      expect(dayCare.children.length).toEqual(0);
    });

    it("should not add a child if already at capacity", () => {
      const dayCare = new DayCare();
      const child = new Child("Alice", 4);

      // TODO: Add a comment describing the purpose of the following expression
      // Adds kids to test.
      dayCare.children = [
        new Child("Tammy", 1),
        new Child("Mark", 2),
        new Child("Alvin", 1)
      ];

      dayCare.addChild(child);

      // TODO: Add a comment describing the purpose of the following statement
      // Tests whether the array contains 3 kids.
      expect(dayCare.children.length).toEqual(3);
    });

    it("should throw an error if not provided a Child object as an argument", () => {
      // TODO: Add a comment describing the purpose of the following declaration
      // Setting up an error.
      const err = new Error(
        "Expected parameter 'child' to be an instance of Child"
      );

      // TODO: Add a comment describing the purpose of the following expression
      // We have to use a callback to test for an error.
      const cb = () => {
        const dayCare = new DayCare();
        dayCare.addChild();
      };

      // TODO: Add a comment describing the purpose of the following statement
      expect(cb).toThrowError(err);
    });
  });

  describe("pickupChild", () => {
    it("should remove the first child found with a given name from 'children' and return it", () => {
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      dayCare.children = [child1, child2, child3];

      // TODO: Add a comment describing the purpose of the following declaration
      const removed = dayCare.pickupChild(child2.name);

      expect(removed).toBe(child2);
      expect(dayCare.children.length).toEqual(2);

      // TODO: Add a comment describing the purpose of the following statement
      expect(
        dayCare.children.some(child => child.name === child2.name)
      ).toEqual(false);
    });

    it("should return undefined and remove no children if child is not in 'children'", () => {
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      dayCare.children = [child1, child2, child3];

      // TODO: Add a comment describing the purpose of the following declaration
      const removed = dayCare.pickupChild("Fred");

      // TODO: Add a comment describing the purpose of the following statement
      expect(typeof removed).toEqual("undefined");

      // TODO: Add a comment describing the purpose of the following statement
      expect(dayCare.children).toEqual([child1, child2, child3]);
    });
  });
});
