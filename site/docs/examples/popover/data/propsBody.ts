export default [
  {
    property: 'placement',
    type: 'String',
    default: 'top',
    description: 'popover的位置，可选值：<br/>top,bottom,right,left',
    required: 'N',
  },
  {
    property: 'borderless',
    type: 'Boolean',
    default: 'false',
    description: '去除内部padding',
    required: 'N',
  },
  {
    property: 'disabled',
    type: 'Boolean',
    default: 'false',
    description: '是否禁用',
    required: 'N',
  },
]
