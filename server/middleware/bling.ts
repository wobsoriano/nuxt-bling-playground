import { hasHandler, handleFetch$ } from '@tanstack/bling/server'
import getURL from 'requrl'

export default eventHandler(async (event) => {
  const headers = getRequestHeaders(event)
  const nodeHeaders = new Headers()

  Object.keys(headers).forEach((key) => {
    nodeHeaders.append(key, headers[key] as any)
  })
  
  const url = new URL(event.node.req.url as string, getURL(event.node.req))
  const request = new Request(url, { headers: nodeHeaders })

  if (hasHandler(url.pathname)) {
    const response = await handleFetch$({
      request,
    }) as Response

    return response.json()
  }
})
