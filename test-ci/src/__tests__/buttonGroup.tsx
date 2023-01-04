import ButtonGroup from '../lib/ButtonGroup';
import Button from '../lib/Button';
import renderer from 'react-test-renderer';

it('ButtonGroup', () => {
  const component = renderer.create(
    <ButtonGroup size="small" color="#ffc107" type="warning" bordered={false} gutter={10}>
      <Button>警告</Button>
      <Button>警告</Button>
      <Button>主要</Button>
      <Button>警告</Button>
    </ButtonGroup>,
  );
  expect(component.root.props.size).toBe('small');
  expect(component.root.props.color).toBe('#ffc107');
  expect(component.root.props.type).toBe('warning');
  expect(component.root.props.bordered).toBe(false);
  expect(component.root.props.gutter).toBe(10);
});
