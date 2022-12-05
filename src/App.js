import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Bmi } from "./components/Bmi";
import { Footer } from "./components/Footer";
import { EmojiBack } from "./components/Emoji";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <EmojiBack />
      <Bmi />
      <Footer />
    </div>
  );
}

export default App;
