import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onUpload(event:any): void {
    let data = new FormData();
    data.append('file', event.target.files[0]);
    axios.post('http://127.0.0.1:5000/upload_file', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }).then((response) => {
      console.log(response)
      if(10<=0){
        document.getElementById("positive").style.display="block";
      }
      else{
        document.getElementById("negative").style.display="block";
      }
    }).catch((error) => {
      console.log(error)
    });
  }
}
