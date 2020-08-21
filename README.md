# Adam Mansell's neighborhood Project

### HTML, CSS, & JS Friday Project for Epicodus, 8/21/2020

## **By Adam Mansell**

## Description
This project contains an index.html file, a styles.css file, and a scripts.js file. By Using these files I was able to create my Neighborhood webpage which takes the user's input and creates an array. After creating this array my code will reaplce certain elements of the array with string values due to some exceptions I have written.

## Setup
Clone this repository.

Open the project files in your text editor.

To view a file in the browser:

Right click one file at a time & copy it's path.

Open your prefered internet browser and paste the file path to view the file.
(If using mac, after pasting link in search bar, check for "file" dropdown option before hitting return).

## Specs
Spec: The first for loop returns an array of numbers from 0 to the user's inputted number.
- Input: "5"
- Output: [0,1,2,3,4,5]<br>
________________________________

Spec: The first if statement will change any element with the value of 1 to "Beep!", unless it conatains the value 2, or 3 in it.
- Input: "12"
- Output: [0, "Beep!", 2, 3, 4, 5, 6, 8, 9, "Beep!", "Beep!", 12]<br>
________________________________

Spec: The first else if will change any element with the value of 2 to "Boop!", and any element with the value of 1 to "Beep!". It will also allow the second exception to take priority over the 1st.
- Input: "12"
- Output: [0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!"]<br>
________________________________

Spec: The second else if will change any element with the value of 3 to "Won't you be my neighbor?", any element with the value of 2 to "Boop!", and any element with the value of 1 to "Beep!". It will also allow the third exception to take priority over the 2nd.
- Input: "13"
- Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]<br>

## Technologies Used
For this exercise I used html, css, and js.

## Legal
_Copyright (c) 2020 Adam Mansell_


_This software is licensed under the MIT license._