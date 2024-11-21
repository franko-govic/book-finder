import React from "react";
import Library from "./components/Library";
import BookSearch from "./components/BookSearch";
function App() {
  return (
    <div className="h-screen">
      <h1 className="p-5 text-3xl font-bold  border-2 h-[10vh]">Book Finder</h1>
      <div className="flex-1 w-full border-2 p-5 bg-blue-200 h-[90vh]">
        <Library />
      </div>
    </div>
  );
}

export default App;
