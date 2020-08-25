module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Vue + CSS Grid Example'
                return args;
            })
    },
    publicPath: ''
};
