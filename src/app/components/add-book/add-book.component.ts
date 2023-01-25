import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms'
import { BooksService } from 'src/app/books.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private book:BooksService) { }
 addBook= new FormGroup({
  id:new FormControl(''),
  title:new FormControl(''),
  author:new FormControl('')}
 );
 
 message:boolean=false;
  ngOnInit(): void {
  }
save(){
  console.log(this.addBook.value);
  this.book.saveBook(this.addBook.value).subscribe((result)=>{
    console.log(result);
    this.message= true;
    this.addBook.reset({});
  });

}
removeMessage(){
  this.message=false;
}

}
