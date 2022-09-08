export default [
  {
    property: 'type',
    type: 'String',
    default: 'neutral',
    description:
      'tag的基本类型，可选值为：<br/>primary, success, danger, warning, neutral',
    required: 'N',
  },
  {
    property: 'filled',
    type: 'Boolean',
    default: 'false',
    description: '填充tag',
    required: 'N',
  },
  {
    property: 'closable',
    type: 'Boolean',
    default: 'false',
    description: '是否可关闭',
    required: 'N',
  },
]
