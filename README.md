# BELO

![](https://travis-ci.com/crianonim/Belo-News.svg?branch=master)
[![codecov](https://codecov.io/gh/crianonim/Belo-News/branch/master/graph/badge.svg)](https://codecov.io/gh/crianonim/Belo-News)

# BELO Week 5

[Tony](https://github.com/tonylomax)
[Jan](https://github.com/crianonim)
[Emmanuel](https://github.com/emaggy)
[Gregor](https://github.com/Albadylic)
![](https://i.imgur.com/KczIls3.jpg)


## Installation Instructions

```
npm install
```

The project requires you to have a file `.env` in main directory like:

```
export API_KEY=bababacafe666
```

or have environment variable API_KEY set in some other manner (ie. Config Vars in Heroku)
It has to contain actual key from newsapi.org


### Test coverage instructions (manual)

Before running the first test please initialise nyc running:

```
npx nyc npm test
```
then when on master branch:
```
npm run report-coverage
```
That will create the report and upload to CodeCov and update our badge

### Design and Architecture

- Design was kept simple as this was basic news app.
- App architecture was kept the same as previous projects with public, src and test folders.
- All developers have a local .env file to access the api key, the built app uses the key stored securely in Heroku.
- Design for article tiles below >

![](https://i.imgur.com/0CHdggb.jpg)

### Work plan

#### Wednesday

##### Tony + Jan

- Static file server
- Testing file server with `supertest`
- Travis CI setup

##### Emmanuel + Gregor

- Request function
- Deploy to Heroku

#### Thursday

##### Jan + Emmanuel

- Pure functions and their tests

##### Tony + Gregor

- Front end API call to back end
- API call on back end using function

##### Tony + Emmanual

- DOM manipulation
- Rendering the articles to the DOM using 'bem' classes created by Gregor and Jan

#### Jan + Gregor

- HTML + CSS styline including grid templates and class names

## TASKS

- [x] Set up Travis
- [x] project files structure/architecture
- [x] static assets server
- [x] Home routing
- [x] Route handler for querying the server from frontend
- [x] Handler for API call
- [x] Pure js functions to filter API response
- [x] Testing testing testing
- [x] Decide on front end design + rendering of API response
- [x] Create DOM manipulation functions
- [x] Populate with DOM
- [x] CSS
- [x] Real world design

## Goals: 🙌

- [x] - Use at least 1 API
- [x] - At least 2 server routes
- [x] Make your API calls from the back-end using the Request module (or one you build yourself)
- [x] Your server should contain a minimum of 2 routes
- [x]Tests: pure functions; back-end and front-end logic. We don't expect tests on the DOM.
- [x] Test your server routes by injecting fake HTTP requests using Supertest (including testing for 404's). Note - you are not required to test any server route that makes an API call, as this will make the test impure (a test that depends on an external factor is not reliable)
- [x] Host your project on Heroku, see resources

- [x] Use module.exports and require to break a single large server file into smaller modules.

- [x] Consider a good server file structure based on what we have discussed over the week.

- [x] Employ continuous integration on your project with Travis or a similar tool. (If you decide to use Travis, we strongly recommend that you host this project in your own repo rather than in your cohort's FAC repository to avoid all builds getting queued together)

- [x] Use CodeCov or a similar tool to report and track test coverage.

- [ ] Include Error Handling. For example: if a user attempts to make a request to a non-existent route to your server (404 - as mentioned above), provide the user with a custom response. if there is a programmer error on your server (e.g. a handler function does not act as intended), provide the user with a custom response (500 status code).
- [ ] Include a user input field on your web app and include server-side validation to protect your server from potentially malicious user input.
- [x] Display continuous integration and code coverage badges on your project README.

## Stretch goals

😊:
- [x] Research and use Nock to mock the response of external API calls in your tests, and write tests for server routes that make API calls.

- [ ] Create a route and functionality for a POST request. _(Not needed with our API)_

## Our API

[News API](https://newsapi.org/)

- Enter in a keyword for category and get latest news stories.

## Problems we had 🙄

- Use Travis.org, not .com
- Travis can be checked on each branch or when committing to master
- import { isMainThread } from "worker_threads"; - this was a result of VSCode auto complateing an entire import which broke the API call. 😩

- On first integration of DOM functions and CSS classes the design went all wrong because of an error with class names - quickly fixed.
  - Refer to class names!

![](https://i.imgur.com/2DipuCZ.png)

## What we learned 🤓

- Got more comfortable with Node generally and backend API calls
- Supertests for the server
- DOM manipulation with API response data
- Integrating Tarvis CI with GitHub and Heroku
- Use https module
- Manually create a code coverage reports and integrate that with CodeCov
- Kim Kardashian is changing her shapewear brand name after uproar


