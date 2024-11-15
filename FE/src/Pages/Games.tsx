import React, { useState } from "react";
import FooterGames from "@/Components/FooterGames"
import HeaderGames from "@/Components/HeaderGames"
import MatchingGames from "@/Components/MatchingGames"
import Navbar from "@/Components/Navbar";

const levels = {
    1: { words: ["Happy", "Fast", "Smart"], synonyms: ["Joyful", "Quick", "Clever"], correctPairs: [{ word: 0, synonym: 0 }, { word: 1, synonym: 1 }, { word: 2, synonym: 2 }] },
    2: { words: ["Big", "Small", "Angry", "Cold"], synonyms: ["Large", "Tiny", "Furious", "Chilly"], correctPairs: [{ word: 0, synonym: 0 }, { word: 1, synonym: 1 }, { word: 2, synonym: 2 }, { word: 3, synonym: 3 }] },
    3: { words: ["Bright", "Dark"], synonyms: ["Radiant", "Dim"], correctPairs: [{ word: 0, synonym: 0 }, { word: 1, synonym: 1 }] },
  };
  
  const Games: React.FC = () => {
    const [currentLevel, setCurrentLevel] = useState<number>(1);
    const [lines, setLines] = useState<{ word: number; synonym: number }[]>([]);
    const [resultMessage, setResultMessage] = useState<string | null>(null);
  
    const handleAddLine = (line: { word: number; synonym: number }) => {
      setLines((prev) => [...prev, line]);
    };
  
    const handleCheckAnswers = () => {
      const correctPairs = levels[currentLevel].correctPairs;
      const correctCount = lines.filter((line) =>
        correctPairs.some((pair) => pair.word === line.word && pair.synonym === line.synonym)
      ).length;
  
      if (correctCount === correctPairs.length) {
        setResultMessage("All answers are correct!");
      } else {
        setResultMessage("Some answers are incorrect. Try again.");
      }
    };
  
    const handleRestart = () => {
      setLines([]);
      setResultMessage(null);
    };
  
    const handleLevelChange = (newLevel: number) => {
      setCurrentLevel(newLevel);
      handleRestart(); // Reset canvas and lines when level changes
    };
  
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100">
                <HeaderGames currentLevel={currentLevel} onLevelChange={handleLevelChange} />
                <MatchingGames
                levelData={levels[currentLevel]}
                lines={lines}
                onAddLine={handleAddLine}
                />
                <FooterGames onCheckAnswers={handleCheckAnswers} onRestart={handleRestart} resultMessage={resultMessage} />
            </div>
        </>
    );
  };
  

export default Games