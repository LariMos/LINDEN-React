import React, { useState } from 'react';

function Footer() {
  const [message, setMessage] = useState('');

  const handleSendClick = () => {
    window.location.href = `mailto:larisa.miriana@gmail.com?subject=Article Impressions&body=${message}`;
  };

  return (
    <footer className="bg-gray-200 md:p-8 flex flex-col items-center justify-center space-y-2 md:space-y-4 lg:space-y-6">
      <div className="flex w-full max-w-2xl justify-between items-center">
        <div className="mt-4 font-poppins text-base md:text-lg lg:text-xl font-semibold">
          Found a great article? Share your thoughts with me!
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-start md:items-center w-full max-w-2xl">
        <input 
          className="p-2 border rounded-md font-poppins w-full" 
          type="text" 
          placeholder="Type your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button 
          className="hover-target border border-black text-black p-2 rounded-md font-poppins hover:bg-gray-300 w-full md:w-auto"
          onClick={handleSendClick}
        >
          Send
        </button>
      </div>

      <div className="text-sm mb-20 font-poppins-300 self-start">
        ©copyright mOs
      </div>
    </footer>
  );
}

export default Footer;
