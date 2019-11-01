# **Astrology Quiz**


### **Contents**
1. Purpose
2. User Stories
3. Wireframes
4. Tech


## **Purpose**
________________
<u>Goal</u>

The growing popularity of astrology as a means to self-knowledge rather than a deterministic portrayal of one's fate is an empowering shift in self-help and pop psychology. Rather than taking for granted what experts tell us, everyday people are seeking resources for self-led study. This quiz is for early students of astrology to familiarize themselves with images that portray the signs and planets within a natal chart, also known as glyphs. Reading glyphs is an essential component to interpreting and understanding one's natal chart.

<u>Rules</u>

The quiz consists of twelve questions - one of reach sign of the zodiac. On each of the twelve quiz pages, the user will be presented with a glyph of a sign alongside a brief description of the image and its corresponding sign. 

<u>Challenge</u>

The user will have fifteen seconds to choose between four options. The quiz has a maximum duration of three minutes. 

<u>Interaction</u>

At the end of the quiz, the user will receive a score, a rank and links to additional resources to further their studies depending on their score.

## **User Stories**
________________
Landing Page | Overview Page | Quiz Pages | Results Page
-------------|---------------|------------|-------------
User clicks anywhere to begin. | Clicking the Landing page takes the user to an overview page, detailing the purpose of the game, an introduction to astrological terminology and a description of the game's structure. After reading, the player clicks a button to begin the timed quiz. | Randomly generated page from one to twelve, prompting user to match glyph to corresponding sign in zodiac. A timed countdown gives user fifteen seconds to answer. | Provides user their score and an associated rank (beginner / novice / intermediate / expert). Provides them with resources for further astrological research, depending on their rank.

## **Wireframes**
________________

**Landing**

![Landing page wireframe](/assets/wireframe/landing.JPG)

**Overview**

![Overview page wireframe](/assets/wireframe/overview.JPG)

**Quiz**

![Quiz page wireframe](/assets/wireframe/quiz.JPG)

**Results**

![Results page wireframe](/assets/wireframe/result.JPG)

## **Tech**
________________


Page | HTML | CSS | Javascript | Assets 
-----|------|-----|------------|-------
Landing | ```<img id="landing"> <div id="welcome"> <div id="click">```| flexbox | event listener for entire page | 12 zodiac glyph images
Overview |
12 Quiz | ```<radio>``` | | |
4 Results | | | | 




## **Stretch Goals**
________________
* Hints
* Different levels / user chooses timer countdown length
* Quiz for 7 traditional planets
* Disabling other tabs during quiz runtime?