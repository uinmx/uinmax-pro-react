import React, { ComponentType, Suspense } from 'react'

/**
 * 路由懒加载 hoc
 * @param importFunc
 * @use LazyLoad(() => import('@/xx'))
 * 其他替代方案: @loadable/component 或 	react-loadable
 */
const LazyLoad = <T extends ComponentType<any>>(importFunc: () => Promise<{ default: T }>) => {
  const LazyComponent = React.lazy(importFunc)

  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

export default LazyLoad
