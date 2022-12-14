// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    if (!input) {
      throw new Error('no grade provided');
    }
    let response;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === 'number') {
      // TODO: Add logic here to return a single letter grade
      if (input >= 90 && input <= 100) {
        response = "A"
      } else if (input >= 80 && input <= 89) {
        response = "B"
      } else if (input >= 70 && input <= 79) {
        response = "C"
      } else if (input >= 60 && input <= 69) {
        response = "D"
      } else if (input < 60) {
        response = "F"
      }
      return response;
    }
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === 'string') {
      // TODO: Add logic here to return range as a string
      switch (input) {
        case "A":
          response = "90 - 100"
          break
        case "B":
          response = "80 - 89"
          break
        case "C":
          response = "70 - 79"
          break
        case "D":
          response = "60 - 69"
          break
        case "F":
          response = "< 60"
          break
      }
      return response;
    }
  };
}

const John = new Student('John', 'Appleseed', '30')

console.log('John.displayGrade():', John.displayGrade(55))
console.log('John.displayGrade():', John.displayGrade('B'))
