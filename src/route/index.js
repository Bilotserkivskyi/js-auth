// Підключаємо роутер до бек-енду
const express = require('express')

const router = express.Router()

router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  // сюди вводимо назву файлу з container

  res.render('index', {
    // вказуємо назву контейнера
    name: 'index',
    // вказуємо назву компонентів
    component: [],

    // вказуємо назву сторінки
    title: 'Home page',
    // ... сюди можна далі продовжувати додавати потрібні технічні

    // вказуємо дані,
    data: {},
    // 11 сюди водимо JSON дані
  })
})

// Підключіть файли роутів
const auth = require('./auth')

router.use('/', auth)

// Експортуємо глобальний роутер
module.exports = router
