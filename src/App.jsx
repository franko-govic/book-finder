import Library from "./components/Library";

function App() {
  return (
    <div className="bg-red-200 flex flex-col p-5 gap-5 items-center justify-center w-screen h-screen">
      <h1 className="p-5 text-3xl font-bold text-white border-2 ">
        Book Finder
      </h1>
      <div className="flex-1 w-full border-2">
        <Library />
      </div>
    </div>
  );
}

export default App;
