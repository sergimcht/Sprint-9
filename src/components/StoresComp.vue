<template>
    <p class="array-title stores-title">Stores<br></p>
    <div class="array-container stores-container" v-if="storesArray.length">
        <div class="array-list stores-list" v-for="(stores, i) in storesArray" :key="i">
            <p class="array-name stores-name">{{ stores.store.name }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ["storesArray"]
};
</script>