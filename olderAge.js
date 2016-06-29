function Person (name, age) {
    this.name = name;
    this.age = age;
}

var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

var olderAge = function(person1, person2) {
    if (person1.age > person2.age) {
        return person1.age
    } else {
        return person2.age
    }
}

var jasey = new Person("Jasey", 25);
var liz = new Person("Liz", 44);

console.log("The older person is " + olderAge(jasey, liz));
