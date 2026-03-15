import { getDataLS } from "./../Utility/Utility";
import WishListCard from "./../Component/WishListCard/WishListCard";

const WishList = () => {
  //const[data,setData]=useState();
  //console.log(data);
  const data = getDataLS();
  //console.log(data);
  return (
    <div>
      {/* wishlist Section */}
      <div>
        {
            data.map(item=><WishListCard key={item.id} item={item}></WishListCard>)
        }
      </div>
    </div>
  );
};

export default WishList;
