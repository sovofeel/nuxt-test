<template>
  <div class="ButtonCircle">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.ButtonCircle {
  border-radius: 50%;
  border-color: $mainColor;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: $mainColor;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;

  &.is-disabled {
    border-color: #333;
    color: #333;
  }
}
</style>
