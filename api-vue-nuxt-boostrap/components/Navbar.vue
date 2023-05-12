<template>
  <!-- seccion navbar -->
  <nav class="navbar navbar-expand-md navbar-light bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img v-bind:src="rutaImagen" width="40" alt="Logo">
    </a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Libros</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catalogos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      rutaImagen: require('@/utils/fire.svg')
    }
  }
}
</script>

<style scoped>

.navbar-collapse{
  align-items: center;
  justify-content: space-between;
}
</style>
