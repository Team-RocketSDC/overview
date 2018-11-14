# YumpSf

> A Yelp item page clone.

## Related Projects

  - https://github.com/YumpSf/popular-dishes-and-full-menu
  - https://github.com/YumpSf/repo/reservation-hours
  - https://github.com/YumpSf/repo/Recommended-Reviews-Module

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#Requirements)
1. [Development](#development)

## Usage

> Seed the database on the console using npm run seed.
> Default configuration for database seeding is that mySql has no password
> and a root user. Reconfigure in package.json to match your mysql specs.
> Use npm run compile to launch webpack.
> Use npm start to host the server. Default port is 9001.
> type in localhost:9001/[1-100] (any number between 1-100) to visit the page
> corresponding to that restaurant.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## CRUD Endpoints
| Action    | Method | Endpoint                                                       | Purpose              |
|-----------|--------|----------------------------------------------------------------|----------------------|
| Create    | POST   | /api/restaurants			                              | Create new restaurant|
| Create    | POST   | /api/images			                              | Create new image     |
| Read      | GET    | /api/:id 			                              | Get a restaurant     |
| Update    | PUT    | /api/restaurants/:id 					      | Update restaurant    |
| Delete    | DELETE | /api/restaurants/:id			                      | Delete a restaurant  |
| Delete    | DELETE | /api/images/:id				                      | Delete an image      |
