import CheckBox from '../lib/CheckBox';
import renderer from 'react-test-renderer';
import { bool } from 'prop-types';

it('CheckBox', () => {
  // const component = TestRenderer.create(<Radio value="1">Radio</Radio>);
  const component = renderer.create(
    <CheckBox color="red" checked={true} textStyle={{ fontSize: 20 }} checkedIcon="circle" unCheckedIcon="error">
      按钮
    </CheckBox>,
  );
  expect(component.root.props.color).toBe('red');
  expect(component.root.props.checkedIcon).toBe('circle');
  expect(component.root.props.unCheckedIcon).toBe('error');
  expect(component.root.props.checked).toBeTruthy();
  expect(component.root.props.textStyle).toMatchObject({ fontSize: 20 });
});
