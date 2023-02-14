/**
 * @format
 */

import 'react-native';
import React from 'react';
import Swiper, { dataSourceType } from '../lib/Swiper';
import renderer from 'react-test-renderer';

it('Swiper', () => {
  const datas: dataSourceType[] = [
    {
      url: 'https://p1.itc.cn/images01/20210530/7a071b3cdc0643c197f143cfa4edc827.jpeg',
      onClick: () => {
        console.log('你好！刘亦菲');
      },
    },
    {
      url: 'https://inews.gtimg.com/newsapp_bt/0/14745270054/641',
      onClick: () => {
        console.log('你好！王楚然');
      },
    },
  ];
  const component = renderer.create(
    <Swiper width={200} dataSource={datas} height={150} borderRadius={24} time={10} autoplay dotStyle="dot" loading />,
  );
  expect(component.root.props.width).toBe(200);
  expect(component.root.props.height).toBe(150);
  expect(component.root.props.borderRadius).toBe(24);
  expect(component.root.props.time).toBe(10);
  expect(component.root.props.dotStyle).toBe('dot');
  expect(component.root.props.dataSource).toMatchObject(datas);
  expect(component.root.props.autoplay).toBeTruthy();
  expect(component.root.props.loading).toBeTruthy();
});
