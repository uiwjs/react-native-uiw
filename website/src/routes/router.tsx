import { RouteObject, Navigate } from 'react-router-dom';

export const routeData: RouteObject[] = [
  {
    path: '/',
    lazy: () => import('../component/Container'),
    children: [
      {
        path: '/',
        element: <Navigate replace to="/home" />,
      },
      {
        path: '/docs',
        element: <Navigate replace to="/docs/getting-started" />,
      },
      {
        path: '/components',
        element: <Navigate replace to="/components/about" />,
      },
      {
        path: '/home',
        lazy: () => import('../pages/home'),
      },
      {
        path: '/team',
        lazy: () => import('../pages/team'),
      },
      {
        path: '/docs/getting-started',
        lazy: () => import('../pages/docs/getting-started'),
      },
      {
        path: '/docs/environment-setup',
        lazy: () => import('../pages/docs/environment-setup'),
      },
      {
        path: '/docs/environment-setup/ios',
        lazy: () => import('../pages/docs/environment-setup/ios'),
      },
      {
        path: '/docs/environment-setup/android',
        lazy: () => import('../pages/docs/environment-setup/android'),
      },
      {
        path: '/docs/environment-setup/android-windows',
        lazy: () => import('../pages/docs/environment-setup/android-windows'),
      },
      {
        path: '/docs/phone-run/ios-phone',
        lazy: () => import('../pages/docs/phone-run/ios-phone'),
      },
      {
        path: '/docs/phone-run/android-phone',
        lazy: () => import('../pages/docs/phone-run/android-phone'),
      },
      {
        path: '/docs/phone-run/android-windows-phone',
        lazy: () => import('../pages/docs/phone-run/android-phone'),
      },
      {
        path: '/docs/app-store/ios',
        lazy: () => import('../pages/docs/app-store/ios'),
      },
      {
        path: '/docs/app-store/android',
        lazy: () => import('../pages/docs/app-store/android'),
      },
      {
        path: '/docs/unpack/android',
        lazy: () => import('../pages/docs/unpack/android'),
      },
      {
        path: '/docs/unpack/ios',
        lazy: () => import('../pages/docs/unpack/ios'),
      },
      {
        path: '/docs/development/document',
        lazy: () => import('../pages/docs/development/document'),
      },
      {
        path: '/docs/development/components',
        lazy: () => import('../pages/docs/development/components'),
      },
      {
        path: '/docs/awesome-react-native',
        lazy: () => import('../pages/docs/awesome-react-native'),
      },
      {
        path: '/docs/react-native-template/quickstart',
        lazy: () => import('../pages/docs/react-native-template/quickstart'),
      },
      {
        path: '/docs/react-native-template/menu-route',
        lazy: () => import('../pages/docs/react-native-template/menu-route'),
      },
      {
        path: '/docs/react-native-template/new-page',
        lazy: () => import('../pages/docs/react-native-template/new-page'),
      },
      {
        path: '/docs/react-native-template/mock-data',
        lazy: () => import('../pages/docs/react-native-template/mock-data'),
      },
      {
        path: '/docs/react-native-template/log-management',
        lazy: () => import('../pages/docs/react-native-template/log-management'),
      },
      {
        path: '/docs/questions',
        lazy: () => import('../pages/docs/questions'),
      },
      {
        path: '/components/about',
        lazy: () => import('../pages/components/about'),
      },
      {
        path: '/docs/v3-v4',
        lazy: () => import('../pages/docs/v3-v4'),
      },
      {
        path: '/components/theme',
        lazy: () => import('../pages/components/theme'),
      },
      {
        path: '/components/divider',
        lazy: () => import('../pages/components/divider'),
      },
      {
        path: '/components/flex',
        lazy: () => import('../pages/components/flex'),
      },
      {
        path: '/components/table',
        lazy: () => import('../pages/components/table'),
      },
      {
        path: '/components/spacing',
        lazy: () => import('../pages/components/spacing'),
      },
      {
        path: '/components/winblank',
        lazy: () => import('../pages/components/winblank'),
      },
      {
        path: '/components/drawer',
        lazy: () => import('../pages/components/drawer'),
      },
      {
        path: '/components/menudropdown',
        lazy: () => import('../pages/components/menudropdown'),
      },
      {
        path: '/components/swipeaction',
        lazy: () => import('../pages/components/swipeaction'),
      },
      {
        path: '/components/expandablesection',
        lazy: () => import('../pages/components/expandablesection'),
      },
      {
        path: '/components/button',
        lazy: () => import('../pages/components/button'),
      },
      {
        path: '/components/buttongroup',
        lazy: () => import('../pages/components/buttongroup'),
      },
      {
        path: '/components/checkbox',
        lazy: () => import('../pages/components/checkbox'),
      },
      {
        path: '/components/input',
        lazy: () => import('../pages/components/input'),
      },
      {
        path: '/components/radio',
        lazy: () => import('../pages/components/radio'),
      },
      {
        path: '/components/rating',
        lazy: () => import('../pages/components/rating'),
      },
      {
        path: '/components/segmentedcontrol',
        lazy: () => import('../pages/components/segmentedcontrol'),
      },
      {
        path: '/components/slider',
        lazy: () => import('../pages/components/slider'),
      },
      {
        path: '/components/switch',
        lazy: () => import('../pages/components/switch'),
      },
      {
        path: '/components/searchbar',
        lazy: () => import('../pages/components/searchbar'),
      },
      {
        path: '/components/picker',
        lazy: () => import('../pages/components/picker'),
      },
      {
        path: '/components/avatar',
        lazy: () => import('../pages/components/avatar'),
      },
      {
        path: '/components/badge',
        lazy: () => import('../pages/components/badge'),
      },
      {
        path: '/components/ellipsis',
        lazy: () => import('../pages/components/ellipsis'),
      },
      {
        path: '/components/empty',
        lazy: () => import('../pages/components/empty'),
      },
      {
        path: '/components/grid',
        lazy: () => import('../pages/components/grid'),
      },
      {
        path: '/components/icon',
        lazy: () => import('../pages/components/icon'),
      },
      {
        path: '/components/list',
        lazy: () => import('../pages/components/list'),
      },
      {
        path: '/components/typography',
        lazy: () => import('../pages/components/typography'),
      },
      {
        path: '/components/loader',
        lazy: () => import('../pages/components/loader'),
      },
      {
        path: '/components/modal',
        lazy: () => import('../pages/components/modal'),
      },
      {
        path: '/components/masklayer',
        lazy: () => import('../pages/components/masklayer'),
      },
      {
        path: '/components/result',
        lazy: () => import('../pages/components/result'),
      },
      {
        path: '/components/toast',
        lazy: () => import('../pages/components/toast'),
      },
      {
        path: '/components/steps',
        lazy: () => import('../pages/components/steps'),
      },
      {
        path: '/components/timeLine',
        lazy: () => import('../pages/components/timeLine'),
      },
      {
        path: '/components/tabs',
        lazy: () => import('../pages/components/tabs'),
      },
      {
        path: '/components/quicklist',
        lazy: () => import('../pages/components/quicklist'),
      },
      {
        path: '/components/speeddial',
        lazy: () => import('../pages/components/speeddial'),
      },
      {
        path: '/components/progress',
        lazy: () => import('../pages/components/progress'),
      },
      {
        path: '/components/card',
        lazy: () => import('../pages/components/card'),
      },
      {
        path: '/components/noticebar',
        lazy: () => import('../pages/components/noticebar'),
      },
      {
        path: '/components/stepper',
        lazy: () => import('../pages/components/stepper'),
      },
      {
        path: '/components/swiper',
        lazy: () => import('../pages/components/swiper'),
      },
      {
        path: '/components/tooltip',
        lazy: () => import('../pages/components/tooltip'),
      },
      {
        path: '/components/tile',
        lazy: () => import('../pages/components/tile'),
      },
      {
        path: '/components/transitionImage',
        lazy: () => import('../pages/components/transitionImage'),
      },
      {
        path: '/components/cardcollapse',
        lazy: () => import('../pages/components/cardcollapse'),
      },
      {
        path: '/components/accordion',
        lazy: () => import('../pages/components/accordion'),
      },
      {
        path: '/components/verificationCode',
        lazy: () => import('../pages/components/verificationCode'),
      },
      {
        path: '/components/loginPage',
        lazy: () => import('../pages/components/loginPage'),
      },
      {
        path: '/components/actionSheet',
        lazy: () => import('../pages/components/actionSheet'),
      },
      {
        path: '/components/search-input-bar',
        lazy: () => import('../pages/components/search-input-bar'),
      },
      {
        path: '/components/pagination',
        lazy: () => import('../pages/components/pagination'),
      },
      {
        path: '/components/calendar',
        lazy: () => import('../pages/components/calendar'),
      },
      {
        path: '/components/dragdrawer',
        lazy: () => import('../pages/components/dragdrawer'),
      },
      {
        path: '/components/tree',
        lazy: () => import('../pages/components/tree'),
      },
      {
        path: '/components/treeSelect',
        lazy: () => import('../pages/components/treeSelect'),
      },
      {
        path: '/components/textarea',
        lazy: () => import('../pages/components/textarea'),
      },
      {
        path: '/components/imageViewer',
        lazy: () => import('../pages/components/imageViewer'),
      },
      {
        path: '/components/form',
        lazy: () => import('../pages/components/form'),
      },
      {
        path: '/components/datepicker',
        lazy: () => import('../pages/components/datepicker'),
      },
      {
        path: '/docs/changelog',
        lazy: () => import('../pages/docs/changelog'),
      },
      {
        path: '/components/imageHeader',
        lazy: () => import('../pages/components/imageHeader'),
      },
    ],
  },
];
