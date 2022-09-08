import { ALLOWED_POSITION } from './constants'
export default [
  {
    property: 'content',
    type: 'String',
    default: '-',
    description: '提示信息内容',
    required: 'T',
  },
  {
    property: 'placement',
    type: 'String',
    default: 'top',
    description: `提示信息的放置位置，可选：<br/>${ALLOWED_POSITION.join(',')}`,
    required: 'N',
  },
  {
    property: 'disabled',
    type: 'Boolean',
    default: 'false',
    description: '禁用提示信息',
    required: 'N',
  },
  // {
  //   property: 'hoverable',
  //   type: 'Boolean',
  //   default: 'false',
  //   description: '鼠标悬停触发',
  // },
  {
    property: 'autoposition',
    type: 'Boolean',
    default: 'true',
    description: '自动选择合适的放置位置',
    required: 'N',
  },
]
