# Dungeon Simulator

This project is a dungeon simulator for world's oldest role playing game. It enables people to play a dungeon crawl type of game with friends without the need for a dungeon master or as a solo adventure alone.

This repository consists of Reagent application (React wrapper for ClojureScript) to create the online simulator.

#### Architecture

When you load the app, router matches requested uri to a page component. Matched route can also trigger actions.

All pages are state-aware. Components use only passed properties and modify state by calling actions. 

Actions modify application state which propagates to all affected components.


               +----------------------------------+
               |                                  |
               |                                  +
    Core --+ Router --+ Page --+ Component --+ Action --+ State --+ 
                          +                                       | 
                          |                                       | 
                          +---------------------------------------+

#### Requirements

1. Install Leiningen
2. Install Java SDK 8 or later
3. Learn Clojure and ClojureScript

#### Code with hot reloading

    $ lein figwheel

Open your browser at http://localhost:3449

#### Create self-contained package

    $ lein uberjar
    
    $ java -jar dungeon-simulator.jar    

Fire up your browser at http://localhost:3000 and kaboom!

#### More information on Reagent

https://reagent-project.github.io
