<template>
    <p class="array-title genres-title">Genres</p>
    <div class="array-container genres-container" v-if="genresArray.length">
        <div class="array-list genres-list" v-for="(genres, i) in genresArray" :key="i">
            <p class="array-name genres-name">{{ genres.name }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ["genresArray"]
};
</script>