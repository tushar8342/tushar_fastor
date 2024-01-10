import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { IoMdWallet } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
 import ImageCarousel from "./ImageCarousel"
import CatagoryCarousal from "./CatagoryCarousal";

const RestaurantList = () => {
  const [resturantData, setResturantData] = useState([]);
  const navigate = useNavigate();

  const fetchResturantData = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM4NiIsImVtYWlsIjoiOTgxODk3OTQ1MEBmYXN0b3IuaW4iLCJwaG9uZSI6Ijk4MTg5Nzk0NTAiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjMtMTItMDJUMDk6MjQ6NDcuMDAwWiIsImlhdCI6MTcwNDg4OTk1OCwiZXhwIjoxNzEyMTQ3NTU4fQ.wmFDMn9IVwIjfEjVflq6NY-hjpFHeqQOvR1U2LmT6b4";

    try {
      const response = await axios.get(
        "https://staging.fastor.in/v1/m/restaurant?city_id=118&&",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setResturantData(response.data);
      if (response.status === 200) {

      }
    } catch (err) {
      // Handle errors
    }
  };

  useEffect(() => {
    fetchResturantData();
  }, []);

  const handleShops = (id) => {
    navigate(`/restro-details/${id}`, {
      state: { SingleRestro: resturantData, id: id },
    });
  };

  return (
    <div>
      <Grid container>

        <Grid xs={12} item className="header">
          <div style={{ display: "flex" }}>
            <p>Pre Order From</p>{" "}
            <LocationOnOutlinedIcon style={{ opacity: 0.4 }} />
          </div>
          <p>Connaught Place</p>
        </Grid>
      </Grid>

      <Grid container className="sub-header" spacing={2}>
        <Grid item xs={6}>
          <div className="sub-header-heading">
            <p>Tushar</p>
            <p>Lets explore this evening</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="offers-icon">
            <BiSolidOffer style={{ color: "white", fontSize: "2rem" }} />
          </div>
          <p className="icon-text">Offers</p>
        </Grid>
        <Grid item xs={3}>
          <div className="wallet-icon">
            <IoMdWallet style={{ color: "white", fontSize: "2rem" }} />
          </div>
          <p className="icon-text">Wallet</p>
        </Grid>
      </Grid>
      <Grid container className="your-taste">
        <Grid item>
          <p>Your Taste</p>
        </Grid>
      </Grid>


      <Grid container xs={12} className="restro-carousal">
        <Grid item xs={12}>
          <CatagoryCarousal resturantData={ resturantData} />
        </Grid>
      </Grid>

      {/* Category Carousal */}
      <Grid container xs={12}>
        <Grid item xs={12}>
          <ImageCarousel  />
        </Grid>
      </Grid>

      {/* Popular Ones */}
      <Grid container className="your-taste">
        <Grid item>
          <p>Popular Ones</p>
        </Grid>
      </Grid>

      {/* Restaurant Shops */}
      <div style={{ marginLeft: "10px" }}>
        {resturantData.map((item, i) => (
          <Grid
            container
            xs={12}
            spacing={1}
            style={{ marginTop: "1rem" }}
            onClick={() => {
              handleShops(item.restaurant_id);
            }}
            key={i}
          >
            <Grid item xs={5}>
              <img
                className="shops-image"
                src={item?.images[0].url}
                alt={item?.restaurant_name}
              />
            </Grid>
            <Grid item container xs={7}>
              <Grid item xs={12}>
                <Typography style={{ fontWeight: "500" }}>
                  {item?.restaurant_name}
                </Typography>
                <Typography id="popular-ones-details">
                  {item?.restaurant_mode}
                </Typography>
                <Typography id="popular-ones-details">
                  {item?.location?.city_name}
                </Typography>
                <Typography id="popular-ones-offers">
                  <BiSolidOffer className="offer-icon" /> 4 offers trending
                </Typography>
              </Grid>
              <Grid
                container
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Grid Item>
                  <Typography id="rating-price">
                    <AiFillStar style={{ marginRight: "5px" }} />
                    {item?.rating?.restaurant_avg_rating}
                  </Typography>
                  <Typography id="popular-ones-details">popularity</Typography>
                </Grid>
                <Grid Item>
                  <Typography id="rating-price">
                    {" "}
                    {item?.currency?.symbol} {item?.avg_cost_for_two}
                  </Typography>
                  <Typography id="popular-ones-details">
                    cost for two
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
