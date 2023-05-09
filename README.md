I start by importing the necessary libraries: React, useState (a hook for managing state in functional components), axios (a library for making HTTP requests), and Plotly (a library for creating charts).

We define a functional component called App, which represents our main application.

Inside the component, we define three pieces of state using the useState hook: data (an array representing the histogram data), loading (a boolean indicating whether the data is currently being fetched), and error (a string representing any error messages that occur during fetching).

We define a function called fetchData, which is called when the Submit button is clicked. Inside this function, we first set the loading state to true, and then make an HTTP GET request to the URL https://www.terriblytinytales.com/test.txt. If the request is successful.


## libraries

1. axios: we can use Axios in React to make HTTP requests to external APIs or servers.

2. react-plotly.js : we can use react-plotly.js to create a histogram in React. 


## The component initializes three state variables using the useState hook:

data: an array that will hold the data for the histogram to be displayed.

loading: a boolean that indicates whether data is currently being fetched or not.

error: a string that holds an error message if there was an error while fetching data.


## The component defines two functions:

fetchData: an asynchronous function that fetches the contents of a text file from a URL and calculates the frequency of occurrence of each word using regular expressions and loops. It then constructs the histogram data and sets the "data" state variable to it. If there is an error, it sets the "error" state variable with an error message.

exportCSV: a function that constructs a CSV file from the histogram data and allows the user to download it.


## The Plot component takes two props:

data: an array of objects that defines the data to be plotted on the histogram. Each object in the array represents a word and its frequency count.

layout: an object that defines the layout of the histogram. It includes the width, height, title, and axis titles.

## Output Images
![Web capture_9-5-2023_1113_localhost](https://user-images.githubusercontent.com/122161959/236927181-042fb354-1b10-4e96-b8c8-a75fb49e4b05.jpeg)

## Histogram
![Web capture_9-5-2023_1134_localhost](https://user-images.githubusercontent.com/122161959/236927225-81abc20e-0518-4e88-a028-b52c8bf2922b.jpeg)
## Click on Export button
CSV file will download.
## CSV file
![Screenshot 2023-05-09 015300](https://user-images.githubusercontent.com/122161959/236927239-01324af0-7181-4b1e-b01b-80a3dfc97d29.png)
