<template>
  <div>
    <div class="wrap">
      <audio :id='`myAudio${index}`' ref="myAudio" :src="audioSrc" crossorigin="anonymous" @timeupdate="playing()" @canplay="getTime()" @ended="paused()"></audio>
      <div class="onIcon" @click="playOrPause()">{{onFlag?'on':'off'}}</div>
      <div class="drag-bg" ref="bg" @click="turnTo($event)">
        <div class="drag-line" :style="{width:clapWidth+'px'}"></div>
        <div 
          class="clap"
          :style="{left:clapWidth > 0?(clapWidth-7.5)+'px':0+'px'}"
          @touchmove.stop="sliderTo($event)" 
        ></div>
      </div>
      <!-- <div style="padding-left:20px">{{percent}}%</div> -->
      <div style="padding-left:20px;font-size:12px;">{{getDuration(1)}}/{{totalTime}}</div>
    </div>
  </div>
</template>
<script>

import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  props:{
    audioSrc:String,
    index:Number
  },
  data() {
    return {
      clapWidth: 0,
      percent: 0,
      onFlag: false,
      audioDom: null,
      totalTime: 0,
      currentTime: 0
    };
  },
  computed: {
     ...mapState("homework",['currentPlayAudioIndex'])
  },
  watch:{
    currentPlayAudioIndex(newVal,oldVal){
      if(newVal !== oldVal && oldVal == this.index){
          this.audioDom.pause();
          this.onFlag = false;
      }
    }
  },
  mounted() {
    this.audioDom = document.getElementById("myAudio"+this.index);
    this.currentTime = this.audioDom.currentTime;
  },
  methods: {
    ...mapMutations("homework",['setCurrentAudioIndex']),
    playOrPause() {
      if (!this.onFlag) {
        this.setCurrentAudioIndex(this.index);
        this.audioDom.play();
        this.onFlag = true;
      } else {
        this.audioDom.pause();
        this.onFlag = false;
      }
    },
    paused(){
      this.onFlag = false;
    },
    playing() {
      this.currentTime = this.audioDom.currentTime;
      // console.log(this.currentTime);
      this.getDuration(1);
      let width = this.$refs.bg.clientWidth;
      this.percent = this.currentTime / this.audioDom.duration;
      this.clapWidth = parseInt(width*this.percent);
    },
    getTime(){
      this.totalTime = this.getDuration(2);
    },
    getDuration(mode) {
      if (this.audioDom) {
        let data = mode == 1?this.audioDom.currentTime:this.audioDom.duration;
        let hours = parseInt((data % (60 * 60 * 24)) / (60 * 60));
        let minutes = parseInt((data % (60 * 60)) / 60);
        let seconds = parseInt(data % 60);
        let time =
          (hours < 10 ? "0" + hours : hours) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes) +
          ":" +
          (seconds < 10 ? "0" + seconds : seconds);
        return time;
      }
    },
    turnTo(e){
      console.log(e);
      this.clapWidth = e.clientX-55;
      this.audioDom.currentTime = parseInt(this.audioDom.duration*(this.clapWidth / this.$refs.bg.clientWidth));
    },
    sliderTo(e) {
      console.log(e);
      console.log(this.$refs.bg.clientWidth);
      if (this.clapWidth >= 0 && this.clapWidth <= this.$refs.bg.clientWidth) {
        this.clapWidth = e.targetTouches[0].clientX-55;
        this.percent = parseInt(
          (this.clapWidth / this.$refs.bg.clientWidth) * 100
        );
      }
      if (this.clapWidth < 0) {
        this.clapWidth = 0;
        this.percent = parseInt(
          (this.clapWidth / this.$refs.bg.clientWidth) * 100
        );
      }
      if (this.clapWidth > this.$refs.bg.clientWidth) {
        this.clapWidth = this.$refs.bg.clientWidth;
        this.percent = parseInt(
          (this.clapWidth / this.$refs.bg.clientWidth) * 100
        );
      }
      console.log(this.audioDom.currentTime);
      this.audioDom.currentTime = parseInt(this.audioDom.duration*(this.clapWidth / this.$refs.bg.clientWidth));
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.wrap {
  display: flex;
  align-items: center;
}
.onIcon {
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 50%;
  border: 1px solid rgba(51, 154, 255, 1);
  margin-right: 10px;
  color: aquamarine;
}
.drag-bg {
  width: 50%;
  height: 10px;
  border-radius: 5px;
  background: #f8fafb;
  position: relative;
  flex: 1;
}
.drag-line {
  position: absolute;
  // width:50%;
  height: 10px;
  background: rgba(51, 154, 255, 1);
  border-radius: 5px;
  z-index: 1;
}
.clap {
  position: absolute;
  width: 15px;
  height: 15px;
  top: -4px;
  border-radius: 50%;
  border: 1px solid rgba(51, 154, 255, 1);
  background: #fff;
  z-index: 2;
}
</style>