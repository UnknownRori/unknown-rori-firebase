import NotFound from "../page/404";
import AboutMePage from "../page/AboutMe";
import MyProfilePage from '../page/MyProfile';
import MyProjectsPage from "../page/MyProjects";

/**
 * A definition for my custom router hook
 */
const router = new Map<string, JSX.Element>([
    ['/', <MyProfilePage animateIn={false} animateOut={false} />],
    ['/projects', <MyProjectsPage animateIn={false} animateOut={false} />],
    ['/about-me', <AboutMePage animateIn={false} animateOut={false} />,],
    ['404', <NotFound animateIn={false} animateOut={false} />]
]);

export default router;