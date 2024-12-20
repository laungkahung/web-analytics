import Analytics from './analytics.js';

// 如果在浏览器环境中，自动初始化到 window 对象
if (typeof window !== 'undefined') {
  window.analytics = Analytics;
}

export default Analytics;
