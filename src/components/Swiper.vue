<template>
  <md-card>
    <md-card-media class="swiper-inner">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="foto in fotos" :key="foto.name">
            <v-img :src="`${foto.url}`"></v-img>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
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
          slidesPerView: "auto",
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          pagination: {
            el: '.swiper-pagination'
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
                    "name": "Caraio Mary Jaine",
                    "url": "https://pm1.narvii.com/6287/eb74d1b223d472d095d51f17c90f3b4349e565ca_hq.jpg",
                },
                {
                    "name": "So Mauzaum",
                    "url": "https://pm1.narvii.com/6287/eb74d1b223d472d095d51f17c90f3b4349e565ca_hq.jpg",                
                },
                {
                    "name": "Partiu Suruba",
                    "url": "https://pm1.narvii.com/6287/eb74d1b223d472d095d51f17c90f3b4349e565ca_hq.jpg",
                },
                {
                    "name": "Olha o bixo vinu",
                    "url": "https://pm1.narvii.com/6287/eb74d1b223d472d095d51f17c90f3b4349e565ca_hq.jpg",
                },
                {
                    "name": "Partiu Suruba",
                    "url": "https://pm1.narvii.com/6287/eb74d1b223d472d095d51f17c90f3b4349e565ca_hq.jpg",
                },
                {
                    "name": "Partiu Suruba",
                    "url": "https://pm1.narvii.com/6287/eb74d1b223d472d095d51f17c90f3b4349e565ca_hq.jpg",
                },
                {
                    "name": "Partiu Suruba",
                    "url": "https://pm1.narvii.com/6287/eb74d1b223d472d095d51f17c90f3b4349e565ca_hq.jpg",
                },
                {
                    "name": "Partiu Suruba",
                    "url": "https://pm1.narvii.com/6287/eb74d1b223d472d095d51f17c90f3b4349e565ca_hq.jpg",
                },
                {
                    "name": "Partiu Suruba",
                    "url": "https://pm1.narvii.com/6287/eb74d1b223d472d095d51f17c90f3b4349e565ca_hq.jpg",
                },
                {
                    "name": "Partiu Suruba",
                    "url": "https://pm1.narvii.com/6287/eb74d1b223d472d095d51f17c90f3b4349e565ca_hq.jpg",
                },
                {
                    "name": "Partiu Suruba",
                    "url": "https://pm1.narvii.com/6287/eb74d1b223d472d095d51f17c90f3b4349e565ca_hq.jpg",
                },
                {
                    "name": "Partiu Suruba",
                    "url": "https://pm1.narvii.com/6287/eb74d1b223d472d095d51f17c90f3b4349e565ca_hq.jpg",
                },
                {
                    "name": "Partiu Suruba",
                    "url": "https://pm1.narvii.com/6287/eb74d1b223d472d095d51f17c90f3b4349e565ca_hq.jpg",
                },
                {
                    "name": "Partiu Suruba",
                    "url": "https://pm1.narvii.com/6287/eb74d1b223d472d095d51f17c90f3b4349e565ca_hq.jpg",
                },
                {
                    "name": "Partiu Suruba",
                    "url": "https://pm1.narvii.com/6287/eb74d1b223d472d095d51f17c90f3b4349e565ca_hq.jpg",
                },
            ];

            //this.fotos = this.fotos.slice(0,5);
        }
    }
  }
</script>

<style scoped>
  .swiper-inner {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }
</style>