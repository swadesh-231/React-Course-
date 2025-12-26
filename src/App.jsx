import Card from "./components/Card";
import image1 from "./asset/image1.png";
import image2 from "./asset/image2.png";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="bg-slate-800 min-h-screen flex items-start gap-2 p-4">
      <Card
        name="Kolkata"
        country="India"
        description="Cultural capital"
        image={image1}
      />
      <Card
        name="Bangalore"
        country="India"
        description="Silicon Valley"
        image={image2}
      />
    </div>
  );
};

export default App;
