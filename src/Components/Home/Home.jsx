import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';

// Import Swiper styles
import 'swiper/css';



const Home = () => {
    const navigate = useNavigate()

    const handlenike = () => {

        navigate(`/nike`)
    }
    const handleadidas = () => {
        navigate(`/adidas`)
    }
    const handlegucci = () => {
        navigate(`/gucci`)
    }
    const handlezara = () => {
        navigate(`/zara`)
    }
    const handleck = () => {
        navigate(`/ck`)
    }
    const handlehm = () => {
        navigate(`/h&m`)
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
        </section>
    );
};

export default Home;