const express = require('express');
const { register, login } = require('../models/users');

const router = express.Router();

/* Register a user */
router.post('/register', async (req, res) => {
  const firstname = req?.body?.firstname;
  const lastname = req?.body?.lastname;
  const email = req?.body?.email;
  const password = req?.body?.password;
  const address = req?.body?.address;
  const birthdate = req?.body?.birthdate;

  // eslint-disable-next-line max-len
  if (!email || !password || !firstname || !lastname || !address || !birthdate) return res.sendStatus(400);

  // eslint-disable-next-line max-len
  const authenticatedUser = await register(firstname, lastname, email, password, address, birthdate);

  if (!authenticatedUser) return res.sendStatus(401);

  return res.json(authenticatedUser);
});

/* Login a user */
router.post('/login', async (req, res) => {
  const email = req?.body?.email?.length !== 0 ? req.body.email : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!email || !password) return res.sendStatus(400); // 400 Bad Reques

  const authenticatedUser = await login(email, password);

  if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized

  return res.json(authenticatedUser);
});

module.exports = router;
