// Health check endpoint for Vercel serverless functions
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ 
      status: 'OK', 
      timestamp: new Date().toISOString(),
      message: 'QuantZen Backend is healthy!'
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}