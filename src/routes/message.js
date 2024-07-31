const express = require('express');
const rateLimit = require('express-rate-limit');
const router = express.Router();

// Apply rate limiting to all routes in this router
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

router.use(limiter);

router.get('/', async (req, res) => {
  console.log('GET HTTP method on messages resource');
  const messages = await req.context.models.Message.find();
  return res.send(messages);
});

router.get('/:messageId', async (req, res) => {
  console.log('GET HTTP method on message');
  const message = await req.context.models.Message.findById(req.params.messageId);
  return res.send(message);
});

// ... other routes ...

module.exports = router;
