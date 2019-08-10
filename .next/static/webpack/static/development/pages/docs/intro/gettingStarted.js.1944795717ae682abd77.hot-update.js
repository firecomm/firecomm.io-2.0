webpackHotUpdate("static/development/pages/docs/intro/gettingStarted.js",{

/***/ "./pages/docs/intro/gettingStarted.jsx":
/*!*********************************************!*\
  !*** ./pages/docs/intro/gettingStarted.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DocsContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/DocsContent */ "./components/DocsContent.jsx");
/* harmony import */ var _static_docs_gettingstarted_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../static/docs/gettingstarted.md */ "./static/docs/gettingstarted.md");
/* harmony import */ var _static_docs_gettingstarted_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_docs_gettingstarted_md__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/morgancrena/Desktop/Mini Desktop/Codesmith NY12/Production Project/firecomm.io-2.0/pages/docs/intro/gettingStarted.jsx";




var GettingStarted = function GettingStarted(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DocsContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    content: _static_docs_gettingstarted_md__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (GettingStarted);

/***/ }),

/***/ "./static/docs/gettingstarted.md":
/*!***************************************!*\
  !*** ./static/docs/gettingstarted.md ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"getting-started\">Getting Started</h1>\n<h2 id=\"install\">Install</h2>\n<pre><code><pre class=\"hljs\"><code>npm i --save firecomm</code></pre></code></pre><h2 id=\"1-define-a-proto-file\">1. Define a <code>.proto</code> file</h2>\n<p>Let&#39;s begin by creating a file named <code>exampleAPI.proto</code> that will live inside a <code>proto</code> folder. The <code>ProtoBuf</code> we define in this file will define the name of the <code>package</code>, the names of the <code>service</code>s, the <code>rpc</code> methods, what the client <code>Stub</code> sends, what the <code>Server</code> returns, and the structured data that is part of each <code>message</code>.</p>\n<pre><code class=\"language-protobuf\"><span class=\"hljs\"><span class=\"hljs-comment\">// proto/exampleAPI.proto</span>\nsyntax proto3\n\n<span class=\"hljs-keyword\">package</span> exampleAPI\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">service</span> <span class=\"hljs-title\">FileTransfer</span> </span>{\n  <span class=\"hljs-function\"><span class=\"hljs-keyword\">rpc</span> ClientToServer (stream File) <span class=\"hljs-keyword\">returns</span> (Confirmation) {}</span>;\n  <span class=\"hljs-function\"><span class=\"hljs-keyword\">rpc</span> ServerToClient (Confirmation) <span class=\"hljs-keyword\">returns</span> (stream File) {}</span>;\n}\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">service</span> <span class=\"hljs-title\">HeavyMath</span> </span>{\n  <span class=\"hljs-function\"><span class=\"hljs-keyword\">rpc</span> UnaryMath (Math) <span class=\"hljs-keyword\">returns</span> (Math) {}</span>;\n  <span class=\"hljs-function\"><span class=\"hljs-keyword\">rpc</span> BidiMath (stream Math) <span class=\"hljs-keyword\">returns</span> (stream Math) {}</span>;\n}\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">message</span> <span class=\"hljs-title\">Confirmation</span> </span>{\n  <span class=\"hljs-built_in\">bool</span> status = <span class=\"hljs-number\">1</span>;\n  <span class=\"hljs-built_in\">string</span> comments = <span class=\"hljs-number\">2</span>;\n}\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">message</span> <span class=\"hljs-title\">File</span> </span>{\n  <span class=\"hljs-built_in\">bytes</span> fileBuffer = <span class=\"hljs-number\">1</span>;\n}\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">message</span> <span class=\"hljs-title\">Math</span> </span>{\n  <span class=\"hljs-built_in\">double</span> num = <span class=\"hljs-number\">1</span>;\n}</span></code></pre>\n<blockquote>\n<p>Each <code>rpc</code> Method clearly defines request/response, client <code>Stub</code> to <code>Server</code> regardless of call type. For example:</p>\n<pre><code class=\"language-protobuf\"><span class=\"hljs\"><span class=\"hljs-comment\">//    MethodName    Stub/request         Server/response</span>\n<span class=\"hljs-function\"><span class=\"hljs-keyword\">rpc</span> ClientToServer (stream File) <span class=\"hljs-keyword\">returns</span> (Confirmation) {}</span>;</span></code></pre>\n</blockquote>\n<h2 id=\"2-lets-build-a-package\">2. Let&#39;s <code>build()</code> a <code>package</code></h2>\n<p>Now that we&#39;ve defined our API in a ProtoBuf, let&#39;s pass an absolute path to our <code>.proto</code> file to build a <code>package</code>. We will create a <code>package.js</code> file which will live in our root folder and <code>export</code> a configured <code>package</code> containing the transpiled <code>service</code>s and <code>rpc</code> methods.</p>\n<p>We will also define our configuration for how our packaged methods will handle different data types.</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\"><span class=\"hljs-comment\">// package.js</span>\n<span class=\"hljs-keyword\">const</span> { build } = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'firecomm'</span> );\n<span class=\"hljs-keyword\">const</span> path = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'path'</span> );\n<span class=\"hljs-keyword\">const</span> PROTO_PATH = path.join( __dirname, <span class=\"hljs-string\">'./proto/exampleAPI.proto'</span> );\n\n<span class=\"hljs-keyword\">const</span> CONFIG_OBJECT = {\n  <span class=\"hljs-attr\">keepCase</span>: <span class=\"hljs-literal\">true</span>, <span class=\"hljs-comment\">// keeps everything camelCased</span>\n  longs: <span class=\"hljs-built_in\">Number</span>, <span class=\"hljs-comment\">// transpiles the enormous `double`s for our HeavyMath into a javascript Number rather than a String</span>\n  bytes: <span class=\"hljs-built_in\">String</span>, <span class=\"hljs-comment\">// helps us manage the FileTransfer bytes as javascript `String`s rather than pure hexadecimal Buffers or uint8Arrays</span>\n}\n<span class=\"hljs-keyword\">const</span> package = build( PROTO_PATH, CONFIG_OBJECT );\n<span class=\"hljs-built_in\">module</span>.exports = package;</span></code></pre>\n<blockquote>\n<p>Advanced Note: whether you&#39;re building a firecomm/gRPC-Node <code>Server</code>, a firecomm/gRPC-Node client with <code>Stub</code>s, or a firecomm/gRPC-Node hybrid client/server, it is important to build a package with configurations that match the API for your distributed system. Every server and client should have the same <code>.proto</code> file regardless of language.</p>\n</blockquote>\n<h2 id=\"3-create-a-server\">3. Create a server</h2>\n<p>Next, we will create a <code>new Server()</code> inside a <code>server.js</code> file which will live in a <code>server</code> folder. </p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\"><span class=\"hljs-comment\">// /server/server.js</span>\n<span class=\"hljs-keyword\">const</span> { Server } = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'firecomm'</span> );\n<span class=\"hljs-keyword\">const</span> server = <span class=\"hljs-keyword\">new</span> Server();</span></code></pre>\n<h2 id=\"4-define-the-server-side-handlers-for-our-filetransfer-service\">4. Define the server-side handlers for our <code>FileTransfer</code> service.</h2>\n<p>Let&#39;s define handler functions for our two <code>FileTransfer</code> <code>rpc</code> methods. Method handler functions will contain the server-side logic for our <code>service</code>s. Let&#39;s create a <code>fileTransferHandlers.js</code> file which will live inside our <code>server</code> folder.</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\"><span class=\"hljs-comment\">// /server/fileTransferHandlers.js</span>\nClientToServerHandler( CALL ) {\n  CALL.send({ <span class=\"hljs-attr\">response</span>: value });\n};\nServerToClientHandler( CALL ) {\n  CALL.on(<span class=\"hljs-string\">'data'</span>, request =&gt; someFunctionality(request));\n  CALL.send({ <span class=\"hljs-attr\">response</span>: value });\n};\n<span class=\"hljs-built_in\">module</span>.exports = { \n    ClientToServerHandler,\n    ServerToClientHandler,\n}</span></code></pre>\n<h2 id=\"5-define-the-server-side-handlers-for-our-heavymath-service\">5. Define the server-side handlers for our <code>HeavyMath</code> service.</h2>\n<p>Let&#39;s define handler functions for our two HeavyMath methods. Let&#39;s continue by defining the handlers for our <code>HeavyMath</code> service in a <code>heavyMathHandlers.js</code> file which will live inside our <code>server</code> folder.</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\"><span class=\"hljs-comment\">// /server/heavyMathHandlers.js</span>\nUnaryMathHandler( CALL ) {\n  CALL.send({ <span class=\"hljs-attr\">response</span>: value });\n};\nBidiMathHandler( CALL ) {\n  CALL.on(<span class=\"hljs-string\">'data'</span>, request =&gt; someFunctionality(request));\n  CALL.send({ <span class=\"hljs-attr\">response</span>: value });\n};\n<span class=\"hljs-built_in\">module</span>.exports = { \n    UnaryMathHandler,\n    BidiMathHandler,\n}</span></code></pre>\n<h2 id=\"6-add-each-service-from-the-package-to-the-server\">6. Add each <code>service</code> from the package to the <code>Server</code></h2>\n<p>Let&#39;s now return to the <code>server.js</code> file and map each <code>service</code> onto our <code>Server</code>. Mirroring the structure of the <code>.proto</code> file we transpiled, the <code>package</code> object we built has both of the <code>service</code>s on it as properties. We use the <code>Server</code> method <code>.addService</code> to add the <code>services</code> one at a time and map each of the <code>rpc</code> methods to the handlers we wrote.  </p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\">// /server/server.js\nconst { Server } = require( 'firecomm' );\nconst package = require( '../package.js' );\nconst { ClientToServerHandler,\n    ServerToClientHandler } = require ( './fileTransferHandlers.js );\nconst { UnaryMathHandler,\n    BidiMathHandler } = require ( './heavyMathHandlers.js );\n\nconst server = new Server();\nserver.addService( package.FileTransfer,   { \n  ClientToServer: ClientToServerHandler,\n  ServerToClient: ServerToClientHandler,\n });\n server.addService( package.HeavyMath,   { \n  UnaryMath: UnaryMathHandler,\n  BidiMath: BidiMathHandler,\n });</span></code></pre>\n<blockquote>\n<p>Note: The <code>Server.addService()</code> method also allows the mapping of middleware functions or a middleware stack of functions in the form of an <code>array</code> to be passed in order to influence <code>rpc</code> methods before the handler which should come last in the array. For example: </p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\">server.addService( package.HeavyMath,   &gt; { \n  <span class=\"hljs-attr\">UnaryMath</span>: [ UnaryMathMiddleware, UnaryMathHandler ],\n  <span class=\"hljs-attr\">BidiMath</span>: ServerToClientHandler,\n}, [ serviceLevelMiddleware1, serviceLevelMiddleware2 ]);</span></code></pre>\n</blockquote>\n<h2 id=\"7-bind-the-server-to-sockets\">7. Bind the server to <code>socket</code>(s)</h2>\n<pre><code class=\"language-javascript\"><span class=\"hljs\">// /server/server.js\nconst { Server } = require( 'firecomm' );\nconst package = require( '../package.js' );\nconst { ClientToServerHandler,\n    ServerToClientHandler } = require ( './fileTransferHandlers.js );\nconst { UnaryMathHandler,\n    BidiMathHandler } = require ( './heavyMathHandlers.js );\n\nconst server = new Server();\nserver.addService( package.FileTransfer,   { \n  ClientToServer: ClientToServerHandler,\n  ServerToClient: ServerToClientHandler,\n });\n server.addService( package.HeavyMath,   { \n  UnaryMath: UnaryMathHandler,\n  BidiMath: BidiMathHandler,\n });\nserver.bind('0.0.0.0: 3000');</span></code></pre>\n<blockquote>\n<p>Note: <code>Server</code>s can be passed an array of <code>socket</code>s to bind any number of <code>socket</code>s. For example:</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\">server.bind( [ \n  <span class=\"hljs-string\">'0.0.0.0: 3000'</span>, \n  <span class=\"hljs-string\">'0.0.0.0: 2999'</span>, \n] );</span></code></pre>\n</blockquote>\n<h2 id=\"8-start-the-server\">8. Start the server</h2>\n<pre><code class=\"language-javascript\"><span class=\"hljs\">// /server/server.js\nconst { Server } = require( 'firecomm' );\nconst package = require( '../package.js' );\nconst { ClientToServerHandler,\n    ServerToClientHandler } = require ( './fileTransferHandlers.js );\nconst { UnaryMathHandler,\n    BidiMathHandler } = require ( './heavyMathHandlers.js );\n\nconst server = new Server();\nserver.addService( package.FileTransfer,   { \n  ClientToServer: ClientToServerHandler,\n  ServerToClient: ServerToClientHandler,\n });\n server.addService( package.HeavyMath,   { \n  UnaryMath: UnaryMathHandler,\n  BidiMath: BidiMathHandler,\n });\nserver.bind( [ \n  '0.0.0.0: 3000', \n  '0.0.0.0: 2999', \n] );\nserver.start();</span></code></pre>\n<blockquote>\n<p>Run your new firecomm/gRPC-Node server with: <code>node /server/server.js</code>. It may also be worthwhile to map this command to <code>npm start</code> in your <code>package.json</code>.</p>\n</blockquote>\n<h2 id=\"9--create-a-stub-for-the-filetransfer-service\">9.  Create a <code>Stub</code> for the <code>FileTransfer</code> service:</h2>\n<p>Now that the <code>Server</code> is fully fleshed out, let&#39;s move to the client side by creating a client with <code>Stub</code>s for each <code>rpc</code> method on <code>FileTransfer</code>. Let&#39;s create a <code>fileTransferClient.js</code> file which will live inside our <code>clients</code> folder.</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\"><span class=\"hljs-comment\">// /clients/fileTransfer.js</span>\n<span class=\"hljs-keyword\">const</span> { Stub } = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'firecomm'</span> );\n<span class=\"hljs-keyword\">const</span> package = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'../package.js'</span> )\n<span class=\"hljs-keyword\">const</span> fileTransferStub = <span class=\"hljs-keyword\">new</span> Stub( \n    package.FileTransfer, \n    <span class=\"hljs-string\">'localhost: 3000'</span>,\n);</span></code></pre>\n<blockquote>\n<p>In a real gRPC distributed system with firecomm/gRPC-Node clients, each client will most likely exist separately for each <code>service</code> defined in the shared <code>.proto</code> file. However, clients can actually have any number of <code>Stubs</code> running on them on either the same <code>socket</code> or multiple <code>sockets</code>. Additionally, duplicate clients running the same service(s) can be used to allow server level load-balancing.</p>\n</blockquote>\n<h2 id=\"10--make-clienttoserver-and-servertoclient-service-requests-from-the-stub\">10.  Make <code>ClientToServer</code> and <code>ServerToClient</code> service requests from the <code>Stub</code></h2>\n<pre><code class=\"language-javascript\"><span class=\"hljs\"><span class=\"hljs-comment\">// /clients/fileTransfer.js</span>\n<span class=\"hljs-keyword\">const</span> { Stub } = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'firecomm'</span> );\n<span class=\"hljs-keyword\">const</span> package = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'../package.js'</span> )\n<span class=\"hljs-keyword\">const</span> fileTransferStub = <span class=\"hljs-keyword\">new</span> Stub( \n    package.FileTransfer, \n    <span class=\"hljs-string\">'localhost: 3000'</span>,\n);\n<span class=\"hljs-keyword\">const</span> clientStream = \n  fileTransferStub.ClientToServer( MESSAGE );\n  <span class=\"hljs-comment\">// some logic to warrant a streaming response</span>\n  clientStream.write( MESSAGE );\n<span class=\"hljs-keyword\">const</span> serverStream = \n  fileTransferStub.ServerToClient( MESSAGE );\n  <span class=\"hljs-comment\">// listeners for stream from server</span>\n  serverStream.on( <span class=\"hljs-string\">'data'</span>, response =&gt; \n  someFunctionality(request));</span></code></pre>\n<blockquote>\n<p>Run your new firecomm/gRPC-Node client with: <code>node /clients/fileTransfer.js</code>. It may also be worthwhile to map this command to a custom command like <code>npm run transfer</code> in your <code>package.json</code>.</p>\n</blockquote>\n<h2 id=\"11--create-a-stub-for-the-heavymath-service\">11.  Create a <code>Stub</code> for the <code>HeavyMath</code> service:</h2>\n<p>Now that the <code>Server</code> and <code>FileTransfer</code> Stub are fully fleshed out, let&#39;s create another <code>Stub</code> with access to each <code>rpc</code> method on <code>HeavyMath</code>. We&#39;ll create a <code>heavyMath.js</code> file which will live inside our <code>clients</code> folder.</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\"><span class=\"hljs-comment\">// /clients/heavyMath.js</span>\n<span class=\"hljs-keyword\">const</span> { Stub } = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'firecomm'</span> );\n<span class=\"hljs-keyword\">const</span> package = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'../package.js'</span> )\n<span class=\"hljs-keyword\">const</span> heavyMathStub = <span class=\"hljs-keyword\">new</span> Stub( \n    package.HeavyMath, \n    <span class=\"hljs-string\">'localhost: 2999'</span>,\n);</span></code></pre>\n<blockquote>\n<p>Note: two different clients <em>can</em> share a single socket on the server, in which case all concurrent requests and responses will be multiplexed. However, in a real gRPC distributed system, this is unlikely for two different services to share a socket.</p>\n</blockquote>\n<h2 id=\"12-make-unarymath-and-bidimath-service-requests-from-the-stub\">12. Make <code>UnaryMath</code> and <code>BidiMath</code> service requests from the <code>Stub</code></h2>\n<pre><code class=\"language-javascript\"><span class=\"hljs\"><span class=\"hljs-comment\">// /clients/heavyMath.js</span>\n<span class=\"hljs-keyword\">const</span> { Stub } = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'firecomm'</span> );\n<span class=\"hljs-keyword\">const</span> package = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'../package.js'</span> )\n<span class=\"hljs-keyword\">const</span> heavyMathStub = <span class=\"hljs-keyword\">new</span> Stub( \n    package.HeavyMath, \n    <span class=\"hljs-string\">'localhost: 2999'</span>,\n);\nheavyMathStub.UnaryMath( MESSAGE );\n  <span class=\"hljs-comment\">// some logic to warrant a streaming response</span>\n  clientStream.write( MESSAGE );\n<span class=\"hljs-keyword\">const</span> bidiStream = \n  heavyMathStub.BidiMath( MESSAGE );\n  <span class=\"hljs-comment\">// listeners for stream from server</span>\n  serverStream.on( <span class=\"hljs-string\">'data'</span>, response =&gt; \n  someFunctionality(request));</span></code></pre>\n<blockquote>\n<p>Run your new firecomm/gRPC-Node client with: <code>node /clients/heavyMath.js</code>. It may also be worthwhile to map this command to a custom command like <code>npm run math</code> in your <code>package.json</code>.</p>\n</blockquote>\n";

/***/ })

})
//# sourceMappingURL=gettingStarted.js.1944795717ae682abd77.hot-update.js.map