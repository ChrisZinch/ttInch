<template>
  <div class="playing-field">
    <CustomersList></CustomersList>
    <DrugsList @selectedDrugId="handleDrug"></DrugsList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CustomersList from '@/components/CustomersList.vue'
import DrugsList from '@/components/DrugsList.vue'

@Component({
  components: {
    CustomersList,
    DrugsList
  }
})
export default class PlayingField extends Vue {
  handleDrug (id: number) {
    this.$store.dispatch('setCountDrugs', id)
    this.$store.dispatch('setCurrentCustomer')
  }
}
</script>

<style lang="scss" scoped>
.playing-field {
  width: 77vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
