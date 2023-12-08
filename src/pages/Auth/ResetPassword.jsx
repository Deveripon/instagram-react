import Footer from "../../components/Footer/Footer";
import Meta from "../../components/Meta/Meta";
import LockIcon from "../../assets/images/lock.png";
import { Link } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io";
import BrandImage from "../../assets/images/logo.png";

const ResetPassword = () => {
    return (
        <>
            <Meta>
                <title>Reset Password . Instagram</title>
                <link
                    rel="shortcut icon"
                    href="https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png"
                    type="image/x-icon"
                />
            </Meta>
            <section className="header shadow py-[12px] px-6">
                <div className="container w-[calc(100vw_-30%)] block m-auto">
                    <div className="brand">
                        <img
                            className="h-auto w-[110px]"
                            src={BrandImage}
                            alt="logo"
                        />
                    </div>
                </div>
            </section>
            <section className="main-section flex justify-center items-center h-screen ">
                <div className="container">
                    <div className="login-page flex justify-center items-center h-[80vh] gap-10">
                        <div className="right w-[380px]">
                            <div className="login-wrapper border">
                                <div className="login-form flex justify-center items-center flex-col py-[25px] px-[35px] ">
                                    <div className="form-top pt-[10px] pb-[20px]">
                                        <img
                                            src={LockIcon}
                                            alt="logo"
                                        />
                                    </div>
                                    <form
                                        action=""
                                        className="flex justify-center items-center gap-2 flex-col w-full">
                                        <input
                                            className="w-full rounded-lg border text-gray-950 p-[10px] text-[13px] outline-none "
                                            type="text"
                                            name="userInfo"
                                            placeholder="Email, Phone, or Username"
                                        />

                                        <button
                                            type="submit"
                                            className="bg-[#0195f772] text-[14px] w-full rounded-lg text-white font-semibold mt-2 py-[7px]">
                                            Send login link
                                        </button>
                                        <Link
                                            to="/accounts/password/reset"
                                            className="text-[12px] text-cyan-800 cursor-pointer">
                                            Can{"'"}t reset
                                            your password?
                                        </Link>
                                    </form>
                                    <div className="divider mt-2 flex text-gray-500 justify-between items-center gap-3 w-full">
                                        <div className="box border-t border-gray-300 w-full"></div>
                                        <h1>OR</h1>
                                        <div className="box border-t border-gray-300 w-full"></div>
                                    </div>
                                    <Link
                                        to=""
                                        className="flex mb-12 justify-center items-center text-[14px] gap-2 my-5 font-semibold text-gray-700">
                                        Create new account
                                    </Link>
                                </div>
                            </div>
                            <div className="sign-up-section flex justify-center items-center border py-3 px-8">
                                <p className="text-[14px]">
                                    <Link
                                        to="/accounts/login"
                                        className="text-gray-700 font-semibold">
                                        Back to login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ResetPassword;
