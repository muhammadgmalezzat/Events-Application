import {MongoClient} from 'mongodb'

async function connectDatabase() {
    const client = await MongoClient.connect("mongodb+srv://muhmd:gemy200@clusterevents.taro8iq.mongodb.net/events?retryWrites=true&w=majority");
    return client;
}

async function insertDocument(client,document) {
    const db = client.db()
                
        await db.collection("emails").insertOne(document)
            
}

async function emailRegiteration(req, res) {
    if (req.method === 'POST') { 
        const email = req.body.email;
        if (!email || !email.includes('@')) { 
            res.status(422).json({ message: 'Invalid Email  ' })
        }

        let client;
        try {
            client = await connectDatabase()
        } catch (error) {
            res.status(500).json({ message: 'Databas connection failed ' })
            return;
        }

        try {
            await insertDocument(client, { email: email })
            client.close()
        } catch (error) {
            res.status(500).json({ message: 'Inserting data failed ' })
        }
        
        
        
        
    }
    res.status(201).json({ message: 'Email registration successful ' })
    
}
export default emailRegiteration;