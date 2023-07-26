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
export default RestaurantCard;