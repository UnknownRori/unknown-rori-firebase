import SocialIconList from "@/data/SocialIconList";
import Icon from './Icon';

export default function SocialList() {
    const socialIconList = SocialIconList.map((icon) =>
        <Icon key={icon.id} icon={icon} />
    );

    return (
        <>
            <h2 className="text-center">Link</h2>
            {socialIconList}
        </>
    );
}