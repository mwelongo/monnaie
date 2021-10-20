![logo](https://i.imgur.com/QQtPAco.png)
# Monnaie App
###### Project 02 Submission for the General Assembly SEI bootcamp

## SUMMARY
* Project Title: **Monnaie App**
* Idea Description: _Monnaie_, an app that aims to allow the user to easily deposit, withdraw, save, and send money
* Heroku link: https://monnaie-app.herokuapp.com/

## INSTALLATION

## HOW THE MONNAIE APP WORKS:

#### User stories:
* Sign up, login
* Add balance (top up, add balance)
* view balance
* Send money (deduct balance)
* Pay stuff with app (deduct balance)
* view most recent transactions

#### Basic Wireframes:
##### Log In & Sign Up Prototype
![login-signup](https://i.imgur.com/GCamltO.png)
![login-signup](https://i.imgur.com/AxWdan9.png)

#### View Wireframes
![views](https://i.imgur.com/YwkI410.png)

## CRUD FUNCTIONALITIES

#### App Components:
* Balance: shows how much the user has
* SEND button: allows user to deduct money from balance, and add it to another user. Given 2 users, the SEND should increase the amount of the second user
  * The SEND form has 2 inputs: RECIPIENT (user2) and AMOUNT (to be to user2's balance)
* Top-UP: increases money to the Balance
* Pay Bill: works same as SEND (will increase user2's balance and decrease user1)
* Get Cash: also works as SEND, but just decreases user1's balance (no user2 involved)
* RECENT Transactions: a scroll area that will display user's most recent transactions.
  * Date
  * Type of Transaction (Send, TopUp, PayBill, or Get Cash)
  * Transaction Confirmed?
  * Edit and Delete buttons

##### * Create Route:
  * The create route will work with all the 4 app functions: **SEND**, **TopUp**, **PayBill**, and **Get Cash**. At the end of each new transaction, the app will display a new CREATE item in the **Recent Transactions** sections/  
##### * Index
* Will show all Components of the app, including a **Log Out** button
##### * Show
* In the Recent Transactions, user will click on the transaction to see the details (date, type of transaction, confirmation, and options to edit and delete)

##### * New
* Input form with Date, Type of Transaction, Amount and Confirmed

##### * Edit
* Update the amount and/pr type of transaction
##### * Update
* Update the amount and/pr type of transaction
##### * Destroy
* Delete a transaction from Recent history


## REFERENCES & CREDITS


========================
## Tentative Schedule:

#### October 20:
* Complete project idea and Wireframes
* Complete initial setup of the CRUD app, following REST approach
* Initial deployment on Heroku
* Resubmit W06D02 completed HW

#### October 21:  MVP ready
* JS / backend complete and working (CRUD)
* Mathematical operations working (increments, deductions, balance)
* Start with basic CSS
* Resubmit W05D03 completed HW

#### October 22:
* Adopt responsive design to the app (my goal is for the app to be used on the mobile primarily)
* Complete CSS

#### October 23:
* Continue working CSS
* Add additional features
