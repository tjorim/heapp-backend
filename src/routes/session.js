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
  const user = await req.context.models.User.findById(req.context.me.id);
  return res.send(user);
});

module.exports = router;
