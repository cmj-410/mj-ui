import { ALLOWED_POSITION } from './constants'

export default [
  {
    property: 'modelValue(v-model)',
    type: 'String, Number, Object',
    default: '-',
    description: 'Select当前值',
    required: 'T',
  },
  {
    property: 'label-top',
    type: 'String',
    default: '-',
    description: '标签',
    required: 'N',
  },
  {
    property: 'options',
    type: 'Array, Object[]',
    default: '-',
    description: 'options数组数据，可以为简单数组或包含name属性的对象数组',
    required: 'N',
  },
  {
    property: 'track-by',
    type: 'String',
    default: 'value',
    description: 'options中用于绑定的值',
    required: 'N',
  },
  {
    property: 'placeholder',
    type: 'String',
    default: '-',
    description: 'select的placeholder',
    required: 'N',
  },
  {
    property: 'placement',
    type: 'String',
    default: 'bottom',
    description: `下拉options的放置位置，内置选择项：<br/>${Object.values(
      ALLOWED_POSITION
    )}`,
    required: 'N',
  },
  {
    property: 'divided',
    type: 'Boolean',
    default: 'false',
    description: '选项之间是否分割',
    required: 'N',
  },
  {
    property: 'disabled',
    type: ['Boolean'],
    default: 'false',
    description: '禁用当前select',
    required: 'N',
  },
]
