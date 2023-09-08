let studentsGrade = [50, 60, 70, 80, 90];

const sum = studentsGrade.reduce(function(previousValue, currentValue, index, array){
    console.log(11, previousValue, currentValue);
    return previousValue + currentValue;
},0);

console.log("sum", sum);

const avg = sum / studentsGrade.length;

if(0 < avg && avg <= 70){
    console.log('D');
}else if(71 < avg && avg <= 80){
    console.log('C');
}else if(81 <avg && avg <= 90){
    console.log('B') ;
}else if(avg > 91){
    console.log('A')
}
