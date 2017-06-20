//imports
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test')

//Create new model (like rails)
const Cat = mongoose.model('Cat', {
  name: String, favouriteFood: String, age: Number
})

//running the query
catFindPromise
  // Good path
  .then(items => {
    console.log('Found', cats)

    // creating cat
    return Cat.create({
      name: 'Snowball'
      favouriteFood: 'Spaghetti'
      age: 24
    })
    .then((responseFromCatCreate) =>{
      return Cat.update({ name: 'Snowball'}, {favouriteFood: 'KFC'})
    })
  })
  // When something bad happens, will error
  .catch(error => {
    console.error('Error in finding or creating cats');
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

// // Update a certaing cat
// Cat.findByIdAndUpdate(5948794576ed3106d1c227fc)

// //Remove all cats named fluffy
// Cat.remove({name: 'Fluffy'}, (error)=> {
//   if (error) {
//     console.error('Fluffy removed')
//   }
// })

//Allow our app to stop
mongoose.disconnect()
