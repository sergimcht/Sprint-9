<template>
  <div class="game-details" v-if="(currentGame)">
    <div class="game-image">
      <img :alt="`${currentGame.slug}`" :src="`${ currentGame.background_image }`" class="img-responsive game-img" style="height: auto; width: 100%" />
    </div>
    <div class="game-info">
      <PlatformsComp :platformsArray="currentGame.platforms"></PlatformsComp>
      <GenresComp :genresArray="currentGame.genres"></GenresComp>
      <StoresComp :storesArray="currentGame.stores"></StoresComp>
      <DevelopersComp :developersArray="currentGame.developers"></DevelopersComp>
      <PublishersComp :publishersArray="currentGame.publishers"></PublishersComp>
    </div>
    <div class="game-description">
      <h2 style="font-weight: 900; margin-bottom: .5rem;">{{ currentGame.name.toUpperCase() }}</h2>
      <p style="font-size: 115%;" >{{ currentGame.description_raw }}</p>
    </div>
    <div class="game-more-info-container">
      <div class="game-more-info">
        <div class="releasing-info"><span style="font-weight: 900" >Releasing date: </span>{{ currentGame.released }}</div>
        <div class="rating-info"><span style="font-weight: 900">Rating: </span>{{ currentGame.rating }}/5</div>
        <div class="metacritic-info"><span style="font-weight: 900">Metacritic: </span>{{ currentGame.metacritic }}</div>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Loading game details</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PlatformsComp from '@/components/PlatformsComp.vue';
import GenresComp from '@/components/GenresComp.vue';
import StoresComp from '@/components/StoresComp.vue';
import DevelopersComp from '@/components/DevelopersComp.vue';
import PublishersComp from '@/components/PublishersComp.vue';

export default {
    components: { PlatformsComp, GenresComp, StoresComp, DevelopersComp, PublishersComp },
    props: [ "id" ],
    computed: {
        ...mapState([ "gamesList", "currentGame"])
    },
    data() {
      return {
      }
    },
    methods: {
    },
    created() {
        this.$store.dispatch('fetchCurrentGameAct', this.$route.params.id);
    },
}
</script>

<style>
.game-details {
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  grid-template-rows: repeat(3, auto);
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  margin: 0 8rem;
  margin-bottom: 1.8rem;
}

.game-image {
  grid-area: 1 / 1 / 2 / 3; 
}
.game-info { 
  grid-area: 2 / 1 / 3 / 2;
  background-color: var(--clr-2);
  padding: 1.4rem;
  display: flex;
  flex-flow: column nowrap;
}
.game-description { 
  grid-area: 2 / 2 / 3 / 3;
  background-color: var(--clr-2);
  padding: 1.4rem;
  display: flex;
  flex-flow: column nowrap;
}

.game-more-info-container { 
  grid-area: 3 / 1 / 4 / 3;
  background-color: var(--clr-2);
  
}

.game-more-info {
  margin: 1rem 0;
  font-size: 120%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
}

.releasing-info { grid-area: 1 / 1 / 2 / 3; }
.rating-info { grid-area: 2 / 1 / 3 / 2; }
.metacritic-info { grid-area: 2 / 2 / 3 / 3; }

.list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    align-content: center;
    gap: 10px 30px;
}

.game-image {
    height: fit-content;
    margin-bottom: 1rem;
    position: relative;
}

.game-img {
    width:100%;
}

.array-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 0 1rem;
}
.array-title {
  font-weight: 900;
}

.array-name {
  color: var(--bs-link-color);
}
</style>