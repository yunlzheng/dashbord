# coding: utf-8
import json

from flask import request
from flask import render_template
from flask import Blueprint
from flask.ext.login import login_required

auth = Blueprint('login', __name__)

@auth.route("/login", methods=["GET","POST"])
def login():

    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        return 'try login.'
    return render_template("login.html")

@auth.route("/logout", methods=["GET"])
@login_required
def logout():
    return render_template("logout.html")

