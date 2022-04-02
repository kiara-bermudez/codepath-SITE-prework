# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Kiara Bermudez

Time spent: 4:12 hours spent in total

Link to project: https://band-dirt-tartan.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://github.com/kiara-bermudez/codepath-SITE-prework/blob/main/winning-game.gif)
![](https://github.com/kiara-bermudez/codepath-SITE-prework/blob/main/losing-game.gif)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
-	https://www.w3schools.com/js/js_arrays.asp
-	https://www.w3schools.com/js/js_random.asp
-	https://teamtreehouse.com/community/how-do-i-print-array-variables-in-consolelog
-	https://www.w3schools.com/cssref/css_colors.asp
-	https://www.w3schools.com/css/css_font_size.asp
-	https://stackoverflow.com/questions/471510/hide-text-using-css
-	https://flagcdn.com/
-	https://www.w3docs.com/snippets/css/how-to-change-input-and-button-images-with-css.html
-	https://www.rapidtables.com/web/css/css-color.html
-	https://www.w3schools.com/js/js_events.asp


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
One of the challenges that I faced in the development of this project occurred when I was doing the optional task of sprucing up the game buttons. My original idea had been to add images of world flags to all of the buttons, so that the game could function as a flag memorization game. The buttons would look like the world flags and when they were clicked, the name of the country would show. However, I had to adjust my idea after I encountered some problems. 
Firstly, I had to find the images and get them to show on my website. Considering world flags are pretty common images, I thought it would be easy. However, I didn’t realize that I would have to account for the quality and size of the image, the usage rights and actually putting them on my buttons. The first images I attempted to add to my assets folder ended up looking too grainy and they weren’t the size I wanted them to be for my buttons. I also ended up encountering images that I would have had to pay for or weren’t meant for websites. After much searching and trial and error with multiple sites, I found a website that allowed me to use the image as a background for my button without needing to add it to my assets folder, as they had a cdn-api of flag images that allowed me to directly embed my images using the url. 
Next, I had to figure out how to add text to my buttons and get rid of the text when the button was clicked. This was the part of this challenge where I had to rework my idea because, while searching for this solution, I realized that it would be easier if I made it so that the buttons initial state was the country name and state of the button when clicked would be the image of the flag. Therefore, I switched the css code for the buttons and the buttons:active. Afterwards, I added the country names to the buttons. Then, with the help of stack overflow, I found that an easy way to hide text when a button is clicked, is to just make the font-size 0 so that the text is essentially hidden.
Overall, this challenge took me some time to figure out, but with the help of some useful websites and adaptability, I was able to solve my problems and get my buttons looking better than ever!


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
One thing I am curious about after completing this project is how websites obtain and manage a large amount of images. In this project, I used 8 images, one for each of my buttons. Through that, I had to individually acquire the url to each on of these images. How do websites that need to handle entire databases of images and assets go about using them efficiently?
Another question I have is how you get your website actually running on the internet. I didn’t realize that glitch actually made a website that other people could access. When I had my friend use my url to access the website I made, she was actually able to play my game! I though this was amazing and I wonder about what goes on behind the scenes to make this actually work.
Finally, I would like to know more about usage rights and the legalities behind using images, files and other things from other people and websites. When I was searching for images for this project, I saw many websites that required you to pay to use their pictures commercially and I saw that some images were marked under creative commons or commercial licenses. I would like to know what do these licenses and usage rights mean to me as a future web developer and what repercussions can they have on me and I create more websites?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
During the development of this project, there were numerous ideas that I thought of that I was not able to implement in the time I had. Regarding the layout and design of the website, I would have liked to have prettied up the website more. Adding an image as a background, better fonts and colors for the buttons, and a better looking start button would allow the website to look more appealing. Regarding the gameplay, I would have liked to add multiple difficulty levels, the ability to change the number of buttons in the game, and the option to only allow the pattern to be played once. Furthermore, regarding how my world flags affect the game, I would have liked to make it so that the world flags used in the game would be randomized each time or allow the player to choose which flags they would like to use in the game, so that it could be used as a more effective memorization game. I would also like to change the audio so that when the button was pressed, it would say the name of the country the flag belonged to. If I had time, I would even try to make it so that it could be spoken in multiple languages so that you could use it not only to learn more world flags but to also learn a language. Brainstorming for this project was a lot of fun and if I have the chance, I would definitely enjoy coming back to actually implement these improvements!



## Interview Recording URL Link

[My 5-minute Interview Recording](https://loom.com/share/a5df9dda9e7745cba98427b1ea390d62)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
