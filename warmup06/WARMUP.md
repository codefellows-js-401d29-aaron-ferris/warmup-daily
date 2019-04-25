Write a function called fetchPeopleWithPromises() that will:  
Use superagent to load content from the Star Wars  
https://swapi.co/api/people/  
Reduce the results array (an array of people objects) into an simpler array of urls from the person’s url property  
Go through that array, fetching each person’s data with superagent, building up an array of promises  
Use promise.all to collect all of the responses at once.  
When all of the promises have resolved, print a list of each person’s name  
Repeat the process, but this time using a function called fetchPeopleWithAsync() which uses async and await to return you a list of people  