<script setup lang="ts">
import { useRoute } from 'vue-router'
// const router = useRouter()
const route = useRoute()
</script>

<template>{{ route.query.key }}</template>

<style lang="scss"></style>
