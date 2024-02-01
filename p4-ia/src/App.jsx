import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'text/html' } };

    const consultarAPI = async () => {
      const url = 'https://api.webscraping.ai/ai/question?url=https%3A%2F%2Fwww.youtube.com%2F&question=What%20is%20the%20summary%20of%20this%20page%20content%3F&context_limit=8000&response_tokens=100&on_context_limit=truncate&timeout=10000&js=true&js_timeout=2000&proxy=datacenter&country=us&device=desktop&error_on_404=false&error_on_redirect=false&api_key=5a0cad56-1299-4f0f-aeb5-1dbcf3b0a69c'
      const response = await fetch(url, options)
      const result = await response.json()
      console.log(result)

      const stringResponse = result.message
      return stringResponse
    }

    consultarAPI();
  }, []); 

  return (
    <div>
      <p>aca deberia aparecer la api xd</p>
      {apiResponse && (
        <div>
          <h2>API Response:</h2>
          <p>{consultarAPI}</p>
        </div>
      )}
    </div>
  );
}

export default App;
