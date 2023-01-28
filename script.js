//your code here
function getCount(str) {
 return str.split(' ').filter(function(num) {
  return num != ''
 }).length;
}
function countfun(){
 let wordcount =document.getElementById("evaluatedText").value;
    
    let countword = document.getElementById("wordCount").innerHTML=getCount(wordcount);
}