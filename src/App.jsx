import Navbar from "./components/Navbar";

const App = () => {
  return (
   <div className="bg-slate-800 min-h-screen">
      <Navbar />
      
      <div className="pt-32 px-10 text-white">
        <h1 className="text-4xl font-bold">Welcome Home</h1>
        <p className="mt-4 text-gray-400">Scroll down to see the glass effect...</p>
        {/* Add lots of content here to test the scroll */}
        <div className="h-[200vh]"></div> 
      </div>
    </div>
  );
};

export default App;
