import Header from "../../comps/header/header.jsx";
import Navbar from "../../comps/navbar/navbar.jsx";
import Footer from "../../comps/footer/footer.jsx";
import Intro from "../../comps/Intro/Intro.jsx";
import ScrollDownBtn from "../../comps/ScrollDownBtn/scrollDownBtn.jsx";
import BlueSection from "../../comps/blueSection/blueSection.jsx";
import styles from "./web.module.css";

export default function web() {
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
      <BlueSection />
      <Footer />
    </>
  );
}
