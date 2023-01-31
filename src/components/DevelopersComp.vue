<template>
    <p class="array-title developers-title">Developers<br></p>
    <div class="array-container developers-container" v-if="developersArray.length">
        <div class="array-list developers-list" v-for="(developers, i) in developersArray" :key="i">
            <p class="array-name developers-name">{{ developers.name }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ["developersArray"]
};
</script>