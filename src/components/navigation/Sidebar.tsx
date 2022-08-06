import SocialList from "../social/SocialList";
import arrow from './../../asset/image/white-arrow.webp';

export default function Sidebar() {
    return (
        <div className="top-44 fixed">
            <button className="button-secondary fixed m-3 -translate-x-8 w-12 transition-all duration-1000 group peer focus:translate-x-14 z-10">
                <img src={arrow} alt="=>" className="group-focus:rotate-0 rotate-180 transition-all duration-1000" />
            </button>
            <div className="sidebar peer-focus:-translate-x-2 top-44 fixed
                bg-gray-900 bg-opacity-60 rounded-md p-6 transition-all duration-1000 -translate-x-[86px]">
                <SocialList />
            </div>
        </div>
    );
}