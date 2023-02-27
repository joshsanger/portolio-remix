import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-MUH7NMCY.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// app/stylesheets/main.min.css
var main_min_default = "/build/_assets/main.min-HFCIFTAP.css";

// app/components/Header/Header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inner-wrap", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "svg",
        {
          version: "1.1",
          id: "logo-svg",
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          x: "0px",
          y: "0px",
          viewBox: "0 0 9.5 16.9",
          style: { enableBackground: "new 0 0 9.5 16.9" },
          xmlSpace: "preserve",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { id: "logo-path", className: "st0", d: "M9.5,11.8c0,3.3-1.8,5.1-4.8,5.1c-1.9,0-3.5-0.9-4.7-2.4L1,13c1.1,1.3,2.4,1.9,3.7,1.9 c1.8,0,2.9-1.1,2.9-3.2V1.8h-6V0h7.9V11.8z" }, void 0, false, {
            fileName: "app/components/Header/Header.tsx",
            lineNumber: 24,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Header/Header.tsx",
            lineNumber: 23,
            columnNumber: 17
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/Header/Header.tsx",
          lineNumber: 12,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/Header/Header.tsx",
        lineNumber: 11,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Joshua Sanger" }, void 0, false, {
        fileName: "app/components/Header/Header.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header/Header.tsx",
      lineNumber: 10,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { id: "menu-trigger", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "material-icons", children: "\uE5D4" }, void 0, false, {
      fileName: "app/components/Header/Header.tsx",
      lineNumber: 30,
      columnNumber: 35
    }, this) }, void 0, false, {
      fileName: "app/components/Header/Header.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header/Header.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Header/Header.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header/Header.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/Header/index.ts
var Header_default = Header;

// app/root.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  charset: "utf-8",
  title: "Josh Sanger | Front end developer",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Header_default, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: main_min_default
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:300,400,500,700"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/icon?family=Material+Icons"
    }
  ];
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-ZTWJHKVN.js.map
