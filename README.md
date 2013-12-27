Dashbord Web
============

## What is Dashbord ?

Dashbord is a web front base to build a dashbord application

>now it's use to build the vms web controller

## ScreenSnapshot

![home](http://192.168.0.54/zheng/dashbord/raw/develop/app/images/home_snapshot.png)

![create_vm](http://192.168.0.54/zheng/dashbord/raw/release/0.0.1/app/images/create_vm_snapshot.png)

## How to Develop this?

Dashbord is build by [yeoman](http://yeoman.io/index.html) a **MODERN WORKFLOWS FOR MODERN WEBAPPS** And develop by [Angular.js](http://angularjs.org/).

* install the npm requirements.

```
npm install
``` 

* install the bower requirements

```
bower install
```

* the base operation of yeoman

```
yo angular:controller myController
yo angular:directive myDirective
yo angular:filter myFilter
yo angular:service myService
```

* run test

```
grunt test
```

* run application

```
grunt server
```

this operation will start a simple http server on port 9000, [http://127.0.0.1:9000/](http://127.0.0.1:9000/), and this server will auto reload the bowers if the any file has change.

* build

```
grunt build
```

this operation will build the application to the **dict** floder.