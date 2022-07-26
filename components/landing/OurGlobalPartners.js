import Head from "next/head";
import Slider from "react-slick";
import styles from "../../styles/landing/OurGlobalPartners.module.css";
import Image from "next/image";
export default function OurGlobalPartners({data}) {
  let filterPosition =data.filter((db)=> db.position == 7);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 6,
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
        <p className={styles.header}>OUR GLOBAL PARTNERS</p>
        <Slider {...settings}>
          {filterPosition[0].image.map((db,i)=>(
          <div className={styles.logo} key={db._id}>
            <Image
              className={styles.logoPartner}
              src={db.url}
              width={db.width}
              height={db.height}
              alt="Card image cap"
            />
          </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
