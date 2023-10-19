import { useLoaderData } from "react-router-dom";


const CardInfo = () => {
    const loadData = useLoaderData()
    console.log(loadData);
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
                    <button className="btn mt-5">Add Cart</button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default CardInfo;