class Student{
    constructor(name, age, science, social, maths,English, Kannada, Hindi ){
        class marks{
            constructor(){
                this.science=science;
                this.social=social;
                this.maths=maths;
                this.English=English;
                this.kannada=Kannada;
                this.Hindi=Hindi;
            }
        
        }
        this.name=name;
        this.age=age;
        this.marks=new marks();
    }
    
}

let student1 = new Student("Harshitha", 15, 80, 25, 45,35, 89, 99);
student1.marks.Tulu=80;
//let student2 = new Student("Gunda", 12, 88, 95, 45);
let name=['a', 'b', 'c', 'd'];
let age=[12, 15, 14, 13];
let science1 = [30,50,80,45];
let social1 = [80,90,35,45];
let maths1 = [85,80,20,65];
let English1 = [87,26,27,45];
let Kannada1 = [77,80,90,65];
let Hindi1 = [87,89,77,55];

Object.filter = (obj, predicate) => 
                  Object.fromEntries(Object.entries(obj).filter(predicate));

let student=[]
for(i=0; i<name.length; i++){
student.push(new Student(name[i], age[i], science1[i], social1[i], maths1[i], English1[i],Kannada1[i], Hindi1[i] ));
}

console.log(student);
student.push(student1);
for(let i=0; i<student.length; i++){

    var filter= Object.filter(student[i].marks,([subname, newmark]) => newmark <=35 )
    console.log(filter);
    if(Object.keys(filter).length){
        student[i].result="Fail";
    }
    else
    student[i].result="Pass";
}

//console.log(student.filter(student.marks,student.marks => student.marks <=35));
console.log(student);