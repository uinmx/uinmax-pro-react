import { Spin } from 'antd'
import type { SpinProps } from 'antd'

export const Loading: React.FC<SpinProps> = ({ tip = 'Loading' }) => {
  return <Spin tip={tip} size="large" fullscreen />
}

export default Loading
