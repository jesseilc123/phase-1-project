# Pokemon Card Collector (PC^2)

Pokemon Card Collector is a website where you can buy and sell digital Pokemon cards! 

## Brief Summary

The site is designed for people to purchase and sell Pokemon cards. You have a collection of digital Pokemon cards stored on the website. You can buy a card by entering the prompted criteria in the form. Once purchased the card will now be part of your digital collection. But be warned, as you purchase cards your overall balance will go down. To combat this, you can sell your unwanted Pokemon cards from your collection at a click of a button! Once a card is sold it will be removed from your digital collection, however, your overall balance will increase!

## Key Features

Here are some key features:

    - An overall balance that changes dynamically 
    - Ability to buy/sell digital cards 
    - UI that displays digital collection
    - Cards display Pokemon name, type, and price

Technical features:

    - Use of Fetch requests to update website (GET, PATCH, DETELE)
    - A button that opens and closes the form to purchase a new card
    - The form will throw an error if the criteria is not filled
    - The form updates the db.json file when it is submitted
    - A button that sells your card which updates the db.json file
    - The balance updates the db.json when a purchase or sale occurs

## API Installation

In order to get the server running, make sure you have "json-server" installed. To do this you would type the following into the terminal. ```bash npm install -g json-server ``` Once installed you can then start the server by typing the following into the terminal. ```bash json-server  --watch db.json ``` You know the server will be up and running when you see the following lines appear.
```bash
 \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/pokemon
  http://localhost:3000/total-balance

  Home
  http://localhost:3000 
```
Once everything is up and running the website is ready to go!

## Disclaimer
All images used in this project have been taken from "TCG Player" (url: https://www.tcgplayer.com/). I do not own any rights to any of the images used or Pokemon that are included. No real purchases are being made nor any items actually being sold, everything is theoretical. The project is solely intended for educational purposes. The purpose for their inclusion is protected under fair use Article 107; used for teaching purposes. 
©2023 TCG Player and/or The Pokémon Company or their affiliated companies. All rights reserved. 