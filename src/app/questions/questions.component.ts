import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { templateJitUrl } from '@angular/compiler';
import { JsonPipe } from '@angular/common';
import { element } from 'protractor';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  
  items;
  questionDetails;
  questionStatement;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.questionByLatest();
  }

  questionByLatest(){
    this.apiService.getQuestionsByLatest().subscribe((data)=>{
      this.items = data['items'];
      this.items.forEach(element => {
        element.creation_date = new Date(element.creation_date*1000);
      });
    });
  }

  questionByVote(){
    this.apiService.getQuestionsByVote().subscribe((data)=>{
      this.items = data['items'];
      this.items.forEach(element => {
        element.creation_date = new Date(element.creation_date*1000);
      });
    });   
  }

  sortQuestions(){
    if(document.getElementById("descending")){
      this.items.sort((obj1, obj2) => {
        if (obj1.score > obj2.score) {
            return -1;
        }
    
        if (obj1.score < obj2.score) {
            return 1;
        } 
        return 0;
      });
      document.getElementById("descending").innerHTML = "Sort by vote Ascending";
      document.getElementById("descending").id = "ascending";
    }
    else{
      this.items.sort((obj1, obj2) => {
        if (obj1.score > obj2.score) {
            return 1;
        }
    
        if (obj1.score < obj2.score) {
            return -1;
        } 
        return 0;
      });
      document.getElementById("ascending").innerHTML = "Sort by vote Descending";
      document.getElementById("ascending").id = "descending";
    }
  }

  showThread(Id){
    this.hideElements();
    document.getElementById("question-thread").classList.remove("hide-elements");
    document.getElementById("back-button-container").classList.remove("hide-elements");
    this.apiService.getQuestionStatement(Id).subscribe((data)=>{
      let header = document.createElement("h2");
      document.getElementById("question-thread").appendChild(header);
      header.innerHTML = "Question";
      this.questionStatement = data['items'][0];

      let tempDiv = document.createElement("div");
      tempDiv.classList.add("card-question");
      tempDiv.classList.add("card-1-answer");
      tempDiv.innerHTML = "<h3>"+this.questionStatement.title+"</h3>"+this.questionStatement.body;

      document.getElementById("question-thread").appendChild(tempDiv);  
      this.showAnswerThread(Id);
    });   
  }

  showAnswerThread(Id){
    this.apiService.getThreadForQuestion(Id).subscribe((data)=>{
    let header = document.createElement("h2");
    document.getElementById("question-thread").appendChild(header);  
    this.questionDetails = data['items'];
    let ansCount = 0;
    this.questionDetails.forEach(element=>{

      let tempDiv = document.createElement("div");
      tempDiv.id = element.answer_id;
      tempDiv.classList.add("card-answer");
      tempDiv.classList.add("card-1-answer");
      tempDiv.innerHTML = "<p><b>Votes: "+element.score+"</b></p>"+element.body;
      
      document.getElementById("question-thread").appendChild(tempDiv);
      ansCount++;
    })

    if(ansCount!=0)
      header.innerHTML = "Answers";
    else
      header.innerHTML = "No Answers Found";
    });
  }

  hideElements(){
    document.getElementById("questions-container").classList.add("hide-elements");
  }

  backToList(){
    document.getElementById("question-thread").classList.add("hide-elements");
    document.getElementById("back-button-container").classList.add("hide-elements");
    document.getElementById("question-thread").innerHTML = '';
    document.getElementById("questions-container").classList.remove("hide-elements");
  }

}
