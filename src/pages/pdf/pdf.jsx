import styles from "./pdf.module.css";
import Header from "../../comps/header/header.jsx";
import StandardTextSec from "../../comps/pdfComps/standardTextSec/standardTextSec.jsx";
import ImgTextSec from "../../comps/pdfComps/imgTextSec/imgTextSec.jsx";
import ImgFullSec from "../../comps/pdfComps/imgFullSec/imgFullSec.jsx";

export default function pdfSite() {
  return (
    <>
      <Header />
      <ImgTextSec
        obj={{
          title: "Title",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur modi voluptatum molestiae est repudiandae, harum exercitationem laboriosam quisquam doloribus error voluptates hic magni magnam consectetur dolorum ducimus unde, vero ratione provident dolor eos quas a cumque. Architecto, quia quisquam cupiditate facilis quos placeat laudantium ipsa. Quia autem quos quas error quasi nostrum doloribus mollitia earum maiores quod dolorem, deserunt incidunt atque consequatur debitis veritatis itaque, rem esse maxime molestiae consectetur! Nostrum qui quibusdam harum animi doloremque fugiat sint quod deleniti ipsum soluta a totam expedita, dolorum nulla consequatur odit aperiam, numquam corrupti eaque veritatis reiciendis ratione excepturi? Veritatis, eum!",
          color: 2,
          img: "public/img2.jpg",
        }}
      />

      <ImgFullSec
        obj={{
          title: "Title",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur modi voluptatum molestiae est repudiandae, harum exercitationem laboriosam quisquam doloribus error voluptates hic magni magnam consectetur dolorum ducimus unde, vero ratione provident dolor eos quas a cumque. Architecto, quia quisquam cupiditate facilis quos placeat laudantium ipsa. Quia autem quos quas error quasi nostrum doloribus mollitia earum maiores quod dolorem, deserunt incidunt atque consequatur debitis veritatis itaque, rem esse maxime molestiae consectetur! Nostrum qui quibusdam harum animi doloremque fugiat sint quod deleniti ipsum soluta a totam expedita, dolorum nulla consequatur odit aperiam, numquam corrupti eaque veritatis reiciendis ratione excepturi? Veritatis, eum!",
          color: 2,
          img: "public/img2.jpg",
        }}
      />

      <StandardTextSec
        obj={{
          title: "Title",
          content: "Hej igen igen",
          color: 1,
        }}
      />
    </>
  );
}
