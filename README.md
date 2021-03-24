# Pre-work - _Simon Says_

**Simon Says** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Samir Jaber**

Time spent: **1.75** hours spent in total

[Link to project](https://glitch.com/edit/#!/yielding-wooded-hardware)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

[Winning Simon Says Video](https://youtu.be/guTuolBm24o)

<img src = 'http://g.recordit.co/tuD8YJ7X0o.gif' width = 250> <img src = 'http://g.recordit.co/P6sBlvIDT2.gif' width = 250> <img src = 'http://g.recordit.co/fNMq6S0na5.gif' width = 250><br>



## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

      **The outside resources that I've technically used was what I remembered from when I was learning ReactNative and JavaScript back in senior year of high school and a lot of help from w3schools.com for the optional features. I also went for a quick google search to remember how Math.random() works in JS on developer.mozilla.org.**

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

      **I've encountered quite the challenges for the optional features in this project, though, my biggest would be building the time limit. This one did some numbers on me, mainly because of how there were separate functions for startGame(), playClueSequence(), and guess(). So, I had to take my hands off the keyboard for a second and actually try to visualize the algorithm more carefully in my head so I could know where to add a timer function in this project. It didn’t click right away since I had to also go and understand how setInterval and clearInterval actually works. After doing my research, I realized that the most reasonable function to use it in is after the for loop in my playClueSequence() function. After doing so, it started working a little, until I realized that there was an issue with how fast timer is going and how it starts right at the first clue of every sequence instead of at the last clue of every sequence right after the clueHoldTime is finished. So what I did was go researching spree for different methods to do this. One of those methods was to use setTimeOut but that that didn’t work out since I wasn’t able to access the timer to clearInterval whenever stopGame() was called which means that the timer will go on forever if you win the game or stop the game; the only way stop the timer was to lose game by timing out. A different method that I tried was to create a sleep function, which would essentially make the program sleep, then call it inside of playClueSequence(). Even though that would solve my clearInterval problem, it still comes with another problem which is the delay it has on my clear button. Because of time, I had to use a method that I wasn’t super proud of, but it ultimately solves my problems. Which is to increment the time by 7 each time the user completes the sequence correctly and make the milliseconds in setInterval to 1500 instead of 1000 since the game was essentially counting down in a very lagging manner. I also graciously made the timer to increment by 5 on each strike.**

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

      **To be honest, my question is how much more can I do? I’m really hoping to get this internship so I can see what’s everyone so psyched about. A lot of the times when I find my friends speaking about web development, and I just feel like it’s kind of lame at times. I’ve always thought that it’s just decorating your site to make it look appealing then adding some basic logic in the backend, but I’m not going to lie, working with JavaScript with this project has truly caught my eye. I actually found some joy working on this project. I feel like I truly underestimated web development because of this project, and I’m really looking forward to this internship to show me more. That’s why my question is how much more can I do with web development.**

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
      **If I had more time, I would add a feature which would have options for the difficulty level that’s dependent on both the count down timer and the clueHoldTime; something like that shouldn’t take long. I would make my code look cleaner and the frontend design look more appealing by researching some nice templates on how they were made. I would also add a survival mode where the user can go on forever until they just lose the game and since we’re on the survival mode topic, I would add an online leaderboard for scores, a nice chart would do the job, though, adding the survival mode feature with a leaderboard would probably take more than a few more hours for an amateur like me. But I still have an idea for how it would work since I’m currently taking the IOS development course at CodePath and we recently learned how to work with parse using Back4app, an open-source backend as a service provider, so I believe that to use an online leaderboard would work something along the lines of that.**

## License

    Copyright [Samir Jaber]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
