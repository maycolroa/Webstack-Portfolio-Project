<template>
  <!-- seccion Hero -->
  <section class="hero align-items-stretch">
    <div>
      <b-card
        overlay
        img-src="../utils/portada_p.jpg"
        img-alt="Card Image"
        text-variant="white"
        title="Mi Biblioteca"
        sub-title="Los mejores libros que e leido"
      >
        <b-card-text>
          Esta es una aplicacion para compartis mis gustos de libros y expresar el gusto por la lectura.
        </b-card-text>
      </b-card>
    </div>
    <div>
  <b-card-group deck>
    <b-card title="Harry Potter y el prisionero de Azkaban" img-src="../utils/harry-potter.jpg" img-alt="harry" img-top>
      <b-card-text>
        Harry Potter y el prisionero de Azkaban, es el tercer libro de la serie literaria Harry Potter, escrita por la autora británica J. K. Rowling en 1999. El libro fue publicado en el Reino Unido el 8 de julio de 1999 por la editorial Bloomsbury y en los Estados Unidos el 8 de septiembre por Scholastic
      </b-card-text>
      <template #footer>
        <small class="text-muted">J. K. Rowling</small>
      </template>
    </b-card>

    <b-card title="Your Soul Is a River" img-src="../utils/libro_2.jpg" img-alt="you_soul" img-top>
      <b-card-text>
        comprende poemas sobre el amor, la pérdida, el dolor y el desamor ; en resumen, sobre todas las cosas que experimentas en la vida. Se trata del viaje de curación del trauma y volver a estar completo. Pero lo más importante, se trata de recordar amarte a ti mismo.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Nikita Gill</small>
      </template>
    </b-card>

    <b-card title="Milk and honey" img-src="../utils/honey.jpg" img-alt="you_soul" img-top>
      <b-card-text>
        El éxito de ventas número 1 del New York Times Milk and Honey es una colección de poesía y prosa sobre la supervivencia. Sobre la experiencia de la violencia, el abuso, el amor, la pérdida y la feminidad. El libro está dividido en cuatro capítulos, y cada capítulo tiene un propósito diferente. Se trata de un dolor diferente..
      </b-card-text>
      <template #footer>
        <small class="text-muted">Rupi Kaur</small>
      </template>
    </b-card>
  </b-card-group>
</div>
  </section>
  
</template>

<style scoped>
/* estilos generales */
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 2.5rem;
}

/* seccion hero */
.hero {
  background-color: aliceblue;
  min-height: 450px;
  text-align: center;
}
</style>
