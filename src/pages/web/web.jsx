import Header from "../../comps/header/header.jsx";
import Navbar from "../../comps/navbar/navbar.jsx";
import Footer from "../../comps/footer/footer.jsx";
import Textsec from "../../comps/textsec/textsec.jsx";
import ScrollDownBtn from "../../comps/ScrollDownBtn/scrollDownBtn.jsx";
import Cardssec from "../../comps/cardssec/cardssec.jsx";
import styles from "./web.module.css";

import QuickBtn from "../../comps/quickBtn/quickBtn.jsx";

import Infosec from "../../comps/infosec/infosec.jsx";

import Text from "../../comps/pdfComps/text/text.jsx";

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

      <Infosec
        title={"Hej med dig"}
        skewed={true}
        imgHeader={false}
        bcColor={1}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum
          aliquid veniam neque aut sapiente culpa quas. Quidem a dignissimos
          nulla? Qui commodi tempore dolor repudiandae hic sequi ut voluptatum
          corrupti, veniam consequatur voluptatibus rerum maiores odio. Fuga
          neque explicabo porro. Velit aliquid provident minima quo blanditiis
          nostrum quis perferendis.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum
          aliquid veniam neque aut sapiente culpa quas. Quidem a dignissimos
          nulla? Qui commodi tempore dolor repudiandae hic sequi ut voluptatum
          corrupti, veniam consequatur voluptatibus rerum maiores odio. Fuga
          neque explicabo porro. Velit aliquid provident minima quo blanditiis
          nostrum quis perferendis.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          quae.
        </Text>
        <QuickBtn href={"/web"}>Hej</QuickBtn>
      </Infosec>

      <Infosec imgHeader={false} skewed={false} title={"Bobsen"} bcColor={3}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum
          aliquid veniam neque aut sapiente culpa quas. Quidem a dignissimos
          nulla? Qui commodi tempore dolor repudiandae hic sequi ut voluptatum
          corrupti, veniam consequatur voluptatibus rerum maiores odio. Fuga
          neque explicabo porro. Velit aliquid provident minima quo blanditiis
          nostrum quis perferendis.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum
          aliquid veniam neque aut sapiente culpa quas. Quidem a dignissimos
          nulla? Qui commodi tempore dolor repudiandae hic sequi ut voluptatum
          corrupti, veniam consequatur voluptatibus rerum maiores odio. Fuga
          neque explicabo porro. Velit aliquid provident minima quo blanditiis
          nostrum quis perferendis.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum
          aliquid veniam neque aut sapiente culpa quas. Quidem a dignissimos
          nulla? Qui commodi tempore dolor repudiandae hic sequi ut voluptatum
          corrupti, veniam consequatur voluptatibus rerum maiores odio. Fuga
          neque explicabo porro. Velit aliquid provident minima quo blanditiis
          nostrum quis perferendis.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum
          aliquid veniam neque aut sapiente culpa quas. Quidem a dignissimos
          nulla? Qui commodi tempore dolor repudiandae hic sequi ut voluptatum
          corrupti, veniam consequatur voluptatibus rerum maiores odio. Fuga
          neque explicabo porro. Velit aliquid provident minima quo blanditiis
          nostrum quis perferendis.
        </Text>
        <QuickBtn href={"/web"}>Hej</QuickBtn>
      </Infosec>

      <Infosec imgHeader={true} skewed={false} title={"Ting 2"} bcColor={1}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum
          aliquid veniam neque aut sapiente culpa quas. Quidem a dignissimos
          nulla? Qui commodi tempore dolor repudiandae hic sequi ut voluptatum
          corrupti, veniam consequatur voluptatibus rerum maiores odio. Fuga
          neque explicabo porro. Velit aliquid provident minima quo blanditiis
          nostrum quis perferendis.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum
          aliquid veniam neque aut sapiente culpa quas. Quidem a dignissimos
          nulla? Qui commodi tempore dolor repudiandae hic sequi ut voluptatum
          corrupti, veniam consequatur voluptatibus rerum maiores odio. Fuga
          neque explicabo porro. Velit aliquid provident minima quo blanditiis
          nostrum quis perferendis.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum
          aliquid veniam neque aut sapiente culpa quas. Quidem a dignissimos
          nulla? Qui commodi tempore dolor repudiandae hic sequi ut voluptatum
          corrupti, veniam consequatur voluptatibus rerum maiores odio. Fuga
          neque explicabo porro. Velit aliquid provident minima quo blanditiis
          nostrum quis perferendis.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum
          aliquid veniam neque aut sapiente culpa quas. Quidem a dignissimos
          nulla? Qui commodi tempore dolor repudiandae hic sequi ut voluptatum
          corrupti, veniam consequatur voluptatibus rerum maiores odio. Fuga
          neque explicabo porro. Velit aliquid provident minima quo blanditiis
          nostrum quis perferendis.
        </Text>
        <QuickBtn href={"/web"}>Hej</QuickBtn>
      </Infosec>

      <Infosec imgHeader={false} skewed={false} title={"Bobsen"} bcColor={4}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum
          aliquid veniam neque aut sapiente culpa quas. Quidem a dignissimos
          nulla? Qui commodi tempore dolor repudiandae hic sequi ut voluptatum
          corrupti, veniam consequatur voluptatibus rerum maiores odio. Fuga
          neque explicabo porro. Velit aliquid provident minima quo blanditiis
          nostrum quis perferendis.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum
          aliquid veniam neque aut sapiente culpa quas. Quidem a dignissimos
          nulla? Qui commodi tempore dolor repudiandae hic sequi ut voluptatum
          corrupti, veniam consequatur voluptatibus rerum maiores odio. Fuga
          neque explicabo porro. Velit aliquid provident minima quo blanditiis
          nostrum quis perferendis.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum
          aliquid veniam neque aut sapiente culpa quas. Quidem a dignissimos
          nulla? Qui commodi tempore dolor repudiandae hic sequi ut voluptatum
          corrupti, veniam consequatur voluptatibus rerum maiores odio. Fuga
          neque explicabo porro. Velit aliquid provident minima quo blanditiis
          nostrum quis perferendis.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum
          aliquid veniam neque aut sapiente culpa quas. Quidem a dignissimos
          nulla? Qui commodi tempore dolor repudiandae hic sequi ut voluptatum
          corrupti, veniam consequatur voluptatibus rerum maiores odio. Fuga
          neque explicabo porro. Velit aliquid provident minima quo blanditiis
          nostrum quis perferendis.
        </Text>
        <QuickBtn href={"/web"}>Hej</QuickBtn>
      </Infosec>

      <Footer />
    </>
  );
}
