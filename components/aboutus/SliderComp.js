import Head from "next/head";
import Slider from "react-slick";
import styles from "../../styles/about/SliderComp.module.css";
import Image from "next/image"
export default function SliderComp({data}) {
  let filterPosition =data.filter((db)=> db.position == 3);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 5,
        speed: 500,
    
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
    <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
    <div className={`container-fluid ${styles.container}`}>
      <div className={` ${styles.containerImg}`}>
        <img
          className={styles.imgBg}
          src="/hero image _Landing page.png"
          alt="Card image cap"
        />
      </div>
      <div className={styles.center}>
      <Slider {...settings}>
      {filterPosition.map((db,i)=>(
           <div className={styles.card} key={db.id}>
                <Image
                className={styles.imgCard}
                src={db?.image[0].url}
                width={100}
                height={100}
                alt="Card image cap"
              />
              <div>
                <h5 className={styles.cardTitle}>{db.title}</h5>
                <p className={styles.cardDescription}>
               {db.description}
                </p>
              </div>
            </div>
      ))}
        </Slider>
        </div>
    </div>
  </>
  )
}
