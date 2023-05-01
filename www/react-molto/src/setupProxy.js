const { createProxyMiddleware } = require("http-proxy-middleware");

// 異なるAPIサーバにリクエストする際に使用する
module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: 'http://localhost:3000/',
        secure: false,
        pathRewrite: { '^/api/': '/' },
        changeOrigin: true,
        autoRewrite: true,
    }));
}