import { Loader } from 'uiw';
import dynamic from 'react-dynamic-loadable';
import { store } from '../models';

function Loading() {
  return (
    <div style={{ textAlign: 'center', padding: '50px 0 50px 0' }}>
      <Loader color="#333" tip="页面加载中..." />
    </div>
  );
}

// wrapper of dynamic
const dynamicWrapper = (models: string[], component: () => Promise<any>) =>
  dynamic({
    models: () =>
      models.map((m: string) => {
        return import(`../models/${m}.ts`).then((md) => {
          const modelData = md.default || md;
          store.addModel({ name: m, ...modelData });
        });
      }),
    component,
    LoadingComponent: Loading,
  });

export type RouterData = typeof getRouterData;

export const getRouterData = {
  '/': {
    component: dynamicWrapper([], () => import('../layouts/BasicLayout')),
  },
  '/home': {
    component: dynamicWrapper([], () => import('../pages/home')),
  },
  '/team': {
    component: dynamicWrapper([], () => import('../pages/team')),
  },
  '/docs/getting-started': {
    component: dynamicWrapper([], () => import('../pages/docs/getting-started')),
  },
  '/docs/environment-setup': {
    component: dynamicWrapper([], () => import('../pages/docs/environment-setup')),
  },
  '/docs/environment-setup/ios': {
    component: dynamicWrapper([], () => import('../pages/docs/environment-setup/ios')),
  },
  '/docs/environment-setup/android': {
    component: dynamicWrapper([], () => import('../pages/docs/environment-setup/android')),
  },
  '/docs/environment-setup/android-windows': {
    component: dynamicWrapper([], () => import('../pages/docs/environment-setup/android-windows')),
  },
  '/docs/app-store/ios': {
    component: dynamicWrapper([], () => import('../pages/docs/app-store/ios')),
  },
  '/docs/app-store/android': {
    component: dynamicWrapper([], () => import('../pages/docs/app-store/android')),
  },
  '/docs/development/document': {
    component: dynamicWrapper([], () => import('../pages/docs/development/document')),
  },
  '/docs/development/components': {
    component: dynamicWrapper([], () => import('../pages/docs/development/components')),
  },
  '/docs/awesome-react-native': {
    component: dynamicWrapper([], () => import('../pages/docs/awesome-react-native')),
  },
  '/docs/react-native-template': {
    component: dynamicWrapper([], () => import('../pages/docs/react-native-template')),
  },
  '/components/about': {
    component: dynamicWrapper([], () => import('../pages/components/about')),
  },
  '/components/divider': {
    component: dynamicWrapper([], () => import('../pages/components/divider')),
  },
  '/components/flex': {
    component: dynamicWrapper([], () => import('../pages/components/flex')),
  },
  '/components/table': {
    component: dynamicWrapper([], () => import('../pages/components/table')),
  },
  '/components/spacing': {
    component: dynamicWrapper([], () => import('../pages/components/spacing')),
  },
  '/components/winblank': {
    component: dynamicWrapper([], () => import('../pages/components/winblank')),
  },
  '/components/drawer': {
    component: dynamicWrapper([], () => import('../pages/components/drawer')),
  },
  '/components/menudropdown': {
    component: dynamicWrapper([], () => import('../pages/components/menudropdown')),
  },
  '/components/swipeaction': {
    component: dynamicWrapper([], () => import('../pages/components/swipeaction')),
  },
  '/components/expandablesection': {
    component: dynamicWrapper([], () => import('../pages/components/expandablesection')),
  },
  '/components/button': {
    component: dynamicWrapper([], () => import('../pages/components/button')),
  },
  '/components/buttongroup': {
    component: dynamicWrapper([], () => import('../pages/components/buttongroup')),
  },
  '/components/checkbox': {
    component: dynamicWrapper([], () => import('../pages/components/checkbox')),
  },
  '/components/input': {
    component: dynamicWrapper([], () => import('../pages/components/input')),
  },
  '/components/radio': {
    component: dynamicWrapper([], () => import('../pages/components/radio')),
  },
  '/components/rating': {
    component: dynamicWrapper([], () => import('../pages/components/rating')),
  },
  '/components/segmentedcontrol': {
    component: dynamicWrapper([], () => import('../pages/components/segmentedcontrol')),
  },
  '/components/slider': {
    component: dynamicWrapper([], () => import('../pages/components/slider')),
  },
  '/components/switch': {
    component: dynamicWrapper([], () => import('../pages/components/switch')),
  },
  '/components/searchbar': {
    component: dynamicWrapper([], () => import('../pages/components/searchbar')),
  },
  '/components/selectcascader': {
    component: dynamicWrapper([], () => import('../pages/components/selectcascader')),
  },
  '/components/avatar': {
    component: dynamicWrapper([], () => import('../pages/components/avatar')),
  },
  '/components/badge': {
    component: dynamicWrapper([], () => import('../pages/components/badge')),
  },
  '/components/ellipsis': {
    component: dynamicWrapper([], () => import('../pages/components/ellipsis')),
  },
  '/components/empty': {
    component: dynamicWrapper([], () => import('../pages/components/empty')),
  },
  '/components/grid': {
    component: dynamicWrapper([], () => import('../pages/components/grid')),
  },
  '/components/icon': {
    component: dynamicWrapper([], () => import('../pages/components/icon')),
  },
  '/components/list': {
    component: dynamicWrapper([], () => import('../pages/components/list')),
  },
  '/components/typography': {
    component: dynamicWrapper([], () => import('../pages/components/typography')),
  },
  '/components/loader': {
    component: dynamicWrapper([], () => import('../pages/components/loader')),
  },
  '/components/modal': {
    component: dynamicWrapper([], () => import('../pages/components/modal')),
  },
  '/components/masklayer': {
    component: dynamicWrapper([], () => import('../pages/components/masklayer')),
  },
  '/components/result': {
    component: dynamicWrapper([], () => import('../pages/components/result')),
  },
  '/components/toast': {
    component: dynamicWrapper([], () => import('../pages/components/toast')),
  },
  '/components/steps': {
    component: dynamicWrapper([], () => import('../pages/components/steps')),
  },
  '/components/timeLine': {
    component: dynamicWrapper([], () => import('../pages/components/timeLine')),
  },
  '/components/tabs': {
    component: dynamicWrapper([], () => import('../pages/components/tabs')),
  },
  '/components/quicklist': {
    component: dynamicWrapper([], () => import('../pages/components/quicklist')),
  },
  '/components/speeddial': {
    component: dynamicWrapper([], () => import('../pages/components/speeddial')),
  },
  '/components/progress': {
    component: dynamicWrapper([], () => import('../pages/components/progress')),
  },
  '/components/card': {
    component: dynamicWrapper([], () => import('../pages/components/card')),
  },
  '/components/noticebar': {
    component: dynamicWrapper([], () => import('../pages/components/noticebar')),
  },

  '/components/stepper': {
    component: dynamicWrapper([], () => import('../pages/components/stepper')),
  },
  '/components/swiper': {
    component: dynamicWrapper([], () => import('../pages/components/swiper')),
  },
  '/components/tooltip': {
    component: dynamicWrapper([], () => import('../pages/components/tooltip')),
  },
  '/components/tile': {
    component: dynamicWrapper([], () => import('../pages/components/tile')),
  },
  '/components/transitionImage': {
    component: dynamicWrapper([], () => import('../pages/components/transitionImage')),
  },
  '/components/cardcollapse': {
    component: dynamicWrapper([], () => import('../pages/components/cardcollapse')),
  },
  '/components/actionSheet': {
    component: dynamicWrapper([], () => import('../pages/components/actionSheet')),
  },
  '/components/search-input-bar': {
    component: dynamicWrapper([], () => import('../pages/components/search-input-bar')),
  },
  '/components/pagination': {
    component: dynamicWrapper([], () => import('../pages/components/pagination')),
  },
};
