# Server Unary

```javascript
// /server/handlers.js
function someServerStreamHandler(response) {
  response
    .on('data', (data) => console.log(data)))
    .on('metadata', (metadata) => metadata.getMap())
    .on('error', (err) => console.error(err))
    .send({msg: 'value', obj: {specific: 99}})
  // only listens once and sends once
}
```

Object for listening for **one** RPC Method **request** and sending **one** RPC Method **response**.

| Passed into as `call`      | Type   | Peer        | Description                                                                                                                            |
| ---------------------------- | -------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `<RPCmethodHandler(call)>` | Object | Stub Duplex | `<RPCmethodName>` defined without `stream` on request and without `stream` on response in `proto`. Peer is defined by methodName at Server |

## Properties
### `.head` 
Metadata `Object` received from stub.

## Methods
### `.on(event, callback)`
Listener for `'data'`, `'metadata'`, `'error'` event from peer.

parameters:

| Name     | Type/Options | Description                                                            |
| ---------- | -------------- | ------------------------------------------------------------------------ |
| event    | String       | Event to listen for from peer.                                         |
|          | 'data'       | Listens for peer response. Callback gets passed `Message`.              |
|          | 'metadata'   | Listens for peer metadata. Callback gets passed `Metadata`.              |
|          | 'error'      | Listens for peer error. Callback gets passed `Error`.              |
| callback | Function     | Is passed `Message` based on event.     |
returns `Server Unary`

### `.set(metadata)`

Emits a `'data'` event and sends `message` to peer.

parameters:

| Name          | Type     | Description                                                                                     |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------- |
| metadata       | Object   | Metadata to be sent to peer. Keys are normalized to lowercase ASCII. |
returns `Server Unary`

### `.send(message)`

Emits a `'data'` event and sends `message` to peer.

parameters:

| Name          | Type     | Description                                                                                     |
|---------------|----------|-------------------------------------------------------------------------------------------------|
| message       | Object   | Properties should match the request `message` defined in the `proto`                            |
returns `Server Unary`

### `.catch(callback)`
Listener for `'error'` event from peer.

parameters:

| Name     | Type     | Parameter | Description                                   |
|----------|----------|-----------|-----------------------------------------------|
| callback(error) | Function | error     | Peer's thrown `error` is passed into callback |
returns `Server Unary`


### `.throw(error, trailers)`
Non-chainable method that cancels ongoing connection. Results in the call ending with a CANCELLED status, unless it has already ended with some other status.

parameters:

| Name          | Type     | Description                                                                                     |
|---------------|----------|-------------------------------------------------------------------------------------------------|
| error       | Error   | Error to be sent to Peer                            |
| trailers       | Object   | Metadata to be sent to peer with error                            |

returns `undefined`

### `.getPeer()`
Non-chainable method that returns peer's URI.

returns `string` URI of peer