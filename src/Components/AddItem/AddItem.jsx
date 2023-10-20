const AddItem = () => {
    const handleadd = (e) => {
        e.preventDefault()
        const form = event.target
        const name = form.name.value
        const brandName = form.brandname.value
        const type = form.type.value
        const price = form.price.value
        const note = form.note.value
        const rating = form.rating.value
        const photourl = form.photourl.value

        const item = { name, brandName, type, price, note, rating, photourl}
        console.log(item);

        fetch(`https://morningstar-fashion-server-7p4yd35qw.vercel.app/items`, {
            method: "POST",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(item)
        })
        .then(res=> res.json())
        .then(data => {console.log(data)})
    }
    return (
        <section>
            <div className=" pb-2  bg-base-200">
                <div className="lg:mx-10 mx-3 ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-center lg:py-10 py-5">Add Your Item</h1>
                    </div>
                    <div className="card w-full mb-5 shadow-2xl bg-base-100">

                        <form onSubmit={handleadd} className="p-3">
                            <div className="flex flex-wrap gap-5 mx-5 justify-around">
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="name" className="input input-bordered w-full " />
                                </div>
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Brand Name</span>
                                    </label>
                                    <input name="brandname" type="text" placeholder="brand name" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-5 mx-5 justify-around">
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Type</span>
                                    </label>
                                    <input name="type" type="text" placeholder="type" className="input input-bordered w-full " />
                                </div>
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input name="price" type="number" placeholder="price" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-5 mx-5 justify-around">
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Short description</span>
                                    </label>
                                    <input name="note" type="text" placeholder="short note" className="input input-bordered w-full " />
                                </div>
                                <div className="flex-1">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input name="rating" type="text" placeholder="rating" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className=" mx-5 ">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photourl" type="text" placeholder="photo url" className="input input-bordered w-full" />

                            </div>
                            <div className="text-center my-3">
                                <button className="btn w-1/3 text-lg bg-orange-500 ">Add Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AddItem;