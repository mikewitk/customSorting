//Custom Sorting Exercise

// 1. Write a sorting function that sorts the below array first by the name ascending alphabetically
// 2. In cases where the names are equal sort by descending age



var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// sorting by age descending

students.sort(function (a,b){
  return b.age - a.age
}

  )

students.sort(function (a,b){

  var nameA = a.name.toLowerCase();
  var nameB = b.name.toLowerCase();
  var ageA = a.age;
  var ageB = b.age;

    if (nameA < nameB)
      return -1

    if (nameA > nameB)
      return 1

    if (nameA = nameB)
      return ageB - ageA
  }
)

console.log(students);