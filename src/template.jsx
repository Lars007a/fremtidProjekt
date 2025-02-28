import "./template.css";
import Header from "./comps/header/header.jsx";
import Navbar from "./comps/navbar/navbar.jsx";
import Footer from "./comps/footer/footer.jsx";
import Section from "./comps/section/section.jsx";
import ScrollDownBtn from "./comps/ScrollDownBtn/scrollDownBtn.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Section
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
