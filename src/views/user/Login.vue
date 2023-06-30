<template>
  <div>
    <a-form :model="formData" @finish="onFinish">
      <a-alert
        v-if="state.isLoginError"
        :message="$t('user.login.message-invalid-credentials')"
        showIcon
        type="error"
      />
      <a-form-item :label="$t('user.login.username')" name="username">
        <a-input v-model:value="formData.username" :placeholder="$t('user.login.username.placeholder')" />
      </a-form-item>
      <a-form-item :label="$t('user.login.password')" name="password">
        <a-input-password v-model:value="formData.password" :placeholder="$t('user.login.password.placeholder')" autocomplete="on"/>
      </a-form-item>
      <a-button :disabled="state.loginBtn" :loading="state.loginBtn" htmlType="submit" shape="round" type="primary">
        {{ $t('user.login.login') }}
      </a-button>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
  import type { LoginForm } from '@/types'
  import { reactive } from 'vue'
  import { useUserStore, useMenuStore } from '@/store'
  import { useRouter } from 'vue-router'
  import { notification } from 'ant-design-vue'
  import 'ant-design-vue/es/notification/style/css'
  import { timeFix } from '@/utils/greeting'

  const formData = reactive({
    username: undefined,
    password: undefined,
  })
  const state = reactive({
    loginBtn: false,
    isLoginError: false,
  })

  //表单验证
  const userStore = useUserStore()
  const menuStore = useMenuStore()
  const router = useRouter()

  function onFinish(params: LoginForm) {
    state.loginBtn = true
    userStore
      .login(params)
      .then(async() => {
        state.isLoginError = false

        await menuStore.getMenuList()
        router.push('/system/dict')
        setTimeout(() => {
          notification['success']({
            message: '欢迎',
            description: `${timeFix()}，欢迎回来`,
          })
        }, 1000)
      })
      .catch(() => {
        //
        state.isLoginError = true
        notification['error']({
          message: '错误',
          description: '请求出现错误，请稍后再试',
          duration: 4,
        })
      })
      .finally(() => (state.loginBtn = false))
  }
</script>

<style scoped></style>
