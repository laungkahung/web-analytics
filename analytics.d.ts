declare module '@lkahung/web-analytics' {
  interface AnalyticsConfig {
    appId: string;
    endpoint: string;
    debug?: boolean;
  }

  interface Analytics {
    init(config: AnalyticsConfig): void;
    trackPageView(path: string): void;
  }

  const analytics: Analytics;
  export default analytics;
}
