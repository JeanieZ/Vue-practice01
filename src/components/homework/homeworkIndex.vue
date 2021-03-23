<template>
  <div>
    <div @click="show()">音频中心</div>
    <div v-for="(item,index) in audioList" :key="index">
        <slider :audioSrc="item" :index="index"></slider>
    </div>
  </div>
  
</template>

<script>
const audioSrc = require("../../assets/qingpingle.mp3");
const audioSrc1 = require("../../assets/zuimeng.mp3");
import slider from '../slider/slider'
export default {
  name: 'homeworkIndex',
  components:{
    slider
  },
  computed:{
    
  },
  data () {
    return {
      audioList:[]
    }
  },
  mounted(){
    this.audioList = [audioSrc,audioSrc1];
    console.log(this.audioList);
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
