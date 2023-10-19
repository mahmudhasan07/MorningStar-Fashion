import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';

// Import Swiper styles
import 'swiper/css';
import Feedback from "./Feedback";



const Home = () => {
    const navigate = useNavigate()

    const handlenike = () => {

        navigate(`/Nike`)
    }
    const handleadidas = () => {
        navigate(`/Adidas`)
    }
    const handlegucci = () => {
        navigate(`/Gucci`)
    }
    const handlezara = () => {
        navigate(`/Zara`)
    }
    const handleck = () => {
        navigate(`/Calvin Klein`)
    }
    const handlehm = () => {
        navigate(`/H&M`)
    }
    return (
        <section>
            <div className="lg:mx-8 mx-2 lg:my-10 my-5" >
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
                    <SwiperSlide><img className=" mx-auto rounded-lg h-[500px]" src='https://i.ibb.co/dKJXY48/Baner.jpg' alt="" /></SwiperSlide>
                    <SwiperSlide><img className=" mx-auto rounded-lg h-[500px]" src="https://i.ibb.co/JKKcKWc/Baner2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className=" mx-auto rounded-lg h-[500px]" src="https://i.ibb.co/bQhHg3W/Baner3.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className=" mx-auto rounded-lg h-[500px]" src="https://i.ibb.co/D7Bbj03/Baner4.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>

            <div className="lg:my-16 my-5">
                <h1 className="text-4xl font-bold text-center ">Why You Choice Us !!!</h1>
                <div className="flex justify-around lg:my-10 my-3">
                    <div className="w-1/3">
                        <ul className="list-decimal">
                            <li>
                                <span className="text-lg font-semibold">Unique Fashion Selection : </span> Your website offers a curated collection of clothing and accessories that stand out from mainstream fashion, giving shoppers a unique and distinctive style.
                            </li>
                            <li>
                                <span className="text-lg font-semibold">Trendy and Up-to-Date:</span> Shoppers trust your website to stay current with the latest fashion trends, ensuring they can find the most stylish and fashionable items.
                            </li>
                            <li >
                                <span className="text-lg font-semibold">High-Quality Products:</span> You prioritize quality, offering well-made and durable fashion items that are worth the investment.
                            </li>
                            <li>
                                <span className="text-lg font-semibold">Competitive Pricing:</span> Your website offers competitive prices and regular discounts or promotions, making high-end fashion more accessible to a broader audience.
                            </li>
                            <li>
                            <span className="text-lg font-semibold">Fast Shipping and Easy Returns:</span> Efficient shipping and a hassle-free returns policy ensure customers receive their purchases promptly and can easily exchange or return items if needed.
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/2">
                        <img src="https://i.ibb.co/ZVyrSLg/Choice.png" alt="" />
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-3xl font-bold text-center lg:my-10 my-5">Our Provide Brands </h1>
                <div className="flex flex-wrap gap-10 justify-center lg:my-10 my-5 lg:mx-10 mx-2">
                    <div onClick={handlenike} className="w-80 border-2 border-gray-400 p-2 card">
                        <img className="w-80 h-56" src='https://i.ibb.co/5xFK9wF/desktop-wallpaper-best-nike-logo-gallery.jpg' alt="" />
                        <h1 className="text-lg text-center font-semibold">Nike</h1>
                    </div>
                    <div onClick={handleadidas} className="w-80 border-2 border-gray-400 p-2 card">
                        <img className="w-80 h-56" src='https://i.ibb.co/sQKVxt5/Adidas.jpg' alt="" />
                        <h1 className="text-lg text-center font-semibold">Adidas</h1>
                    </div>
                    <div onClick={handlegucci} className="w-80 border-2 border-gray-400 p-2 card">
                        <img className="w-80 h-56" src='https://i.ibb.co/pdRt02b/Gucci.jpg' alt="" />
                        <h1 className="text-lg text-center font-semibold">Gucci</h1>
                    </div>
                    <div onClick={handleck} className="w-80 border-2 border-gray-400 p-2 card">
                        <img className="w-80 h-56" src='https://i.ibb.co/1QrLXLY/CK.jpg' alt="" />
                        <h1 className="text-lg text-center font-semibold">Calvin Klein</h1>
                    </div>
                    {/* <div className="w-80 border-2 border-gray-400 p-2 card">
                        <img className="w-80 h-56" src='https://i.ibb.co/5YjCKn1/Versace.jpg' alt="" />
                        <h1 className="text-lg text-center font-semibold">Versace</h1>
                    </div> */}
                    <div onClick={handlezara} className="w-80 border-2 border-gray-400 p-2 card">
                        <img className="w-80 h-56" src='https://i.ibb.co/0JSngvV/Zara.jpg' alt="" />
                        <h1 className="text-lg text-center font-semibold">Zara</h1>
                    </div>
                    <div onClick={handlehm} className="w-80 border-2 border-gray-400 p-2 card">
                        <img className="w-80 h-56" src='https://i.ibb.co/mHJr2cN/H-M.jpg' alt="" />
                        <h1 className="text-lg text-center font-semibold">H&M</h1>
                    </div>
                </div>
            </div>
            <div className="lg:my-16 my-5">
                <Feedback></Feedback>
            </div>
        </section>
    );
};

export default Home;