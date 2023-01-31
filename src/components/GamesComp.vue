<template>
    <div class="games-container">
        <div class="game-card-container" v-if="gamesList.length">
            <div class="game-card" v-for="(game, i) in gamesList" :key="i">
                <router-link :to="{ name: 'gamedetails', params: { slug: (game.slug), id: (game.id) } }">
                    <div class="card-img-container">
                        <img :alt="`${game.slug}`" :src="`${game.background_image}`" class="img-responsive card-img"/>
                    </div>
                    <div class="game-card-info">
                        <h5 class="mt-1 game-card-name" style="font-weight: 900;" >{{ game.name }}</h5>
                        <h6 class="mt-1">{{ game.genres[0].name }}</h6>
                        <h6 class="mt-1">{{ game.rating }}/5</h6>
                    </div>
                </router-link>
            </div>
        </div>
        <div v-else>
        <h2>Loading games</h2>
        </div>
        <div class="load-more" v-if="(gamesList.length)">
            <button class="btn custom-btn my-3" style="font-size: 1rem; font-weight: 700; color: var(--clr-3)" @click="moreGames">LOAD MORE</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
data() {
    return {
        page: 1
    }
},
computed: {
    ...mapState(['gamesList', 'currentGame'])
},
methods: {
    moreGames() {
        this.$store.commit('viewMoreGames');
        this.$store.dispatch('fetchGamesAct', this.$store.getters.getNextPageGames);
    }
},
created() {
    this.$store.dispatch('fetchGamesAct', this.page);
}
}
</script>

<style scoped>
.games-container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}

.game-card-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    gap: 10px 20px;
    margin: 2rem 7.5vw;
    max-width: 150rem;
    text-align: center;
}

.game-card {
    border-radius: 15px;
    width: 20vw;
    min-width: 20rem;
    max-width: 35rem;
    background-color: var(--clr-2);
}

.game-card:hover {
    background: black;
    filter: brightness(115%) contrast(90%);
}

.card-img-container {
    width: 100%;
    height: 12.5rem;
    min-height: 20rem;
}

.card-img {
    width:100%;
    height:100%;
    object-fit:cover;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
}

.game-card-info {
    padding: 1rem;
    display: flex;
    flex-flow: column wrap;
    align-content: space-around;
}

.game-card-name {
    display: flex;

}
</style>