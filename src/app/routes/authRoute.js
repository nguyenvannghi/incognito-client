import { PrivateLayout, PublicLayout } from 'app/layouts';
import Migration from 'app/pages/onboarding/migrate';

import { AsyncInitWallet, AsyncOnboarding } from './authSync';
import RouterApp from './consts';

const AuthRouteConfig = [
    {
        title: 'Incognito Web Wallet',
        path: RouterApp.rOnboarding,
        layout: PublicLayout,
        component: AsyncOnboarding,
    },
    {
        title: 'Migration',
        path: RouterApp.rMigrate,
        layout: PublicLayout,
        component: Migration,
    },
    {
        title: 'Incognito Web Wallet',
        path: RouterApp.rInitWallet,
        layout: PrivateLayout,
        component: AsyncInitWallet,
    },
];

export default AuthRouteConfig;
