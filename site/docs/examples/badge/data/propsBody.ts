export default [
  {
    property: 'type',
    type: 'String',
    default: 'danger',
    description: 'badge的基本类型可选值为：<br/>primary,success,danger,warning',
    required: 'N',
  },
  {
    property: 'value',
    type: 'Number, String',
    default: '-',
    description: 'badge的数值内容',
    required: 'N',
  },
  {
    property: 'maxValue',
    type: 'Number',
    default: '-',
    description: 'badge的最大值',
    required: 'N',
  },
  {
    property: 'position',
    type: 'String',
    default: 'top-right',
    description:
      '设置badge位置，可选值为：<br/>top-right,top-left,bottom-right,bottom-left',
    required: 'N',
  },
  {
    property: 'show',
    type: 'Boolean',
    default: 'true',
    description: '是否显示',
    required: 'N',
  },
  {
    property: 'point',
    type: 'Boolean',
    default: 'false',
    description: '是否显示为红点',
    required: 'N',
  },
  {
    property: 'square',
    type: 'Boolean',
    default: 'false',
    description: '方形',
    required: 'N',
  },
]
