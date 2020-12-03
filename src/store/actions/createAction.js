export function createAction(type, data = {}) {
  return { type, payload: data }
}