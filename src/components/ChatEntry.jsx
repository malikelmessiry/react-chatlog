import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import propTypes from 'prop-types';

const ChatEntry = ({ id, sender, body, timeStamp, liked, toggleLike }) => {

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={() => toggleLike(id)}>{liked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  timeStamp: propTypes.string.isRequired,
  liked: propTypes.bool.isRequired,
  toggleLike: propTypes.func.isRequired
};

export default ChatEntry;
