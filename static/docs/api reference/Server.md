# firecomm.Server

```javascript
// /server/server.js
const { Server } = require( 'firecomm' );
const package = require( '../package.js' );
const { someHandler, anotherHandler } = require ( './handlers.js' );

new Server()
  .addService( 
    package.Service,   
    { BidiMath: someHandler }
  )
  .addService( 
    package.AnotherService,   
    { BidiMath: anotherHandler }
  )
  .bind(['0.0.0.0: 3000', '0.0.0.0: 8888'])
  .start();
```

## Constructor
```javascript
new firecomm.Server([options])
```

| Name    | Type   | Description                                                                                                             |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| options | Object | Options that should be passed to the internal server implementation. The available options are listed in Google's grpc-core documentation. |
returns `Server`
## Methods

### .addService(serviceName)

parameters:

| Name              | Type/Properties     | Values          | Description                                                                                                                                                                     |
| ------------------- | --------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| serviceName       | package.ServiceName |                 | The serviceName you're adding will exist as a property on the `package` returned from `firecomm.build()`                                                                        |
| implementation    | Object              |                 | RPC methodNames as properties and handlers/middleware stacks as values.                                                                                                         |
|                   | RPCmethodName       | handlerFunction | Function to be passed `Server Unary`, `Server Client-Stream Response`, `Server Stream`, or `Server Duplex` based on RPC method definition in `proto`.                           |
|                   |                     | middlewareArray | Array of functions from index 0 up to be passed `Server Unary`, `Server Client-Stream Response`, `Server Stream`, or `Server Duplex` based on RPC method definition in `proto`. |
| serviceMiddleware | Array               |                 | Array of functions from index 0 up to be passed `Server Unary`, `Server Client-Stream Response`, `Server Stream`, or `Server Duplex` based on RPC method definition in `proto`. |
| errorCallback     | Function            |                 |                                                                                                                                                                                 |
returns `Server` for chaining methods

### .bind(addresses, sslConfigs)

Method for binding any number of socket addresses and ssl configurations.

parameters:

| Name              | Type/Properties     | Values          | Description                                                                                                                                                                     |
| ------------------- | --------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| address(es)       | string or Array |                 | String or Array of Strings of addresses in format '0.0.0.0:3000'                                                                       |
| sslConfig(s)    | Object or Array             |                 | Object or Array of Objects with properties ssl `privateKey` and ssl `certificate`.                                                                                                         |

returns `Server` for chaining methods

### .start()

Method to start server. Must be invoked last.

returns `undefined`

