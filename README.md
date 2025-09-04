# FewTube

FewTube is a video streaming application inspired by YouTube. It allows users to browse, search, and watch videos in a user-friendly interface. The project aims to provide core video streaming functionality and a UI experience similar to popular video platforms.

## Features

- Browse and stream videos
- Search for videos by keywords
- User-friendly interface inspired by YouTube
- Responsive design for desktop and mobile use

## Technologies Used

- JavaScript (main language)
- [Framework/library details can be added here based on your stack, e.g., React, Node.js, etc.]
- [Other dependencies or tools, if any]

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jayyuuuu/FewTube.git
   cd FewTube
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

# More from Code(Extra) 

## APP STRUCTURE: 

    -🌟Header
    -🌟Body
        -🌟SideBar
               -🌟MenuItems
        -🌟MainContainer
               -🌟Buttons List
               -🌟VideoContainer
                       -🌟VideoCard

### Debouncing
Typing fast -> difference b/w 2 key strokes is less (let 30 ms)
Typing slow -> difference b/w 2 key strokes is more (let 200 ms)
Performance
iphone pro max = 14 letter * 1000 people making API calls = 14000 API calls

with debouncing = 3 API calls * 1000 = 3000 API CALLS

Debouncing is applied with 200ms
if difference between 2 key strokes is < 200ms -> decline the API CALL.
For debouncing used in Google/ youtube the time is

KEY - i
render the component
useEffect();
start timer => make api call after 200 ms
KEY - ip
destroy the component(useEffect return method called)
re-render the component
useEffect()
start timer => make api call after 200 ms */
Caching
Time complexity to search for an array = O(n)

[i, ip, iph, ipho, iphon, iphone]

Time complexity of search for an object/map = O(1)

{ i: ip: iph: ipho: iphon: iphone: }

new Map() -> even more optimized than searching inside Object. For simplicity we will use object here.

Live chatting
Live Chatting >>>>>>> Infinite scrolling >>>>>>>> Pagination

challenges of live chat: -> Get data live -- Data Layer -> Update the chat window (UI)
Update UI in an efficient way so that the page doesnot freeze even after loading the live stream data for a longer period of time.

Two ways to handle LIVE data -> Using Web Sockets - 2 way connection that creates a handshake. Once done we can send data from either side, i.e. bi-directional. No regular inerval.

-> API polling - UI request the server for data and the server sends the data. Uni-directional data. In regular interval the data is polled

In an application like GMail, API polling can be used as e dont need very real time data . Its okay if the reciver gets the mail after 10 seconds. Eg: Crickbuzz - API polling happens in "25 seconds".

If there is application like stock market apps, Here we need very real time data. Eg: Live chat applications need real time data.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------


## Notable Information

- The project is public and open for contributions.
- Issues and feature requests can be submitted directly in the repository.
- The repository does not currently specify a license.

## Repository

- [FewTube on GitHub](https://github.com/jayyuuuu/FewTube)
