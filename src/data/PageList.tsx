import AboutMePage from "../page/AboutMe";
import MyProfilePage from '../page/MyProfile';
import MyProjectsPage from "../page/MyProjects";

const PageList = [
    <MyProfilePage animateIn={false} animateOut={false} />,
    <MyProjectsPage animateIn={false} animateOut={false} />,
    <AboutMePage animateIn={false} animateOut={false} />
];

export default PageList;