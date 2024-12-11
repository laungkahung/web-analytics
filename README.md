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

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License

## 🐛 Issues

Report issues at [GitHub Issues](https://github.com/laungkahung/web-analytics/issues)
