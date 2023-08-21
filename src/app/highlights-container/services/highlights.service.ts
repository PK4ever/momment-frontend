import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Highlight, HighlightRequest} from "../store/highlightsState";



@Injectable({
  providedIn: 'root'
})
export class HighlightsService {
private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = '/api/highlight/';
  }

  public getHighlights(childId: number): Observable<Highlight[]> {
    const headers = { 'content-type': 'application/json'}
    const body= JSON.stringify(childId);
    return this.http.post<Highlight[]>(this.baseUrl+'fetch',body, {"headers": headers});
  }

  saveHighlight(highlightRequest: HighlightRequest): Observable<Highlight[]>  {
    const headers = { 'content-type': 'application/json'}
    const body= JSON.stringify(highlightRequest);
    return this.http.post<Highlight[]>(this.baseUrl+'save',body, {"headers": headers});
  }

  deleteHighlight(id: string): Observable<any>  {
    return this.http.delete<any>(this.baseUrl+'delete/'+id);
  }
}
