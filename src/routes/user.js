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
  console.log('GET HTTP method on users resource');
  const users = await req.context.models.User.find();
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  console.log('GET HTTP method on user');
  const user = await req.context.models.User.findById(req.params.userId);
  return res.send(user);
});

// ... other routes ...

module.exports = router;
