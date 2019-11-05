# **Astrology Quiz**


### <a name="home"></a> **Contents**
1. [Purpose](#purpose)
2. [User Stories](#userstories)
3. [Wireframes](#wireframes)
4. [Tech](#tech)
5. [Stretch Goals](#stretch)


## <a name="purpose"></a> **Purpose**
________________
<u>Goal</u>

The growing popularity of astrology as a means to self-knowledge rather than a deterministic portrayal of one's fate is an empowering shift in self-help and pop psychology. Rather than taking for granted what experts tell us, everyday people are seeking resources for self-led study. This quiz is for early students of astrology to familiarize themselves with images that portray the signs and planets within a natal chart, also known as glyphs. Reading glyphs is an essential component to interpreting and understanding one's natal chart.

<u>Rules</u>

The quiz consists of twelve questions - one of reach sign of the zodiac. On each of the twelve quiz pages, the user will be presented with a glyph of a sign alongside a brief description of the image and its corresponding sign. 

<u>Challenge</u>

The user will have fifteen seconds to choose between four options. The quiz has a maximum duration of three minutes. 

<u>Interaction</u>

At the end of the quiz, the user will receive a score, a rank and links to additional resources to further their studies depending on their score.

[top](#home)

## <a name="userstories"></a> **User Stories**
________________
Landing Page | Overview Page | Quiz Pages | Results Page
-------------|---------------|------------|-------------
User clicks anywhere to begin. | Clicking the Landing page takes the user to an overview page, detailing the purpose of the game, an introduction to astrological terminology and a description of the game's structure. After reading, the player clicks a button to begin the timed quiz. | Randomly generated page from one to twelve, prompting user to match glyph to corresponding sign in zodiac. A timed countdown gives user fifteen seconds to answer. | Provides user their score and an associated rank (beginner / novice / intermediate / expert). Provides them with resources for further astrological research, depending on their rank.

[top](#home)

 ## <a name="wireframes"></a>**Wireframes**
________________

**Landing**

![Landing page wireframe](/assets/wireframe/landing.JPG)

**Overview**

![Overview page wireframe](/assets/wireframe/overview.JPG)

**Quiz**

![Quiz page wireframe](/assets/wireframe/quiz.JPG)

**Results**

![Results page wireframe](/assets/wireframe/result.JPG)

[top](#home)

## <a name="tech"></a> **Tech**
________________

Page | HTML | CSS | Javascript | Assets| Keywords To Research
-----|------|-----|------------|-------|-----------
Landing | ```<img id="landing"> <div id="welcome"> <div id="click">```| flexbox | DOM Manipulation to generate all 18 pages through one html file | 12 zodiac glyph images | section display none; turn off sections html javascript; toggle display none and flex
Overview | | | update style; cache elements; event listeners | 
12 Quiz | ```<radio>``` | | create objects for stored correct responses and user-generated objects for player responses; ```let playerScore = []```; callback functions |
4 Results | | beginner;novice;intermediate;expert| | 

[top](#home)


## <a name="stretch"></a> **Stretch Goals**
________________
* Hints
* Different levels 
    + Different timer countdown runtimes
    + More/less challenging clues
* Quiz for 7 traditional planets
* Disabling other tabs during quiz runtime?
* A skip question button that turns into the next question button after user answers q
* Add a progress bar
* Make it impossible for user to advance without answering present question

[top](#home)