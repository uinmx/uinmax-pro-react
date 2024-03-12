import { Empty } from 'antd'

function AEmpty() {
  return (
    <>
      <Empty
        description={
          <span>
            暂无数据 <a href="#">...</a>
          </span>
        }
      />
    </>
  )
}

export default AEmpty
