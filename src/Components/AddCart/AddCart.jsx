import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const AddCart = () => {
    const loader = useLoaderData()
    const [array, setarray]= useState(loader)
    return (
        <section>
            <div className="flex flex-wrap gap-5 lg:my-16 my-5">
            {
                array.map(element => <Cart key={element._id} setarray={setarray} loader={loader} card={element}></Cart>)
            }
            </div>
        </section>
    );
};

const Cart = ({ card , loader, setarray}) => {
    const handledelete = (id) => {
        fetch(`https://morningstar-fashion-server-7p4yd35qw.vercel.app/${id}`, {
            method: "DELETE"
        })
const data = loader.filter(element=> element._id !== id)
setarray(data)

    }
    return (
        <div className="card w-72 border-2 border-gray-400  shadow-2xl p-2">
            <img className="w-72 h-80" src={card?.photourl} alt="" />
            <div className="my-2">
                <h1><span>Name :</span> {card?.name}</h1>
                <h1><span>Brand Name :</span> {card?.brandName}</h1>
                <p><span>Price :</span> {card?.price} $</p>
                <p><span>Rating :</span> {card?.rating}</p>
            </div>
            <div className="flex  justify-around">
                <button onClick={() => handledelete(card?._id)} className="btn w-full bg-orange-400">Delete</button>
            </div>

        </div>
    )
}

export default AddCart;