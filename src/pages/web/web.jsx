import Header from "../../comps/header/header.jsx";
import Navbar from "../../comps/navbar/navbar.jsx";
import Footer from "../../comps/footer/footer.jsx";
import Textsec from "../../comps/textsec/textsec.jsx";
import ScrollDownBtn from "../../comps/ScrollDownBtn/scrollDownBtn.jsx";
import Cardssec from "../../comps/cardssec/cardssec.jsx";
import styles from "./web.module.css";
import { HashLink } from "react-router-hash-link";

import { FaAngleDoubleDown, FaLongArrowAltRight } from "react-icons/fa";

import QuickBtn from "../../comps/quickBtn/quickBtn.jsx";

import Infosec from "../../comps/infosec/infosec.jsx";

import Text from "../../comps/pdfComps/text/text.jsx";

export default function web() {
  return (
    <>
      <Navbar />
      <Header btnHref={"/pdf"} btnText={"Se hele dokumentet"} />
      <Textsec
        contentObj={{
          title: "Introduktion",
          text: "Kunstig intelligens kan i dag skabe tekster, billeder, videoer og meget mere. Ofte sker dette på få sekunder eller minutter. Modeller som ChatGPT kan skrive artikler og historier, mens andre modeller kan lave billeder på baggrund af en simpel beskrivelse. AI ændrer måden, vi skaber og forbruger digitalt indhold på – men hvordan ville det påvirke os og internettet?",
        }}
      >
        <ScrollDownBtn
          btnText={"Se mere"}
          icon={<FaAngleDoubleDown color="#ffffff" size={20} />}
          href={"#cards"}
        />
      </Textsec>

      <Cardssec />

      <Infosec
        title={"Hvordan AI genereret indhold virker og bruges på internettet"}
        skewed={true}
        imgHeader={false}
        bcColor={1}
        id={"overblik"}
      >
        <Text small={true}>
          AI-genereret indhold er baseret på avancerede algoritmer og store
          mængder data. Værktøjer som ChatGPT kan skrive tekster, mens DALL-E
          kan generere billeder baseret på tekstprompts. Deepfake-teknologi gør
          det endda muligt at skabe realistiske videoer. Disse teknologier
          kommer i fremtiden til at blive brugt mere og mere på internettet.
        </Text>
        <QuickBtn href={"/pdf#overblik"}>Læs mere</QuickBtn>
      </Infosec>

      <Infosec
        imgHeader={false}
        skewed={false}
        title={"AI-genereret indhold og sociale medier"}
        bcColor={3}
        id={"social"}
      >
        <Text small={true}>
          På sociale medier bruges AI til at kuratere indhold, der matcher
          brugerens interesser og adfærd. Dette skaber en mere personlig
          oplevelse, men kan også føre til "echo chambers," hvor brugerne kun
          ser indhold, der bekræfter deres eksisterende holdninger. Fremtiden
          vil se endnu mere AI-genereret indhold på sociale medier, hvilket
          rejser spørgsmål om ægthed og originalitet.
        </Text>
        <QuickBtn href={"/pdf#social"}>Læs mere</QuickBtn>
      </Infosec>

      <Infosec
        imgHeader={false}
        skewed={false}
        title={"Udfordringer med AI-genereret indhold på internettet"}
        bcColor={1}
        id={"udfordringer"}
      >
        <Text small={true}>
          En af de største udfordringer ved AI-genereret indhold er risikoen for
          misinformation og manipulation. Deepfake-teknologier og AI-genererede
          billeder kan bruges til at sprede falske nyheder, der ser utroligt
          ægte ud. For at bekæmpe dette er der behov for regulering, teknologi
          til at spotte manipulation. Men siden dette nok ikke er nok, skal man
          altid være kildekritisk.
        </Text>
        <QuickBtn href={"/pdf#udfordringer"}>Læs mere</QuickBtn>
      </Infosec>

      <Infosec
        imgHeader={false}
        skewed={false}
        title={"Personalisering af indhold"}
        bcColor={4}
        id={"personalisering"}
      >
        <Text small={true}>
          AI og AI genereret indhold gør det muligt for en dybere
          personalisering på internettet. Sociale medier bruger algoritmer til
          at vise brugerne det indhold, de sandsynligvis vil engagere sig med.
          Dette kan udvides til at omfatte alt fra nyhedsartikler til videospil,
          hvor indholdet tilpasses den enkelte bruger, og hvad han eller hun kan
          lide. Men dette er ikke uden udfordringer.
        </Text>
        <QuickBtn href={"/pdf#personalisering"}>Se mere</QuickBtn>
      </Infosec>

      <Infosec
        bcColor={1}
        imgHeader={true}
        skewed={false}
        title={"AI genereret indhold og søgemaskiner"}
        id={"soegemaskiner"}
      >
        <Text small={true}>
          AI er ved at ændre, hvordan vi søger information på internettet. I
          stedet for at søge for links på Google, kan AI generere tekstsvar på
          vores spørgsmål. Dette gør søgningen hurtigere og nemmere, men rejser
          også spørgsmål om bias og pålidelighed.
        </Text>
      </Infosec>

      <Textsec
        contentObj={{
          title: "Er du interesseret?",
          text: "Hvordan påvirker kunstig intelligens det digitale indhold, vi ser hver dag? Hvordan ville det påvirke det vi ser i fremtiden? Fra tekster og billeder til videoer og musik – AI spiller en større og større rolle. Læs mere om udviklingen, mulighederne og udfordringerne i denne dokumentet her:",
        }}
      >
        <ScrollDownBtn
          btnText={"Se fulde tekst dokument!"}
          icon={<FaLongArrowAltRight color="#ffffff" size={20} />}
          href={"/pdf"}
        />
      </Textsec>

      <Footer />
    </>
  );
}
