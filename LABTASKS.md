#Lab Tasks

For lab tasks from here on out, questions that require exploration and responding to on this markdown page will be in bolded text. You should respond to them directly within this markdown file. Markdown is effectively a plaintext, lighweight markup language that is designed to be converted into HTML; more simply, it's some text and symbols you can put into a document that will turn into pretty HTML.
Tasks that specify work to do without a written response will be bulleted.
If you're ever confused about what you need to do for a given task, ask.

## Part #1: exploring the node.js project
Study the project you have cloned. Run it according to the instrucitons in the README, including running the tests. Answer the following questions by editing this file.  This will give you a chance to play with markdown.

> Protip: Using Google to gain additional knowledge or support your conjectures about how something works is great! It's important that you think about everything and come to an understanding, though, so don't use Google as a scapegoat to get the questions done quickly or you will regret it!

#####What is the purpose of app.js? Explain what happens when a user is trying to access a page "kittens", when a user is trying to access the page "petForm", and when the user submits a form on "petForm". Explain what a "route" is.

	When a user requests kittens, they are asking the server to do app.get('/kittens',....){...} Then the body of that function executes and res.send(..) and sends that stuff to the browser. 
	Similar things happen in for /petForm, except it sends back a file instead of a string. 
	When a user submits for petForm, it does app.post, and returns the length of the string it was given, and sends the string to the console. 
	Routes for us are the 0.0.0.0:9000/stuff. When we click things we go to differant routes, alternatively we could go directly to them and the things in app.js that are defined would happen. 

#####What is the contents of the "public" folder? What is each of the html files there and how are they referenced in app.js?

	The contents of the public folder are the various parts that make up the parts of the site seen by the browser. Assets has files referanced in the html files, css takes care of css things, and javascript looks like it takes care of testing things. 
	about, index and petForm are sent to the browser for several routes defined in app.js. They define the layout and content(wrt the css file).	

#####In your project change the message that appears when the user is trying to access the page "kittens". Describe what you did and how it worked.

	we did the thing, and the message at 0.0.0.0:9000/kittens changed to what we told it to change to. we changed the string in the app.get('/kittens',function(req,res){res.send(...);}); 	

#####Also change the message that a user sees when they are trying to find a page that doesn't exist.

	done

#####Describe what happens when you submit a form on petForm page. What are the form parameters in petForm? What is the method for the form? Where is the form submission handled in the project? How are parameters extracted? How is the resulting message generated? How is this different from accessing the page petForm the first time (to see the form)?

	When you submit a form it calls app.post in app.js. req is the request the user submitted, res is the response from the server and we are asking res to do the sendFile function. We're sending information back to the server, as opposed to just the request we gave it when we first accessed the page. 

#####Where is client-side Javascript defined? Name file(s) in which it is used.
	clientJavascript.js- it is called in the index.html file
#####Where is server-side Javascript helper file defined? Where can it be used? Add a function to it and experiment with where you can call this function.
	 it is defined in the serverJavascript.js file. It can be used in app.js. We added the function double which appends a string to itself and returns it. It worked on the petForm submission, but when used on routes bad things happenned. Curiously nothing happenned when used on index.html...
#####What is the purpose of package.json file? What's in it, and what does it mean?

	It looks like it keeps track of the versions of everything depended upon for this project. It's probably pretty important for it to actually work on different machines and things like that. 

#####What's in .gitgnore file? What's the purpose of it?

things that git should not track. it's there because there's some things that are better for git to not follow, like personal settings or something like that. 

## Part #2: exploring testing

#####Find the testing file, describe where it is located and what it is testing. Run karma (the testing engine) as specified in the Readme and describe results. Do not edit any files at this time.

The karma file is located in the folder for the lab, and the tests are inside the javascript folder in the lublic folder. They are testing functions from the cliektJavascript file. Two tests passed, and one failed. All three were run. This result was expected, so all is good. 

#####After having set up Travis CI with your forked project, play around the page for your project (build history, settings, branches, etc) and describe at least 3 features you think would be useful when troubleshooting a broken project.

The shortcuts to github is useful. If tests are failing we can easily see the changes that caused it. If we run into a similar error in the future, this will make it easy to see if we have encountered it before and keep us from fixing the same thing more than once. 
It telling us when the build passed the tests, and when it did not as a function of time is also useful. We could easily roll back to the latest version that works correctly if we are unable to figure out what is causing a weird error. 
So far it travisci has been really easy to work with. I consider that a feature since it isnt getting in the way of productivity at all when things are working correctly.

#####What was the build status of your project right after you got everything set up? Use Travis to find any problems, and describe what failed, if anything. (Which files, what lines, why did failure occur, etc.)

failed. line 525 has a test failure. it is the third test, and it is at /home/travis/build/mitc0380/3601-S16-lab2_javascript-node/public/javascript/clientJavascript.spec.js:14
Failure occured because the test expected 'Not Kittens' and was given 'kittens'

#####Fix any problems described in the previous question. Describe how you fixed them. Push your fix to GitHub and post a link to the passing build (from build history) here.

- Study jasmine testing syntax. Think of a Javascript function, describe its behavior by writing tests for it (this is test-driven development, or TDD). Add the function, run the tests. (Actually do this. Don't forget to commit your changes!)

## Part #3: adding a GPA calculator

- Add a page to the project (don't forget to add it to git) that has a form for letter grades and credits for three classes.

- In TDD fashion, add tests for functions needed to compute the GPA and then implement the functions themselves. Note, however, that karma doesn't work with exports, so after you have tested the functions, you would need to create copies of them that you are exporting. This is awkward and will be fixed in subsequent node setups. Also make sure to add the file that you are testing to karma.conf.js.

- Add a route to app.js to display the GPA on the resulting page.

- Add the basic html to the send so that the GPA is displayed as an html page. Don't add too much: later we will be using various libraries to take care of generating html.

- As you are working, don't forget to change drivers in pair-programming, practice TDD, write comments, and make frequent commits. As before, at the end just push all the changes to github.

