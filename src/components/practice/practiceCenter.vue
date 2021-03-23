<template>
  <div>
    <div @click="show()">练习册</div>
  </div>
  
</template>

<script>
export default {
  name: 'firstComponent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
    }
  },
  methods:{
    show(){
      this.$router.push('/firstComponent/subpage1');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

</style>
