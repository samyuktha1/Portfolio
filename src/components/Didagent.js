import React, { useEffect } from 'react';

const DidAgent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://agent.d-id.com/v1/index.js';
    script.setAttribute('data-name', 'did-agent');
    script.setAttribute('data-mode', 'fabio');
    script.setAttribute('data-client-key', 'Z29vZ2xlLW9hdXRoMnwxMDY3MTg2OTYwMDUyNDgwNDI4ODI6TlZGNXpMZFZuZy1nczhRd1NwMTZv');
    script.setAttribute('data-agent-id', 'agt_vRGSMO_x');
    script.setAttribute('data-monitor', 'true');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default DidAgent;
