# coding: utf-8

from flask import Blueprint, render_template

auth = Blueprint('login',__name__)

@auth.route("/", methods=["GET"])
@auth.route("/login", methods=["GET"])
def login():
    return "Login"

