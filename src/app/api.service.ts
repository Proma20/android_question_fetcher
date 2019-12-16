import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  
  getQuestionsByLatest() {
    return this.httpClient.get('https://api.stackexchange.com/2.2/questions?page=1&pagesize=10&order=desc&sort=creation&tagged=android&site=stackoverflow&key=JqA3ibdsAAg)FcsyeyIuEg((');
 }  

  getQuestionsByVote() {
    let dateTime = new Date();
    let to = Math.floor(dateTime.valueOf()/1000);
    let from = to - (7*24*3600);
    let url = 'https://api.stackexchange.com/2.2/questions?page=1&pagesize=10&fromdate='+from+'&todate='+to+'&order=desc&sort=votes&tagged=android&site=stackoverflow&key=JqA3ibdsAAg)FcsyeyIuEg((';
    return this.httpClient.get(url);
  }  

  getQuestionStatement(Id){
    let url = 'https://api.stackexchange.com/2.2/questions/'+Id+'?site=stackoverflow&filter=withbody&key=JqA3ibdsAAg)FcsyeyIuEg(('
    return this.httpClient.get(url);
  }

  getThreadForQuestion(Id) {
    let url = ' https://api.stackexchange.com/2.2/questions/'+Id+'/answers?order=desc&sort=votes&site=stackoverflow&filter=withbody&key=JqA3ibdsAAg)FcsyeyIuEg((   '
    return this.httpClient.get(url);
  }

}
