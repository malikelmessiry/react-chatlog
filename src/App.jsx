import './App.css';
import ChatLog from './components/ChatLog';
import data from '/src/data/messages.json';
import { useState } from 'react';


const App = () => {

  const [entries, setEntries] = useState(data)

  function toggleLike(id) {
    const updatedEntries = entries.map(entry => {
      if (entry.id === id) {
        return { ...entry, liked: !entry.liked }
      }
      return entry;
    });
    setEntries(updatedEntries);
  };

  const totalLikes = entries.filter(entry => entry.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h3>{totalLikes} ❤️s</h3>
      </header>
      <main>
        <ChatLog entries={entries} onToggleLike={toggleLike} />
      </main>
    </div>
  );
};

export default App;
