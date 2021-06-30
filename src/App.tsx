import "./App.css";
import Ad from "./components/Ad";
import AdDesigner from "./components/AdDesigner";
import Header from "./components/Header";
import Votes from "./components/Votes";

function App() {
  const adValues = [
    {
      flavor: "Chocolate",
      fontSize: 32,
      darkMode: false,
    },
    {
      flavor: "Vanilla",
      fontSize: 50,
      darkMode: false,
    },
    {
      flavor: "Strawberry",
      fontSize: 16,
      darkMode: true,
    },
  ];
  return (
    <div className="App">
      <Header user="Mitch" />
      <div className="flavors">
        {adValues.map((ad) => (
          <Ad
            flavor={ad.flavor}
            fontSize={ad.fontSize}
            darkMode={ad.darkMode}
          />
        ))}
      </div>
      <div className="ad-votes">
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;
