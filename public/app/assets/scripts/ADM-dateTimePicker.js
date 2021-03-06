! function(e) {
    "use strict";
    String.prototype.toPersianDigits = function() {
        var e = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
        return this.replace(/[0-9]/g, function(t) {
            return e[+t]
        })
    }, String.prototype.toEnglishDigits = function() {
        var e = {
            "۰": "0",
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9"
        };
        return this.replace(/[^0-9.]/g, function(t) {
            return e[t] || t
        })
    }, String.prototype.lZero = function() {
        return this.length < 2 ? "0" + this : this
    }, Array.prototype.toNumber = function() {
        return this.map(function(e) {
            return Number(e)
        })
    }, Number.prototype.lZero = function() {
        return 10 > this ? "0" + this : this
    };
    var t = function() {
            var t = {
                    calType: "gregorian",
                    format: "YYYY/MM/DD hh:mm",
                    multiple: !0,
                    autoClose: !1,
                    transition: !0,
                    disabled: [],
                    smartDisabling: !0
                },
                a = {
                    getOptions: function(e) {
                        var a = e && t[e] || t;
                        return a
                    }
                };
            this.setOptions = function(a, n) {
                return n ? void(t[a] = e.extend(t[a] || {}, n)) : (n = a, void(t = e.extend(t, n)))
            }, this.$get = function() {
                return a
            }
        },
        a = function() {
            return function(e, t) {
                return "jalali" == t ? String(e).toPersianDigits() : e
            }
        },
        n = function() {
            function e(e) {
                var a = l(e);
                return a -= 226894, t(a)
            }

            function t(e) {
                var t = i(e),
                    r = n(e, t),
                    o = a(e, t, r),
                    l = {
                        day: o,
                        month: r,
                        year: t
                    };
                return l
            }

            function a(e, t, a) {
                var n = o(t);
                e -= n + 365 * (t - 1);
                for (var r = 1; a > r; r++) e -= 6 >= r ? 31 : 30;
                return e
            }

            function n(e, t) {
                var a = o(t);
                e -= a + 365 * (t - 1);
                for (var n = r(), i = 0; i < n.length; i++) {
                    if (e <= n[i].count) return n[i].id;
                    e -= n[i].count
                }
                return 12
            }

            function r() {
                return [{
                    id: 1,
                    count: 31
                }, {
                    id: 2,
                    count: 31
                }, {
                    id: 3,
                    count: 31
                }, {
                    id: 4,
                    count: 31
                }, {
                    id: 5,
                    count: 31
                }, {
                    id: 6,
                    count: 31
                }, {
                    id: 7,
                    count: 30
                }, {
                    id: 8,
                    count: 30
                }, {
                    id: 9,
                    count: 30
                }, {
                    id: 10,
                    count: 30
                }, {
                    id: 11,
                    count: 30
                }, {
                    id: 12,
                    count: 29
                }]
            }

            function i(e) {
                var t = Math.floor((e - 1) / 365),
                    a = 0;
                if (t > 22) {
                    var n = t - 22 - 1,
                        r = t - 22,
                        i = Math.floor(n / 33),
                        l = r - 33 * i;
                    l >= 28 && (l = 28);
                    var s = Math.floor(l / 4),
                        c = s + 8 * i + 6,
                        u = Math.floor((e - c) / 365);
                    return a = o(u), e - 365 * u - a - (D(u) ? 1 : 0) > 0 ? (u++, u) : 0 >= e - 365 * u + a ? u : u
                }
                return a = 1 > t ? 0 : t >= 1 && 4 >= t ? 1 : t >= 5 && 8 >= t ? 2 : t >= 9 && 12 >= t ? 3 : t >= 13 && 16 >= t ? 4 : t >= 17 && 22 > t ? 5 : 6, t = Math.floor((e - a - 1) / 365), t + 1
            }

            function o(e) {
                if (23 > e) switch (e) {
                    case 1:
                        return 0;
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        return 1;
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                        return 2;
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                        return 3;
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                        return 4;
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                        return 5
                }
                var t = e - 22,
                    a = Math.floor((t - 1) / 33),
                    n = t - 33 * a;
                n > 28 && (n = 28);
                var r = Math.floor(n / 4) + 8 * a + 6;
                return D(e) && 28 >= t - 33 * a && r--, r
            }

            function l(e) {
                var t = s(),
                    a = u(e.year),
                    n = a,
                    r = c(e.year);
                n += 365 * (e.year - 1);
                for (var i = 0; i < e.month - 1; i++) r && i + 1 == 2 && (t[i].count = 29), n += t[i].count;
                return n += e.day
            }

            function s() {
                return [{
                    id: 1,
                    count: 31
                }, {
                    id: 2,
                    count: 28
                }, {
                    id: 3,
                    count: 31
                }, {
                    id: 4,
                    count: 30
                }, {
                    id: 5,
                    count: 31
                }, {
                    id: 6,
                    count: 30
                }, {
                    id: 7,
                    count: 31
                }, {
                    id: 8,
                    count: 31
                }, {
                    id: 9,
                    count: 30
                }, {
                    id: 10,
                    count: 31
                }, {
                    id: 11,
                    count: 30
                }, {
                    id: 12,
                    count: 31
                }]
            }

            function c(e) {
                return e % 4 != 0 ? !1 : e % 100 != 0 ? !0 : e % 400 != 0 ? !1 : !0
            }

            function u(e) {
                var t = e - 1,
                    a = Math.floor(t / 4),
                    n = Math.floor(t / 100),
                    r = Math.floor(t / 400);
                return a - n + r
            }

            function d(e) {
                var t = Math.floor(e / 365),
                    a = u(t),
                    n = Math.floor((e - a) / 365),
                    r = e - 365 * n - a;
                return 0 != r ? n++ : c(n + 1) && (n += a / 365), Math.floor(n)
            }

            function p(e) {
                var t = d(e),
                    a = u(t - 1);
                e -= 365 * (t - 1) + a;
                for (var n = s(), r = 0, i = c(t), o = 0; o < n.length; o++) {
                    if (i && 2 == n[o].id && (n[o].count = 29), e < n[o].count) return (0 != e || 0 == r) && r++, r;
                    e -= n[o].count, r = n[o].id
                }
                return r
            }

            function h(e) {
                var t = d(e),
                    a = p(e);
                return m(t, a, e)
            }

            function m(e, t, a) {
                for (var n = u(e - 1), r = s(), i = 0, o = 0; o < r.length; o++) r[o].id < t && (i += r[o].count);
                return c(e) && t > 2 && i++, a - 365 * (e - 1) - n - i
            }

            function v(e) {
                var t = e.day;
                return t += f(e.month), t += g(e.year)
            }

            function f(e) {
                for (var t = 0, a = r(), n = 0; e - 1 > n; n++) t += a[n].count;
                return t
            }

            function g(e) {
                var t = o(e);
                return t += 365 * (e - 1)
            }

            function y(e) {
                var t = v(e) + 226894,
                    a = h(t),
                    n = p(t),
                    r = d(t);
                return {
                    day: a,
                    month: n,
                    year: r
                }
            }
            var D = function(e) {
                    if (1 == e || 5 == e || 9 == e || 13 == e || 17 == e || 22 == e) return !0;
                    if (22 > e) return !1;
                    var t = e - 22,
                        a = Math.floor(t / 33);
                    return (t - 33 * a) % 4 == 0 && (t - 33 * a) / 4 != 8
                },
                M = function(t, a, n) {
                    t = 99 >= t ? 2e3 + t : t;
                    var r = {
                        year: t,
                        month: a,
                        day: n
                    };
                    return r = e(r)
                },
                T = function(e, t, a) {
                    e = 99 >= e ? 1300 + e : e;
                    var n = y({
                        day: a,
                        month: t,
                        year: e
                    });
                    return n
                };
            return {
                toJalali: M,
                toGregorian: T,
                isLeapJalali: D
            }
        },
        r = function(t) {
            return this.dateFormat = function(e, t, a, n) {
                for (var r = e.year, i = n ? e.year : e.year % 100, o = e.month.lZero(), l = e.day.lZero(), s = t.hour.lZero(), c = t.minute.lZero(), u = [{
                        key: "YYYY",
                        value: r
                    }, {
                        key: "YY",
                        value: i
                    }, {
                        key: "MM",
                        value: o
                    }, {
                        key: "DD",
                        value: l
                    }, {
                        key: "hh",
                        value: s
                    }, {
                        key: "mm",
                        value: c
                    }], d = 0, p = u.length; p > d; d++) a = a.replace(u[d].key, u[d].value);
                return a
            }, this.parseString = function(e, t) {
                var a = [],
                    n = {},
                    r = ["YY/MM/DD", "YY/MM/DD hh:mm", "YY-MM-DD", "YY-MM-DD hh:mm", "MM/DD/YY", "MM-DD-YY", "MM/DD/YY hh:mm", "MM-DD-YY hh:mm"];
                r.unshift(t);
                for (var i = 0, o = t.length; o > i; i++) {
                    var l = new RegExp(r[i].replace(/[a-z]+/gi, function(e) {
                        var t = !1;
                        return -1 != e.indexOf("YY") ? (a.push("year"), t = !0) : -1 != e.indexOf("MM") ? (a.push("month"), t = !0) : -1 != e.indexOf("DD") ? (a.push("day"), t = !0) : -1 != e.indexOf("hh") ? (a.push("hour"), t = !0) : -1 != e.indexOf("mm") && (a.push("minute"), t = !0), t ? "[0-9]+" : e
                    }).replace(/[(]/g, "[(]").replace(/[)]/g, "[)]")).test(e);
                    if (l) return a.reverse(), e.replace(/[0-9]+/g, function(e) {
                        return n[a.pop()] = Number(e), e
                    }), n.hour = n.hour || 0, n.minute = n.minute || 0, n
                }
                return !1
            }, this.toRegularFormat = function(e, t, a) {
                return "string" == typeof e ? e = this.parseString(e, a) : "number" == typeof e && (e = this.convertFromUnix(e, t)), e.year <= 99 && (e.year = "jalali" == t ? 1300 + e.year : 2e3 + e.year), e.year + "/" + e.month.lZero() + "/" + e.day.lZero() + " " + e.hour.lZero() + ":" + e.minute.lZero()
            }, this.isDateEqual = function(e, t) {
                var a = new Date(e) - new Date(t);
                return 0 == a
            }, this.isDateBigger = function(e, t) {
                var a = new Date(e) - new Date(t);
                return a >= 0
            }, this.isMonthBigger = function(e, t) {
                var a = new Date(e.year, e.month) - new Date(t.year, t.month);
                return a >= 0
            }, this.joinTime = function(e, t) {
                return new Date(new Date(new Date(e).setHours(t.hour)).setMinutes(t.minute))
            }, this.removeTime = function(e) {
                return new Date(e.getFullYear(), e.getMonth(), e.getDate())
            }, this.validateJalaliDateSeparate = function(e, a) {
                if (3 != e.length || 2 != a.length) return !1;
                if (a[0] > 23 || a[0] < 0 || a[1] > 59 || a[1] < 0 || e[0] < 0 || e[1] < 1 || e[1] > 12) return !1;
                if (e[1] > 0 && e[1] < 7) {
                    if (e[2] < 1 || e[2] > 31) return !1
                } else if (e[1] > 6 && e[1] < 12) {
                    if (e[2] < 1 || e[2] > 30) return !1
                } else if (12 == e[1]) {
                    var n = t.isLeapJalali(e[0]);
                    if (n && (e[2] < 1 || e[2] > 30) || !n && (e[2] < 1 || e[2] > 29)) return !1
                }
                return !0
            }, this.validateJalaliDate = function(a, n) {
                var r;
                if ("number" == typeof a) {
                    var i = new Date(a);
                    if ("Invalid Date" == i) return !1;
                    var o = this.convertToJalali(i);
                    r = e.extend(o, {
                        hour: i.getHours(),
                        minute: i.getMinutes()
                    })
                } else "string" == typeof a ? r = this.parseString(a, n) : a instanceof Object && (r = a);
                var l = [r.year, r.month, r.day],
                    s = [r.hour, r.minute];
                if (this.validateJalaliDateSeparate(l, s)) {
                    var c = t.toGregorian(l[0], l[1], l[2]),
                        i = new Date(c.year, c.month - 1, c.day, s[0], s[1]);
                    return {
                        year: l[0],
                        month: l[1],
                        day: l[2],
                        hour: s[0],
                        minute: s[1],
                        unix: i.getTime(),
                        gDate: i
                    }
                }
                return !1
            }, this.convertToUnix = function(e, t, a) {
                if (!e) return null;
                if ("number" == typeof e) return e;
                if ("string" == typeof e) e = this.parseString(e, a);
                else {
                    if (!(e instanceof Date)) return null;
                    e = {
                        year: e.getFullYear(),
                        month: e.getMonth() + 1,
                        day: e.getDate(),
                        hour: e.getHours(),
                        minute: e.getMinutes()
                    }
                }
                if (e.year <= 99 && (e.year = "jalali" == t ? 1300 + e.year : 2e3 + e.year), "jalali" == t) {
                    var n = this.validateJalaliDate(e, a);
                    return n.unix || null
                }
                if ("gregorian" == t) {
                    var n = new Date(this.toRegularFormat(e, t));
                    return "Invalid Date" == n ? null : n.getTime()
                }
                return null
            }, this.convertFromUnix = function(e, t) {
                var a = new Date(e);
                return "jalali" == t ? this.convertToJalali(a) : "gregorian" == t ? {
                    year: a.getFullYear(),
                    month: a.getMonth() + 1,
                    day: a.getDate(),
                    unix: e
                } : void 0
            }, this.convertToJalali = function(a) {
                if (a instanceof Date) {
                    var n = {
                        year: a.getFullYear(),
                        month: a.getMonth() + 1,
                        day: a.getDate(),
                        unix: a.getTime()
                    };
                    a = n
                }
                return a instanceof Object ? e.extend(t.toJalali(a.year, a.month, a.day), {
                    unix: a.unix
                }) : void 0
            }, this.parseDisablePattern = function(e) {
                var t = e.disabled,
                    a = e.smartDisabling,
                    n = e.calType,
                    r = e.format,
                    i = Array.apply(null, Array(7)).map(Number.prototype.valueOf, 0),
                    o = Array.apply(null, Array(31)).map(Number.prototype.valueOf, 0),
                    l = {};
                if (t instanceof Array)
                    for (var s = 0, c = t.length; c > s; s++)
                        if ("number" == typeof t[s]) {
                            var u = new Date(t[s]);
                            "Invalid Date" != u && (l[this.removeTime(u).getTime()] = !0)
                        } else if ("string" == typeof t[s])
                    if (t[s] = t[s].toLowerCase(), -1 == t[s].indexOf("d") && -1 == t[s].indexOf("i")) {
                        var d = this.convertToUnix(t[s], n, r);
                        d && (l[d] = !0)
                    } else {
                        var p = new RegExp("^[!]?(([0-9]?[0-9])?[d]([+][0-9][0-9]?)?)([&]([0-9]?[0-9])?[d]([+][0-9][0-9]?)?)*?$").test(t[s]),
                            h = new RegExp("^[!]?([i]([+][0-9][0-9]?)?)([&][i]([+][0-9][0-9]?)?)*?$").test(t[s]);
                        if (p || h) {
                            var m = "!" == t[s][0];
                            t[s] = m ? t[s].split("!")[1] : t[s];
                            var v = t[s].split("&");
                            if (p) {
                                var f = {};
                                v.forEach(function(e) {
                                    var t = e.split(/d[+]?/).map(function(e) {
                                        return Number(e)
                                    });
                                    t[0] = t[0] ? t[0] : 1, t[1] %= 31;
                                    for (var a = 0; 31 > a; a++)(1 != t[0] && a % t[0] == t[1] || 1 == t[0] && a == t[1]) && (f[a] = 1)
                                });
                                for (var g = 0; 31 > g; g++) m ? f[g] || (o[g] = 1) : f[g] && (o[g] = 1)
                            } else if (h) {
                                var f = {};
                                v.forEach(function(e) {
                                    var t = e.split(/i[+]?/).map(function(e) {
                                        return Number(e)
                                    });
                                    t[1] %= 7, f[t[1]] = 1
                                });
                                for (var g = 0; 7 > g; g++) m ? f[g] || (i[g] = 1) : f[g] && (i[g] = 1)
                            }
                        } else console.warn(t[s] + " is not valid!")
                    }
                return {
                    smart: a,
                    calType: n,
                    "static": l,
                    inWeek: i,
                    inMonth: o
                }
            }, this.isDayDisable = function(e, t, a) {
                if (t["static"][a.unix]) return !0;
                var n = 0;
                t.smart ? "gregorian" == t.calType && "jalali" == e ? n = 1 : "jalali" == t.calType && "gregorian" == e && (n = -1) : "gregorian" == t.calType && "jalali" == e ? n = -1 : "jalali" == t.calType && "gregorian" == e && (n = 1);
                var r = (a.dayName + 7 + n) % 7;
                return t.inMonth[a.day - 1] ? !0 : !!+t.inWeek[r]
            }, {
                dateFormat: this.dateFormat,
                parseString: this.parseString,
                toRegularFormat: this.toRegularFormat,
                isDateEqual: this.isDateEqual,
                isDateBigger: this.isDateBigger,
                isMonthBigger: this.isMonthBigger,
                joinTime: this.joinTime,
                removeTime: this.removeTime,
                validateJalaliDateSeparate: this.validateJalaliDateSeparate,
                validateJalaliDate: this.validateJalaliDate,
                convertToUnix: this.convertToUnix,
                convertFromUnix: this.convertFromUnix,
                convertToJalali: this.convertToJalali,
                parseDisablePattern: this.parseDisablePattern,
                isDayDisable: this.isDayDisable
            }
        },
        i = function(t, a, n, r, i) {
            return {
                restrict: "E",
                replace: !0,
                require: "^^admDtp",
                link: function(t, o, l, s) {
                    var c;
                    c = t.dtpValue ? new Date(t.dtpValue.fullDate) : new Date, "jalali" == t.calType && (c = n.convertToJalali(c)), s.fillDays(c, !t.option.transition), t.previousMonth = function(e) {
                        return "jalali" != t.calType || e ? (1 == t.current.month ? (t.current.month = 12, t.current.year--) : t.current.month--, void s.reload()) : void t.nextMonth(!0)
                    }, t.nextMonth = function(e) {
                        return "jalali" != t.calType || e ? (12 == t.current.month ? (t.current.month = 1, t.current.year++) : t.current.month++, void s.reload()) : void t.previousMonth(!0)
                    }, t.previousYear = function(e) {
                        if ("jalali" == t.calType && !e) return void t.nextYear(!0);
                        var a = t.generatedYears.shift();
                        t.generatedYears = [];
                        for (var n = 1; 17 > n; n++) t.generatedYears.push(a - 17 + n)
                    }, t.nextYear = function(e) {
                        if ("jalali" == t.calType && !e) return void t.previousYear(!0);
                        var a = t.generatedYears.pop();
                        t.generatedYears = [];
                        for (var n = 1; 17 > n; n++) t.generatedYears.push(a + n)
                    }, t.selectMonthInit = function() {
                        t.yearSelectStat = !1, t.monthPickerStat = !0
                    }, t.selectYearInit = function() {
                        t.yearSelectStat = !0, t.generatedYears = [];
                        for (var e = 0; 16 > e; e++) t.generatedYears.push(t.current.year + e - 7)
                    }, t.selectMonth = function(e) {
                        e + 1 != t.current.month && (t.current.month = e + 1, s.reload()), t.monthPickerStat = !1
                    }, t.selectYear = function(e) {
                        e != t.current.year && (t.current.year = e, s.reload()), t.monthPickerStat = !1
                    }, t.selectThisDay = function(e) {
                        return 0 != e.valid ? (t.dtpValue && (t.dtpValue.selected = !1), s.updateMasterValue(e, "day"), t.option.autoClose ? void i(function() {
                            t.closeCalendar()
                        }, 100) : void(e.disable ? i(function() {
                            n.isMonthBigger(e, t.current) ? t.nextMonth(!0) : t.previousMonth(!0)
                        }, 0) : e.selected = !0)) : void 0
                    }, t.today = function() {
                        var e = new Date;
                        "jalali" == t.calType && (e = n.convertToJalali(e)), s.fillDays(e, !t.option.transition)
                    }, t.changeTimeValue = function(a, r) {
                        var i = (Number(t.time[a]) + r + ("hour" == a ? 24 : 60)) % ("hour" == a ? 24 : 60),
                            o = e.copy(t.time);
                        if (o[a] = i.lZero(), t.dtpValue && (t.minDate || t.maxDate)) {
                            var l = n.joinTime(t.dtpValue.unix, o);
                            if (t.minDate && !n.isDateBigger(l, t.minDate) || t.maxDate && !n.isDateBigger(t.maxDate, l)) return
                        }
                        t.time[a] = i.lZero(), t.dtpValue && s.updateMasterValue(!1, "time"), s.reload()
                    }, t.modelChanged = function(e) {
                        if (t.dtpValue) {
                            var a = e || t.dtpValue.formated;
                            if (!a) return void t.destroy();
                            var r = n.convertToUnix(a, t.calType, t.option.format);
                            if (!r || t.minDate && !n.isDateBigger(r, t.minDate) || t.maxDate && !n.isDateBigger(t.maxDate, r)) return void s.updateMasterValue(!1);
                            if (r != t.fullData.unix) {
                                t.parseInputValue(a, !1, !0);
                                var i = new Date(r);
                                "jalali" == t.calType && (i = n.convertToJalali(i)), s.fillDays(i, !0)
                            }
                        }
                    }, t.calTypeChanged = function() {
                        t.calType = "gregorian" == t.calType ? "jalali" : "gregorian", t.monthNames = r.calendars[t.calType].monthsNames, t.daysNames = r.calendars[t.calType].daysNames;
                        var i, o = e.copy(t.current);
                        "jalali" == t.calType ? i = a.toJalali(o.year, o.month, 15) : (i = a.toGregorian(o.year, o.month, 15), i = new Date(i.year, i.month - 1, i.day)), t.dtpValue && s.updateMasterValue(n.convertFromUnix(t.dtpValue.unix, t.calType)), s.fillDays(i, !0)
                    }
                },
                template: '<div class="ADMdtp-calendar-container" ng-class="{square: monthPickerStat||timePickerStat}"><div class="monthPickerContainer" ng-class="{active: monthPickerStat}"><i class="calendarIcon" ng-class="{show: monthPickerStat}" ng-click="monthPickerStat = false"><svg viewBox="0 0 1664 1664"><use xlink:href="#dtpCalendar" /></svg></i><div class="content">            <div class="monthContainer" ng-class="{onYear: yearSelectStat, rtl: (calType==\'jalali\')}"><div class="yearContainer"><span ng-if="yearSelectStat" class="dtpIcon arrow left" ng-click="previousYear()"></span><p ng-click="selectYearInit()">{{current.year | digitType:calType}}</p><span ng-if="yearSelectStat" class="dtpIcon arrow right" ng-click="nextYear()"></span></div><span ng-repeat="yearName in generatedYears" ng-if="yearSelectStat"><span ng-class="{selected: yearName==current.year}" ng-click="selectYear(yearName)">{{yearName | digitType:calType}}</span></span><span ng-repeat="monthName in monthNames" ng-if="!yearSelectStat"><span ng-class="{selected: monthName==current.monthDscr}" ng-click="selectMonth($index)">{{monthName}}</span></span></div></div></div><div class="timePickerContainer" ng-class="{active: timePickerStat}"><i class="calendarIcon" ng-class="{show: timePickerStat}" ng-click="timePickerStat = false"><svg viewBox="0 0 1664 1664"><use xlink:href="#dtpCalendar" /></svg></i><div class="content"><div class="timePicker"><span class="dtpIcon null up" ng-click="changeTimeValue(\'hour\', 1)"><svg viewBox="0 0 1792 1792"><use xlink:href="#dtpDown" /></svg></span><!----><span></span><!----><span class="dtpIcon null up" ng-click="changeTimeValue(\'minute\', 1)"><svg viewBox="0 0 1792 1792"><use xlink:href="#dtpDown" /></svg></span><!----><span>{{time.hour}}</span><!----><span class="period">:</span><!----><span>{{time.minute}}</span><!----><span class="dtpIcon null down" ng-click="changeTimeValue(\'hour\', -1)"><svg viewBox="0 0 1792 1792"><use xlink:href="#dtpUp" /></svg></span><!----><span></span><!----><span class="dtpIcon null down" ng-click="changeTimeValue(\'minute\', -1)"><svg viewBox="0 0 1792 1792"><use xlink:href="#dtpUp" /></svg></span></div></div></div><header><span class="dtpIcon arrow left" ng-click="previousMonth()"></span><span class="yearMonth" ng-click="selectMonthInit()">{{current.monthDscr}} {{current.year | digitType:calType}}</span><span class="dtpIcon arrow right" ng-click="nextMonth()"></span></header><div class="daysNames"><span ng-repeat="dayName in daysNames">{{dayName}}</span></div><hr><div class="days" ng-class="{loading:loadingDays}"><span ng-repeat="day in current.days" ng-click="selectThisDay(day)"><span ng-class="[{disable: day.disable||!day.valid, today: day.today, selected: day.selected, valid:(day.valid==2)}, (day.isMin)?((calType==\'jalali\')?\'max\':\'min\'):\'\', (day.isMax)?((calType==\'jalali\')?\'min\':\'max\'):\'\']">{{day.day | digitType:calType}}</span></span></div><hr><footer><div class="calTypeContainer" ng-class="$parent.calType" ng-click="calTypeChanged()"  ng-if="option.multiple"><p class="gregorian">Gregorian</p><p class="jalali">جلالی</p></div><div class="today adm-button" ng-click="today()">{{(calType=="jalali")?"امروز":"Today"}}</div><svg class="timeSelectIcon" viewBox="0 0 1492 1592" ng-click="timePickerStat = !timePickerStat"><use xlink:href="#dtpClock" /></svg></footer></div>'
            }
        },
        o = function(t, a, n, r, i, o) {
            return {
                restrict: "E",
                replace: !0,
                transclude: !0,
                require: "ngModel",
                scope: {
                    options: "=?",
                    fullData: "=?",
                    onChange: "&",
                    onDatechange: "&",
                    onTimechange: "&",
                    onOpen: "&",
                    onClose: "&"
                },
                link: function(a, l, s, c) {
                    l.find("ng-transclude").children().length || (a.defaultTemplate = !0, l.find("ng-transclude").remove());
                    var u = a.options;
                    u instanceof Object || (u = {}), a.option = e.extend(e.copy(t.getOptions()), u), a.disableDays = n.parseDisablePattern(a.option), a.calType = a.option.calType, a.monthNames = r.calendars[a.calType].monthsNames, a.daysNames = r.calendars[a.calType].daysNames, a.timeoutValue = [0, 0], a.minDate = a.mindate ? new Date(a.mindate) : null, a.maxDate = a.maxdate ? new Date(a.maxdate) : null, a.current = {
                        year: "",
                        month: "",
                        monthDscr: "",
                        days: []
                    }, a.updateMasterValue = function(e, t) {
                        e || (e = a.dtpValue), a.$applyAsync(function() {
                            a.dtpValue = e, a.dtpValue.formated = n.dateFormat(e, a.time, a.option.format), a.dtpValue.fullDate = n.joinTime(e.unix, a.time), a.fullData = {
                                formated: a.dtpValue.formated,
                                gDate: a.dtpValue.fullDate,
                                unix: a.dtpValue.fullDate.getTime(),
                                year: e.year,
                                month: e.month,
                                day: e.day,
                                hour: Number(a.time.hour),
                                minute: Number(a.time.minute),
                                minDate: a.minDate,
                                maxDate: a.maxDate,
                                calType: a.calType,
                                format: a.option.format
                            }, c.$setViewValue(a.dtpValue.formated), c.$render(), d.value && (d.value = a.dtpValue.formated), t && (a.onChange && a.onChange({
                                date: a.fullData
                            }), "time" == t && a.onTimechange ? a.onTimechange({
                                date: a.fullData
                            }) : "day" == t && a.onDatechange && a.onDatechange({
                                date: a.fullData
                            }))
                        })
                    }, a.parseInputValue = function(e, t, r) {
                        "today" == e && (e = n.removeTime(new Date).getTime());
                        var i = !1;
                        e && ("jalali" == a.calType ? i = n.validateJalaliDate(e, a.option.format) : ("string" == typeof e && (e = n.toRegularFormat(e, a.calType, a.option.format)), i = new Date(e), i = "Invalid Date" == i ? !1 : i)), i ? (a.dtpValue = {
                            year: i.year || i.getFullYear(),
                            month: i.month || i.getMonth() + 1,
                            day: i.day || i.getDate(),
                            unix: i.unix || i.getTime(),
                            fullDate: i.gDate || i
                        }, a.dtpValue.fullDate = n.removeTime(a.dtpValue.fullDate), a.dtpValue.unix = a.dtpValue.fullDate.getTime(), a.time = {
                            hour: (i.getHours ? i.getHours() : i.hour).lZero(),
                            minute: (i.getMinutes ? i.getMinutes() : i.minute).lZero()
                        }, a.updateMasterValue(!1, r)) : t && (a.time = {
                            hour: "00",
                            minute: "00"
                        })
                    }, a.parseInputValue(c.$viewValue || a.option["default"], !0, !1), c.$formatters.push(function(e) {
                        if (e) {
                            if (a.dtpValue && e == a.dtpValue.formated) return;
                            a.parseInputValue(e, !1, !0)
                        } else a.destroy();
                        return e
                    }), s.$observe("disable", function(e) {
                        a.$applyAsync(function() {
                            e = a.$eval(e), a.disable = e
                        })
                    }), s.$observe("mindate", function(e) {
                        a.$applyAsync(function() {
                            e = a.$eval(e), a.minDate = n.convertToUnix(e, a.calType, a.option.format)
                        })
                    }), s.$observe("maxdate", function(e) {
                        a.$applyAsync(function() {
                            e = a.$eval(e), a.maxDate = n.convertToUnix(e, a.calType, a.option.format)
                        })
                    }), a.openCalendar = function() {
                        if (!a.showCalendarStat && !a.disable) {
                            a.timeoutValue[0] = 0, a.showCalendarStat = !0;
                            var t = e.element('<adm-dtp-calendar style="opacity:0;"></adm-dtp-calendar>');
                            e.element(l.children()[0]).append(t), a.$applyAsync(function() {
                                i(t)(a)
                            }), o(function() {
                                var t = e.element(l.children()[0]).children()[1],
                                    a = t.getBoundingClientRect(),
                                    n = l.children().children()[0],
                                    r = n.getBoundingClientRect(),
                                    i = {
                                        x: r.left,
                                        y: r.top + r.height
                                    },
                                    o = {
                                        width: a.width + i.x,
                                        height: a.height + i.y
                                    },
                                    s = {
                                        top: "",
                                        bottom: "",
                                        left: "",
                                        right: ""
                                    };
                                o.height > window.innerHeight ? s.bottom = r.height + "px" : s.top = r.height + "px", s.left = o.width > window.innerWidth ? window.innerWidth - o.width - 20 + "px" : 0, e.element(t).css({
                                    top: s.top,
                                    bottom: s.bottom,
                                    left: s.left,
                                    opacity: 1
                                })
                            }, 70), a.onOpen && a.onOpen()
                        }
                    }, a.closeCalendar = function() {
                        a.showCalendarStat && (a.$applyAsync(function() {
                            a.monthPickerStat = !1, a.timePickerStat = !1, a.showCalendarStat = !1
                        }), e.element(l.children()[0]).children()[1] && (e.element(e.element(l.children()[0]).children()[1]).remove(), a.onClose && a.onClose()))
                    }, a.toggleCalendar = function() {
                        a.showCalendarStat ? a.closeCalendar() : a.openCalendar()
                    }, a.destroy = function() {
                        if (!a.disable) {
                            a.monthPickerStat = !1, a.timePickerStat = !1, a.current = {
                                year: "",
                                month: "",
                                monthDscr: "",
                                days: []
                            }, a.dtpValue = !1, a.fullData = {
                                minDate: a.minDate,
                                maxDate: a.maxDate
                            }, a.time = {
                                hour: "00",
                                minute: "00"
                            };
                            var e = new Date;
                            "jalali" == a.calType && (e = n.convertToJalali(e)), c.$setViewValue(""), c.$render(), a.fillDays(e, !a.option.transition), a.onChange && a.onChange({
                                date: a.fullData
                            })
                        }
                    };
                    var d = l[0].querySelector("[dtp-input]") || {};
                    d.onblur = function() {
                        a.modelChanged(this.value)
                    }, d.onfocus = a.openCalendar;
                    var p = l[0].querySelector("[dtp-open]") || {};
                    p.onclick = a.openCalendar;
                    var h = l[0].querySelector("[dtp-close]") || {};
                    h.onclick = a.closeCalendar;
                    var m = l[0].querySelector("[dtp-toggle]") || {};
                    m.onclick = a.toggleCalendar;
                    var v = l[0].querySelector("[dtp-destroy]") || {};
                    v.onclick = a.destroy
                },
                controller: ["$scope", function(t) {
                    this.updateMasterValue = function(e, a) {
                        t.updateMasterValue(e, a)
                    }, this.fillDays = function(r, i) {
                        i ? t.timeoutValue[0] = 0 : t.loadingDays = !0;
                        var l = e.copy(r);
                        if ("jalali" == t.calType) {
                            var s = a.toGregorian(r.year, r.month, 29);
                            r = new Date(s.year, s.month - 1, s.day)
                        }
                        var c = {
                            year: r.getFullYear(),
                            month: r.getMonth() + 1,
                            day: r.getDate()
                        };
                        t.$applyAsync(function() {
                            var a = l.month || l.getMonth() + 1;
                            e.extend(t.current, {
                                year: l.year || l.getFullYear(),
                                month: a,
                                monthDscr: t.monthNames[a - 1]
                            })
                        });
                        var u = new Date;
                        u = new Date(u.getFullYear(), u.getMonth(), u.getDate()).getTime();
                        var d, p = -1;
                        t.dtpValue && (p = t.dtpValue.unix);
                        var h, m = new Date(c.year, c.month - 1, c.day),
                            v = new Date(e.copy(m).setDate(1)).getDay(),
                            f = [],
                            g = -1 * v,
                            y = !0,
                            D = -1;
                        if ("jalali" == t.calType) {
                            var h = new Date(e.copy(m).setDate(g)),
                                M = a.toJalali(h.getFullYear(), h.getMonth() + 1, h.getDate());
                            g -= 7 * Math.ceil((M.day - 1) / 7) + 1
                        }
                        for (;;) {
                            g++;
                            var h = new Date(e.copy(m).setDate(g)),
                                M = !1;
                            "jalali" == t.calType && (M = a.toJalali(h.getFullYear(), h.getMonth() + 1, h.getDate()));
                            var T = M.day || h.getDate();
                            if (1 == T && (y = !y), y && 8 > T && ("jalali" == t.calType && 6 == h.getDay() || "gregorian" == t.calType && 0 == h.getDay())) break;
                            var x = !1,
                                w = 1;
                            if (t.minDate || t.maxDate) {
                                var k = n.joinTime(h, t.time);
                                t.minDate && !n.isDateBigger(k, t.minDate) || t.maxDate && !n.isDateBigger(t.maxDate, k) ? (w = 0, 2 == D && (f[f.length - 1].isMax = !0)) : (w = 2, 0 == D && (x = !0)), D = w
                            }
                            var q = h.getTime(),
                                b = h.getDay() + ("jalali" == t.calType ? 1 : 0),
                                V = {
                                    day: T,
                                    month: M.month || h.getMonth() + 1,
                                    year: M.year || h.getFullYear(),
                                    dayName: b,
                                    fullDate: h,
                                    disable: y,
                                    today: q == u,
                                    selected: q == p,
                                    unix: q,
                                    valid: w,
                                    isMin: x
                                };
                            n.isDayDisable(t.calType, t.disableDays, V) && (V.valid = 0), V.selected && (d = f.length), f.push(V)
                        }
                        o(function() {
                            t.timeoutValue[0] = 500, t.$applyAsync(function() {
                                t.current.days = f, d && t.updateMasterValue(t.current.days[d]), o(function() {
                                    t.loadingDays = !1
                                }, t.timeoutValue[1])
                            })
                        }, t.timeoutValue[0])
                    }, this.reload = function() {
                        var a = e.copy(t.current);
                        a.day = 29;
                        var n = new Date(a.year, a.month - 1, 8);
                        "jalali" == t.calType && (n = a), this.fillDays(n, !t.option.transition)
                    }, t.fillDays = this.fillDays
                }],
                template: '<div class="ADMdtp-container" ng-class="{rtl: (calType==\'jalali\'), touch: option.isDeviceTouch, disable: disable}"><div class="clickOutContainer" click-out="closeCalendar()"><ng-transclude></ng-transclude> <div ng-if="defaultTemplate" class="masterInput" ng-class="{touch: option.isDeviceTouch, disable: disable, open: showCalendarStat}"><input type="text" ng-model="dtpValue.formated" ng-focus="openCalendar()" ng-disabled="option.freezeInput || option.isDeviceTouch || disable" ng-blur="modelChanged()"><div class="iconContainer" ng-click="toggleCalendar()"><i class="dtpIcon null fakeIcon"></i><svg class="calendarIcon" viewBox="0 0 1664 1664"><use xlink:href="#dtpCalendar" /></svg><svg class="closeIcon" viewBox="0 0 1400 1400"><use xlink:href="#dtpOff" /></svg></div><svg class="removeIcon" viewBox="0 0 1408 1408" ng-if="dtpValue.formated" ng-click="destroy()"><use stroke-width="20" xlink:href="#dtpTimes" /></svg></div></div><svg style="display:none;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><defs><path id="dtpCalendar" d="M128 -128h288v288h-288v-288zM480 -128h320v288h-320v-288zM128 224h288v320h-288v-320zM480 224h320v320h-320v-320zM128 608h288v288h-288v-288zM864 -128h320v288h-320v-288zM480 608h320v288h-320v-288zM1248 -128h288v288h-288v-288zM864 224h320v320h-320v-320z M512 1088v288q0 13 -9.5 22.5t-22.5 9.5h-64q-13 0 -22.5 -9.5t-9.5 -22.5v-288q0 -13 9.5 -22.5t22.5 -9.5h64q13 0 22.5 9.5t9.5 22.5zM1248 224h288v320h-288v-320zM864 608h320v288h-320v-288zM1248 608h288v288h-288v-288zM1280 1088v288q0 13 -9.5 22.5t-22.5 9.5h-64 q-13 0 -22.5 -9.5t-9.5 -22.5v-288q0 -13 9.5 -22.5t22.5 -9.5h64q13 0 22.5 9.5t9.5 22.5zM1664 1152v-1280q0 -52 -38 -90t-90 -38h-1408q-52 0 -90 38t-38 90v1280q0 52 38 90t90 38h128v96q0 66 47 113t113 47h64q66 0 113 -47t47 -113v-96h384v96q0 66 47 113t113 47 h64q66 0 113 -47t47 -113v-96h128q52 0 90 -38t38 -90z" /><path id="dtpOff" d="M1536 640q0 -156 -61 -298t-164 -245t-245 -164t-298 -61t-298 61t-245 164t-164 245t-61 298q0 182 80.5 343t226.5 270q43 32 95.5 25t83.5 -50q32 -42 24.5 -94.5t-49.5 -84.5q-98 -74 -151.5 -181t-53.5 -228q0 -104 40.5 -198.5t109.5 -163.5t163.5 -109.5 t198.5 -40.5t198.5 40.5t163.5 109.5t109.5 163.5t40.5 198.5q0 121 -53.5 228t-151.5 181q-42 32 -49.5 84.5t24.5 94.5q31 43 84 50t95 -25q146 -109 226.5 -270t80.5 -343zM896 1408v-640q0 -52 -38 -90t-90 -38t-90 38t-38 90v640q0 52 38 90t90 38t90 -38t38 -90z" /><path id="dtpClock" d="M896 992v-448q0 -14 -9 -23t-23 -9h-320q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h224v352q0 14 9 23t23 9h64q14 0 23 -9t9 -23zM1312 640q0 148 -73 273t-198 198t-273 73t-273 -73t-198 -198t-73 -273t73 -273t198 -198t273 -73t273 73t198 198t73 273zM1536 640 q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z" /><path id="dtpTimes" horiz-adv-x="1408" d="M1298 214q0 -40 -28 -68l-136 -136q-28 -28 -68 -28t-68 28l-294 294l-294 -294q-28 -28 -68 -28t-68 28l-136 136q-28 28 -28 68t28 68l294 294l-294 294q-28 28 -28 68t28 68l136 136q28 28 68 28t68 -28l294 -294l294 294q28 28 68 28t68 -28l136 -136q28 -28 28 -68 t-28 -68l-294 -294l294 -294q28 -28 28 -68z" /><path id="dtpUp" horiz-adv-x="1792" d="M1683 205l-166 -165q-19 -19 -45 -19t-45 19l-531 531l-531 -531q-19 -19 -45 -19t-45 19l-166 165q-19 19 -19 45.5t19 45.5l742 741q19 19 45 19t45 -19l742 -741q19 -19 19 -45.5t-19 -45.5z" /><path id="dtpDown" horiz-adv-x="1792" d="M1683 728l-742 -741q-19 -19 -45 -19t-45 19l-742 741q-19 19 -19 45.5t19 45.5l166 165q19 19 45 19t45 -19l531 -531l531 531q19 19 45 19t45 -19l166 -165q19 -19 19 -45.5t-19 -45.5z" /></defs></svg> </div>'
            }
        },
        l = function(e) {
            return {
                restrict: "A",
                scope: {
                    clickOut: "&"
                },
                link: function(t, a, n) {
                    var r = void 0 !== n.outsideIfNot ? n.outsideIfNot.replace(", ", ",").split(",") : [];
                    void 0 == n.id && n.$set("id", "id_" + Math.random()), void 0 !== n.id && r.push(n.id), e.on("click contextmenu", function(e) {
                        var a, n = 0;
                        if (e.target) {
                            for (a = e.target; a; a = a.parentNode) {
                                var i = a.id,
                                    o = a.className;
                                if (void 0 !== i)
                                    for (n = 0; n < r.length; n++)
                                        if (i.indexOf(r[n]) > -1 || "string" == typeof o && o.indexOf(r[n]) > -1) return
                            }
                            t.$eval(t.clickOut)
                        }
                    })
                }
            }
        },
        s = function(e) {
            try {
                document.createEvent("TouchEvent"), e.setOptions({
                    isDeviceTouch: !0
                })
            } catch (t) {
                e.setOptions({
                    isDeviceTouch: !1
                })
            }
        };
    return e.module("ADM-dateTimePicker", []).constant("constants", {
        calendars: {
            gregorian: {
                monthsNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                daysNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            },
            jalali: {
                monthsNames: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
                daysNames: ["ش", "ی", "د", "س", "چ", "پ", "ج"]
            }
        }
    }).provider("ADMdtp", t).filter("digitType", [a]).factory("ADMdtpConvertor", [n]).factory("ADMdtpFactory", ["ADMdtpConvertor", r]).directive("admDtp", ["ADMdtp", "ADMdtpConvertor", "ADMdtpFactory", "constants", "$compile", "$timeout", o]).directive("admDtpCalendar", ["ADMdtp", "ADMdtpConvertor", "ADMdtpFactory", "constants", "$timeout", i]).directive("clickOut", ["$document", l]).config(["ADMdtpProvider", s])
}(window.angular);