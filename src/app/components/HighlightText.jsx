'use client'
import React, { useState, useCallback } from 'react';

const HighlightText = ({ children }) => {
  const [selectedText, setSelectedText] = useState('');

  const handleTextSelection = useCallback(() => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    if (selectedText) {
      setSelectedText(selectedText);
    }
  }, []);

  return (
    <div className="relative">
      <p
        className="text-white cursor-text"
        onMouseUp={handleTextSelection}
        onTouchEnd={handleTextSelection}
      >
        {children}
      </p>
      {selectedText && (
        <div className="absolute top-full left-0 mt-2 p-2 bg-yellow-300 text-black rounded shadow">
          Selected: {selectedText}
        </div>
      )}
    </div>
  );
};

export default function HighlightDemo() {
  return (
    <div className="p-4 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-4">Highlight Selected Text Demo</h1>
      <HighlightText>
        You do the business, we'll handle the money. With the right credit card, you can improve your
        financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on
        the market.
      </HighlightText>
    </div>
  );
}




