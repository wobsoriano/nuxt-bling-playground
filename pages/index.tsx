import { server$ } from '@tanstack/bling'
import { secret } from '~/db/secret.server$'

export default defineComponent({
  async setup() {
    const sayHello = server$(() => 'Hello world')

    const message = await useAsyncData(() => sayHello())
    
    return () => (
      <>
        <div>{message.data.value}</div>
        <div>{secret}</div>
      </>
    )
  }
})
