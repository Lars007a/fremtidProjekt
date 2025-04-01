import styles from "./pdf.module.css";
import Header from "../../comps/header/header.jsx";
import StandardTextSec from "../../comps/pdfComps/standardTextSec/standardTextSec.jsx";
import Text from "../../comps/pdfComps/text/text.jsx";
import Footer from "../../comps/footer/footer.jsx";
import EmbeddedImg from "../../comps/pdfComps/embeddedImg/embeddedImg.jsx";
import Bottom from "../../comps/pdfComps/bottom/bottom.jsx";

import imgten from "../../../public/img10.jpg";
import searchEngine from "../../../public/searchEngine.jpg";

export default function pdfSite() {
  return (
    <>
      <Header btnHref={"#intro"} btnText={"Læs videre"} />
      <StandardTextSec
        obj={{
          title: "Introduktion",
          color: 1,
          imgHeader: false,
          id: "intro",
        }}
      >
        <Text>
          I det seneste år har den teknologiske udvikling indenfor kunstig
          intelligens og AI genereret indhold sluppet helt af sted på en måde,
          der har overrasket både eksperter og almindelige forbrugere. Man
          behøver kun at se på Nvideas aktiekurs og alt den “hype” omkring
          selskabet for at se denne udvikling. Teknologien har nået nye højder,
          som før kun var kendt fra science fiction-bøger, og som mange ikke
          troede var mulig i virkeligheden. Dette betyder selvfølgelig, at AI
          genereret indhold, såsom for eksempel tekster, billeder og lyd, samt
          meget andet, kommer til at spille en stor rolle i vores digitale liv
          på internettet i fremtiden. Fra sociale medier til søgemaskiner og
          e-handelsplatforme er AI-genereret indhold ved at blive en integreret
          del af vores digitale hverdag. Denne udvikling er drevet af avancerede
          algoritmer og store mængder data, der gør det muligt for AI at skabe
          alt fra tekst og billeder til videoer og musik.
        </Text>
        <Text>
          Denne teknologiske udvikling har allerede haft vidtrækkende
          konsekvenser for både individer og samfundet, og dette ville der kun
          blive mere af i fremtiden. AI-genereret indhold på internettet har
          allerede haft en betydelig indflydelse på, hvordan vi konsumerer
          information, shopper, kommunikerer og underholder os. Men samtidig
          rejser det også vigtige spørgsmål om ægthed, originalitet og ansvar.
        </Text>
      </StandardTextSec>

      <StandardTextSec
        obj={{
          title: "Hvordan AI genereret indhold virker og bruges på internettet",
          color: 4,
          imgHeader: false,
          id: "overblik",
        }}
      >
        <Text>
          AI-genereret indhold på internettet er afhængig avancerede algoritmer
          og maskinlæring, der trænes på enorme mængder data. Disse data kan
          være alt fra sociale medieopslag og nyhedsartikler til
          produktanmeldelser og videoklip. Ved at analysere disse data lærer
          AI-modeller at identificere mønstre og generere nyt indhold.
        </Text>
        <Text>
          Et af de mest kendte eksempler er ChatGPT, en såkaldt “large language
          model (llm), der kan skrive tekster, der er svær at skælne fra tekster
          skrevet af mennesker. ChatGPT og lignende modeller bruges i vid
          udstrækning på internettet til alt fra kundeservice-chatbots til at
          generere indhold til blogs og nyhedshjemmesider.
        </Text>
        <Text>
          På billedsiden har vi værktøjer som DALL-E, som kan skabe billeder
          baseret på tekst prompts, hvilket gør det muligt for folk at skabe
          unikt indhold uden at skulle være specielt gode til at designe.
        </Text>
        <Text>
          AI-genereret indhold på internettet er ikke begrænset til tekst og
          billeder. Deepfake-teknologi gør det muligt at skabe realistiske
          videoer, hvor personer får lagt ord i munden eller udført handlinger,
          de aldrig har gjort. Denne teknologi kan bruges til underholdning, men
          den rejser også etiske spørgsmål samt kan have alvorlige konsekvenser,
          især når det kommer til misinformation og manipulation.
        </Text>
      </StandardTextSec>

      <StandardTextSec
        obj={{
          color: 2,
          title: "AI-genereret indhold og sociale medier",
          imgHeader: false,
          id: "social",
        }}
      >
        <Text>
          Sociale medier er en af de områder, hvor AI-genereret indhold har haft
          den største indflydelse. Platforme som Facebook, Instagram og TikTok
          bruger AI til at finde det indhold, der matcher brugerens interesser
          og adfærd, og dermed det indhold, som brugeren ville kunne lide bedst.
          Dette skaber en mere personlig og engagerende brugeroplevelse, men det
          har også nogle ulemper.
        </Text>
        <EmbeddedImg img={imgten}>
          <Text>
            AI-algoritmer på sociale medier er designet til at maksimere
            brugerens tid på platformen. Dette betyder, at indhold der er
            kontroversielt ofte bliver prioriteret, da det har en tendens til at
            skabe mere engagement på platformen Dette kan føre til, at brugere
            bliver vist mere ekstreme synspunkter eller lignende, hvilket kan
            bidrage til polarisering og såkaldte "echo chambers".
          </Text>
          <Text>
            Derudover bruger mange brugere AI-værktøjer til at skabe indhold til
            deres sociale medieprofiler. Dette er en trend der kun vil blive
            større i fremtiden og i kraft af, at AI genereret indhold bliver
            bedre og bedre og svære at skelne fra menneskeskabt indhold. Dette
            rejser selvfølgelig spørgsmål om ægthed og originalitet.
          </Text>
        </EmbeddedImg>
      </StandardTextSec>

      <StandardTextSec
        obj={{
          title: "Udfordringer med AI-genereret indhold på internettet",
          color: 1,
          imgHeader: true,
          id: "udfordringer",
        }}
      >
        <Text>
          En af de største udfordringer ved AI-genereret indhold på internettet
          er risikoen for misinformation og manipulation. Deepfake-teknologier
          og AI-genererede billeder kan bruges til at sprede falske nyheder, der
          ser utroligt ægte ud. Dette kan have alvorlige konsekvenser, især når
          det kommer til politisk manipulation eller udbredelse af skadelige
          konspirationsteorier. Med videreudviklingen af teknologien ville dette
          kun blive en større og større trussel og udfordring i fremtiden.
        </Text>
        <Text>
          Dette er en trussel, der er nødt til at bekæmpes på en eller anden
          vis. En mulighed kunne være love og reguleringer, men gennem dem kan
          man kun komme så langt. En anden kunne være en form for software, der
          kan spotte, om noget er blevet manipuleret. Men selvfølgelig ville man
          aldrig kunne fange alt, ligesom antivirus programmer på ens computer
          aldrig ville kunne fange alt. Derfor er den vigtigeste ting, at
          offentligheden bliver skarpere på at være kildekritisk, især over for
          ting de ser på internettet.
        </Text>
      </StandardTextSec>

      <StandardTextSec
        obj={{
          color: 4,
          title: "Personalisering af indhold",
          imgHeader: false,
          id: "personalisering",
        }}
      >
        <Text>
          Dette er nok en af de største fordele ved AI genererede indhold på
          internettet. Det er også en af de områder, hvor AI allerede spiller en
          stor rolle. Nemlig en dybere personalisering af det indhold,
          hjemmesider og tjenester viser online. Med andre ord, en mere
          skræddersyet brugeroplevelse online, der kommer til ved hjælp af AI og
          AI genererede indhold.
        </Text>
        <Text>
          Man ser allerede dette på en eller anden vis på sociale medier, når de
          gennem deres algoritmer viser os det indhold, som vi gerne ville se.
          Men dette kunne udvides, så at hjemmesiderne også genererer det
          indhold, som at brugeren gerne ville have, eller tilpasser indholdet,
          så at det stemmer overens med brugerens smag.
        </Text>
        <Text>
          Et eksempel på dette kunne være videospil, som kunne bruge AI til at
          skabe dynamiske oplevelser, hvor gameplay, spilverdenen, NPC’erne og
          dialoger tilpasses den enkelte spillers stil, præferencer og smag.
        </Text>
        <Text>
          Et andet eksempel kunne være en nyhedsside, der tilpasser overskrifter
          og artikler baseret på den individuelle læsers smag. Dette kan øge
          læsernes engagement, men det rejser også spørgsmål om, hvordan det
          påvirker objektiviteten.
        </Text>
        <Text>
          Dette har også en stor udfordring, nemlig såkaldte “echo chambers”,
          hvor at en bruger/person kun bliver vist indhold, som at de i forvejen
          er enig med, og dermed hele tiden kun får bekræftet deres holdninger.
          Dette bidrager til polarisering i samfundet og formindsker den sunde
          debat.
        </Text>
        <Text>
          Derudover rejser personalisering spørgsmål om privatliv. For at AI kan
          skabe personligt tilpasset indhold, skal den indsamle og analysere
          store mængder data om brugerne.
        </Text>
      </StandardTextSec>

      <StandardTextSec
        obj={{
          color: 1,
          title: "AI genereret indhold og Søgemaskiner",
          id: "soegemaskiner",
        }}
      >
        <Text>
          En anden måde AI genererede indhold højst sandsynligt kommer til at
          blive anvendt i fremtiden ville være i form af søgemaskiner, altså en
          form for erstatning af Google og de andre store nuværende
          søgemaskiner. Dette er et fænomen, vi allerede nu er i gang med at se.
          Folk ville begynde at bruge AI generede tekst som svar på deres
          søgeforespørgsler, hvor svaret bare står i en kort tekst, i stedet for
          den traditionelle måde, hvor man søger på Google, finder et link til
          en hjemmeside der ser god ud, og så læser svaret inde på den
          pågældende hjemmeside.
        </Text>

        <EmbeddedImg img={searchEngineImg}>
          <Text>
            Som sagt sker dette allerede nu. Mange folk spørger bare ChatGPT
            eller de andre modeller, hvis de har et spørgsmål, i stedet for den
            traditionelle vej, eftersom de opfatter det som nemmere, da den bare
            kommer med et svar og ikke en lang række links. Yderligere har de
            store søgemaskiner også arbejdet på at integrere tekst svarene fra
            AI modellerne ind i deres søgeresultater.
          </Text>
          <Text>
            Den udfordring der medfører dette er risikoen for bias i svarene fra
            AI modellerne. Man kunne nemt forestille sig, at de nemlig er lavet
            sådan, at de undgår alt for kontroversielle ting, hvilket man for
            eksempel har set ved Deepseek, som blandt andet nægter at svare på
            nogle spørgsmål som er sensitive i Kina. Yderligere kan dataene som
            modellen er trænet på også have en bias eller mangler, hvilket ikke
            rigtig er et problem hvis man selv finder sine egne kilder, siden
            man altid selv kan finde andre kilder.
          </Text>
          <Text>
            Evnen til at tænke kritisk skal man også huske på. Ved manuel
            research skal man tænke kritisk og evaluere sine kilder samt danne
            sin egen konklusion. Men hvis du bare beder om et AI genererede
            tekstsvar, i stedet for at lave dit eget research, finde dine egne
            kilder, og danne din egen konklusion, behøver du ikke at udføre det
            arbejde.
          </Text>
        </EmbeddedImg>

        <Text>
          Evnen til at tænke kritisk skal man også huske på. Ved manuel research
          skal man tænke kritisk og evaluere sine kilder samt danne sin egen
          konklusion. Men hvis du bare beder om et AI genererede tekstsvar, i
          stedet for at lave dit eget research, finde dine egne kilder, og danne
          din egen konklusion, behøver du ikke at udføre det arbejde.
        </Text>
      </StandardTextSec>

      <Bottom />

      <Footer />
    </>
  );
}
