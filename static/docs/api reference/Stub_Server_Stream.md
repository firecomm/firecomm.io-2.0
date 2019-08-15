# Stub Server-Stream Request

```javascript
// /clients/someClient.js
const { Stub } = require( 'firecomm' );
const package = require( '../package.js' )
const stub = new Stub( 
  package.SomeService, 
  'localhost: 3000',
);

const serverStream = stub.someServerStream({thisIsMetadata: 'example'})
  .send({one: 'request'})
  .on( 'metadata', (metadata) => {
    console.log(metadata.getMap())
  })
  .on( 'error', (err) => console.error(err))
  .on( 'data', (data) => {
    console.log(data);
  })
```

Object for sending **one** stream-starting RPC Method **request** and listening for **any number** of RPC Method **responses**.

| Returned from          | Type   | Peer         | Description                                                                |
| ------------------------ | -------- | -------------- | ---------------------------------------------------------------------------- |
| `Stub.<RPCmethodName>()` | Object | Server-Stream | `<RPCmethodName>` defined without `stream` on request and with `stream` on response in `proto`. Peer is defined by methodName at Server | 

## Methods

### `.on(event, callback)`
Listener for `'data'`, `error`, `'metadata'`, or `'status'` event from peer.

parameters:

| Name     | Type/Options | Description                                                            |
| ---------- | -------------- | ------------------------------------------------------------------------ |
| event    | String       | Event to listen for from peer.                                         |
|          | 'data'       | Listens for peer response. Callback gets passed `Message`.              |
|          | 'error'      | Listens for peer thrown error. Callback gets passed `Error`.            |
|          | 'metadata'   | Listens for Metadata object from peer. Callback gets passed `Metadata`. |
|          | 'status'     | Listens for change in connection status. Callback gets passed `Status`. |
| callback | Function     | Is passed `Message`, `Error`, `Metadata`, `Status` based on event.     |
returns `Stub Server-Stream Request` to chain Methods

### `.send(message, flags, flushCallback)`

Emits a `'data'` event and sends `message` to peer.

alias:
> `.write(message, flags, flushCallback)`

parameters:

| Name          | Type     | Description                                                                                     |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------- |
| message       | Object   | Properties should match the request `message` defined in the `proto`                            |
| flags         | Number   | *Optional* Integer matching `propagation flag` Enumerable to modify how the message is written. |
| flushCallback | Function | *Optional* Callback for when this chunk of data is flushed                                      |
returns `Stub Server-Stream Request` to chain Methods

### `.catch(callback)`
Listener for `'error'` event from peer.

alias:
> `.on('error', callback)`

parameters:

| Name     | Type     | Parameter | Description                                   |
| ---------- | ---------- | ----------- | ----------------------------------------------- |
| callback(error) | Function | error     | Peer's thrown `error` is passed into callback |
returns `Stub Server-Stream Request` to chain Methods

### `.cancel()`
Non-chainable method that cancels ongoing connection. Results in the call ending with a CANCELLED status, unless it has already ended with some other status.

alias:

> `.throw()`


returns `undefined`

### `.getPeer()`
Non-chainable method that returns peer's URI.

returns `string` URI of peer