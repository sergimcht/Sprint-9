<template>
    <p class="array-title publishers-title">Publishers<br></p>
    <div class="array-container publishers-container" v-if="publishersArray.length">
        <div class="array-list publishers-list" v-for="(publishers, i) in publishersArray" :key="i">
            <p class="array-name publishers-name">{{ publishers.name }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ["publishersArray"]
};
</script>