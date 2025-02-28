import "./template.css";
import Header from "./comps/header/header.jsx";
import Navbar from "./comps/navbar/navbar.jsx";
import Footer from "./comps/footer/footer.jsx";
import Intro from "./comps/Intro/Intro.jsx";
import ScrollDownBtn from "./comps/ScrollDownBtn/scrollDownBtn.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Intro
        children={<ScrollDownBtn />}
        contentObj={{
          title: "Titel",
          text: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
        }}
      />

      <Footer />
    </>
  );
}

export default App;
