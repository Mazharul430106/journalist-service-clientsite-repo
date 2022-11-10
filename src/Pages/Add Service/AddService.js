import React from 'react';

const AddService = () => {

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const img = form.url.value;
        const name = form.service_name.value;
        const description = form.service_desc.value;
        const price = form.price.value;
        // console.log(ImgUrl, serviceDesc, price, ServiceName);

        const newService = {
            img,
            name,
            description,
            price
        }

        fetch('http://localhost:5000/services', {
            method: 'post',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res=> res.json())
        .then(data=> {
            alert('Service Update Successfully')
            console.log(data);
            form.reset();
        })

    }

    return (
        <div className="hero mt-10">
            <div className="hero-content form_width flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleAddService} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="text" name='url' placeholder="Img_Url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input type="text" name='service_name' placeholder="Service Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Desc</span>
                            </label>
                            <input type="text" name='service_desc' placeholder="Service Des..." className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name='price' placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;