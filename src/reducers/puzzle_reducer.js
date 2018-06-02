export default function(state=[], action) {
  if (action.payload) {
    return action.payload.data;
  }
  return state;
}
