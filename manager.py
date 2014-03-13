#coding: utf-8
from flask.ext.script import Manager
from flask.ext.script import prompt, prompt_pass, prompt_choices, prompt_bool

from dashbord import create_app
from dashbord.extensions import db
from dashbord.models import User

manager = Manager(create_app)


@manager.option('-e', '--email', dest="email", required=False)
@manager.option('-p', '--password', dest="password", required=False)
@manager.option('-u', '--nickname', dest="nickname", required=False)
@manager.option('-r', '--role', dest="role", required=False)
def createuser(email=None, password=None, nickname=None, role=None):
    if email is None:
        while True:
            email = prompt("Email address")
            user = User.query.filter_by(email=email).first()
            if user is not None:
                print "Email %s is already taken" % email
            else:
                break

    if password is None:
        password = prompt_pass("Password")

        while True:
            password_again = prompt_pass("Password again")
            if password != password_again:
                print "Passwords do not match"
            else:
                break

    if nickname is None:
        while True:
            nickname = prompt("Nickname")
            user = User.query.filter(User.nickname == nickname).first()
            if user is not None:
                print "Nickname %s is already taken" % nickname
            else:
                break

    roles = (
        (0, "member"),
        (1, "admin")
    )

    if role is None:
        role = prompt_choices("Role", roles, resolve=int, default=1)

    user = User(nickname=nickname,
                email=email,
                password=password,
                role=role)

    db.session.add(user)
    db.session.commit()

    print "User created with ID", user.id


@manager.command
def createall():
    "Creates database tables"
    db.create_all()


@manager.command
def dropall():
    "Drops all database tables"

    if prompt_bool("Are you sure ? You will lose all your data !"):
        db.drop_all()


if __name__ == "__main__":
    manager.run()