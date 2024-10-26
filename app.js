//************************************chapter no.20 to 30********************************************/

// **********************************question no.1,2*************************************************

// var firstname=prompt("ENTER YOUR FIRST NAME")
// var lastname=prompt("ENTER YOUR LAST NAME")

// var fullname=firstname+" "+lastname

// document.write(`
//     <h2>Question no. 1 </h2>
//     Your Fullname is ${fullname}`)

//Qusetion no 2

// var favoutiteMob=prompt("TELL US ABOUT YOUR FAVOURITE MOBILE PHONE")

// var userinputLength=favoutiteMob.length

// document.write(`
//<h2>Question no. 2 </h2>
//Your input ${favoutiteMob} is having a length of ${userinputLength} chaarcter`)

// Question no. 3

// var input="pakistani"
// var update= input.indexOf("n")

// document.write(`
//     <h2>Question no. 3 </h2>
//     Your letter N is present at index ${update} in ${input}`)

// Question no.4
// var input="Hello World"
// var update= input.lastIndexOf("l")

// document.write(`
//     <h2>Question no. 4 </h2>
//     Your letter last L is present at index ${update} in ${input}`)

//Question no. 5

// var word="pakistani"

// var find=word[3]

// document.write(`
//      <h2>Question no. 5 </h2>
//       the letter ${find} is present at index 3`)

//Question no. 6

// var firstname=prompt("ENTER YOUR FIRST NAME")
// var lastname=prompt("ENTER YOUR LAST NAME")

// var fullname=firstname.concat(lastname)

// document.write(`
//   <h2>Question no. 6 </h2>
//      Your Fullname is ${fullname}`)

//Question no. 7

// var city="Hyderabad"
// var newvalue= city.replace("Hyder","Islam")

// document.write(`
//   <h2>Question no. 7 </h2>
//      Your replace value from the word ${city} is ${newvalue}`)

//question no. 8

// var sentence="Ali and Sami are best friends. They play cricket and football together"
// var update=sentence.replaceAll("and" , "&")

// document.write(`
//   <h2>Question no. 8 </h2>
//      Your replace value from the sentence ${sentence} is <br /> ${update}`)

//Question no. 9

// var value= "472"

// var newvalue=typeof(value)

// var updatevalue=parseInt(value)

// var newupdate=typeof(updatevalue)

// document.write(`
//     <h2>Question no. 9</h2>
//     Value = ${value} <br />
//     Type of Value = ${newvalue} <br />
//     Updated Value = ${updatevalue} <br />
//     type of Updated Value = ${newupdate} <br />
//     `)

//question no. 10
// var userinput=prompt("Enter your Input")
// var update = userinput.toUpperCase()

// document.write(`
//     <h2>Question no. 10 </h2>
//     ${update}`)

//question no.11

// var userinput=prompt("ENTER YOUR INPUT")
// var update = userinput.slice(0,1).toUpperCase()
// var userinput1=userinput.length
// var update1= userinput.slice(1,userinput1)

// var updatedvalue= update+update1

// document.write(updatedvalue)

//question no. 12

// var num=3536
// var num2=typeof(num)
// var update=num.toString()
// var updvalue=typeof(update)

// document.write(`
//          <h2>Question no. 10 </h2>
//          Value = ${num} <br />
//      Type of Value = ${num2} <br />
//      Updated Value = ${update} <br />
//      type of Updated Value = ${updvalue} <br />`)

//question no. 13

// var usernameinput=prompt("ENTER YOUR USERNAME")
// var wehave=false

// for(i=0;i<usernameinput.length;i++){
//     if(usernameinput[i].charCodeAt() === 33 || usernameinput[i].charCodeAt() === 46
//     || usernameinput[i].charCodeAt() === 46 || usernameinput[i].charCodeAt() === 64 ){
//        wehave=true ; break}
// }

// if(wehave){
//     alert("enter a valid email")
// }
// else{alert("Your Email is Correct")}

//question no. 14

// document.write(`<h2> Question no. 14 <br /><br /> Bakery Item Selection <br /></h2>`)

// var bakeryitem=["cake","apple pie","cookie","chips","patties"]
// var inputItem=prompt("Please input an item you want to find")
// inputItem=inputItem.toLowerCase()

// var wehave = "no"
// var indexnum
// for(var i=0;i<bakeryitem.length;i++){
//     if(inputItem==bakeryitem[i]){wehave = "yes" , indexnum=i}
// }

// if(wehave=="yes"){document.write(`Your input ${inputItem} is present at index ${indexnum}`)}
// else{document.write(`sorry ! We do'nt have ${inputItem}`)}

//question no. 15

// var password = prompt ('Enter your password');

// if (password.length > 5) {
//   if (
//     password[0].charCodeAt () > 47 && 
//     password[0].charCodeAt () < 58
//   ) {
//     alert ('Your password could not start with a Number');
//   }
//    else {
//     alert("Correct Password")
//    }
  
// } else {
//   alert ('Your password must be 6 character long');
// }

///question no. 16

// var university="University of karachi"
// var university=university.split("")
// console.log(university)
// for(i=0;i<university.length;i++){
//     document.write(`<h2>Question no. 16 </h2>
//${university[i]} <br/>` ) }

//question no 17

// var userinput= prompt("Enter any word")
// var lastelement=userinput.length-1

// document.write(`<h2>Question no. 17 </h2>
//the last element of ${userinput} is ${userinput[lastelement]}`)

//Question no. 18

var sentence="The quick brown fox jumps over the lazy dog"
var sentence=sentence.toLowerCase()
var brokenSen=sentence.split(" ")
var count= 0

for(i=0;i<brokenSen.length;i++){
    if(brokenSen[i]==="the"){count++}
}

document.write(`<h2>Question no. 18 </h2>
    ${sentence} <br />
    the word the has ${count} occurences in the above sentence`)
