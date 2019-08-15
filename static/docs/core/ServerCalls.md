# Server Calls

Every time a  gRPC method is invoked, triggered by a Stub, the gRPC server collects information from the TCP request (metadata, request body) and creates an interactable call object that will allow you to send responses. If you are familiar with Express, think of the server-side call as you would a request in a middleware controller. 

For all methods receiving an inbound call, the Firecomm server will look to that method's middleware stack, as defined in [`Server.addService()`](https://firecomm.github.io/docs/core/server). Firecomm takes the original call object produced by the gRPC library and wraps it with more consistent syntax and some extra methods.

An example of how to interact with a call server-side.

```javascript
function myMethodHandlerOrMiddelware(call) {
  call.on('data', data => console.log(data))
  call.on('metadata', metadata => console.log(metadata));
  call.send({ message: 'hello world' })
}
```