<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-blue-800 text-white shadow-lg">
      <div class="p-5">
        <h2 class="text-2xl font-bold mb-5">Dashboard</h2>
        <ul class="space-y-3">
          <li>
            <router-link 
              to="/characters" 
              class="block p-3 rounded-lg hover:bg-blue-700 transition"
            >
              Rick and Morty Characters
            </router-link>
          </li>
          <li>
            <router-link 
              to="/openai" 
              class="block p-3 rounded-lg hover:bg-blue-700 transition"
            >
              Chatbot
            </router-link>
          </li>
        </ul>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <header class="bg-blue-600 text-white p-4 shadow">
        <h1 class="text-3xl font-bold">Mi Dashboard</h1>
      </header>
      <main class="flex-1 p-5 bg-white overflow-y-auto">
        <div class="hero bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-4">Bienvenido al Dashboard</h2>
          <p>Aquí puedes navegar a diferentes secciones.</p>
        </div>
        <router-view class="mt-4" />
      </main>
    </div>
  </div>
</template>

<script setup>
// Aquí puedes agregar lógica adicional si es necesario
</script>

<style scoped>
/* Estilos adicionales si es necesario */
.hero {
  min-height: 80vh; /* Ajusta la altura según sea necesario */
}
</style>
