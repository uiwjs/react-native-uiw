import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import '@uiw/reset.css';
import { Fallback } from './component/Fallback';
import { routeData } from './routes/router';
import './index.css';

export type DefaultProps = React.PropsWithChildren<any> & {};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Fragment>
    <RouterProvider router={createHashRouter(routeData)} fallbackElement={<Fallback />} />
  </Fragment>,
);
