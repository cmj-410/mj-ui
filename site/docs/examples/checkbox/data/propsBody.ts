export default [
  {
    property: 'modelValue(v-model)',
    type: 'Boolean',
    default: false,
    description: 'Checkbox当前值',
    required: 'T',
  },
  {
    property: 'type',
    type: 'String',
    default: 'primary',
    description:
      '预设的基础类型：<br/>primary, success, danger, warning, neutral',
    required: 'N',
  },
  {
    property: 'label',
    type: 'String',
    default: '-',
    description: '标签',
    required: 'N',
  },
  {
    property: 'sub-label',
    type: 'String',
    default: '-',
    description: '子标签',
    required: 'N',
  },
  {
    property: 'icon',
    type: 'String',
    default: 'check',
    description: '可选Material Icons图标',
    required: 'N',
  },
  {
    property: 'line-through',
    type: 'Boolean',
    default: false,
    description: '使用划线标签的方式表示选择',
    required: 'N',
  },
  {
    property: 'disabled',
    type: ['Boolean'],
    default: false,
    description: '禁用',
    required: 'N',
  },
  {
    property: 'pulse',
    type: 'Boolean',
    default: false,
    description: '跳动效果',
    required: 'N',
  },
]
