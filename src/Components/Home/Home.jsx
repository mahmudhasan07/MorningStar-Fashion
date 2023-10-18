import NavBar from "../NavBar/NavBar";


const Home = () => {
    return (
        <section>
            <div>
                <h1>Banner</h1>

            </div>

            <div>
                <h1 className="text-3xl font-bold text-center lg:my-10 my-5">Our Provide Brands </h1>
                <div className="flex flex-wrap gap-10 justify-center lg:mx-10 mx-2">
                    <div className="w-60 card">
                        <img className="w-60 h-48" src='https://i.ibb.co/5xFK9wF/desktop-wallpaper-best-nike-logo-gallery.jpg' alt="" />
                        <h1 className="text-lg text-center font-semibold">Nike</h1>
                    </div>
                    <div className="w-60 card">
                        <img className="w-60 h-48" src='https://i.ibb.co/sQKVxt5/Adidas.jpg' alt="" />
                        <h1 className="text-lg text-center font-semibold">Adidas</h1>
                    </div>
                    <div className="w-60 card">
                        <img className="w-60 h-48" src='https://i.ibb.co/pdRt02b/Gucci.jpg' alt="" />
                        <h1 className="text-lg text-center font-semibold">Gucci</h1>
                    </div>
                    <div className="w-60 card">
                        <img className="w-60 h-48" src='https://i.ibb.co/1QrLXLY/CK.jpg' alt="" />
                        <h1 className="text-lg text-center font-semibold">Calvin Klein</h1>
                    </div>
                    <div className="w-60 card">
                        <img className="w-60 h-48" src='https://i.ibb.co/5YjCKn1/Versace.jpg' alt="" />
                        <h1 className="text-lg text-center font-semibold">Versace</h1>
                    </div>
                    <div className="w-60 card">
                        <img className="w-60 h-48" src='https://i.ibb.co/0JSngvV/Zara.jpg' alt="" />
                        <h1 className="text-lg text-center font-semibold">Zara</h1>
                    </div>
                    <div className="w-60 card">
                        <img className="w-60 h-48" src='https://i.ibb.co/mHJr2cN/H-M.jpg' alt="" />
                        <h1 className="text-lg text-center font-semibold">H&M</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;