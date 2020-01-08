const express = require('express');
const path = require('path')
const router = express.Router()

router.get('/about', (req, res) => {
  res.status(200)
  res.sendFile(path.resolve('view/about.html'))
})

router.get('/projects', (req, res) => {
  res.status(200)
  res.sendFile(path.resolve('view/projects.html'))
})

router.get('/resume', (req, res) => {
  res.status(200)
  res.sendFile(path.resolve('view/resume.html'))
})

router.get('/contact', (req, res) => {
  res.status(200)
  res.sendFile(path.resolve('view/contact.html'))
})

module.exports = router