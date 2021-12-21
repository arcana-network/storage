import * as Sentry from '@sentry/browser';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://1a411b6bfed244de8f6a7d64bb432bd4@o1011868.ingest.sentry.io/6081085',
  debug: true,
});

throw new Error('from nodejs');
