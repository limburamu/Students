const studentController = {};

const students = [
    {id: 1, name: 'Krishna', age: 23, address: 'Birtamode', faculty: 'Science'},
    {id: 2, name: 'Rahim', age: 22, address: 'Dhulabari', faculty: 'Management'},
    {id: 3, name: 'Sital', age: 25, address: 'Charpane', faculty: 'Education'},
    {id: 4, name: 'Kartik', age: 23, address: 'Sanichare', faculty: 'Science'},
    {id: 5, name: 'Sani', age: 21, address: 'Charali', faculty: 'Management'},
]

studentController.getStudents = function(req, res) {
    res.json(students);
}


studentController.getStudent = function(req, res) {
    const id = parseInt(req.params.studentId);
    let responseStudent;
    students.forEach(student => {
        if(student.id === id) {
            responseStudent = student;
        }
    });
    if(responseStudent) {
        res.status(200).json(responseStudent);
    } else {
        res.status(404).json('student not found');
    }
}


studentController.deleteStudent = function(req, res) {
    const id = parseInt(req.params.studentId);

    let flag = 0;

    for(i = 0; i < students.length; i++)
    {
        if(id === students[i].id)
        {
            flag = 1;
            console.log(students[i].id);
            students.splice(i, 1);
        }
    }
    if(flag == 0)
    {
        res.send('sorry');
    } else {
        res.send('deleted student');
    }
}


studentController.updateStudent = function(req, res) {
    const id = parseInt(req.params.studentId);

    let flag = 0

    for(i = 0; i < students.length; i++)
    {
        if(id === students[i].id)
        {
            flag = 1;
            students[i].name = req.name;
            students[i].age = req.age;
            students[i].address = req.address;
            students[i].faculty = req.faculty;
            console.log(students[i].id);

        }
    }
    if(flag == 0)
    {
        res.send('sorry');
    } else {
        res.send('student updated');
    }
}


studentController.addStudent = function(req, res) {
    console.log(req.students);
    students.push(req.studentId);
    res.status(201).send('Student added');
}

module.exports = studentController;

