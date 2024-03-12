import { Spin } from 'antd'
import type { SpinProps } from 'antd'

export const Loading: React.FC<SpinProps> = ({ tip = 'Loading', fullscreen = true }) => {
  return <Spin tip={tip} size="large" fullscreen={fullscreen} />
}

export default Loading
