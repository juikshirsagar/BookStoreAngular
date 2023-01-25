import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms'
import { BooksService } from 'src/app/books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private book:BooksService , private router:ActivatedRoute) { }
  editBook= new FormGroup({
    id:new FormControl(''),
    title:new FormControl(''),
    author:new FormControl('')}
   );
   
   message:boolean=false;
    ngOnInit(): void {
      //console.log(this.router.snapshot.params['id'])
      this.book.getBookById(this.router.snapshot.params['id']).subscribe((result:any)=>{
        console.log(result);
        this.editBook= new FormGroup({
          id:new FormControl(''),
          title:new FormControl(result['title']),
          author:new FormControl(result['author'])}
         );
      })
    }
  update(){
    //console.log(this.addBook.value);
    this.book.updateBook(this.router.snapshot.params['id'],this.editBook.value).subscribe((result)=>{
      console.log(result);
      this.message= true;
      this.editBook.reset({});
    });
  
  }
  removeMessage(){
    this.message=false;
  }
  
}
