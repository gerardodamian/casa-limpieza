import { Category, IProducts } from "./../models/product.model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) {}

  public getAllProducts(): Observable<IProducts[]> {
    //devuelve un observable de productos
    return this._httpClient.get<IProducts[]>(`${this.baseUrl}`);
  }

  public getProduct(id: number): Observable<IProducts> {
    // devuelve un observsble de un producto
    return this._httpClient.get<IProducts>(`${this.baseUrl}/${id}`);
  }

  public getAllCategories(): Observable<Category[]> {
    // devuelve un observsble de categorias
    return this._httpClient.get<Category[]>(`${this.baseUrl}/categories`);
  }

  public newProduct(product: IProducts): Observable<IProducts> {
    return this._httpClient.post<IProducts>(`${this.baseUrl}`, product);
  }

  public updateProduct(id: number, product: IProducts): Observable<IProducts> {
    return this._httpClient.put<IProducts>(`${this.baseUrl}/${id}`, product);
  }

  public deleteProduct(id: number, product: IProducts): Observable<IProducts> {
    return this._httpClient.delete<IProducts>(`${this.baseUrl}/${id}`);
  }
}
