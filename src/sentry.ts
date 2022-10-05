import { captureException } from '@sentry/browser'

const reportedErrors = new Set();

export function wrapMethod(ctx, fn) {
  return async (...args) => {
    try {
      return await fn.apply(ctx, args);
    } catch (e) {
      if (!reportedErrors.has(e)) {
        captureException(e);
        reportedErrors.add(e);
      }
      throw e;
    }
  };
}

export function wrapInstance(ins) {
  // We actually need to iterate over inherited properties
  // tslint:disable-next-line:forin
  for (const insKey in ins) {
    const v = ins[insKey];
    if (typeof v === 'function') {
      const wrapped = wrapMethod(ins, v);
      ins[insKey] = wrapped;

      // If v has any other properties, carry them over, no need to wrap
      for (const [l2key, val] of Object.entries(v)) {
        wrapped[l2key] = val;
      }
    }
  }
}
