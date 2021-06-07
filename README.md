[DEMO LINK](https://KirillLutsenko.github.io/weather-widget/)

**Tasks:** 

In this project, you need to implement an advanced weather widget.

List of functions that must be implemented:

- The application must be able to show the weather for 7 days in advance
- The weather forecast should display: day of the week, day and month, temperature, humidity level, chance of rain, and type of day (cloudy, sunny, it is rainy )
- By default, the weather for today is selected, but the user has the opportunity
switch day by clicking on another day at the bottom of the page
- The application should be able to filter the days according to the specified criteria. (Day type: cloudy or rainy, minimum temperature, maximum temperature)
- After applying the filter, the application displays only those days that meet the specified criteria
- If there are no days available according to the specified criteria, you need to display the text According to the specified criteria no days available
- To work with time, you need to use the moment library
- Application must use data from API
- Data persistence in this project needs to be implemented using Redux
- The application must be able to work with the API

**Note**

- Checkboxes in the filter work like radio buttons, in other words, the day can be or cloudy or sunny
- Filter input can only accept numbers
- The application shows the current day on the first day of the week
- If the filter is applied, the maximum number of days to view on the screen should be no more than 7
- If the current filter selected more than 7 days, then on the screen you need to display
next 7 days
- The filter does not show the weather for the previous days on the screen. All the days that have been earlier today are considered previous.
- The API server returns an array of days from which you need to filter the days that
needed by the user on the screen
- API documentation: https://lab.lectrum.io/rtx/docs/weather/
- You don't need to cover your app with tests
- The application, in terms of its functionality, should correspond as much as possible to the reference versions
- Reference version: https://lab.lectrum.io/weather


**Description**
- Tech stack: React(hooks), Redux, BEM, CSS.
- All buttons are interactive

**Installing**
- Fork and clone this repository
- Run npm install in your terminal
- Run npm start

**Troubleshooting**
Any advise for common problems or issues. For any contributing or problem solving you could find me [here](https://www.linkedin.com/in/kirill-lutsenko-1ab7621bb/) and [here](https://join.skype.com/invite/pmxOlX8nMhpq)
