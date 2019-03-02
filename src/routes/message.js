const uuidv4 = require('uuid/v4');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('GET HTTP method on messages resource');
  return res.send(Object.values(req.context.models.messages));
});

router.get('/:messageId', (req, res) => {
  console.log('GET HTTP method on message');
  return res.send(req.context.models.messages[req.params.messageId]);
});

router.post('/', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };

  req.context.models.messages[id] = message;

  return res.send(message);
});

router.delete('/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = req.context.models.messages;

  req.context.models.messages = otherMessages;

  return res.send(message);
});

module.exports = router;
