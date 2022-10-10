from flask import Flask, render_template, request

import db
from db import addUser

app = Flask(__name__)
app.secret_key = "secretKey"

@app.route('/', methods=['GET', 'POST'])
def home():  # put application's code here
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        score = 0 #Default score
        if username != "" and password != "": #Add more verification (user doesn't already exist)
            db.addUser(username, password, score)
        else:
            print("Please enter a valid username and password")
    return render_template("home.html",
                           title="Home Page",
                           heading="Home Page")

if __name__ == '__main__':
    app.debug = True
    app.run()
