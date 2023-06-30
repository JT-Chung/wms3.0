<template>
  <a-modal v-model:visible="visible">
    <template #title> </template>
    <template #footer>
      <a-button key="back" @click="handleCancel">返回</a-button>
      <a-button key="submit" :loading="loading" type="primary" @click="handleOk">{{ okText }}</a-button>
    </template>
  </a-modal>
</template>

<script lang="ts" setup>
  import { defineEmits, defineProps, ref, withDefaults } from 'vue'

  interface Props {
    title: string
    cancelText?: string
    okText?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    cancelText: '返回',
    okText: '确定',
  })
  const emit = defineEmits(['ok', 'cancel'])

  let visible = ref(false)

  function handleOk() {
    emit('ok')
    visible.value = false
  }

  function handleCancel() {
    emit('cancel')
    visible.value = false
  }
</script>

<style scoped></style>
