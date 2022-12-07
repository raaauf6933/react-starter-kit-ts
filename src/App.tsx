import * as React from 'react';
import './style.css';

const App: React.FC = () => {
  return (
    <div className="h-full flex justify-center items-center flex-col">
      <span className="my-5 text-4xl sm:text-3xl md:text-4xl lg:text-7xl">
        Hello Master!!
      </span>
      <span className="my-1 sm:text-2xl md:text-2xl lg:text-2xl">
        Created by: Raf
      </span>
    </div>
  );
};

export default App;
