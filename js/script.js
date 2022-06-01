

let myButton = document.querySelector("#myButton");

myButton.addEventListener("click", doSomething, false);

let counter = 0;
function doSomething(e) {
   counter++;
   console.log("Button clicked " + counter + " times!");
   if (counter == 3) {
      showMore();
   }
}

function showMore() {
   console.warn("This is a warning!");
   console.error("This is an error!");
}


let person = {
   getName: function () {
      return "The name is " + this.firstName + " " + this.lastName;
   },
   getInitials: function () {
      if (this.firstName && this.lastName) {
         return this.firstName[0] + "." + this.lastName[0] + ".";
      }
   }
};

let funnyGuy = Object.create(person);
funnyGuy.firstName = "Conan";
funnyGuy.lastName = "O'Brien";

let theDude = Object.create(person);
theDude["firstName"] = "Jeffrey";
theDude["lastName"] = "Lebowski";

let detective = Object.create(person);
detective.firstName = "Adrian";
detective.lastName = "Monk";

let Wano = Object.create(person);
Wano.firstName = "Wano";
Wano.lastName = "Vasilievitch";

// Как перемешать массив:

Array.prototype.shuffle = function () {
   let input = this;
   for (let i = input.length - 1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let newValue = input[randomIndex];

      input[randomIndex] = input[i];
      input[i] = newValue;
   }
   return input;
}

Array.prototype.slice = function () {
   let input = this;
   input[0] = "Ahtung! Samena!";
   return input;
}


function getRandomInRange(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
