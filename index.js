function yearOfBirth(age) {
  return 2017 - age;
}

function whoAmI(name, age) {
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
  var yob = yearOfBirth(29);
  console.log(`I was born in ${yob}`);
}

yearOfBirth(29);
whoAmI('Scott', 29);
