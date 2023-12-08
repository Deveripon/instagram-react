import Footer from "../../components/Footer/Footer";
import Meta from "../../components/Meta/Meta";
import Favicon from "../../assets/images/download.png";
import MainIMage from "../../assets/images/Screenshot from 2023-12-07 23-39-38.png";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io";
const Login = () => {
    return (
        <>
            <Meta>
                <title>Login . Instagram</title>
                <link
                    rel="shortcut icon"
                    href="https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png"
                    type="image/x-icon"
                />
            </Meta>
            <section className="main-section flex justify-center items-center h-screen ">
                <div className="container">
                    <div className="login-page flex justify-center items-center h-[80vh] gap-10">
                        <div className="right w-[380px]">
                            <div className="login-wrapper border">
                                <div className="login-form flex justify-center items-center flex-col py-[25px] px-[35px] ">
                                    <div className="form-top pt-[10px] pb-[20px]">
                                        <img
                                            src={logo}
                                            alt="logo"
                                        />
                                    </div>
                                    <form
                                        action=""
                                        className="flex justify-center items-center gap-2 flex-col w-full">
                                        <input
                                            className="w-full border text-gray-950 p-[7px] text-[13px] outline-none "
                                            type="text"
                                            name="userInfo"
                                            placeholder="Phone number,username,or email"
                                        />
                                        <input
                                            className="w-full border text-gray-950 p-[7px] text-[13px] outline-none "
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                        <button
                                            type="submit"
                                            className="bg-[#0195f7] w-full rounded-lg text-white font-semibold mt-2 py-[5px]">
                                            Log in
                                        </button>
                                    </form>
                                    <div className="divider mt-2 flex text-gray-500 justify-between items-center gap-3 w-full">
                                        <div className="box border-t border-gray-300 w-full"></div>
                                        <h1>OR</h1>
                                        <div className="box border-t border-gray-300 w-full"></div>
                                    </div>
                                    <Link
                                        to=""
                                        className="flex justify-center items-center text-[14px] gap-2 my-5 font-semibold text-[#385185]">
                                        <IoLogoFacebook />
                                        Log in with Facebook
                                    </Link>
                                    <Link
                                        to="/accounts/password/reset"
                                        className="text-[12px] text-blue-900 cursor-pointer">
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>
                            <div className="sign-up-section flex justify-center items-center border py-5 px-8 mt-2">
                                <p className="text-[14px]">
                                    Don't have an account?{" "}
                                    <Link
                                        to="/accounts/sign-up"
                                        className="text-[#0195f7]">
                                        Sign up
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

export default Login;
