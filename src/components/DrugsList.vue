<template>
  <ul class="drugs">
    <li
      v-for="drug of drugs"
      :key="drug.id"
      class="drugs__item"
      :style="{background: drug.bgColor}"
      @click="selectDrug(drug.id)"
    >
        <p v-if="lang === 'ru'" class="drugs__info">{{ drug.lang.ru.name }}</p>
        <p v-else class="drugs__info">{{ drug.lang.en.name }}</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Drug } from '@/models'

@Component
export default class DrugsList extends Vue {
  get drugs (): Drug[] {
    return this.$store.getters.getDrugs;
  }

  get lang() {
    return this.$i18n.locale;
  }

  selectDrug (id: number) {
    this.$emit('selectedDrugId', id);
  }
}
</script>

<style lang="scss" scoped>
.drugs {
  display: flex;
  justify-content: space-between;
  margin: 0 5% 5% 5%;
  &__item {
      width: 280px;
      height: 90px;
      border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      font-family: 'AvenirNextCyr-Bold';
      font-size: 28px;
      cursor: pointer;
  }
}
@media (max-width: 1024px) {
  .drugs {
    flex-direction: column;
    align-items: center;
    &__item {
      width:100%;
      margin-bottom: 20px;
    }
  }
}
</style>
