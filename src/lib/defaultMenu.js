// import { v4 as uuidv4 } from "uuid";
import shortid from 'shortid'

export default [
  {
    title: '开发者',
    key: shortid.generate(),

    children: [
      {
        title: 'iOS',
        key: shortid.generate(),
      },
      {
        title: 'Android',
        key: shortid.generate(),
      },
      {
        title: 'web',
        key: shortid.generate(),
      },
      {
        title: '快应用',
        key: shortid.generate(),
      },
      {
        title: '微信小程序',
        key: shortid.generate(),
      },
    ],
  },
  {
    title: '设计',
    key: shortid.generate(),

    children: [
      {
        title: '交互设计',
        key: shortid.generate(),
      },
      {
        title: 'UI设计',
        key: shortid.generate(),
      },
      {
        title: '视觉设计',
        key: shortid.generate(),
      },
    ],
  },
  {
    title: '产品',
    key: shortid.generate(),
  },
]

// 拖拽更新目录
export const handleformatData = (info, curMenu) => {
  const dropKey = info.node.props.eventKey
  const dragKey = info.dragNode.props.eventKey
  const dropPos = info.node.props.pos.split('-')
  const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1])

  const loop = (data, key, callback) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].key === key) {
        return callback(data[i], i, data)
      }
      if (data[i].children) {
        loop(data[i].children, key, callback)
      }
    }
  }
  const data = [...curMenu]
  // Find dragObject
  let dragObj
  loop(data, dragKey, (item, index, arr) => {
    arr.splice(index, 1)
    dragObj = item
  })

  if (!info.dropToGap) {
    // Drop on the content
    loop(data, dropKey, (item) => {
      item.children = item.children || []
      // where to insert 示例添加到尾部，可以是随意位置
      item.children.push(dragObj)
    })
  } else if (
    (info.node.props.children || []).length > 0 && // Has children
    info.node.props.expanded && // Is expanded
    dropPosition === 1 // On the bottom gap
  ) {
    loop(data, dropKey, (item) => {
      item.children = item.children || []
      // where to insert 示例添加到头部，可以是随意位置
      item.children.unshift(dragObj)
    })
  } else {
    let ar
    let i
    loop(data, dropKey, (item, index, arr) => {
      ar = arr
      i = index
    })
    if (dropPosition === -1) {
      ar.splice(i, 0, dragObj)
    } else {
      ar.splice(i + 1, 0, dragObj)
    }
  }
  return data
}
