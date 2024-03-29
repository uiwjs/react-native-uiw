# Mock 数据

为了方便前期前端快速开发，不需要等待后端接口，系统提供了mock功能。更多配置请参考[mocker-api](https://github.com/jaywcjlove/mocker-api)

### 一、编写mock

> 在 mocker 下创建新的 js 文件。 如果有多个相关页面，您可以创建一个新文件夹来放置相关文件
```bash
  mocker
+     index.js
+     user.mock.js
  ...
src
  models
  pages
...
package.json
```

> 在/mocker/user.mock.js目录下进行mock数据编写，比如：

```js
module.exports = {
  'POST /api/login': (req, res) => {
    let {username, password} = req.body;
    if (username === 'admin' && password === 'admin!') {
      return res.status(201).json({
        message: 'Login successful!',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        data: {
          nikename: 'Hello App',
        },
      });
    }
    res.status(401).json({
      message: 'username or password is error.',
    });
  },
};
```

### 二、界面渲染并且使用react-query调用接口
[react-query](https://tanstack.com/query/latest) 更详细的使用，请参照官方文档

```js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from '@uiw/react-native';
import { userLogin } from '@/services/users';
import { useMutation } from 'react-query'


const Demo = ({ update }) => {
  const [store, setStore] = useState({
    formData: {
      username: 'admin',
      password: 'admin!',
    },
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: userLogin,
    onSuccess: async (data) => {
      console.log('data',data)
    },
  })

  return (
     <Button
       textStyle={{ fontSize: 16, fontWeight: '200' }}
       bordered={false}
       color="#BFBFBF"
       loading={isLoading}
       disabled={isLoading}
       onPress={() => mutate?.({ ...formData })}>
       Sign In
     </Button>
  );
}

export default Demo

```

### 三、services文件调用

> 配合系统封装的request进行mock数据请求。如需区分是mock数据，还是真实后端数据，调用真实数据时,注释mocker数据配置即可

```js
  import { fetch } from '../utils';

  export async function userLogin(params) {
    return fetch('/api/login', { body: params });
  }
```

注：mock功能只推荐在开发模式下开启。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

## 使用rematch调用接口

### 一、rematch中异步方法

```js
export default {
  name: 'home',
  state: {
    formData:{}
  }, 
  reducers: {
   update: (state, payload) => ({ ...state, ...payload }),
  },
  effects: (dispatch) => ({
    async userLogin(payload) {
      const { data,code } = await userLogin(payload);
      if (code===200) {
        this.update({ formData: data || {} });
      } else {
       
      }
    },
  }),
};

```
### 二、页面中调用
```js
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@uiw/react-native';

const Demo = ({ update }) => {
  const dispatch = useDispatch()

  return (
     <Button
       onPress={() => {
        dispatch({ type:'home/userLogin',payload:{}})
       }}>
       Sign In
     </Button>
  );
}

export default Demo

```

## License

Licensed under the MIT License.
