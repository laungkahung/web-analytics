declare module 'web-analytics' {
  interface AnalyticsConfig {
    siteId: string;
    endpoint?: string;
    debug?: boolean;
  }

  interface EventData {
    [key: string]: any;
  }

  class Analytics {
    /**
     * Initialize the analytics tracking
     * @param config Configuration object for analytics
     */
    static init(config: AnalyticsConfig): void;

    /**
     * Track a custom event
     * @param category Event category
     * @param action Event action
     * @param label Optional event label
     * @param value Optional event value
     */
    static trackEvent(
      category: string,
      action: string,
      label?: string,
      value?: number
    ): void;

    /**
     * Track a page view
     * @param path Optional custom path (defaults to current URL)
     */
    static trackPageView(path?: string): void;
  }

  export = Analytics;
}
