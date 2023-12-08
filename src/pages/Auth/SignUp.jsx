import Footer from "../../components/Footer/Footer";
import Meta from "../../components/Meta/Meta";
import Favicon from "../../assets/images/download.png";
import MainIMage from "../../assets/images/Screenshot from 2023-12-07 23-39-38.png";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io";
const SignUp = () => {
    return (
        <>
            <Meta>
                <title>Sign Up . Instagram</title>
                <link
                    rel="shortcut icon"
                    href="https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png"
                    type="image/x-icon"
                />
            </Meta>
            <section className="main-section flex justify-center items-center h-screen ">
                <div className="container">
                    <div className="login-page flex justify-center items-center h-[80vh] gap-10">
                        <div className="right w-[390px]">
                            <div className="login-wrapper border">
                                <div className="login-form flex justify-center items-center flex-col py-[25px] px-[35px] ">
                                    <div className="form-top pt-[10px] pb-[20px]">
                                        <img
                                            src={logo}
                                            alt="logo"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-[#0195f7] flex justify-center gap-4 items-center  w-full rounded-lg text-white font-semibold mt-2 py-[5px]">
                                        <IoLogoFacebook />
                                        Log in with Facebook
                                    </button>
                                    <div className="divider mt-4 mb-6 flex text-gray-500 justify-between items-center gap-3 w-full">
                                        <div className="box border-t border-gray-300 w-full"></div>
                                        <h1>OR</h1>
                                        <div className="box border-t border-gray-300 w-full"></div>
                                    </div>
                                    <form
                                        action=""
                                        className="flex justify-center items-center gap-2 flex-col w-full">
                                        <input
                                            className="w-full border text-gray-950 p-[7px] text-[13px] outline-none "
                                            type="text"
                                            name="mobile_email"
                                            placeholder="Mobile Number or Email"
                                        />
                                        <input
                                            className="w-full border text-gray-950 p-[7px] text-[13px] outline-none "
                                            type="text"
                                            name="full_name"
                                            placeholder="Full Name"
                                        />

                                        <input
                                            className="w-full border text-gray-950 p-[7px] text-[13px] outline-none "
                                            type="text"
                                            name="username"
                                            placeholder="Username"
                                        />
                                        <input
                                            className="w-full border text-gray-950 p-[7px] text-[13px] outline-none "
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                        />

                                        <div className="text text-[12px] my-3 text-gray-500 flex flex-col gap-4 text-center">
                                            <p>
                                                People who
                                                use our
                                                service may
                                                have
                                                uploaded
                                                your contact
                                                information
                                                to
                                                Instagram.
                                                <Link
                                                    to=""
                                                    className="text-blue-800 hover:underline">
                                                    {" "}
                                                    Learn
                                                    More
                                                </Link>
                                            </p>
                                            <p>
                                                {" "}
                                                By signing
                                                up, you
                                                agree to our
                                                <Link
                                                    to=""
                                                    className="text-blue-800 hover:underline">
                                                    {" "}
                                                    Terms
                                                </Link>
                                                ,{" "}
                                                <Link
                                                    to=""
                                                    className="text-blue-800 hover:underline">
                                                    Privacy
                                                    Policy
                                                </Link>{" "}
                                                and{" "}
                                                <Link
                                                    to=""
                                                    className="text-blue-800 hover:underline">
                                                    Cookies
                                                    Policy
                                                </Link>{" "}
                                                .
                                            </p>
                                        </div>
                                        <button
                                            type="submit"
                                            className="bg-[#0195f7] w-full rounded-lg text-white font-semibold mt-2 py-[5px]">
                                            Sign up
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="sign-up-section flex justify-center items-center border py-5 px-8 mt-2">
                                <p className="text-[14px]">
                                    Have an account?{" "}
                                    <Link
                                        to="/accounts/login"
                                        className="text-[#0195f7]">
                                        Log in
                                    </Link>
                                </p>
                            </div>
                            <p className="text-[14px] text-center my-4">
                                Get the app.
                            </p>
                            <div className="app-img gap-3  flex justify-center items-center">
                                <Link>
                                    {" "}
                                    <img
                                        className="w-32"
                                        src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"
                                        alt=""
                                    />
                                </Link>
                                <Link>
                                    {" "}
                                    <img
                                        className="w-32"
                                        src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default SignUp;
