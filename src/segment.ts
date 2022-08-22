import { AnalyticsBrowser } from '@segment/analytics-next';

export const SegmentAnalytics = AnalyticsBrowser.load({
  writeKey: 'gYrEKklfm3AZkfYQciCKeHRMvomfpJuJ'
})

export function trackWithCommonProps (storageProvider, eventName, otherProperties) {
  return SegmentAnalytics.track(eventName, {
    appName: '???',
    appID: storageProvider.appId,
    chainID: storageProvider.chainId,
    ...otherProperties
  })
}
