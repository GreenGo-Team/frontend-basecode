# GreenGo frontend basecode
components:  loadingpage, homepage, signup, signin, scan, scaned, scanedlocaton, profile, rewards, learn, learndetails, footer

## dependencies
bootstrap.                                                                                                                                                                                                                             
react-router.                                                                                                                                                                                                                         
react web-cam.

## `live demo`


## `loadingpage component`
logo of website load for 5 seconds and  navigate to sign up page if user doesn't have account, but if user have account and signed in it will navigate to homepage component

## `signup component`
to create new acoount

## `signin component`
to login to your account

## `Homepage component`
display all events related to recycling.                                                                                                                                                                             
display special offers of markets.                                                                                                                                                                                            
display all partners of app.

## `Footer component`
have main navigations needed in app to: homepage, rewards, scan, learn, profile

## `rewards component`
display information about value and cont of each recaycale material

## `Profile component`
its should display user info and history: number of points user collected and its equal value in money and number of times user use the app to recycle matrials.                                                                     
its statisticaly display the impact recycling on the enviroment.                                                                                                                                                               
its Statisticaly display Ratio of each matrial recycled by user.

## `Learn component`
display tips and tutorials for different recaycale material

## `Learndetails component`
when click on any of tutorials or tips in learn component it will show all details about this tutorial in learndetails component

## `scan component`
camera to scan matrial and decide if it recaycable or not using ai model

## `scaned component`
show the result of scanning.                                                                                                                                                                                                               
if it recycable it will show you the nearst market and user can increase or decrease number of matrial he want to recycle, View market location button ,View market information and Tips & Advice of scanned matrial.                                                                                                                                                                                                                      
if its not recycable you should try scan another matrial.

## `scanedlocation component` 
when you click View market location button in scand component it shows you the location of market on map,time to arrive, the distance from your home
