// Components
import Home from "./pages/Home";
import About from "./pages/About";
import BrowserRoute from "./components/BrowserRoute";
import Location from "./pages/Location";
import LocalRounting from "./components/LocalRouting";
import LocalRoute from "./components/LocalRoute";
import LocalHome from "./pages/LocalHome";
import LocalAbout from "./pages/LocalAbout";

export default function App() {

  return (
    <main>
      <br />
      <Location />
      <BrowserRoute path="/" component={<Home />} />
      <BrowserRoute path="/about" component={<About />} />
      <LocalRounting identifier="test">
        <LocalRoute context="test" path="/" component={<LocalHome />}/>
        <LocalRoute context="test" path="/about" component={<LocalAbout />}/>
      </LocalRounting>
    </main>
  )
}