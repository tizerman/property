import { createProxyMiddleware } from 'http-proxy-middleware'

const proxy = createProxyMiddleware({
  target: 'https://www.varna.website', // Target API server
  changeOrigin: true,
  pathRewrite: { '^/api/proxy': '' }, // Remove `/api/proxy` from the request path
})

export default function handler(req, res) {
  proxy(req, res, (err) => {
    if (err) {
      throw err
    }
  })
}

export const config = {
  api: {
    bodyParser: false, // Disable body parsing to allow streaming
  },
}
