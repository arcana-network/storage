export function requiresLocking (target, key, descriptor) {
  const actualFn = descriptor.value

  // tslint:disable-next-line:only-arrow-functions
  descriptor.value = async function (...args) {
    // NOTE: we don't use a decorator factory (@requiresLocking(this.lock)) because that causes TS2532 (Object may be undefined)
    // This is a flaw in TypeScript but there's no other way for now that doesn't cause errors, this is not good either since we have to hardcode the lock
    const release = await this.state.lock.acquire()
    let result
    try {
      result = await actualFn.apply(this, args)
    } finally {
      release()
    }
    return result
  }
}
