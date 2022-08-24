import { AnalyticsBrowser } from '@segment/analytics-next';

export let SegmentAnalytics

try {
  SegmentAnalytics = AnalyticsBrowser.load({
    writeKey: 'gYrEKklfm3AZkfYQciCKeHRMvomfpJuJ'
  })
} catch (e) {
  // ignore
}

export async function trackWithCommonProps (storageProvider, eventName, otherProperties) {
  try {
    return await SegmentAnalytics.track(eventName, {
      appName: '???',
      appID: storageProvider.appId,
      chainID: storageProvider.chainId,
      ...otherProperties
    })
    // Ignore errors
  } catch (e) {
    return null
  }
}
