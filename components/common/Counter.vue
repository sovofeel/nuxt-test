<template>
  <div>
    <div 
      :class="'ButtonCircle' + decrementDisabled" 
      @click="decrement" 
    >
      -
    </div>
    {{ count }}
    <div 
      :class="'ButtonCircle' + incrementDisabled"  
      @click="increment"
    >
      +
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      incrementDisabled: '',
      decrementDisabled: ''
    }
  },
  methods: {
    increment() { 
      this.count++
    },
    decrement() {
      if (this.count === 0) {
        this.decrementDisabled = 'is-disabled'
      } else {
        this.decrementDisabled = ''
        this.count--
      }

      
    }
  }
}
</script>

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


