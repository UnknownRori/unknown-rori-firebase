import arrow from '@/asset/image/white-arrow.webp';
import SocialList from "../social/SocialList";
import useToggle from '@/hooks/useToggle';

export default function Sidebar() {
    // TODO : use HTML instead of Javascript to toggle open and close of sidebar
    const [state, toggleState] = useToggle();

    return (
        <div className="top-24 fixed z-10">
            <button onClick={toggleState} className={`button-secondary fixed m-3 ${state ? 'translate-x-14' : '-translate-x-8'} w-12 transition-all duration-1000 z-10`}>
                <img src={arrow} alt="=>" className={`${state ? 'rotate-0' : 'rotate-180'} transition-all duration-1000`} />
            </button>
            <div className={`sidebar ${state ? '-translate-x-2' : '-translate-x-[86px]'} top-24 fixed
                bg-gray-900 bg-opacity-60 rounded-md p-6 transition-all duration-1000`}>
                <SocialList />
            </div>
        </div>
    );
}