import { lazyView } from '@/hooks/useRoute';

/**
 * A definition for my custom router hook
 */
const router = new Map<string, JSX.Element>([
    ['/', lazyView('MyProfile')],
    ['/projects', lazyView('MyProjects')],
    ['/about-me', lazyView('AboutMe')],
    ['404', lazyView('404')],
]);

export default router;