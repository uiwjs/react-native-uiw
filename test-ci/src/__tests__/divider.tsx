import Divider from '../lib/Divider';
import renderer from 'react-test-renderer';

it('Divider', () => {
  const component = renderer.create(
    <Divider label="这是一条分割线" type='horizontal' gutter={10} orientation='center' />
  );
  expect(component.root.props.label).toBe('这是一条分割线');
  expect(component.root.props.type).toBe('horizontal');
  expect(component.root.props.gutter).toBe(10);
  expect(component.root.props.orientation).toBe('center');
});
