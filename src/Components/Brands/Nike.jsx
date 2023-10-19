import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';

// Import Swiper styles
import 'swiper/css';
import { useEffect, useState } from "react";


const Nike = () => {
    const [slider,setslider]= useState([])
    const id = useParams()
    const loaderData = useLoaderData()
    // console.log(loaderData);
    useEffect(()=>{
        fetch('https://morningstar-fashion-server-7p4yd35qw.vercel.app/slider')
        .then(res=>res.json())
        .then(data=> setslider(data))
    },[])
    console.log(id.brand);    

    const newslider = slider.filter(element => element.brandName == id.brand)
    console.log(newslider);
    return (
        <section>
            <h1 className="text-5xl my-7 font-bold text-center underline">{id.brand}</h1>
            <div className="lg:mx-8">
                <Swiper
                    modules={[Navigation, EffectCoverflow, Autoplay, Pagination, Scrollbar, A11y]}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2}
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                        
                    }}
                    spaceBetween={50}
                    autoplay={{ delay: 2000 }}
                    navigation
                >
                    <SwiperSlide><img className=" mx-auto h-[500px]" src={newslider[0]?.image1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className=" mx-auto h-[500px]" src={newslider[0]?.image2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className=" mx-auto h-[500px]" src={newslider[0]?.image3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className=" mx-auto h-[500px]" src={newslider[0]?.image4} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div>
                <h1 className="text-4xl font-semibold text-center mt-10">Nike Products</h1>
            </div>
            <div className="flex flex-wrap gap-7 lg:my-10 my-5 justify-center">
                {
                    loaderData.length>1 ? loaderData.map(element => <Card key={element._id} card={element}></Card>)
                        :
                        <h1 className="text-4xl text-center font-bold ">NO MORE PRODUCTS</h1>
                }
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    const navigate = useNavigate()
    const handleitem =(id)=>{
        console.log(id);
        const name = card.brandName
        console.log(name);
        navigate(`/${name}/${id}`)
    }

    const handleupdate=(id)=>{
const name = card.brandName
navigate(`/${name}/${id}-update`)
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
                <button onClick={()=>handleitem(card?._id)} className="btn">Details</button>
                <button onClick={()=>handleupdate(card?._id)} className="btn">Update</button>
            </div>

        </div>
    )
}

export default Nike;