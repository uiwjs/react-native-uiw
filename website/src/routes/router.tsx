import { lazy } from 'react';

export const routeData = [
  {
    path: '/',
    component: lazy(() => import('../component/Container')),
    children: [
      {
        path: '/home',
        component: lazy(() => import('../pages/home')),
      },
      {
        path: '/team',
        component: lazy(() => import('../pages/team')),
      },
      {
        path: '/docs/getting-started',
        component: lazy(() => import('../pages/docs/getting-started')),
      },
      {
        path: '/docs/environment-setup',
        component: lazy(() => import('../pages/docs/environment-setup')),
      },
      {
        path: '/docs/environment-setup/ios',
        component: lazy(() => import('../pages/docs/environment-setup/ios')),
      },
      {
        path: '/docs/environment-setup/android',
        component: lazy(() => import('../pages/docs/environment-setup/android')),
      },
      {
        path: '/docs/environment-setup/android-windows',
        component: lazy(() => import('../pages/docs/environment-setup/android-windows')),
      },
      {
        path: '/docs/phone-run/ios-phone',
        component: lazy(() => import('../pages/docs/phone-run/ios-phone')),
      },
      {
        path: '/docs/phone-run/android-phone',
        component: lazy(() => import('../pages/docs/phone-run/android-phone')),
      },
      {
        path: '/docs/phone-run/android-windows-phone',
        component: lazy(() => import('../pages/docs/phone-run/android-phone')),
      },
      {
        path: '/docs/app-store/ios',
        component: lazy(() => import('../pages/docs/app-store/ios')),
      },
      {
        path: '/docs/app-store/android',
        component: lazy(() => import('../pages/docs/app-store/android')),
      },
      {
        path: '/docs/unpack/android',
        component: lazy(() => import('../pages/docs/unpack/android')),
      },
      {
        path: '/docs/unpack/ios',
        component: lazy(() => import('../pages/docs/unpack/ios')),
      },
      {
        path: '/docs/development/document',
        component: lazy(() => import('../pages/docs/development/document')),
      },
      {
        path: '/docs/development/components',
        component: lazy(() => import('../pages/docs/development/components')),
      },
      {
        path: '/docs/awesome-react-native',
        component: lazy(() => import('../pages/docs/awesome-react-native')),
      },
      {
        path: '/docs/react-native-template/quickstart',
        component: lazy(() => import('../pages/docs/react-native-template/quickstart')),
      },
      {
        path: '/docs/react-native-template/menu-route',
        component: lazy(() => import('../pages/docs/react-native-template/menu-route')),
      },
      {
        path: '/docs/react-native-template/new-page',
        component: lazy(() => import('../pages/docs/react-native-template/new-page')),
      },
      {
        path: '/docs/react-native-template/mock-data',
        component: lazy(() => import('../pages/docs/react-native-template/mock-data')),
      },
      {
        path: '/docs/react-native-template/log-management',
        component: lazy(() => import('../pages/docs/react-native-template/log-management')),
      },
      {
        path: '/docs/questions',
        component: lazy(() => import('../pages/docs/questions')),
      },
      {
        path: '/components/about',
        component: lazy(() => import('../pages/components/about')),
      },
      {
        path: '/components/changelog',
        component: lazy(() => import('../pages/components/changelog')),
      },
      {
        path: '/components/theme',
        component: lazy(() => import('../pages/components/theme')),
      },
      {
        path: '/components/divider',
        component: lazy(() => import('../pages/components/divider')),
      },
      {
        path: '/components/flex',
        component: lazy(() => import('../pages/components/flex')),
      },
      {
        path: '/components/table',
        component: lazy(() => import('../pages/components/table')),
      },
      {
        path: '/components/spacing',
        component: lazy(() => import('../pages/components/spacing')),
      },
      {
        path: '/components/winblank',
        component: lazy(() => import('../pages/components/winblank')),
      },
      {
        path: '/components/drawer',
        component: lazy(() => import('../pages/components/drawer')),
      },
      {
        path: '/components/menudropdown',
        component: lazy(() => import('../pages/components/menudropdown')),
      },
      {
        path: '/components/swipeaction',
        component: lazy(() => import('../pages/components/swipeaction')),
      },
      {
        path: '/components/expandablesection',
        component: lazy(() => import('../pages/components/expandablesection')),
      },
      {
        path: '/components/button',
        component: lazy(() => import('../pages/components/button')),
      },
      {
        path: '/components/buttongroup',
        component: lazy(() => import('../pages/components/buttongroup')),
      },
      {
        path: '/components/checkbox',
        component: lazy(() => import('../pages/components/checkbox')),
      },
      {
        path: '/components/input',
        component: lazy(() => import('../pages/components/input')),
      },
      {
        path: '/components/radio',
        component: lazy(() => import('../pages/components/radio')),
      },
      {
        path: '/components/rating',
        component: lazy(() => import('../pages/components/rating')),
      },
      {
        path: '/components/segmentedcontrol',
        component: lazy(() => import('../pages/components/segmentedcontrol')),
      },
      {
        path: '/components/slider',
        component: lazy(() => import('../pages/components/slider')),
      },
      {
        path: '/components/switch',
        component: lazy(() => import('../pages/components/switch')),
      },
      {
        path: '/components/searchbar',
        component: lazy(() => import('../pages/components/searchbar')),
      },
      {
        path: '/components/picker',
        component: lazy(() => import('../pages/components/picker')),
      },
      {
        path: '/components/avatar',
        component: lazy(() => import('../pages/components/avatar')),
      },
      {
        path: '/components/badge',
        component: lazy(() => import('../pages/components/badge')),
      },
      {
        path: '/components/ellipsis',
        component: lazy(() => import('../pages/components/ellipsis')),
      },
      {
        path: '/components/empty',
        component: lazy(() => import('../pages/components/empty')),
      },
      {
        path: '/components/grid',
        component: lazy(() => import('../pages/components/grid')),
      },
      {
        path: '/components/icon',
        component: lazy(() => import('../pages/components/icon')),
      },
      {
        path: '/components/list',
        component: lazy(() => import('../pages/components/list')),
      },
      {
        path: '/components/typography',
        component: lazy(() => import('../pages/components/typography')),
      },
      {
        path: '/components/loader',
        component: lazy(() => import('../pages/components/loader')),
      },
      {
        path: '/components/modal',
        component: lazy(() => import('../pages/components/modal')),
      },
      {
        path: '/components/masklayer',
        component: lazy(() => import('../pages/components/masklayer')),
      },
      {
        path: '/components/result',
        component: lazy(() => import('../pages/components/result')),
      },
      {
        path: '/components/toast',
        component: lazy(() => import('../pages/components/toast')),
      },
      {
        path: '/components/steps',
        component: lazy(() => import('../pages/components/steps')),
      },
      {
        path: '/components/timeLine',
        component: lazy(() => import('../pages/components/timeLine')),
      },
      {
        path: '/components/tabs',
        component: lazy(() => import('../pages/components/tabs')),
      },
      {
        path: '/components/quicklist',
        component: lazy(() => import('../pages/components/quicklist')),
      },
      {
        path: '/components/speeddial',
        component: lazy(() => import('../pages/components/speeddial')),
      },
      {
        path: '/components/progress',
        component: lazy(() => import('../pages/components/progress')),
      },
      {
        path: '/components/card',
        component: lazy(() => import('../pages/components/card')),
      },
      {
        path: '/components/noticebar',
        component: lazy(() => import('../pages/components/noticebar')),
      },
      {
        path: '/components/stepper',
        component: lazy(() => import('../pages/components/stepper')),
      },
      {
        path: '/components/swiper',
        component: lazy(() => import('../pages/components/swiper')),
      },
      {
        path: '/components/tooltip',
        component: lazy(() => import('../pages/components/tooltip')),
      },
      {
        path: '/components/tile',
        component: lazy(() => import('../pages/components/tile')),
      },
      {
        path: '/components/transitionImage',
        component: lazy(() => import('../pages/components/transitionImage')),
      },
      {
        path: '/components/cardcollapse',
        component: lazy(() => import('../pages/components/cardcollapse')),
      },
      {
        path: '/components/accordion',
        component: lazy(() => import('../pages/components/accordion')),
      },
      {
        path: '/components/verificationCode',
        component: lazy(() => import('../pages/components/verificationCode')),
      },
      {
        path: '/components/loginPage',
        component: lazy(() => import('../pages/components/loginPage')),
      },
      {
        path: '/components/actionSheet',
        component: lazy(() => import('../pages/components/actionSheet')),
      },
      {
        path: '/components/search-input-bar',
        component: lazy(() => import('../pages/components/search-input-bar')),
      },
      {
        path: '/components/pagination',
        component: lazy(() => import('../pages/components/pagination')),
      },
      {
        path: '/components/calendar',
        component: lazy(() => import('../pages/components/calendar')),
      },
      {
        path: '/components/dragdrawer',
        component: lazy(() => import('../pages/components/dragdrawer')),
      },
      {
        path: '/components/tree',
        component: lazy(() => import('../pages/components/tree')),
      },
      {
        path: '/components/treeSelect',
        component: lazy(() => import('../pages/components/treeSelect')),
      },
      {
        path: '/components/textarea',
        component: lazy(() => import('../pages/components/textarea')),
      },
      {
        path: '/components/imageViewer',
        component: lazy(() => import('../pages/components/imageViewer')),
      },
      {
        path: '/components/form',
        component: lazy(() => import('../pages/components/form')),
      },
      {
        path: '/components/datepicker',
        component: lazy(() => import('../pages/components/datepicker')),
      },
      {
        path: '/docs/changelog',
        component: lazy(() => import('../pages/docs/changelog')),
      },
    ],
  },
];
