# Shoppies Nominator

A mock film awards nominator that allows the user to browse OMDB's API and nominate up to five movies. Built for a Shopify Frontend Developer challenge using Node.js, Express, Postgres, and React. 

## Deployment

Visit the app on Heroku at https://shoppies-nominator.herokuapp.com

## Set Up

To run the app locally, fork and clone this repository, `npm install`, then run `npm run start-dev`. 

## Notes

Due to time sensitive nature of this project, I had to make some compromises that I feel could be fixed given more time and effort. 

Two of the most prominent examples are the double renderings of the notification when five nominees are selected and the repeating animations of the nominees list each time a nominee is removed. Using React-Redux's connect function to keey components connected to the store is how they stay up to date, but it is also why these UX problems occur. 

I believe a solution for the nominees list animations could come from the animations library. Currently, the nominees rerenders each time a nominee is removed because this action triggers a DELETE request, then a GET request to the database. The new list of nominees from the GET request is then saved into the store in place of the previous list, and then the component rerenders upon this state change. Rendering components based off the store is unavoidable, so the better option is probably to animate the nominees only when the entire container div is rendered. 

As for the notifications, the double rendering of the component upon store change may have to do with how I manage my state. Each component that is connected to the store rerenders upon store change, but so do all of its children components. Thus, the notifications must only be activated on one rerender. Moving the notification function to the render method of the App component makes it the notification pop up once if there are already five nominees in the database. However if you start with four and nominate another movie, the notification pops up twice again. 