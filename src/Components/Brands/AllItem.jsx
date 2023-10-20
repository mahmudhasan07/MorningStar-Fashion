// import { element } from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';

// Import Swiper styles
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { element } from "prop-types";


const AllItem = () => {
    const loader = useLoaderData()
    const id = useRef()
    console.log(loader);
    const [slider,setslider]= useState([])
    const [array, setarray] = useState(loader)
    useEffect(()=>{
        fetch('https://morningstar-fashion-server-7p4yd35qw.vercel.app/slider')
        .then(res=>res.json())
        .then(data=> setslider(data))
        AOS.init();
    },[])

    const handlesearch =(e)=>{
        e.preventDefault()
const Id  = id.current.value
const searchitem = loader.filter(element => element.type.toLowerCase().includes(Id))
        setarray(searchitem)
        // id.current.rest()

    }
    return (
        <section className="my-5">
            <h1 className="text-3xl font-semibold text-center my-5">All Category</h1>
            <div>
                
            <div data-aos="zoom-in-up" className="lg:mx-8 my-5">
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
                    <SwiperSlide><img className=" mx-auto h-[500px]" src={slider[0]?.image1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className=" mx-auto h-[500px]" src={slider[1]?.image1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className=" mx-auto h-[500px]" src={slider[2]?.image1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className=" mx-auto h-[500px]" src={slider[3]?.image1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className=" mx-auto h-[500px]" src={slider[4]?.image1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className=" mx-auto h-[500px]" src={slider[5]?.image1} alt="" /></SwiperSlide>
                    {/* <SwiperSlide><img className=" mx-auto h-[500px]" src={slider[6]?.image1} alt="" /></SwiperSlide> */}
                </Swiper>
            </div>

            <h1 className="text-3xl text-center lg:my-10 my-5">Products</h1>
            </div>
            <div className="text-center lg:mb-10 mb-5">
                <input ref={id} type="text" className="border-2 w-1/3 p-2 border-orange-400 rounded-xl" placeholder="Enter your item type for all brands" />
                <button onClick={handlesearch} className="btn bg-orange-400">Search</button>
            </div>
            <div className="flex flex-wrap gap-8 justify-center">
                {
                    array.map(element => <Card key={element._id} card={element}></Card>)
                }
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    const navigate = useNavigate()
    const handleitem = (id) => {
        console.log(id);
        const name = card.brandName
        console.log(name);
        navigate(`/${name}/${id}`)
    }

    const handleupdate = (id) => {
        const name = card.brandName
        navigate(`/${name}/${id}-update`)
    }
    return (
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="card w-72  border-2 border-gray-400  shadow-2xl p-2">
            <img className="w-72 h-80" src={card?.photourl} alt="" />
            <div className="my-2 flex-grow">
                <h1><span>Name :</span> {card?.name}</h1>
                <h1><span>Brand Name :</span> {card?.brandName}</h1>
                <p><span>Price :</span> {card?.price} $</p>
                <p><span>Rating :</span> {card?.rating}</p>
            </div>
            <div className="flex   justify-around">
                <button onClick={() => handleitem(card?._id)} className="btn bg-orange-500">Details</button>
                <button onClick={() => handleupdate(card?._id)} className="btn bg-orange-500">Update</button>
            </div>

        </div>
    )
}

export default AllItem;