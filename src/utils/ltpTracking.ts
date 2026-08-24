export interface UTMParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
}

const UTM_STORAGE_KEY = 'ltp_utm_params';
const VIEWCONTENT_FIRED_KEY = 'ltp_viewcontent_fired';

function sanitizeParam(value: string | null | undefined, fallback: string): string {
  if (!value) return fallback;
  const trimmed = value.trim();
  if (!trimmed) return fallback;
  // Limit to 80 characters max and strip any potential line breaks or control characters
  const clean = trimmed.replace(/[\r\n\t]/g, ' ');
  return clean.slice(0, 80);
}

export function initUTMTracking(): UTMParams {
  if (typeof window === 'undefined') {
    return {
      utm_source: 'direct',
      utm_medium: 'none',
      utm_campaign: 'direct',
      utm_content: 'direct',
      utm_term: '',
    };
  }

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const hasUrlUtms =
      urlParams.has('utm_source') ||
      urlParams.has('utm_medium') ||
      urlParams.has('utm_campaign') ||
      urlParams.has('utm_content') ||
      urlParams.has('utm_term');

    let currentParams: UTMParams;

    if (hasUrlUtms) {
      currentParams = {
        utm_source: sanitizeParam(urlParams.get('utm_source'), 'direct'),
        utm_medium: sanitizeParam(urlParams.get('utm_medium'), 'none'),
        utm_campaign: sanitizeParam(urlParams.get('utm_campaign'), 'direct'),
        utm_content: sanitizeParam(urlParams.get('utm_content'), 'direct'),
        utm_term: sanitizeParam(urlParams.get('utm_term'), ''),
      };
      // Save to sessionStorage if available
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(currentParams));
    } else {
      const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
      if (stored) {
        currentParams = JSON.parse(stored);
      } else {
        currentParams = {
          utm_source: 'direct',
          utm_medium: 'none',
          utm_campaign: 'direct',
          utm_content: 'direct',
          utm_term: '',
        };
        sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(currentParams));
      }
    }

    return currentParams;
  } catch (e) {
    // Return safe defaults if sessionStorage is blocked
    return {
      utm_source: 'direct',
      utm_medium: 'none',
      utm_campaign: 'direct',
      utm_content: 'direct',
      utm_term: '',
    };
  }
}

export function getStoredUTMs(): UTMParams {
  if (typeof window === 'undefined') {
    return {
      utm_source: 'direct',
      utm_medium: 'none',
      utm_campaign: 'direct',
      utm_content: 'direct',
      utm_term: '',
    };
  }

  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    // Ignore error
  }

  return initUTMTracking();
}

export function getAttributionValues(): { ref: string; camp: string } {
  const utms = getStoredUTMs();
  const ref =
    utms.utm_content && utms.utm_content.toLowerCase() !== 'direct'
      ? utms.utm_content
      : 'DIRECTO';
  const camp =
    utms.utm_campaign && utms.utm_campaign.toLowerCase() !== 'direct'
      ? utms.utm_campaign
      : 'DIRECTO';

  return { ref, camp };
}

export function trackPixelEvent(eventName: string, params?: Record<string, any>): void {
  if (typeof window === 'undefined') return;

  try {
    const fbq = (window as any).fbq;
    if (typeof fbq === 'function') {
      fbq('track', eventName, params);
    }
  } catch (e) {
    // Fail silently if Meta Pixel is blocked or unavailable
    console.warn('Meta Pixel track failed:', e);
  }
}

export function trackTikTokEvent(eventName: string, params?: Record<string, any>): void {
  if (typeof window === 'undefined') return;

  try {
    const ttq = (window as any).ttq;
    if (ttq && typeof ttq.track === 'function') {
      ttq.track(eventName, params);
    }
  } catch (e) {
    // Fail silently if TikTok Pixel is blocked or unavailable
    console.warn('TikTok Pixel track failed:', e);
  }
}

export function trackLtpViewContent(): void {
  if (typeof window === 'undefined') return;

  try {
    const alreadyFired = sessionStorage.getItem(VIEWCONTENT_FIRED_KEY);
    if (!alreadyFired) {
      trackPixelEvent('ViewContent', {
        content_name: 'Libera tu Propósito Lima 2026',
        content_category: 'Evento presencial',
        content_ids: ['ltp-lima-2026'],
        currency: 'PEN',
      });
      trackTikTokEvent('ViewContent', {
        content_name: 'Libera tu Propósito Lima 2026',
        content_id: 'ltp-lima-2026',
        content_type: 'product',
        currency: 'PEN',
      });
      sessionStorage.setItem(VIEWCONTENT_FIRED_KEY, '1');
    }
  } catch (e) {
    // Fallback if sessionStorage is blocked: track anyway
    trackPixelEvent('ViewContent', {
      content_name: 'Libera tu Propósito Lima 2026',
      content_category: 'Evento presencial',
      content_ids: ['ltp-lima-2026'],
      currency: 'PEN',
    });
    trackTikTokEvent('ViewContent', {
      content_name: 'Libera tu Propósito Lima 2026',
      content_id: 'ltp-lima-2026',
      content_type: 'product',
      currency: 'PEN',
    });
  }
}

export function trackLtpContact(details: {
  zone_id: string;
  zone_name: string;
  quantity: number;
  value: number;
}): void {
  const utms = getStoredUTMs();

  // Meta Pixel Standard 'Contact' Event
  trackPixelEvent('Contact', {
    content_name: details.zone_name,
    content_category: 'Ticket Reservation',
    content_ids: [details.zone_id],
    content_id: details.zone_id,
    zone_id: details.zone_id,
    zone_name: details.zone_name,
    quantity: details.quantity,
    value: details.value,
    currency: 'PEN',
    utm_source: utms.utm_source,
    utm_medium: utms.utm_medium,
    utm_campaign: utms.utm_campaign,
    utm_content: utms.utm_content,
    utm_term: utms.utm_term,
  });

  // TikTok Pixel Standard 'Contact' Event
  trackTikTokEvent('Contact', {
    content_name: details.zone_name,
    content_id: details.zone_id,
    content_type: 'product',
    quantity: details.quantity,
    value: details.value,
    currency: 'PEN',
    utm_source: utms.utm_source,
    utm_medium: utms.utm_medium,
    utm_campaign: utms.utm_campaign,
    utm_content: utms.utm_content,
    utm_term: utms.utm_term,
  });
}
