import AnecdoteList from '../components/AnecdoteList';

const Home = ({ anecdotes }) => {
  return (
    <div>
      <AnecdoteList anecdotes={anecdotes} />
    </div>
  );
};

export default Home;
