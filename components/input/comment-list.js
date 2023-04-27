import classes from './comment-list.module.css';

function CommentList(props) {
  const  commentsList  = props.commentsList;
  console.log(commentsList)

  //   if (!commentsList) {
  //   return <p>No comments</p>
  // }
  return (
    <ul className={classes.comments}>
      {
        commentsList.map(comment => {
          return (<li key={comment._id}>
            <p>{comment.text }</p>
              <div>
              By <address>{comment.name }</address>
              </div>
          </li>)
          
        })
      }

    </ul>
  );
}

export default CommentList;
