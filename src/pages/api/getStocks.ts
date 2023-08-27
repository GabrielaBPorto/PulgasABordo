import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/src/utils/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    db.all('SELECT * FROM stocks', [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({ stocks: rows });
    });
  } else {
    res.status(405).end(); // Método não permitido
  }
}
