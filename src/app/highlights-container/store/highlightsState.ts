export interface HighlightsState {
  highlights: Highlight[];
  isLoading: boolean;
  errMsg: string;
}

export interface Highlight {
  id: string;
  date: string;
  description: string;
}

export interface HighlightRequest {
  child_id: string;
  date: string;
  description: string;
}
