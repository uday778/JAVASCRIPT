console.log("hello world!");
let myDate = new Date(); 
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)



let mycreatedDAte=new Date(2023,9,23)
let mycreatedDaate=new Date(2023,9,23,5,3)//time 5:30
let mycreatedDate=new Date("2023-01-14")
console.log(mycreatedDate.toLocaleString())


time

let myTimestamp=Date.now()
console.log(myTimestamp)
console.log(mycreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let NewDate=new Date()
console.log(NewDate)
console.log(NewDate.getMonth()+1)

console.log(NewDate.getDay())
console.log(NewDate.getDate())
console.log(NewDate.getFullYear())

NewDate.toLocaleString('default',
{
   day:"2-digit",
   hourCycle:"h24",
})
