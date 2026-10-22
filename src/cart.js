export function cartTotal(items, discount = 0) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return total - discount
}
