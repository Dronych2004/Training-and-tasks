class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = [];
        
    }


    addMark(mark, subjectName) {
        if (mark >= 1 && mark <= 5) {
           this.marks.push({mark, subjectName})
        } else {
            console.log('Ошибка, оценка должна быть числом от 1 до 5')
        }
    }
    getAverageBySubject(subjectName) {
        if (this.marks.find(function(element) {
            return element.subjectName === subjectName
        })) {
            const marksSubject = this.marks.filter(function(item) {
            return item.subjectName === subjectName;
        });
        const averageBySubject = (marksSubject.reduce((sum, item) => sum + item.mark, 0))/marksSubject.length
        console.log(`Средний балл по предмету ${subjectName} ${averageBySubject}`)}
        else {
            console.log('Предмет в списке отсутсвует')
        }

    }

    getAverage() {
        const average = (this.marks.reduce((acc, curr) => acc + curr.mark, 0))/this.marks.length
        console.log(`Средний балл по всем предметам ${average}`)
    }
}

const student = new Student("Олег Никифоров", 'man', 21);
console.log(student)
student.addMark(4, "algebra")
student.addMark(5, "algebra")
student.addMark(5, "algebra")
student.addMark(5, "geometry")
student.addMark(4, "geometry")
student.addMark(7, "geometry")

console.log(student)
student.getAverageBySubject("algebra")
student.getAverage()
student.getAverageBySubject("language")

