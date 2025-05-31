"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPageView = (pagePath: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-Q3L1FNZM20', {
      page_path: pagePath,
    });
  }
};

// Custom hooks for common tracking events
export const useAnalytics = () => {
  const trackChatMessage = (message: string) => {
    trackEvent('chat_message_sent', 'engagement', message.substring(0, 50));
  };

  const trackProjectView = (projectTitle: string) => {
    trackEvent('project_viewed', 'portfolio', projectTitle);
  };

  const trackSectionView = (sectionName: string) => {
    trackEvent('section_viewed', 'navigation', sectionName);
  };

  const trackExternalLink = (linkUrl: string, linkType: string) => {
    trackEvent('external_link_clicked', 'engagement', `${linkType}: ${linkUrl}`);
  };

  const trackDownload = (fileName: string) => {
    trackEvent('download', 'engagement', fileName);
  };

  return {
    trackChatMessage,
    trackProjectView,
    trackSectionView,
    trackExternalLink,
    trackDownload,
  };
};

const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Track initial page load
    trackPageView(window.location.pathname);
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider; 