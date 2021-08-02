<template>
  <div class="main">
    <DescriptionApp></DescriptionApp>
      <div class="playing-field">
        <CustomersList @handleDrug="handleDrug" :way="way"></CustomersList>
        <DrugsList @selectedDrugId="handleDrug"></DrugsList>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DescriptionApp from '@/components/DescriptionApp.vue'
import CustomersList from '@/components/CustomersList.vue'
import DrugsList from '@/components/DrugsList.vue'
import { Customer } from '@/models'

@Component({
  components: {
    DescriptionApp,
    CustomersList,
    DrugsList
  }
})
export default class Main extends Vue {
  way = '';

  get customers (): Customer[] {
    return this.$store.getters.getCustomers
  }

  get currentCustomer (): number {
    return this.$store.getters.getCurrentCustomer
  }

  handleDrug (id: number) {
    this.$store.dispatch('setCountDrugs', id)
    this.$store.dispatch('setCustomerDrugId', id)

    if (this.customers.length > this.currentCustomer + 1) {
      this.$store.dispatch('setCurrentCustomer')
      this.swipe(id);
    } else {
      this.$router.push('/end')
    }
  }
  swipe (id: number) {
    switch (id) {
      case 1:
        this.way = 'left'
        break;
      case 2:
        this.way = 'up'
        break;
      case 3:
        this.way = 'right'
        break;
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  height: 100vh;
}
.playing-field {
    width: calc(100vw - 33vw);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}
</style>
