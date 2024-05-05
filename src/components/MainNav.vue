<template>
  <header class="w-full text-sm">
    <nav class="fixed top-0 letf-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full border-b border-brand-gray-1 px-8 mx-auto">
        <a href="/" class="flex items-center h-full text-xl">{{ company }}</a>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Good Jobs'
    }
  }
}
</script>
