# Group 7

## Project Overview
Our initiative addresses a critical challenge faced by Computer Science students at Yale: the lengthy and unpredictable queues during office hours. Understanding that students' time is valuable and that efficient assistance is crucial for their academic success, we have developed an interactive platform that provides real-time information about OH wait times.

This platform is not merely an informational tool but a decision-making aid that empowers students to plan and manage their time effectively. By offering live updates and wait-time estimates, the solution ensures students can arrive at office hours with confidence, knowing exactly what to expect.

### Problem space
Our problem space pertains to the structure of office hours at Yale, specifically in the Computer Science department. Specifically, CS office hour queues at Yale can be long and unpredictable. Students often arrive at office hours and must wait in long queues, wasting precious time. Students also have no way of assessing the wait times at office hours before walking all the way to AKW. 

### Task
1.Be provided with real time information about the waiting times at office hours (not available due to backend server deployment issue)

2.Receive an estimate on how long it will take for the ULA to get to their spot in the queue

3.Identify sessions with low ULA to student ratio so that more ULA’s can be scheduled for those sessions

## Project Dependency
We have encountered problems with pipenv that we weren't able to resolve even with the help of our TA, so we changed our strategy and now this code runs automatically, there is no need to install any dependencies. On the tv display the project runs automatically thanks to having index.html file in the highest folder. 

## Constraints

1. The user should stand within 2 feet to activate the program
2. Due to the backend deployment issue with the TV server( it couldn't install our dependencies and spin up the flask server), our project can not show real-time data. We tried solving this with the TA's and they recognized it was more of the TV server management issue that our own. Therefore, we had to look for an alternative approach of storing and updating data in the browser.

but this can be in the future solved with backend database support or remote connection to backend server

##  Collaboration Record

Bowen Duanmu: Write up base frontend pages, help solve display issues and write up README.md file
Ron Pile: Created Browser Cache alternative to mimic a database. Helped troubleshoot server issues when the TV couldn't install our pipenv environment.

