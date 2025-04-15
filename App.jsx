// Hoofdcomponent van de website
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welkom in het Virtuele Hotel</h1>
      <p>Kies een medewerker om mee te chatten of bekijk de plattegrond en kamerinformatie.</p>
    </div>
  );
}

function GeneralManagerChat() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hallo, ik ben de General Manager. Waarmee kan ik je helpen?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: 'user', text: input }];
    newMessages.push({ sender: 'bot', text: 'Bedankt voor je vraag! Ik kom hier zo op terug.' });
    setMessages(newMessages);
    setInput('');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Chat met de General Manager</h2>
      <div className="border p-4 h-64 overflow-y-scroll mb-4 bg-white rounded">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>{msg.text}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="border flex-1 px-2 py-1 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={handleSend}>Verstuur</button>
      </div>
    </div>
  );
}

function Plattegrond() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Plattegrond van het hotel</h2>
      <p>[Hier komt een visuele plattegrond]</p>
    </div>
  );
}

function Kamers() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Kamers in het hotel</h2>
      <ul className="list-disc pl-5">
        <li>Standaard Kamer – Comfortabel en betaalbaar</li>
        <li>Deluxe Kamer – Meer ruimte en luxe voorzieningen</li>
        <li>Suite – Ruim met aparte woonkamer en luxe badkamer</li>
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav className="bg-gray-800 text-white p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/general-manager">General Manager</Link>
        <Link to="/plattegrond">Plattegrond</Link>
        <Link to="/kamers">Kamers</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/general-manager" element={<GeneralManagerChat />} />
        <Route path="/plattegrond" element={<Plattegrond />} />
        <Route path="/kamers" element={<Kamers />} />
      </Routes>
    </Router>
  );
}
