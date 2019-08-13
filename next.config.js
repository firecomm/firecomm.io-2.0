// next.config.js
const withSass = require("@zeit/next-sass");
const highlight = require("highlight.js");

module.exports = withSass({
  /* config options here */
  cssModules: true,
  // webpack: config => {
  //   config.module.rules.push({
  //     test: /\.(md)$/,
  //     use: [
  //       "html-loader",
  //       {
  //         loader: "markdown-loader",
  //         options: {
  //           highlight: (code, lang) => {
  //             if (!lang || ["text", "literal", "nohighlight"].includes(lang)) {
  //               return `<pre class="hljs"><code>${code}</code></pre>`;
  //             }
  //             const html = highlight.highlight(lang, code).value;
  //             return `<span class="hljs">${html}</span>`;
  //           }
  //         }
  //       }
  //     ]
  //   });

  //   return config;
  // }
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  }
});
