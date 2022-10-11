from flask import Flask, render_template, request, flash, session

import db
from db import addUser

app = Flask(__name__)
app.secret_key = "secretKey"

@app.route('/', methods=['GET', 'POST'])
def home():  # put application's code here
    return render_template("home.html",
                           title="Home Page",
                           heading="Home Page")

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        score = 0 #Default score
        if username != "" and password != "": #Add more verification (user doesn't already exist)
            db.addUser(username, password, score)
        else:
            print("Please enter a valid username and password")
    return render_template("register.html",
                           title="Register Page",
                           heading="Register Page")

@app.route("/login", methods=['GET', 'POST'])
def login():
    session["invalid"] = ""
    if request.method == 'POST':
        username = request.form.get("username")
        password = request.form.get("password")
        try:
            if db.authenticateUser(username, password):
                print("Valid User")
                session['invalid'] = "Successfully logged in!"
            else:
                session['invalid'] = "Invalid username and/or password. Please try again"
        except KeyError:
            pass
        flash("Invalid username or password", "alert-danger")
        print("Invalid User")
    return render_template("login.html",
                           title="Login Page",
                           heading="Login Page")

if __name__ == '__main__':
    app.debug = True
    app.run()
