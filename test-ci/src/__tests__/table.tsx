import 'react-native';
import React from 'react';
import Table from '../lib/Table';
import { render } from '@testing-library/react-native';
import { toObject } from '../utils';

describe('Table', () => {
  it('columns', () => {
    const columns = [
      { title: '姓名', dataIndex: 'name' },
      { title: '性别', dataIndex: 'sex' },
      { title: '地址', dataIndex: 'address' },
    ];
    const { getByTestId } = render(<Table columns={columns} data={[]} rowKey="id" />);
    const component = getByTestId('RNE__Table__header');
    expect(component.props.children).toHaveLength(3);
  });

  it('data', () => {
    const data = [{ id: 1 }, { id: 2 }];
    const { getByTestId } = render(<Table columns={[]} data={data} rowKey="id" />);
    const component = getByTestId('RNE__Table__body');
    expect(component.props.children).toHaveLength(2);
  });

  it('no data', () => {
    const { getByText } = render(<Table columns={[]} data={[]} rowKey="id" />);
    expect(getByText('暂无数据...')).toBeTruthy();
  });

  it('horizontal', () => {
    const { getByTestId } = render(<Table columns={[]} data={[]} rowKey="id" horizontal={false} />);
    const component = getByTestId('RNE__Table__wrap');
    expect(component.props.horizontal).toBe(false);
  });

  it('style', () => {
    const { getByTestId } = render(<Table columns={[]} data={[]} rowKey="id" style={{ fontSize: 14 }} />);
    const component = getByTestId('RNE__Table__wrap');
    const styles = toObject(component.props.style);
    expect(styles.fontSize).toBe(14);
  });
});
