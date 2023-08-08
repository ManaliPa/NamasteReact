import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listRes, setlistRes] = useState([]);
  const [filterlistRes, setfilterlistRes] = useState([]);
  const[searchtext,setsearchtext] =useState();
  useEffect(() => {
    console.log("Use effect called");
    const jsonval = fetchdata();
    setresdata(jsonval);
  }, []);

  const setresdata = async (jsonval) => {
    setlistRes(resList);
    setfilterlistRes(resList);
  };

  const fetchdata = async () => {
    const data = await fetch("https://www.zomato.com/webroutes/search/home");
    console.log(data)
    const json = await data.json();
    return json;
  };

  
 

  //conditional rendering
  return(listRes.length == 0)? <Shimmer/> :
   (
    <>
      <div className="filter">
        <div className="Search">
          <input type="text" className="search-box" value={searchtext} onChange={(e)=>{setsearchtext(e.target.value)}}></input>
          <button onClick={()=>{ const filterlistRes = listRes.filter((res) => res.data.name.toLowerCase().includes(searchtext.toLowerCase()));
            setfilterlistRes(filterlistRes);}}>Search</button>
        </div>
        <button
          className="flt-btn"
          onClick={() => {
            const filterlistRes = listRes.filter((res) => res.data.ratings > 4);
            setlistRes(filterlistRes);
          }}
        >
          Top Rated filters
        </button>
      </div>
      <div className="res-container">
        {filterlistRes.map((restCard) => (
          <RestaurantCard key={restCard.data.id} resData={restCard} />
        ))}
      </div>
    </>
  );
};
export default Body;
