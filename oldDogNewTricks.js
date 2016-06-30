function Dog (breed) {
  this.breed = breed;
}

var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

var snoopy = new Dog("Beagle");
snoopy.bark = function() {
    console.log("Woof");
};
snoopy.bark();
