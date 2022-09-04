export default [
  {
    property: 'type',
    type: 'String',
    default: 'primary',
    description: `alert组件的内置类型：<br/>{'primary', 'success', 'danger', 'warning'}`,
    required: 'N'
  },
  {
    property: 'title',
    type: 'String',
    default: '-',
    description: 'alert组件的标题',
    required: 'N'
  },
  {
    property: 'body',
    type: 'String',
    default: '-',
    description: 'alert组件的主体内容',
    required: 'N'
  },
  {
    property: 'show-icon',
    type: 'Boolean',
    default: 'true',
    description: '是否显示icon',
    required: 'N'
  },
  {
    property: 'iconbox',
    type: ['Boolean'],
    default: 'false',
    description: '是否使用box的方式显示icon',
    required: 'N'
  },
  {
    property: 'closable',
    type: 'Boolean',
    default: 'false',
    description: 'alert组件是否可以关闭',
    required: 'N'
  },
  {
    property: 'visible',
    type: 'Boolean',
    default: 'true',
    description: 'alert组件是否展示',
    required: 'N'
  }
]
