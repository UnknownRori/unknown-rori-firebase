import Profile from "../components/profile/Profile";
import usePageAnimation from "../hooks/usePageAnimation";
import PageProps from "../types/PageProps";

export default function MyProfilePage(props: PageProps) {
    const [animate] = usePageAnimation(props);

    return (
        <>
            <div className={"wrapper " + animate}>
                <Profile />
            </div>
        </>
    );
}