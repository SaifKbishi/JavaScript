
//5.3.1
function PW_validation_IF_ELSE(pw){
 if(pw.length > 7){
  return 'Strong'
 }else{
  return 'Weak'
 }
}

//5.3.2
function PW_validation_Trenary(pw){
let isStrong = (pw.length > 7 ) ? 'Strong' : 'Weak'
return isStrong;
}

//5.3.3
function PW_validation_LogicalOP(pw){
 return pw.length > 7 && 'Strong' || 'Weak'
}

//5.3.4
function advanced_PW_validation(pw){
 let reg = new RegExp('^(?=.{7,}$)(?=.*[A-Z])');
return (reg.test(pw)) ? 'Very Strong' : (pw.length >7 ) ? 'Strong' : 'Weak';
}

//^(?=.{7,}$)

//

console.log('\nIF_ELSE:');
console.log(PW_validation_IF_ELSE('12345678'));
console.log(PW_validation_IF_ELSE('123456'));
console.log('\nTrenary:');
console.log(PW_validation_Trenary('12345678'));
console.log(PW_validation_Trenary('123456'));
console.log('\nLogical Operator:');
console.log(PW_validation_LogicalOP('12345678'));
console.log(PW_validation_LogicalOP('123456'));
console.log('\nStrong validation:');
console.log(advanced_PW_validation('12345455678'));
console.log(advanced_PW_validation('12345678A'));
console.log(advanced_PW_validation('123456'));

/*cd bootcamp\BC_exercises\js */
/*node 5.3-password_validation.js*/