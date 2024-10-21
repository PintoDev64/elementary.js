// Components
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import LocalHome from "./pages/LocalHome";
import LocalAbout from "./pages/LocalAbout";
import XDHome from "./pages/XDHome";
import XDAbout from "./pages/XDAbout";
import { useContext } from "react";
import { LocalRoutingContext } from "./library/context";
import BrowserRoute from "./library/components/BrowserRoute";
import LocalRounting from "./library/components/LocalRounting";
import LocalRoute from "./library/components/LocalRoute";

export default function App() {

  const Context = useContext(LocalRoutingContext)

  return (
    <main>
      <code>
        {Context !== null && Context.state.map(({ Name, Path }) => `(${Name}|${Path})`).join("-")}
      </code>
      <br />
      <Location />
      <BrowserRoute path="/" component={<Home />} />
      <BrowserRoute path="/about" component={<About />} />
      <LocalRounting identifier="test">
        <LocalRoute context="test" path="/" component={<LocalHome />}/>
        <LocalRoute context="test" path="/about" component={<LocalAbout />}/>
      </LocalRounting>
      <LocalRounting identifier="XD">
        <LocalRoute context="XD" path="/" component={<XDHome/>}/>
        <LocalRoute context="XD" path="/about" component={<XDAbout />}/>
      </LocalRounting>
    </main>
  )
}