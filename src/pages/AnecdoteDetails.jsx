import { Link } from 'react-router-dom';

const AnecdoteDetails = ({ anecdote }) => {
  if (!anecdote) {
    return <p>{`Requested anecdote not found`}</p>;
  }

  return (
    <div>
      <h2>{anecdote.content}</h2>
      <p>has {anecdote.votes} votes</p>
      <Link className="link" to="/anecdotes/">
        Back
      </Link>
    </div>
  );
};

export default AnecdoteDetails;
