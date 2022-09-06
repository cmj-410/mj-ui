export default [
  {
    property: 'text',
    type: 'String',
    default: '-',
    description: 'message的内容信息',
    required: 'T',
  },
  {
    property: 'type',
    type: 'String',
    default: 'primary',
    description: '基础类型，可选为：<br/>primary, success, danger, warning',
    required: 'N',
  },
  {
    property: 'duration',
    type: 'Number',
    default: 4000,
    description: '显示的持续时间',
    required: 'N',
  },
  {
    property: 'icon',
    type: 'String',
    default: '-',
    description: '放置于message左侧的icon，可选为：<br/>Material Icon',
    required: 'N',
  },
]
