# Package

```javascript
// /some/package.js
const { build } = require( 'firecomm' );
const proto_path = require( '../some/proto/path' );
const package = build( proto_path, { bytes: String } );
module.exports = package;
```

```javascript
// /server/server.js
const { Server } = require( 'firecomm' );
const package = require( '../some/package.js' );
const someHandler } = require ( './someHandlers.js );

new Server()
  .addService( package.ServiceName,   {
  RPCMethodName: someHandler,
})
```

```javascript
// /clients/someClient.js
const { Stub } = require( 'firecomm' );
const package = require( '../some/package.js' )
const stub = new Stub( 
  package.SomeService, 
  'localhost: 3000',
);
```

Compiled `proto` package returned from `firecomm.build()`.

| Returned from | Type   | Description                                                                     |
| --------------- | -------- | --------------------------------------------------------------------------------- |
| `firecomm.build()` | Object | Has each `service` as a property as it was named in the `proto`. |

## Properties
| Name | Type   | Description                                                                     |
| --------------- |-------- | --------------------------------------------------------------------------------- |
| `<.ServiceName>` | Object | Package has each `service` as a property as it was named in the `proto`. |