import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  constructor(private book:BooksService) { }

  bookData:any=[];
  ngOnInit(): void {
    this.book.getAllBooks().subscribe((allData)=>{
      console.log(allData);
      this.bookData=allData;
    });
  }

  deleteBook(book_id:any){
    //console.log(book_id);
    this.book.deleteBook(book_id).subscribe((result)=>{
      //console.log(result);
      this.ngOnInit();
    })
  }
}
