import "./template.css";
import Header from "./comps/header/header.jsx";
import Navbar from "./comps/navbar/navbar.jsx";
import Footer from "./comps/footer/footer.jsx";
import ScrollDownBtn from "./comps/ScrollDownBtn/scrollDownBtn.jsx";
import BlueSection from "./comps/blueSection/blueSection.jsx";
import { useRoutes } from "react-router-dom";
import Web from "./pages/web/web.jsx";
import Pdf from "./pages/pdf/pdf.jsx";

function App() {
  //Routes for de to sider, som vi skal have.
  let routes = useRoutes([
    { path: "/web", element: <Web /> },
    { path: "/pdf", element: <Pdf /> },
  ]);

  //Hvis den side, der skal vises. Siden her bliver vist af main.jsx, som bliver loadet af index.html.
  return <>{routes}</>;
}

export default App;
