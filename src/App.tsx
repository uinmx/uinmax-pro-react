import { useEffect, useState } from 'react'

import { listDemo } from '@/api/demo'
import { AEmpty } from '@/components'

function App() {
  const [list, setList] = useState<any>([])

  const fetchData = async () => {
    const res = await listDemo()
    setList(res)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <AEmpty />
      {list && (
        <div>
          {list.map((item: any) => (
            <h3 key={item.id}>{item.title}</h3>
          ))}
        </div>
      )}
    </>
  )
}

export default App
