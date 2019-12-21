module.exports = {
    plugins: {
        'autoprefixer': {
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8"
            ]
        },
        'postcss-pxtorem': {
            rootValue: 20, //html节点的font-size大小
            unitPrecision: 2, //转rem精确到小数点后多少位
            propList: ['*'], //指定转换rem的属性
            replace: true,
            mediaQuery: true, //媒体查询内的px是否转换
            minPixelValue: 0 //小于指定数值的px不转换
        }
    }
}