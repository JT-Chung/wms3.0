<template>
  <form :model="formData">
    <a-row :gutter="24">
      <template v-for="(item, index) in formConfig" :key="index">
        <a-col>
          <a-form-item :label="item.label" :rules="item.rules">
            <component v-model:value="formData[item.field]" v-bind="item.component"></component>
          </a-form-item>
        </a-col>
      </template>
    </a-row>
  </form>
</template>

<script lang="ts" setup>
  import { computed, reactive, ref } from 'vue'
  import { Form } from 'ant-design-vue'
  import type { FormConfig } from './types'

  interface Props {
    formConfig: FormConfig[]
    translator?: object
  }

  const props = defineProps<Props>()
  const emit = defineEmits(['valid'])

  const formData = reactive({})
  const formRules = computed(() =>
    props.formConfig.map((v) => ({
      [v.field]: v.rules,
    }))
  )
  //表单验证
  let loading = ref(false)
  const useForm = Form.useForm
  const { resetFields, validate } = useForm(formData, formRules)

  async function onSubmit() {
    try {
      loading.value = true
      const valid = await validate()
      emit('valid', valid)
      resetFields()
      loading.value = false
    } catch (e) {
      console.error('wrong submission:', e)
      loading.value = false
    }
  }
</script>

<style scoped></style>
