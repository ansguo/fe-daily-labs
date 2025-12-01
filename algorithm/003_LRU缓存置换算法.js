/**
 * LRU = Least Recently Used 最久没有使用（也有翻译成最近最少使用）
 */

class LRUCache {
  #cache

  constructor(capacity) {
    this.capacity = capacity
    this.#cache = new Map()
  }

  /** 是否存在某个key */
  has(key) {
    return this.#cache.has(key)
  }

  /** 
  get(key) {
    if (!this.has(key)) {
      return
    }
    const value = this.#cache.get(key)
    this.#cache.delete(key)
    this.#cache.set(key, value)
    return value
  }

  /** 设置key-valye */
  put(key, value) {
    if (this.#cache.has(key)) {
      this.#cache.delete(key)
    } else if (this.#cache.size >= this.capacity) {
      // TODO: 不懂
      this.#cache.delete(this.#cache.keys().next().value)
    }  
    this.#cache.set(key, value)
  }

  getSize() {
    return this.#cache.size
  }

  getKeyList() {
    return this.#cache.keys()
  }
}

const localCache = new LRUCache(5)
localCache.put('a', '1')
localCache.put('b', '2')
localCache.put('c', '3')
localCache.put('d', '4')
localCache.put('e', '5')
localCache.get('a')
console.log(localCache.getKeyList(), localCache.getSize())

localCache.put('f', '6')
console.log(localCache.getKeyList(), localCache.getSize())