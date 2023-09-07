# eatn

This is eatn! Similar to an instagram clone, eatn is a photo sharing app where users can post their "phone eats first" moments. Add flair to give your post some extra spice!

![eatn screenshot](client/public/eatn_screenshot.png?raw=true)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Technologies](#technologies)
= [Stretch_Goals](#stretch_goals)

## Features

- User authentication and registration.
- Create a post with an Active Storage-handled image, caption, and flair!
- Post a comment under any post to let the poster know what you think.
- View a user profile with details about your account.
- Error handling and user-friendly messages.

## Installation

1. Clone this repository to your local machine:
   ```sh
   $ git clone https://github.com/brantae/eatn.git
2. Enter the directory and open in VSCode
   ```sh
    $ cd eatn
    $ code .
3. Install dependencies
   ```sh
   $ bundle install
   $ npm install
4. Start database. Open Ubuntu and type the first line to start it.        Check status with the next.
    ```sh
      $ sudo systemctl start postgresql
      $ sudo systemctl status postgresql
5. Start client and server
    ```sh
    $ rails server
    $ npm start --prefix client 

## Technologies

- React.js
- Ruby on Rails
- Semantic UI React
- PostgresQL

## Stretch Goals

Features to be added: dark/light mode toggle, post likes, character counts for caption & comments, comment editing, notification feed, password recovery, photo carousel, and updated styling.

