import React from "react";

interface HeaderProps {
  currentLevel: number;
  onLevelChange: (level: number) => void;
}

const HeaderGames: React.FC<HeaderProps> = ({ currentLevel, onLevelChange }) => {
    return (
      <header className="text-center my-6 mt-20">
        <h1 className="text-2xl font-bold text-gray-800">Word Synonym Matching</h1>
        <p className="text-gray-600 mt-2">Connect words with their correct synonyms.</p>
        <label className="block mt-4 text-gray-700">
          Choose Level:
          <select
            value={currentLevel}
            onChange={(e) => onLevelChange(Number(e.target.value))}
            className="ml-2 p-2 border rounded"
          >
            <option value={1}>Level 1 - Easy</option>
            <option value={2}>Level 2 - Medium</option>
            <option value={3}>Level 3 - Hard</option>
          </select>
        </label>
      </header>
    );
  };
  

export default HeaderGames;
