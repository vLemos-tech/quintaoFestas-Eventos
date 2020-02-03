<template>
  <md-card class="back" style="height:auto">
    <md-card-media class="swiper-inner">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="foto in fotos" :key="foto.name" >
            <v-img :src="`${foto.url}`" height="100%" width="100%"></v-img>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          speed:800,
          slidesPerView: '2',
          loop:true,
          coverflowEffect: {
            rotate: 50,
            stretch: 150,
            depth: 100,
            modifier: 1,
            slideShadows : false
          },
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            1023: {
                slidesPerView: 1,
                spaceBetween: 0
            }
          },
          on: {
            imagesReady: function(){
              this.el.classList.remove('loading');
            }
          }
        },
        fotos: [],
      }
    },
    created(){
        this.createFotos();
    },
    methods:{
        createFotos(){
            this.fotos = [
                {
                    "name": "1",
                    "url": "https://images3.alphacoders.com/975/975999.png",
                },
                {
                    "name": "2",
                    "url": "https://images3.alphacoders.com/975/975999.png",                
                },
                {
                    "name": "3",
                    "url": "https://images3.alphacoders.com/975/975999.png",
                },
                {
                    "name": "4",
                    "url": "https://images3.alphacoders.com/975/975999.png",
                },
                {
                    "name": "4",
                    "url": "https://images3.alphacoders.com/975/975999.png",
                },
                {
                    "name": "6",
                    "url": "https://images3.alphacoders.com/975/975999.png",
                },
                {
                    "name": "7",
                    "url": "https://images3.alphacoders.com/975/975999.png",
                },
                {
                    "name": "8",
                    "url": "https://images3.alphacoders.com/975/975999.png",
                },

                {
                    "name": "9",
                    "url": "https://images3.alphacoders.com/975/975999.png",
                },
                {
                    "name": "10",
                    "url": "https://images3.alphacoders.com/975/975999.png",
                },
                {
                    "name": "11",
                    "url": "https://images3.alphacoders.com/975/975999.png",
                },
                {
                    "name": "12",
                    "url": "https://images3.alphacoders.com/975/975999.png",
                },
                {
                    "name": "13",
                    "url": "https://images3.alphacoders.com/975/975999.png",
                },

            ];

            //this.fotos = this.fotos.slice(0,5);
        }
    }
  }
</script>

<style scoped lang="scss">
.back{
    background-color: #FFC3C2
}

%transition_all_03s {
  transition:all .3s ease;
}
%backface_visibility_hidden{
  backface-visibility:hidden;
  -webkit-backface-visibility:hidden;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding-bottom: 5%;
}

.swiper-container {
  width: 100%;
  height: 100%;
  transition:opacity .6s ease;
  &.swiper-container-coverflow{
    padding-top:5%;
  }
  &.loading{
    opacity:0;
    visibility:hidden;
  }
  &:hover{
    .swiper-button-prev,
    .swiper-button-next{
      transform:translateX(0);
      opacity:1;
      visibility:visible;
    }
  }
}
.swiper-wrapper{

}
.swiper-slide{
  background-position:center;
  background-size:cover;
    height: 864px;
  .slide-inner{
    width: 100%;
    height: 710px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .entity-img{
    display:none;
  }
  .content{
    position:absolute;
    top:40%;
    left:0;
    width:50%;
    padding-left:5%;
    color:#fff;
    .title{
      font-size:2.6em;
      font-weight:bold;
      margin-bottom:30px;
    }
    .caption{
      display:block;
      font-size:13px;
      line-height:1.4;
    }
  }
}
[class^="swiper-button-"]{
  width:44px;
  opacity:0;
  visibility:hidden;
  @extend %transition_all_03s;
}
.swiper-button-prev{
  transform:translateX(50px);
}
.swiper-button-next{
  transform:translateX(-50px);
}
.swiper-container-horizontal{
  >.swiper-pagination-bullets{
    .swiper-pagination-bullet{
      margin:0 9px;
      position:relative;
      width:12px;
      height:12px;
      background-color:#fff;
      opacity:.4;
      @extend %transition_all_03s;
      &::before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        width:18px;
        height:18px;
        transform:translate(-50%, -50%);
        border:0px solid #fff;
        border-radius:50%;
        @extend %transition_all_03s;
      }
      &:hover,
      &.swiper-pagination-bullet-active{
        opacity:1;
      }
      &.swiper-pagination-bullet-active{
        &::before{
          border-width:1px;
        }
      }
    }
  }
}

// Mediaqueries
@media(max-width:1180px){
  .swiper-slide{
    .content{
      .title{
        font-size:25px;
      }
      .caption{
        font-size:12px;
      }
    }
  }
}
@media(max-width:1023px){
  .swiper-container {
    height:40vw;
    &.swiper-container-coverflow{
      padding-top:0;
    }
  }
}
</style>