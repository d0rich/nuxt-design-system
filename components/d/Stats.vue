<script lang="ts">
export default {
  name: 'DStats'
}
</script>

<script setup lang="ts">
export type StatsProps = {
  groupTitle?: string
  titles: string[]
  values: number[]
}

const props = defineProps<StatsProps>()

const fullStarPoints = ref<number[][]>([
  [500, 0], // 1
  [630, 330], // 1-2
  [980, 350], // 2
  [700, 590], // 2-3
  [790, 910], // 3
  [500, 720], // 3-4
  [210, 910], // 4
  [300, 590], // 4-5
  [20, 350], // 5
  [370, 330] // 5-1
])
const scales = ref<number[]>([1, 0.8, 0.6, 0.4, 0.27])
const posToIndex = {
  '1': 0,
  '1-2': 1,
  '2': 2,
  '2-3': 3,
  '3': 4,
  '3-4': 5,
  '4': 6,
  '4-5': 7,
  '5': 8,
  '5-1': 9
}
const center = [500, 500]
function pointsToString(points: number[][]) {
  return points.map((pair) => pair.join(',')).join(' ')
}
function shrinkStar(points: number[][], scale: number, cx = 500, cy = 500) {
  return points.map((coords) => {
    return [
      coords[0] - (coords[0] - cx) * (1 - scale),
      coords[1] - (coords[1] - cy) * (1 - scale)
    ]
  })
}
const scaledStars = computed(() => {
  return scales.value.map((scale) => shrinkStar(fullStarPoints.value, scale))
})
function starFromValue(value: number) {
  return scaledStars.value[5 - value]
}
function statFromIndex(index: number) {
  return {
    value: props.values ? props.values[index] ?? 1 : 1,
    title: props.titles ? props.titles[index] ?? '' : ''
  }
}
const firstStat = computed(() => statFromIndex(0))
const secondStat = computed(() => statFromIndex(1))
const thirdStat = computed(() => statFromIndex(2))
const forthStat = computed(() => statFromIndex(3))
const fifthStat = computed(() => statFromIndex(4))
</script>

<template>
  <figure class="max-w-full">
    <div class="stats__print-value">
      <div class="text-lg font-bold">{{ groupTitle }}</div>
      <div>
        <div
          v-for="(skill, index) in titles"
          :key="skill"
          class="grid grid-cols-[1fr_auto] items-center gap-x-4 gapy-1"
        >
          <div>{{ skill }}</div>
          <div>
            <Icon v-for="n in values[index]" :key="n" name="ic:sharp-star" />
            <Icon
              v-for="n in 5 - values[index]"
              :key="n"
              name="ic:sharp-star-border"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="stats__print-value--small">
      <span
        v-for="(skill, index) in titles"
        :key="skill"
        class="rounded text-white p-[.3em]"
        :class="{
          hidden: values[index] < 3,
          'bg-blue-500 text-xs': values[index] === 3,
          'bg-blue-600 text-sm': values[index] === 4,
          'bg-blue-700 text-base': values[index] === 5
        }"
      >
        {{ skill }}
      </span>
    </div>
    <div class="relative print:hidden">
      <svg viewBox="-500 -500 2000 2000" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points="100,-350 1500,-500 1000,1350 -500,1500"
          class="fill-neutral-900"
        />
        <polygon
          :points="pointsToString(shrinkStar(fullStarPoints, 2))"
          class="fill-neutral-500"
        />
        <!-- Stats bg -->
        <g>
          <polygon
            v-for="(star, index) in scaledStars"
            :key="index"
            :points="pointsToString(star)"
            :class="{
              'fill-neutral-500': index % 2,
              'fill-neutral-800': !(index % 2)
            }"
          />
        </g>
        <!-- Stats value -->
        <g>
          <!-- 1 -->
          <g class="stats__single-stat">
            <polygon
              :points="
                pointsToString([
                  starFromValue(firstStat.value)[posToIndex['1']],
                  starFromValue(Math.min(firstStat.value, fifthStat.value))[
                    posToIndex['5-1']
                  ],
                  center
                ])
              "
              class="stats__star--dark"
            />
            <polygon
              :points="
                pointsToString([
                  starFromValue(firstStat.value)[posToIndex['1']],
                  starFromValue(Math.min(firstStat.value, secondStat.value))[
                    posToIndex['1-2']
                  ],
                  center
                ])
              "
              class="stats__star--light"
            />
          </g>
          <!-- 2 -->
          <g class="stats__single-stat">
            <polygon
              :points="
                pointsToString([
                  starFromValue(secondStat.value)[posToIndex['2']],
                  starFromValue(Math.min(firstStat.value, secondStat.value))[
                    posToIndex['1-2']
                  ],
                  center
                ])
              "
              class="stats__star--light"
            />
            <polygon
              :points="
                pointsToString([
                  starFromValue(secondStat.value)[posToIndex['2']],
                  starFromValue(Math.min(thirdStat.value, secondStat.value))[
                    posToIndex['2-3']
                  ],
                  center
                ])
              "
              class="stats__star--dark"
            />
          </g>
          <!-- 3 -->
          <g class="stats__single-stat">
            <polygon
              :points="
                pointsToString([
                  starFromValue(thirdStat.value)[posToIndex['3']],
                  starFromValue(Math.min(secondStat.value, thirdStat.value))[
                    posToIndex['2-3']
                  ],
                  center
                ])
              "
              class="stats__star--light"
            />
            <polygon
              :points="
                pointsToString([
                  starFromValue(thirdStat.value)[posToIndex['3']],
                  starFromValue(Math.min(thirdStat.value, forthStat.value))[
                    posToIndex['3-4']
                  ],
                  center
                ])
              "
              class="stats__star--dark"
            />
          </g>
          <!-- 4 -->
          <g class="stats__single-stat">
            <polygon
              :points="
                pointsToString([
                  starFromValue(forthStat.value)[posToIndex['4']],
                  starFromValue(Math.min(thirdStat.value, forthStat.value))[
                    posToIndex['3-4']
                  ],
                  center
                ])
              "
              class="stats__star--light"
            />
            <polygon
              :points="
                pointsToString([
                  starFromValue(forthStat.value)[posToIndex['4']],
                  starFromValue(Math.min(forthStat.value, fifthStat.value))[
                    posToIndex['4-5']
                  ],
                  center
                ])
              "
              class="stats__star--dark"
            />
          </g>
          <!-- 5 -->
          <g class="stats__single-stat">
            <polygon
              :points="
                pointsToString([
                  starFromValue(fifthStat.value)[posToIndex['5']],
                  starFromValue(Math.min(forthStat.value, fifthStat.value))[
                    posToIndex['4-5']
                  ],
                  center
                ])
              "
              class="stats__star--dark"
            />
            <polygon
              :points="
                pointsToString([
                  starFromValue(fifthStat.value)[posToIndex['5']],
                  starFromValue(Math.min(fifthStat.value, firstStat.value))[
                    posToIndex['5-1']
                  ],
                  center
                ])
              "
              class="stats__star--light"
            />
          </g>
        </g>
      </svg>
      <div class="stats__images">
        <div class="stats__image"><slot name="icon-1" /></div>
        <div class="stats__image"><slot name="icon-2" /></div>
        <div class="stats__image"><slot name="icon-3" /></div>
        <div class="stats__image"><slot name="icon-4" /></div>
        <div class="stats__image"><slot name="icon-5" /></div>
      </div>
      <svg
        viewBox="-500 -500 2000 2000"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute inset-0 pointer-events-none"
      >
        <text x="-500" y="-300" class="stats__group-title">
          {{ groupTitle }}
        </text>
        <g>
          <text
            :x="fullStarPoints[posToIndex['1']][0]"
            :y="fullStarPoints[posToIndex['1']][1] - 100"
            :transform-origin="`${fullStarPoints[posToIndex['1']][0]} ${
              fullStarPoints[posToIndex['1']][1] - 100
            }`"
            class="stats__title"
          >
            {{ firstStat.title }}
            <tspan class="stats__title__value">{{ firstStat.value }}</tspan>
          </text>
          <text
            :x="fullStarPoints[posToIndex['2']][0] + 100"
            :y="fullStarPoints[posToIndex['2']][1] - 100"
            :transform-origin="`${fullStarPoints[posToIndex['2']][0] + 100} ${
              fullStarPoints[posToIndex['2']][1] - 100
            }`"
            class="stats__title"
          >
            {{ secondStat.title }}
            <tspan class="stats__title__value">{{ secondStat.value }}</tspan>
          </text>
          <text
            dominant-baseline="hanging"
            :x="fullStarPoints[posToIndex['3']][0] + 150"
            :y="fullStarPoints[posToIndex['3']][1] + 150"
            :transform-origin="`${fullStarPoints[posToIndex['3']][0] + 150} ${
              fullStarPoints[posToIndex['3']][1] + 150
            }`"
            class="stats__title"
          >
            {{ thirdStat.title }}
            <tspan class="stats__title__value">{{ thirdStat.value }}</tspan>
          </text>
          <text
            dominant-baseline="hanging"
            :x="fullStarPoints[posToIndex['4']][0] - 150"
            :y="fullStarPoints[posToIndex['4']][1] + 150"
            :transform-origin="`${fullStarPoints[posToIndex['4']][0] - 150} ${
              fullStarPoints[posToIndex['4']][1] + 150
            }`"
            class="stats__title"
          >
            {{ forthStat.title }}
            <tspan class="stats__title__value">{{ forthStat.value }}</tspan>
          </text>
          <text
            :x="fullStarPoints[posToIndex['5']][0] - 100"
            :y="fullStarPoints[posToIndex['5']][1] - 100"
            :transform-origin="`${fullStarPoints[posToIndex['5']][0] - 100} ${
              fullStarPoints[posToIndex['5']][1] - 100
            }`"
            class="stats__title"
          >
            {{ fifthStat.title }}
            <tspan class="stats__title__value">{{ fifthStat.value }}</tspan>
          </text>
        </g>
      </svg>
    </div>
  </figure>
</template>

<style>
.stats__single-stat:hover {
  animation: single-stat-hover 1.5s ease-in-out infinite;
}
.stats__star--light {
  @apply fill-yellow-400;
}

.stats__star--dark {
  @apply fill-yellow-600;
}
@keyframes single-stat-hover {
  0% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.35);
  }
  100% {
    filter: brightness(1);
  }
}

.stats__images {
  @apply absolute inset-0 pointer-events-none;
}

.stats__image {
  width: 20%;
  height: 20%;
  @apply absolute;
}

.stats__image:nth-child(1) {
  top: 2%;
  left: 50%;
}

.stats__image:nth-child(2) {
  top: 20%;
  right: 6%;
}

.stats__image:nth-child(3) {
  bottom: 8%;
  right: 30%;
}

.stats__image:nth-child(4) {
  bottom: 4%;
  left: 10%;
}

.stats__image:nth-child(5) {
  top: 30%;
  left: 6%;
}

.stats__group-title {
  font-size: 150px;
  paint-order: stroke;
  text-anchor: start;
  dominant-baseline: text-bottom;
  font-weight: 900;
  stroke-width: 20;
  @apply fill-black font-sans stroke-yellow-500;
}

.stats__title {
  font-size: 100px;
  paint-order: stroke;
  text-anchor: middle;
  dominant-baseline: text-top;
  font-weight: 900;
  stroke-width: 20;
  rotate: 5deg;
  @apply fill-black font-sans stroke-yellow-500;
}

.stats__title__value {
  font-size: 80px;
  stroke-width: 20;
  stroke-linejoin: round;
}
</style>

<style>
.stats__print-value {
  @apply hidden print:block;
}
.stats__print-value--small {
  @apply hidden flex-wrap gap-2 items-center;
}

.small-print-stats .stats__print-value {
  @apply print:hidden;
}

.small-print-stats .stats__print-value--small {
  @apply print:flex;
}
</style>
