<script lang="ts" setup>

</script>

<template>
  <footer class="host-gr flex flex-col gap-4 ml-[60px] mr-[60px]">
    <div class="w-full flex justify-end items-center">
      <section class="flex gap-4">
        <NuxtLink to="https://www.x.com/agoravote">
          <p class="text-base host-gr">Twitter(X)</p>
        </NuxtLink>
        <NuxtLink to="https://www.linkedin.com/agoravote">
          <p class="text-base host-gr">LinkedIn</p>
        </NuxtLink>
        <NuxtLink to="https://www.github.com/agoravote">
          <p class="text-base host-gr">Github</p>
        </NuxtLink>
      </section>
    </div>
    <div>
      <section class="flex justify-between items-center">
        <h3 class="text-2xl host-gm">Agoravote Inc</h3>
        <div class="flex gap-4">
          <NuxtLink to="/">
            <p class="host-gr text-base">Terms</p>
          </NuxtLink>
          <NuxtLink to="/">
            <p class="host-gr text-base">Privacy</p>
          </NuxtLink>
          <NuxtLink to="/">
            <p class="host-gr text-base">Security and Trust</p>
          </NuxtLink>
        </div>
      </section>
    </div>
  </footer>
</template>