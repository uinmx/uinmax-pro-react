import { Empty } from 'antd'

function MTLEmpty() {
  return (
    <>
      <Empty
        description={
          <span>
            暂无数据 <a href="#API">...</a>
          </span>
        }
      />
    </>
  )
}

export default MTLEmpty
