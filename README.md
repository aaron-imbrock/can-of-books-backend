# Can of Books

**Authors**: (alphabetically) Aaron Imbrock and Cisco Sanchez<br>
**Version**: 1.9<br>

## Check It Out

[Can Of Books](https://can-of-books99.netlify.app/)

## Overview

The CAN-OF-BOOKS-BACKEND project implements the REST API for [can-of-books-frontend](https://github.com/aaron-imbrock/can-of-books-frontend). It's built with Node.js, Express, and integrated with MongoDB for data storage needs.

Can of Books Backend provides an API for the managed list of books we've read, and intend to read in the near future.

## To build this yourself

### MongoDB Atlas

Create a cluster on [MongoDB Atlas](https://www.mongodb.com/atlas). When creating a cluster, the option "Shared" is free, and adequate for our needs.

### Clone this Repo

```bash
git clone git@github.com:aaron-imbrock/can-of-books-backend.git
cd can-of-books-backend
cp .env.sample .env
```

### Update dotenv

Update the `DB_URL` in the `.env` file with the link to your DB on MongoDB Atlas.

### NPM install and run

```bash
cd can-of-books-backend
npm install
```

### Seed your database

Review `seed.js` and update as you wish. We will use this to seed data to the database.
From the command line run:

```bash
$ node seed.js
Book1 was created...
Book2 was created...
Book3 was created...
```

## Architecture

The production backend is hosted on Render.com - https://can-of-books-backend-drf3.onrender.com
The front-end is currently written in React while the backend uses Node.js and Express, with data storage provided by MongoDB.

https://can-of-books-backend-drf3.onrender.com/books
![Web Request Response Cycle](./static/WRRC_CanOfBooks.png)

## Estimates

```bash
Name of feature: Set up repositories, logins, and Mongo Atlas.
Estimate of time needed to complete: 1 hour
Start time: 2pm
Finish time: 3pm
```

```bash
Name of feature: view the list of books on front-end
Estimate of time needed to complete: 2 1/2 hours
Start time: 3pm
Finish time: 6pm
```

```bash
Name of feature: 
Estimate of time needed to complete: 
Start time: 
Finish time: 
```

## Credit and Collaborations

- Cisco Sanchez [GITHUB](https://github.com/c0d3cisco)
- Aaron Imbrock [GITHUB](https://github.com/aaron-imbrock)

## Team Agreement

### Logistical

* What hours will you be available to communicate?<br>
12p-8p
* What platform will you use to communicate (ie. Slack, phone …)?<br>
Slack
* How often will you take breaks?<hr>
Every hour
* What is your plan if you start to fall behind?<br>
Start earlier to get help from TA. Pair programming. Use demo code from class when needed to outline next steps.

### Cooperative

* Make a list of each person’s strengths.<br>
Cisco - Core JavaScripts methods for manipulating data, diagram wire framing.<br>
Aaron - Context comprehension, deployment.<br>
* How can you best utilize these strengths in the development of your application?<br>
Understand each others strengths, and through pair programming, assist each other in areas of struggle. Continue to explain concepts of strengths as needed.<br>
* In what areas do you each want to develop greater strength?<br>
Cisco - Debugging deployed applications. General react design/CSS <br>
Aaron - Improve time to complete project requirement relating to existing working knowledge of React. Understanding the part databases play in web development.<br>
* Knowing that every person in your team needs to understand the code, how do you plan to approach the day-to-day development?<br>
We will pair program daily, taking turns between front-end and back-end development as this will allow continuous communication of ideas and methodologies for coding.

### Conflict Resolution

* What will your team do if one person is pulling all the weight while the other person is not contributing?<br>
Be upfront with each other. If problems persist, contact lead instructor.
* What will your team do if one person is taking over the project and not letting the other member contribute?<br>
Be upfront with each other. If problems persist, contact lead instructor.
* How will you approach each other and the challenge of building an application knowing that it is impossible for two people to be at the exact same place in understanding and skill level?<br>
Continue to have open communication during pair programming. Encourage questions.
