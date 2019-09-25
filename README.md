# DoggieFriendFinder
A fun matching app that will help you find your new best friend.


In this activity, I'm attempting to build a  compatibility-based "FriendFinder" application for dog to dog or human (hooman) to dog -- basically a personality matching app. This full-stack site will take in results from user surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.
I am using Express to handle routing. My app has been deployed to Heroku so other users can fill it out.

Heroku Link:  https://doggiefriendfinder.herokuapp.com/

App File Structure:
  ```
  DoggieFriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```
