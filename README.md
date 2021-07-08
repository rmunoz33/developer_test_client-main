# Front-End Developer Test

## Overview

Your client has tasked you with creating an application to view the people of the Star Wars
universe, with the following requirements:

- List people, with the ability to search by name
- View the details for a given person, including their film appearances and species

### Keep in mind the following questions

- What design patterns did you use?
- How would you test your application?
- How do you manage/store application state?
- What ways could you structure the code to make it easy to understand and maintain?
- What other considerations and tradeoffs did you make when building the application?
- How are you describing and typing API data?

## Getting Started

The starter app includes a minimal api layer and people list view. The API documentation can be found at https://swapi.dev and requires no extra setup.

### Running the app

The app was created via `create-react-app` and has everything you'll need to build and test.

Run the app with `yarn start` or `npm run start`.

Test the app with `yarn test` or `npm run test`.

## Submitting Your App

When you have completed your app, please create public repository and send us a link - GitHub, GitLab, BitBucket etc.

## Notes:

- Tried testing with Jest and mocks. Had trouble.
- React router to link to new pages
- CSS styling
- Learned types and interfaces for TypeScript
- Conditional rendering inside component return
- React TypeScript Hooks
- If I had more time:
  - Would add redux or React context for API data
  - Paginate list of people on first page
  - Figure out why mocks weren't working

This turned out to be trickier than I had initially expected. Having worked with JavaScript and React before, I was a little confused by the restrictions that TypeScript enforces at first. I did a lot of reading, watched a number of videos, and even took an [online course](https://frontendmasters.com/courses/react-typescript/) to bring myself up to speed on TypeScript. After a little while, I was able to wrap my head around the general concepts of how TypeScript works, and the benefits that it offers over standard JavaScript.

From there is was a matter of building out the app, piece by piece. I had admittedly never put testing into past React projects I've worked on (unfortunately, it wasn't something the bootcamp I took taught), and there is plenty more there for me to learn and practice with. As I noted above, with more time I believe there is a whole lot more I could add to the app. But although I took a little longer to complete it than I had initially hoped, I was able to make it functional and I'm happy that I learned a lot along the way.
