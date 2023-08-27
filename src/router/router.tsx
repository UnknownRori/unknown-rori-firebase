import React from 'react';

const NotFound = React.lazy(() => import("@/page/404"));
const AboutMePage = React.lazy(() => import("@/page/AboutMe"));
const MyProfilePage = React.lazy(() => import("@/page/MyProfile"));
const MyProjectsPage = React.lazy(() => import("@/page/MyProjects"));

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