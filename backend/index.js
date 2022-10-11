// Dependenies

const express = require('express')
// *

// config - express
const app = express()


// endpoint - posts
app.get('/posts', (req, res) => {
  let posts = [
    {
      caption: 'Golden Gate Bridge',
      location: 'San Francisco'
    },
    {
      caption: 'London Eye',
      location: 'London'
    }
  ]
  console.log(HI)
  res.send('posts')
})


// Listen
app.listen(3000)
