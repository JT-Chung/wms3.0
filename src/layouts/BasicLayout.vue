<template>
  <a-layout class="h-full">
    <a-layout-header>
      <div class="w-full h-full py-2 .layout--header" >
        <img src="../assets/logo_color_4.svg" alt="WMS3.0" class="h-full">
      </div>
      <span>WMS3.0</span>
    </a-layout-header>
    <a-layout>
      <a-layout-sider theme="light">
        <a-menu
          v-model:selectedKeys="selectedKeys"
          mode="inline"
          @click="handleClick"
        >
          <template>
            <a-sub-menu>
              <a-menu-item>
                <!-- <RouterLink :to=""/> -->
              </a-menu-item>
            </a-sub-menu>
          </template>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
        <RouterView />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedKeys = ref()

function handleClick() {

}
</script>

<style lang="scss" scoped>
</style>
