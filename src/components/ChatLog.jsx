import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onToggleLike }) => {
    const chatEntries = entries.map(entry => (
        <ChatEntry
            key={entry.id}
            id={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            liked={entry.liked}
            toggleLike={onToggleLike}
        />
    ));

    return (
        <section className='chat-log'>{chatEntries}</section>
    )

};

export default ChatLog;