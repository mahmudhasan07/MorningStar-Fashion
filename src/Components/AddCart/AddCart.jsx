import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'



const AddCart = () => {
    const loader = useLoaderData()
    const [array, setarray] = useState(loader)
    return (
        <section>
            <div className="flex h-screen flex-wrap gap-5 lg:my-16 my-5">
                {
                 array.length >0 ? array.map(element => <Cart key={element._id} setarray={setarray} array={array} card={element}></Cart>)
                 : 
                 <h1 className=" text-4xl font-semibold my-auto mx-auto">No Items Added in your cart</h1>
                }
            </div>
        </section>
    );
};

const Cart = ({ card, array, setarray }) => {
    const handledelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://morningstar-fashion-server.vercel.app/mycarts/${id}`, {
                    method: "DELETE"
                })
                const data = array.filter(element => element._id !== id)
                setarray(data)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })






    }
    return (
        <div className="card w-72  border-2 border-gray-400  shadow-2xl p-2">
            <img className="w-72 h-80" src={card?.photourl} alt="" />
            <div className="my-2 flex-grow">
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