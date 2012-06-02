Simple Web API service in node.js
==========

## What it is ##

This is a simple node.js HTTP application that can be hosted in IIS using iisnode or self-hosted with node directly. It exposes two HTTP APIs:

```GET /Customer/{customerId}``` will return a pre-baked JSON object with customer information.

```POST /Order/{customerId}``` will accept and parse any JSON document in the body of the HTTP requst, and return a pre-baked array of JSON objects representing orders

## Prerequisities ##

- [node.js](http://nodejs.org)  
- [iisnode](http://github.com/tjanczuk/iisnode)

## Setting up ##

```
git clone https://github.com/tjanczuk/webapiperf
cd webapiperf
npm install
```

## Running self-hosted ##

```
cd webapiperf
node server.js
```

Then visit the URL ```http://localhost:8000/Customer/12```.

By default the server will listen on port 8000. This can be overriden by setting the ```PORT``` environment variable before starting node. 

The self-hosted configuration will use cluster to create as many node.exe worker processes as there are CPU cores on the machine. This allows full utilization of the CPU under stress. 

## Running in IIS ##

Create a new Web Site in IIS and point it to the ```webapiperf``` directory. Then visit the url, e.g. ```http://localhost:9000/Customer/12```. 

NOTE: the application must be hosted at the root of the web site, not in a virtual directory underneath in order for the URL paths in the application to match the requests. 