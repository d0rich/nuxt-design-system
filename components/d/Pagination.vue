<script lang="ts">
export default {
  name: 'DPagination'
}
</script>

<script setup lang="ts">
const props = defineProps({
  currentPage: {
    type: Number,
    default: 1
  },
  allPages: {
    type: Number,
    required: true
  },
  baseLink: {
    type: String,
    required: true
  }
})

const { getLinkToPaginatedPage } = useDPaginationUtils()

function getLinkToPage(page: number) {
  return getLinkToPaginatedPage(props.baseLink, page)
}

const visiblePages = computed(() => {
  return Array.from({ length: 7 }, (_, i) => i - 3 + props.currentPage).filter(
    (num) => num >= 1 && num <= props.allPages
  )
})
</script>

<template>
  <nav class="w-fit text-2xl font-bold">
    <DBtn
      v-if="currentPage > 1"
      class="inline-block mx-1"
      :to="getLinkToPage(currentPage - 1)"
    >
      <Icon name="ic:baseline-arrow-back-ios" />
    </DBtn>
    <DBtn
      v-if="!visiblePages.includes(1)"
      class="inline-block mx-1"
      :to="getLinkToPage(1)"
    >
      1
    </DBtn>
    <span v-if="!visiblePages.includes(1)" class="mx-1"> ... </span>
    <DBtn
      v-for="number in visiblePages"
      :key="number"
      class="inline-block mx-1"
      :to="getLinkToPage(number)"
    >
      {{ number }}
    </DBtn>
    <span v-if="!visiblePages.includes(allPages)" class="mx-1"> ... </span>
    <DBtn
      v-if="!visiblePages.includes(allPages)"
      class="inline-block mx-1"
      :to="getLinkToPage(allPages)"
    >
      {{ allPages }}
    </DBtn>
    <DBtn
      v-if="currentPage < allPages"
      class="inline-block mx-1"
      :to="getLinkToPage(currentPage + 1)"
    >
      <Icon name="ic:baseline-arrow-forward-ios" />
    </DBtn>
  </nav>
</template>
