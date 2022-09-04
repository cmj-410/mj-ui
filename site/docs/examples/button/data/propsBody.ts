export default [
  {
    property: 'type',
    type: 'string',
    default: 'neutral',
    description: `按钮的基本颜色类型，取值范围为：<br/>
    {neutral,primary, success, danger, warning}`,
    required: 'N'
  },
  {
    property: 'outlined',
    type: 'Boolean',
    default: 'false',
    description: '强调类型的按钮，边有颜色而中空',
    required: 'N'
  },
  {
    property: 'round',
    type: 'Boolean',
    default: 'false',
    description: '使按钮圆角',
    required: 'N'
  },
  {
    property: 'size',
    type: 'string',
    default: 'normal',
    description: `按钮的尺寸大小，预设可选的类型有：<br/>{small, normal, big}`,
    required: 'N'
  },
  {
    property: 'icon',
    type: 'string',
    default: '-',
    description: '添加material-icon',
    required: 'N'
  },
  {
    property: 'loading',
    type: 'Boolean',
    default: 'false',
    description: '按钮加载状态',
    required: 'N'
  },
  {
    property: 'block',
    type: ['Boolean'],
    default: 'false',
    description: '使按钮扩展到父元素大小，类似与块级元素',
    required: 'N'
  },
  {
    property: 'disabled',
    type: 'Boolean',
    default: 'false',
    description: '禁用按钮',
    required: 'N'
  },
  {
    property: 'pulse',
    type: 'Boolean',
    default: 'false',
    description: '为元素增加跳动效果',
    required: 'N'
  }
]
