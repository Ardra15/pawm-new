import React, { useEffect, useState, useRef } from "react";

interface LevelData {
  words: string[];
  synonyms: string[];
  correctPairs: { word: number; synonym: number }[];
}

interface Line {
    word: number;
    synonym: number;
    wordX: number;
    wordY: number;
    synonymX: number;
    synonymY: number;
  }


  interface MatchingAreaProps {
    levelData: LevelData;
    lines: Line[];
    onAddLine: (line: { word: number; synonym: number }) => void;
  }
  

  const MatchingGames: React.FC<MatchingAreaProps> = ({ levelData, lines, onAddLine }) => {
    const [selectedWord, setSelectedWord] = useState<{ index: number; x: number; y: number } | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          // Clear canvas before drawing
          ctx.clearRect(0, 0, canvas.width, canvas.height);
  
          // Draw all lines
          lines.forEach((line) => {
            ctx.beginPath();
            ctx.moveTo(line.wordX, line.wordY);
            ctx.lineTo(line.synonymX, line.synonymY);
            ctx.strokeStyle = "#007bff";
            ctx.lineWidth = 2;
            ctx.stroke();
          });
        }
      }
    }, [lines]);
  
    const getRelativeCoordinates = (e: React.MouseEvent<HTMLLIElement>) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      const elementRect = (e.target as HTMLElement).getBoundingClientRect();
      if (!rect) return { x: 0, y: 0 };
  
      return {
        x: elementRect.left + elementRect.width / 2 - rect.left,
        y: elementRect.top + elementRect.height / 2 - rect.top,
      };
    };
  
    const handleWordClick = (index: number, e: React.MouseEvent<HTMLLIElement>) => {
      const { x, y } = getRelativeCoordinates(e);
      setSelectedWord({ index, x, y });
    };
  
    const handleSynonymClick = (index: number, e: React.MouseEvent<HTMLLIElement>) => {
      if (selectedWord) {
        const { x, y } = getRelativeCoordinates(e);
        const line = {
          word: selectedWord.index,
          synonym: index,
          wordX: selectedWord.x,
          wordY: selectedWord.y,
          synonymX: x,
          synonymY: y,
        };
        onAddLine(line);
        setSelectedWord(null);
      }
    };
  
  

  return (
    <div className="flex justify-center items-start mt-6">
      <div className="bg-blue-950 p-4 rounded shadow-md w-64 text-white">
        <h2 className="text-lg font-semibold mb-4">Words</h2>
        <ul>
          {levelData.words.map((word, index) => (
            <li
              key={index}
              onClick={(e) => handleWordClick(index, e)}
              className="p-2 mb-2 rounded cursor-pointer bg-gray-500 hover:bg-blue-300"
            >
              {word}
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-8">
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          className="border rounded shadow-md"
        ></canvas>
      </div>

      <div className="bg-blue-950 p-4 rounded shadow-md w-64 text-white">
        <h2 className="text-lg font-semibold mb-4">Synonyms</h2>
        <ul>
          {levelData.synonyms.map((synonym, index) => (
            <li
              key={index}
              onClick={(e) => handleSynonymClick(index, e)}
              className="p-2 mb-2 rounded cursor-pointer bg-gray-500 hover:bg-green-300"
            >
              {synonym}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MatchingGames;
