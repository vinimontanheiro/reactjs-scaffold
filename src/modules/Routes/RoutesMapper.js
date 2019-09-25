import Home from '../Home/HomeComponent';

export const ROUTE = {
  HOME: {
    NAME: `home`,
    PATH: `/home`,
  },
};

export const MenuRoutes = [
  {
    name: ROUTE.HOME.NAME,
    path: ROUTE.HOME.PATH,
    component: Home,
    iconName: `home`,
  },
];

export const PrivateRoutes = [
  {
    name: ROUTE.HOME.NAME,
    path: ROUTE.HOME.PATH,
    component: Home,
  },
  // ...MenuRoutes,
];

// export const PublicRoutes = [
//   {
//     name: ROUTE.CONTACT_NEW.NAME,
//     path: ROUTE.CONTACT_NEW.PATH,
//     component: ContactForm,
//   },
//   {
//     name: ROUTE.CONTACT_DETAIL.NAME,
//     path: ROUTE.CONTACT_DETAIL.PATH,
//     component: ContactForm,
//   },
//   ...MenuRoutes,
// ];
