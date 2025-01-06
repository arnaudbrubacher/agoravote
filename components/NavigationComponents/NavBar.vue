<script lang="ts" setup>
</script>

<template>
  <nav class="host-gr flex justify-between items-center pt-[15px] pb-[15px] ml-[60px] mr-[60px]">
    <div class="flex w-auto">
      <span class="text-xl host-gm">Agoravote</span>
    </div>
    <div class="flex items-center gap-[30px]">
      <NuxtLink to="/">
        <span class="text-base host-gm">Products</span>
      </NuxtLink>
      <NuxtLink to="/">
        <span class="text-base host-gm">Pricing</span>
      </NuxtLink>
      <NuxtLink to="/">
        <span class="text-base host-gm">About us</span>
      </NuxtLink>
      <button class="flex pr-[10px] pl-[10px] h-[38px] border border-[#1F1F1F] rounded-[2.5px] justify-center items-center cursor-pointer ">
        <span class="text-base host-gm">French</span>
      </button>
      <NuxtLink to="/getstarted" class="flex pr-[10px] pl-[10px] h-[38px] bg-[#1F1F1F] rounded-[2.5px] justify-center items-center cursor-pointer ">
        <span class="text-base host-gm text-[#FFFFFF]">Get Started</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<style>

</style>