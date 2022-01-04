var student=[
    {
        name:'Leela',
        age:12,
        marks:{
            science:80,
            social:90,
            maths:89,
            English:95
        },
        address: 'abc',
        gender:'Female'
    },
    {
        name:'Shiela',
        age:18,
        marks:{
            science:80,
            social:90,
            maths:89,
            English:95
        },
        address: 'abc',
        gender:'Female'
    },
]

var n;
for(let i=0; i<n; i++){
    student[i].marks ={science:science1[i], social:social1[i], maths:maths1[i], English:English1[i]};
}
//student.name='harshitha';
let name=['a', 'b', 'c', 'd'];
let age=[12, 15, 14, 13];
let science1 = [80,90,100,45];
let social1 = [80,90,100,45];
let maths1 = [80,90,100,45];
let English1 = [80,90,100,45];
//student.marks.science=99;
console.log(student);
