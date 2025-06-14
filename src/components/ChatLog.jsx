import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {
    const chatEntries = entries.map(entry => (
        <ChatEntry
            key={entry.id}
            id={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
        />
    ));

    return (
        <section className='chat-log'>{chatEntries}</section>
    )

};

export default ChatLog;