import LazyLoadImage from "../animation/LazyLoadImage";
import profile from './../../asset/image/UnknownRori.webp';

export default function ProfileImage() {
    return (
        <figure className="m-auto rounded-full p-3 shadow-lg">
            <LazyLoadImage className="h-56 w-56 object-cover rounded-full border-2 border-gray-300"
                src={profile} alt="UnknownRori" />
        </figure>
    );
}