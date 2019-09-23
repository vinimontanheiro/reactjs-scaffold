import Dashboard from '../Dashboard/Dashboard';

export const ROUTE = {
  DASHBOARD: {
    NAME: `dashboard`,
    PATH: `/dashboard`,
  },
};

export const MenuRoutes = [
  {
    name: ROUTE.DASHBOARD.NAME,
    path: ROUTE.DASHBOARD.PATH,
    component: Dashboard,
    iconName: `home`,
  },
];

export const PrivateRoutes = [
  {
    name: ROUTE.DASHBOARD.NAME,
    path: ROUTE.DASHBOARD.PATH,
    component: Dashboard,
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
