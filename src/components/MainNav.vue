<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full border-b border-brand-gray-1 px-8 mx-auto">
        <a :href="url" class="flex items-center h-full text-xl">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem.name" class="h-full ml-9 first:ml-0">
              <a :href="menuItem.url" class="flex items-center h-full py-2.5">
                {{ menuItem.name }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Good Jobs',
      url: 'https://careers.google.com',
      menuItems: [
        { name: 'Teams', url: 'https://careers.google.com' },
        { name: 'Location', url: 'https://careers.google.com' },
        { name: 'Life at Good Jobs', url: 'https://careers.google.com' },
        { name: 'How we hire', url: 'https://careers.google.com' },
        { name: 'Students', url: 'https://careers.google.com' },
        { name: 'Jobs', url: 'https://careers.google.com' }
      ]
    }
  }
}
</script>
