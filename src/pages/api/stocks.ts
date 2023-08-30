import { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await open({
    filename: './myDatabase.db',
    driver: sqlite3.Database
  });

  if (req.method === 'GET') {
    const stocks = await db.all('SELECT * FROM estoque_feira');
    res.status(200).json({ stocks });
  } else {
    res.status(405).end(); // Método não permitido
  }
}
