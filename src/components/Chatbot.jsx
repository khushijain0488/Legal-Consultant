import React, { useState, useRef, useEffect } from 'react';
import { 
  X, Send, BookOpen, Gavel, FileText, 
  HelpCircle, Scale, UserCheck, Archive 
} from 'lucide-react';

const constitutionKnowledgeBase = {
  greetings: [
    'Namaste! I\'m your Indian Constitution expert. How can I assist you today?',
    'Hello! Ready to explore the depths of the Indian Constitution?'
  ],
  defaultResponses: [
    "I can help you with various aspects of the Indian Constitution. Try asking about fundamental rights, constitutional articles, or specific legal provisions.",
    "Would you like to know about the Preamble, Fundamental Rights, or specific constitutional articles?"
  ],
  topics: {
    'fundamental rights': {
      summary: 'The Constitution guarantees six fundamental rights in Part III:',
      details: [
        'Right to Equality (Articles 14-18)',
        'Right to Freedom (Articles 19-22)',
        'Right against Exploitation (Articles 23-24)',
        'Right to Freedom of Religion (Articles 25-28)',
        'Cultural and Educational Rights (Articles 29-30)',
        'Right to Constitutional Remedies (Article 32)'
      ]
    },
    'preamble': {
      summary: 'The Preamble defines India\'s core constitutional values:',
      details: [
        'Sovereign: Independent and supreme',
        'Socialist: Socio-economic equality',
        'Secular: No state religion',
        'Democratic: Power belongs to the people',
        'Republic: Elected head of state'
      ]
    },
    'amendments': {
      summary: 'Constitutional amendments allow flexibility:',
      details: [
        'Procedure in Article 368',
        'Parliament can amend with 2/3rd majority',
        'Basic structure cannot be altered'
      ]
    }
  },
  keyArticles: {
    '14': 'Right to Equality before Law',
    '19': 'Fundamental Freedoms',
    '21': 'Right to Life and Personal Liberty',
    '32': 'Right to Constitutional Remedies'
  }
};

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const processMessage = (message) => {
    const lowerMessage = message.toLowerCase();

    // Greeting check
    if (['hi', 'hello', 'hey'].some(greeting => lowerMessage.includes(greeting))) {
      return constitutionKnowledgeBase.greetings[
        Math.floor(Math.random() * constitutionKnowledgeBase.greetings.length)
      ];
    }

    // Topic matching
    for (let topic in constitutionKnowledgeBase.topics) {
      if (lowerMessage.includes(topic)) {
        const topicInfo = constitutionKnowledgeBase.topics[topic];
        return `${topicInfo.summary}\n\n${topicInfo.details.join('\n')}`;
      }
    }

    // Article matching
    for (let article in constitutionKnowledgeBase.keyArticles) {
      if (lowerMessage.includes(article)) {
        return `Article ${article}: ${constitutionKnowledgeBase.keyArticles[article]}`;
      }
    }

    return constitutionKnowledgeBase.defaultResponses[
      Math.floor(Math.random() * constitutionKnowledgeBase.defaultResponses.length)
    ];
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user'
    };

    const aiResponse = {
      id: Date.now() + 1,
      text: processMessage(inputMessage),
      sender: 'ai'
    };

    setMessages(prev => [...prev, userMessage, aiResponse]);
    setInputMessage('');
  };

  const QuickTopicButtons = () => (
    <div className="flex space-x-2 mb-2 overflow-x-auto">
      {Object.keys(constitutionKnowledgeBase.topics).map(topic => (
        <button
          key={topic}
          onClick={() => {
            const topicInfo = constitutionKnowledgeBase.topics[topic];
            setMessages(prev => [
              ...prev, 
              { 
                id: Date.now(), 
                text: topic.charAt(0).toUpperCase() + topic.slice(1), 
                sender: 'user' 
              },
              { 
                id: Date.now() + 1, 
                text: `${topicInfo.summary}\n\n${topicInfo.details.join('\n')}`, 
                sender: 'ai' 
              }
            ]);
          }}
          className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors flex items-center"
        >
          {topic === 'fundamental rights' && <Scale className="w-4 h-4 mr-1" />}
          {topic === 'preamble' && <BookOpen className="w-4 h-4 mr-1" />}
          {topic === 'amendments' && <Archive className="w-4 h-4 mr-1" />}
          {topic.charAt(0).toUpperCase() + topic.slice(1)}
        </button>
      ))}
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[500px] h-[700px] bg-white rounded-xl shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center bg-blue-600 text-white">
          <div className="flex items-center space-x-2">
            <Gavel className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Constitution Assistant</h2>
          </div>
          <button 
            onClick={onClose} 
            className="hover:bg-blue-700 p-1 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Topic Buttons */}
        <div className="p-2 border-b">
          <QuickTopicButtons />
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto p-4 space-y-3">
          {messages.map(message => (
            <div 
              key={message.id} 
              className={`flex ${
                message.sender === 'user' 
                  ? 'justify-end' 
                  : 'justify-start'
              }`}
            >
              <div 
                className={`
                  max-w-[80%] p-3 rounded-lg 
                  ${message.sender === 'user' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-black'}
                  whitespace-pre-wrap
                `}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t flex space-x-2">
          <input 
            type="text" 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask about the Indian Constitution..."
            className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button 
            onClick={handleSendMessage}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;