import styles from "./bottom.module.css";
import Textsec from "../../textsec/textsec.jsx";
import ScrollDownBtn from "../../ScrollDownBtn/scrollDownBtn.jsx";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function bottom() {
  return (
    <>
      <Textsec
        contentObj={{
          title: "Links",
          text: "Nedenunder er der en kort liste over nogle links. Hvor du kan læse mere.",
          sourceList: (
            <ul>
              <li>
                <a href="https://www.jdsupra.com/legalnews/how-ai-is-changing-the-internet-1635591/">
                  https://www.jdsupra.com/legalnews/how-ai-is-changing-the-internet-1635591/
                </a>
              </li>
              <li>
                <a href="https://winningwp.com/the-future-of-the-internet-the-end-of-human-made-content-and-the-rise-of-ai-as-the-gateway/">
                  https://winningwp.com/the-future-of-the-internet-the-end-of-human-made-content-and-the-rise-of-ai-as-the-gateway/
                </a>
              </li>
              <li>
                <a href="https://www.synthesia.io/post/the-future-of-synthetic-media">
                  https://www.synthesia.io/post/the-future-of-synthetic-media
                </a>
              </li>
              <li>
                <a href="https://www.educative.io/blog/generative-ai-changing-the-internet">
                  https://www.educative.io/blog/generative-ai-changing-the-internet
                </a>
              </li>
            </ul>
          ),
        }}
      >
        <ScrollDownBtn
          btnText={"Gå tilbage til forsiden"}
          icon={<FaLongArrowAltRight color="#ffffff" size={20} />}
          href={"/web#top"}
        />
      </Textsec>
    </>
  );
}
