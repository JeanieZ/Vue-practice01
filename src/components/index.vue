
<template>
  <div class="wrap-container">
    <div>芝士</div>
      <div>
        <ul>
          <li v-for="(item,index) in menuList" :key="index" @click="turnToPage(index)">{{ item.name }}</li>
        </ul>
      </div>

    <div>
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      menuList: [
        { name: "作业中心", subList: [{ name: "子选项一" }] },
        { name: "练习本" },
        { name: "错题本", subList: [{ name: "子选项一" }] },
        { name: "奖品中心", subList: [{ name: "子选项一" }] }
      ]
    };
  },
  methods: {
    turnToPage(index){
        switch(index){
          case 0: this.$router.push("homeworkCenter");break;
          case 1: this.$router.push("practiceCenter");break;
          case 2: this.$router.push("wrongBook");break;
          case 3: this.$router.push("awardCenter");break;
          default: this.$router.push("homeworkCenter");break;
        }
    },
    pageTo(index) {
      switch (index) {
        case 0:
          this.$router.push("firstComponent");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
.wrap-container {
  li{
    width:120px;
    display: inline-block; 
  }
  
  .sub-item {
    margin-left: 20px;
  }
}
</style>
