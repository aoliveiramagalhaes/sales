// console.log('i')
// let i = 10
// console.log(i)
// console.log(i)
// console.log('i')

// Statement 1 is executed (one time) before the execution of the code block.
// Statement 2 defines the condition for executing the code block.
// Statement 3 is executed (every time) after the code block has been executed.

// for (statement 1; statement 2; statement 3) {
//   // code block to be executed
// }

// alert("test")
// console.log("test")


array = [10, 20, 30, 40, 50, 60]

//i = index
// half = array.length / 2
// array[half]

number = 50

for (let i = 0; i < array.length; i++) {
  console.log(i)

  if (array[i] === number) {
    console.log(i)
    break
  }
}


function getEmailsFromDatabase() {
  return [
    { from: 'Aline', subject: 'Email 1' },
    { from: 'Aline', subject: 'Email 1.1' },
    { from: 'Pablo', subject: 'Email 2' }
  ]
}

const emails = getEmailsFromDatabase()

for (let i = 0; i < emails.length; i++) {
  // console.log('FROM: ' + emails[i].from + '; SUBJECT: ' + emails[i].subject)
}

fromABC = 'Aline'

for (let i = 0; i < emails.length; i++) {

  if (emails[i].from === fromABC) {
    console.log('FROM: ' + emails[i].from + '; SUBJECT: ' + emails[i].subject)
  }

}