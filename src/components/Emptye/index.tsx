import { Empty } from 'antd'

function AEmpty() {
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

export default AEmpty
