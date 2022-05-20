# [Minesweeper](https://github.com/scottc11/minesweeper)

I encourage you to clone the implementation of "minesweeper" I have been working on the past few weeks. It started as a programming test, and then I decided to just take it all the way. There is still a lot of work to do here, but the main functionality of the game is complete.

Next steps?

The idea is to improve the backend server (which handles all the game logic) so that it can handle saving and recalling game scores etc. Eventually I will create a websocket which funnels new game scores to the client app in the form of a leaderboard type thing. I will sort the game scores by date so people can see the best scores in the last hour, day, week, month, year, and all time.

I started a deploy to AWS, but the server side isn't quite ready yet. It still needs to be able to handle "game sessions". So based on a cookie, a user can only have one game session at a time - the game state will be store in memory on the server for a quicker response times, and once completed saved to the DB.