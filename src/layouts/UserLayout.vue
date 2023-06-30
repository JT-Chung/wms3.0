<template>
  <div class="bg-login-bg flex justify-center items-center h-screen">
    <div class="h-3/5 w-1/2 rounded-lg flex flex-row bg-white">
      <div class="basis-1/2 h-full">
        <div class="h-10 bg-gray-500 bg-logo bg-no-repeat pt-2.5 pl-2.5"></div>
        <div class="">
          <RouterView />
        </div>
      </div>
      <div class="basis-1/2 bg-[#2a7fce] bg-illustration bg-no-repeat bg-contain bg-center">
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>

</style>