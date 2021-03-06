const LinkedList = require('./LinkedList')

describe('Test LinkedList\'s methods', () => {
  const ll = new LinkedList()

  test('Append 3 values: 10, 20, 30', () => {
    ll.append(10)
    expect(ll.contains(10)).toBe(true)
    expect(ll.size()).toBe(1)
    expect(ll.head.value).toBe(10)
    expect(ll.tail.value).toBe(10)
    ll.append(20)
    expect(ll.contains(10)).toBe(true)
    expect(ll.contains(20)).toBe(true)
    expect(ll.size()).toBe(2)
    expect(ll.head.value).toBe(10)
    expect(ll.tail.value).toBe(20)
    ll.append(30)
    expect(ll.contains(10)).toBe(true)
    expect(ll.contains(20)).toBe(true)
    expect(ll.contains(30)).toBe(true)
    expect(ll.size()).toBe(3)
    expect(ll.head.value).toBe(10)
    expect(ll.tail.value).toBe(30)
    expect(ll.head.next.value).toBe(20)
    expect(ll.head.next.next.value).toBe(30)
  })

  test('Prepend 3 values: 2, 4, 6', () => {
    ll.prepend(2)
    expect(ll.contains(2)).toBe(true)
    expect(ll.size()).toBe(4)
    expect(ll.head.value).toBe(2)
    ll.prepend(4)
    expect(ll.contains(4)).toBe(true)
    expect(ll.size()).toBe(5)
    expect(ll.head.value).toBe(4)
    ll.prepend(6)
    expect(ll.contains(6)).toBe(true)
    expect(ll.size()).toBe(6)
    expect(ll.head.value).toBe(6)
    expect(ll.head.next.value).toBe(4)
    expect(ll.head.next.next.value).toBe(2)
    expect(ll.tail.value).toBe(30)
  })
})
