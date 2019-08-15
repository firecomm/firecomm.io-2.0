# Stub Calls

Stub calls are generated when you invoke a gRPC method on a Stub instance. They have slightly different syntax.

> NOTE: To send messages with vanilla gRPC stub methods, you would pass the message, interceptors, and metadata into the main function. For separation of concerns, you now pass messages through the .send() method.

```javascript
const { Stub } = require("firecomm");

const stubInstance = new Stub("localhost:3000");

// create a call by invoking the method
const call = stubInstance.duplexStreamingMethod();
// send data
call.send({message: "second message" });
// add a listener for the response
call.on('data', data => console.log(data));
```

## Chaining

The following is functionally the same as the above.

```javascript
const { Stub } = require("firecomm");

const stubInstance = new Stub("localhost:3000");

// create a call by invoking the method and chain the sending and adding listeners to the response
stubInstance.duplexStreamingMethod()
.send({message: "second message" })
.on('data', data => console.log(data));
```