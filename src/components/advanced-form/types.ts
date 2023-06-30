import type { Rule } from 'ant-design-vue/es/form'

interface Component {
  is: string
}

export interface FormConfig {
  label: string
  field: string
  component: Component
  rules: Rule[]
}
