//imports
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test')

//Create new model (like rails)
const Cat = mongoose.model('Cat', {
  name: String, favouriteFood: String, age: Number
})

//Find all cats
Cat.find((error, items) => {
  if (error) {
    console.error(error.mesaage)
  }
  else {
    console.log('Found', items)
  }
})

//Creating a cat
Cat.create({
  name: 'Fluffy',
  favouriteFood: 'Snickers',
  age: 11
  }, (error, cats) => {
    if (error) {
      console.error(error.mesaage)
    }
    else {
      console.log('Found', cats)
    }
  })

//UPDATE
Cat.update({name:'Fluffy'}, //Conditions
  { $inc: {age: 1} }, // Changes
  {multi: true}, //Options
  (error) => {
    if (error) {
      console.error(error.message)
    }
  })

// // Update a cat
// Cat.findByIdAndUpdate(5948794576ed3106d1c227fc)

// //Remove all cats named fluffy
// Cat.remove({name: 'Fluffy'}, (error)=> {
//   if (error) {
//     console.error('Fluffy removed')
//   }
// })

//Allow our app to stop
mongoose.disconnect()
