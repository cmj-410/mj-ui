export default [
  {
    property: 'modalValue(v-model)',
    type: 'String',
    default: 'options[0]',
    description:
      'toggle绑定的选中值。初始modoleValue非options中的值则默认为options[0]',
    required: 'T',
  },
  {
    property: 'options',
    type: 'Array',
    default: '-',
    description: '参数类型为选项名数组或material icon名字的数组',
    required: 'T',
  },
  {
    property: 'toggleWidth',
    type: 'String',
    default: '-',
    description:
      'toggle的宽度。最小宽度设置为120px，请确保宽度足够使得toggle正常显示',
    required: 'N',
  },
  {
    property: 'round',
    type: 'Boolean',
    default: 'false',
    description: '圆角',
    required: 'N',
  },
  {
    property: 'icons',
    type: 'Boolean',
    default: 'false',
    description: '使用Material Icons作为选项',
    required: 'N',
  },
]
