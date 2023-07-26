import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useState } from "react";
const Body = () => {
    const [listRes,setlistRes]=useState(resList
      )
  
  return (
    <>
      <div className="filter">
        <button
          className="flt-btn"
          onClick={() => {
            const listResFilter = listRes.filter((res) => res.data.ratings > 4);
            setlistRes(listResFilter);
          }}
        >
          Top Rated filters
        </button>
      </div>
      <div className="res-container">
        {listRes.map((restCard) => (
          <RestaurantCard key={restCard.data.id} resData={restCard} />
        ))}
      </div>
    </>
  );
};
export default Body;
