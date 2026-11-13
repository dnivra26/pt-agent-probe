export function addNote(state, text) {
  return { ...state, notes: [...state.notes, { text, at: Date.now() }] };
}
