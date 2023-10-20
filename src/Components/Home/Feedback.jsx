import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';

// Import Swiper styles
import 'swiper/css';

const Feedback = () => {
    return (
        <div className='lg:mx-10'>
            <h1 className='text-3xl font-bold text-center mb-5'>Customer FeedBack .....</h1>
            <Swiper
                modules={[Navigation, EffectCoverflow, Autoplay, Pagination, Scrollbar, A11y]}
                // effect={'coverflow'}
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
                className=' p-2'
            >
                <SwiperSlide>
                    <div data-aos="zoom-in-up" className='border-2 rounded-xl  border-orange-300 p-5'>
                        <h1 className='font-bold mb-1'><span>Customer:</span> Nelima Afroz</h1>
                        <p className='font-semibold mb-1'><span>Post Date:</span> October 10, 2023</p>
                        <p className='mb-1'>
                            I can't praise this fashion website enough. It's become my fashion sanctuary, and I'm a dedicated shopper here. What sets this platform apart is its unmatched selection. The items are unique and trendsetting, making me stand out from the crowd. I no longer need to wade through mainstream fashion; this site provides a breath of fresh air.Staying in vogue is a breeze here. They have an uncanny ability to stay ahead of the fashion curve and quickly make the latest trends accessible. I feel like I have a personal stylist at my fingertips. I've received countless compliments, thanks to this website's fashion-forward offerings.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-aos="zoom-in-up" className='border-2 rounded-xl border-orange-300 p-5'>
                        <h1 className='font-bold mb-1'><span>Customer:</span> Masud Rahman</h1>
                        <p className='font-semibold mb-1'><span>Post Date:</span> September 23, 2023</p>
                        <p className='mb-1'>
                            This website has revolutionized my online shopping experience. From its seamless user experience to its incredible product selection and outstanding customer service, it's a shopping haven that sets the bar high for e-commerce platforms.The website's user-friendly design is a standout feature. Navigating it is a breeze, and the clean layout enhances the shopping experience. It's evident that they've invested in making the platform intuitive for users.What keeps me coming back is the fast shipping. My orders always arrive sooner than expected, and the prompt delivery is a testament to their commitment to customer satisfaction. It's a small detail that makes a big difference.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-aos="zoom-in-up" className='border-2 rounded-xl border-orange-300 p-5'>
                        <h1 className='font-bold mb-1'><span>Customer:</span> Labonno Akter</h1>
                        <p className='font-semibold mb-1'><span>Post Date:</span> September 10, 2023</p>
                        <p className='mb-1'>
                            What initially drew me to this platform was its dedication to sustainability and ethical fashion practices. It's not just about looking good; it's about doing good for the planet and the people involved in the fashion industry. The transparency about sourcing, production, and materials is refreshing and instills confidence in my purchases.I'm continually impressed by the stunning fashion they offer. It's evident that they've mastered the art of combining style and ethics. The pieces I've purchased are not only fashionable but also eco-friendly and sustainable. It's a win-win situation.The user interface is intuitive, and I appreciate the seamless navigation. They've created a website that not only looks good but also functions well, enhancing the overall shopping experience.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-aos="zoom-in-up" className='border-2 rounded-xl border-orange-300 p-5'>
                        <h1 className='font-bold mb-1'><span>Customer:</span> Mehadi Hasan</h1>
                        <p className='font-semibold mb-1'><span>Post Date:</span> August 20, 2023</p>
                        <p className='mb-1'>
                            Beyond their excellent customer service, the user interface of the website is commendable. It's easy to navigate, with an intuitive design that enhances the shopping experience. It's clear that they've invested in making the platform user-friendly.The competitive pricing and frequent discounts are a huge plus. It allows me to enjoy high-quality fashion without straining my budget. The affordability, coupled with the excellent customer service, is a winning combination.The reputation of this website and the positive reviews are well-deserved. It has truly set a standard for customer-centric fashion retail.In summary, this website goes above and beyond in its commitment to customer satisfaction.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-aos="zoom-in-up" className='border-2 rounded-xl border-orange-300 p-5'>
                        <h1 className='font-bold mb-1'><span>Customer:</span> Sabbir Hasan</h1>
                        <p className='font-semibold mb-1'><span>Post Date:</span> June 10, 2023</p>
                        <p className='mb-1'>
                            I can't praise this fashion website enough. It's become my fashion sanctuary, and I'm a dedicated shopper here. What sets this platform apart is its unmatched selection. The items are unique and trendsetting, making me stand out from the crowd. I no longer need to wade through mainstream fashion; this site provides a breath of fresh air.Staying in vogue is a breeze here. They have an uncanny ability to stay ahead of the fashion curve and quickly make the latest trends accessible. I feel like I have a personal stylist at my fingertips. I've received countless compliments, thanks to this website's fashion-forward offerings.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-aos="zoom-in-up" className='border-2 rounded-xl border-orange-300 p-5'>
                        <h1 className='font-bold mb-1'><span>Customer:</span> Fariha Akter</h1>
                        <p className='font-semibold mb-1'><span>Post Date:</span> May 10, 2023</p>
                        <p className='mb-1'>
                            I had the pleasure of experiencing top-notch customer service on this website, and I'm thoroughly impressed. Their commitment to customer satisfaction is evident in every interaction, making it my go-to fashion destination.I once had a minor issue with an order, and the way the customer service team handled it was exceptional. Their responsiveness and willingness to resolve the matter promptly left me feeling valued as a customer. It's rare to encounter such dedication to customer satisfaction in the online shopping world.Beyond their excellent customer service, the user interface of the website is commendable. It's easy to navigate, with an intuitive design that enhances the shopping experience. It's clear that they've invested in making the platform user-friendly.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-aos="zoom-in-up" className='border-2 rounded-xl border-orange-300 p-5'>
                        <h1 className='font-bold mb-1'><span>Customer:</span> Mahmud Hasan</h1>
                        <p className='font-semibold mb-1'><span>Post Date:</span> April 10, 2023</p>
                        <p className='mb-1'>
                            I can't praise this fashion website enough. It's become my fashion sanctuary, and I'm a dedicated shopper here. What sets this platform apart is its unmatched selection. The items are unique and trendsetting, making me stand out from the crowd. I no longer need to wade through mainstream fashion; this site provides a breath of fresh air.Staying in vogue is a breeze here. They have an uncanny ability to stay ahead of the fashion curve and quickly make the latest trends accessible. I feel like I have a personal stylist at my fingertips. I've received countless compliments, thanks to this website's fashion-forward offerings.
                        </p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Feedback;