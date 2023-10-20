import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';


const CardInfo = () => {
    const loadData = useLoaderData()
    // console.log(loadData);
    const handlecart = (id) => {
        console.log(id);
        const name = loadData.name
        const brandName = loadData.brandName
        const type = loadData.type
        const price = loadData.price 
        const note = loadData.note 
        const rating = loadData.rating 
        const photourl = loadData.photourl 
        const item = {name,brandName,type,price,note,rating,photourl}
        fetch(`https://morningstar-fashion-server.vercel.app/mycarts`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item)
            }
            
        )
        swal("Good job!", "You clicked the button!", "success")
    }
    return (
        <section className="lg:my-10 my-5">
            <div className="flex flex-wrap justify-around ">
                <div className="">
                    <img className="w-96" src={loadData.photourl} alt="" />
                </div>
                <div className="w-1/2 my-auto">
                    <h1 className="text-2xl font-semibold mb-2"> {loadData.name}</h1>
                    <p className="text-lg mb-1"><span className="font-semibold">Price :</span>{loadData.price} $</p>
                    <p className="text-lg mb-2"><span className="font-semibold">Type : </span>{loadData.type}</p>
                    <p className="text-lg">{loadData.note}</p>
                    <div>
                        <button onClick={() => handlecart(loadData._id)} className="btn mt-5 bg-orange-500">Add Cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardInfo;