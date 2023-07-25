import React from "react"
import ReactDOM from "react-dom/client"



const  Header = () =>
 {

    return(
       <div className="header">
        <div>
        <img className="logo" src="https://icon-library.com/images/food-app-icon/food-app-icon-12.jpg"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Cart</li>
            </ul>
        </div>
       </div> 
    )
 }

 const resList =[{
   
    data:{
        id:"1",
    imageUrl:"https://th.bing.com/th/id/OIP.uq2qaGILojlWRGoIUXSeUAHaFk?pid=ImgDet&rs=1",
    name:"KFC",
    cusines:"Burger,Wings,Pizza",
    costForTwo:"400",
    ratings:"3.8 Rating",
    time:"38"


 }},{
   
    data:{
        id:"2",
    imageUrl:"https://b.zmtcdn.com/data/pictures/6/2600296/46146a918fdbd75acc2d2ede1ed71ea5.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name:"Naturals Icecream",
    cusines:"Icecream",
    costForTwo:"700",
    ratings:"4.8 Rating",
    time:"40"


 }},{
   
    data:{
        id:"3",
    imageUrl:"https://th.bing.com/th/id/OIP.uq2qaGILojlWRGoIUXSeUAHaFk?pid=ImgDet&rs=1",
    name:"Hyderabad Biryani",
    cusines:"Biryani,Chicken",
    costForTwo:"400",
    ratings:"3.8 Rating",
    time:"38"


 }},{
   
    data:{
        id:"4",
    imageUrl:"https://th.bing.com/th/id/OIP.uq2qaGILojlWRGoIUXSeUAHaFk?pid=ImgDet&rs=1",
    name:"Paratha Corner",
    cusines:"Paratha,North Indian",
    costForTwo:"400",
    ratings:"3.8 Rating",
    time:"38"


 }},{
   
    data:{
        id:"5",
    imageUrl:"https://th.bing.com/th/id/OIP.uq2qaGILojlWRGoIUXSeUAHaFk?pid=ImgDet&rs=1",
    name:"Royal Icecream",
    cusines:"Icecreams,cocktail",
    costForTwo:"400",
    ratings:"3.8 Rating",
    time:"38"


 }},{
   
    data:{
        id:"6",
    imageUrl:"https://th.bing.com/th/id/OIP.uq2qaGILojlWRGoIUXSeUAHaFk?pid=ImgDet&rs=1",
    name:"KFC",
    cusines:"Burger,Wings,Pizza",
    costForTwo:"400",
    ratings:"3.8 Rating",
    time:"38"


 }}]
const RestaurantCard = (props) =>{
    const {resData}=props
    const {imageUrl,name,cuisine,costForTwo,ratings,time}=resData?.data
return(
    <div className="res-card" style={{backgroundColor:"f0f0f0"}}>
        <img className="reslogo" src={imageUrl}></img>
    <h3>{name}</h3>
    <h4>{cuisine}</h4>
    <h4>{costForTwo} for Two</h4>
    <h4>{ratings} Stars</h4>
    <h4>{time} minutes</h4>
    </div>
)
}

 const Body = () =>{
    return(
        <>
        <div className="search"> Search</div>
        <div className="res-container">
       {resList.map( restCard => <RestaurantCard key={restCard.data.id} resData={restCard}/>)}
        </div>
        
        </>
    )
 }
 const  AppLayout = () =>
 {

    return(
       <div className="app">
<Header></Header>
<Body/>

       </div> 
    )
 }
   

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout></AppLayout>)
