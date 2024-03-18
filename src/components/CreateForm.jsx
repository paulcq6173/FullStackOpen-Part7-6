import { useNavigate } from 'react-router-dom';
import useField from '../hooks/index';

const CreateNew = (props) => {
  const navigate = useNavigate();
  const useContent = useField('content');
  const useAuthor = useField('author');
  const useInfo = useField('info');
  const content = useContent.value;
  const author = useAuthor.value;
  const info = useInfo.value;

  const handleSubmit = (e) => {
    e.preventDefault();

    const { setNotification } = props;
    if (!content || !author) {
      setNotification(`Error: content and author cannot be blank`);
      setTimeout(() => {
        setNotification(null);
      }, 5000);

      return;
    }
    props.addNew({
      content,
      author,
      info,
      votes: 0,
    });

    navigate('/');
    setNotification(`New anecdote: ${content} created`);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleReset = (e) => {
    e.preventDefault();

    useContent.onReset();
    useAuthor.onReset();
    useInfo.onReset();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...useContent} />
        </div>
        <div>
          author
          <input {...useAuthor} />
        </div>
        <div>
          url for more info
          <input {...useInfo} />
        </div>
        <button className="btn-normal" type="submit">
          create
        </button>
        <button className="btn-normal" onClick={handleReset}>
          reset
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
