# coding: utf-8

from flask import Blueprint, render_template

auth = Blueprint('login',__name__)


@auth.route("/login", methods=["GET", "POST"])
def login():
    return render_template("login.html")

