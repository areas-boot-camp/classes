# Day 16: Server-Side APIs
- HTTP = Hypertext Transfer Protocol.
- Very popular protocol.
- When you clone a repo, you can use the HTTP protocol or SSH (or GitHub CLI, which is something else).
- SSH is more secure than HTTP?
- Request are usually made with JSON (JavaScript Object Notation).
- Most APIs return JSON, but some return XML.
---
- curl is useful for troubleshooting issues with a site.
- curl is an HTTP request, essentially (from the command line).
- There are a bunch of kinds of request, such as GET, POST, etc.
- GET is the default, but you can specify with -X, for example curl <domain> -X POST.
- You can also pass parameters with ?key=value.
- -d is data (POST body). When you send this, you have to tell it the kind of content with "Content-Type: application/json".
- Postman is like curl, but an app.
- You can use -v (verbose) to see more information.
- Should probably download and learn Postman.
---
- fetch!
- fetch(url)
- .then is part of the promise system?
- When it’s done, it will return response.
- Promises can be chained.
- .then happens when the promise is fulfilled.
- fetch, promise fulfilled, then .then.
---
- There are other ways to get stuff.
- An old way to do it is XMLHttpRequest.
- There’s also AJAX.
- AJAX is just any async call that doesn’t refresh a page.
- fetch is better.
- Take a look at $.ajax.
- Don’t worry about the XML thing (too old to care about at this point).
- With .ajax, you pass an options object to start.
---
- You can use .forEach instead of a for loop! Should review.
---
- Whatever you return from .then goes to the next function.