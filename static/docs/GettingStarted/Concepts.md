# Concepts

For those familiar with gRPC and looking to dive into code, it may make more sense to skip straght to the [Intro](firecomm.github.io/docs/gettingstarted/intro).
This section seeks to provide a brief overview of the core concepts of Firecomm, which mirror the core concepts of gRPC.

> Firecomm is a framework for gRPC which allows Node.js developers to quickly spin up powerful gRPC microservice communication architectures with a simplified API.

Firecomm was designed by a team of Node.js engineers who designed an interal wrapper for Google's gRPC-node library in their microservice architecture journey. Along the way, they created a more consistent and DRY syntax, with support for features like SSL, health-check, and   decided to open-source the project.

The project is continually maintained, so for those looking to contribute, please do not hesitate to [message the Firecomm team](mailto://firecommgrpc@gmail.com), or make an Issue/PR on our [Github repository](https://github.com/firecomm/firecomm).


As in ordinary RESTful communication, there are computers who make the request (Clients, called "Stubs" in gRPC) and computers who handle the requests (Servers)

The basic framework operates around gRPC's `Servers` and `Stubs`. Everything found in the library assists developers with either `Servers` or `Stubs`. 

Such as:
- creating the logical skeleton for Server and Stub setup (build)
- configuring Servers and Stubs (Server constructor and Stub constructor)
- adding handlers, middleware, and logic to Servers (Server.addService())
- facilitating communication between Servers and Stubs (Stub methods and Calls)