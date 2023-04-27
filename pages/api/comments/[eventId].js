//=> api/comments/id
import {MongoClient} from 'mongodb'

async function submitComments(req, res) {
    const eventId = req.query.eventId;

    let comments=[]
    if (req.method === 'POST') { 
        const email = req.body.email;
        const name = req.body.name;
        const text = req.body.text;
        if (!email.includes("@") ||
            !name ||
            name.trim() === "" ||
            !text ||
            text.trim() === "") {
            res.status(422).json({ message: 'Invalid input  ' })
            return;
        }

        const newComment = {
            
            email,
            name,
            text,
            eventId
        } 
        const client = await MongoClient.connect("mongodb+srv://muhmd:gemy200@clusterevents.taro8iq.mongodb.net/events?retryWrites=true&w=majority");

        const db = client.db()
                
        const result =await db.collection("comments").insertOne(newComment)
            
        newComment.id=result.insertedId
        
        //console.log(result)
        res.status(201).json({ message: 'Added Comment  successfully', comment: newComment })
        client.close()
        //console.log(req.body.email)
    }

    if (req.method === 'GET') {
        const client = await MongoClient.connect("mongodb+srv://muhmd:gemy200@clusterevents.taro8iq.mongodb.net/events?retryWrites=true&w=majority");
        const db = client.db()
        const documents= await db.collection("comments").find().sort({_id:-1}).toArray()
        const dummyList = [
            { id: "c1", name: 'muhammad gmal', text: 'c1' },
            { id: "c2", name: 'muhammad gmal', text: 'c2' },
            { id: "c3",  name: 'muhammad gmal', text: 'c3' }
        ]

        res.status(200).json({ comments: documents })
        //const email = req.body.email;
        //console.log(req.body)
    }
    
}
export default submitComments;