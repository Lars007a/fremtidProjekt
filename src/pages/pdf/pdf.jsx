import styles from "./pdf.module.css";
import Header from "../../comps/header/header.jsx";
import StandardTextSec from "../../comps/pdfComps/standardTextSec/standardTextSec.jsx";
import ImgFullSec from "../../comps/pdfComps/splitScreenWithImg/splitScreenWithImg.jsx";
import Text from "../../comps/pdfComps/text/text.jsx";
import Footer from "../../comps/footer/footer.jsx";
import EmbeddedImg from "../../comps/pdfComps/embeddedImg/embeddedImg.jsx";

export default function pdfSite() {
  return (
    <>
      <Header />

      {/*       <ImgFullSec
        obj={{
          title: "Introduktion",
          color: 2,
          img: "public/img2.jpg",
        }}
      ></ImgFullSec>
 */}
      <StandardTextSec
        obj={{
          title: "Introduktion",
          color: 1,
          imgHeader: false,
        }}
      >
        <Text>
          I det seneste år har den teknologiske udvikling indenfor kunstig
          intelligens og AI genereret indhold sluppet helt af sted. Men behøver
          kun at se på Nvideas aktiekurs for at se det. Teknologien har nået
          højder, som folk før kun læste om i science fiction-bøger, og ikke
          troede var mulige i virkeligheden. Dette betyder selvfølgelig også, at
          AI genereret indhold, såsom for eksempel tekster, billeder og lyd,
          samt meget andet, nemt kunne komme til at spille en stor rolle i vores
          digitale liv på internettet i fremtiden. Denne teknologiske udvikling
          ville have, og nogen ville nok sige har allerede haft vidtrækkende
          konsekvenser. Det hele er dog ikke mørkt og dystert, der er også
          fordele ved denne udvikling.
        </Text>
      </StandardTextSec>

      <StandardTextSec
        obj={{
          title: "Overblik over værktøjerne der bruges",
          color: 4,
          imgHeader: false,
        }}
      >
        <Text>
          Kunstig intelligens benytter avancerede algoritmer og maskinlæring til
          at skabe indhold. Disse er trænet på en enorm mængde data, og kan
          derefter generere ting som tekst. Det generede indhold kan i nogle
          tilfælde være svært at skelne fra menneskeskabt materiale. I andre
          tilfælde kan man nemt skelne mellem AI genereret indhold og
          menneskeskabt indhold. Dette kan være på grund af stilarten eller små
          fejl der opstår igen og igen. Dog ville teknologien højest sandsynligt
          gøre det sværere og sværere med tiden at skelne mellem de to, så at
          man til sidst ikke bare kan skelne mellem det blotte øje.
        </Text>
        <Text>
          Store sprogmodeller, hvor den mest populære er ChatGPT, kan skrive
          tekster, der mere eller mindre er det samme som noget, et menneske
          kunne have skrevet. OpenAI har også modeller hvor man kan lave
          billeder baseret på ens tekstprompt, yderliggere findes der mange
          andre hjemmesider der tilbyder det samme.
        </Text>
        <Text>
          Nogle af de mest anvendte AI-baserede værktøjer omfatter ChatGPT til
          tekst generering, Midjourney og Stable Diffusion til billedgenerering,
          DeepFaceLab til deepfakes og AIVA til komposition af musik.
        </Text>
        <Text>
          Denne udvikling har skabt en ny æra, hvor AI ikke længere blot
          assisterer, men i stigende grad skaber originalt indhold selvstændigt.
        </Text>
      </StandardTextSec>

      <StandardTextSec
        obj={{
          color: 2,
          title: "AI genererede indholds påvirkning på kreativt arbejde",
          imgHeader: false,
        }}
      >
        <EmbeddedImg img={"/img9.jpg"}>
          <Text>
            Teknologien og dens inden for kreative fag har skabt nye muligheder,
            men også udfordringer. For mange kunstnere, forfattere og musikere
            fungerer AI som et værktøj, der øger deres effektivitet,
            produktivitet og er med til at komme med ny inspiration, samt
            synspunkter og vinkler som de ikke havde tænkt på eller overvejet
            før. Dette er fordi AI teknologierne hurtigt kan give udkast til en
            tekst, eller hurtigt kan lave en skitse. Alt dette øger
            effektiviteten og produktiviteten markant.
          </Text>
          <Text>
            Men AI medfører også en risiko for, at menneskeligt arbejde bliver
            erstattet. Inden for journalistikken kan VI generere en
            nyhedsartikel på ingen tid, i designverdenen kan den fremstille et
            layout på kort tid, og inden for musikproduktion kan AI efterligne
            kendte kunstneres stil. Alt dette medfører meget mindre behov for
            arbejdskræft, og truer dermed med at transformere en lang række
            brancher og deres medarbejdere.
          </Text>
          <Text>
            Yderligere kan der også stilles spørgsmål til originaliteten på AI
            genererede indhold, eftersom modellerne jo bare er trænet på en hel
            masse data, der allerede eksisterer i forvejen, kan man måske godt
            komme til at mangle noget originalitet?
          </Text>
        </EmbeddedImg>
      </StandardTextSec>

      <StandardTextSec
        obj={{
          title: "Fake news og misinformation",
          color: 1,
          imgHeader: true,
        }}
      >
        <Text>
          En af de store udfordringer ved AI-genereret indhold er højere risiko
          for misinformation og manipulation. Deepfake-teknologier og
          AI-genererede billeder kan bruges til at sprede falske nyheder, som
          ikke blot er tekst på internettet, som alle jo ved kan sige hvad som
          helst, men som har videoer og billeder som beviser og kilder, og
          dermed virker troværdige og sande. For eksempel kan en manipuleret
          video der viser en politiker sige en ting, personen aldrig har sagt,
          spredes over internettet og gennem pressen, og dermed hvem
          befolkningen vælger at sætte deres kryds ved, når de står ved
          stemmeboksen.
        </Text>
        <Text>
          Dette er en trussel, der er nødt til at bekæmpes på en eller anden
          vis. En mulighed kunne være love og reguleringer, men gennem dem kan
          man kun komme så langt. En anden kunne være en form for software, der
          kan “detecte” om noget er blevet manipuleret. Men selvfølgelig ville
          man aldrig kunne fange alt, ligesom antivirus programmer på ens
          computer aldrig ville kunne fange alt. Derfor er den vigtigeste ting,
          at offentligheden bliver skarpere på at være kildekritisk, især over
          for ting de ser på internettet.
        </Text>
      </StandardTextSec>

      <StandardTextSec
        obj={{
          color: 4,
          title: "Personalisering af indhold",
          imgHeader: false,
        }}
      >
        <Text>
          Dette er nok en af de største fordele ved AI genererede indhold på
          internettet. Nemlig en dybere personalisering af indhold , hjemmesider
          og tjenester viser online. Med andre ord, en mere skræddersyet
          brugeroplevelse online, der kommer til ved hjælp af AI og AI
          genererede indhold.
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
          skabe dynamiske oplevelser, hvor gameplay og dialoger tilpasses den
          enkelte spillers stil, præferencer og smag. Et andet eksempel kunne
          være en nyhedsside, der genererer artikler baseret på din smag, af
          hvordan en nyhedsartikel burde formuleres. Måske endda film og anden
          form for underholdning der er genereret af AI helt til som brugeren
          gerne ville have det i forhold til smag, præferencer, interesser, osv.
        </Text>
        <Text>
          Dette har også en stor udfordring, nemlig såkaldte “echo chambers”,
          hvor at en bruger/person kun bliver vist indhold, som at de i forvejen
          er enig med, og dermed hele tiden kun får bekræftet deres holdninger.
          Dette bidrager til polarisering i samfundet og formindsker den sunde
          debat.
        </Text>
      </StandardTextSec>

      <StandardTextSec
        obj={{
          color: 2,
          title: "AI generede teksters påvirkning på Søgemaskiner",
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
          en hjemmeside der ser god ud, og så læser svaret derinde på den
          pågældende hjemmeside.
        </Text>

        <EmbeddedImg img={"/searchEngine.jpg"}>
          <Text>
            Som sagt sker dette allerede nu. Mange folk spørger bare ChatGPT
            eller de andre modeller, hvis de har et spørgsmål, i stedet for den
            traditionelle vej, eftersom de opfatter det som nemmere. Yderligere
            har de store søgemaskiner også arbejdet på at integrere tekst
            svarene fra AI modellerne ind i deres søgeresultater.
          </Text>
          <Text>
            Den udfordring der medfører dette er risikoen for bias i svarene fra
            AI modellerne. Man kunne nemt forestille sig, at de nemlig er lavet
            sådan, at de undgår alt for kontroversielle ting, hvilket man for
            eksempel har set ved Deepseek, som blandt andet nægter at svare på
            nogle spørgsmål som er sensitive i Kina. Yderligere kan dataene som
            modellen er trænet på også have en bias, hvilket ikke rigtig er et
            problem hvis man selv finder sine egne kilder, siden man altid selv
            kan finde andre kilder.
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

      <Footer />
    </>
  );
}
