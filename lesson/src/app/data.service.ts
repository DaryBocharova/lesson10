import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  put(utm_source, utm_medium, utm_campaign, utm_content, utm_term) {
    const body = {
      utm_source: utm_source,
      utm_medium: utm_medium,
      utm_campaign: utm_campaign,
      utm_term: utm_term,
      utm_content: utm_content,
    }
    return this.http.post("https://jsonplaceholder.typicode.com/posts", body);
  }
}
