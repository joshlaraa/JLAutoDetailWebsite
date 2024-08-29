import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { full_name, phone_number, email_address, message } = req.body;

    try {
      // Connect to the database
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });

      // Insert the contact message into the database
      const [result] = await connection.execute(
        'INSERT INTO contact_messages (full_name, phone_number, email_address, message) VALUES (?, ?, ?, ?)',
        [full_name, phone_number, email_address, message]
      );

      // Close the connection
      await connection.end();

      // Respond with success
      res.status(200).json({ message: 'Message saved successfully' });
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Database connection error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
