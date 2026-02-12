const WHITELIST = ['Button', 'Input'];

function enforceWhitelist(req, res, next) {
  const { components } = req.body;
  if (!components.every(c => WHITELIST.includes(c))) {
    return res.status(403).json({ error: 'Component not whitelisted' });
  }
  next();
}

module.exports = { enforceWhitelist };
