<template>
    <p class="array-title platforms-title">Platforms<br></p>
    <div class="array-container platforms-container" v-if="platformsArray.length">
        <div class="array-list platforms-list" v-for="(platforms, i) in platformsArray" :key="i">
            <p class="array-name platforms-name">{{ platforms.platform.name }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ["platformsArray"]
};
</script>