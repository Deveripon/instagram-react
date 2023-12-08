import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <div className="footer-top flex justify-center items-center gap-4">
                <ul className="flex justify-center items-center gap-4 text-[13px] text-gray-500">
                    <li>
                        <Link to="#">Meta</Link>
                    </li>
                    <li>
                        <Link to="#">About</Link>
                    </li>
                    <li>
                        <Link to="#">Blog</Link>
                    </li>
                    <li>
                        <Link to="#">Jobs</Link>
                    </li>
                    <li>
                        <Link to="#">Help</Link>
                    </li>
                    <li>
                        <Link to="#">API</Link>
                    </li>
                    <li>
                        <Link to="#">Privacy</Link>
                    </li>
                    <li>
                        <Link to="#">Terms</Link>
                    </li>
                    <li>
                        <Link to="#">Locations</Link>
                    </li>
                    <li>
                        <Link to="#">Instagram</Link>
                    </li>
                    <li>
                        <Link to="#">Threads</Link>
                    </li>
                    <li>
                        <Link to="#">
                            Contact Uploading & Non-Users
                        </Link>
                    </li>
                    <li>
                        <Link to="#">Meta Verified</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-bottom flex justify-center items-center text-[13px] text-gray-500 pt-3 pb-12 gap-4 ">
                <div className="language-selector">
                    <select name="language" id="language">
                        <option value="English">
                            English
                        </option>
                        <option value="Bangla">
                            Bangla
                        </option>
                        <option value="Arabic">
                            Arabic
                        </option>
                    </select>
                </div>
                <div className="copyright">
                    <p>© 2023 Instagram from Meta</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
