const modules = import.meta.glob('./zh_CN/**/*.ts', { eager: true })

const merge: Record<string, any> = {}

/**
 * 将文件名作为键，文件内容作为值放入结果对象中
 */

Object.keys(modules).forEach((key: string) => {
  const moduleName = key.replace(/^.*[\\/]/, '').replace('.ts', '')
  merge[moduleName] = (modules[key] as any).default
})

export default merge
