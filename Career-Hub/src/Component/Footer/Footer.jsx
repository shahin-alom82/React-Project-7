
const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 rounded-lg shadow dark:bg-gray-900 mt-10">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            {/* <img src="/src/assets/logo/CareerHub.png" className="h-6 text-white" alt="Flowbite Logo" /> */}
                            <h1 className="text-white text-4xl font-semibold">CareerHub</h1>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">CareerHub™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;