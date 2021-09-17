var ck=require('chalk');
var readLine=require('readline-sync')
console.log(ck.bold.red('how much you know vasudev\n'))
var usrname,userans,score=0,topscore=0;
usrname=readLine.question(ck.magenta('Enter your name : '))
console.log("welcome " + usrname  );
var questions =[{
  question:'1. do you know vasudev ?',
  answer:'yes'
},{
  question:'2. do vasudev love to eat out ?',
  answer:'yes'
}
,{
  question:'3. vasudev can code? yes or no  ',
  answer:'yes'
},{
  question:'4. where vasudev lives?',
  answer:'ujjain'
},{
  question:'5. how old vasudev is ?',
  answer:'21'
},{
  question:'6. vasudev favorite superhero would be ',
  answer: 'ironman'
}];
for(i=0;i<=questions.length-1;i++){
console.log(ck.red(questions[i].question))
userans=readLine.question(ck.green('answer : '))
if (questions[i].answer===userans)
{
  console.log('right ! your answer is ' +userans)
  score++;
}else{
  console.log('wrong answer \n answer is '+questions[i].answer) }
  console.log("current score: ", score);
  console.log("-------------")
}
if(score>topscore){
  topscore=score
  };
  console.log(ck.yellow(usrname+' your score is '+score))
 console.log('top score is '+topscore)