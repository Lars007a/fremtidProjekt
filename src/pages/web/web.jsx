import Header from "../../comps/header/header.jsx";
import Navbar from "../../comps/navbar/navbar.jsx";
import Footer from "../../comps/footer/footer.jsx";
import Textsec from "../../comps/textsec/textsec.jsx";
import ScrollDownBtn from "../../comps/ScrollDownBtn/scrollDownBtn.jsx";
import BlueSection from "../../comps/blueSection/blueSection.jsx";
import Cardssec from "../../comps/cardssec/cardssec.jsx";
import styles from "./web.module.css";

import Infoboxsec from "../../comps/infoboxsec/infoboxsec.jsx";

export default function web() {
  return (
    <>
      <Navbar />
      <Header />
      <Textsec
        children={<ScrollDownBtn />}
        contentObj={{
          title: "Titel",
          text: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
        }}
      />

      <Cardssec />

      <Infoboxsec title={"Title"} />

      <BlueSection />
      <Footer />
    </>
  );
}
