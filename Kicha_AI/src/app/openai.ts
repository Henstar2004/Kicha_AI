import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Openai {
  

  constructor(private http:HttpClient){}
  
  sendToSearch(text: string) {
  return this.http.post<any>(
    'http://localhost:8080/search',
    { prompt: text }   
  );
}

// getChatHistory() {
//   this.http.get<any[]>('http://localhost:8080/api/ai/listchat')
//     .subscribe(res => {
//       console.log('All chat history:', res);
//     });
// }


getChatHistory() {
 return this.http.get<any[]>('http://localhost:8080/listchat')
    
}

 kichahome = true;
  kichacontainer = false;
  kichaSettings = false;
  kichaContact = false;
getpagedata(){
  const data ={
     kichahome : true,
  kichacontainer : false,
  kichaSettings : false,
  kichaContact : false,
  }
}
  
}
