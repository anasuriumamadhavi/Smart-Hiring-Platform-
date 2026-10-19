// Minimal health check serverless function for Vercel
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }));
};
