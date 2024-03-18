import { useState } from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import AnecdoteList from './components/AnecdoteList';
import CreateForm from './components/CreateForm';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import Menu from './components/Menu';
import About from './pages/About';
import AnecdoteDetails from './pages/AnecdoteDetails';
import Home from './pages/Home';
import './styles/main.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1,
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2,
    },
  ]);

  const [notification, setNotification] = useState('');

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  const match = useMatch('/anecdotes/:id');
  const anecdote = match
    ? anecdotes.find((e) => e.id === Number(match.params.id))
    : null;

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu user={user} />
      {notification && (
        <p style={{ border: '2px solid black', borderRadius: '2px' }}>
          {notification}
        </p>
      )}
      <Routes>
        <Route path="/" element={<Home anecdotes={anecdotes} />} />
        <Route
          path="/create"
          element={
            <CreateForm addNew={addNew} setNotification={setNotification} />
          }
        />
        <Route
          path="/anecdotes/"
          element={<AnecdoteList anecdotes={anecdotes} />}
        />
        <Route
          path="/anecdotes/:id"
          element={<AnecdoteDetails anecdote={anecdote} />}
        />
        <Route
          path="/login"
          element={<LoginForm onLogin={() => setUser(user)} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
