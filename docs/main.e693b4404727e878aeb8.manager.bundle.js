(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{382:function(module){module.exports=JSON.parse('{"name":"sveltestrap","version":"5.5.1","main":"dist/sveltestrap.js","module":"dist/sveltestrap.es.js","jsnext:main":"dist/sveltestrap.es.js","svelte":"src/index.js","types":"src/index.d.ts","keywords":["svelte"],"repository":{"type":"git","url":"git@github.com:bestguy/sveltestrap.git"},"files":["dist","src"],"scripts":{"start":"start-storybook -p 6006","check":"svelte-check --tsconfig ./tsconfig.json","dist":"rollup -c","docs":"build-storybook -o docs && cp CNAME ./docs && cp -r ./v4 ./docs","format":"prettier --write --plugin-search-dir=. ./src ./stories ./.storybook","lint":"tsc --noEmit && eslint ./src --ext .js --ext .svelte","prepublish":"npm run dist && git add -A dist","postpublish":"git push && git push --tags","test":"jest --maxWorkers=2 --verbose","test:watch":"jest --maxWorkers=2 --verbose --watchAll","version":"npm run dist && npm run docs && git add -A"},"peerDependencies":{"svelte":"^3.29.0"},"devDependencies":{"@babel/cli":"^7.14.5","@babel/core":"^7.14.5","@babel/preset-env":"^7.14.5","@babel/preset-typescript":"^7.14.5","@rollup/plugin-commonjs":"^19.0.0","@rollup/plugin-node-resolve":"^13.0.0","@rollup/plugin-typescript":"^8.2.1","@storybook/addon-actions":"^6.2.9","@storybook/addon-knobs":"^6.2.9","@storybook/addon-links":"^6.2.9","@storybook/addon-options":"^5.3.21","@storybook/addon-storysource":"^6.2.9","@storybook/addons":"^6.2.9","@storybook/svelte":"^6.2.9","@testing-library/jest-dom":"^5.13.0","@testing-library/svelte":"^3.0.3","@tsconfig/svelte":"^2.0.1","autoprefixer":"^9.8.6","babel-jest":"^26.6.3","babel-loader":"^8.2.2","clean-webpack-plugin":"^3.0.0","conventional-changelog-cli":"^2.1.1","copy-webpack-plugin":"^6.4.1","cross-env":"^7.0.3","eslint":"^7.28.0","eslint-plugin-jest":"^24.3.6","eslint-plugin-svelte3":"^3.2.0","get-port-cli":"^2.0.0","jest":"^26.6.3","jest-transform-svelte":"^2.1.1","json-loader":"^0.5.7","mini-css-extract-plugin":"^1.6.0","npm-run-all":"^4.1.5","postcss":"^8.2.10","prettier":"^2.3.1","prettier-plugin-svelte":"^2.3.0","prismjs":"^1.23.0","raw-loader":"^4.0.2","rollup":"^2.51.1","rollup-plugin-alias":"^2.2.0","rollup-plugin-analyzer":"^4.0.0","rollup-plugin-babel":"^4.4.0","rollup-plugin-bundle-size":"^1.0.3","rollup-plugin-copy":"^3.4.0","rollup-plugin-livereload":"^2.0.0","rollup-plugin-peer-deps-external":"^2.2.4","rollup-plugin-svelte":"^7.1.0","rollup-plugin-terser":"^7.0.2","sirv-cli":"^1.0.12","standard-version":"^9.3.0","svelte":"^3.38.2","svelte-check":"^2.1.0","svelte-jester":"^1.7.0","svelte-loader":"^3.1.1","svelte-preprocess":"^4.7.3","typescript":"^4.3.2","wait-for-localhost-cli":"^2.0.0","webpack":"^4.46.0","webpack-cli":"^3.3.12","webpack-dev-server":"^3.11.2"},"dependencies":{"@popperjs/core":"^2.9.2"},"browserslist":"last 2 versions"}')},401:function(module,exports,__webpack_require__){__webpack_require__(402),__webpack_require__(561),__webpack_require__(779),module.exports=__webpack_require__(778)},472:function(module,exports){},561:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_addons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(61),_storybook_theming_create__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(384),_package_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(382);_storybook_addons__WEBPACK_IMPORTED_MODULE_0__.c.setConfig({theme:Object(_storybook_theming_create__WEBPACK_IMPORTED_MODULE_1__.create)({base:"dark",brandTitle:'<span class="d-flex align-items-center justify-content-center" style="display: flex; align-items: center; color: #ae81ff; font-weight: 400; letter-spacing: 0.1rem;">\n      <svg height="2em" viewBox="0 0 39.6 45" xmlns="http://www.w3.org/2000/svg" style="margin-right: .5rem"><g transform="translate(2.5, 2.5)"><polyline points="0,30 17.3,40 34.6,30 34.6,20 17.3,30 0,20 0,10 17.3,0 34.6,10 17.3,20 0,10" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></g></svg>\n      <div>\n        SVELTESTRAP<br />\n        <small>'.concat(_package_json__WEBPACK_IMPORTED_MODULE_2__.version,"</small>\n      </div>\n    </span>"),brandUrl:"https://github.com/bestguy/sveltestrap"})})},778:function(module,exports,__webpack_require__){"use strict";__webpack_require__(94).addons.setConfig({refs:{}})}},[[401,2,3]]]);