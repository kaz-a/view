const express = require('express'),
  app = express(),
  path = require('path'),
  port = process.env.PORT || 3000;

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')))
app.use('/img', express.static(path.join(__dirname, 'assets/img')))

app.get('/', (req, res, next) => {
  // res.sendFile(path.join(__dirname, 'basic.html'))
  res.sendFile(path.join(__dirname, 'punchgame.html'))
  // res.sendFile(path.join(__dirname, 'component.html'))
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}...`)
})