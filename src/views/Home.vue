<template>
  <div class="home">
    <div class="home__wrapper">
      <div class="home__content">
        <h2 class="home__subtitle">{{ $t('Home.subtitle') }}</h2>
        <h1 class="home__title">{{ $t('Home.title[0]') }}<span> {{ $t('Home.title[1]') }}</span></h1>
        <button @click="$router.push({ name: 'Main' })" class="home__btn">{{ $t('Home.button') }}</button>
      </div>
    </div>
    <Select :settings="langs" @input="changeLang = true"></Select>
  </div>
</template>

<script lang="ts">
import { Component, Watch } from 'vue-property-decorator';
import Select from '@/components/Select.vue';
import LocaleMixin from '@/mixins/locale';

@Component({
  components: {
    Select,
  }
})
export default class Home extends LocaleMixin {
  changeLang: boolean = false;

  @Watch('langs', { deep: true })
  onLangChange() {
      localStorage.LangInch = JSON.stringify(this.langs.selected);
      if (this.changeLang) {
          location.reload();
      }
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-image: url('../assets/img/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  &__wrapper {
    max-width: 860px;
    max-height: 860px;
    border-radius: 50%;
    background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
    position: absolute;
    top: -10%;
    left: 11%;
    display: flex;
    align-items: center;
    padding: 280px 181px 160px;
  }
  &__content {
    color: white;
    max-width: 580px;
    max-height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__subtitle {
    font-family: 'AvenirNextCyr-Light';
    font-size: 35px;
    letter-spacing: 0.02em;
    line-height: 41px;
    font-weight: normal;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &__title {
    margin-top: 29px;
    margin-bottom: 120px;
    font-family: 'AvenirNextCyr-Bold';
    font-size: 60px;
    line-height: 66px;
    letter-spacing: 0.02em;
    & > span {
      text-transform: uppercase;
    }
  }
  &__btn {
    width: 38vh;
    height: 90px;
    color:#8E9AD5;
    background: white;
    border-radius: 100px;
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    line-height: 44px;
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
    margin: 0 6vh;
    transition-duration: 0.2s;
    &:hover {
      animation-name: pulse;
      animation-duration: .3s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
}
@keyframes pulse {
  100% {
    transform: scale(1.1, 1.1);
  }
}
</style>
