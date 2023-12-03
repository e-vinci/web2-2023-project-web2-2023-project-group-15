const express = require('express');

const router = express.Router();

const { getInfoByUserId, updateUserInfo, getIdFromUsername } = require('../models/users');

router.get('/', (req, res) => {
  console.log('test2');
  const foundIndex = getIdFromUsername('admin');

  console.log('foundIndex:', foundIndex);

  if (!foundIndex) {
    console.log('User not found');
    return res.sendStatus(404);
  }

  return res.json(foundIndex);
});

router.get('/:id', (req, res) => {
  const foundUser = getInfoByUserId(req.params.id);

  if (!foundUser) return res.sendStatus(404);

  return res.json(foundUser);
});

router.patch('/:id', (req, res) => {
  const firstname = req?.body.firstname;
  const lastname = req?.body.lastname;
  const birthdate = req?.body.birthdate;
  const email = req?.body.email;
  const password = req?.body.password;
  const adress = req?.body.adress;

  // eslint-disable-next-line max-len
  if (!firstname && !lastname && !birthdate && !email && !adress) return res.sendStatus(400);

  // eslint-disable-next-line max-len
  if (firstname?.length === 0 || lastname?.length === 0 || birthdate?.length === 0 || email?.length === 0 || adress?.length === 0) return res.sendStatus(400);

  // eslint-disable-next-line max-len
  const updatedUser = updateUserInfo(req.params.id, {
    firstname, lastname, birthdate, email, password, adress,
  });

  if (!updatedUser) return res.sendStatus(404);

  return res.json(updatedUser);
});

module.exports = router;
