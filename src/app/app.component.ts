import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'online_education';
  courseList: any[] = [];
  http = inject(HttpClient);
  courseObj: any = {
    title: '',
    body: '',
    userId: 1,
  };
  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res: any) => {
        debugger;
        this.courseList = res;
        console.log(res);
      });
  }

  onSubmit() {
    this.http
      .post('https://jsonplaceholder.typicode.com/posts', this.courseObj)
      .subscribe(
        (response) => {
          alert('Post created successfully!');
          console.log('Post created successfully!', response);
          this.courseObj.reset();
        },
        (error) => {
          console.error('Failed to create post', error);
        }
      );
  }
}
