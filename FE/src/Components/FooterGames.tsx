import React from "react";

interface FooterProps {
  onCheckAnswers: () => void;
  onRestart: () => void;
  resultMessage: string | null;
}

const FooterGames: React.FC<FooterProps> = ({ onCheckAnswers, onRestart, resultMessage }) => {
  return (
    <footer className="mt-6 text-center">
      <button onClick={onCheckAnswers} className="bg-green-500 text-white px-4 py-2 rounded mx-2">
        Check Answers
      </button>
      <button onClick={onRestart} className="bg-red-500 text-white px-4 py-2 rounded mx-2">
        Restart
      </button>
      {resultMessage && <p className="mt-4 text-lg font-semibold">{resultMessage}</p>}
    </footer>
  );
};

export default FooterGames;
