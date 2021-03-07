<template>
  <div class="filters">
    <span
      class="filter"
      :class="{ active: selected === filter.value }"
      v-for="filter in filters"
      :key="filter.value"
      @click="$emit('change-filter', filter.value)"
    >
      {{ filter.label }}
    </span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoFilter',
  props: ['selected'],
  setup() {
    const filters = [
      { label: '全部', value: 'all' },
      { label: '已完成', value: 'done' },
      { label: '未完成', value: 'todo' },
    ];

    return {
      filters,
    };
  },
});
</script>

<style>
.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-style: 14px;
}
.filters .filter {
  margin-right: 14px;
  transition: 0.4s;
  cursor: pointer;
}
.filters .filter.active {
  color: #6b729c;
  transform: scale(1.2);
}
</style>
