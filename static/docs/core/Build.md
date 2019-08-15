# Build

To build a gRPC package, you first have to create a `.proto` file. More on that in the .proto section (coming soon) and on the [official protocol buffer page](https://developers.google.com/protocol-buffers/docs/overview).


Build starts with a .proto. Take the following .proto file as an example. 

```protobuf
package myPackage

service Greeter {
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

// The request message containing the user's name.
message HelloRequest {
  string name = 1;
}

// The response message containing the greetings
message HelloReply {
  string message = 1;
}
```

From there, you will likely want to access the Services on your .proto packaged object. These can be accessed by the properties on their name. Here's an example of what that would look like.

```javascript
const { build } = require( 'firecomm' );
const proto_path = require( '../some/proto/path' );
const package = build( proto_path, { bytes: String } );

// Packaged service
const service package.Greeter

// export for use in other files
module.exports = {
  service,
  package
};
```