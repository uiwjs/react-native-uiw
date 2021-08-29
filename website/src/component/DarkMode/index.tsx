import { useEffect } from 'react';
import { useState } from 'react';
import { Switch } from 'uiw';
import './index.module.less';

export default function DarkMode() {
  const theme = localStorage.getItem('theme');
  const [dark, setDark] = useState(!!theme);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : '';
  }, [dark]);
  return (
    <Switch
      checked={dark}
      data-checked="🌞"
      data-unchecked="🌛"
      onChange={(evn) => {
        if (evn.target.checked) {
          localStorage.setItem('theme', '1');
        } else {
          localStorage.removeItem('theme');
        }
        setDark(evn.target.checked);
      }}
      style={{ display: 'flex', alignItems: 'center', marginLeft: 10, marginRight: 10 }}
    />
  );
}
