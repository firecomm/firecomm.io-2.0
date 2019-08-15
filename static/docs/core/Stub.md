# Stub

How to create a channel and invoke gRPC methods client side. One service per stub; however, you can have multiple stubs for the same service.

To construct the stub, pass the gRPC service as the first parameter and the IP:PORT you would like to connect to the server on for the second parameter. 

> NOTE: You may optionally pass a third parameter, a config object. The config matches the channel options that you can pass into the [vanilla gRPC client constructor](https://grpc.github.io/grpc/core/group__grpc__arg__keys.html). If you instantiated your server with SSL for the port you are trying to connect to, you must pass the same certificate to the stub.

> NOTE: The service in this instance comes from a built .proto packaged object, using the [build](https://firecomm.github.io/docs/core/build) function.

```javascript
const { Stub } = require( "firecomm" );
const service = require("./service.js");
const sslCertificate = require("./sslCertificate.crt");
const stub = new Stub(
  service, 
  "localhost:3000", 
  { certificate: sslCertificate }
);

stub.sayHello().send( { greeting:"Hello world." } );
```

The primary functionality for the stub can be broken down as follows.

  1.  The constructor, which will allow you to instantiate a channel for that service.
  2.  Your gRPC methods from your proto service, which have been extended by Firecomm with added functionality and simplified syntax;
  3.  The methods that are available on an ordinary gRPC client/channel.

## Constructor

The `Stub` constructor generates an instance of Firecomm's `Stub` class, which extends the native gRPC client-service instance. To connect with SSL, pass a cerificate path directly into the Stub.

```javascript
const { Stub } = require( "firecomm" );
const service = require("./service.js");
const path = require("path");
const sslCertificate = path.join(__dirname, "./sslCertificate.crt");
const stub = new Stub(
  service, 
  "localhost:3000", 
  { certificate: sslCertificate }
);
```

## gRPC Service Method Calls

After constructing a new instance of your service stub, all methods that are on the gRPC service will be available as methods on your stub. 

## gRPC client/channel methods

For a list of all of the gRPC options that can be passed into Stubs please see the [gRPC-node official API reference](https://grpc.github.io/grpc/node/grpc.Client.html).