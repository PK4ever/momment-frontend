import {highlightsReducer, initialState} from "./highlights.reducer";

describe('Highlight Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = highlightsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
