import { createFeatureSelector, createSelector } from '@ngrx/store';
import {HighlightsState} from "./highlightsState";
import {sortBy} from "lodash";



export const featureKey = 'highlight';

export const highlightFeature = createFeatureSelector<HighlightsState>(featureKey);
export const getHighlights = createSelector(highlightFeature, (state: HighlightsState) => [...state.highlights].sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()));


