


function gradeAssigner(score){
 let grade; 
       if(0 <=  score && score <= 64){
        grade = 'F';
       }else if (65 <= score && score <= 69){
        grade = 'D';
       }else if (70 <= score && score <= 79){
        grade = 'C';
       }else if (80 <= score && score <= 89){
        grade = 'B';
       }else if (90 <= score && score <= 100){
        grade = 'A';
       }
 console.log(grade);
}

gradeAssigner(40);
gradeAssigner(67);
gradeAssigner(77);
gradeAssigner(87);
gradeAssigner(95);


/*cd bootcamp\BC_exercises\js */
/*node 4.2-grade_assigner.js*/