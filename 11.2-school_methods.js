const school = {
	teachers: [
		{
			id: 1,
			name: "Pinchas",
			subjects: ["chemistry", "biology", "physics"],
			students: [],
			capacityLeft: 3,
		},
		{
			id: 2,
			name: "Williams",
			subjects: ["history", "ethics"],
			students: [],
			capacityLeft: 2,
		},
	],
	students: [
		{
			id: 10,
			name: "Jennifer",
			age: 20,
		},
		{
			id: 11,
			name: "Howard",
			age: 23,
		},
		{
			id: 12,
			name: "Old-Timmy",
			age: 86,
		},
		{
			name: "Houston",
			age: 21,
		},
	],
};

school.assignStudent = (stuID, subject)=>{
 let freeTeacher = school.teachers.find(teacher => {
  if(teacher.subjects.includes(subject) && teacher.capacityLeft >0){
   //teacher.students.push(stuID);
   //teacher.capacityLeft--;  
   return teacher;
  }else{
   console.log('Sorry, no available teachers left');
   }   
 });
 freeTeacher.students.push(stuID);
 freeTeacher.capacityLeft--; 
 console.log(freeTeacher);
};



school.assignStudent(10, 'biology');

//cd bootcamp\BC_exercises\js 
//node 11.2-school_methods.js