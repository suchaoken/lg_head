module.exports = {
    devServer: {
        proxy: 'http://127.0.0.1:8081'//服务器域名，80端口是默认的，可以不用配置
    },
    publicPath: "./" 
}