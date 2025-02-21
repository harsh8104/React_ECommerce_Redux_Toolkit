import { useDispatch, useSelector } from "react-redux"
import { bagActions } from "../../store/bagSlice"
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const HomeItem=({item})=>{
    const dispatch=useDispatch()
const handleAddBag=()=>{
    dispatch(bagActions.addTobag(item.id))
}
const handleRemoveBag=()=>
{
    dispatch(bagActions.removeFromBag(item.id))
}
const bagItems = useSelector((store) => store.bag);
const elementFound=bagItems.indexOf(item.id)>=0
return (
<div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemoveBag}
        >
             <AiFillDelete />
           Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handleAddBag}
        >
            <GrAddCircle />
           Add to Bag
        </button>
      )}
    </div>
)
}
export default HomeItem