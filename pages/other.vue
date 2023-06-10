<script lang="ts">
import { server$ } from '@tanstack/bling'

export default defineComponent({
  setup() {
    const sayHello = server$(() => console.log('Hello world'))

    return {
      sayHello
    }
  }
})
</script>

<template>
  <div>other</div>
</template>
