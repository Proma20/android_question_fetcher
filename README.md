# AndroidQuestionFetcher

Angular based website that shows android related questions from stack overflow

## Installation of Project Prerequisites

### Setup NodeJS

- [NodeJS 10](https://nodejs.org/en/) for running the Angular project

### Setup Angular

- npm install -g @angular/cli

## Preparing Project for Development

```sh
# goto project root
cd YOUR_PROJECT_ROOT_DIRECTORY

# goto android-question-fetcher folder
cd android-question-fetcher

# install node dependencies
npm install

# start server
ng serve

# open your browser on "http://localhost:4200/"
```

### API used

In this project, stack exchange API has been used to collect data about stack overflow using a key. This key was given by stack app after the website was registered. 

### Platform and Browser used for Development
- This app has been developped in a windows 10 machine
- Google chrome was used for all testing purposes

### Features

- The start page shows 10 most recent questions of stack overflow on android. 
- There is a radio button that can be used to select "Most Voted". By selecting this option, the page will show 10 most voted Android-related questions that are created in the past week.
- Along with the question title, each element shows the date of creation, vote and link to the stack overflow site for that question.
- If one of the elements are clicked, the whole question statement along with the answers(if any) from the stack over flow question thread is shown.
- Each answer shows votes on the top.
- Return to the start page is possible by clicking the "Back to the question list" button.
- There is a "Sort by vote" button that can be used to sort the questions in ascending/descending order by vote. This can help to find out high/low voted questions easily.
