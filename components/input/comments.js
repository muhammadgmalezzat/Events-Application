import { useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import { useEffect } from 'react';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [commentsList, setcommentsList] = useState([])
  
  useEffect(() => {
    if (showComments) {
      fetch("/api/comments/" + eventId)
        .then((Response) => Response.json())
        .then((data) => {
          console.log(data)
          setcommentsList(data.comments)
        })
    }
  },[showComments,commentsList])
  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);

  }

  function addCommentHandler(commentData) {
    console.log(commentData)
    const email = commentData.email;
    const name = commentData.name;
    const text = commentData.text;
    const requestBody = { email: email, name: name, text: text };
    
    fetch("/api/comments/"+ eventId, {
      method: "post",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((Response) => Response.json()).then(
      (data)=> console.log(data)
    )
    // send data to API
  }
  

  return (
    
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList commentsList={commentsList }/>}
    </section>
  );
}

export default Comments;
