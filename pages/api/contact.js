import { MongoClient } from 'mongodb';


async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message
    };

    const mongoConnectionStr = `mongodb+srv://${process.env.mongo_username}:${process.env.mongo_pw}@${process.env.mongo_cluster}.qena76u.mongodb.net/${process.env.mongo_12_db}?retryWrites=true&w=majority`;

    let client;
    try {
      client = await MongoClient.connect(mongoConnectionStr);
      const db = client.db();

      try {
        const result = await db.collection('messages').insertOne(newMessage);
        newMessage._id = result.insertedId;
        client.close();
      } catch(err) {
        client.close();
        res.status(500).json({ message: 'Storing message failed!' });
        return;
      }
    } catch(err) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    res.status(201).json({ message: newMessage || 'Successfully stored message!' });
  }
};

export default handler;
