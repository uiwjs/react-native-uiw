(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[78],{1070:function(n,e,t){"use strict";t.r(e),e.default="Calendar \u65e5\u5386 \n---\n\n\u5c55\u793a\u65e5\u5386\n\n![](https://user-images.githubusercontent.com/66067296/141939109-5fbd8b77-82fa-4eb4-bd6d-6670fd577878.gif)\x3c!--rehype:style=zoom: 33%;float: right; margin-left: 15px;--\x3e\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx\nimport React from 'react';\nimport { Text, View } from 'react-native';\nimport { Calendar } from '@uiw/react-native';\nimport { ComProps } from '../../routes';\nimport Layout, { Container } from '../../Layout';\n\nconst { Header, Body, Card, Footer } = Layout;\n\nexport interface CalendarViewProps extends ComProps { }\n\nexport default class CalendarView extends React.Component<CalendarViewProps> {\n  render() {\n    const { route } = this.props;\n    const description = route.params.description;\n    const title = route.params.title;\n    return (\n      <Container>\n        <Layout>\n          <Header title={title} description={description} />\n          <Body>\n            <Calendar />\n          </Body>\n          <Footer />\n        </Layout>\n      </Container>\n    );\n  }\n}\n```\n\n### \u81ea\u5b9a\u4e49\u65e5\u5386\u989c\u8272\u3001\u519c\u5386\u53ca\u5047\u65e5\u5c55\u793a\n\n```jsx\nimport React from 'react';\nimport { Text, View } from 'react-native';\nimport { Calendar } from '@uiw/react-native';\nimport { ComProps } from '../../routes';\nimport Layout, { Container } from '../../Layout';\n\nconst { Header, Body, Card, Footer } = Layout;\n\nexport interface CalendarViewProps extends ComProps { }\n\nexport default class CalendarView extends React.Component<CalendarViewProps> {\n  render() {\n    const { route } = this.props;\n    const description = route.params.description;\n    const title = route.params.title;\n    return (\n      <Container>\n        <Layout>\n          <Header title={title} description={description} />\n          <Body>\n           <Calendar color=\"red\" lunarHoliday={true}/>\n          </Body>\n          <Footer />\n        </Layout>\n      </Container>\n    );\n  }\n}\n```\n\n### \u81ea\u5b9a\u4e49\u65e5\u5386\u5934\u90e8\n\n```jsx\nimport React from 'react';\nimport { Text, View } from 'react-native';\nimport { Calendar } from '@uiw/react-native';\nimport { ComProps } from '../../routes';\nimport Layout, { Container } from '../../Layout';\n\nconst { Header, Body, Card, Footer } = Layout;\n\nexport interface CalendarViewProps extends ComProps { }\n\nexport default class CalendarView extends React.Component<CalendarViewProps> {\n  render() {\n    const { route } = this.props;\n    const description = route.params.description;\n    const title = route.params.title;\n     const barProps = {\n      barRightText: \"\u8fd4\u56de\",\n      title : \"\u65e5\u5386\",\n      onPressBarLeft: () => navigation.goBack(), \n      barLeftText: \"\u4eca\u5929\" \n    }\n    return (\n      <Container>\n        <Layout>\n          <Header title={title} description={description} />\n          <Body>\n           <Calendar color=\"red\" bar={barProps} lunarHoliday={true}/>\n          </Body>\n          <Footer />\n        </Layout>\n      </Container>\n    );\n  }\n}\n```\n\n### props\n\n```ts\n\ninterface barState {\n  // \u5bfc\u822a\u680f\u6807\u9898\n  title?: string\n  //\u662f\u5426\u663e\u793a\u519c\u5386\u53ca\u5047\u65e5\n  lunarHoliday:Boolean\n  // \u5bfc\u822a\u5de6\u4fa7\u6587\u672c\n  barRightText?: string;\n  // \u5bfc\u822a\u53f3\u4fa7\u6587\u672c\n  barLeftText?: string;\n  // \u5bfc\u822a\u5de6\u4fa7\u70b9\u51fb\u4e8b\u4ef6\n  onPressBarLeft?: () => void;\n  // \u81ea\u5b9a\u4e49\u5bfc\u822a\u680f\n  render?: React.ReactNode\n}\nexport interface CalendarProps extends ViewProps {\n  // \u65e5\u5386\u989c\u8272\n  color?: string;\n   //\u662f\u5426\u663e\u793a\u519c\u5386\u53ca\u5047\u65e5\n  lunarHoliday: boolean;\n  bar: barState ;\n}\n```\n"}}]);
//# sourceMappingURL=78.62fa8943.chunk.js.map