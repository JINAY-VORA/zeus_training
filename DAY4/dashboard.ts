const CourseBox: any = document.querySelector(".footer-links");

let courseData:{
    courseName: string;
    courseSubject: string;
    grade:string;
    gradeNo:string;
    no_of_units:number;
    units:string;
    no_of_lessons:number;
    lessons:string;
    no_of_topics:number;
    topics:string;
    dropdownText:string;
    no_of_students:string;
    timeline:string;
}[]=[
    {
        courseName:"Acceleration",
        courseSubject:"Physics",
        grade:"Grade 7",
        gradeNo:"+2",
        no_of_units:4,
        units:"Units",
        no_of_lessons:18,
        lessons:"Lessons",
        no_of_topics:24,
        topics:"Topics",
        dropdownText:"Mr.Frank's Class B",
        no_of_students:"50 Students",
        timeline:"21-Jan-2020 - 21-Aug-2020",

    },
];
 let cardData:String='';
 for(let data of courseData){
     cardData+= `
     `
 }