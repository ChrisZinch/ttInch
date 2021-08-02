<template>
    <div class="select" @blur="open = false">
        <div
            class="selected"
            :class="{open: open}"
            @click="open = !open"
        >
            {{ settings.selected.label }}
        </div>
        <div class="items" :class="{selectHide: !open}">
            <div
                class="item"
                v-for="(option, id) of settings.options.filter((item) => item.lang !== settings.selected.lang)"
                :key="id"
                @click="settings.selected = option; open = false; $emit('input', option)"
            >
                {{ option.label }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import { Settings } from '@/models';

@Component
export default class Select extends Vue {
    @Prop({ default: () => {} }) settings!: Settings;

    open: boolean = false;
}
</script>

<style scoped lang="scss">
.select {
  position: absolute;
  right: 5%;
  top: 3%;
  text-align: left;
  outline: none;
  height: 31px;
  width: 120px;
  font-family: 'AvenirNextCyr-Bold';
  color: #8E9AD5;
  font-size: 18px;
  line-height: 30px;
  z-index: 10;
  padding: 0;
  border: none;
  &:focus {
      border-color: transparent;
      box-shadow: none;
  }
}
.selected {
  background-color: #fff;
  border-radius: 100px;
  border: 1px solid #D3D8DD;
  color: #8E9AD5;
  padding-left: 10px;
  padding-right: 22px;
  cursor: pointer;
  user-select: none;
}
.selected.open {
  border-radius: 100px 100px 0px 0px;
  outline: none;
  border-bottom: none;
}
.selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-color: #8E9AD5 transparent transparent transparent;
}
.items {
  color: #8E9AD5;
  border-radius: 0px 0px 100px 100px;
  overflow: hidden;
  border-right: 1px solid #D3D8DD;
  border-left: 1px solid #D3D8DD;
  border-bottom: 1px solid #D3D8DD;
  position: absolute;
  background-color: #fff;
  z-index: 2;
  left: 0;
  transition: all .3s ease;
  right: 0;
}
.item {
  color: #8E9AD5;
  padding-left: 10px;
  cursor: pointer;
  user-select: none;
}
.item:hover {
  background-color: #F2F3F5;
}
.selectHide {
  display: none;
}
</style>
