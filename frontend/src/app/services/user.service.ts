import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  public getUser(id) {

    if (!id){return false;}

    const headers = new HttpHeaders({
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlmY2FmZjcyZmM0NzE2YjlkM2M0ZTU4Y2Q1ZjdjYzNkOTJhNmU0M2M3NDQ2MTg1MDUxNjk3MWUwYWIyMDhhMjBmOTJiOTUyMjk2ZTZlZjk0In0.eyJhdWQiOiIyIiwianRpIjoiOWZjYWZmNzJmYzQ3MTZiOWQzYzRlNThjZDVmN2NjM2Q5MmE2ZTQzYzc0NDYxODUwNTE2OTcxZTBhYjIwOGEyMGY5MmI5NTIyOTZlNmVmOTQiLCJpYXQiOjE1NTM4MDMxNDEsIm5iZiI6MTU1MzgwMzE0MSwiZXhwIjoxNTg1NDI1NTQxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.SbGYZcn9DaziN1LJUqXoRZozV-DufEnuxGgXyMCShAluxARAWjjvHnsS9Uiudc8ImJJHi09PApaU79o_hAA9GlWtytpncLv8zdOPJKWhBURmwZDWZzefjePGIA_2nb76qufGSTMUk6GE5IsA8oPekHqKsmICLXO02k9LfUP0v_dR9ttu9989P2Drfjj4q2wgoZ5aFppwi0W7bDBZlWMlgbhB8eZve59hYXJV0e_H-wLB3WqiSF0c0_agaYxGnB8G_d-Ec2Nz8ulASd_wzhb-drPIURljNdrq45sRtb59aeAD-t5RYigPHgMAffj8cjYvERVlc91CzsnF0RgzFtlfRC2Fd1CeuEepvpZNUdupun56Q8D6nd3Rlb8A3_Qq0QwAHrNzyTTrmrAdxNcptUmTLH-Bn6hCLFMLhHfeQeMxY9WHkMA0FZ0llHnkr1naWZE-jiij3nMpZ0LZYAniwqiAQHt4bRqMraBp3aFbYjAhJlFLTT1TfMAHc_9g6Sf7Yh8uJOPL5WxU-wCv_XxNNTZKmL51t660HfGBOhTnU7xGVEFVxZMXSzUAP28gMy-4FmAmAKkcYZIm8RO3lRVZlNo9mUSsMOA2WvyQPIbqULpZfdUfGNrEsOyKsfaB1vX5mrJkGPhDjobAy4LrfrMTVYFfJlrQEoBk4wlQqycIk9Ti5vw',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    });

    return this.http.get('http://localhost:8000/api/users/'+id, {headers});
  }

}
