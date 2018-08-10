<template>
  <article class="container-article">
    <img
      v-for="(gif, index) in gifs"
      :key="index"
      :src="gif.url"
      :width="gif.width"
      :height="gif.height"
      class="gif"
    />
  </article>
</template>

<script>
export default {
  name: 'Article',
  props: {
    gifs: { type: Array, default: () => ([]) }
  }
}
</script>
