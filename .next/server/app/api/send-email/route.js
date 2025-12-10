"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/send-email/route";
exports.ids = ["app/api/send-email/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.js&appDir=%2Fvar%2Fwww%2Fhtml%2Fpf%2Fmynewportfolio%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fvar%2Fwww%2Fhtml%2Fpf%2Fmynewportfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.js&appDir=%2Fvar%2Fwww%2Fhtml%2Fpf%2Fmynewportfolio%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fvar%2Fwww%2Fhtml%2Fpf%2Fmynewportfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _var_www_html_pf_mynewportfolio_app_api_send_email_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/send-email/route.js */ \"(rsc)/./app/api/send-email/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/send-email/route\",\n        pathname: \"/api/send-email\",\n        filename: \"route\",\n        bundlePath: \"app/api/send-email/route\"\n    },\n    resolvedPagePath: \"/var/www/html/pf/mynewportfolio/app/api/send-email/route.js\",\n    nextConfigOutput,\n    userland: _var_www_html_pf_mynewportfolio_app_api_send_email_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/send-email/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZC1lbWFpbCUyRnJvdXRlLmpzJmFwcERpcj0lMkZ2YXIlMkZ3d3clMkZodG1sJTJGcGYlMkZteW5ld3BvcnRmb2xpbyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGdmFyJTJGd3d3JTJGaHRtbCUyRnBmJTJGbXluZXdwb3J0Zm9saW8maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDc0Q7QUFDdkM7QUFDeUI7QUFDeEY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDaUo7O0FBRWpKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXluZXdwb3J0Zm9saW8vPzNlYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibmV4dC9kaXN0L3NlcnZlci9ub2RlLXBvbHlmaWxsLWhlYWRlcnNcIjtcbmltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi92YXIvd3d3L2h0bWwvcGYvbXluZXdwb3J0Zm9saW8vYXBwL2FwaS9zZW5kLWVtYWlsL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zZW5kLWVtYWlsL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2VuZC1lbWFpbFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2VuZC1lbWFpbC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi92YXIvd3d3L2h0bWwvcGYvbXluZXdwb3J0Zm9saW8vYXBwL2FwaS9zZW5kLWVtYWlsL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3NlbmQtZW1haWwvcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.js&appDir=%2Fvar%2Fwww%2Fhtml%2Fpf%2Fmynewportfolio%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fvar%2Fwww%2Fhtml%2Fpf%2Fmynewportfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/send-email/route.js":
/*!*************************************!*\
  !*** ./app/api/send-email/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n// Configure your email and app password here\nconst EMAIL_USER = process.env.EMAIL_USER || \"rishabkhanna26@gmail.com\"; // Sending email\nconst EMAIL_RECEIVE = process.env.EMAIL_RECEIVE || \"teamalgoaura@gmail.com\"; // Receiving email\nconst EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || \"\"; // Use app password, not regular password\n// Create transporter for Gmail using app password\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n    service: \"gmail\",\n    auth: {\n        user: EMAIL_USER,\n        pass: EMAIL_PASSWORD\n    }\n});\nasync function POST(request) {\n    try {\n        const { name, email, message } = await request.json();\n        // Validate input\n        if (!name || !email || !message) {\n            return new Response(JSON.stringify({\n                error: \"Missing required fields\"\n            }), {\n                status: 400,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n        // Validate email format\n        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n        if (!emailRegex.test(email)) {\n            return new Response(JSON.stringify({\n                error: \"Invalid email address\"\n            }), {\n                status: 400,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n        // Send email to your inbox\n        const mailOptions = {\n            from: EMAIL_USER,\n            to: EMAIL_RECEIVE,\n            subject: `New message from ${name}`,\n            html: `\n        <h2>New Contact Form Submission</h2>\n        <p><strong>Name:</strong> ${escapeHtml(name)}</p>\n        <p><strong>Email:</strong> ${escapeHtml(email)}</p>\n        <p><strong>Message:</strong></p>\n        <p>${escapeHtml(message).replace(/\\n/g, \"<br>\")}</p>\n      `,\n            replyTo: email\n        };\n        await transporter.sendMail(mailOptions);\n        return new Response(JSON.stringify({\n            success: true,\n            message: \"Email sent successfully!\"\n        }), {\n            status: 200,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (error) {\n        console.error(\"Email send error:\", error);\n        return new Response(JSON.stringify({\n            error: \"Failed to send email. Please check your email credentials.\",\n            details: error.message\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n// Helper function to escape HTML and prevent XSS\nfunction escapeHtml(text) {\n    const map = {\n        \"&\": \"&amp;\",\n        \"<\": \"&lt;\",\n        \">\": \"&gt;\",\n        '\"': \"&quot;\",\n        \"'\": \"&#039;\"\n    };\n    return text.replace(/[&<>\"']/g, (m)=>map[m]);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlbmQtZW1haWwvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0M7QUFFcEMsNkNBQTZDO0FBQzdDLE1BQU1DLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0YsVUFBVSxJQUFJLDRCQUE0QixnQkFBZ0I7QUFDekYsTUFBTUcsZ0JBQWdCRixRQUFRQyxHQUFHLENBQUNDLGFBQWEsSUFBSSwwQkFBMEIsa0JBQWtCO0FBQy9GLE1BQU1DLGlCQUFpQkgsUUFBUUMsR0FBRyxDQUFDRSxjQUFjLElBQUksSUFBSSx5Q0FBeUM7QUFFbEcsa0RBQWtEO0FBQ2xELE1BQU1DLGNBQWNOLHVEQUEwQixDQUFDO0lBQzdDUSxTQUFTO0lBQ1RDLE1BQU07UUFDSkMsTUFBTVQ7UUFDTlUsTUFBTU47SUFDUjtBQUNGO0FBRU8sZUFBZU8sS0FBS0MsT0FBTztJQUNoQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFLEdBQUcsTUFBTUgsUUFBUUksSUFBSTtRQUVuRCxpQkFBaUI7UUFDakIsSUFBSSxDQUFDSCxRQUFRLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUztZQUMvQixPQUFPLElBQUlFLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsT0FBTztZQUEwQixJQUNsRDtnQkFBRUMsUUFBUTtnQkFBS0MsU0FBUztvQkFBRSxnQkFBZ0I7Z0JBQW1CO1lBQUU7UUFFbkU7UUFFQSx3QkFBd0I7UUFDeEIsTUFBTUMsYUFBYTtRQUNuQixJQUFJLENBQUNBLFdBQVdDLElBQUksQ0FBQ1YsUUFBUTtZQUMzQixPQUFPLElBQUlHLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsT0FBTztZQUF3QixJQUNoRDtnQkFBRUMsUUFBUTtnQkFBS0MsU0FBUztvQkFBRSxnQkFBZ0I7Z0JBQW1CO1lBQUU7UUFFbkU7UUFFQSwyQkFBMkI7UUFDM0IsTUFBTUcsY0FBYztZQUNsQkMsTUFBTTFCO1lBQ04yQixJQUFJeEI7WUFDSnlCLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRWYsS0FBSyxDQUFDO1lBQ25DZ0IsTUFBTSxDQUFDOztrQ0FFcUIsRUFBRUMsV0FBV2pCLE1BQU07bUNBQ2xCLEVBQUVpQixXQUFXaEIsT0FBTzs7V0FFNUMsRUFBRWdCLFdBQVdmLFNBQVNnQixPQUFPLENBQUMsT0FBTyxRQUFRO01BQ2xELENBQUM7WUFDREMsU0FBU2xCO1FBQ1g7UUFFQSxNQUFNVCxZQUFZNEIsUUFBUSxDQUFDUjtRQUUzQixPQUFPLElBQUlSLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztZQUFFZSxTQUFTO1lBQU1uQixTQUFTO1FBQTJCLElBQ3BFO1lBQUVNLFFBQVE7WUFBS0MsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7UUFBRTtJQUVuRSxFQUFFLE9BQU9GLE9BQU87UUFDZGUsUUFBUWYsS0FBSyxDQUFDLHFCQUFxQkE7UUFDbkMsT0FBTyxJQUFJSCxTQUNUQyxLQUFLQyxTQUFTLENBQUM7WUFDYkMsT0FBTztZQUNQZ0IsU0FBU2hCLE1BQU1MLE9BQU87UUFDeEIsSUFDQTtZQUFFTSxRQUFRO1lBQUtDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1FBQUU7SUFFbkU7QUFDRjtBQUVBLGlEQUFpRDtBQUNqRCxTQUFTUSxXQUFXTyxJQUFJO0lBQ3RCLE1BQU1DLE1BQU07UUFDVixLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztJQUNQO0lBQ0EsT0FBT0QsS0FBS04sT0FBTyxDQUFDLFlBQVksQ0FBQ1EsSUFBTUQsR0FBRyxDQUFDQyxFQUFFO0FBQy9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXluZXdwb3J0Zm9saW8vLi9hcHAvYXBpL3NlbmQtZW1haWwvcm91dGUuanM/M2VmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcblxuLy8gQ29uZmlndXJlIHlvdXIgZW1haWwgYW5kIGFwcCBwYXNzd29yZCBoZXJlXG5jb25zdCBFTUFJTF9VU0VSID0gcHJvY2Vzcy5lbnYuRU1BSUxfVVNFUiB8fCAncmlzaGFia2hhbm5hMjZAZ21haWwuY29tJzsgLy8gU2VuZGluZyBlbWFpbFxuY29uc3QgRU1BSUxfUkVDRUlWRSA9IHByb2Nlc3MuZW52LkVNQUlMX1JFQ0VJVkUgfHwgJ3RlYW1hbGdvYXVyYUBnbWFpbC5jb20nOyAvLyBSZWNlaXZpbmcgZW1haWxcbmNvbnN0IEVNQUlMX1BBU1NXT1JEID0gcHJvY2Vzcy5lbnYuRU1BSUxfUEFTU1dPUkQgfHwgJyc7IC8vIFVzZSBhcHAgcGFzc3dvcmQsIG5vdCByZWd1bGFyIHBhc3N3b3JkXG5cbi8vIENyZWF0ZSB0cmFuc3BvcnRlciBmb3IgR21haWwgdXNpbmcgYXBwIHBhc3N3b3JkXG5jb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgc2VydmljZTogJ2dtYWlsJyxcbiAgYXV0aDoge1xuICAgIHVzZXI6IEVNQUlMX1VTRVIsXG4gICAgcGFzczogRU1BSUxfUEFTU1dPUkQsXG4gIH0sXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRcbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsIHx8ICFtZXNzYWdlKSB7XG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnTWlzc2luZyByZXF1aXJlZCBmaWVsZHMnIH0pLFxuICAgICAgICB7IHN0YXR1czogNDAwLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGVtYWlsIGZvcm1hdFxuICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLztcbiAgICBpZiAoIWVtYWlsUmVnZXgudGVzdChlbWFpbCkpIHtcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnIH0pLFxuICAgICAgICB7IHN0YXR1czogNDAwLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFNlbmQgZW1haWwgdG8geW91ciBpbmJveFxuICAgIGNvbnN0IG1haWxPcHRpb25zID0ge1xuICAgICAgZnJvbTogRU1BSUxfVVNFUixcbiAgICAgIHRvOiBFTUFJTF9SRUNFSVZFLFxuICAgICAgc3ViamVjdDogYE5ldyBtZXNzYWdlIGZyb20gJHtuYW1lfWAsXG4gICAgICBodG1sOiBgXG4gICAgICAgIDxoMj5OZXcgQ29udGFjdCBGb3JtIFN1Ym1pc3Npb248L2gyPlxuICAgICAgICA8cD48c3Ryb25nPk5hbWU6PC9zdHJvbmc+ICR7ZXNjYXBlSHRtbChuYW1lKX08L3A+XG4gICAgICAgIDxwPjxzdHJvbmc+RW1haWw6PC9zdHJvbmc+ICR7ZXNjYXBlSHRtbChlbWFpbCl9PC9wPlxuICAgICAgICA8cD48c3Ryb25nPk1lc3NhZ2U6PC9zdHJvbmc+PC9wPlxuICAgICAgICA8cD4ke2VzY2FwZUh0bWwobWVzc2FnZSkucmVwbGFjZSgvXFxuL2csICc8YnI+Jyl9PC9wPlxuICAgICAgYCxcbiAgICAgIHJlcGx5VG86IGVtYWlsLFxuICAgIH07XG5cbiAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucyk7XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnRW1haWwgc2VudCBzdWNjZXNzZnVsbHkhJyB9KSxcbiAgICAgIHsgc3RhdHVzOiAyMDAsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH1cbiAgICApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0VtYWlsIHNlbmQgZXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVycm9yOiAnRmFpbGVkIHRvIHNlbmQgZW1haWwuIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGNyZWRlbnRpYWxzLicsXG4gICAgICAgIGRldGFpbHM6IGVycm9yLm1lc3NhZ2UsXG4gICAgICB9KSxcbiAgICAgIHsgc3RhdHVzOiA1MDAsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH1cbiAgICApO1xuICB9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBlc2NhcGUgSFRNTCBhbmQgcHJldmVudCBYU1NcbmZ1bmN0aW9uIGVzY2FwZUh0bWwodGV4dCkge1xuICBjb25zdCBtYXAgPSB7XG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiMwMzk7JyxcbiAgfTtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvWyY8PlwiJ10vZywgKG0pID0+IG1hcFttXSk7XG59XG4iXSwibmFtZXMiOlsibm9kZW1haWxlciIsIkVNQUlMX1VTRVIiLCJwcm9jZXNzIiwiZW52IiwiRU1BSUxfUkVDRUlWRSIsIkVNQUlMX1BBU1NXT1JEIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZXJ2aWNlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwiUE9TVCIsInJlcXVlc3QiLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwianNvbiIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwic3RhdHVzIiwiaGVhZGVycyIsImVtYWlsUmVnZXgiLCJ0ZXN0IiwibWFpbE9wdGlvbnMiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiaHRtbCIsImVzY2FwZUh0bWwiLCJyZXBsYWNlIiwicmVwbHlUbyIsInNlbmRNYWlsIiwic3VjY2VzcyIsImNvbnNvbGUiLCJkZXRhaWxzIiwidGV4dCIsIm1hcCIsIm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/send-email/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.js&appDir=%2Fvar%2Fwww%2Fhtml%2Fpf%2Fmynewportfolio%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fvar%2Fwww%2Fhtml%2Fpf%2Fmynewportfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();