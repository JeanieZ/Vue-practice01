<template>
  <div>
    <div class="wrap-box">
      <div
        v-for="(item,index) in newList"
        :key="index"
        class="box-item"
        :style="{'z-index':index > 0?-(index+1):0,'top':index > 0 ?((index+1)*4)+'px':top+'px',left:index > 0?'':left+'px',transform:index > 0?'scaleX('+(1-((index+1)/10))+')':''}"
        @touchstart="startmove($event,index)"
        @touchmove="moveCard($event,index)"
        @touchend="end()"
      >{{item}}</div>
    </div>
    <div class="draggle-wrap">
      <div class="draggable-box" v-draggable>
        <div class="yline left"></div>
        <div class="yline right"></div>
        <div class="xline top"></div>
        <div class="xline bottom"></div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "homeworkCenter",
  computed: {
    newList(){
      return (this.list.filter((item,index) => {
          return index >= this.currentIndex
      }));
    }
  },
  data() {
    return {
      list: [1, 2, 3, 4],
      left: 0,
      top: 0,
      startLeft: 0,
      startTop: 0,
      startClientX: 0,
      endClientY: 0,
      curClientX:0,
      curClientY:0,
      currentIndex:0
    };
  },
  methods: {
    startmove(e, index) {
      if (index == 0) {
        let touchInfo = e.touches[0];
        this.startClientX = touchInfo.clientX;
        this.startClientY = touchInfo.clientY;
        this.startLeft = touchInfo.clientX - this.left;
        this.startTop = touchInfo.clientY - this.top;
      }
    },
    moveCard(e, index) {
      if (index == 0) {
        let touchInfo = e.touches[0];
        this.curClientX = touchInfo.clientX;
        this.curClientY = touchInfo.clientY;
        this.left = touchInfo.clientX - this.startLeft;
        this.top = touchInfo.clientY - this.startTop;
      }
    },
    end() {
      let distance = this.getDistance();
      if (distance > 100) {
        // this.list.shift();
        if( this.curClientY < this.startClientY){
          this.currentIndex = this.currentIndex == this.list.length-1?this.currentIndex:this.currentIndex+1;
        }else{
          this.currentIndex = this.currentIndex == 0?0:this.currentIndex-1;
        } 
      }
      this.left = 0;
      this.top = 0;
      this.startLeft = 0;
      this.startTop = 0;
    },
    getDistance(curTouchInfo) {
      let x = this.curClientX - this.startClientX;
      let y = this.curClientY - this.startClientY;
      let l = Math.sqrt(x * x + y * y);
      return l;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
body {
  width: 100%;
}
.wrap-box {
  // padding:20px;
  position: relative;
  height: 150px;
  margin-bottom:50px;
  .box-item {
    width: 80%;
    border-radius: 10px;
    height: 150px;
    line-height: 150px;
    box-shadow: 0px 2px 5px #eeeeee;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    background: yellowgreen;
  }
}
.draggle-wrap{
  position: relative;
  height:100vh;
}
.draggable-box{
  width:100px;
  height:50px;
  background: yellowgreen;
  position: absolute;
}
.yline{
  width:5px;
  height:50px;
  position: absolute;
  z-index:1;
  // background: red;
}
.xline{
  width:100px;
  height:5px;
  position: absolute;
  z-index:1;
  // background: red;
}
.right{
  right:0;
  top:0;
}
.top{
  top:0;
}
.bottom{
  bottom:0;
}
</style>
