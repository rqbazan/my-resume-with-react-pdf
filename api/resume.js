import { createElement } from 'react'
import { App, renderToStream } from '../lib'

export default async (req, res) => {
  const stream = await renderToStream(createElement(App))
  res.setHeader('Content-Type', 'application/pdf')
  stream.pipe(res)
}
