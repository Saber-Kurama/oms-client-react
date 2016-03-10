// 代码覆盖率报告生成配置
export default ({ watch }) => ({
  enabled: !watch,
  reporters: [
    { type: 'lcov' },
    { type: 'text-summary' },
    { type: 'text' },
    { type: 'html', dir: 'coverage' }
  ]
});
