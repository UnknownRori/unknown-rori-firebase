import AboutMePage from "../page/AboutMe";
import MyProfilePage from '../page/MyProfile';
import MyProjectsPage from "../page/MyProjects";

const router = new Map<string, JSX.Element>([
    ['home', <MyProfilePage animateIn={false} animateOut={false} />],
    ['projects', <MyProjectsPage animateIn={false} animateOut={false} />],
    ['aboutme', <AboutMePage animateIn={false} animateOut={false} />,],
]);

export default router;