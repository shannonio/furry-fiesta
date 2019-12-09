## Description

This is a simple React/Redux application that will pull your authorized git repos so you can order the issues locally.
This app will maintain your ordering via local storage, but beware if you clear it out you will lose all your hard work.

## Run it

After cloning the repo locally, you will need to add your github auth key to a `.env` file. I have included a sample `.env` that you may copy and edit with the correct ENV variable name

Once you have your `.env` ready to go, you can now run

`npm install`

and

`npm start`


### Tests

To run the tests please run `npm run test`

*A note about the tests*

I held on to this project for a lot longer than intended because I wanted to make sure I had full test coverage,
I didn't get to full test coverage because life took over in this case, but I was hoping to make it there. I do have a
test file for the major components with a few tests each.

### Theoretical API

If I were implementing an API to maintain the order of the issues, it would look like this:

1. GET '/issues/new'
This would return a list of issues, each time this endpoint was called it would make a call
to the github api to fetch an updated list of issues while also pulling the stored issues from our own
database. The new issues would get appended to the bottom of the list for now. The new issues upon entering
our system

Alternative to 1.
  If this app were definitely just for me, or my team, I could also simply set up a webhook on github so that I may receive the notifications on specific repos immediately.  

2. GET '/issues'
This would simply return a list of the issues we have stored in our own database, if none exist
an external call would be made to retrieve the issues and then update our database accordingly.

3. UPDATE '/issue'
This would update the issue we have stored, the only editable field on the issue however is "priority", for now at least.
