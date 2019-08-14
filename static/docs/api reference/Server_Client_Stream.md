# Server Client-Stream Response
Object for sending **one** stream-ending RPC Method **response** and listening for **any number** of RPC Method **requests**.
| Passed into as `call`      | Type   | Peer        | Description                                                                                                                            |
|----------------------------|--------|-------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `<RPCmethodHandler(call)>` | Object | Stub Duplex | `<RPCmethodName>` defined with `stream` on request and without `stream` on response in `proto`. Peer is defined by methodName at Server |

## Properties
### `.head` 
Metadata `Object` received from stub.

## Methods
### `.set(metadata)`

Emits a `'data'` event and sends `message` to peer.

parameters:
| Name          | Type     | Description                                                                                     |
|---------------|----------|-------------------------------------------------------------------------------------------------|
| metadata       | Object   | Metadata to be sent to peer. Keys are normalized to lowercase ASCII. |
returns `Server Client-Stream Response`

### `.send(message)`

Emits a `'data'` event and sends `message` to peer.

parameters:
| Name          | Type     | Description                                                                                     |
|---------------|----------|-------------------------------------------------------------------------------------------------|
| message       | Object   | Properties should match the request `message` defined in the `proto`                            |
returns `Server Client-Stream Response`

### `.catch(callback)`
Listener for `'error'` event from peer.

parameters:
| Name     | Type     | Parameter | Description                                   |
|----------|----------|-----------|-----------------------------------------------|
| callback(error) | Function | error     | Peer's thrown `error` is passed into callback |
returns `Server Client-Stream Response`

### `.on(event, callback)`
Listener for `'data'` event from peer.

parameters:
| Name     | Type/Options | Description                                                            |
|----------|--------------|------------------------------------------------------------------------|
| event    | String       | Event to listen for from peer.                                         |
|          | 'data'       | Listens for peer response. Callback gets passed `Message`.              |
| callback | Function     | Is passed `Message` based on event.     |
returns `Server Client-Stream Response`

### `.throw()`
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