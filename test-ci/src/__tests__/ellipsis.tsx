import Ellipsis from '../lib/Ellipsis';
import renderer from 'react-test-renderer';

it('Ellipsis', () => {
  const component = renderer.create(
    <Ellipsis maxLen={5} placeholder='...'>用于文本过长，超出长度显示</Ellipsis>
  );
  expect(component.root.props.maxLen).toBe(5);
  expect(component.root.props.placeholder).toBe('...');
  expect(component.root.props.children).toBe('用于文本过长，超出长度显示');
});
