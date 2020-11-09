<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="2000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="sp" />
      </van-swipe-item>
    </van-swipe>
    
    <!-- 宫格 -->
    <van-grid
      :border="false"
      :column-num="2"
      direction="horizontal"
      :gutter="20"
    >
      <van-grid-item v-for="n in 8" :key="n" >
          
       <nut-video :sources="sources" :options="options" @play="play" @pause="pause" @playend="playend"> </nut-video>
     
      </van-grid-item>
     <div  class="wenzi "> niaho </div>
    </van-grid>
   <div class="kong"></div>
    </div>
    
 
</template>
<script>
export default {
  name: "Shiping",
    methods: {
        play(elm){
            console.log('play',elm)
        },
        pause(){
            console.log('pause')
        },
        playend(){
            alert('播放结束')
        }
    },
  data() {
    return {
      
      images: [
          require("../../assets/sp/1.png"),
           require("../../assets/sp/2.png"),
          require("../../assets/sp/3.png"),
        
      ],
        sources: [
                {
                    src:
                  'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
                    type: 'video/mp4'
                }
            ],
            options: {
             
                 playsinline: true,
                controls: true,
            },
    };
  },
};
</script>
<style lang="scss" scoped>

.kong{
  height: 50px;
}
</style>