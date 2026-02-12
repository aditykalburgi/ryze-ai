const { z } = require('zod');

const uiCodeSchema = z.object({
  code: z.string(),
  components: z.array(z.string()),
});

function validateUICode(req, res, next) {
  try {
    uiCodeSchema.parse(req.body);
    next();
  } catch (err) {
    res.status(400).json({ error: err.errors });
  }
}

module.exports = { validateUICode };
