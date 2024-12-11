# Web Analytics SDK

A lightweight, easy-to-use web analytics tracking SDK for monitoring website usage and user interactions.

## 🚀 Features

- Simple and lightweight
- Easy to integrate
- Supports both browser and Node.js environments
- Track page views and custom events
- Configurable endpoint and debug mode

## 📦 Installation

```bash
npm install @lkahung/web-analytics
```

## 🔧 Usage

### Browser Environment

```html
<script src="https://unpkg.com/@lkahung/web-analytics"></script>
<script>
  Analytics.init({
    appId: 'your-site-id',
    endpoint: 'https://your-analytics-endpoint.com/collect',
    debug: true
  });

  // Track a page view
  Analytics.trackPageView();

  // Track a custom event
  Analytics.trackEvent('category', 'action', 'label', value);
</script>
```

### Node.js / Modern JavaScript

```javascript
import Analytics from '@lkahung/web-analytics';

Analytics.init({
  appId: 'your-site-id',
  endpoint: 'https://your-analytics-endpoint.com/collect',
  debug: true
});

// Track events
Analytics.trackEvent('button', 'click', 'signup-button');
```

## 📝 Configuration

- `appId`: **Required**. Your unique site identifier
- `endpoint`: Optional. Custom collection endpoint
- `debug`: Optional. Enable console logging

## 🔄 SPA Integration

### Vue.js / Nuxt.js

```typescript
// plugins/analytics.client.ts
import Analytics from '@lkahung/web-analytics'

export default defineNuxtPlugin(() => {
  // 初始化 SDK
  Analytics.init({
    appId: 'your-site-id',
    endpoint: 'your-endpoint',
    debug: true
  })

  // 在路由变化时自动追踪页面访问
  const router = useRouter()
  router.afterEach((to) => {
    Analytics.trackPageView(to.fullPath)
  })
})
```

### React Router

```typescript
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Analytics from '@lkahung/web-analytics'

function App() {
  const location = useLocation()

  useEffect(() => {
    // 初始化 SDK（仅需执行一次）
    Analytics.init({
      appId: 'your-site-id',
      endpoint: 'your-endpoint',
      debug: true
    })
  }, [])

  useEffect(() => {
    // 监听路由变化
    Analytics.trackPageView(location.pathname)
  }, [location])

  return (
    // ... your app components
  )
}
```

### Angular

```typescript
// app.component.ts
import { Component } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs/operators'
import Analytics from '@lkahung/web-analytics'

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private router: Router) {
    // 初始化 SDK
    Analytics.init({
      appId: 'your-site-id',
      endpoint: 'your-endpoint',
      debug: true
    })

    // 监听路由变化
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      Analytics.trackPageView(event.urlAfterRedirects)
    })
  }
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License

## 🐛 Issues

Report issues at [GitHub Issues](https://github.com/laungkahung/web-analytics/issues)
