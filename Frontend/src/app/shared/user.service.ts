import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  SignupUser(data:any){
    console.log("in service compt ",data)
    return this.http.post("http://localhost:3000/user/signup",data)
  }
  userlogin(data:any){
    console.log("the data is",data)
    return this.http.post("http://localhost:3000/user/login",data)
  }

  viewAllPost(){
    return this.http.get("http://localhost:3000/user/viewAllPost")
  }
  viewLatestPost(){
    return this.http.get("http://localhost:3000/user/viewLatestPost")
  }
  
  viewCategory(){
    return this.http.get("http://localhost:3000/user/viewCategories")
  }
  createPost(data:any){
    return this.http.post("http://localhost:3000/user/addPost",data)
      }
  deletePost(id:any){
    return this.http.delete("http://localhost:3000/user/deletePost/"+id)
  }
  viewPostsInCategory(categoryTitle:any){
    return this.http.get("http://localhost:3000/user/viewPostsInCategory/"+categoryTitle)
  }
  updatePost(data:any,id:any){
    return this.http.put("http://localhost:3000/user/updatePost/"+id,data)
  }
  viewYourPost(email:any){
    return this.http.get("http://localhost:3000/user/viewYourPost/"+email)
  }
  viewApost(postid:any){
    return this.http.get("http://localhost:3000/user/viewApost/"+postid)
  }

  getToken() {
        return localStorage.getItem('user-token');
      }
    
      // for auth guard
  loggedIn() {
        return !!localStorage.getItem('user-token');
      }

}
