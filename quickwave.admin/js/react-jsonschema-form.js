! function(e, t) {
    "object" == typeof exports
                    && "object" == typeof module ? module.exports = t(require("react")) : "function" == typeof define
    && define.amd ? define(["react"], t) : "object" == typeof exports ? exports.JSONSchemaForm = t(require("react")) : e.JSONSchemaForm = t(e.React)
}(this, function(e) {
    return function(e) {
        function t(n) {
            if (r[n]) return r[n].exports;
            var a = r[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
        }
        var r = {};
        return t.m = e, t.c = r, t.p = "/dist/", t(0)
    }([function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r(1),
            i = n(a);
        t["default"] = i["default"]
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            l = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
            c = r(2),
            f = n(c),
            d = r(3),
            m = n(d),
            h = r(9),
            p = n(h),
            y = r(10),
            v = n(y),
            b = r(36),
            g = n(b),
            S = r(4),
            O = r(37),
            w = n(O),
            E = function(e) {
                function t(e) {
                    a(this, t);
                    var r = i(this, Object.getPrototypeOf(t).call(this, e));
                    return r.onChange = function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? {
                                validate: !1
                            } : arguments[1],
                            n = !r.props.noValidate && (r.props.liveValidate || t.validate),
                            a = {
                                status: "editing",
                                formData: e
                            };
                        if (n) {
                            var i = r.validate(e),
                                o = i.errors,
                                u = i.errorSchema;
                            a = s({}, a, {
                                errors: o,
                                errorSchema: u
                            })
                        }(0, S.setState)(r, a, function() {
                            r.props.onChange && r.props.onChange(r.state)
                        })
                    }, r.onSubmit = function(e) {
                        if (e.preventDefault(), r.setState({
                                status: "submitted"
                            }), !r.props.noValidate) {
                            var t = function() {
                                var e = r.validate(r.state.formData),
                                    t = e.errors,
                                    n = e.errorSchema;
                                return Object.keys(t).length > 0 ? ((0, S.setState)(r, {
                                    errors: t,
                                    errorSchema: n
                                }, function() {
                                    r.props.onError ? r.props.onError(t) : console.error("Form validation failed", t)
                                }), {
                                    v: void 0
                                }) : void 0
                            }();
                            if ("object" === ("undefined" == typeof t ? "undefined" : u(t))) return t.v
                        }
                        r.props.onSubmit && r.props.onSubmit(r.state), r.setState({
                            status: "initial",
                            errors: [],
                            errorSchema: {}
                        })
                    }, r.state = r.getStateFromProps(e), r
                }
                return o(t, e), l(t, [{
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        this.setState(this.getStateFromProps(e))
                    }
                }, {
                    key: "getStateFromProps",
                    value: function(e) {
                        var t = this.state || {},
                            r = "schema" in e ? e.schema : this.props.schema,
                            n = "uiSchema" in e ? e.uiSchema : this.props.uiSchema,
                            a = "undefined" != typeof e.formData,
                            i = e.liveValidate || this.props.liveValidate,
                            o = a && !e.noValidate && i,
                            u = r.definitions,
                            s = (0, S.getDefaultFormState)(r, e.formData, u),
                            l = o ? this.validate(s, r) : {
                                errors: t.errors || [],
                                errorSchema: t.errorSchema || {}
                            },
                            c = l.errors,
                            f = l.errorSchema,
                            d = (0, S.toIdSchema)(r, n["ui:rootFieldId"], u);
                        return {
                            status: "initial",
                            schema: r,
                            uiSchema: n,
                            idSchema: d,
                            formData: s,
                            edit: a,
                            errors: c,
                            errorSchema: f
                        }
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return (0, S.shouldRender)(this, e, t)
                    }
                }, {
                    key: "validate",
                    value: function r(e, t) {
                        var r = this.props.validate;
                        return (0, w["default"])(e, t || this.props.schema, r)
                    }
                }, {
                    key: "renderErrors",
                    value: function() {
                        var e = this.state,
                            t = e.status,
                            r = e.errors,
                            n = this.props.showErrorList;
                        return "editing" !== t && r.length && 0 != n ? f["default"].createElement(g["default"], {
                            errors: r
                        }) : null
                    }
                }, {
                    key: "getRegistry",
                    value: function() {
                        var e = this.props.SchemaField || m["default"],
                            t = this.props.TitleField || p["default"],
                            r = this.props.DescriptionField || v["default"],
                            n = Object.assign({
                                SchemaField: e,
                                TitleField: t,
                                DescriptionField: r
                            }, this.props.fields);
                        return {
                            fields: n,
                            FieldTemplate: this.props.FieldTemplate,
                            widgets: this.props.widgets || {},
                            definitions: this.props.schema.definitions || {},
                            formContext: this.props.formContext || {}
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.children,
                            r = e.safeRenderCompletion,
                            n = e.id,
                            a = e.className,
                            i = e.name,
                            o = e.method,
                            u = e.target,
                            s = e.action,
                            l = e.autocomplete,
                            c = e.enctype,
                            d = e.acceptcharset,
                            m = this.state,
                            h = m.schema,
                            p = m.uiSchema,
                            y = m.formData,
                            v = m.errorSchema,
                            b = m.idSchema,
                            g = this.getRegistry(),
                            S = g.fields.SchemaField;
                        return f["default"].createElement("form", {
                            className: a ? a : "rjsf",
                            id: n,
                            name: i,
                            method: o,
                            target: u,
                            action: s,
                            autoComplete: l,
                            encType: c,
                            acceptCharset: d,
                            onSubmit: this.onSubmit
                        }, this.renderErrors(), f["default"].createElement(S, {
                            schema: h,
                            uiSchema: p,
                            errorSchema: v,
                            idSchema: b,
                            formData: y,
                            onChange: this.onChange,
                            registry: g,
                            safeRenderCompletion: r
                        }), t ? t : f["default"].createElement("p", null, f["default"].createElement("button", {
                            type: "submit",
                            className: "btn btn-info"
                        }, "Submit")))
                    }
                }]), t
            }(c.Component);
        E.defaultProps = {
            uiSchema: {},
            noValidate: !1,
            liveValidate: !1,
            safeRenderCompletion: !1
        }, t["default"] = E
    }, function(t, r) {
        t.exports = e
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t, r) {
            var n = t["ui:field"];
            return "function" == typeof n ? n : "string" == typeof n && n in r ? r[n] : P[e.type] || _["default"]
        }

        function i(e) {
            var t = e.label,
                r = e.required,
                n = e.id;
            return t ? d["default"].createElement("label", {
                className: "control-label",
                htmlFor: n
            }, r ? t + x : t) : null
        }

        function o(e) {
            var t = e.help;
            return t ? "string" == typeof t ? d["default"].createElement("p", {
                className: "help-block"
            }, t) : d["default"].createElement("div", {
                className: "help-block"
            }, t) : null
        }

        function u(e) {
            var t = e.errors,
                r = void 0 === t ? [] : t;
            return 0 === r.length ? null : d["default"].createElement("div", null, d["default"].createElement("p", null), d["default"].createElement("ul", {
                className: "error-detail bs-callout bs-callout-info"
            }, r.map(function(e, t) {
                return d["default"].createElement("li", {
                    className: "text-danger",
                    key: t
                }, e)
            })))
        }

        function s(e) {
            var t = e.id,
                r = e.classNames,
                n = e.label,
                a = e.children,
                o = e.errors,
                u = e.help,
                s = e.description,
                l = e.hidden,
                c = e.required,
                f = e.displayLabel;
            return l ? a : d["default"].createElement("div", {
                className: r
            }, f ? d["default"].createElement(i, {
                label: n,
                required: c,
                id: t
            }) : null, f && s ? s : null, a, o, u)
        }

        function l(e) {
            var t = e.uiSchema,
                r = e.errorSchema,
                n = e.idSchema,
                i = e.name,
                l = e.required,
                f = e.registry,
                h = f.definitions,
                p = f.fields,
                y = f.formContext,
                v = f.FieldTemplate,
                b = void 0 === v ? s : v,
                g = (0, m.retrieveSchema)(e.schema, h),
                S = a(g, t, p),
                O = p.DescriptionField,
                w = Boolean(e.disabled || t["ui:disabled"]),
                E = Boolean(e.readonly || t["ui:readonly"]);
            if (0 === Object.keys(g).length) return d["default"].createElement("div", null);
            var j = !0;
            "array" === g.type && (j = (0, m.isMultiSelect)(g) || (0, m.isFilesArray)(g, t)), "object" === g.type && (j = !1), "boolean" !== g.type || t["ui:widget"] || (j = !1), t["ui:field"] && (j = !1);
            var _ = d["default"].createElement(S, c({}, e, {
                    schema: g,
                    disabled: w,
                    readonly: E,
                    formContext: y
                })),
                x = g.type,
                P = n.$id,
                C = e.schema.title || g.title || i,
                A = e.schema.description || g.description,
                k = r.__errors,
                F = t["ui:help"],
                I = "hidden" === t["ui:widget"],
                M = ["form-group", "field", "field-" + x, k && k.length > 0 ? "field-error has-error" : "", t.classNames].join(" ").trim(),
                N = {
                    description: d["default"].createElement(O, {
                        id: P + "__description",
                        description: A,
                        formContext: y
                    }),
                    help: d["default"].createElement(o, {
                        help: F
                    }),
                    errors: d["default"].createElement(u, {
                        errors: k
                    }),
                    id: P,
                    label: C,
                    hidden: I,
                    required: l,
                    readonly: E,
                    displayLabel: j,
                    classNames: M,
                    formContext: y
                };
            return d["default"].createElement(b, N, _)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            f = r(2),
            d = n(f),
            m = r(4),
            h = r(29),
            p = n(h),
            y = r(30),
            v = n(y),
            b = r(32),
            g = n(b),
            S = r(34),
            O = n(S),
            w = r(33),
            E = n(w),
            j = r(35),
            _ = n(j),
            x = "*",
            P = {
                array: p["default"],
                "boolean": v["default"],
                integer: g["default"],
                number: g["default"],
                object: O["default"],
                string: E["default"]
            };
        s.defaultProps = {
            hidden: !1,
            readonly: !1,
            required: !1,
            displayLabel: !0
        }, l.defaultProps = {
            uiSchema: {},
            errorSchema: {},
            idSchema: {},
            registry: (0, m.getDefaultRegistry)(),
            disabled: !1,
            readonly: !1
        }, t["default"] = l
    }, function(e, t, r) {
        (function(e) {
            "use strict";

            function n(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function a(e, t) {
                var r = {};
                for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                return r
            }

            function i() {
                return {
                    fields: {
                        SchemaField: r(3)["default"],
                        TitleField: M["default"],
                        DescriptionField: q["default"]
                    },
                    widgets: {},
                    definitions: {},
                    formContext: {}
                }
            }

            function o(e, t) {
                return "undefined" == typeof e ? t["default"] : e
            }

            function u(e, t) {
                function r(e) {
                    return e.defaultProps = F({}, e.defaultProps, {
                        options: a
                    }), e
                }
                var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                    a = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3],
                    i = e.type,
                    o = e.format;
                if ("function" == typeof t) return r(t);
                if (c(t)) {
                    var s = t.component,
                        l = t.options,
                        f = F({}, l, a);
                    return u(e, s, n, f)
                }
                if ("string" != typeof t) throw new Error("Unsupported widget definition: " + ("undefined" == typeof t ? "undefined" : k(t)));
                if (n.hasOwnProperty(t)) {
                    var d = n[t];
                    return u(e, d, n, a)
                }
                if (!ye.hasOwnProperty(i)) throw new Error("No alternative widget for type " + i);
                if (ye[i].hasOwnProperty(t)) {
                    var m = ye[i][t];
                    return u(e, m, n, a)
                }
                if ("string" === i && ve.hasOwnProperty(o)) {
                    var h = ve[o];
                    return u(e, h, n, a)
                }
                var p = "string" === i && o ? "/" + o : "";
                throw new Error('No alternative widget "' + t + '" for type ' + i + p)
            }

            function s(e, t) {
                var r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                    n = t;
                if (c(n) && c(e["default"])) n = f(n, e["default"]);
                else if ("default" in e) n = e["default"];
                else if ("enum" in e && Array.isArray(e["enum"])) n = e["enum"][0];
                else {
                    if ("$ref" in e) {
                        var a = g(e.$ref, r);
                        return s(a, n, r)
                    }
                    y(e) && (n = e.items.map(function(e) {
                        return s(e, void 0, r)
                    }))
                }
                return "undefined" == typeof n && (n = e["default"]), "object" === e.type ? Object.keys(e.properties).reduce(function(t, a) {
                    return t[a] = s(e.properties[a], (n || {})[a], r), t
                }, {}) : n
            }

            function l(e, t) {
                var r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                if (!c(e)) throw new Error("Invalid schema: " + e);
                var n = S(e, r),
                    a = s(n, e["default"], r);
                return "undefined" == typeof t ? a : c(t) ? f(a, t) : t || a
            }

            function c(e) {
                return "object" === ("undefined" == typeof e ? "undefined" : k(e)) && null !== e && !Array.isArray(e)
            }

            function f(e, t) {
                var r = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
                    n = Object.assign({}, e);
                return Object.keys(t).reduce(function(n, a) {
                    var i = e[a],
                        o = t[a];
                    return e.hasOwnProperty(a) && c(o) ? n[a] = f(i, o, r) : r && Array.isArray(i) && Array.isArray(o) ? n[a] = i.concat(o) : n[a] = o, n
                }, n)
            }

            function d(e) {
                if (/\.$/.test(e)) return e;
                if (/\.0$/.test(e)) return e;
                var t = Number(e),
                    r = "number" == typeof t && !Number.isNaN(t);
                return r ? t : e
            }

            function m(e, t) {
                if (!Array.isArray(t)) return e;
                if (t.length !== e.length) throw new Error("uiSchema order list length should match object properties length");
                var r = function(e) {
                    return [].slice.call(e).sort().toString()
                };
                if (r(t) !== r(e)) throw new Error("uiSchema order list does not match object properties list");
                return t
            }

            function h(e) {
                return Array.isArray(e.items["enum"]) && e.uniqueItems
            }

            function p(e, t) {
                return "string" === e.items.type && "data-url" === e.items.format || "files" === t["ui:widget"]
            }

            function y(e) {
                return Array.isArray(e.items) && e.items.length > 0 && e.items.every(function(e) {
                    return c(e)
                })
            }

            function v(e) {
                return e.additionalItems === !0 && console.warn("additionalItems=true is currently not supported"), c(e.additionalItems)
            }

            function b(e) {
                return e["enum"].map(function(t, r) {
                    var n = e.enumNames && e.enumNames[r] || String(t);
                    return {
                        label: n,
                        value: t
                    }
                })
            }

            function g(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    r = /#\/definitions\/(.*)$/.exec(e);
                if (r && r[1] && t.hasOwnProperty(r[1])) return t[r[1]];
                throw new Error("Could not find a definition for " + e + ".")
            }

            function S(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                if (!e.hasOwnProperty("$ref")) return e;
                var r = g(e.$ref, t),
                    n = (e.$ref, a(e, ["$ref"]));
                return F({}, r, n)
            }

            function O(e) {
                return "[object Arguments]" === Object.prototype.toString.call(e)
            }

            function w(e, t) {
                var r = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2],
                    n = arguments.length <= 3 || void 0 === arguments[3] ? [] : arguments[3];
                if (e === t) return !0;
                if ("function" == typeof e || "function" == typeof t) return !0;
                if ("object" !== ("undefined" == typeof e ? "undefined" : k(e)) || "object" !== ("undefined" == typeof t ? "undefined" : k(t))) return !1;
                if (null === e || null === t) return !1;
                if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
                if (e instanceof RegExp && t instanceof RegExp) return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;
                if (O(e) || O(t)) {
                    if (!O(e) || !O(t)) return !1;
                    var a = Array.prototype.slice;
                    return w(a.call(e), a.call(t), r, n)
                }
                if (e.constructor !== t.constructor) return !1;
                var i = Object.keys(e),
                    o = Object.keys(t);
                if (0 === i.length && 0 === o.length) return !0;
                if (i.length !== o.length) return !1;
                for (var u = r.length; u--;)
                    if (r[u] === e) return n[u] === t;
                r.push(e), n.push(t), i.sort(), o.sort();
                for (var s = i.length - 1; s >= 0; s--)
                    if (i[s] !== o[s]) return !1;
                for (var l = void 0, c = i.length - 1; c >= 0; c--)
                    if (l = i[c], !w(e[l], t[l], r, n)) return !1;
                return r.pop(), n.pop(), !0
            }

            function E(e, t, r) {
                var n = e.props,
                    a = e.state;
                return !w(n, t) || !w(a, r)
            }

            function j(e, t, r) {
                var n = {
                    $id: t || "root"
                };
                if ("$ref" in e) {
                    var a = S(e, r);
                    return j(a, t, r)
                }
                if ("items" in e) return j(e.items, t, r);
                if ("object" !== e.type) return n;
                for (var i in e.properties || {}) {
                    var o = e.properties[i],
                        u = n.$id + "_" + i;
                    n[i] = j(o, u, r)
                }
                return n
            }

            function _(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1];
                if (!e) return {
                    year: -1,
                    month: -1,
                    day: -1,
                    hour: t ? -1 : 0,
                    minute: t ? -1 : 0,
                    second: t ? -1 : 0
                };
                var r = new Date(e);
                if (Number.isNaN(r.getTime())) throw new Error("Unable to parse date " + e);
                return {
                    year: r.getUTCFullYear(),
                    month: r.getUTCMonth() + 1,
                    day: r.getUTCDate(),
                    hour: t ? r.getUTCHours() : 0,
                    minute: t ? r.getUTCMinutes() : 0,
                    second: t ? r.getUTCSeconds() : 0
                }
            }

            function x(e) {
                var t = e.year,
                    r = e.month,
                    n = e.day,
                    a = e.hour,
                    i = void 0 === a ? 0 : a,
                    o = e.minute,
                    u = void 0 === o ? 0 : o,
                    s = e.second,
                    l = void 0 === s ? 0 : s,
                    c = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1],
                    f = Date.UTC(t, r - 1, n, i, u, l),
                    d = new Date(f).toJSON();
                return c ? d : d.slice(0, 10)
            }

            function P(e, t) {
                for (var r = String(e); r.length < t;) r = "0" + r;
                return r
            }

            function C(t, r, n) {
                var a = t.props.safeRenderCompletion;
                a ? t.setState(r, n) : (t.setState(r), e(n))
            }

            function A(e) {
                var t = e.split(","),
                    r = t[0].split(";"),
                    n = r[0].replace("data:", ""),
                    a = r.filter(function(e) {
                        return "name" === e.split("=")[0]
                    }),
                    i = void 0;
                i = 1 !== a.length ? "unknown" : a[0].split("=")[1];
                for (var o = atob(t[1]), u = [], s = 0; s < o.length; s++) u.push(o.charCodeAt(s));
                var l = new window.Blob([new Uint8Array(u)], {
                    type: n
                });
                return {
                    blob: l,
                    name: i
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                },
                F = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                };
            t.getDefaultRegistry = i, t.defaultFieldValue = o, t.getAlternativeWidget = u, t.getDefaultFormState = l, t.isObject = c, t.mergeObjects = f, t.asNumber = d, t.orderProperties = m, t.isMultiSelect = h, t.isFilesArray = p, t.isFixedItems = y, t.allowAdditionalItems = v, t.optionsList = b, t.retrieveSchema = S, t.deepEquals = w, t.shouldRender = E, t.toIdSchema = j, t.parseDateString = _, t.toDateString = x, t.pad = P, t.setState = C, t.dataURItoBlob = A, r(7);
            var I = r(9),
                M = n(I),
                N = r(10),
                q = n(N),
                T = r(11),
                R = n(T),
                D = r(13),
                $ = n(D),
                U = r(14),
                L = n(U),
                z = r(15),
                Z = n(z),
                V = r(16),
                J = n(V),
                B = r(17),
                W = n(B),
                G = r(18),
                H = n(G),
                K = r(19),
                X = n(K),
                Y = r(20),
                Q = n(Y),
                ee = r(21),
                te = n(ee),
                re = r(22),
                ne = n(re),
                ae = r(23),
                ie = n(ae),
                oe = r(24),
                ue = n(oe),
                se = r(25),
                le = n(se),
                ce = r(26),
                fe = n(ce),
                de = r(27),
                me = n(de),
                he = r(28),
                pe = n(he),
                ye = {
                    "boolean": {
                        radio: $["default"],
                        select: J["default"],
                        hidden: le["default"]
                    },
                    string: {
                        password: R["default"],
                        radio: $["default"],
                        select: J["default"],
                        textarea: ue["default"],
                        hidden: le["default"],
                        date: H["default"],
                        datetime: X["default"],
                        "alt-date": Q["default"],
                        "alt-datetime": te["default"],
                        color: fe["default"],
                        file: me["default"]
                    },
                    number: {
                        updown: L["default"],
                        range: Z["default"],
                        hidden: le["default"]
                    },
                    integer: {
                        updown: L["default"],
                        range: Z["default"],
                        hidden: le["default"]
                    },
                    array: {
                        checkboxes: pe["default"]
                    }
                },
                ve = {
                    "date-time": X["default"],
                    date: H["default"],
                    email: ne["default"],
                    hostname: W["default"],
                    ipv4: W["default"],
                    ipv6: W["default"],
                    uri: ie["default"],
                    "data-url": me["default"]
                }
        }).call(t, r(5).setImmediate)
    }, function(e, t, r) {
        (function(e, n) {
            "use strict";

            function a(e, t) {
                this._id = e, this._clearFn = t
            }
            var i = r(6).nextTick,
                o = Function.prototype.apply,
                u = Array.prototype.slice,
                s = {},
                l = 0;
            t.setTimeout = function() {
                return new a(o.call(setTimeout, window, arguments), clearTimeout)
            }, t.setInterval = function() {
                return new a(o.call(setInterval, window, arguments), clearInterval)
            }, t.clearTimeout = t.clearInterval = function(e) {
                e.close()
            }, a.prototype.unref = a.prototype.ref = function() {}, a.prototype.close = function() {
                this._clearFn.call(window, this._id)
            }, t.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t
            }, t.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
            }, t._unrefActive = t.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                    e._onTimeout && e._onTimeout()
                }, t))
            }, t.setImmediate = "function" == typeof e ? e : function(e) {
                var r = l++,
                    n = arguments.length < 2 ? !1 : u.call(arguments, 1);
                return s[r] = !0, i(function() {
                    s[r] && (n ? e.apply(null, n) : e.call(null), t.clearImmediate(r))
                }), r
            }, t.clearImmediate = "function" == typeof n ? n : function(e) {
                delete s[e]
            }
        }).call(t, r(5).setImmediate, r(5).clearImmediate)
    }, function(e, t) {
        "use strict";

        function r() {
            l && o && (l = !1, o.length ? s = o.concat(s) : c = -1, s.length && n())
        }

        function n() {
            if (!l) {
                var e = setTimeout(r);
                l = !0;
                for (var t = s.length; t;) {
                    for (o = s, s = []; ++c < t;) o && o[c].run();
                    c = -1, t = s.length
                }
                o = null, l = !1, clearTimeout(e)
            }
        }

        function a(e, t) {
            this.fun = e, this.array = t
        }

        function i() {}
        var o, u = e.exports = {},
            s = [],
            l = !1,
            c = -1;
        u.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            s.push(new a(e, t)), 1 !== s.length || l || setTimeout(n, 0)
        }, a.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = i, u.addListener = i, u.once = i, u.off = i, u.removeListener = i, u.removeAllListeners = i, u.emit = i, u.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, u.cwd = function() {
            return "/"
        }, u.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, u.umask = function() {
            return 0
        }
    }, function(e, t, r) {
        (function(e, t, r) {
            "use strict";
            ! function(e, t) {
                function n(e) {
                    return p[h] = a.apply(t, e), h++
                }

                function a(e) {
                    var r = [].slice.call(arguments, 1);
                    return function() {
                        "function" == typeof e ? e.apply(t, r) : new Function("" + e)()
                    }
                }

                function i(e) {
                    if (y) setTimeout(a(i, e), 0);
                    else {
                        var t = p[e];
                        if (t) {
                            y = !0;
                            try {
                                t()
                            } finally {
                                o(e), y = !1
                            }
                        }
                    }
                }

                function o(e) {
                    delete p[e]
                }

                function u() {
                    m = function() {
                        var e = n(arguments);
                        return r.nextTick(a(i, e)), e
                    }
                }

                function s() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0,
                            r = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }, e.postMessage("", "*"), e.onmessage = r, t
                    }
                }

                function l() {
                    var t = "setImmediate$" + Math.random() + "$",
                        r = function(r) {
                            r.source === e && "string" == typeof r.data && 0 === r.data.indexOf(t) && i(+r.data.slice(t.length))
                        };
                    e.addEventListener ? e.addEventListener("message", r, !1) : e.attachEvent("onmessage", r), m = function() {
                        var r = n(arguments);
                        return e.postMessage(t + r, "*"), r
                    }
                }

                function c() {
                    var e = new MessageChannel;
                    e.port1.onmessage = function(e) {
                        var t = e.data;
                        i(t)
                    }, m = function() {
                        var t = n(arguments);
                        return e.port2.postMessage(t), t
                    }
                }

                function f() {
                    var e = v.documentElement;
                    m = function() {
                        var t = n(arguments),
                            r = v.createElement("script");
                        return r.onreadystatechange = function() {
                            i(t), r.onreadystatechange = null, e.removeChild(r), r = null
                        }, e.appendChild(r), t
                    }
                }

                function d() {
                    m = function() {
                        var e = n(arguments);
                        return setTimeout(a(i, e), 0), e
                    }
                }
                if (!e.setImmediate) {
                    var m, h = 1,
                        p = {},
                        y = !1,
                        v = e.document,
                        b = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    b = b && b.setTimeout ? b : e, "[object process]" === {}.toString.call(e.process) ? u() : s() ? l() : e.MessageChannel ? c() : v && "onreadystatechange" in v.createElement("script") ? f() : d(), b.setImmediate = m, b.clearImmediate = o
                }
            }("undefined" == typeof self ? "undefined" == typeof e ? void 0 : e : self)
        }).call(t, function() {
            return this
        }(), r(5).clearImmediate, r(8))
    }, function(e, t) {
        "use strict";

        function r() {
            l && o && (l = !1, o.length ? s = o.concat(s) : c = -1, s.length && n())
        }

        function n() {
            if (!l) {
                var e = setTimeout(r);
                l = !0;
                for (var t = s.length; t;) {
                    for (o = s, s = []; ++c < t;) o && o[c].run();
                    c = -1, t = s.length
                }
                o = null, l = !1, clearTimeout(e)
            }
        }

        function a(e, t) {
            this.fun = e, this.array = t
        }

        function i() {}
        var o, u = e.exports = {},
            s = [],
            l = !1,
            c = -1;
        u.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            s.push(new a(e, t)), 1 !== s.length || l || setTimeout(n, 0)
        }, a.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = i, u.addListener = i, u.once = i, u.off = i, u.removeListener = i, u.removeAllListeners = i, u.emit = i, u.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, u.cwd = function() {
            return "/"
        }, u.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, u.umask = function() {
            return 0
        }
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            var t = e.id,
                r = e.title,
                n = e.required,
                a = n ? r + u : r;
            return o["default"].createElement("legend", {
                id: t
            }, a)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(2),
            o = n(i),
            u = "*";
        t["default"] = a
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            var t = e.id,
                r = e.description;
            return r ? "string" == typeof r ? o["default"].createElement("p", {
                id: t,
                className: "field-description"
            }, r) : o["default"].createElement("div", {
                id: t,
                className: "field-description"
            }, r) : null
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(2),
            o = n(i);
        t["default"] = a
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            return u["default"].createElement(l["default"], i({
                type: "password"
            }, e))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            o = r(2),
            u = n(o),
            s = r(12),
            l = n(s);
        t["default"] = a
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            var r = {};
            for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
            return r
        }

        function i(e) {
            var t = e.value,
                r = e.readonly,
                n = e.onChange,
                i = (e.options, e.schema, e.formContext, a(e, ["value", "readonly", "onChange", "options", "schema", "formContext"]));
            return s["default"].createElement("input", o({}, i, {
                className: "form-control",
                readOnly: r,
                value: "undefined" == typeof t ? "" : t,
                onChange: function(e) {
                    return n(e.target.value)
                }
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            u = r(2),
            s = n(u);
        i.defaultProps = {
            type: "text",
            required: !1,
            disabled: !1,
            readonly: !1
        }, t["default"] = i
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            var t = (e.schema, e.options),
                r = e.value,
                n = (e.required, e.disabled),
                a = e.onChange,
                i = Math.random().toString(),
                u = t.enumOptions;
            return o["default"].createElement("div", {
                className: "field-radio-group"
            }, u.map(function(e, t) {
                var u = e.value === r;
                return o["default"].createElement("div", {
                    key: t,
                    className: "radio " + (n ? "disabled" : "")
                }, o["default"].createElement("label", null, o["default"].createElement("input", {
                    type: "radio",
                    name: i,
                    value: e.value,
                    checked: u,
                    disabled: n,
                    onChange: function(t) {
                        return a(e.value)
                    }
                }), e.label))
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(2),
            o = n(i);
        t["default"] = a
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            var t = {};
            return e.multipleOf && (t.step = e.multipleOf), e.minimum && (t.min = e.minimum), e.maximum && (t.max = e.maximum), t
        }

        function i(e) {
            return s["default"].createElement(c["default"], o({
                type: "number"
            }, e, a(e.schema)))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            u = r(2),
            s = n(u),
            l = r(12),
            c = n(l);
        t["default"] = i
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            var t = {};
            return e.multipleOf && (t.step = e.multipleOf), e.minimum && (t.min = e.minimum), e.maximum && (t.max = e.maximum), t
        }

        function i(e) {
            var t = e.schema,
                r = e.value;
            return s["default"].createElement("div", {
                className: "field-range-wrapper"
            }, s["default"].createElement(c["default"], o({
                type: "range"
            }, e, a(t))), s["default"].createElement("span", {
                className: "range-view"
            }, r))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            u = r(2),
            s = n(u),
            l = r(12),
            c = n(l);
        t["default"] = i
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            var r = e.type,
                n = e.items;
            return "array" === r && n && ["number", "integer"].includes(n.type) ? t.map(s.asNumber) : "boolean" === r ? "true" === t : "number" === r ? (0, s.asNumber)(t) : t
        }

        function i(e) {
            var t = e.schema,
                r = e.id,
                n = e.options,
                i = e.value,
                o = e.required,
                s = e.disabled,
                l = e.readonly,
                c = e.multiple,
                f = e.onChange,
                d = n.enumOptions;
            return u["default"].createElement("select", {
                id: r,
                multiple: c,
                className: "form-control",
                value: i,
                required: o,
                disabled: s,
                readOnly: l,
                onChange: function(e) {
                    var r = void 0;
                    r = c ? [].filter.call(e.target.options, function(e) {
                        return e.selected
                    }).map(function(e) {
                        return e.value
                    }) : e.target.value, f(a(t, r))
                }
            }, d.map(function(e, t) {
                var r = e.value,
                    n = e.label;
                return u["default"].createElement("option", {
                    key: t,
                    value: r
                }, n)
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(2),
            u = n(o),
            s = r(4);
        t["default"] = i
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            return o["default"].createElement(s["default"], e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(2),
            o = n(i),
            u = r(12),
            s = n(u);
        t["default"] = a
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            var t = e.onChange;
            return u["default"].createElement(l["default"], i({
                type: "date"
            }, e, {
                onChange: function(e) {
                    return t(e || void 0)
                }
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            o = r(2),
            u = n(o),
            s = r(12),
            l = n(s);
        t["default"] = a
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            return e ? e.slice(0, 19) : ""
        }

        function i(e) {
            return e ? new Date(e).toJSON() : void 0
        }

        function o(e) {
            var t = e.value,
                r = e.onChange;
            return l["default"].createElement(f["default"], u({
                type: "datetime-local"
            }, e, {
                value: a(t),
                onChange: function(e) {
                    return r(i(e))
                }
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            s = r(2),
            l = n(s),
            c = r(12),
            f = n(c);
        t["default"] = o
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e, t, r) {
            for (var n = [{
                    value: -1,
                    label: e
                }], a = t; r >= a; a++) n.push({
                value: a,
                label: (0, p.pad)(a, 2)
            });
            return n
        }

        function l(e) {
            return Object.keys(e).every(function(t) {
                return -1 !== e[t]
            })
        }

        function c(e) {
            var t = e.type,
                r = e.range,
                n = e.value,
                a = e.select,
                i = e.rootId,
                o = e.disabled,
                u = e.readonly,
                l = i + "_" + t;
            return h["default"].createElement(v["default"], {
                schema: {
                    type: "integer"
                },
                id: l,
                className: "form-control",
                options: {
                    enumOptions: s(t, r[0], r[1])
                },
                value: n,
                disabled: o,
                readonly: u,
                onChange: function(e) {
                    return a(t, e)
                }
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            d = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
            m = r(2),
            h = n(m),
            p = r(4),
            y = r(16),
            v = n(y),
            b = function(e) {
                function t(e) {
                    i(this, t);
                    var r = o(this, Object.getPrototypeOf(t).call(this, e));
                    return r.onChange = function(e, t) {
                        r.setState(a({}, e, t), function() {
                            l(r.state) && r.props.onChange((0, p.toDateString)(r.state, r.props.time))
                        })
                    }, r.setNow = function(e) {
                        e.preventDefault();
                        var t = r.props,
                            n = t.time,
                            a = t.disabled,
                            i = t.readonly,
                            o = t.onChange;
                        if (!a && !i) {
                            var u = (0, p.parseDateString)((new Date).toJSON(), n);
                            r.setState(u, function() {
                                return o((0, p.toDateString)(r.state, n))
                            })
                        }
                    }, r.clear = function(e) {
                        e.preventDefault();
                        var t = r.props,
                            n = t.time,
                            a = t.disabled,
                            i = t.readonly,
                            o = t.onChange;
                        a || i || r.setState((0, p.parseDateString)("", n), function() {
                            return o(void 0)
                        })
                    }, r.state = (0, p.parseDateString)(e.value, e.time), r
                }
                return u(t, e), d(t, [{
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        this.setState((0, p.parseDateString)(e.value, e.time))
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return (0, p.shouldRender)(this, e, t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            r = t.id,
                            n = t.disabled,
                            a = t.readonly;
                        return h["default"].createElement("ul", {
                            className: "list-inline"
                        }, this.dateElementProps.map(function(t, i) {
                            return h["default"].createElement("li", {
                                key: i
                            }, h["default"].createElement(c, f({
                                rootId: r,
                                select: e.onChange
                            }, t, {
                                disabled: n,
                                readonly: a
                            })))
                        }), h["default"].createElement("li", null, h["default"].createElement("a", {
                            href: "#",
                            className: "btn btn-info btn-now",
                            onClick: this.setNow
                        }, "Now")), h["default"].createElement("li", null, h["default"].createElement("a", {
                            href: "#",
                            className: "btn btn-warning btn-clear",
                            onClick: this.clear
                        }, "Clear")))
                    }
                }, {
                    key: "dateElementProps",
                    get: function() {
                        var e = this.props.time,
                            t = this.state,
                            r = t.year,
                            n = t.month,
                            a = t.day,
                            i = t.hour,
                            o = t.minute,
                            u = t.second,
                            s = [{
                                type: "year",
                                range: [1900, 2020],
                                value: r
                            }, {
                                type: "month",
                                range: [1, 12],
                                value: n
                            }, {
                                type: "day",
                                range: [1, 31],
                                value: a
                            }];
                        return e && s.push({
                            type: "hour",
                            range: [0, 23],
                            value: i
                        }, {
                            type: "minute",
                            range: [0, 59],
                            value: o
                        }, {
                            type: "second",
                            range: [0, 59],
                            value: u
                        }), s
                    }
                }]), t
            }(m.Component);
        b.defaultProps = {
            time: !1,
            disabled: !1,
            readonly: !1
        }, t["default"] = b
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            return u["default"].createElement(l["default"], i({
                time: !0
            }, e))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            o = r(2),
            u = n(o),
            s = r(20),
            l = n(s);
        t["default"] = a
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            return u["default"].createElement(l["default"], i({
                type: "email"
            }, e))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e
            },
            o = r(2),
            u = n(o),
            s = r(12),
            l = n(s);
        t["default"] = a
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            return u["default"].createElement(l["default"], i({
                type: "url"
            }, e))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            o = r(2),
            u = n(o),
            s = r(12),
            l = n(s);
        t["default"] = a
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            var t = (e.schema, e.id),
                r = e.placeholder,
                n = e.value,
                a = e.required,
                i = e.disabled,
                u = e.readonly,
                s = e.onChange;
            return o["default"].createElement("textarea", {
                id: t,
                className: "form-control",
                value: "undefined" == typeof n ? "" : n,
                placeholder: r,
                required: a,
                disabled: i,
                readOnly: u,
                onChange: function(e) {
                    return s(e.target.value)
                }
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(2),
            o = n(i);
        t["default"] = a
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            var t = e.id,
                r = e.value;
            return o["default"].createElement("input", {
                type: "hidden",
                id: t,
                value: "undefined" == typeof r ? "" : r
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(2),
            o = n(i);
        t["default"] = a
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            return u["default"].createElement(l["default"], i({
                type: "color"
            }, e))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            o = r(2),
            u = n(o),
            s = r(12),
            l = n(s);
        t["default"] = a
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function u(e, t) {
            return e.replace(";base64", ";name=" + t + ";base64")
        }

        function s(e) {
            var t = e.name,
                r = e.size,
                n = e.type;
            return new Promise(function(a, i) {
                var o = new window.FileReader;
                o.onload = function(e) {
                    a({
                        dataURL: u(e.target.result, t),
                        name: t,
                        size: r,
                        type: n
                    })
                }, o.readAsDataURL(e)
            })
        }

        function l(e) {
            return Promise.all([].map.call(e, s))
        }

        function c(e) {
            var t = e.filesInfo;
            return 0 === t.length ? null : h["default"].createElement("ul", {
                className: "file-info"
            }, t.map(function(e, t) {
                var r = e.name,
                    n = e.size,
                    a = e.type;
                return h["default"].createElement("li", {
                    key: t
                }, h["default"].createElement("strong", null, r), " (", a, ", ", n, " bytes)")
            }))
        }

        function f(e) {
            return e.filter(function(e) {
                return "undefined" != typeof e
            }).map(function(e) {
                var t = (0, p.dataURItoBlob)(e),
                    r = t.blob,
                    n = t.name;
                return {
                    name: n,
                    size: r.size,
                    type: r.type
                }
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var d = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
            m = r(2),
            h = n(m),
            p = r(4),
            y = function(e) {
                function t(e) {
                    a(this, t);
                    var r = i(this, Object.getPrototypeOf(t).call(this, e));
                    r.defaultProps = {
                        multiple: !1
                    }, r.onChange = function(e) {
                        var t = r.props,
                            n = t.multiple,
                            a = t.onChange;
                        l(e.target.files).then(function(e) {
                            var t = {
                                values: e.map(function(e) {
                                    return e.dataURL
                                }),
                                filesInfo: e
                            };
                            (0, p.setState)(r, t, function() {
                                a(n ? t.values : t.values[0])
                            })
                        })
                    };
                    var n = e.value,
                        o = Array.isArray(n) ? n : [n];
                    return r.state = {
                        values: o,
                        filesInfo: f(o)
                    }, r
                }
                return o(t, e), d(t, [{
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return (0, p.shouldRender)(this, e, t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.multiple,
                            r = e.id,
                            n = e.readonly,
                            a = e.disabled,
                            i = this.state.filesInfo;
                        return h["default"].createElement("div", null, h["default"].createElement("p", null, h["default"].createElement("input", {
                            id: r,
                            type: "file",
                            disabled: n || a,
                            onChange: this.onChange,
                            defaultValue: "",
                            multiple: t
                        })), h["default"].createElement(c, {
                            filesInfo: i
                        }))
                    }
                }]), t
            }(m.Component);
        t["default"] = y
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t, r) {
            var n = r.indexOf(e),
                a = t.slice(0, n).concat(e, t.slice(n));
            return a.sort(function(e, t) {
                return r.indexOf(e) > r.indexOf(t)
            })
        }

        function i(e, t) {
            return t.filter(function(t) {
                return t !== e
            })
        }

        function o(e) {
            var t = e.id,
                r = e.disabled,
                n = e.options,
                o = e.value,
                u = e.onChange,
                l = n.enumOptions;
            return s["default"].createElement("div", {
                className: "checkboxes",
                id: t
            }, l.map(function(e, n) {
                var c = -1 !== o.indexOf(e.value);
                return s["default"].createElement("div", {
                    key: n,
                    className: "checkbox"
                }, s["default"].createElement("label", null, s["default"].createElement("input", {
                    type: "checkbox",
                    id: t + "_" + n,
                    checked: c,
                    disabled: r,
                    onChange: function(t) {
                        var r = l.map(function(e) {
                            var t = e.value;
                            return t
                        });
                        u(t.target.checked ? a(e.value, o, r) : i(e.value, o))
                    }
                }), s["default"].createElement("strong", null, e.label)))
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = r(2),
            s = n(u);
        t["default"] = o
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function u(e) {
            var t = e.TitleField,
                r = e.idSchema,
                n = e.title,
                a = e.required;
            if (!n) return null;
            var i = r.$id + "__title";
            return d["default"].createElement(t, {
                id: i,
                title: n,
                required: a
            })
        }

        function s(e) {
            var t = e.DescriptionField,
                r = e.idSchema,
                n = e.description;
            if (!n) return null;
            var a = r.$id + "__description";
            return d["default"].createElement(t, {
                id: a,
                description: n
            })
        }

        function l(e) {
            var t = e.onClick,
                r = e.disabled;
            return d["default"].createElement("div", {
                className: "row"
            }, d["default"].createElement("p", {
                className: "col-xs-2 col-xs-offset-10 array-item-add text-right"
            }, d["default"].createElement("button", {
                type: "button",
                className: "btn btn-info col-xs-12",
                tabIndex: "-1",
                onClick: t,
                disabled: r,
                style: {
                    fontWeight: "bold"
                }
            }, "➕")))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
            f = r(2),
            d = n(f),
            m = r(4),
            h = r(16),
            p = n(h),
            y = r(27),
            v = n(y),
            b = r(28),
            g = n(b),
            S = function(e) {
                function t(e) {
                    a(this, t);
                    var r = i(this, Object.getPrototypeOf(t).call(this, e));
                    return r.onAddClick = function(e) {
                        e.preventDefault();
                        var t = r.state.items,
                            n = r.props,
                            a = n.schema,
                            i = n.registry,
                            o = i.definitions,
                            u = a.items;
                        (0, m.isFixedItems)(a) && (0, m.allowAdditionalItems)(a) && (u = a.additionalItems), r.asyncSetState({
                            items: t.concat([(0, m.getDefaultFormState)(u, void 0, o)])
                        })
                    }, r.onDropIndexClick = function(e) {
                        return function(t) {
                            t.preventDefault(), r.asyncSetState({
                                items: r.state.items.filter(function(t, r) {
                                    return r !== e
                                })
                            }, {
                                validate: !0
                            })
                        }
                    }, r.onReorderClick = function(e, t) {
                        return function(n) {
                            n.preventDefault(), n.target.blur();
                            var a = r.state.items;
                            r.asyncSetState({
                                items: a.map(function(r, n) {
                                    return n === t ? a[e] : n === e ? a[t] : r
                                })
                            }, {
                                validate: !0
                            })
                        }
                    }, r.onChangeForIndex = function(e) {
                        return function(t) {
                            r.asyncSetState({
                                items: r.state.items.map(function(r, n) {
                                    return e === n ? t : r
                                })
                            })
                        }
                    }, r.onSelectChange = function(e) {
                        r.asyncSetState({
                            items: e
                        })
                    }, r.state = r.getStateFromProps(e), r
                }
                return o(t, e), c(t, [{
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        this.setState(this.getStateFromProps(e))
                    }
                }, {
                    key: "getStateFromProps",
                    value: function(e) {
                        var t = Array.isArray(e.formData) ? e.formData : null,
                            r = this.props.registry.definitions;
                        return {
                            items: (0, m.getDefaultFormState)(e.schema, t, r) || []
                        }
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return (0, m.shouldRender)(this, e, t)
                    }
                }, {
                    key: "isItemRequired",
                    value: function(e) {
                        return "string" === e.type && e.minLength > 0
                    }
                }, {
                    key: "asyncSetState",
                    value: function(e) {
                        var t = this,
                            r = arguments.length <= 1 || void 0 === arguments[1] ? {
                                validate: !1
                            } : arguments[1];
                        (0, m.setState)(this, e, function() {
                            t.props.onChange(t.state.items, r)
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.schema,
                            r = e.uiSchema;
                        return (0, m.isFilesArray)(t, r) ? this.renderFiles() : (0, m.isFixedItems)(t) ? this.renderFixedArray() : (0, m.isMultiSelect)(t) ? this.renderMultiSelect() : this.renderNormalArray()
                    }
                }, {
                    key: "renderNormalArray",
                    value: function() {
                        var e = this,
                            t = this.props,
                            r = t.schema,
                            n = t.uiSchema,
                            a = t.errorSchema,
                            i = t.idSchema,
                            o = t.name,
                            c = t.required,
                            f = t.disabled,
                            h = t.readonly,
                            p = r.title || o,
                            y = this.state.items,
                            v = this.props.registry,
                            b = v.definitions,
                            g = v.fields,
                            S = g.TitleField,
                            O = g.DescriptionField,
                            w = (0, m.retrieveSchema)(r.items, b);
                        return d["default"].createElement("fieldset", {
                            className: "field field-array field-array-of-" + w.type
                        }, d["default"].createElement(u, {
                            TitleField: S,
                            idSchema: i,
                            title: p,
                            required: c
                        }), r.description ? d["default"].createElement(s, {
                            DescriptionField: O,
                            idSchema: i,
                            description: r.description
                        }) : null, d["default"].createElement("div", {
                            className: "row array-item-list"
                        }, y.map(function(t, r) {
                            var o = a ? a[r] : void 0,
                                u = i.$id + "_" + r,
                                s = (0, m.toIdSchema)(w, u, b);
                            return e.renderArrayFieldItem({
                                index: r,
                                canMoveUp: r > 0,
                                canMoveDown: r < y.length - 1,
                                itemSchema: w,
                                itemIdSchema: s,
                                itemErrorSchema: o,
                                itemData: y[r],
                                itemUiSchema: n.items
                            })
                        })), d["default"].createElement(l, {
                            onClick: this.onAddClick,
                            disabled: f || h
                        }))
                    }
                }, {
                    key: "renderMultiSelect",
                    value: function() {
                        var e = this.props,
                            t = e.schema,
                            r = e.idSchema,
                            n = e.uiSchema,
                            a = e.disabled,
                            i = e.readonly,
                            o = this.state.items,
                            u = this.props.registry.definitions,
                            s = (0, m.retrieveSchema)(t.items, u),
                            l = "checkboxes" === n["ui:widget"],
                            c = l ? g["default"] : p["default"];
                        return d["default"].createElement(c, {
                            id: r && r.$id,
                            multiple: !0,
                            onChange: this.onSelectChange,
                            options: {
                                enumOptions: (0, m.optionsList)(s)
                            },
                            schema: t,
                            value: o,
                            disabled: a,
                            readonly: i
                        })
                    }
                }, {
                    key: "renderFiles",
                    value: function() {
                        var e = this.props,
                            t = e.schema,
                            r = e.idSchema,
                            n = e.name,
                            a = e.disabled,
                            i = e.readonly,
                            o = t.title || n,
                            u = this.state.items;
                        return d["default"].createElement(v["default"], {
                            id: r && r.$id,
                            multiple: !0,
                            onChange: this.onSelectChange,
                            schema: t,
                            title: o,
                            value: u,
                            disabled: a,
                            readonly: i
                        })
                    }
                }, {
                    key: "renderFixedArray",
                    value: function() {
                        var e = this,
                            t = this.props,
                            r = t.schema,
                            n = t.uiSchema,
                            a = t.errorSchema,
                            i = t.idSchema,
                            o = t.name,
                            s = t.required,
                            c = t.disabled,
                            f = t.readonly,
                            h = r.title || o,
                            p = this.state.items,
                            y = this.props.registry,
                            v = y.definitions,
                            b = y.fields,
                            g = b.TitleField,
                            S = r.items.map(function(e) {
                                return (0, m.retrieveSchema)(e, v)
                            }),
                            O = (0, m.allowAdditionalItems)(r) ? (0, m.retrieveSchema)(r.additionalItems, v) : null;
                        return (!p || p.length < S.length) && (p = p || [], p = p.concat(new Array(S.length - p.length))), d["default"].createElement("fieldset", {
                            className: "field field-array field-array-fixed-items"
                        }, d["default"].createElement(u, {
                            TitleField: g,
                            idSchema: i,
                            title: h,
                            required: s
                        }), r.description ? d["default"].createElement("div", {
                            className: "field-description"
                        }, r.description) : null, d["default"].createElement("div", {
                            className: "row array-item-list"
                        }, p.map(function(t, r) {
                            var o = r >= S.length,
                                u = o ? O : S[r],
                                s = i.$id + "_" + r,
                                l = (0, m.toIdSchema)(u, s, v),
                                c = o ? n.additionalItems || {} : Array.isArray(n.items) ? n.items[r] : n.items || {},
                                f = a ? a[r] : void 0;
                            return e.renderArrayFieldItem({
                                index: r,
                                removable: o,
                                canMoveUp: r >= S.length + 1,
                                canMoveDown: o && r < p.length - 1,
                                itemSchema: u,
                                itemData: t,
                                itemUiSchema: c,
                                itemIdSchema: l,
                                itemErrorSchema: f
                            })
                        })), O ? d["default"].createElement(l, {
                            onClick: this.onAddClick,
                            disabled: c || f
                        }) : null)
                    }
                }, {
                    key: "renderArrayFieldItem",
                    value: function(e) {
                        var t = e.index,
                            r = e.removable,
                            n = void 0 === r ? !0 : r,
                            a = e.canMoveUp,
                            i = void 0 === a ? !0 : a,
                            o = e.canMoveDown,
                            u = void 0 === o ? !0 : o,
                            s = e.itemSchema,
                            l = e.itemData,
                            c = e.itemUiSchema,
                            f = e.itemIdSchema,
                            m = e.itemErrorSchema,
                            h = this.props.registry.fields.SchemaField,
                            p = this.props,
                            y = p.disabled,
                            v = p.readonly,
                            b = n || i || u,
                            g = {
                                flex: 1,
                                paddingLeft: 6,
                                paddingRight: 6,
                                fontWeight: "bold"
                            };
                        return d["default"].createElement("div", {
                            key: t,
                            className: "array-item"
                        }, d["default"].createElement("div", {
                            className: b ? "col-xs-10" : "col-xs-12"
                        }, d["default"].createElement(h, {
                            schema: s,
                            uiSchema: c,
                            formData: l,
                            errorSchema: m,
                            idSchema: f,
                            required: this.isItemRequired(s),
                            onChange: this.onChangeForIndex(t),
                            registry: this.props.registry,
                            disabled: this.props.disabled,
                            readonly: this.props.readonly
                        })), b ? d["default"].createElement("div", {
                            className: "col-xs-2 array-item-toolbox text-right"
                        }, d["default"].createElement("div", {
                            className: "btn-group",
                            style: {
                                display: "flex"
                            }
                        }, i || u ? d["default"].createElement("button", {
                            type: "button",
                            className: "btn btn-default array-item-move-up",
                            style: g,
                            tabIndex: "-1",
                            disabled: y || v || !i,
                            onClick: this.onReorderClick(t, t - 1)
                        }, "⬆") : null, i || u ? d["default"].createElement("button", {
                            type: "button",
                            className: "btn btn-default array-item-move-down",
                            style: g,
                            tabIndex: "-1",
                            disabled: y || v || !u,
                            onClick: this.onReorderClick(t, t + 1)
                        }, "⬇") : null, n ? d["default"].createElement("button", {
                            type: "button",
                            className: "btn btn-danger array-item-remove",
                            style: g,
                            tabIndex: "-1",
                            disabled: y || v,
                            onClick: this.onDropIndexClick(t)
                        }, "✖") : null)) : null)
                    }
                }, {
                    key: "itemTitle",
                    get: function() {
                        var e = this.props.schema;
                        return e.items.title || e.items.description || "Item"
                    }
                }]), t
            }(f.Component);
        S.defaultProps = {
            uiSchema: {},
            idSchema: {},
            registry: (0, m.getDefaultRegistry)(),
            required: !1,
            disabled: !1,
            readonly: !1
        }, t["default"] = S
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            return {
                enumOptions: (0, l.optionsList)(Object.assign({
                    enumNames: ["true", "false"],
                    "enum": [!0, !1]
                }, {
                    enumNames: e.enumNames
                }))
            }
        }

        function i(e) {
            var t = e.schema,
                r = e.name,
                n = e.uiSchema,
                i = e.idSchema,
                u = e.formData,
                c = e.registry,
                d = e.required,
                m = e.disabled,
                h = e.readonly,
                p = e.onChange,
                y = t.title,
                v = c.widgets,
                b = c.formContext,
                g = n["ui:widget"],
                S = {
                    schema: t,
                    id: i && i.$id,
                    onChange: p,
                    label: y || r,
                    value: (0, l.defaultFieldValue)(u, t),
                    required: d,
                    disabled: m,
                    readonly: h,
                    registry: c,
                    formContext: b
                };
            if (g) {
                var O = (0, l.getAlternativeWidget)(t, g, v);
                return s["default"].createElement(O, o({
                    options: a(t)
                }, S))
            }
            return s["default"].createElement(f["default"], S)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            u = r(2),
            s = n(u),
            l = r(4),
            c = r(31),
            f = n(c);
        i.defaultProps = {
            uiSchema: {},
            registry: (0, l.getDefaultRegistry)(),
            disabled: !1,
            readonly: !1
        }, t["default"] = i
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            var t = (e.schema, e.id),
                r = e.value,
                n = e.required,
                a = e.disabled,
                i = e.onChange,
                u = e.label;
            return o["default"].createElement("div", {
                className: "checkbox " + (a ? "disabled" : "")
            }, o["default"].createElement("label", null, o["default"].createElement("input", {
                type: "checkbox",
                id: t,
                checked: "undefined" == typeof r ? !1 : r,
                required: n,
                disabled: a,
                onChange: function(e) {
                    return i(e.target.checked)
                }
            }), o["default"].createElement("strong", null, u)))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(2),
            o = n(i);
        t["default"] = a
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            return u["default"].createElement(c["default"], i({}, e, {
                onChange: function(t) {
                    return e.onChange((0, s.asNumber)(t))
                }
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            o = r(2),
            u = n(o),
            s = r(4),
            l = r(33),
            c = n(l);
        a.defaultProps = {
            uiSchema: {}
        }, t["default"] = a
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            var t = e.schema,
                r = e.name,
                n = e.uiSchema,
                a = e.idSchema,
                o = e.formData,
                l = e.registry,
                f = e.required,
                m = e.disabled,
                h = e.readonly,
                p = e.onChange,
                y = t.title,
                v = l.widgets,
                b = l.formContext,
                g = n["ui:widget"] || t.format,
                S = n["ui:placeholder"] || "",
                O = {
                    schema: t,
                    id: a && a.$id,
                    label: y || r,
                    value: (0, s.defaultFieldValue)(o, t),
                    onChange: p,
                    required: f,
                    disabled: m,
                    readonly: h,
                    formContext: b
                };
            if (Array.isArray(t["enum"])) {
                var w = (0, s.optionsList)(t);
                if (g) {
                    var E = (0, s.getAlternativeWidget)(t, g, v, {
                        enumOptions: w
                    });
                    return u["default"].createElement(E, O)
                }
                return u["default"].createElement(d["default"], i({
                    options: {
                        enumOptions: w
                    }
                }, O))
            }
            if (g) {
                var j = (0, s.getAlternativeWidget)(t, g, v);
                return u["default"].createElement(j, i({}, O, {
                    placeholder: S
                }))
            }
            return u["default"].createElement(c["default"], i({}, O, {
                placeholder: S
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            o = r(2),
            u = n(o),
            s = r(4),
            l = r(17),
            c = n(l),
            f = r(16),
            d = n(f);
        a.defaultProps = {
            uiSchema: {},
            registry: (0, s.getDefaultRegistry)(),
            disabled: !1,
            readonly: !1
        }, t["default"] = a
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e, t) {
            var r = Object.keys(e),
                n = Object.keys(t);
            return r.length < n.length ? !0 : !(0, d.deepEquals)(r.sort(), n.sort())
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
            c = r(2),
            f = n(c),
            d = r(4),
            m = function(e) {
                function t(e) {
                    i(this, t);
                    var r = o(this, Object.getPrototypeOf(t).call(this, e));
                    return r.onPropertyChange = function(e) {
                        return function(t, n) {
                            r.asyncSetState(a({}, e, t), n)
                        }
                    }, r.state = r.getStateFromProps(e), r
                }
                return u(t, e), l(t, [{
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        var t = this.getStateFromProps(e),
                            r = e.formData;
                        r && s(r, this.state) ? (this.state = t, this.forceUpdate()) : this.setState(t)
                    }
                }, {
                    key: "getStateFromProps",
                    value: function(e) {
                        var t = e.schema,
                            r = e.formData,
                            n = e.registry;
                        return (0, d.getDefaultFormState)(t, r, n.definitions) || {}
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return (0, d.shouldRender)(this, e, t)
                    }
                }, {
                    key: "isRequired",
                    value: function(e) {
                        var t = this.props.schema;
                        return Array.isArray(t.required) && -1 !== t.required.indexOf(e)
                    }
                }, {
                    key: "asyncSetState",
                    value: function(e) {
                        var t = this,
                            r = arguments.length <= 1 || void 0 === arguments[1] ? {
                                validate: !1
                            } : arguments[1];
                        (0, d.setState)(this, e, function() {
                            t.props.onChange(t.state, r)
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            r = t.uiSchema,
                            n = t.errorSchema,
                            a = t.idSchema,
                            i = t.name,
                            o = t.required,
                            u = t.disabled,
                            s = t.readonly,
                            l = this.props.registry,
                            c = l.definitions,
                            m = l.fields,
                            h = l.formContext,
                            p = m.SchemaField,
                            y = m.TitleField,
                            v = m.DescriptionField,
                            b = (0, d.retrieveSchema)(this.props.schema, c),
                            g = b.title || i,
                            S = void 0;
                        try {
                            var O = Object.keys(b.properties);
                            S = (0, d.orderProperties)(O, r["ui:order"])
                        } catch (w) {
                            return f["default"].createElement("div", null, f["default"].createElement("p", {
                                className: "config-error",
                                style: {
                                    color: "red"
                                }
                            }, "Invalid ", i || "root", " object field configuration:", f["default"].createElement("em", null, w.message), "."), f["default"].createElement("pre", null, JSON.stringify(b)))
                        }
                        return f["default"].createElement("fieldset", null, g ? f["default"].createElement(y, {
                            id: a.$id + "__title",
                            title: g,
                            required: o,
                            formContext: h
                        }) : null, b.description ? f["default"].createElement(v, {
                            id: a.$id + "__description",
                            description: b.description,
                            formContext: h
                        }) : null, S.map(function(t, i) {
                            return f["default"].createElement(p, {
                                key: i,
                                name: t,
                                required: e.isRequired(t),
                                schema: b.properties[t],
                                uiSchema: r[t],
                                errorSchema: n[t],
                                idSchema: a[t],
                                formData: e.state[t],
                                onChange: e.onPropertyChange(t),
                                registry: e.props.registry,
                                disabled: u,
                                readonly: s
                            })
                        }))
                    }
                }]), t
            }(c.Component);
        m.defaultProps = {
            uiSchema: {},
            errorSchema: {},
            idSchema: {},
            registry: (0, d.getDefaultRegistry)(),
            required: !1,
            disabled: !1,
            readonly: !1
        }, t["default"] = m
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            var t = e.schema;
            return o["default"].createElement("div", {
                className: "unsupported-field"
            }, "Unsupported field schema ", JSON.stringify(t, null, 2), ".")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t["default"] = a;
        var i = r(2),
            o = n(i)
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e) {
            var t = e.errors;
            return o["default"].createElement("div", {
                className: "panel panel-danger errors"
            }, o["default"].createElement("div", {
                className: "panel-heading"
            }, o["default"].createElement("h3", {
                className: "panel-title"
            }, "Errors")), o["default"].createElement("ul", {
                className: "list-group"
            }, t.map(function(e, t) {
                return o["default"].createElement("li", {
                    key: t,
                    className: "list-group-item text-danger"
                }, e.stack)
            })))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t["default"] = a;
        var i = r(2),
            o = n(i)
    }, function(e, t, r) {
        "use strict";

        function n(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function a(e) {
            return e.split(".").reduce(function(e, t) {
                var r = t.match(m);
                if (r) {
                    var n = t.slice(0, t.indexOf("[")),
                        a = r.map(function(e) {
                            return parseInt(e.slice(1, -1), 10)
                        });
                    e = e.concat(n, a)
                } else e.push(t);
                return e
            }, [])
        }

        function i(e) {
            return e.length ? e.reduce(function(e, t) {
                var r = t.property,
                    n = t.message,
                    i = a(r),
                    o = e,
                    u = !0,
                    s = !1,
                    l = void 0;
                try {
                    for (var c, f = i.slice(1)[Symbol.iterator](); !(u = (c = f.next()).done); u = !0) {
                        var d = c.value;
                        d in o || (o[d] = {}), o = o[d]
                    }
                } catch (m) {
                    s = !0, l = m
                } finally {
                    try {
                        !u && f["return"] && f["return"]()
                    } finally {
                        if (s) throw l
                    }
                }
                return Array.isArray(o.__errors) ? o.__errors = o.__errors.concat(n) : o.__errors = [n], e
            }, {}) : {}
        }

        function o(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? "root" : arguments[1],
                r = [];
            return "__errors" in e && (r = r.concat(e.__errors.map(function(e) {
                return {
                    stack: t + ": " + e
                }
            }))), Object.keys(e).reduce(function(t, r) {
                return "__errors" !== r && (t = t.concat(o(e[r], r))), t
            }, r)
        }

        function u(e) {
            var t = {
                __errors: [],
                addError: function(e) {
                    this.__errors.push(e)
                }
            };
            return (0, d.isObject)(e) ? Object.keys(e).reduce(function(t, r) {
                return c({}, t, n({}, r, u(e[r])))
            }, t) : t
        }

        function s(e) {
            return Object.keys(e).reduce(function(t, r) {
                return "addError" === r ? t : "__errors" === r ? c({}, t, n({}, r, e[r])) : c({}, t, n({}, r, s(e[r])))
            }, {})
        }

        function l(e, t, r) {
            var n = (0, f.validate)(e, t),
                a = n.errors,
                l = i(a);
            if ("function" != typeof r) return {
                errors: a,
                errorSchema: l
            };
            var c = r(e, u(e)),
                m = s(c),
                h = (0, d.mergeObjects)(l, m, !0),
                p = o(h);
            return {
                errors: p,
                errorSchema: h
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        t.toErrorList = o, t["default"] = l;
        var f = r(38),
            d = r(4),
            m = /\[\d+]/g
    }, function(e, t, r) {
        "use strict";
        var n = e.exports.Validator = r(39);
        e.exports.ValidatorResult = r(48).ValidatorResult, e.exports.ValidationError = r(48).ValidationError, e.exports.SchemaError = r(48).SchemaError, e.exports.validate = function(e, t, r) {
            var a = new n;
            return a.validate(e, t, r)
        }
    }, function(e, t, r) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            a = r(40),
            i = r(47),
            o = r(48),
            u = o.ValidatorResult,
            s = o.SchemaError,
            l = o.SchemaContext,
            c = function d() {
                this.customFormats = Object.create(d.prototype.customFormats), this.schemas = {}, this.unresolvedRefs = [], this.types = Object.create(f), this.attributes = Object.create(i.validators)
            };
        c.prototype.customFormats = {}, c.prototype.schemas = null, c.prototype.types = null, c.prototype.attributes = null, c.prototype.unresolvedRefs = null, c.prototype.addSchema = function(e, t) {
            if (!e) return null;
            var r = t || e.id;
            return this.addSubSchema(r, e), r && (this.schemas[r] = e), this.schemas[r]
        }, c.prototype.addSubSchema = function(e, t) {
            if (t && "object" == ("undefined" == typeof t ? "undefined" : n(t))) {
                if (t.$ref) {
                    var r = a.resolve(e, t.$ref);
                    return void(void 0 === this.schemas[r] && (this.schemas[r] = null, this.unresolvedRefs.push(r)))
                }
                var i = t.id && a.resolve(e, t.id),
                    u = i || e;
                if (i) {
                    if (this.schemas[i]) {
                        if (!o.deepCompareStrict(this.schemas[i], t)) throw new Error("Schema <" + t + "> already exists with different definition");
                        return this.schemas[i]
                    }
                    this.schemas[i] = t;
                    var s = i.replace(/^([^#]*)#$/, "$1");
                    this.schemas[s] = t
                }
                return this.addSubSchemaArray(u, t.items instanceof Array ? t.items : [t.items]), this.addSubSchemaArray(u, t["extends"] instanceof Array ? t["extends"] : [t["extends"]]), this.addSubSchema(u, t.additionalItems), this.addSubSchemaObject(u, t.properties), this.addSubSchema(u, t.additionalProperties), this.addSubSchemaObject(u, t.definitions), this.addSubSchemaObject(u, t.patternProperties), this.addSubSchemaObject(u, t.dependencies), this.addSubSchemaArray(u, t.disallow), this.addSubSchemaArray(u, t.allOf), this.addSubSchemaArray(u, t.anyOf), this.addSubSchemaArray(u, t.oneOf), this.addSubSchema(u, t.not), this.schemas[i]
            }
        }, c.prototype.addSubSchemaArray = function(e, t) {
            if (t instanceof Array)
                for (var r = 0; r < t.length; r++) this.addSubSchema(e, t[r])
        }, c.prototype.addSubSchemaObject = function(e, t) {
            if (t && "object" == ("undefined" == typeof t ? "undefined" : n(t)))
                for (var r in t) this.addSubSchema(e, t[r])
        }, c.prototype.setSchemas = function(e) {
            this.schemas = e
        }, c.prototype.getSchema = function(e) {
            return this.schemas[e]
        }, c.prototype.validate = function(e, t, r, n) {
            r || (r = {});
            var i = r.propertyName || "instance",
                o = a.resolve(r.base || "/", t.id || "");
            if (n || (n = new l(t, r, i, o, Object.create(this.schemas)), n.schemas[o] || (n.schemas[o] = t)), t) {
                var u = this.validateSchema(e, t, r, n);
                if (!u) throw new Error("Result undefined");
                return u
            }
            throw new s("no schema specified", t)
        }, c.prototype.validateSchema = function(e, t, r, n) {
            function a(e) {
                var t = "string" == typeof e ? e : e.$ref;
                return "string" == typeof t ? t : !1
            }

            function c(e, t) {
                var r;
                return (r = a(e)) ? f.resolve(e, r, t).subschema : e
            }
            var f = this,
                d = new u(e, t, r, n);
            if (!t) throw new Error("schema is undefined");
            t["extends"] && (t["extends"] instanceof Array ? t["extends"].forEach(function(e) {
                t = o.deepMerge(t, c(e, n))
            }) : t = o.deepMerge(t, c(t["extends"], n)));
            var m;
            if (m = a(t)) {
                var h = this.resolve(t, m, n),
                    p = new l(h.subschema, r, n.propertyPath, h.switchSchema, n.schemas);
                return this.validateSchema(e, h.subschema, r, p)
            }
            var y = r && r.skipAttributes || [];
            for (var v in t)
                if (!i.ignoreProperties[v] && y.indexOf(v) < 0) {
                    var b = null,
                        g = f.attributes[v];
                    if (g) b = g.call(f, e, t, r, n);
                    else if (r.allowUnknownAttributes === !1) throw new s("Unsupported attribute: " + v, t);
                    b && d.importErrors(b)
                }
            if ("function" == typeof r.rewrite) {
                var S = r.rewrite.call(this, e, t, r, n);
                d.instance = S
            }
            return d
        }, c.prototype.resolve = function(e, t, r) {
            if (t = r.resolve(t), r.schemas[t]) return {
                subschema: r.schemas[t],
                switchSchema: t
            };
            var n = a.parse(t),
                i = n && n.hash,
                u = i && i.length && t.substr(0, t.length - i.length);
            if (!u || !r.schemas[u]) throw new s("no such schema <" + t + ">", e);
            var l = o.objectGetPath(r.schemas[u], i.substr(1));
            if (void 0 === l) throw new s("no such schema " + i + " located in <" + u + ">", e);
            return {
                subschema: l,
                switchSchema: t
            }
        }, c.prototype.testType = function(e, t, r, a, i) {
            if ("function" == typeof this.types[i]) return this.types[i].call(this, e);
            if (i && "object" == ("undefined" == typeof i ? "undefined" : n(i))) {
                var o = this.validateSchema(e, i, r, a);
                return void 0 === o || !(o && o.errors.length)
            }
            return !0
        };
        var f = c.prototype.types = {};
        f.string = function(e) {
            return "string" == typeof e
        }, f.number = function(e) {
            return "number" == typeof e && isFinite(e)
        }, f.integer = function(e) {
            return "number" == typeof e && e % 1 === 0
        }, f["boolean"] = function(e) {
            return "boolean" == typeof e
        }, f.array = function(e) {
            return e instanceof Array
        }, f["null"] = function(e) {
            return null === e
        }, f.date = function(e) {
            return e instanceof Date
        }, f.any = function(e) {
            return !0
        }, f.object = function(e) {
            return e && "object" === ("undefined" == typeof e ? "undefined" : n(e)) && !(e instanceof Array) && !(e instanceof Date)
        }, e.exports = c
    }, function(e, t, r) {
        "use strict";

        function n() {
            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
        }

        function a(e, t, r) {
            if (e && l(e) && e instanceof n) return e;
            var a = new n;
            return a.parse(e, t, r), a
        }

        function i(e) {
            return s(e) && (e = a(e)), e instanceof n ? e.format() : n.prototype.format.call(e)
        }

        function o(e, t) {
            return a(e, !1, !0).resolve(t)
        }

        function u(e, t) {
            return e ? a(e, !1, !0).resolveObject(t) : t
        }

        function s(e) {
            return "string" == typeof e
        }

        function l(e) {
            return "object" === ("undefined" == typeof e ? "undefined" : d(e)) && null !== e
        }

        function c(e) {
            return null === e
        }

        function f(e) {
            return null == e
        }
        var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            m = r(41);
        t.parse = a, t.resolve = o, t.resolveObject = u, t.format = i, t.Url = n;
        var h = /^([a-z0-9.+-]+:)/i,
            p = /:[0-9]*$/,
            y = ["<", ">", '"', "`", " ", "\r", "\n", "	"],
            v = ["{", "}", "|", "\\", "^", "`"].concat(y),
            b = ["'"].concat(v),
            g = ["%", "/", "?", ";", "#"].concat(b),
            S = ["/", "?", "#"],
            O = 255,
            w = /^[a-z0-9A-Z_-]{0,63}$/,
            E = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
            j = {
                javascript: !0,
                "javascript:": !0
            },
            _ = {
                javascript: !0,
                "javascript:": !0
            },
            x = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            },
            P = r(44);
        n.prototype.parse = function(e, t, r) {
            if (!s(e)) throw new TypeError("Parameter 'url' must be a string, not " + ("undefined" == typeof e ? "undefined" : d(e)));
            var n = e;
            n = n.trim();
            var a = h.exec(n);
            if (a) {
                a = a[0];
                var i = a.toLowerCase();
                this.protocol = i, n = n.substr(a.length)
            }
            if (r || a || n.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var o = "//" === n.substr(0, 2);
                !o || a && _[a] || (n = n.substr(2), this.slashes = !0)
            }
            if (!_[a] && (o || a && !x[a])) {
                for (var u = -1, l = 0; l < S.length; l++) {
                    var c = n.indexOf(S[l]); - 1 !== c && (-1 === u || u > c) && (u = c)
                }
                var f, p;
                p = -1 === u ? n.lastIndexOf("@") : n.lastIndexOf("@", u), -1 !== p && (f = n.slice(0, p), n = n.slice(p + 1), this.auth = decodeURIComponent(f)), u = -1;
                for (var l = 0; l < g.length; l++) {
                    var c = n.indexOf(g[l]); - 1 !== c && (-1 === u || u > c) && (u = c)
                } - 1 === u && (u = n.length), this.host = n.slice(0, u), n = n.slice(u), this.parseHost(), this.hostname = this.hostname || "";
                var y = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!y)
                    for (var v = this.hostname.split(/\./), l = 0, C = v.length; C > l; l++) {
                        var A = v[l];
                        if (A && !A.match(w)) {
                            for (var k = "", F = 0, I = A.length; I > F; F++) k += A.charCodeAt(F) > 127 ? "x" : A[F];
                            if (!k.match(w)) {
                                var M = v.slice(0, l),
                                    N = v.slice(l + 1),
                                    q = A.match(E);
                                q && (M.push(q[1]), N.unshift(q[2])), N.length && (n = "/" + N.join(".") + n), this.hostname = M.join(".");
                                break
                            }
                        }
                    }
                if (this.hostname.length > O ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !y) {
                    for (var T = this.hostname.split("."), R = [], l = 0; l < T.length; ++l) {
                        var D = T[l];
                        R.push(D.match(/[^A-Za-z0-9_-]/) ? "xn--" + m.encode(D) : D)
                    }
                    this.hostname = R.join(".")
                }
                var $ = this.port ? ":" + this.port : "",
                    U = this.hostname || "";
                this.host = U + $, this.href += this.host, y && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== n[0] && (n = "/" + n))
            }
            if (!j[i])
                for (var l = 0, C = b.length; C > l; l++) {
                    var L = b[l],
                        z = encodeURIComponent(L);
                    z === L && (z = escape(L)), n = n.split(L).join(z)
                }
            var Z = n.indexOf("#"); - 1 !== Z && (this.hash = n.substr(Z), n = n.slice(0, Z));
            var V = n.indexOf("?");
            if (-1 !== V ? (this.search = n.substr(V), this.query = n.substr(V + 1), t && (this.query = P.parse(this.query)), n = n.slice(0, V)) : t && (this.search = "", this.query = {}), n && (this.pathname = n), x[i] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                var $ = this.pathname || "",
                    D = this.search || "";
                this.path = $ + D
            }
            return this.href = this.format(), this
        }, n.prototype.format = function() {
            var e = this.auth || "";
            e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
            var t = this.protocol || "",
                r = this.pathname || "",
                n = this.hash || "",
                a = !1,
                i = "";
            this.host ? a = e + this.host : this.hostname && (a = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"),
                this.port && (a += ":" + this.port)), this.query && l(this.query) && Object.keys(this.query).length && (i = P.stringify(this.query));
            var o = this.search || i && "?" + i || "";
            return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || x[t]) && a !== !1 ? (a = "//" + (a || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : a || (a = ""), n && "#" !== n.charAt(0) && (n = "#" + n), o && "?" !== o.charAt(0) && (o = "?" + o), r = r.replace(/[?#]/g, function(e) {
                return encodeURIComponent(e)
            }), o = o.replace("#", "%23"), t + a + r + o + n
        }, n.prototype.resolve = function(e) {
            return this.resolveObject(a(e, !1, !0)).format()
        }, n.prototype.resolveObject = function(e) {
            if (s(e)) {
                var t = new n;
                t.parse(e, !1, !0), e = t
            }
            var r = new n;
            if (Object.keys(this).forEach(function(e) {
                    r[e] = this[e]
                }, this), r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
            if (e.slashes && !e.protocol) return Object.keys(e).forEach(function(t) {
                "protocol" !== t && (r[t] = e[t])
            }), x[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
            if (e.protocol && e.protocol !== r.protocol) {
                if (!x[e.protocol]) return Object.keys(e).forEach(function(t) {
                    r[t] = e[t]
                }), r.href = r.format(), r;
                if (r.protocol = e.protocol, e.host || _[e.protocol]) r.pathname = e.pathname;
                else {
                    for (var a = (e.pathname || "").split("/"); a.length && !(e.host = a.shift()););
                    e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== a[0] && a.unshift(""), a.length < 2 && a.unshift(""), r.pathname = a.join("/")
                }
                if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
                    var i = r.pathname || "",
                        o = r.search || "";
                    r.path = i + o
                }
                return r.slashes = r.slashes || e.slashes, r.href = r.format(), r
            }
            var u = r.pathname && "/" === r.pathname.charAt(0),
                l = e.host || e.pathname && "/" === e.pathname.charAt(0),
                d = l || u || r.host && e.pathname,
                m = d,
                h = r.pathname && r.pathname.split("/") || [],
                a = e.pathname && e.pathname.split("/") || [],
                p = r.protocol && !x[r.protocol];
            if (p && (r.hostname = "", r.port = null, r.host && ("" === h[0] ? h[0] = r.host : h.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === a[0] ? a[0] = e.host : a.unshift(e.host)), e.host = null), d = d && ("" === a[0] || "" === h[0])), l) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, h = a;
            else if (a.length) h || (h = []), h.pop(), h = h.concat(a), r.search = e.search, r.query = e.query;
            else if (!f(e.search)) {
                if (p) {
                    r.hostname = r.host = h.shift();
                    var y = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
                    y && (r.auth = y.shift(), r.host = r.hostname = y.shift())
                }
                return r.search = e.search, r.query = e.query, c(r.pathname) && c(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
            }
            if (!h.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
            for (var v = h.slice(-1)[0], b = (r.host || e.host) && ("." === v || ".." === v) || "" === v, g = 0, S = h.length; S >= 0; S--) v = h[S], "." == v ? h.splice(S, 1) : ".." === v ? (h.splice(S, 1), g++) : g && (h.splice(S, 1), g--);
            if (!d && !m)
                for (; g--; g) h.unshift("..");
            !d || "" === h[0] || h[0] && "/" === h[0].charAt(0) || h.unshift(""), b && "/" !== h.join("/").substr(-1) && h.push("");
            var O = "" === h[0] || h[0] && "/" === h[0].charAt(0);
            if (p) {
                r.hostname = r.host = O ? "" : h.length ? h.shift() : "";
                var y = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
                y && (r.auth = y.shift(), r.host = r.hostname = y.shift())
            }
            return d = d || r.host && h.length, d && !O && h.unshift(""), h.length ? r.pathname = h.join("/") : (r.pathname = null, r.path = null), c(r.pathname) && c(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r
        }, n.prototype.parseHost = function() {
            var e = this.host,
                t = p.exec(e);
            t && (t = t[0], ":" !== t && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
        }
    }, function(e, t, r) {
        var n;
        (function(e, a) {
            "use strict";
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };
            ! function(o) {
                function u(e) {
                    throw RangeError(T[e])
                }

                function s(e, t) {
                    for (var r = e.length, n = []; r--;) n[r] = t(e[r]);
                    return n
                }

                function l(e, t) {
                    var r = e.split("@"),
                        n = "";
                    r.length > 1 && (n = r[0] + "@", e = r[1]), e = e.replace(q, ".");
                    var a = e.split("."),
                        i = s(a, t).join(".");
                    return n + i
                }

                function c(e) {
                    for (var t, r, n = [], a = 0, i = e.length; i > a;) t = e.charCodeAt(a++), t >= 55296 && 56319 >= t && i > a ? (r = e.charCodeAt(a++), 56320 == (64512 & r) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), a--)) : n.push(t);
                    return n
                }

                function f(e) {
                    return s(e, function(e) {
                        var t = "";
                        return e > 65535 && (e -= 65536, t += $(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += $(e)
                    }).join("")
                }

                function d(e) {
                    return 10 > e - 48 ? e - 22 : 26 > e - 65 ? e - 65 : 26 > e - 97 ? e - 97 : _
                }

                function m(e, t) {
                    return e + 22 + 75 * (26 > e) - ((0 != t) << 5)
                }

                function h(e, t, r) {
                    var n = 0;
                    for (e = r ? D(e / A) : e >> 1, e += D(e / t); e > R * P >> 1; n += _) e = D(e / R);
                    return D(n + (R + 1) * e / (e + C))
                }

                function p(e) {
                    var t, r, n, a, i, o, s, l, c, m, p = [],
                        y = e.length,
                        v = 0,
                        b = F,
                        g = k;
                    for (r = e.lastIndexOf(I), 0 > r && (r = 0), n = 0; r > n; ++n) e.charCodeAt(n) >= 128 && u("not-basic"), p.push(e.charCodeAt(n));
                    for (a = r > 0 ? r + 1 : 0; y > a;) {
                        for (i = v, o = 1, s = _; a >= y && u("invalid-input"), l = d(e.charCodeAt(a++)), (l >= _ || l > D((j - v) / o)) && u("overflow"), v += l * o, c = g >= s ? x : s >= g + P ? P : s - g, !(c > l); s += _) m = _ - c, o > D(j / m) && u("overflow"), o *= m;
                        t = p.length + 1, g = h(v - i, t, 0 == i), D(v / t) > j - b && u("overflow"), b += D(v / t), v %= t, p.splice(v++, 0, b)
                    }
                    return f(p)
                }

                function y(e) {
                    var t, r, n, a, i, o, s, l, f, d, p, y, v, b, g, S = [];
                    for (e = c(e), y = e.length, t = F, r = 0, i = k, o = 0; y > o; ++o) p = e[o], 128 > p && S.push($(p));
                    for (n = a = S.length, a && S.push(I); y > n;) {
                        for (s = j, o = 0; y > o; ++o) p = e[o], p >= t && s > p && (s = p);
                        for (v = n + 1, s - t > D((j - r) / v) && u("overflow"), r += (s - t) * v, t = s, o = 0; y > o; ++o)
                            if (p = e[o], t > p && ++r > j && u("overflow"), p == t) {
                                for (l = r, f = _; d = i >= f ? x : f >= i + P ? P : f - i, !(d > l); f += _) g = l - d, b = _ - d, S.push($(m(d + g % b, 0))), l = D(g / b);
                                S.push($(m(l, 0))), i = h(r, v, n == a), r = 0, ++n
                            }++r, ++t
                    }
                    return S.join("")
                }

                function v(e) {
                    return l(e, function(e) {
                        return M.test(e) ? p(e.slice(4).toLowerCase()) : e
                    })
                }

                function b(e) {
                    return l(e, function(e) {
                        return N.test(e) ? "xn--" + y(e) : e
                    })
                }
                var g = "object" == i(t) && t && !t.nodeType && t,
                    S = "object" == i(e) && e && !e.nodeType && e,
                    O = "object" == ("undefined" == typeof a ? "undefined" : i(a)) && a;
                O.global !== O && O.window !== O && O.self !== O || (o = O);
                var w, E, j = 2147483647,
                    _ = 36,
                    x = 1,
                    P = 26,
                    C = 38,
                    A = 700,
                    k = 72,
                    F = 128,
                    I = "-",
                    M = /^xn--/,
                    N = /[^\x20-\x7E]/,
                    q = /[\x2E\u3002\uFF0E\uFF61]/g,
                    T = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    },
                    R = _ - x,
                    D = Math.floor,
                    $ = String.fromCharCode;
                if (w = {
                        version: "1.3.2",
                        ucs2: {
                            decode: c,
                            encode: f
                        },
                        decode: p,
                        encode: y,
                        toASCII: b,
                        toUnicode: v
                    }, "object" == i(r(43)) && r(43)) n = function() {
                    return w
                }.call(t, r, t, e), !(void 0 !== n && (e.exports = n));
                else if (g && S)
                    if (e.exports == g) S.exports = w;
                    else
                        for (E in w) w.hasOwnProperty(E) && (g[E] = w[E]);
                else o.punycode = w
            }(void 0)
        }).call(t, r(42)(e), function() {
            return this
        }())
    }, function(e, t) {
        "use strict";
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
        }
    }, function(e, t) {
        (function(t) {
            e.exports = t
        }).call(t, {})
    }, function(e, t, r) {
        "use strict";
        t.decode = t.parse = r(45), t.encode = t.stringify = r(46)
    }, function(e, t) {
        "use strict";

        function r(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        e.exports = function(e, t, n, a) {
            t = t || "&", n = n || "=";
            var i = {};
            if ("string" != typeof e || 0 === e.length) return i;
            var o = /\+/g;
            e = e.split(t);
            var u = 1e3;
            a && "number" == typeof a.maxKeys && (u = a.maxKeys);
            var s = e.length;
            u > 0 && s > u && (s = u);
            for (var l = 0; s > l; ++l) {
                var c, f, d, m, h = e[l].replace(o, "%20"),
                    p = h.indexOf(n);
                p >= 0 ? (c = h.substr(0, p), f = h.substr(p + 1)) : (c = h, f = ""), d = decodeURIComponent(c), m = decodeURIComponent(f), r(i, d) ? Array.isArray(i[d]) ? i[d].push(m) : i[d] = [i[d], m] : i[d] = m
            }
            return i
        }
    }, function(e, t) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            n = function(e) {
                switch ("undefined" == typeof e ? "undefined" : r(e)) {
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                        return isFinite(e) ? e : "";
                    default:
                        return ""
                }
            };
        e.exports = function(e, t, a, i) {
            return t = t || "&", a = a || "=", null === e && (e = void 0), "object" === ("undefined" == typeof e ? "undefined" : r(e)) ? Object.keys(e).map(function(r) {
                var i = encodeURIComponent(n(r)) + a;
                return Array.isArray(e[r]) ? e[r].map(function(e) {
                    return i + encodeURIComponent(n(e))
                }).join(t) : i + encodeURIComponent(n(e[r]))
            }).join(t) : i ? encodeURIComponent(n(i)) + a + encodeURIComponent(n(e)) : ""
        }
    }, function(e, t, r) {
        "use strict";

        function n(e, t, r, n) {
            return this.validateSchema(e, n, t, r).valid
        }

        function a(e, t, r, n, a, i) {
            if (!t.properties || void 0 === t.properties[a])
                if (t.additionalProperties === !1) i.addError({
                    name: "additionalProperties",
                    argument: a,
                    message: "additionalProperty " + JSON.stringify(a) + " exists in instance when not allowed"
                });
                else {
                    var o = t.additionalProperties || {},
                        u = this.validateSchema(e[a], o, r, n.makeChild(o, a));
                    u.instance !== i.instance[a] && (i.instance[a] = u.instance), i.importErrors(u)
                }
        }

        function i(e, t, r) {
            var n, a = r.length;
            for (n = t + 1, a; a > n; n++)
                if (u.deepCompareStrict(e, r[n])) return !1;
            return !0
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            u = r(48),
            s = u.ValidatorResult,
            l = u.SchemaError,
            c = {};
        c.ignoreProperties = {
            id: !0,
            "default": !0,
            description: !0,
            title: !0,
            exclusiveMinimum: !0,
            exclusiveMaximum: !0,
            additionalItems: !0,
            $schema: !0,
            $ref: !0,
            "extends": !0
        };
        var f = c.validators = {};
        f.type = function(e, t, r, n) {
            if (void 0 === e) return null;
            var a = new s(e, t, r, n),
                i = t.type instanceof Array ? t.type : [t.type];
            if (!i.some(this.testType.bind(this, e, t, r, n))) {
                var o = i.map(function(e) {
                    return e.id && "<" + e.id + ">" || e + ""
                });
                a.addError({
                    name: "type",
                    argument: o,
                    message: "is not of a type(s) " + o
                })
            }
            return a
        }, f.anyOf = function(e, t, r, a) {
            if (void 0 === e) return null;
            var i = new s(e, t, r, a);
            if (!(t.anyOf instanceof Array)) throw new l("anyOf must be an array");
            if (!t.anyOf.some(n.bind(this, e, r, a))) {
                var o = t.anyOf.map(function(e, t) {
                    return e.id && "<" + e.id + ">" || e.title && JSON.stringify(e.title) || e.$ref && "<" + e.$ref + ">" || "[subschema " + t + "]"
                });
                i.addError({
                    name: "anyOf",
                    argument: o,
                    message: "is not any of " + o.join(",")
                })
            }
            return i
        }, f.allOf = function(e, t, r, n) {
            if (void 0 === e) return null;
            if (!(t.allOf instanceof Array)) throw new l("allOf must be an array");
            var a = new s(e, t, r, n),
                i = this;
            return t.allOf.forEach(function(t, o) {
                var u = i.validateSchema(e, t, r, n);
                if (!u.valid) {
                    var s = t.id && "<" + t.id + ">" || t.title && JSON.stringify(t.title) || t.$ref && "<" + t.$ref + ">" || "[subschema " + o + "]";
                    a.addError({
                        name: "allOf",
                        argument: {
                            id: s,
                            length: u.errors.length,
                            valid: u
                        },
                        message: "does not match allOf schema " + s + " with " + u.errors.length + " error[s]:"
                    }), a.importErrors(u)
                }
            }), a
        }, f.oneOf = function(e, t, r, a) {
            if (void 0 === e) return null;
            if (!(t.oneOf instanceof Array)) throw new l("oneOf must be an array");
            var i = new s(e, t, r, a),
                o = t.oneOf.filter(n.bind(this, e, r, a)).length,
                u = t.oneOf.map(function(e, t) {
                    return e.id && "<" + e.id + ">" || e.title && JSON.stringify(e.title) || e.$ref && "<" + e.$ref + ">" || "[subschema " + t + "]"
                });
            return 1 !== o && i.addError({
                name: "oneOf",
                argument: u,
                message: "is not exactly one from " + u.join(",")
            }), i
        }, f.properties = function(e, t, r, n) {
            if (void 0 !== e && e instanceof Object) {
                var a = new s(e, t, r, n),
                    i = t.properties || {};
                for (var o in i) {
                    var u = (e || void 0) && e[o],
                        l = this.validateSchema(u, i[o], r, n.makeChild(i[o], o));
                    l.instance !== a.instance[o] && (a.instance[o] = l.instance), a.importErrors(l)
                }
                return a
            }
        }, f.patternProperties = function(e, t, r, n) {
            if (void 0 !== e && this.types.object(e)) {
                var i = new s(e, t, r, n),
                    o = t.patternProperties || {};
                for (var u in e) {
                    var l = !0;
                    for (var c in o) {
                        var f = new RegExp(c);
                        if (f.test(u)) {
                            l = !1;
                            var d = this.validateSchema(e[u], o[c], r, n.makeChild(o[c], u));
                            d.instance !== i.instance[u] && (i.instance[u] = d.instance), i.importErrors(d)
                        }
                    }
                    l && a.call(this, e, t, r, n, u, i)
                }
                return i
            }
        }, f.additionalProperties = function(e, t, r, n) {
            if (void 0 !== e && this.types.object(e)) {
                if (t.patternProperties) return null;
                var i = new s(e, t, r, n);
                for (var o in e) a.call(this, e, t, r, n, o, i);
                return i
            }
        }, f.minProperties = function(e, t, r, n) {
            if (!e || "object" !== ("undefined" == typeof e ? "undefined" : o(e))) return null;
            var a = new s(e, t, r, n),
                i = Object.keys(e);
            return i.length >= t.minProperties || a.addError({
                name: "minProperties",
                argument: t.minProperties,
                message: "does not meet minimum property length of " + t.minProperties
            }), a
        }, f.maxProperties = function(e, t, r, n) {
            if (!e || "object" !== ("undefined" == typeof e ? "undefined" : o(e))) return null;
            var a = new s(e, t, r, n),
                i = Object.keys(e);
            return i.length <= t.maxProperties || a.addError({
                name: "maxProperties",
                argument: t.maxProperties,
                message: "does not meet maximum property length of " + t.maxProperties
            }), a
        }, f.items = function(e, t, r, n) {
            if (!(e instanceof Array)) return null;
            var a = this,
                i = new s(e, t, r, n);
            return void 0 !== e && t.items ? (e.every(function(e, o) {
                var u = t.items instanceof Array ? t.items[o] || t.additionalItems : t.items;
                if (void 0 === u) return !0;
                if (u === !1) return i.addError({
                    name: "items",
                    message: "additionalItems not permitted"
                }), !1;
                var s = a.validateSchema(e, u, r, n.makeChild(u, o));
                return s.instance !== i.instance[o] && (i.instance[o] = s.instance), i.importErrors(s), !0
            }), i) : i
        }, f.minimum = function(e, t, r, n) {
            if ("number" != typeof e) return null;
            var a = new s(e, t, r, n),
                i = !0;
            return i = t.exclusiveMinimum && t.exclusiveMinimum === !0 ? e > t.minimum : e >= t.minimum, i || a.addError({
                name: "minimum",
                argument: t.minimum,
                message: "must have a minimum value of " + t.minimum
            }), a
        }, f.maximum = function(e, t, r, n) {
            if ("number" != typeof e) return null;
            var a, i = new s(e, t, r, n);
            return a = t.exclusiveMaximum && t.exclusiveMaximum === !0 ? e < t.maximum : e <= t.maximum, a || i.addError({
                name: "maximum",
                argument: t.maximum,
                message: "must have a maximum value of " + t.maximum
            }), i
        }, f.divisibleBy = function(e, t, r, n) {
            if ("number" != typeof e) return null;
            if (0 == t.divisibleBy) throw new l("divisibleBy cannot be zero");
            var a = new s(e, t, r, n);
            return e / t.divisibleBy % 1 && a.addError({
                name: "divisibleBy",
                argument: t.divisibleBy,
                message: "is not divisible by (multiple of) " + JSON.stringify(t.divisibleBy)
            }), a
        }, f.multipleOf = function(e, t, r, n) {
            if ("number" != typeof e) return null;
            if (0 == t.multipleOf) throw new l("multipleOf cannot be zero");
            var a = new s(e, t, r, n);
            return e / t.multipleOf % 1 && a.addError({
                name: "multipleOf",
                argument: t.multipleOf,
                message: "is not a multiple of (divisible by) " + JSON.stringify(t.multipleOf)
            }), a
        }, f.required = function(e, t, r, n) {
            var a = new s(e, t, r, n);
            return void 0 === e && t.required === !0 ? a.addError({
                name: "required",
                message: "is required"
            }) : e && "object" === ("undefined" == typeof e ? "undefined" : o(e)) && Array.isArray(t.required) && t.required.forEach(function(t) {
                void 0 === e[t] && a.addError({
                    name: "required",
                    argument: t,
                    message: "requires property " + JSON.stringify(t)
                })
            }), a
        }, f.pattern = function(e, t, r, n) {
            if ("string" != typeof e) return null;
            var a = new s(e, t, r, n);
            return e.match(t.pattern) || a.addError({
                name: "pattern",
                argument: t.pattern,
                message: "does not match pattern " + JSON.stringify(t.pattern)
            }), a
        }, f.format = function(e, t, r, n) {
            var a = new s(e, t, r, n);
            return a.disableFormat || u.isFormat(e, t.format, this) || a.addError({
                name: "format",
                argument: t.format,
                message: "does not conform to the " + JSON.stringify(t.format) + " format"
            }), a
        }, f.minLength = function(e, t, r, n) {
            if ("string" != typeof e) return null;
            var a = new s(e, t, r, n);
            return e.length >= t.minLength || a.addError({
                name: "minLength",
                argument: t.minLength,
                message: "does not meet minimum length of " + t.minLength
            }), a
        }, f.maxLength = function(e, t, r, n) {
            if ("string" != typeof e) return null;
            var a = new s(e, t, r, n);
            return e.length <= t.maxLength || a.addError({
                name: "maxLength",
                argument: t.maxLength,
                message: "does not meet maximum length of " + t.maxLength
            }), a
        }, f.minItems = function(e, t, r, n) {
            if (!(e instanceof Array)) return null;
            var a = new s(e, t, r, n);
            return e.length >= t.minItems || a.addError({
                name: "minItems",
                argument: t.minItems,
                message: "does not meet minimum length of " + t.minItems
            }), a
        }, f.maxItems = function(e, t, r, n) {
            if (!(e instanceof Array)) return null;
            var a = new s(e, t, r, n);
            return e.length <= t.maxItems || a.addError({
                name: "maxItems",
                argument: t.maxItems,
                message: "does not meet maximum length of " + t.maxItems
            }), a
        }, f.uniqueItems = function(e, t, r, n) {
            function a(e, t, r) {
                for (var n = t + 1; n < r.length; n++)
                    if (u.deepCompareStrict(e, r[n])) return !1;
                return !0
            }
            var i = new s(e, t, r, n);
            return e instanceof Array ? (e.every(a) || i.addError({
                name: "uniqueItems",
                message: "contains duplicate item"
            }), i) : i
        }, f.uniqueItems = function(e, t, r, n) {
            if (!(e instanceof Array)) return null;
            var a = new s(e, t, r, n);
            return e.every(i) || a.addError({
                name: "uniqueItems",
                message: "contains duplicate item"
            }), a
        }, f.dependencies = function(e, t, r, n) {
            if (!e || "object" != ("undefined" == typeof e ? "undefined" : o(e))) return null;
            var a = new s(e, t, r, n);
            for (var i in t.dependencies)
                if (void 0 !== e[i]) {
                    var u = t.dependencies[i],
                        l = n.makeChild(u, i);
                    if ("string" == typeof u && (u = [u]), u instanceof Array) u.forEach(function(t) {
                        void 0 === e[t] && a.addError({
                            name: "dependencies",
                            argument: l.propertyPath,
                            message: "property " + t + " not found, required by " + l.propertyPath
                        })
                    });
                    else {
                        var c = this.validateSchema(e, u, r, l);
                        a.instance !== c.instance && (a.instance = c.instance), c && c.errors.length && (a.addError({
                            name: "dependencies",
                            argument: l.propertyPath,
                            message: "does not meet dependency required by " + l.propertyPath
                        }), a.importErrors(c))
                    }
                }
            return a
        }, f["enum"] = function(e, t, r, n) {
            if (!(t["enum"] instanceof Array)) throw new l("enum expects an array", t);
            if (void 0 === e) return null;
            var a = new s(e, t, r, n);
            return t["enum"].some(u.deepCompareStrict.bind(null, e)) || a.addError({
                name: "enum",
                argument: t["enum"],
                message: "is not one of enum values: " + t["enum"].join(",")
            }), a
        }, f.not = f.disallow = function(e, t, r, n) {
            var a = this;
            if (void 0 === e) return null;
            var i = new s(e, t, r, n),
                o = t.not || t.disallow;
            return o ? (o instanceof Array || (o = [o]), o.forEach(function(o) {
                if (a.testType(e, t, r, n, o)) {
                    var u = o && o.id && "<" + o.id + ">" || o;
                    i.addError({
                        name: "not",
                        argument: u,
                        message: "is of prohibited type " + u
                    })
                }
            }), i) : null
        }, e.exports = c
    }, function(e, t, r) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            a = r(40),
            i = t.ValidationError = function(e, t, r, n, a, i) {
                n && (this.property = n), e && (this.message = e), r && (r.id ? this.schema = r.id : this.schema = r), t && (this.instance = t), this.name = a, this.argument = i, this.stack = this.toString()
            };
        i.prototype.toString = function() {
            return this.property + " " + this.message
        };
        var o = t.ValidatorResult = function(e, t, r, n) {
            this.instance = e, this.schema = t, this.propertyPath = n.propertyPath, this.errors = [], this.throwError = r && r.throwError, this.disableFormat = r && r.disableFormat === !0
        };
        o.prototype.addError = function(e) {
            var t;
            if ("string" == typeof e) t = new i(e, this.instance, this.schema, this.propertyPath);
            else {
                if (!e) throw new Error("Missing error detail");
                if (!e.message) throw new Error("Missing error message");
                if (!e.name) throw new Error("Missing validator type");
                t = new i(e.message, this.instance, this.schema, this.propertyPath, e.name, e.argument)
            }
            if (this.throwError) throw t;
            return this.errors.push(t), t
        }, o.prototype.importErrors = function(e) {
            if ("string" == typeof e || e && e.validatorType) this.addError(e);
            else if (e && e.errors) {
                var t = this.errors;
                e.errors.forEach(function(e) {
                    t.push(e)
                })
            }
        }, o.prototype.toString = function(e) {
            return this.errors.map(function(e, t) {
                return t + ": " + e.toString() + "\n"
            }).join("")
        }, Object.defineProperty(o.prototype, "valid", {
            get: function() {
                return !this.errors.length
            }
        });
        var u = t.SchemaError = function f(e, t) {
            this.message = e, this.schema = t, Error.call(this, e), Error.captureStackTrace(this, f)
        };
        u.prototype = Object.create(Error.prototype, {
            constructor: {
                value: u,
                enumerable: !1
            },
            name: {
                value: "SchemaError",
                enumerable: !1
            }
        });
        var s = t.SchemaContext = function(e, t, r, n, a) {
            this.schema = e, this.options = t, this.propertyPath = r, this.base = n, this.schemas = a
        };
        s.prototype.resolve = function(e) {
            return a.resolve(this.base, e)
        }, s.prototype.makeChild = function(e, t) {
            var r = void 0 === t ? this.propertyPath : this.propertyPath + c(t),
                n = a.resolve(this.base, e.id || ""),
                i = new s(e, this.options, r, n, Object.create(this.schemas));
            return e.id && !i.schemas[n] && (i.schemas[n] = e), i
        };
        var l = t.FORMAT_REGEXPS = {
            "date-time": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
            date: /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
            time: /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,
            email: /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
            "ip-address": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
            ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
            uri: /^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/,
            color: /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
            hostname: /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
            "host-name": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
            alpha: /^[a-zA-Z]+$/,
            alphanumeric: /^[a-zA-Z0-9]+$/,
            "utc-millisec": function(e) {
                return "string" == typeof e && parseFloat(e) === parseInt(e, 10) && !isNaN(e)
            },
            regex: function(e) {
                var t = !0;
                try {
                    new RegExp(e)
                } catch (r) {
                    t = !1
                }
                return t
            },
            style: /\s*(.+?):\s*([^;]+);?/g,
            phone: /^\+(?:[0-9] ?){6,14}[0-9]$/
        };
        l.regexp = l.regex, l.pattern = l.regex, l.ipv4 = l["ip-address"], t.isFormat = function(e, t, r) {
            if ("string" == typeof e && void 0 !== l[t]) {
                if (l[t] instanceof RegExp) return l[t].test(e);
                if ("function" == typeof l[t]) return l[t](e)
            } else if (r && r.customFormats && "function" == typeof r.customFormats[t]) return r.customFormats[t](e);
            return !0
        };
        var c = t.makeSuffix = function(e) {
            return e = e.toString(), e.match(/[.\s\[\]]/) || e.match(/^[\d]/) ? e.match(/^\d+$/) ? "[" + e + "]" : "[" + JSON.stringify(e) + "]" : "." + e
        };
        t.deepCompareStrict = function d(e, t) {
            if (("undefined" == typeof e ? "undefined" : n(e)) !== ("undefined" == typeof t ? "undefined" : n(t))) return !1;
            if (e instanceof Array) return t instanceof Array ? e.length !== t.length ? !1 : e.every(function(r, n) {
                return d(e[n], t[n])
            }) : !1;
            if ("object" === ("undefined" == typeof e ? "undefined" : n(e))) {
                if (!e || !t) return e === t;
                var r = Object.keys(e),
                    a = Object.keys(t);
                return r.length !== a.length ? !1 : r.every(function(r) {
                    return d(e[r], t[r])
                })
            }
            return e === t
        }, e.exports.deepMerge = function m(e, t) {
            var r = Array.isArray(t),
                a = r && [] || {};
            return r ? (e = e || [], a = a.concat(e), t.forEach(function(t, r) {
                "object" === ("undefined" == typeof t ? "undefined" : n(t)) ? a[r] = m(e[r], t): -1 === e.indexOf(t) && a.push(t)
            })) : (e && "object" === ("undefined" == typeof e ? "undefined" : n(e)) && Object.keys(e).forEach(function(t) {
                a[t] = e[t]
            }), Object.keys(t).forEach(function(r) {
                "object" === n(t[r]) && t[r] && e[r] ? a[r] = m(e[r], t[r]) : a[r] = t[r]
            })), a
        }, t.objectGetPath = function(e, t) {
            for (var r, n = t.split("/").slice(1);
                "string" == typeof(r = n.shift());) {
                var a = decodeURIComponent(r.replace(/~0/, "~").replace(/~1/g, "/"));
                if (!(a in e)) return;
                e = e[a]
            }
            return e
        }, t.encodePath = function(e) {
            return e.map(function(e) {
                return "/" + encodeURIComponent(e).replace(/~/g, "%7E")
            }).join("")
        }
    }])
});
//# sourceMappingURL=react-jsonschema-form.js.map