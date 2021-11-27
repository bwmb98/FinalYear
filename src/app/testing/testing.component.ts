import { Component, OnInit } from '@angular/core';
import axios from 'axios';



@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  displayResult =false
  disease:string;
  url:any
  data=new FormData();
  constructor() {
    this.disease=''
   }
  ngOnInit(): void {
    this.displayResult = false;
  }
  onUpload(event:any): void {
    axios.post('http://127.0.0.1:5000/upload_file', this.data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }).then((response) => {
      this.disease=response.data
      this.displayResult=true
    }).catch((error) => {
      console.log(error)
    });
  }
  onChoose(event:any):void{
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url = event.target?.result;
      };
    } 
    if(this.data.has('file')){
      this.data.delete('file')
    }
    this.data.append('file', event.target.files[0])
  }
  back():void{
    this.displayResult=false
  }
}
