const students = [
    {
        id: 1,
        name: "John",
        age: 20,
        grade: "A"
    },
{
    id: 2,
    name: "Jane",
    age: 22,
    grade: "B"  
}
];
let id = prompt("Enter student id:");

for (let i = 0; i < students.length; i++) {
    if (students[i].id == id) {
        alert(students[i].name + " is " + students[i].age + " years old and has a grade of " + students[i].grade);
        break;
    } else if (i === students.length - 1) {
        let name = prompt("Enter student name:");
        let age = parseInt(prompt("Enter student age:"));
        let newStudent = {
            id: students.length + 1,
            name: name,
            age: age,
    grade: "C"
};
    

students.push(newStudent);
alert("New student added: " + newStudent.name);
    }
}
let idToDelete = prompt("Enter student id to delete:");
for (let i = 0; i < students.length; i++) {
    if (students[i].id == idToDelete) {
        students.splice(i, 1);
        alert("Student with id " + idToDelete + " has been deleted.");
        break;
    } else if (i === students.length - 1) {
        alert("Student with id " + idToDelete + " not found.");
    }
}   
