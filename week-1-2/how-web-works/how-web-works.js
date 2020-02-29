/* 
Part One:
In your own terms, define the following terms:

What is HTTP?
- Hyper Text Transfer Protocol - A set of rules for how computers communicate with each other. 

What is a URL?
- Uniform Resource Locator - A nickname for an ip address. 

What is DNS?
- Domain Name Server - A phonebook for hostnames and ip addresses. 

What is a query string?
- Optional part of URL that assigns values to certain parameters. 

What are two HTTP verbs and how are they different?
- Get and Post. Get makes a requests without changing server data. Post makes a request while making a change to server data. 

What is an HTTP request?
- When the client requests information from the server.

What is an HTTP response?
- Serving sending requested information back to the client. 

What is an HTTP header? Give a couple examples of request and response headers you have seen.
- Key value pairs that describe the HTTP request or response. Content Type, Date/Time, cookies, caching info...

What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
- 1.It's going to use the HTTP protocol.
  2. Looks in cache, router, ISP, then DNS for the IP address associated with the URL.
  3. Finds the site associated with the IP address.
  4. Connects browser with the IP address with the correct port with the resource specified in the URL. 
  5. Browser asynchronously pieces together code and displays it. 
  6. 

Part Two:
1. curl https://icanhazdadjoke.com/search\?term\=pirate
-   What did the pirate say on his 80th birthday? Aye Matey!
    Why couldn't the kid see the pirate movie? Because it was rated arrr!
    What does a pirate pay for his corn? A buccaneer!
    Why do pirates not know the alphabet? They always get stuck at "C".
    Why are pirates called pirates? Because they arrr!

2.  dig https://icanhazdadjoke.com
-   icanhazdadjoke.com.	151	IN	A	104.27.179.209
    icanhazdadjoke.com.	151	IN	A	104.27.178.209

3. 
*/

