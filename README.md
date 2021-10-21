![logo](https://i.imgur.com/VPyR8v3.png)
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
![views](https://i.imgur.com/mIcBTyN.png)

## App Components:
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

## C.R.U.D FUNCTIONALITIES

#### CREATE:
  * The CREATE operation will work with all the 4 app buttons: **SEND**, **TopUp**, **PayBill**, and **Get Cash**. Each button will add a new document/item to the app, which will display in the **Recent Transactions** section.
  * **Schema**: date, transaction type, amount, confirmed checkbox.

#### READ/FIND:
  * The app with display Recent Transactions and Balance on the screen
  * **Recent Transactions** will be a scrollable div that will  display up to 10 transactions. An "All Transactions" button will be added to show all.
  * **Balance** will update based on the CREATE and Update operations.

#### UPDATE:
* The **SEND** button on the app will be the main update operation - deducts the sender's balance and adds the receiver's balance. The other buttons will also have update functionalities
* A user will also be able to access the SHOW page of a record and click on the EDIT button from there.

#### DELETE:
* In the **Recent Transactions**, a user clicks on a record and will be send to the show page of the transaction. The show page will contain a DELETE functionality.
* It's also possible to have the delete on the Index page of **Recent Transactions**.

### RESTful Routes

##### * Index - Home Page
* Header Nav (will repeat on all pages): _Logo_, About, Support, _Login_, _Log Out_
* BALANCE: display current balance
* SEND button (div): inputs will include _Receiver_, _Amount_, and a _Submit_ button
* BUTTONS: TopUp, PayBill, GetCash (linked to CREATE and UPDATE functionalities)
* RECENT TRANSACTION: link to the SHOW pages for the individual record. On the index page, display up to 10 records
* Footer (will repeat on all pages): Contact

##### * Show
  * In the _Recent Transactions_, user will click on the transaction to see the details (date, type of transaction, confirmation, and options to edit and delete)

##### * New
  * A CREATE input form with Date, Type of Transaction, Amount and Confirmed

##### * Create
  * A CREATE route receives data from the NEW form

##### * Edit
  * The SEND button will update the balance of 2 users: the sender (balance deduct) and receiver (balance increment).
  * The TopUp button will increment the balance by the input amount
  * The PayBill button will have same functionalities of the SEND button - with a sender and receiver.
  * The Get Cash button will deduct the balance for the user.
  * User will be able to EDIT each transaction record on its SHOW page

##### * Update
  * * An UPDATE route receives data from the NEW form

##### * Destroy
  * A DELETE route - one the SHOW and/or on the Index pages (_Recent history_), user can remove the record.


## REFERENCES & CREDITS

* Select Tag in the NEW and EDIT views: referenced from https://www.w3schools.com/tags/tag_select.asp


========================
## Tentative Schedule:

#### October 20:
* Complete project idea and Wireframes (DONE)
* Complete initial setup of the CRUD app, following REST approach (DONE)
* Initial deployment on Heroku (DONE)
* Resubmit W06D02 completed HW (DONE)
* Resubmit W05D03 completed HW (DONE)

#### October 21-22:  MVP ready
* Set up app components: data/models (with some seed data), controllers, basic views (index, new, edit, show),styles (i'm using Skeleton)
* JS / backend - work on CRUD and REST routes
* Complete CRUD and REST routes (if needed)
* Mathematical operations working:
  * BALANCE button,
  * increments,
  * deductions
* Heroku deployment works without any issues



#### October 23 -24:
* Responsive Design - basic setup
* * Adopt responsive design to the app (my goal is for the app to be used on the mobile primarily)
* App CSS
* Add additional features

###
