import React from 'react';
import { BookOpen } from 'lucide-react';

export const Header = () => {
  return (
    <header className="py-4 px-6 bg-black/90 border-b border-amber-500/30 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <BookOpen className="h-8 w-8 text-amber-500 mr-2" />
          <span className="text-xl font-bold text-amber-500">El Portal de la Mente</span>
        </div>
        <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded-md transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40">
          QUIERO ACCEDER
        </button>
      </div>
    </header>
  );
};