# Shoppies Nominator

A mock film awards nominator that allows the user to browse OMDB's API and nominate up to five movies. Built for a Shopify Frontend Developer challenge using Node.js, Express, Postgres, and React. 

## Deployment

Visit the app on Heroku at https://shoppies-nominator.herokuapp.com

## Set Up

To run the app locally, fork and clone this repository, `npm install`, then run `npm run start-dev`. 

## Notes

Due to the time sensitive nature of this project, I had to make some compromises that I feel could be fixed given more time and effort: 
- Animations run every time a nominee is removed
  - This is an issue with the animation library used (Framer-Motion) and how I am representing the nominees from state. Every time a nominee is removed, a DELETE request is sent to the database, followed by a GET request, which is then dispatched to the redux store. Since my components are connected to the store by React-Redux, any change in the store will trigger a rerender, which is why the animations replay. 
  - Although I couldn't find a solution to this in the Framer-Motion documentation, I feel that there might be a way to have the animations trigger only when the entire app rerenders, instead of the Nominees component. 
- Notification banner
  - Although the notification banner is functional, it lacks any interactivity or real styling. Originally I used a notification library called Toastify, which would place a styled notification with a close button, timer stripe, and animations. However, this notification library uses a function, so it works best on events such as a click or submit. When I tried to invoke the function on a conditional about the state, the app would rerender twice, activating the notification twice. 
  - I wasn't able to find a workaround in time, so I decided to go with the simple custom notification banner. 
