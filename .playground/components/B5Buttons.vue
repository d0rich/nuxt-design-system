<template>
  <DWrapBackground
    class="font-dialog bg-[url('~/assets/img/bg/timeline.png')] bg-cover bg-fixed bg-center overflow-hidden"
    overlay-class="backdrop-saturate-50 bg-opacity-80 bg-yellow-900"
  >
    <div class="py-20 px-5 max-w-screen-lg mx-auto">
      <h1>Buttons</h1>
      <div class="flex flex-col gap-10 items-start">
        <DCard class="max-w-md">
          <DCardTitle>Rotation</DCardTitle>
          <p>
            Imperfection is the part of the design. It's not a bug, it's a
            feature. So buttons are rotated by default.
          </p>

          <p>Don't forget to hover buttons in order to see the effect.</p>

          <ul>
            <li><DBtn>Just Button</DBtn></li>
            <li><DBtn no-rotate>No Rotate</DBtn></li>
          </ul>
        </DCard>

        <DCard class="max-w-md self-end">
          <DCardTitle>Tile buttons</DCardTitle>
          <p>
            Tile buttons are default buttons. They are used in the most cases.
            Hover effect looks like a distorted tile.
          </p>
          <ul>
            <li><DBtn no-rotate>Button</DBtn></li>
            <li><DBtn no-rotate active>Active button</DBtn></li>
          </ul>
        </DCard>

        <DCard class="max-w-md">
          <DCardTitle>List highlight</DCardTitle>

          <p>
            This is a list highlight button. It's created specifically for the
            lists.
          </p>

          <ul class="isolate">
            <li><DBtn no-rotate highlight="list-item">List highlight</DBtn></li>
            <li>
              <DBtn no-rotate highlight="list-item" active
                >Active list highlight</DBtn
              >
            </li>
            <li>
              <DBtn highlight="list-item" no-rotate color-class="bg-blue-600"
                >Custom color</DBtn
              >
            </li>
            <li>
              <DBtn
                highlight="list-item"
                no-rotate
                active
                color-class="bg-blue-600"
                >Active Custom color</DBtn
              >
            </li>
            <li>
              <DBtn highlight="negative-list-item" no-rotate>Negative</DBtn>
            </li>
            <li>
              <DBtn highlight="negative-list-item" no-rotate active
                >Active Negative</DBtn
              >
            </li>
            <li>
              <DBtn
                highlight="composite-list-item"
                no-rotate
                color-class="bg-blue-600"
                >Composite</DBtn
              >
            </li>
            <li>
              <DBtn
                highlight="composite-list-item"
                no-rotate
                active
                color-class="bg-blue-600"
                >Active Composite</DBtn
              >
            </li>
          </ul>
        </DCard>

        <DCard class="max-w-md self-end">
          <DCardTitle>Big Bang Button</DCardTitle>
          <p>There is specific button which displays big animation on click.</p>
          <DBigBangButton class="underline" text="BOOP ME" />
        </DCard>
      </div>
    </div>
  </DWrapBackground>
</template>

<style scoped>
h1 {
  @apply text-center text-7xl sm:text-8xl pt-3 sm:mb-9 mx-2 mb-20 font-bold text-white;
}
</style>
