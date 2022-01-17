<p align="center">
   <img src="https://i.imgur.com/VPyR8v3.png"/>
</p>

<h1 align="center">
   Monnaie App
</h1>


###### Project 02 Submission for the General Assembly SEI bootcamp

## App Features
The concept behind **Monnaie App** is to create a money app that would allow the user to manage, send, deposit money, as well as pay bills, and get cash. The app was designed with the African market in mind, especially Congo, where only 10% of the population has access to banking. When fully functional, the app would allow the user to perform the following financial transactions:
* **Manage Money**: See your current balance, usage reports, and a drop-down list of recent transactions on the front screen of the app
* **Top Up**: Add to your balance by topping up cash from a shop, or transfer from your bank account to your Monnaie account
* **Get Cash**: Use Monnaie to get cash from a shop, or transfer to your bank account
* **Send Money**: Send money to other users
* **App Bills**: Use Monnaie to pay bills at shops

#### Basic Wireframes:
##### Sign Up
![login-signup](https://i.imgur.com/GCamltO.png)

#### Quick Look Inside App
![views](https://i.imgur.com/mIcBTyN.png)

## Technology
* **Frontend**:JavaScript (with CRUD functionalities)
* **Backend**: Node.js/Express, Mongoose
* **Styling**: SkeletonCSS. Responsive, mobile-first design
* App link: https://monnaie-app.herokuapp.com/

#### Installs and dependencies
```
   EJS
   Express
   bcrypt
   dotenv
   express-session
   method-override
   mongoose
```

## App Components:
* Balance: shows how much the user has - Total of all the quantities from the data
* SEND button: allows user to deduct money from balance, and add it to another user. Given 2 users, the SEND should increase the amount of the second user
  * The SEND form has 2 inputs: RECIPIENT (user2) and AMOUNT (to be added to user2's balance)
* Top-UP: increases money to the Balance
* Pay Bill: works same as SEND (will increase user2's balance and decrease user1)
* Get Cash: also works as SEND, but just decreases user1's balance (no user2 involved)
* RECENT Transactions: a scroll area that displays user's most recent transactions.
  * Date
  * Type of Transaction (Send, TopUp, PayBill, or Get Cash)
  * Transaction Confirmed?
  * Edit and Delete buttons

## C.R.U.D Functionalities - Cread, Read, Update, Delete

* Create:
   * The CREATE operation will work with all the 4 app buttons: **SEND**, **TopUp**, **PayBill**, and **Get Cash**. Each button will add a new document/item to the app, which will display in the **Recent Transactions** section.
   * **Schema**: date, transaction type, amount, confirmed checkbox.
* Read/Find:
   * The app displays Recent Transactions and Balance on the screen
   * **Recent Transactions** will be a scrollable div that will  display up to 10 transactions. An "All Transactions" button will be added to show all.
   * **Balance** will update based on the CREATE and Update operations.
   * The **Show More* button opens the record Show Page, which contains the transaction date, type, amount, confirmation, and receiver.
* Updated/Edit:
   * On the record SHOW page, _Edit Transaction_ button will allow user to update the transaction date and amount.
   * The transaction buttons (Send Money, Top Up, Pay Bill, Get Cash) will automatically update the balance amount
* Delete:
   * On the record SHOW page, the DELETE button will allow the user to remove a record.
   * It's also possible to have the delete on the Index page of **Recent Transactions**.

### RESTful Routes

* Index - Home Page
   * Header Nav (will repeat on all pages): _Logo_, About, Support, _Login_, _Log Out_
   * BALANCE: display current balance
   * SEND button (div): inputs will include _Receiver_, _Amount_, and a _Submit_ button
   * BUTTONS: TopUp, PayBill, GetCash (linked to CREATE and UPDATE functionalities)
   * RECENT TRANSACTION: link to the SHOW pages for the individual record. On the index page, display up to 10 records
   * Footer (will repeat on all pages. Contact
* Show
   * In the _Recent Transactions_, user will click on the transaction to see the details (date, type of transaction, confirmation, and options to edit and delete)
* New
   * A CREATE input form with Date, Type of Transaction, Amount and Confirmed
* Create
   * A CREATE route receives data from the NEW form
* Edit
  * User will be able to EDIT each transaction record on its SHOW page
* Update
  * * An UPDATE route receives data from the NEW form
* Destroy
  * A DELETE route - one the SHOW page, user can remove the record document.

## Work in Progress
* The app should reduce the user's balance when the user sends money, gets cash (withdraws money, or pays bills
* Allow the app to be used by multiple users, and allow inter-user transactions
* Sort Recent Transactions by the order of most recent
* More CSS styling: mobile-responsive and user-friendly


## References and Credits

* Select Tag in the NEW and EDIT views: referenced from https://www.w3schools.com/tags/tag_select.asp
* Creating the Total Balance:
  * https://www.delftstack.com/howto/javascript/sum-array-of-objects-javascript/
  * Source: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
*   Automatic Date Input: https://css-tricks.com/prefilling-date-input/


<!-- ## Tentative Schedule:

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

### -->
