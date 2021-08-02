<template>
  <div class="description-app">
    <div class="description-app__wrapper">
      <div class="description-app__header">
        <div @click.stop="backHome" class="description-app__header--icon">
          <img src="../assets/img/home.svg">
        </div>
        <div @click.stop="tryAgain" class="description-app__header--icon">
          <img src="../assets/img/btn_retry.svg">
        </div>
      </div>
      <div class="description-app__content">
        <p class="description-app__text">{{ $t('DescApp.param') }}</p>
        <ul class="description-app__counter">
          <li class="description-app__counter--item">
            <img src="../assets/img/sad_icon.svg">
            <span class="description-app__amount">{{ drugs[0].count }}</span>
          </li>
          <li class="description-app__counter--item">
            <img src="../assets/img/smile_icon.svg">
            <span class="description-app__amount">{{ drugs[1].count }}</span>
          </li>
          <li class="description-app__counter--item">
            <img src="../assets/img/heart_icon.svg">
            <span class="description-app__amount">{{ drugs[2].count }}</span>
          </li>
        </ul>
      </div>
      <div class="description-app__footer">
        <div class="description-app__footer--block"></div>
        <div class="description-app__footer--title">{{ $t('DescApp.turn') }}</div>
        <div class="description-app__footer--turn"><span>{{ currentCustomer }}</span> / {{ allTurn }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Drug } from '@/models';

@Component
export default class DescriptionApp extends Vue {
  get drugs (): Drug[] {
    return this.$store.getters.getDrugs;
  }

  get currentCustomer (): number {
    return this.$store.getters.getCurrentCustomer + 1;
  }

  get allTurn (): number {
    return this.$store.getters.getCustomers.length;
  }

  backHome() {
    this.$store.dispatch("setReset");
    this.$router.push({ name: 'Home' }) 
  }
  tryAgain() {
    this.$store.dispatch("setReset");
  }
}
</script>

<style scoped lang="scss">
.description-app {
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(63.53deg, rgba(45, 133, 80, .7) 16.62%, rgba(94, 110, 194, .7) 83.38%);
  width: 33vw;
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: inherit;
  }
  &__header {
    padding: 10%;
    display: flex;
    &--icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 70px;
      background-color: #fff;
      border-radius: 50%;
      cursor: pointer;
      &:last-child {
        margin: 0 38px;
      }
    }
  }
  &__text {
    font-family: 'AvenirNextCyr-Bold';
    font-size: 36px;
    line-height: 44px;
    color: white;
    padding-left: 10%;
  }
  &__counter {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    max-width: 475px;
    margin-left: 10%;
    &--item {
      box-sizing: border-box;
      margin: 0 10px;
      padding: 10px;
      width: 190px;
      height: 80px;
      background: white;
      box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4);
      border-radius: 40px;
      margin: 0 20px 40px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:last-child {
        padding: 16px 14px;
      }
    }
  }
  &__amount {
    font-family: 'AvenirNextCyr-Bold';
    font-size: 48px;
    color: #424242;
    padding-left: 35px;
    padding-right: 35px;
  }
  &__footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 5% 10%;
    letter-spacing: 0.02em;
    &--block {
      height: 100%;
      background: #FFFFFF;
      opacity: 0.15;
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    &--title {
      font-family: 'AvenirNextCyr-Light';
      color: #FFFFFF;
      opacity: 1;
      font-size: 36px;
      line-height: 44px;
    }
    &--turn {
      color: #FFFFFF;
      font-size: 2.8em;
      & > span {
        font-family: 'AvenirNextCyr-Bold';
      }
    }
  }
}
@media (max-width: 1024px) {
  .description-app {
    &__header--icon {
      &:last-child {
        margin: 0 20px;
      }
    }
    &__text {
      padding-left: 10%;
    }
    &__footer{
      &--title {
        font-size: 34px;
        text-align: center;
      }
      &--turn {
        font-size: 2.4em;
      }
    }
  }
}
</style>
