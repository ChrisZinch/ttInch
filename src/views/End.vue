<template>
  <div class="end">
    <div class="end__left">
      <div class="end__left--icon">
        <img @click="backHome()" src="../assets/img/home-white.svg">
      </div>
      <div class="end__content">
        <ul class="end__result">
          <li
            v-for="drug of drugs"
            :key="drug.id"
            class="end__result--item drug"
          >
            <p class="drug__rate">{{ result(drug.count) }} %</p>
            <p class="drug__name">{{ drug.name }}</p>
          </li>
        </ul>
        <div class="end__description">
          <h2 class="end__title">{{ $t('End.title') }} <br>
          <span>{{ $t('End.subtitle') }}</span></h2>
          <p class="end__text">{{ $t('End.text') }}</p>
        </div>
      </div>
      <button @click="tryAgain()" class="end__btn">{{ $t('End.button') }}</button>
    </div>
    <div class="end__right">
      <img src="../assets/img/final-img.jpg" class="end__right--icon">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Drug } from '@/models';

@Component
export default class End extends Vue {
  get drugs (): Drug[] {
    return this.$store.getters.getDrugs;
  }

  get drugsLenght() {
    return this.drugs.length;
  }

  result (count: number): number  {
    return Math.round((count / this.drugsLenght * 100));
  }
  tryAgain() {
    this.$store.dispatch("setReset");
    this.$router.push({ name: 'Main' });
  }
  backHome() {
    this.$store.dispatch("setReset");
    this.$router.push({ name: 'Home' }) 
  }
}
</script>

<style lang="scss" scoped>
.drug {
  color: #424242;
  &__rate {
    font-family: 'AvenirNextCyr-Regular';
    font-size: 48px;
  }
  &__name {
    margin-top: 24px;
    font-size: 16px;
    font-family: 'AvenirNextCyr-Bold';
  }
}
.end {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  &__left {
    margin: 5% 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 50%;
    &--icon {
      width: 70px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
      border-radius: 100px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  &__right {
    position: relative;
    width: 50%;
    &--icon {
      position: absolute;
      right: 0;
      width: 100%;
      //max-width: 620px;
    }
  }
  &__content {
    margin-left: 80px;
    //max-width: 580px;
  }
  &__result {
    display: flex;
    justify-content: space-around;
  }
  &__description {
    border-top: 2px solid #D9D9D9;
    padding: 40px 0;
    margin: 50px 0;
    font-family: 'AvenirNextCyr-Regular';
  }
  &__title {
    color: #8E9AD5;
    font-size: 32px;
    letter-spacing: 0.02em;
    & > span {
      font-family: 'AvenirNextCyr-Bold';
    }
  }
  &__text {
    margin-top: 20px;
    color: #424242;
    font-size: 24px;
    line-height: 29px;
  }
  &__btn {
    margin-left: 80px;
    width: 270px;
    height: 60px;
    font-family: 'AvenirNextCyr-Bold';
    font-size: 24px;
    color: #fff;
    background: linear-gradient(90deg, #D9D9D9 0%, #A1A1A1 100%);
    border-radius: 100px;
    outline: none;
    border: 1px solid transparent;
    background-position: 0 0;
    transition: all 2s ease;
    &:hover {
      cursor: pointer;
      background-position: 270px 0;
    }
  }
}
@media (max-width: 1024px) {
  .drug {
    &__rate {
      font-size: 34px;
    }
    &__name {
      font-size: 16px;
      font-family: 'AvenirNextCyr-Bold';
    }
  }
  .end {
    &__content,
    &__btn {
      margin-left: 40px;
    }
  }
}
</style>
