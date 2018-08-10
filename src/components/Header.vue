<template>
  <header class="container-header">
    <!-- Searchbar -->
    <div class="searchbar">
      <input
        placeholder="Search something stupid..."
        type="text"
        class="searchbar--input"
        v-model="q"
        @keyup.enter="$emit('type', q)">
      <button class="searchbar--button" @click="$emit('search', q)">Search</button>
      <select
        @change="$emit('limit', limit)"
        class="searchbar--limit"
        v-model="limit">
        <option value="5">05 gifs</option>
        <option value="10">10 gifs</option>
        <option value="15">15 gifs</option>
        <option value="20">20 gifs</option>
      </select>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    q: '',
    limit: '5'
  })
}
</script>
