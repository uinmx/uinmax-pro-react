# uinmax-pro-react

完整版

### 环境

```nodemon
- node.js 18.17.0

- pnpm 8.15.4
```

### 技术栈

- React 18.2.x 、 Typescript 5.x 、 Vite 5.x
- react-router 6.x 、 zustand 4.x 、 Ant Design UI 5.x
- hooks 、commitList 、eslint 、prettier

### use

```bash
pnpm install

pnpm dev
```

### 主要功能

**1.代码格式化**

> 打开编辑器保存时自动格式化代码选择（prettier）规范

**① 手动检查脚本:**

```bash
# eslint 规范检测
pnpm lint

# eslint 修复
pnpm lint:fix

# prettier 规范检测
pnpm format:check

# prettier 修复
pnpm format:code
```

# 贡献规范

| 标记     | 说明                                                 |
| -------- | ---------------------------------------------------- |
| feat     | 新功能添加                                           |
| fix      | 修复 bug                                             |
| docs     | 文档（documentation）相关的修改。                    |
| style    | 代码风格、格式化等方面的修改，不涉及代码含义的改动。 |
| refactor | 重构                                                 |
| perf     | 优化性能                                             |
| test     | 增加或修改测试代码。                                 |
| chore    | 构建工具、依赖项、辅助工具等的变动。                 |
| ci       | CI/CD 相关的修改。                                   |
| revert   | 撤销之前的提交。                                     |
| merge    | 合并分支时的提交信息。                               |
