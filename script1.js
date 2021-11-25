//start here
//var something = userInput[0].split(" ");
//var something1 = userInput[1].split(" ");
//var something2 = userInput[2].split(" ");
//var dd = +something[0]+ +something[1] + +something[2] + +something1[0]+ + +something1[1]+ +something1[2]+ +something2[0] + +something2[1]+ +something2[2];
//console.log(dd) ;
//end-here
//});

//+ : parseInt

//with for loop
const readline= require("readline");
const inp = readline.createInterface({
    input: process.stdin});
    const userInput = [];
    inp.on("line",(data) => {
        userInput.push(data);
    });
inp.on("close",() => {
//start here
for(let i=0; i<3; i=i+1)
{
for(let j=0; j<3; j=j+1)
{
let something=userInput[i].split(" ");
sum = sum + + something[j];
}
}
console.log(sum);
//end here
});
