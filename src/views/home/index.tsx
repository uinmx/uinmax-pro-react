import { Suspense, useEffect, useState } from 'react'
import { Button, Space, Typography } from 'antd'

import { listDemo } from '@/api/demo'
import { AEmpty, Loading } from '@/components'
import { useGlobalStore } from '@/store'

const { Text } = Typography

const Home = () => {
  const { count, increment, decrement } = useGlobalStore()
  const [list, setList] = useState<any>([])

  const fetchData = async () => {
    const res = await listDemo()
    setList(res)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h3>{count}</h3>
      <Space>
        <Button onClick={() => increment(1)} type="primary">
          count +
        </Button>
        <Button onClick={() => decrement(1)} type="primary">
          count -
        </Button>
      </Space>

      <Suspense fallback={<Loading fullscreen={false} />}>
        {list && (
          <div>
            <Space direction="vertical">
              {list.slice(0, 3).map((item: any) => (
                <Text italic key={item.id}>
                  {item.title}
                </Text>
              ))}
            </Space>
          </div>
        )}

        {!list && <AEmpty />}
      </Suspense>
    </div>
  )
}

export default Home
