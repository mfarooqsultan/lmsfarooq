// making classes general, student, profile,courses intructor wise.
class General {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
}
;
class Student extends General {
    constructor(name, department, rollno, degreetitle) {
        super(name, department);
        this.courseenrolled = [];
        this.rollno = rollno;
        this.degreetitle = degreetitle;
    }
    course_enrolled(course) {
        this.courseenrolled.push(course.courseNames);
    }
}
;
class Profile extends Student {
    constructor(name, department, rollno, degreetitle, semester, cgpa, feestatus) {
        super(name, department, rollno, degreetitle);
        this.semester = semester;
        this.cgpa = cgpa;
        this.feestatus = feestatus;
    }
}
;
class CourseInst {
    constructor(courseNames, instructors) {
        this.courseNames = courseNames;
        this.instructors = instructors;
    }
}
;
//  Assigning values to above classes.
let student1 = new Student("Azeem", "CivilEngineeing", 1, "BSc Civil");
let student2 = new Student("Usman", "CivilEngineeing", 2, "BSc Civil");
let student3 = new Student("Umar", "ComputerScience", 3, "BSc Computer");
let student4 = new Student("Asad", "CivilEngineeing", 4, "MSc Civil");
let student5 = new Student("Muhammad", "ElectricalEngineeing", 5, "BSc Electrical");
let profile1 = new Profile("Azeem", "CivilEngineeing", 1, "BSc Civil", "fourth", 3.4, "paid");
let profile2 = new Profile("Usman", "CivilEngineeing", 2, "BSc Civil", "fourth", 3.6, "paid");
let profile3 = new Profile("Umar", "ComputerScience", 3, "BSc Computer", "fourth", 4, "notpaid");
let profile4 = new Profile("Asad", "CivilEngineeing", 4, "MSc Civil", "fourth", 3.1, "paid");
let profile5 = new Profile("Muhammad", "ElectricalEngineeing", 5, "BSc Electrical", "fourth", 2.9, "paid");
let courseInst1 = new CourseInst("SOM", "Bilal Zulq");
let courseInst2 = new CourseInst("PRC", "Zahid A");
let courseInst3 = new CourseInst("Circuits", "Saleem");
let courseInst4 = new CourseInst("TypeScript", "Zia");
let courseInst5 = new CourseInst("AdvanceMechanics", "Babar");
let courseInst6 = new CourseInst("SoilMech", "K.F.C");
let courseInst7 = new CourseInst("Mechanics", "Ghouri");
// Storing in array.
let registerd_students = [student1, student2, student3, student4, student5];
let student_profile = [, profile1, profile2, profile3, profile4, profile5];
let course_enroll = [courseInst1.courseNames, courseInst2.courseNames, courseInst3.courseNames, courseInst4.courseNames, courseInst5.courseNames, courseInst6.courseNames, courseInst7.courseNames];
// Assigning courses to students
student1.course_enrolled(courseInst2);
student1.course_enrolled(courseInst5);
student2.course_enrolled(courseInst1);
student2.course_enrolled(courseInst6);
student3.course_enrolled(courseInst4);
student4.course_enrolled(courseInst7);
student4.course_enrolled(courseInst2);
student5.course_enrolled(courseInst3);
// exporting
export { Student, Profile, CourseInst, registerd_students, student_profile, course_enroll };
