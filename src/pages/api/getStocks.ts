import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
      res.status(200).json({ stocks: [] });
  } else {
    res.status(405).end(); // Método não permitido
  }
}
