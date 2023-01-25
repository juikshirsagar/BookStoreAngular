import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BooksService {
 url='http://localhost:3000/books';
  constructor(private http:HttpClient) { }

  getAllBooks(){
   return this.http.get(this.url);
  }

  saveBook(data:any){
console.log(data);
return this.http.post(this.url,data);
  }

  deleteBook(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }

  getBookById(id:any){
    return this.http.get(`${this.url}/${id}`)
  }

  updateBook(id:number,data:any){
    return this.http.get(`${this.url}/${id}`,data)
  }
}
