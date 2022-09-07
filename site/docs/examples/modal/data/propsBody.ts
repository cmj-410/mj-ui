export default [
  {
    property: 'modalValue(v-model)',
    type: 'Boolean',
    default: '-',
    description: 'modal的显示与否',
    required: 'T',
  },
  {
    property: 'closableMask',
    type: 'Boolean',
    default: 'true',
    description: '是否点击遮罩关闭modal',
    required: 'N',
  },
  {
    property: 'width',
    type: 'String',
    default: '500px',
    description: 'Modal的宽度',
    required: 'N',
  },
]
