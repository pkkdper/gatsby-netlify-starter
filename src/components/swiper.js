import * as React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCreative, Autoplay } from "swiper";

import Button from "../components/button"

// import styles bundle
// import 'swiper/css/bundle';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-creative';
import 'swiper/scss/autoplay';

import "./swiper.css"

const Slider = ({ data }) => {

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            preloadImages={false}
            lazy={true}
            watchSlidesProgress={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                // pauseOnMouseEnter: true,
            }}
            speed={1500}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
            }}
            modules={[EffectCreative, Pagination, Navigation, Autoplay]}
            className="homepage-swiper"
        >

            {data.map((slide) => (

                <SwiperSlide>
                  <GatsbyImage
                    image={slide.image.childImageSharp.gatsbyImageData}
                    alt={slide.title}
                  />

                  <div className="slide-tile-container">
                    <div className="slide-tile-wrapper">
                      <div className="slide-title" dangerouslySetInnerHTML={{ __html: slide.title }}/>
                      {slide.text &&
                        <div className="slide-description" dangerouslySetInnerHTML={{ __html: slide.text }}/>
                      }
                      {slide.button_text &&
                        <Button btnStyle="color-bright" className="slide-cta-btn" btnLink={slide.button_url} btnText={slide.button_text} />
                      }
                    </div>
                  </div>

                </SwiperSlide>
            ))}

        </Swiper>
    )
  }

export default Slider