# Group 7

## Project Overview
Our initiative addresses a critical challenge faced by Computer Science students at Yale: the lengthy and unpredictable queues during office hours. Understanding that students' time is valuable and that efficient assistance is crucial for their academic success, we have developed an interactive platform that provides real-time information about OH wait times.

This platform is not merely an informational tool but a decision-making aid that empowers students to plan and manage their time effectively. By offering live updates and wait-time estimates, the solution ensures students can arrive at office hours with confidence, knowing exactly what to expect.

### Problem space
Our problem space pertains to the structure of office hours at Yale, specifically in the Computer Science department. Specifically, CS office hour queues at Yale can be long and unpredictable. Students often arrive at office hours and must wait in long queues, wasting precious time. Students also have no way of assessing the wait times at office hours before walking all the way to AKW.

### Task
1.Be provided with real time information about the queue lengths at office hours.

2.Receive an estimate on how long it will take for the ULA to get to their spot in the queue.

3.Identify sessions with low ULA to student ratio so that more ULA’s can be scheduled for those sessions.

## Project Dependency
We have encountered problems with pipenv that we weren't able to resolve even with the help of our TA, so we changed our strategy and now this code runs automatically, there is no need to install any dependencies. On the TV display the project runs automatically thanks to having an index.html file in the highest folder. 

## Constraints

1. Due to the backend server deployment issues, our project cannot show real-time data but this can be in the future solved with backend database support or remote connection to a backend server.
2. We are unable to get real-time information about which office hour sessions are being held in AKW, since we would need to reach out to professors to get that information. For the purposes of this prototype, the number of students and ULAs presented on the screen is just purely for example, not based on live data.
3. The entire program is based on the user standing in different places in front of the screen. The TV displays the distance you should be from the screen.
4. This program works best if there is only one person standing in the camera's view.

##  Collaboration Record

Bowen Duanmu: Write up base frontend pages, help solve display issues and write up README.md file
Ron Pile: Created Browser Cache alternative for the database. Helped troubleshoot server issues when the TV couldn't install our pipenv environment.
Debbie Lilly: Dealt with navigation issues between pages. Created countdown/timer functionality. Completed code related to connecting to the web socket and identifying human positions. Made some frontend adjustments.
Martin Vakoč: 

