import { createI18n } from 'vue-i18n'
import en from './lang/en-US'
import zh from './lang/zh-CN'

const messages = {
  'en-US': en,
  'zh-CN': zh,
}

const international = createI18n({
  locale: 'zh-CN',
  messages,
})

export default international
