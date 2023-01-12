import { Divider } from 'uiw';

export default function (props) {
  const { path } = props;
  const url = /^http/.test(path || '') ? path : `https://github.com/uiwjs/react-native-uiw/edit/master/${path}`;
  return (
    <div style={{ paddingBlock: 20 }}>
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}>
          在Github上编辑本页！
        </a>
      )}
      <Divider type="vertical" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/uiwjs/react-native-uiw/issues"
        style={{ color: '#333' }}
      >
        提交bug
      </a>
    </div>
  );
}
