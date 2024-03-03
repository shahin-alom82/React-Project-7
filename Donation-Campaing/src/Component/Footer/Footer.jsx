
const Footer = () => {
    return (
        <div>
            <footer className="flex flex-col items-center bg-neutral-900 rounded-xl mt-10 text-center text-white">
                <div className="container px-6 pt-6">
                    <div className="mb-6 flex justify-center">
                        <a
                            href="#!"
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </a>

                        {/* Add the other social media icons similarly */}

                    </div>
                </div>

                {/* Copyright section */}
                <div className="w-full p-4 text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2024 Copyright :
                    <a className="text-white" href="#"> Donation Campaingn</a>
                </div>
            </footer>
        </div>

    );
};

export default Footer;