import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import Chat from '../islands/chat'

const className = css`
  font-family: sans-serif;
`

export default createRoute((c) => {
  const name = c.req.query('name') ?? 'Hono'
  return c.render(
    <div class={className}>
      <h1>Hello, {name}!</h1>
      <Chat />
    </div>,
    { title: name }
  )
})
