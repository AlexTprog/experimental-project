import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from '../interfaces/anime';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  private readonly URL = 'http://localhost:3000/animes';

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Anime> {
    return this.http.get<Anime>(`${this.URL}/${id}`);
  }
  getAll(): Observable<Anime[]> {
    return this.http.get<Anime[]>(`${this.URL}/`);
  }
}
