const colorRgb = (color: string): string => {
  var sColor = color.toLowerCase();
  //十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
    }
    return 'rgb(' + sColorChange.join(', ') + ')';
  }
  return sColor;
};

const toObject = (arr: any) => arr.reduce((obj: object, item: any) => ({ ...obj, ...(item || {}) }), {});

export type keys = {
  [key: string]: any;
};

export { colorRgb, toObject };
