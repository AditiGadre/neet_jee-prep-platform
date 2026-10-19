import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { amount, currency = 'INR', receipt, notes } = req.body || {};

  if (!amount || typeof amount !== 'number') {
    return res.status(400).json({ success: false, error: 'Valid amount is required' });
  }

  const razorpayKeyId = process.env.RAZORPAY_KEY_ID || process.env.VITE_RAZORPAY_KEY_ID;
  const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

  // If live keys are present, call Razorpay Orders API
  if (razorpayKeyId && razorpayKeySecret) {
    try {
      const basicAuth = Buffer.from(`${razorpayKeyId}:${razorpayKeySecret}`).toString('base64');
      const rzpResponse = await fetch('https://api.razorpay.com/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${basicAuth}`
        },
        body: JSON.stringify({
          amount: Math.round(amount * 100), // paise
          currency,
          receipt: receipt || `rcpt_${Date.now()}`,
          notes: notes || {}
        })
      });

      const orderData = await rzpResponse.json();

      if (!rzpResponse.ok) {
        return res.status(rzpResponse.status).json({
          success: false,
          error: orderData.error?.description || 'Failed to create Razorpay order'
        });
      }

      return res.status(200).json({
        success: true,
        order: orderData,
        keyId: razorpayKeyId
      });
    } catch (err: any) {
      console.error('Razorpay order creation exception:', err);
      return res.status(500).json({
        success: false,
        error: err.message || 'Internal server error creating order'
      });
    }
  }

  // Fallback test order when keys are pending configuration
  const mockOrder = {
    id: `order_sim_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    entity: 'order',
    amount: Math.round(amount * 100),
    amount_paid: 0,
    amount_due: Math.round(amount * 100),
    currency,
    receipt: receipt || `rcpt_${Date.now()}`,
    status: 'created',
    attempts: 0,
    notes: notes || {},
    created_at: Math.floor(Date.now() / 1000)
  };

  return res.status(200).json({
    success: true,
    order: mockOrder,
    keyId: razorpayKeyId || 'rzp_test_simulated'
  });
}
