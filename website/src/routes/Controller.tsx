import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Loader } from 'uiw';
import { routeData } from '../routes/router';
import NotFound from '../component/NotFound';

const Loading = (
  <div style={{ textAlign: 'center', padding: '50px 0 50px 0' }}>
    <Loader color="#333" tip="页面加载中..." />
  </div>
);

export default function Controller() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/docs" element={<Navigate replace to="/docs/getting-started" />} />
      <Route path="/components" element={<Navigate replace to="/components/about" />} />
      {routeData.map(({ component: BasicLayout, path, children = [] }, idx) => (
        <Route
          path={path}
          key={idx}
          element={
            <Suspense fallback={Loading}>
              <BasicLayout />
            </Suspense>
          }
        >
          {children.map((child, idx) => {
            const Child = child.component as any;
            return (
              <Route
                key={idx}
                path={child.path}
                element={
                  <Suspense fallback={Loading}>
                    <Child />
                  </Suspense>
                }
              />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Route>
      ))}
    </Routes>
  );
}
