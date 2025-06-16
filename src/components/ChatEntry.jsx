import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import propTypes from 'prop-types';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onToggleLike }) => {

  const localOrRemote = sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';
    
  return (
    <div className={localOrRemote}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={() => onToggleLike(id)}>{liked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  timeStamp: propTypes.string.isRequired,
  liked: propTypes.bool.isRequired,
  onToggleLike: propTypes.func
};

export default ChatEntry;
