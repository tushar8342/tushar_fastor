import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card } from "@mui/material";

const CatagoryCarousal = ({ resturantData }) => {
  const breakpoints = {
    768: {
      slidesPerView: 2,
    },

    1024: { 
      slidesPerView: 5,
    },
  };

  return (
    <div>
      <Swiper
        spaceBetween={50}
        breakpoints={breakpoints}
        loop={true}
        style={{ marginLeft: "10px" }}
      >
        {resturantData.map((e, i) => (
          <SwiperSlide key={i}>
            <Card id="restro-carousal-card">
              <img
                alt={e?.restaurant_name}
                src={e?.images[0]?.url}
                style={{ height: "8rem" }}
              />
              <div className="restro-carousal-heading">
                <p style={{ fontWeight: "600" }}>{e?.restaurant_name}</p>
                <p
                  style={{
                    color: "rgba(128, 128, 128, 0.8)",
                    fontSize: "0.8rem",
                  }}
                >
                  {e.location && e.location.city_name}
                </p>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CatagoryCarousal;
