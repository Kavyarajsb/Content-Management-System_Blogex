import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {


constructor(private http:HttpClient) { }

adminLogin(data:any){
console.log("in service compt",data);
return this.http.post("http://localhost:3000/admin/login",data)
  }

  GetPostAndCategory(){
    return this.http.get("http://localhost:3000/admin/landing")
      }
      createCategory(data:any){
    return this.http.post("http://localhost:3000/admin/addCategory",data)
      }
      viewCategory(){
        return this.http.get("http://localhost:3000/admin/viewCategories")
      }
      createPost(data:any,categoryTitle:any){
        return this.http.post("http://localhost:3000/admin/addPost/"+categoryTitle,data)
          }
      deletePost(id:any){
        return this.http.delete("http://localhost:3000/admin/deletePost/"+id)
      }
      viewPosts(categoryTitle:any){
        return this.http.get("http://localhost:3000/admin/viewPostsInCategory/"+categoryTitle)
      }
      deleteCategory(categoryName:any){
        return this.http.delete("http://localhost:3000/admin/deleteCategory/"+categoryName)
      }
      updateCategory(data:any){
        return this.http.put("http://localhost:3000/admin/updateCategory",data)
      }
      updatePost(data:any){
        return this.http.put("http://localhost:3000/admin/updatePost",data)
      }
      // deletePost(categoryName:any){
      //   return this.http.delete("http://localhost:3000/admin/deleteCategory/"+categoryName)
      // }
      viewLatestPost(){
        return this.http.get("http://localhost:3000/admin/viewLatestPost")
      }
      viewApost(postid:any){
        return this.http.get("http://localhost:3000/admin/viewApost/"+postid)
      }

  getToken() {
    return localStorage.getItem('admin-token');
  }

  // for auth guard
  loggedIn() {
    return !!localStorage.getItem('admin-token');
  
  }
 
}
