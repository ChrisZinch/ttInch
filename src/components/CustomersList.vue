<template>
  <ul class="customers">
    <li
      v-for="(customer, index) of customers"
      :key="customer.id"
      class="customers__item customer"
      :class="{ current: index === currentCustomer }"
      :style="currentCustomer > index && move(way)"
      @touchstart="handleTouchStart"
    >
      <img
        :src="require(`../assets/img/${customer.photo}.jpg`)"
        alt="photo"
        class="customer__photo"
      >
      <div v-if="lang === 'ru'" class="customer__content-wrapper">
        <h3 class="customer__info">{{ customer.lang.ru.name }}, {{ customer.lang.ru.age }}</h3>
        <p class="customer__desc"> {{ customer.lang.ru.desc }}</p>
      </div>
      <div v-else class="customer__content-wrapper">
        <h3 class="customer__info">{{ customer.lang.en.name }}, {{ customer.lang.en.age }}</h3>
        <p class="customer__desc"> {{ customer.lang.en.desc }}</p>
      </div>
      <div
        v-if="index < currentCustomer"
        class="customer__stamp"
        :style="{ color: selectStamp(customer.drugId) }"
      >
        {{ `${$t('CustomerList.preparation')} ${customer.drugId}` }}
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Customer, Drug } from '@/models';

@Component
export default class CustomersList extends Vue {
  @Prop({ default: '' }) way!: string;

  get drugs (): Drug[] {
    return this.$store.getters.getDrugs;
  }

  get customers (): Customer[] {
    return this.$store.getters.getCustomers;
  }

  get currentCustomer (): number {
    return this.$store.getters.getCurrentCustomer;
  }

  get lang() {
    return this.$i18n.locale;
  }

  handleTouchStart (touchEvent: any) {
    if(touchEvent.changedTouches.length !== 1) {
      return;
    }

    const startX = touchEvent.changedTouches[0].clientX;
    const startY = touchEvent.changedTouches[0].clientY;

    addEventListener("touchend", (touchEvent) => { this.handleTouchMove(touchEvent, startX, startY)}, { once: true })
  }
  handleTouchMove (touchEvent: any, startX: any, startY: any) {
    if(touchEvent.changedTouches.length !== 1) {
      return;
    }

    const endX = touchEvent.changedTouches[0].clientX;
    const endY = touchEvent.changedTouches[0].clientY;

    const differenceX = startX - endX;
    const differenceY = startY - endY;
    
    if (Math.abs(differenceX) > Math.abs(differenceY)) {
      if (differenceX > 0) {
        this.$emit("handleDrug", 1);
      } else {
        this.$emit("handleDrug", 3);
      }
    } else {
      this.$emit("handleDrug", 2);
    }
  }
  move(way: string) {
    switch (way) {
      case 'up':
        return { transform: "translate(0, -100%)" }
      case 'left':
        return { transform: "translate(-50%, 0)" }
      case 'right':
        return { transform: "translate(50%, 0)" }
    }
  }

  selectStamp (id: number) {
    const selectedDrug: Drug | undefined = this.drugs?.find((item) => item.id === id);

    return selectedDrug?.color
  }
}
</script>

<style lang="scss" scoped>
.customers {
  width: 100%;
  position: relative;
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    max-width: 540px;
    box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
    border-radius: 40px;
    position: absolute;
    left: calc(50% - 540px/2);
    transition: all 1s ease-in;
    &.current {
      opacity: 1;
      transform: translate(0, 10%)
    }
  }
  .customer {
    &__photo {
      max-height: 350px;
      height: 100%;
    }
    &__content-wrapper {
      padding: 25px 60px 80px 60px;
    }
    &__info {
      color: #8E9AD5;
      font-family: 'AvenirNextCyr-Bold';
      font-size: 32px;
      margin-bottom: 10px;
    }
    &__desc {
      font-family: 'AvenirNextCyr-Light';
      font-size: 16px;
      line-height: 19px;
    }
    &__stamp {
      font-family: 'AvenirNextCyr-Bold';
      padding: 33px;
      font-size: 52px;
      border-width: 8px;
      border-style: solid;
      position: absolute;
      top: 43%;
      transform: rotate(-30deg);
    }
  }
}
@media (max-width: 1024px) {
  .customers {
    &__item {
      max-width: 440px;
      left: calc(50% - 440px/2);
    }
    .customer {
      &__photo {
        max-height: 300px;
      }
      &__content-wrapper {
        padding: 25px 40px 80px 40px;
      }
    }
  }
}
</style>
