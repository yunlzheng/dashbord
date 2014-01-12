# coding: utf-8
'''
Dashbord login and logout handler
'''
from flask import request
from flask import render_template, redirect
from flask import Blueprint
from flask.ext.login import login_required, login_user, logout_user

from dashbord.models import User

auth = Blueprint('login', __name__)


@auth.route("/login", methods=["GET", "POST"])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        user = User.query.filter_by(email=email).first()
        if not user:
            return render_template("login.html")
        elif user.check_password(password):
            login_user(user)
            return redirect(request.args.get("next") or "/")
    return render_template("login.html")


@auth.route("/logout", methods=["GET"])
@login_required
def logout():
    logout_user()
    return redirect("/login")

