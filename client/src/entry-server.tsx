import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import { StaticHandlerContext, StaticRouter} from 'react-router-dom/server'
export function render(url: string, context: StaticHandlerContext) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
       <StaticRouter location={url} context={context}><App /></StaticRouter>
      
    </React.StrictMode>
  )
  return { html }
}
