

const Newsletter = () => {
    return (
        <div className='px-[5%] bg-base-200 h-[300px] flex items-center justify-center my-10 mt-16'>
            <div className='lg:w-[800px] w-full border mx-auto'>
                <h1 className='text-5xl text-center pb-10 font-semibold'>Newsletter</h1>
                <form action="">
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5'>
                        <div className='lg:col-span-2'>
                            <input type="email" placeholder="Enter your email" className=" rounded-sm input input-bordered input-primary w-full focus:outline-none " />
                        </div>
                        <div className='lg:col-span-1'>
                            <button className="btn btn-primary w-full rounded-sm text-white">Subscribe now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;