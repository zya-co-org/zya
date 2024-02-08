"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tinacms";
exports.ids = ["vendor-chunks/tinacms"];
exports.modules = {

/***/ "(rsc)/./node_modules/tinacms/dist/client.mjs":
/*!**********************************************!*\
  !*** ./node_modules/tinacms/dist/client.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TINA_HOST: () => (/* binding */ TINA_HOST),\n/* harmony export */   TinaClient: () => (/* binding */ TinaClient),\n/* harmony export */   createClient: () => (/* binding */ createClient)\n/* harmony export */ });\n/* harmony import */ var fetch_ponyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fetch-ponyfill */ \"(rsc)/./node_modules/fetch-ponyfill/fetch-node.js\");\n\nconst { fetch: fetchPonyfillFN, Headers: HeadersPonyfill } = fetch_ponyfill__WEBPACK_IMPORTED_MODULE_0__();\nconst fetchDefined = typeof fetch === \"undefined\" ? fetchPonyfillFN : fetch;\nconst HeadersDefined = typeof Headers === \"undefined\" ? HeadersPonyfill : Headers;\nconst TINA_HOST = \"content.tinajs.io\";\nclass TinaClient {\n    constructor({ token, url, queries, errorPolicy }){\n        this.apiUrl = url;\n        this.readonlyToken = token == null ? void 0 : token.trim();\n        this.queries = queries(this);\n        this.errorPolicy = errorPolicy || \"throw\";\n    }\n    async request({ errorPolicy, ...args }) {\n        const errorPolicyDefined = errorPolicy || this.errorPolicy;\n        const headers = new HeadersDefined();\n        if (this.readonlyToken) {\n            headers.append(\"X-API-KEY\", this.readonlyToken);\n        }\n        headers.append(\"Content-Type\", \"application/json\");\n        const bodyString = JSON.stringify({\n            query: args.query,\n            variables: (args == null ? void 0 : args.variables) || {}\n        });\n        const url = (args == null ? void 0 : args.url) || this.apiUrl;\n        const res = await fetchDefined(url, {\n            method: \"POST\",\n            headers,\n            body: bodyString,\n            redirect: \"follow\"\n        });\n        if (!res.ok) {\n            let additionalInfo = \"\";\n            if (res.status === 401) {\n                additionalInfo = \"Please check that your client ID, URL and read only token are configured properly.\";\n            }\n            throw new Error(`Server responded with status code ${res.status}, ${res.statusText}. ${additionalInfo ? additionalInfo : \"\"} Please see our FAQ for more information: https://tina.io/docs/errors/faq/`);\n        }\n        const json = await res.json();\n        if (json.errors && errorPolicyDefined === \"throw\") {\n            throw new Error(`Unable to fetch, please see our FAQ for more information: https://tina.io/docs/errors/faq/\n        Errors: \n\t${json.errors.map((error)=>error.message).join(\"\\n\")}`);\n        }\n        return {\n            data: json == null ? void 0 : json.data,\n            errors: (json == null ? void 0 : json.errors) || null,\n            query: args.query\n        };\n    }\n}\nfunction createClient(args) {\n    const client = new TinaClient(args);\n    return client;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdGluYWNtcy9kaXN0L2NsaWVudC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUMzQyxNQUFNLEVBQUVDLE9BQU9DLGVBQWUsRUFBRUMsU0FBU0MsZUFBZSxFQUFFLEdBQUdKLDJDQUFhQTtBQUMxRSxNQUFNSyxlQUFlLE9BQU9KLFVBQVUsY0FBY0Msa0JBQWtCRDtBQUN0RSxNQUFNSyxpQkFBaUIsT0FBT0gsWUFBWSxjQUFjQyxrQkFBa0JEO0FBQzFFLE1BQU1JLFlBQVk7QUFDbEIsTUFBTUM7SUFDSkMsWUFBWSxFQUNWQyxLQUFLLEVBQ0xDLEdBQUcsRUFDSEMsT0FBTyxFQUNQQyxXQUFXLEVBQ1osQ0FBRTtRQUNELElBQUksQ0FBQ0MsTUFBTSxHQUFHSDtRQUNkLElBQUksQ0FBQ0ksYUFBYSxHQUFHTCxTQUFTLE9BQU8sS0FBSyxJQUFJQSxNQUFNTSxJQUFJO1FBQ3hELElBQUksQ0FBQ0osT0FBTyxHQUFHQSxRQUFRLElBQUk7UUFDM0IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBLGVBQWU7SUFDcEM7SUFDQSxNQUFNSSxRQUFRLEVBQ1pKLFdBQVcsRUFDWCxHQUFHSyxNQUNKLEVBQUU7UUFDRCxNQUFNQyxxQkFBcUJOLGVBQWUsSUFBSSxDQUFDQSxXQUFXO1FBQzFELE1BQU1PLFVBQVUsSUFBSWQ7UUFDcEIsSUFBSSxJQUFJLENBQUNTLGFBQWEsRUFBRTtZQUN0QkssUUFBUUMsTUFBTSxDQUFDLGFBQWEsSUFBSSxDQUFDTixhQUFhO1FBQ2hEO1FBQ0FLLFFBQVFDLE1BQU0sQ0FBQyxnQkFBZ0I7UUFDL0IsTUFBTUMsYUFBYUMsS0FBS0MsU0FBUyxDQUFDO1lBQ2hDQyxPQUFPUCxLQUFLTyxLQUFLO1lBQ2pCQyxXQUFXLENBQUNSLFFBQVEsT0FBTyxLQUFLLElBQUlBLEtBQUtRLFNBQVMsS0FBSyxDQUFDO1FBQzFEO1FBQ0EsTUFBTWYsTUFBTSxDQUFDTyxRQUFRLE9BQU8sS0FBSyxJQUFJQSxLQUFLUCxHQUFHLEtBQUssSUFBSSxDQUFDRyxNQUFNO1FBQzdELE1BQU1hLE1BQU0sTUFBTXRCLGFBQWFNLEtBQUs7WUFDbENpQixRQUFRO1lBQ1JSO1lBQ0FTLE1BQU1QO1lBQ05RLFVBQVU7UUFDWjtRQUNBLElBQUksQ0FBQ0gsSUFBSUksRUFBRSxFQUFFO1lBQ1gsSUFBSUMsaUJBQWlCO1lBQ3JCLElBQUlMLElBQUlNLE1BQU0sS0FBSyxLQUFLO2dCQUN0QkQsaUJBQWlCO1lBQ25CO1lBQ0EsTUFBTSxJQUFJRSxNQUNSLENBQUMsa0NBQWtDLEVBQUVQLElBQUlNLE1BQU0sQ0FBQyxFQUFFLEVBQUVOLElBQUlRLFVBQVUsQ0FBQyxFQUFFLEVBQUVILGlCQUFpQkEsaUJBQWlCLEdBQUcsMEVBQTBFLENBQUM7UUFFM0w7UUFDQSxNQUFNSSxPQUFPLE1BQU1ULElBQUlTLElBQUk7UUFDM0IsSUFBSUEsS0FBS0MsTUFBTSxJQUFJbEIsdUJBQXVCLFNBQVM7WUFDakQsTUFBTSxJQUFJZSxNQUNSLENBQUM7O0NBRVIsRUFBRUUsS0FBS0MsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsUUFBVUEsTUFBTUMsT0FBTyxFQUFFQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXJEO1FBQ0EsT0FBTztZQUNMQyxNQUFNTixRQUFRLE9BQU8sS0FBSyxJQUFJQSxLQUFLTSxJQUFJO1lBQ3ZDTCxRQUFRLENBQUNELFFBQVEsT0FBTyxLQUFLLElBQUlBLEtBQUtDLE1BQU0sS0FBSztZQUNqRFosT0FBT1AsS0FBS08sS0FBSztRQUNuQjtJQUNGO0FBQ0Y7QUFDQSxTQUFTa0IsYUFBYXpCLElBQUk7SUFDeEIsTUFBTTBCLFNBQVMsSUFBSXBDLFdBQVdVO0lBQzlCLE9BQU8wQjtBQUNUO0FBS0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96eWEvLi9ub2RlX21vZHVsZXMvdGluYWNtcy9kaXN0L2NsaWVudC5tanM/ZDBhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2hQb255ZmlsbCBmcm9tIFwiZmV0Y2gtcG9ueWZpbGxcIjtcbmNvbnN0IHsgZmV0Y2g6IGZldGNoUG9ueWZpbGxGTiwgSGVhZGVyczogSGVhZGVyc1BvbnlmaWxsIH0gPSBmZXRjaFBvbnlmaWxsKCk7XG5jb25zdCBmZXRjaERlZmluZWQgPSB0eXBlb2YgZmV0Y2ggPT09IFwidW5kZWZpbmVkXCIgPyBmZXRjaFBvbnlmaWxsRk4gOiBmZXRjaDtcbmNvbnN0IEhlYWRlcnNEZWZpbmVkID0gdHlwZW9mIEhlYWRlcnMgPT09IFwidW5kZWZpbmVkXCIgPyBIZWFkZXJzUG9ueWZpbGwgOiBIZWFkZXJzO1xuY29uc3QgVElOQV9IT1NUID0gXCJjb250ZW50LnRpbmFqcy5pb1wiO1xuY2xhc3MgVGluYUNsaWVudCB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICB0b2tlbixcbiAgICB1cmwsXG4gICAgcXVlcmllcyxcbiAgICBlcnJvclBvbGljeVxuICB9KSB7XG4gICAgdGhpcy5hcGlVcmwgPSB1cmw7XG4gICAgdGhpcy5yZWFkb25seVRva2VuID0gdG9rZW4gPT0gbnVsbCA/IHZvaWQgMCA6IHRva2VuLnRyaW0oKTtcbiAgICB0aGlzLnF1ZXJpZXMgPSBxdWVyaWVzKHRoaXMpO1xuICAgIHRoaXMuZXJyb3JQb2xpY3kgPSBlcnJvclBvbGljeSB8fCBcInRocm93XCI7XG4gIH1cbiAgYXN5bmMgcmVxdWVzdCh7XG4gICAgZXJyb3JQb2xpY3ksXG4gICAgLi4uYXJnc1xuICB9KSB7XG4gICAgY29uc3QgZXJyb3JQb2xpY3lEZWZpbmVkID0gZXJyb3JQb2xpY3kgfHwgdGhpcy5lcnJvclBvbGljeTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnNEZWZpbmVkKCk7XG4gICAgaWYgKHRoaXMucmVhZG9ubHlUb2tlbikge1xuICAgICAgaGVhZGVycy5hcHBlbmQoXCJYLUFQSS1LRVlcIiwgdGhpcy5yZWFkb25seVRva2VuKTtcbiAgICB9XG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgIGNvbnN0IGJvZHlTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogYXJncy5xdWVyeSxcbiAgICAgIHZhcmlhYmxlczogKGFyZ3MgPT0gbnVsbCA/IHZvaWQgMCA6IGFyZ3MudmFyaWFibGVzKSB8fCB7fVxuICAgIH0pO1xuICAgIGNvbnN0IHVybCA9IChhcmdzID09IG51bGwgPyB2b2lkIDAgOiBhcmdzLnVybCkgfHwgdGhpcy5hcGlVcmw7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hEZWZpbmVkKHVybCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnMsXG4gICAgICBib2R5OiBib2R5U3RyaW5nLFxuICAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCJcbiAgICB9KTtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgbGV0IGFkZGl0aW9uYWxJbmZvID0gXCJcIjtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgYWRkaXRpb25hbEluZm8gPSBcIlBsZWFzZSBjaGVjayB0aGF0IHlvdXIgY2xpZW50IElELCBVUkwgYW5kIHJlYWQgb25seSB0b2tlbiBhcmUgY29uZmlndXJlZCBwcm9wZXJseS5cIjtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFNlcnZlciByZXNwb25kZWQgd2l0aCBzdGF0dXMgY29kZSAke3Jlcy5zdGF0dXN9LCAke3Jlcy5zdGF0dXNUZXh0fS4gJHthZGRpdGlvbmFsSW5mbyA/IGFkZGl0aW9uYWxJbmZvIDogXCJcIn0gUGxlYXNlIHNlZSBvdXIgRkFRIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwczovL3RpbmEuaW8vZG9jcy9lcnJvcnMvZmFxL2BcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGlmIChqc29uLmVycm9ycyAmJiBlcnJvclBvbGljeURlZmluZWQgPT09IFwidGhyb3dcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVW5hYmxlIHRvIGZldGNoLCBwbGVhc2Ugc2VlIG91ciBGQVEgZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHBzOi8vdGluYS5pby9kb2NzL2Vycm9ycy9mYXEvXG4gICAgICAgIEVycm9yczogXG5cdCR7anNvbi5lcnJvcnMubWFwKChlcnJvcikgPT4gZXJyb3IubWVzc2FnZSkuam9pbihcIlxcblwiKX1gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YToganNvbiA9PSBudWxsID8gdm9pZCAwIDoganNvbi5kYXRhLFxuICAgICAgZXJyb3JzOiAoanNvbiA9PSBudWxsID8gdm9pZCAwIDoganNvbi5lcnJvcnMpIHx8IG51bGwsXG4gICAgICBxdWVyeTogYXJncy5xdWVyeVxuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUNsaWVudChhcmdzKSB7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBUaW5hQ2xpZW50KGFyZ3MpO1xuICByZXR1cm4gY2xpZW50O1xufVxuZXhwb3J0IHtcbiAgVElOQV9IT1NULFxuICBUaW5hQ2xpZW50LFxuICBjcmVhdGVDbGllbnRcbn07XG4iXSwibmFtZXMiOlsiZmV0Y2hQb255ZmlsbCIsImZldGNoIiwiZmV0Y2hQb255ZmlsbEZOIiwiSGVhZGVycyIsIkhlYWRlcnNQb255ZmlsbCIsImZldGNoRGVmaW5lZCIsIkhlYWRlcnNEZWZpbmVkIiwiVElOQV9IT1NUIiwiVGluYUNsaWVudCIsImNvbnN0cnVjdG9yIiwidG9rZW4iLCJ1cmwiLCJxdWVyaWVzIiwiZXJyb3JQb2xpY3kiLCJhcGlVcmwiLCJyZWFkb25seVRva2VuIiwidHJpbSIsInJlcXVlc3QiLCJhcmdzIiwiZXJyb3JQb2xpY3lEZWZpbmVkIiwiaGVhZGVycyIsImFwcGVuZCIsImJvZHlTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJyZXMiLCJtZXRob2QiLCJib2R5IiwicmVkaXJlY3QiLCJvayIsImFkZGl0aW9uYWxJbmZvIiwic3RhdHVzIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwianNvbiIsImVycm9ycyIsIm1hcCIsImVycm9yIiwibWVzc2FnZSIsImpvaW4iLCJkYXRhIiwiY3JlYXRlQ2xpZW50IiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/tinacms/dist/client.mjs\n");

/***/ })

};
;