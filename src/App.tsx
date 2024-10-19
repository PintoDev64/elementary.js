// Hooks
import useLocation from "./hooks/useLocation";

// Components
import RouteElement from "./components/RouteElement";
import GlobalRouter from "./components/Router";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {

  const { location } = useLocation()

  return (
    <main>
      {location}
      <br />
      <GlobalRouter>
        <RouteElement path="/" component={<Home />} />
        <RouteElement path="/about" component={<About />} />
      </GlobalRouter>
    </main>
  )
}