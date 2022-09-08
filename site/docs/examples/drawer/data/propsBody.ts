export default [
  {
    property: 'modalValue(v-model)',
    type: 'Boolean',
    default: 'false',
    description: '抽屉是否展示的绑定值',
    required: 'T',
  },
  {
    property: 'width',
    type: 'String',
    default: '500px',
    description: '抽屉宽度',
    required: 'N',
  },
  {
    property: 'placement',
    type: 'String',
    default: 'right',
    description: '抽屉的放置位置，可选参数：<br/>right,left',
    required: 'N',
  },
  {
    property: 'closableMask',
    type: 'Boolean',
    default: 'true',
    description: '是否可以通过点击遮罩关闭抽屉',
    required: 'N',
  },
  {
    property: 'hideMask',
    type: 'Boolean',
    default: 'false',
    description: '隐藏遮罩',
    required: 'N',
  },
]
