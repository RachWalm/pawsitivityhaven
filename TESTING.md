# Pawsitive Haven testing

The testing was not completed as due to a bug the model for dog profile needed to be updated. The dog_age was set to blank but not Null, which meant that the form validation didn't show that age was required, so if left empty it just didn't save. When this change was migrated something happened that got the error 

```django.db.migrations.exceptions.InconsistentMigrationHistory: Migration posts.0003_alter_post_dog_id is applied before its dependency dog_profile.0003_alter_dogprofile_dog_age on database 'default'.```

This meant that it wouldn't deploy - as this was during testing and the developer couldn't fix it alone, and as a bank holiday student tutors were closed till morning. This meant that the testing wasn't able to proceed at this late stage.

Therefore, userstories/component testing has not been completed. The list of tests is shown below, where without results, it has not been completed.

All these tests were performed during development and passed.

## Validation

### Sites used

- [GitPod](https://www.gitpod.io/) 

#### JSX

The built in ESLint in Gitpod was used to assess the JSX. It compiled without errors, there were some warnings left on the system  of unused variables. The majority of the warnings were rectified during development. 

All the warnings that remained on the list were unused variables. These unused variables as they had been limited to ones that were being 'used'. They were to set up a timeout to have things at set intervals (so were technically used - just not referred to) or were part of setState function for setErrors where the errors part of the state was being used or user_id where I felt that although not directly referred to it would be detrimental to remove one variable from a table containing the rest of the model.

## User stories

### Posts

#### Post Create

- As a member of staff I can create a post with a Title and picture so that I can contribute posts

superuser logged in pass

- As a member of staff I can create a post with a Title, text and picture so that I can contribute posts

superuser logged in pass

- As a member of staff I want to preview the data before submission so that I know what I am submitting

superuser logged in pass

- If not a member of staff or not logged in my content won't save so people without permission can't damage the data

- As a member of staff I get errors when I leave Title empty so I know what I need to do to save

superuser logged in pass

- As a member of staff I get errors when I leave the Image empty so I know what I need to do to save

superuser logged in pass

- As a member of staff I can leave the content empty if there is nothing to say

superuser logged in pass

- If cancel button is pressed it takes me back to previous page so I don't have to do the action if I don't want to

superuser logged in pass

#### Post Edit

- As an owner I can Edit a post with Title so I can change it if I need to

superuser/owner logged in pass

- As an owner I can Edit a post with Picture so I can change it if I need to

superuser/owner logged in pass

- As an ownerI can Edit a post with Content so I can change it if I need to

superuser/owner logged in pass

- As an owner I can Edit a post with a Title, text and picture so I can change it if I need to

superuser/owner logged in pass

- As aan owner I want to preview the data before submission so I can check what I am saving

superuser/owner logged in pass

- If not an owner or not logged in my content won't save so I can't do anything without permission

- As an owner I get errors when I leave Title empty so I know what I need to do to save

superuser/owner logged in pass

- As an owner I can leave the content empty if there is nothing to say

superuser/owner logged in pass

- If cancel button is pressed it takes me back to previous page so I don't have to do the action if I don't want to

superuser/owner logged in pass

#### Individual Post view

- As anyone I can view the post including dog name, how long ago posted, posted by whom, profile image of dog, post image, post title and post content (if filled out) so the data can be enjoyed

superuser/owner logged in pass

- As anyone the comments section of the post is visible so the comments can be enjoyed

superuser/owner logged in pass

- As owner of the post if logged in I have the three dots to allow me to edit or delete (icons appear when clicked on) so I can use the menu

superuser/owner logged in pass

- As owner when I click on the edit button it takes me to the edit section so I can perform an edit

superuser/owner logged in pass

- As owner when I click on the delete button it deletes the post so I can delete my posts

superuser/owner logged in pass

#### Mulitple Posts page

- As anyone I can search the content of the posts text and get the appropriate results so I don't have to scroll through everything

superuser logged in pass

- As anyone I can see the most recent posts first so that I can only scroll to where I have seen

superuser logged in pass

- As anyone I can view the post including dog name, how long ago posted, posted by whom, profile image of dog, post image, post title and post content (if filled out) to enjoy the content

superuser logged in pass

- As anyone I can click on the dog profile image and be taken to the dog profile to gain access to dog profile

superuser logged in pass

- As anyone I can click on the post image and be taken to the individual post to gain access to the post with comments

superuser logged in pass

- As a user I get the no results icon instead of images if my search has no results so I know that nothing matches my search

superuser logged in pass

- As anyone I can scroll through the results and more will load if there are more to load so it is intially quick to load and then I can see everything

superuser logged in pass

- As anyone a spinner is shown while the posts load so that they know the data will be shown when loaded

superuser logged in pass

### Comments

- As anyone when looking at individual post page I can see any comments that have been made to enjoy the comments

superuser logged in pass

- As anyone when looking at individual post page I am informed if there are no posts to see so I know that there are no comments

superuser logged in pass

- As a non-authenticated user I can't see the create form so only people logged in can create posts so that they can be attributed to users

- As an authenticated user I can create a comment to enjoy the site

superuser logged in pass

- As an authenticated user the comment button is disabled till I have put something in the comment box so empty comments aren't generated

superuser logged in pass

- If comments have been made then how long ago, by whom and the comment should be visible to keep the user informed

superuser logged in pass

- If I am a comments owner I should have the three dots which opens into an edit or delete icons menu so I can use the menu

superuser/owner logged in pass

- If I am not the comment owner the three dots should not be visible so I don't have access to click them

superuser/owner logged in pass

- If I am the comment owner and click on the edit button the text area of the comment should become editable and any edits update in real time so I can change my comments

superuser/owner logged in pass

- If I am the comment owner and I am editing the comment I should be able to cancel even if I have typed something and it return to view as before so I can change my mind mid-edit

superuser/owner logged in pass

- If I am the comment owner and I edit my comment and press save only the new comment should be visible and the length of time it was commented ago should be updated so it is currently showing what is intended and the time matches the comment

superuser/owner logged in pass

- If I am the comment owner and I click delete my comment should be deleted and no longer available if I don't want it to show any more

superuser/owner logged in pass

### Dog Profile

#### Dog profile create

- As a superuser I can create a dog profile with all fields so I can create a profile

- As a superuser I can create a dog profile with an image so the image can be saved

- As a superuser I get error messages if I leave the dog name, general information or dog breed empty as these are required by the database and I want them saved

superuser logged in pass

- As a superuser I get don't error messages if I fill the dog name, general information and dog breed but leave the other fields empty as the other fields aren't essential so can be left blank but I can still generate the record

superuser logged nothing happened when I pressed create. Checking the console it appears that there was a server error 500. This was because the dog age was allowed to be blank but not null, so no error was given in react but it couldn't save. For a fuller description of this bug see number 7 in the bugs section of README.

- As a superuser I want to preview the data before submission so I know what I am submitting and can check it

superuser logged in pass

- If not a superuser my content won't save so no one who doesn't have permission can damage the data

- As a superuser when I press save it takes me to a view of the dog profile so I can see what I have entered in a different format and check it

- If cancel button is pressed it takes me back to previous page so I can change my mind

superuser logged in pass

#### Dog profile Edit

- As a superuser I can update a dog profile with all fields to make the record accurate

- As a superuser I can update a dog profile with an image so it can have an image or a better image can be put up

- As a superuser I get error messages if I leave the dog name, general information or dog breed empty as these are required for a save so I can save or know what I need to do to get it to save

- As a superuser I get don't error messages if I fill the dog name, general information and dog breed but leave the other fields empty as those aren't essential but I still want to save

- As a superuser I want to preview the data before submission so I can check what I am saving

- If not a superuser my content won't save so no one can damage the data

- As a superuser when I press save it takes me to a view of the dog profile so I can see what I have entered in a different format and check it

- If cancel button is pressed it takes me back to previous page so I can change my mind

#### Dog profile view

- As anyone I can view some of the dog details so they can see if they are interested in adopting

- As an authenticated user I can see some of the dog details and have a button to allow access to the fill out adoption request so I can go to the form to enquire

- As an authenticated user when I click the button to fill out adoption request it takes me to the create adoption request function so I can go to the form to enquire

- As a member of staff I have all authenticated user functions and a create post button so I use the button to create posts

- As a member of staff I can click the create post button and it will take me to the create post page linked to that dog so I can create posts

- As a superuser I have all the functions of a member of staff and and edit button which when clicked takes me to the edit dog profile function so I can click the button to go to edit the dog profile

- As a member of staff or super user I have additional information regarding dates, whether the dog is at the rescue and it's status so this can be used internally within the rescue

### Home / Dog Search page

- As anyone on the home page there is a call to action and a search dogs section so that interest in the site can be attained

superuser logged in pass

- As anyone a spinner shows while the dogs load so they know the data is coming

superuser logged in pass

- As anyone scrolls through the dog profiles more are loaded on the end so it is a quick load initially and yet all the data is there as you scroll down

superuser logged in pass

- As anyone filter by available box is able to be ticked and unticked providing accurate results and the spinner while loading so the search can be narrowed to dogs available for adoption or looking at all dogs historical and to come as well as available giving history and future

superuser logged in pass

- As anyone the search box causes a spinner while loading and gives accurate results against breed and name so if people know what they are looking for they can find it easily

superuser logged in pass

- As anyone each dog profile is contained in a card with a value for name, gender and breed displayed so basic information is available without overwhelming the reader

superuser logged in pass

- As anyone each dog profile either has an image of the dog or a holding image with Image not yet available displayed so that the format is held when no image of dog but an image is shown when available

superuser logged in pass

- As anyone clicking on the text within the card takes the user to the approprite dog profile page so they can see more information

superuser logged in pass

- As anyone clicking the image of the dog takes the user to the appropriate dog profile page so they can see more information

superuser logged in pass

### Requesting adoption

#### Create adoption request

- As an autheticated user the correct name of the dog is readonly displayed to me so that the user can see it but not change it as it wouldn't update the record

superuser logged in pass

- As an authenticated user I can create an adoption request with text fields empty so if I don't know what to say I can still put in a request

- As an authenticated user I can create an adoption request with all fields full so I can give as much detail as possible

superuser logged in pass

- As an authenticated user I can save Booleans as true or false so I can give correct information

superuser logged in pass

- As an authenticated user I want to preview the data before submission so I can be sure I am saving what I intend

superuser logged in pass

- If not an authenticated user my content won't save so no record is created that isn't attached to a user

- As an authenticated user if cancel button is pressed it takes me back to previous page so I can change my mind

superuser logged in pass

- As an authenticated user my data saves and I am directed to a view of the data so I can see it is saved

superuser logged in pass

#### Edit adoption request

- As the owner the correct name of the dog is readonly displayed to me so I can't update it (record would not reflect update) but can see it 

superuser/owner logged in pass

- As the owner I can edit an adoption request with text fields empty so I can still make a request if I don't know what to say

superuser/owner logged in pass

- As the owner user I can edit an adoption request with all fields full so I can give as much detail as possible

superuser/owner logged in pass

- As the owner I can save Booleans as true or false so the data can be a correct reflection

superuser/owner logged in pass

- As the owner I want to preview the data before submission so I know what I am saving

superuser/owner logged in pass

- If not the owner user my content won't save so I can't damage data in the database

- As a user if cancel button is pressed it takes me back to previous page so I can change my mind

superuser/owner logged in pass

- As the owner my data saves and I am directed to a view of the data so I know it is saved and what it says

superuser/owner logged in pass

#### Viewing request adopt as the requester individual record

- As the person placing the request to adopt after saving data I am redirected to a page with instructions on what to do next and the request details which should match what was saved so I know that my request is saved and what needs to be done next

superuser/owner logged in pass

- As the person placing the request to adopt there should be three dots which when clicked show the edit and delete icons so I can access the menu

superuser/owner logged in pass

- As the person placing the request to adopt when clicking the edit icon I am redirected to the edit page so I can use the edit page 

superuser/owner logged in pass

- As the person placing the request to adopt when clicking the delete icon it deletes and I am redirected to previous page so I can delete my request if I change my mind

superuser/owner logged in pass

#### Viewing multiple adoption requests

- As the person placing the request to adopt all the details you saved are correct so you know the data saved correctly

superuser/owner logged in pass

- As the person placing the request to adopt you can see the three dot menu which gives you the edit and delete icons so you can use the menu

superuser/owner logged in pass

- As the person placing the request to adopt it tells you that it was you that placed the request so if you are a superuser you can distinguish between your requests and requests from others and the person placing the request feels that it is specific to them

superuser/owner logged in pass

- As a member of staff you can see all adoption requests so that you can process them

superuser/owner logged in pass

- As a member of staff you can see the three dot menu which gives you the edit and delete buttons so that if needed the menu can be accessed and records can be edited where required or deleted if no longer relevant

superuser/owner logged in pass

- As a member of staff it only tell you it was you that placed the request when this is accurate so you know your request is recorded

superuser/owner logged in pass

- As a member of staff it gives you the contact details from the user profile so that a reply can be made to the request

superuser/owner logged in pass

### User profile

#### User profile viewing

- As an authenticated user I can see my profile so I can check the details

superuser logged in pass

- As a non-authenticated user I can't see a profile so as to maintain confidentiality

- As a user the edit user navigation bar is available so all links can be accessed

superuser/owner logged in pass

#### Change user name

- As an autheticated user my user name is prepopulated so I know what I am changing

superuser logged in pass

- As an authenticated user I can click cancel to go back to the previous page so I can change my mind

superuser logged in pass

- As an authenticated user I can change my username and it save redirecting me to my profile where my new username is visible so I know what I saved as my username

- As an authenticated user it won't let me pick a username that is already in use so there is no conflict and the error message tells me what to do

- As a non-autheticated user it won't let me change or view a username to retain confidentiality and avoid damaging data in the records

- As a user the edit user navigation bar is available so I can use the links

superuser/owner logged in pass

#### Change password

- As an authenticated user I am asked to fill password boxes so I can change my password

superuser logged in pass

- As an authenticated user I am given an error if the boxes are left empty, the password is unacceptable (and told how) or if the passwords don't match so I know what to change to save

superuser logged in pass

- As an authenticated user I can click cancel and be taken back to where I was so I can change my mind

superuser logged in pass

- As an authenticated user I can change my password and click save with the data saved so I can change my password

- As a non-authenticated user I can't change a password so the records won't get damaged

- As a user the edit user navigation bar is available so I can use the links

superuser/owner logged in pass

#### Change profile

- As a non-autheticated user I can't change a profile so the records won't get damaged

- As an authenticated user if I haven't filled out my profile (or part of my profile) placeholder text is in place so I know what needs to go in the box 

- As an authenticated user any data from the server is prepopulated so I know what I am changing

superuser logged in pass

- As an authenticated user I can cancel back to the page I have come from so I can change my mind

superuser logged in pass

- As an authenticated user I can change some of my profile and save and it returns me to view my profile so I can see what it is changed to 

superuser logged in pass

- As an authenticated user I can change all of my profile and save and it returns me to view my profile so I can see what it is changed to

superuser logged in pass (even gave an error as no @ in my email)

- As a user the edit user navigation bar is available so I can use the links

superuser/owner logged in pass

## Components

There are several components that appear on several pages so userstories for each page would be excessive. Functionality that changes per page will be assess though. These components are tested as follows:

### Call to action

- Test each link

superuser logged in pass
annoymous pass

- Test different pages and logged in

superuser logged in pass
annoymous pass

### Form title

- Test on each page it appears and check has correct text

### More drop down

- has been tested in the userstories frequently

passed in all the userstories tested

### NavBar

- Test all links on different pages and levels of logged in

superuser logged in pass - home and sign out

annoymous pass - saw home, sign in and sign up

### NavEditUser

- Check links work from the relevant pages

superuser logged in pass

### NavSideBar

- Check links work

superuser logged in pass

- Check different rendering for different levels of access

superuser logged in - five links as expercted -pass

### Not found

- Check with random urls that the 404 not found is operational

superuser logged in pass

## Authentication

### Sign up

- Check sign up page works

pass

### Sign in

- Check sign in page works and status is displayed by username in nav bar

superuser log in pass

### Sign out

- Check button works and can't access things with residual sign in

pass

## Routing

- Check for broken links

No broken links found