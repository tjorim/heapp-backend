const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('GET HTTP method on users resource');
  return res.send(Object.values(req.context.models.users));
});

router.get('/:userId', (req, res) => {
  console.log('GET HTTP method on user');
  return res.send(req.context.models.users[req.params.userId]);
});

module.exports = router;

/*
app.post('/createUser', (req, res) => {
  store
    .createUser({
      username: req.body.username,
      password: req.body.password
    })
    .then(() => res.sendStatus(200))
})
/////
app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

app.put('/users', (req, res) => {
  return res.send('PUT HTTP method on user resource');
});

app.delete('/users', (req, res) => {
  return res.send('DELETE HTTP method on user resource');
});

app.put('/users/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.userId} resource`,
  );
});

app.delete('/users/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource`,
  );
});
// */
