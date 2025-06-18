import React from 'react';

export default function BuyMeACoffee() {
  return (
    <div style={{textAlign: 'center', marginTop: '2rem'}}>
      <a
        href="https://buymeacoffee.com/kaholau"
        target="_blank"
        rel="noopener noreferrer"
        style={{fontSize: '1.2rem'}}
      >
        <i className="fa-solid fa-mug-saucer" style={{marginRight: '0.3rem'}}></i>
        Buy me a coffee
      </a>
    </div>
  );
}
