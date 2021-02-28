/** VERSION: 1.1.12. Please don't modify or unzip this content. It will be updated regularly **/
var BoostPFS = (function (t) {
    function e(e) {
        for (var i, a, l = e[0], s = e[1], c = e[2], p = 0, f = []; p < l.length; p++) (a = l[p]), Object.prototype.hasOwnProperty.call(r, a) && r[a] && f.push(r[a][0]), (r[a] = 0);
        for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i]);
        for (u && u(e); f.length; ) f.shift()();
        return o.push.apply(o, c || []), n();
    }
    function n() {
        for (var t, e = 0; e < o.length; e++) {
            for (var n = o[e], i = !0, l = 1; l < n.length; l++) {
                var s = n[l];
                0 !== r[s] && (i = !1);
            }
            i && (o.splice(e--, 1), (t = a((a.s = n[0]))));
        }
        return t;
    }
    var i = {},
        r = { 0: 0 },
        o = [];
    function a(e) {
        if (i[e]) return i[e].exports;
        var n = (i[e] = { i: e, l: !1, exports: {} });
        return t[e].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
    }
    (a.m = t),
        (a.c = i),
        (a.d = function (t, e, n) {
            a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
        }),
        (a.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (a.t = function (t, e) {
            if ((1 & e && (t = a(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if ((a.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var i in t)
                    a.d(
                        n,
                        i,
                        function (e) {
                            return t[e];
                        }.bind(null, i)
                    );
            return n;
        }),
        (a.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return a.d(e, "a", e), e;
        }),
        (a.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (a.p = "");
    var l = (window.webpackJsonpBoostPFS = window.webpackJsonpBoostPFS || []),
        s = l.push.bind(l);
    (l.push = e), (l = l.slice());
    for (var c = 0; c < l.length; c++) e(l[c]);
    var u = s;
    return o.push([164, 1]), n();
})({
    0: function (t, e, n) {
        "use strict";
        n(117), n(33);
        var i = n(2),
            r = {
                prefix: "pf",
                queryParams: {},
                instantSearchQueryParams: {},
                internalClick: !1,
                imutableFilterTree: ["page", "sort", "limit", "display", "_", "tab"],
                otherParams: ["page", "sort", "limit", "display", "tab"],
                hasFilterOptionParam: !1,
                scrollData: [],
                shopName: "",
                shopDomain: "",
                fileUrl: "",
                defaultCurrency: "",
                moneyFormat: "",
                collectionId: "",
                collectionTags: "",
                currentTags: "",
                defaultSorting: "",
                swatchExtension: "",
                productAvailable: !0,
                variantAvailable: !0,
                loadProductFirst: !1,
                searchTermKey: "q",
                suggestionCache: {},
                currentTerm: "",
                init: function () {
                    var t = boostPFSConfig.shop,
                        e = boostPFSConfig.general;
                    (r.shopName = t.name),
                        (r.shopDomain = t.domain),
                        (r.defaultCurrency = t.currency),
                        (r.moneyFormat = t.money_format),
                        (r.fileUrl = e.file_url),
                        (r.collectionId = e.collection_id),
                        (r.collectionTags = e.collection_tags),
                        (r.collectionCount = e.collection_count),
                        (r.currentTags = e.current_tags),
                        (r.defaultSorting = e.default_sort_by.trim()),
                        (r.swatchExtension = e.swatch_extension),
                        (r.productAvailable = i.a.getSettingValue("general.productAvailable")),
                        (r.variantAvailable = i.a.getSettingValue("general.variantAvailable")),
                        i.a.getSettingValue("general.productAndVariantAvailable") && ((r.productAvailable = !0), (r.variantAvailable = !0)),
                        (r.loadProductFirst = i.a.getSettingValue("general.loadProductFirst")),
                        (r.searchTermKey = i.a.getSettingValue("search.termKey")),
                        (r.mobileStyle = i.a.getSettingValue("general.filterTreeMobileStyle")),
                        (r.suggestionTypes = i.a.getSettingValue("search.suggestionTypes"));
                },
            };
        e.a = r;
    },
    164: function (t, e, n) {
        var i = n(52).default;
        (window.BoostPFSFilterCallback = n(5).default.BoostPFSFilterCallback), (window.BoostPFSInstantSearchCallback = n(66).default.BoostPFSInstantSearchCallback), window.jQuery || (window.jQuery = i.jQ), (t.exports = i);
    },
    2: function (t, e, n) {
        "use strict";
        n(29), n(41), n(16), n(32);
        var i = n(3),
            r = {
                general: {
                    enableFilter: !0,
                    filterTreeMobileStyle: "style2",
                    filterTreeMobileStyleFullWidth: !1,
                    filterHorizontalColumn: "1",
                    showRefineBy: !0,
                    separateRefineByFromFilter: !1,
                    refineByHorizontalPosition: "bottom",
                    changeMobileButtonLabel: !1,
                    breakpointMobile: "767",
                    showLoading: !1,
                    showMobileLoading: !1,
                    showLoadMoreLoading: !0,
                    positionShowInfiniteLoading: 700,
                    activeScrollToTop: !1,
                    styleScrollToTop: "style1",
                    showSingleOption: !0,
                    showOutOfStockOption: !1,
                    showFilterOptionCount: !0,
                    requestInstantly: !1,
                    capitalizeFilterOptionValues: !0,
                    forceCapitalizeFilterOptionValues: !1,
                    capitalizeFirstLetterFilterOptionValues: !1,
                    collapseOnPCByDefault: !1,
                    collapseOnMobileByDefault: !1,
                    keepScrollState: !0,
                    keepToggleState: !0,
                    keepTabOpenState: !1,
                    activeFilterScrollbarPC: !0,
                    activeFilterScrollbarMobile: !0,
                    scrollFirstLoadLength: 24,
                    startViewMore: { list: 5, box: 3, swatch: 10 },
                    startViewMoreH: { list: 10, box: 20, swatch: 10 },
                    removePriceDecimal: !0,
                    rangeSliderMoneyFormat: "",
                    oneValueRangeSlider: !1,
                    rangeSlidersStyle3: [],
                    rangeSlidersSingleHandle: [],
                    advancedRangeSliders: [],
                    shortenPipsRange: !1,
                    formatPipsRange: [
                        { node: 1e3, symbol: "K", fix: 0, suffix: !1 },
                        { node: 1e6, symbol: "M", fix: 2, suffix: !1 },
                    ],
                    enable3rdCurrencySupport: !1,
                    imageExtension: ["jpg", "JPG", "png", "PNG", "jpeg", "JPEG", "gif", "GIF"],
                    swatchStyle: "",
                    swatchImageVersion: "1111111",
                    removePrefixFromSwatchFile: !0,
                    enableFilterOptionBoxStyle: !0,
                    filterOptionBoxCharWidth: 14,
                    openMultiLevelByDefault: [],
                    multiLevelCollectionSelectType: "single",
                    filterPrefixParam: "pf_",
                    limit: 16,
                    vendorParam: "pf_v_vendor",
                    typeParam: "pf_pt_product_type",
                    priceMode: "",
                    tagMode: "",
                    urlScheme: 1,
                    isShortenUrlParam: !1,
                    shortenUrlParamList: [],
                    productAvailable: !1,
                    variantAvailable: !1,
                    availableAfterFiltering: !1,
                    loadProductFirst: !0,
                    enableKeepScrollbackPosition: !0,
                    paginationType: "default",
                    paginationTypeAdvanced: !0,
                    activeLoadPreviousPage: !1,
                    sessionStorageCurrentPreviousPage: "boostPFSCurrentPreviousPage",
                    sessionStorageCurrentPage: "boostPFSCurrentPage",
                    sessionStorageCurrentNextPage: "boostPFSCurrentNextPage",
                    sessionStoragePreviousPageEvent: "boostPFSPreviousPageEvent",
                    sortingList: ["relevance", "best-selling", "manual", "price-ascending", "price-descending", "title-ascending", "title-descending", "created-descending", "created-ascending"],
                    customSortingList: "",
                    extraSortingList: "",
                    sortingAvailableFirst: !1,
                    showLimitList: "4,8,12,16",
                    defaultDisplay: "grid",
                    collageNumber: 3,
                    showPlaceholderProductList: !1,
                    placeholderImageRatio: 1.4,
                    placeholderProductGridItemClass: "",
                    placeholderProductPerRow: 3,
                    loadProductFromLiquid: !1,
                    loadProductFromLiquidType: "ajax",
                    enableAjaxCart: !1,
                    enableTrackingOrderRevenue: !0,
                    enableSeo: !0,
                    boostCollection: "boost-all",
                },
                search: {
                    enableSearch: !0,
                    enableSuggestion: !0,
                    suggestionBlocks: [
                        { type: "suggestions", label: "Suggestions", status: "active", number: 3 },
                        { type: "collections", label: "Collections", status: "active", number: 2 },
                        { type: "pages", label: "Pages", status: "active", number: 2 },
                        { type: "products", label: "Products", status: "active", number: 3 },
                    ],
                    suggesionMaxItems: 10,
                    suggestionDymLimit: 2,
                    suggestionMinLength: 1,
                    suggestionPosition: "",
                    suggestionDelay: 200,
                    suggestionWidth: "auto",
                    suggestionTypes: [],
                    suggestionStyle: "",
                    suggestionStyle2MainContainerSelector: "header:first",
                    suggestionStyle2ReverseProductBlock: !1,
                    suggestionStyle2ProductPerRow: 3,
                    suggestionMobileStyle: "style1",
                    showSuggestionLoading: !0,
                    showSuggestionProductVendor: !0,
                    showSuggestionProductPrice: !0,
                    showSuggestionProductSalePrice: !0,
                    showSuggestionProductImage: !0,
                    showSuggestionProductSku: !1,
                    showSearchBtnMobile: !1,
                    enableDefaultResult: !0,
                    enableFuzzy: !0,
                    productAvailable: !1,
                    removePriceDecimal: !1,
                    highlightSuggestionResult: !0,
                    openProductNewTab: !1,
                    suggestionMode: "prod",
                    termKey: "q",
                    skipFields: [],
                    reduceMinMatch: !1,
                    fullMinMatch: !1,
                    enablePlusCharacterSearch: !1,
                    fontSizeSuggestionHeader: "",
                    bgSuggestionHeader: "",
                    colorSuggestionHeader: "",
                    enableFixHeadTitle: !0,
                    searchPanelList: ["products", "collections", "pages"],
                    searchPanelDefault: "products",
                    searchPanelBlocks: { products: { label: "Products", pageSize: 25, active: !0 }, collections: { label: "Collections", pageSize: 25, active: !1 }, pages: { label: "Pages", pageSize: 25, active: !1 } },
                    suggestionNoResult: { search_terms: { label: '"Popular suggestions', status: !0, data: [] }, products: { label: "Products", status: !0, data: [] } },
                },
                init: function () {
                    var t = r;
                    if (
                        ("undefined" != typeof boostPFSConfig && boostPFSConfig.hasOwnProperty("settings") && null !== boostPFSConfig.settings && (t = i.a.mergeObject(t, boostPFSConfig.settings)),
                        "undefined" != typeof boostPFSAppConfig && Object.keys(boostPFSAppConfig).length > 0 && (t = i.a.mergeObject(t, boostPFSAppConfig)),
                        "undefined" != typeof boostPFSThemeConfig && Object.keys(boostPFSThemeConfig).length > 0 && (t = i.a.mergeObject(t, boostPFSThemeConfig)),
                        "undefined" != typeof boostPFSFilterConfig && Object.keys(boostPFSFilterConfig).length > 0 && (t = i.a.mergeObject(t, boostPFSFilterConfig)),
                        "undefined" != typeof boostPFSInstantSearchConfig && Object.keys(boostPFSInstantSearchConfig).length > 0 && (t = i.a.mergeObject(t, boostPFSInstantSearchConfig)),
                        "undefined" != typeof Shopify &&
                            Shopify.hasOwnProperty("locale") &&
                            t.hasOwnProperty("label") &&
                            t.hasOwnProperty("labelTranslations") &&
                            void 0 !== t.labelTranslations &&
                            t.labelTranslations.hasOwnProperty(Shopify.locale))
                    ) {
                        var e = t.labelTranslations[Shopify.locale];
                        t.label = i.a.mergeObject(t.label || {}, e);
                    }
                    r = t;
                },
                getSettingValue: function (t) {
                    var e = "";
                    if (r.hasOwnProperty(t)) return r[t];
                    if (t.indexOf(".") > -1)
                        for (var n = t.split("."), i = 0; i < n.length; i++)
                            if ("" == e) {
                                if (!r.hasOwnProperty(n[i])) return "";
                                e = r[n[i]];
                            } else {
                                if (!e.hasOwnProperty(n[i])) return "";
                                e = e[n[i]];
                            }
                    return e;
                },
            };
        e.a = r;
    },
    3: function (t, e, n) {
        "use strict";
        n(11), n(12), n(13), n(31), n(39), n(29), n(7), n(59), n(88), n(115), n(90), n(76), n(91), n(138), n(41), n(8), n(77), n(140), n(16), n(35), n(42), n(10), n(144), n(17), n(54), n(32), n(33), n(9);
        var i = n(1),
            r = n.n(i),
            o = n(2),
            a = n(0),
            l = {
                isFullWidthMobile: function () {
                    return I.isMobile() && "style1" == o.a.getSettingValue("search.suggestionMobileStyle");
                },
                isStyle2: function () {
                    return !I.isMobile() && "style2" === o.a.getSettingValue("search.suggestionStyle");
                },
            },
            s = {
                checkExistFilterOptionParam: function () {
                    for (var t in Globals.queryParams) if (t.indexOf("pf_") > -1) return !0;
                    return !1;
                },
                encodeURIParamValue: function (t) {
                    return encodeURIComponent(t).replace(/&/g, "%26").replace(/'/g, "%27").replace(/\*/g, "%2A");
                },
            },
            c = (n(118), n(6));
        function u(t) {
            return (u =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        var p = function () {
                return o.a.getSettingValue("general.paginationTypeAdvanced");
            },
            f = function () {
                return "load_more" == o.a.getSettingValue("general.paginationType");
            },
            h = function () {
                return "infinite" == o.a.getSettingValue("general.paginationType");
            },
            y = {
                getSortingList: function () {
                    var t = o.a.getSettingValue("general.sortingList"),
                        e = o.a.getSettingValue("general.customSortingList");
                    if ("" != e) for (var n = (t = e.trim().split("|")).length - 1; n >= 0; n--) "" == t[n] && t.splice(n, 1);
                    var i = o.a.getSettingValue("general.extraSortingList");
                    if ((i && (t = t.concat(i.split("|"))), I.isSearchPage())) {
                        var r = I.findIndexArray("manual", t);
                        r >= 0 && t.splice(r, 1);
                    } else {
                        var a = I.findIndexArray("relevance", t);
                        a >= 0 && t.splice(a, 1);
                    }
                    for (var l = {}, s = 0; s < t.length; s++) {
                        var u = c.a.sortingList[t[s]];
                        if (i.length > 0 && i.indexOf(t[s]) > -1) {
                            var p = t[s].replace(/-/g, "_");
                            u = c.a[p];
                        }
                        l[t[s]] = u;
                    }
                    return l;
                },
                getProductMetafield: function (t, e, n) {
                    if (t.hasOwnProperty("metafields")) {
                        var i = t.metafields.filter(function (t) {
                            return t.namespace == e && t.key == n;
                        });
                        if (void 0 !== i[0]) return i[0].value;
                    }
                    return null;
                },
                isAdvancedPaginationType: p,
                buildProductItemUrl: function (t, e) {
                    var n = window.location.search.substring(1),
                        i = window.location.pathname,
                        r = i.split("/"),
                        o = "object" === u(t) && t.hasOwnProperty("handle") ? t.handle : t;
                    if ((e = void 0 === e || e)) {
                        if ("/" == i || I.isSearchPage() || I.isVendorPage() || I.isTypePage())
                            return (a = r.indexOf(boostPFSAppConfig.general.current_locale) > -1 ? "/" + boostPFSAppConfig.general.current_locale + "/collections/all/products/" : "/collections/all/products/") + o;
                        if (I.isTagPage()) {
                            var a = r.indexOf(boostPFSAppConfig.general.current_locale) > -1 ? "/" + boostPFSAppConfig.general.current_locale + "/collections/" : "/collections/",
                                l = r.indexOf("collections") + 1;
                            return r.length >= 4 ? a + r[l] + "/products/" + o : "/collections/all/products/" + o;
                        }
                        if (n.indexOf("cache:") > -1) {
                            var s = "all",
                                c = n.split("&")[0].split("?")[0].split("collections/");
                            return c.length > 1 && (s = c[1].indexOf("/") > -1 ? c[1].split("/")[0] : c[1]), "/collections/" + (s = s.replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/g, "")) + "/products/" + o;
                        }
                        (l = r.indexOf("collections") + 1), (a = r.indexOf(boostPFSAppConfig.general.current_locale) > -1 ? "/" + boostPFSAppConfig.general.current_locale + "/collections/" : "/collections/");
                        return void 0 !== r[2] ? a + r[l] + "/products/" + o : window.location.pathname + "/products/" + o;
                    }
                    return r.indexOf(boostPFSAppConfig.general.current_locale) > -1 ? "/" + boostPFSAppConfig.general.current_locale + "/products/" + o : "/products/" + o;
                },
                removePageParamFromUrl: function (t) {
                    return (
                        a.a.queryParams.hasOwnProperty("page") &&
                            (t = t
                                .replace("&page=" + a.a.queryParams.page, "")
                                .replace("?page=" + a.a.queryParams.page + "&", "?")
                                .replace("?page=" + a.a.queryParams.page, "")),
                        t
                    );
                },
                removeCollectionScopeParamFromUrl: function (t) {
                    return a.a.queryParams.hasOwnProperty("collection_scope") && (t = t.replace("&collection_scope=" + a.a.queryParams.collection_scope, "")), t;
                },
                buildToolbarLink: function (t, e, n) {
                    var i = window.location.href,
                        r = t + "=" + e,
                        o = t + "=" + n;
                    i.indexOf("?" + t + "=") > -1
                        ? (i = i.replace("?" + r, "?" + o))
                        : i.indexOf("&" + t + "=") > -1
                        ? (i = i.replace("&" + r, "&" + o))
                        : 0 === window.location.search.length
                        ? (i += "?" + o)
                        : (i = i.replace("?", "?" + o + "&")),
                        "page" == t && 1 == n && (i = i.replace("?page=1&", "?").replace("?page=1", ""));
                    if (a.a.queryParams.hasOwnProperty("page") && -1 == ["display", "sort", "page", "limit"].indexOf(t)) {
                        var l = "&page=" + a.a.queryParams.page;
                        i = i.replace(l, "");
                    }
                    return i;
                },
                isDefaultPaginationType: function () {
                    return "default" == o.a.getSettingValue("general.paginationType");
                },
                isLoadMorePaginationType: f,
                isInfiniteLoadingPaginationType: h,
                isLoadPreviousPagePaginationType: function () {
                    return (f() || h()) && p() && o.a.getSettingValue("general.activeLoadPreviousPage");
                },
                isNoFilterResult: function (t, e) {
                    return t <= 0 && !("init" === e && o.a.getSettingValue("general.productAndVariantAvailable") && o.a.getSettingValue("general.availableAfterFiltering"));
                },
            };
        function d(t) {
            return (d =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        var g = function (t, e) {
                null === t && (t = boostPFSConfig.general.no_image_url);
                e = void 0 !== e ? e : "large";
                for (var n = o.a.getSettingValue("general.imageExtension"), i = 0; i < n.length; i++) t = t.replace("." + n[i] + "?", "_" + e + "." + n[i] + "?");
                return t;
            },
            m = function (t) {
                return '<span class="money">{{money}}</span>'.replace(/{{money}}/g, _(t));
            },
            b = function () {
                return r()("<p>" + boostPFSConfig.shop.money_format + "</p>")
                    .text()
                    .replace(/{{[^}]*}}/g, "");
            },
            v = function (t) {
                void 0 === t && (t = !1);
                var e = boostPFSAppConfig.general.current_currency.toLowerCase().trim(),
                    n = o.a.getSettingValue("currencyRoundingRules"),
                    i = n && e && n.hasOwnProperty(e) ? parseFloat(n[e]) : 0,
                    a = !1;
                if (i > 0 && -1 !== r.a.inArray(i, [0.25, 0.5, 0.75, 0.9, 0.95, 0.99, 1, 25, 50, 75, 90, 95, 99, 100, 250, 500, 750, 900, 950, 999, 1e3])) {
                    a = 0.99;
                    i > 100 ? (a = 999) : i > 10 ? (a = 99) : i > 1 && (a = 9), t && (a = i > 1 ? a + 1 : a + 0.01);
                }
                return a;
            },
            S = function (t) {
                t = parseFloat(t).toFixed(2);
                var e = boostPFSAppConfig.general.current_currency.toLowerCase().trim(),
                    n = o.a.getSettingValue("currencyRoundingRules"),
                    i = n && e && n.hasOwnProperty(e) ? n[e] : 0,
                    r = v(!0);
                if (r) {
                    var a = parseFloat(i);
                    (t /= r), 1 == (a /= r) && (a = 0);
                    var l = Math.floor(t);
                    (t = (t - l).toFixed(2) > a ? l + 1 : l), (t *= r), 0 == a && (i = 0), (t += parseFloat(i));
                }
                return t;
            },
            O = null,
            T = function () {
                var t = window.location.search,
                    e = window.location.pathname;
                return t.indexOf("search?") > -1 || (-1 == e.indexOf("collections") && e.indexOf("/search") > -1 && -1 == t.indexOf("=cache"));
            },
            P = function (t, e) {
                e || (e = window.location.href), (t = t.replace(/[\[\]]/g, "\\$&"));
                var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
                return n ? (n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "") : null;
            },
            w = function (t, e, n, i) {
                if (null != n) {
                    for (var r = 0; r < e.length; r++) if ((void 0 !== i && 0 == i && ((e[r][n] = e[r][n].toLowerCase()), (t = t.toLowerCase())), e[r][n] == t)) return r;
                } else for (r = 0; r < e.length; r++) if ((void 0 !== i && 0 == i && ((e[r] = e[r].toLowerCase()), (t = t.toLowerCase())), e[r] == t)) return r;
                return -1;
            },
            _ = function (t) {
                return r()("<p>" + t + "</p>").text();
            },
            C = function () {
                return "undefined" != typeof Shopify && Shopify.hasOwnProperty("currency") && Shopify.currency.hasOwnProperty("rate") && 1 != Shopify.currency.rate;
            },
            k = function () {
                return o.a.hasOwnProperty("general") && o.a.general.hasOwnProperty("currencies") && o.a.general.currencies.length > 1 && C();
            },
            E = {
                escape: function (t, e) {
                    return (
                        (e = e ? "&#13;" : "\n"),
                        ("" + t)
                            .replace(/&/g, "&amp;")
                            .replace(/'/g, "&apos;")
                            .replace(/"/g, "&quot;")
                            .replace(/</g, "&lt;")
                            .replace(/>/g, "&gt;")
                            .replace(/\r\n/g, e)
                            .replace(/[\r\n]/g, e)
                    );
                },
                findIndexArray: w,
                getParam: P,
                getSearchTerm: function () {
                    return P(a.a.searchTermKey);
                },
                getValueInObjectArray: function (t, e, n, i) {
                    void 0 === n && (n = "key"), void 0 === i && (i = "values");
                    var r = w(t, e, n);
                    return r > -1 && e[r].hasOwnProperty(i) ? e[r][i] : "";
                },
                getFilePath: function (t, e, n) {
                    (e = void 0 !== e ? e : "png"), (n = void 0 !== n ? n : "");
                    var i = a.a.fileUrl.split("?")[0];
                    return (i += t + "." + e + (n ? "?v=" + n : ""));
                },
                getNumberDecimals: function (t) {
                    var e = t.toString().split(".");
                    return e.length > 1 ? e[1].length : 0;
                },
                isMobile: function () {
                    return (
                        O ||
                            ((O = r()(window).width()),
                            r()(window).on("resize", function () {
                                O = r()(window).width();
                            })),
                        O <= o.a.getSettingValue("general.breakpointMobile")
                    );
                },
                isiOS: function () {
                    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                },
                isCartPage: function () {
                    return window.location.pathname.indexOf("/cart") > -1;
                },
                isProductPage: function () {
                    return window.location.pathname.indexOf("/products") > -1;
                },
                isSearchPage: T,
                isVendorPage: function () {
                    return window.location.pathname.indexOf("/collections/vendors") > -1;
                },
                isTagPage: function () {
                    return void 0 !== a.a.currentTags && null !== a.a.currentTags && a.a.currentTags.length > 0;
                },
                isTypePage: function () {
                    return window.location.pathname.indexOf("/collections/types") > -1;
                },
                isGLHMobile: function () {
                    return navigator && navigator.userAgent && navigator.userAgent.includes(atob("TGlnaHRob3VzZQ==")) && E.isMobile() && !E.isSearchPage();
                },
                mergeObject: function t(e, n) {
                    for (var i in n)
                        try {
                            e[i] = n[i].constructor == Object ? t(e[i], n[i]) : n[i];
                        } catch (t) {
                            e[i] = n[i];
                        }
                    return e;
                },
                optimizeImage: g,
                getFeaturedImage: function (t, e) {
                    e = void 0 !== e ? e : "large";
                    var n = g(boostPFSConfig.general.no_image_url, e);
                    return t.length > 0 && (n = "object" === d(t[0]) ? g(t[0].src, e) : g(t[0], e)), n;
                },
                slugify: function (t) {
                    if (null == t || "object" == d(t)) return "";
                    if ("string" != typeof t) {
                        if ("function" != typeof t.toString) return "";
                        t = t.toString();
                    }
                    t = t.toLowerCase();
                    for (var e = "àáäâãèéëêẽìíïîĩòóöôõùúüûũñç·/_,:;", n = 0, i = e.length; n < i; n++) t = t.replace(new RegExp(e.charAt(n), "g"), "aaaaaeeeeeiiiiiooooouuuuunc------".charAt(n));
                    for (var r = "ÁáČčĎďÉéěÍíŇňÓóŘřŠšŤťÚúůÝýŽž".length, o = 0; o < r; o++) t = t.replace(new RegExp("ÁáČčĎďÉéěÍíŇňÓóŘřŠšŤťÚúůÝýŽž".charAt(o), "g"), "AaCcDdEeeIiNnOoRrSsTtUuuYyZz".charAt(o));
                    return (t = t.replace(/'/g, "").replace(/"/g, ""))
                        .replace(/[\s\/]+/g, "-")
                        .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g, "-")
                        .replace(/\-\-+/g, "-")
                        .replace(/^-+/, "")
                        .replace(/-+$/, "");
                },
                capitalize: function (t, e, n) {
                    n = void 0 !== n && n;
                    return (
                        (e = void 0 !== e && e) && (t = t.toLowerCase()),
                        n
                            ? t.charAt(0).toUpperCase() + t.slice(1)
                            : t.replace(/(?:^|\s)\S/g, function (t) {
                                  return t.toUpperCase();
                              })
                    );
                },
                textify: function (t, e) {
                    e = void 0 !== e ? e : "-";
                    for (var n = t.split(e), i = "", r = 0; r < n.length; r++) (i += n[r].charAt(0).toUpperCase() + n[r].slice(1)), r < n.length - 1 && (i += " ");
                    return i;
                },
                stripHtml: _,
                stripScriptTag: function (t) {
                    if (t) return t.replace(/<script[^>]*>.*?<\/script>/gi, "");
                },
                truncateByWord: function (t, e, n) {
                    return void 0 === n && (n = "..."), (t = t.split(" ").length > e ? t.split(" ").splice(0, e).join(" ") + n : t.split(" ").splice(0, e).join(" "));
                },
                formatMoney: function (t, e, n) {
                    if (void 0 === e) e = a.a.moneyFormat;
                    if (void 0 === n) n = !1;
                    "string" == typeof t && (t = t.replace(".", ""));
                    var i = "",
                        r = /\{\{\s*(\w+)\s*\}\}/,
                        o = e || "${{amount}}";
                    function l(t, e) {
                        return void 0 === t ? e : t;
                    }
                    function s(t, e, i, r) {
                        if (((e = l(e, 2)), (i = l(i, ",")), (r = l(r, ".")), isNaN(t) || null == t)) return 0;
                        var o = (t = parseFloat(t).toFixed(e)).split("."),
                            a = o[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i),
                            s = o[1] ? r + o[1] : "";
                        return 1 == n ? (a + s).replace(/((\,00)|(\.00))$/g, "") : a + s;
                    }
                    switch (o.match(r)[1]) {
                        case "amount":
                            i = s(t, 2);
                            break;
                        case "amount_no_decimals":
                            i = s(t, 0);
                            break;
                        case "amount_with_comma_separator":
                            i = s(t, 2, ".", ",");
                            break;
                        case "amount_no_decimals_with_comma_separator":
                            i = s(t, 0, ".", ",");
                            break;
                        case "amount_with_space_separator_no_comma":
                        default:
                            i = s(t, 2);
                    }
                    return (o = o.replace(r, i)), m(o);
                },
                moneyWrapper: m,
                formatNumberWithSeparator: function (t, e, n, i, r) {
                    isNaN(t) && (t = 0), isNaN(e) && (e = 0), i || (i = "." == n ? "," : ".");
                    var o = (t = parseFloat(t).toFixed(e)).toString().split("."),
                        a = o[0],
                        l = o[1] ? o[1] : "";
                    return n && (a = a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + n)), i && l && (l = r && /0+/.test(l) ? "" : i + l), a + l;
                },
                getCurrency: b,
                removeCurrencySymbol: function (t) {
                    t = r()("<p>" + t + "</p>").text();
                    for (var e = b().split(" "), n = 0; n < e.length; n++) t = t.replace(e[n].trim(), "");
                    return t.trim();
                },
                isShopifyActiveCurrency: C,
                isEnableShopifyMultipleCurrencies: k,
                roundedPrice: S,
                convertPriceBasedOnActiveCurrency: function (t, e) {
                    if ((void 0 === e && (e = !0), null === t)) return t;
                    if (!0 === k()) {
                        var n = t * Shopify.currency.rate;
                        t = e ? S(n) : n;
                    }
                    return parseFloat(t);
                },
                revertPriceToDefaultCurrency: function (t, e) {
                    if (!0 === k()) {
                        if (((t = S(t)), e)) {
                            var n = v();
                            n && (t -= n);
                        }
                        return (t /= Shopify.currency.rate).toFixed(8);
                    }
                    return t;
                },
                reBuildUrlBaseOnLocale: function (t) {
                    t = t.replace("https://", "").replace("http://", "");
                    var e = o.a.getSettingValue("general.current_locale"),
                        n = o.a.getSettingValue("general.published_locales"),
                        i = Object.keys(n);
                    if (i.indexOf(e) < 0 || 1 == n[e]) return t;
                    var r = t.split("/");
                    r.length > 1 && i.length && e.length && (i.indexOf(r[1]) > -1 ? (r[1] = e) : r.splice(1, 0, e));
                    return r.join("/");
                },
                InstantSearch: l,
                isFullWidthMobile: l.isFullWidthMobile,
                isStyle2: l.isStyle2,
                FilterTree: s,
                checkExistFilterOptionParam: s.checkExistFilterOptionParam,
                encodeURIParamValue: s.encodeURIParamValue,
                FilterResult: y,
                buildProductItemUrl: y.buildProductItemUrl,
                removePageParamFromUrl: y.removePageParamFromUrl,
                removeCollectionScopeParamFromUrl: y.removeCollectionScopeParamFromUrl,
                buildToolbarLink: y.buildToolbarLink,
                isDefaultPaginationType: y.isDefaultPaginationType,
                isLoadMorePaginationType: y.isLoadMorePaginationType,
                isInfiniteLoadingPaginationType: y.isInfiniteLoadingPaginationType,
                isLoadPreviousPagePaginationType: y.isLoadPreviousPagePaginationType,
                getSortingList: y.getSortingList,
                getProductMetafield: y.getProductMetafield,
                isNoFilterResult: y.isNoFilterResult,
            },
            I = (e.a = E);
    },
    34: function (t, e, n) {
        "use strict";
        n(11), n(12), n(13), n(31), n(19), n(39), n(7), n(49), n(41), n(8), n(16), n(35), n(42), n(10), n(17), n(54), n(32), n(50), n(33), n(20), n(9), n(96);
        var i = n(1),
            r = n.n(i),
            o = n(3),
            a = n(0),
            l = n(2),
            s = n(5),
            c = n(52),
            u = {},
            p = {},
            f = window.location.pathname,
            h = document.title,
            y = window.location.href,
            d = new Map(),
            g = new Map(),
            m = function () {
                var t = a.a.queryParams,
                    e = window.location.protocol + "//" + window.location.hostname + f,
                    n = window.location.search,
                    i = new URLSearchParams(n),
                    r = !1,
                    o = l.a.getSettingValue("general.urlScheme");
                Object.keys(t).forEach(function (e) {
                    var n = t[e];
                    if (e.startsWith(a.a.prefix)) {
                        var l = d.get(e);
                        if ((l || (l = e), i.delete(l), Array.isArray(n))) {
                            switch (o) {
                                case 0:
                                    break;
                                case 2:
                                    i.set(l, n);
                                    break;
                                case 1:
                                default:
                                    n.forEach(function (t) {
                                        i.append(l, t);
                                    });
                            }
                            r = !0;
                        } else null != n && (i.set(l, n), (r = !0));
                    } else e == a.a.searchTermKey && "string" == typeof n ? i.set(e, n) : a.a.otherParams.includes(e) && (n == p[e] ? i.delete(e) : i.set(e, n));
                });
                var s = [],
                    c = !0,
                    u = !1,
                    h = void 0;
                try {
                    for (var y, m = i.keys()[Symbol.iterator](); !(c = (y = m.next()).done); c = !0) {
                        var b = y.value,
                            v = g.get(b);
                        v || (v = b), (v.startsWith(a.a.prefix) || a.a.imutableFilterTree.includes(v) || v == a.a.searchTermKey) && (t.hasOwnProperty(v) || s.push(b));
                    }
                } catch (t) {
                    (u = !0), (h = t);
                } finally {
                    try {
                        c || null == m.return || m.return();
                    } finally {
                        if (u) throw h;
                    }
                }
                s.forEach(function (t) {
                    i.delete(t);
                }),
                    (a.a.hasFilterOptionParam = r);
                var S = e,
                    O = i.toString();
                return O && (2 == o && (O = O.replace(/%2C/g, ",")), (S += "?" + O)), S;
            },
            b = {
                init: function () {
                    (p = {
                        page: 1,
                        limit: l.a.getSettingValue("general.limit"),
                        sort: o.a.isSearchPage() ? "relevance" : a.a.defaultSorting,
                        display: l.a.getSettingValue("general.defaultDisplay"),
                        tab: l.a.getSettingValue("general.searchPanelDefault"),
                    }),
                        r()(window).on("popstate", function (t) {
                            u = t.originalEvent.state;
                            var e = c.default.instance.filter,
                                n = window.location.href.split("#")[0] == y;
                            e && !n && (e.filterLoadingIcon.setShow(!0), s.default.updateParamsFromUrl(), s.default.getFilterData("history", e.setData.bind(e)));
                        });
                    var t = l.a.getSettingValue("general.shortenUrlParamList");
                    l.a.getSettingValue("general.isShortenUrlParam") &&
                        Array.isArray(t) &&
                        t.forEach(function (t) {
                            if ("string" == typeof t) {
                                var e = t.split(":");
                                if (2 == e.length) {
                                    var n = e[0].trim(),
                                        i = e[1].trim();
                                    n && i && (d.set(n, i), g.set(i, n));
                                }
                            }
                        });
                },
                updateAddressBar: function () {
                    if (0 != l.a.getSettingValue("general.urlScheme") && window.history && "function" == typeof window.history.pushState) {
                        var t = m(),
                            e = JSON.parse(JSON.stringify(a.a.queryParams));
                        (a.a.queryParams = e), history.pushState({ param: a.a.queryParams }, h, t), (y = t);
                    }
                },
                buildAddressBarUrl: m,
                setAddressBarPathAfterFilter: function (t) {
                    f = "string" == typeof t && t.startsWith("/") ? t : window.location.pathname;
                },
                setWindowTitleAfterFilter: function (t) {
                    h = "string" != typeof t || "" == t || t.includes("undefined") || t.includes("null") ? document.title : t;
                },
                getHistoryState: function () {
                    return u;
                },
                shortParamsMap: d,
                longParamMap: g,
            };
        e.a = b;
    },
    4: function (t, e, n) {
        "use strict";
        e.a = {
            Status: { ACTIVE: "active", DISABLED: "disabled" },
            FilterType: {
                COLLECTION: "collection",
                VENDOR: "vendor",
                PRODUCT_TYPE: "product_type",
                TITLE: "title",
                PRICE: "price",
                VARIANTS_PRICE: "variants_price",
                PERCENT_SALE: "percent_sale",
                REVIEW_RATINGS: "review_ratings",
                WEIGHT: "weight",
                STOCK: "stock",
                TAG: "tag",
                MULTI_LEVEL_TAG: "multi_level_tag",
            },
            SelectType: { SINGLE: "single", MULTIPLE: "multiple" },
            DisplayType: { LIST: "list", BOX: "box", RANGE: "range", SWATCH: "swatch", RATING: "rating", SUB_CATEGORY: "sub_category", MULTI_LEVEL_COLLECTIONS: "multi_level_collections", MULTI_LEVEL_TAG: "multi_level_tag" },
            ValueType: { ALL: "all", SPECIFIC: "specific" },
            SortType: { KEY_ASCENDING: "key-asc", KEY_DESCENDING: "key-desc", DOC_COUNT_ASCENDING: "doc_count-asc", DOC_COUNT_DESCENDING: "doc_count-desc" },
            ShowMoreType: { NONE: "none", SCROLLBAR: "scrollbar", VIEWMORE: "viewmore", VIEWMORE_SCROLLBAR: "viewmore_scrollbar" },
        };
    },
    45: function (t, e, n) {
        "use strict";
        n(41);
        var i = {
            getApiUrl: function (t) {
                var e = boostPFSConfig.api.filterUrl;
                switch (t) {
                    case "search":
                        e = boostPFSConfig.api.searchUrl;
                        break;
                    case "suggestion":
                        e = boostPFSConfig.api.suggestionUrl;
                        break;
                    case "analytics":
                        e = boostPFSConfig.api.analyticsUrl;
                }
                return e;
            },
            setApiLocaleParams: function (t) {
                return (
                    Settings.general.hasOwnProperty("published_locales") &&
                        Object.keys(Settings.general.published_locales).length > 1 &&
                        void 0 !== Settings.general.current_locale &&
                        (t.locale = Settings.getSettingValue("general.current_locale")),
                    t
                );
            },
        };
        e.a = i;
    },
    5: function (t, e, n) {
        "use strict";
        n.r(e);
        n(11), n(12), n(13), n(31), n(19), n(157), n(39), n(29), n(7), n(59), n(88), n(90), n(119), n(41), n(8), n(51), n(16), n(35), n(185), n(42), n(10), n(17), n(54), n(32), n(50), n(33), n(20), n(9), n(96);
        var i = n(1),
            r = n.n(i),
            o = n(0),
            a = n(2),
            l = n(3),
            s = n(45),
            c = n(34),
            u = n(52),
            p = n(4);
        function f(t) {
            return (
                (function (t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n;
                    }
                })(t) ||
                (function (t) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
                })(t) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                })()
            );
        }
        var h = null,
            y = { eventType: "", eventInfo: {} },
            d = function (t, e, n) {
                if (
                    (v(t),
                    b &&
                        b.forEach(function (e) {
                            "function" == typeof e && e(t);
                        }),
                    "function" == typeof k.beforeCall && k.beforeCall(),
                    "function" != typeof k.beforeCallAsync)
                )
                    g(t, e, n);
                else {
                    k.beforeCallAsync(function () {
                        g(t, e, n);
                    });
                }
            },
            g = function t(e, n, i, a) {
                (a = void 0 !== a ? a : 0), (h = n), (o.a.queryParams.callback = "BoostPFSFilterCallback"), (o.a.queryParams.event_type = e);
                var c = s.a.getApiUrl("filter");
                l.a.isSearchPage() && ((c = s.a.getApiUrl("search")), o.a.hasOwnProperty("searchDisplay") && o.a.searchDisplay && "products" !== o.a.searchDisplay && (c += "/" + o.a.searchDisplay));
                var u = document.createElement("script");
                u.type = "text/javascript";
                var p = new Date().getTime(),
                    f = JSON.parse(JSON.stringify(o.a.queryParams));
                (o.a.queryParams = f), (u.src = c + "?t=" + p + "&" + r.a.param(o.a.queryParams)), (u.id = "boost-pfs-filter-script"), (u.async = !0);
                var y;
                u.addEventListener("error", function (e) {
                    "function" == typeof document.getElementById(u.id).remove ? document.getElementById(u.id).remove() : (document.getElementById(u.id).outerHTML = ""),
                        a < 2 ? (a++, y && clearTimeout(y), (y = setTimeout(t("resend", n, i, a), 2e3))) : "function" == typeof i && i();
                }),
                    document.getElementsByTagName("head")[0].appendChild(u),
                    u.addEventListener("load", function (t) {
                        "function" == typeof document.getElementById(u.id).remove ? document.getElementById(u.id).remove() : (document.getElementById(u.id).outerHTML = "");
                    });
            },
            m = function (t) {
                "function" == typeof h && h(t, y.eventType, y.eventInfo);
            },
            b = [],
            v = function (t) {
                var e = mergeObject({}, o.a.queryParams);
                (e = O(e, t)), (e = T(e, t)), (e = S(e, t)), (e = s.a.setApiLocaleParams(e)).hasOwnProperty("currency") && delete e.currency, e.hasOwnProperty("currency_rate") && delete e.currency_rate, (o.a.queryParams = e);
            },
            S = function (t, e) {
                var n = Object.keys(t);
                return (
                    (n = n.filter(function (t) {
                        return 0 == t.indexOf("pf_p_") || 0 == t.indexOf("pf_vp_");
                    })),
                    (o.a.activeCurrencyPrices = []),
                    n.length &&
                        n.forEach(function (e) {
                            var n = [];
                            Array.isArray(t[e]) &&
                                t[e].forEach(function (t) {
                                    var e = t.split(":");
                                    (e = e.map(function (t, e) {
                                        var n = 0 == e;
                                        return 0 == t.length ? "" : l.a.revertPriceToDefaultCurrency(t, n);
                                    })),
                                        n.push(e.join(":"));
                                }),
                                (o.a.activeCurrencyPrices[e] = t[e]),
                                (t[e] = n);
                        }),
                    t
                );
            },
            O = function (t, e) {
                var n = c.a.getHistoryState(),
                    i = 0;
                "history" == e
                    ? (i = n && n.param && n.param.hasOwnProperty("collection_scope") ? parseInt(n.param.collection_scope) : parseInt(boostPFSConfig.general.collection_id))
                    : null != o.a.collectionId
                    ? (i = parseInt(o.a.collectionId))
                    : boostPFSConfig.general.collection_id && (i = parseInt(boostPFSConfig.general.collection_id)),
                    (o.a.collectionId = i),
                    (t.collection_scope = i);
                var r = null;
                ("history" == e
                    ? (r = n && n.param && n.param.hasOwnProperty("tag") ? n.param.tag : boostPFSConfig.general.collectionTags)
                    : o.a.collectionTags
                    ? (r = o.a.collectionTags)
                    : boostPFSConfig.general.collectionTags && (r = boostPFSConfig.general.collectionTags),
                (o.a.collectionTags = r),
                (t.tag = r),
                1 == a.a.getSettingValue("general.availableAfterFiltering")
                    ? ((t.product_available = !0 === l.a.checkExistFilterOptionParam() || o.a.productAvailable), (t.variant_available = !0 === l.a.checkExistFilterOptionParam() || o.a.variantAvailable))
                    : ((t.product_available = o.a.productAvailable), (t.variant_available = o.a.variantAvailable)),
                a.a.getSettingValue("general.showOutOfStockOption") && (t.zero_options = !0),
                (t.build_filter_tree = !(void 0 !== e && o.a.imutableFilterTree.indexOf(e) > -1)),
                (t.check_cache = !(!1 !== l.a.checkExistFilterOptionParam() || 1 != t.page || t.sort != o.a.defaultSorting || t.limit != a.a.getSettingValue("general.limit") || l.a.isSearchPage() || l.a.isVendorPage() || l.a.isTypePage())),
                "" != a.a.getSettingValue("general.priceMode") && (t.price_mode = a.a.getSettingValue("general.priceMode")),
                "" != a.a.getSettingValue("general.tagMode") && (t.tag_mode = a.a.getSettingValue("general.tagMode")),
                a.a.getSettingValue("general.sortingAvailableFirst") && (t.sort_first = "available"),
                l.a.isVendorPage() && t.hasOwnProperty("q")) && ((t[a.a.getSettingValue("general.vendorParam")] = [t.q]), delete t.q);
                l.a.isTypePage() && t.hasOwnProperty("q") && ((t[a.a.getSettingValue("general.typeParam")] = [t.q]), delete t.q);
                return t;
            },
            T = function (t, e) {
                if (l.a.isSearchPage()) {
                    (t.q = l.a.getSearchTerm()), "q" != o.a.searchTermKey && delete t[o.a.searchTermKey];
                    var n = a.a.getSettingValue("search.enableFuzzy");
                    !0 !== n && (t.fuzzy = n),
                        !1 !== a.a.getSettingValue("search.reduceMinMatch") && (t.reduce_min_match = a.a.getSettingValue("search.reduceMinMatch")),
                        a.a.getSettingValue("search.fullMinMatch") && (t.full_min_match = !0),
                        a.a.getSettingValue("general.sortingAvailableFirst") && (t.sort_first = "available"),
                        a.a.getSettingValue("search.enablePlusCharacterSearch") && (t.enable_plus_character_search = !0);
                }
                return t;
            },
            P = function (t) {
                var e = "";
                e = t ? ("string" == typeof t && 2 == t.split("?").length ? t.split("?")[1] : "") : window.location.search;
                var n = new URLSearchParams(e),
                    i = {},
                    r = a.a.getSettingValue("general.urlScheme");
                return (
                    n.forEach(function (t, e) {
                        var n = c.a.longParamMap.get(e);
                        n || (n = e);
                        var s = o.a.imutableFilterTree.includes(n) || n == o.a.searchTermKey || (n.startsWith(o.a.prefix) && n.includes("_and_condition")) || (n.startsWith(o.a.prefix) && n.includes("_show_exact_rating")),
                            u = n.startsWith(o.a.prefix);
                        if (s) (i[n] = t), (o.a.hasFilterOptionParam = !0);
                        else if (u) {
                            var f = n.startsWith(o.a.prefix + "_c_"),
                                h = n.startsWith(o.a.prefix + "_ct_");
                            if (f) {
                                if (!l.a.isSearchPage()) return;
                                i.collection_scope = t;
                            } else if (h) {
                                var y = a.a.getSettingValue("general.multiLevelCollectionSelectType");
                                (i.tag_mode = y == p.a.SelectType.MULTIPLE ? "2" : "1"), (n = "tag");
                            }
                            switch (r) {
                                case 2:
                                    i[n] = t.split(",");
                                    break;
                                case 1:
                                default:
                                    i.hasOwnProperty(n) ? i[n].push(t) : (i[n] = [t]);
                            }
                            f ? (o.a.collectionId = i.collection_scope) : h && (o.a.collectionTags = i.tag), (o.a.hasFilterOptionParam = !0);
                        }
                    }),
                    i
                );
            },
            w = function (t) {
                (t._ = o.a.prefix), (t.shop = t.hasOwnProperty("shop") ? t.shop : o.a.shopDomain), (t.page = t.hasOwnProperty("page") ? parseInt(t.page) : 1);
                var e = a.a.getSettingValue("general.limit");
                return (
                    "default" == a.a.getSettingValue("general.paginationType") || a.a.getSettingValue("general.paginationTypeAdvanced")
                        ? (t.limit = t.hasOwnProperty("limit") ? t.limit : e)
                        : (t.limit = (t.hasOwnProperty("limit") ? t.limit : e) * t.page),
                    l.a.isSearchPage() && (o.a.defaultSorting = "relevance"),
                    (t.sort = t.hasOwnProperty("sort") ? t.sort : o.a.defaultSorting),
                    (t.display = t.hasOwnProperty("display") ? t.display : a.a.getSettingValue("general.defaultDisplay")),
                    (t = _(t))
                );
            },
            _ = function (t) {
                return (t = C(t));
            },
            C = function (t) {
                if ("undefined" != typeof boostPFSConfig && void 0 !== boostPFSConfig.general.currencies && boostPFSConfig.general.currencies.length > 1) {
                    var e = boostPFSConfig.general.current_currency.toLowerCase().trim();
                    (t.currency = e), "undefined" != typeof Shopify && void 0 !== Shopify.currency && void 0 !== Shopify.currency.rate && (t.currency_rate = Shopify.currency.rate);
                }
                return t;
            },
            k = {
                BoostPFSFilterCallback: function (t) {
                    k.setDefaultValueForExcludedFields(t), "function" == typeof k.afterCall && k.afterCall(t), "function" != typeof k.afterCallAsync ? m(t) : k.afterCallAsync(t, m);
                },
                getFilterData: d,
                updateParamsFromUrl: function (t) {
                    var e = P(t);
                    (e = w(e)), (o.a.queryParams = e);
                },
                setParam: function (t, e) {
                    null == e || (Array.isArray(e) && 0 == e.length) ? delete o.a.queryParams[t] : Array.isArray(e) ? (o.a.queryParams[t] = f(new Set(e))) : (o.a.queryParams[t] = e);
                    var n = t.startsWith(o.a.prefix + "_c_"),
                        i = t.startsWith(o.a.prefix + "_ct_"),
                        r = o.a.queryParams[t];
                    if ((n || "collection_scope" == t) && ((o.a.queryParams.collection_scope = r), (o.a.collectionId = r), !r)) {
                        var a = t.replace(o.a.prefix + "_c_", o.a.prefix + "_ct_");
                        delete o.a.queryParams[a], (o.a.queryParams.tag = null), (o.a.collectionTags = null);
                    }
                    i && ((o.a.queryParams.tag = r), (o.a.collectionTags = r));
                },
                setDefaultValueForExcludedFields: function (t) {
                    if (Array.isArray(t.products)) {
                        var e = new Date().toISOString();
                        t.products.forEach(function (t) {
                            t.hasOwnProperty("variants") || (t.variant = []),
                                t.hasOwnProperty("images_info") || (t.images_info = []),
                                t.hasOwnProperty("collections") || (t.collections = []),
                                t.hasOwnProperty("tags") || (t.tags = []),
                                t.hasOwnProperty("skus") || (t.skus = []),
                                t.hasOwnProperty("options_with_values") || (t.options_with_values = []),
                                t.hasOwnProperty("barcodes") || (t.barcodes = []),
                                t.hasOwnProperty("created_at") || (t.created_at = e),
                                t.hasOwnProperty("updated_at") || (t.updated_at = e),
                                t.hasOwnProperty("published_at") || (t.published_at = e);
                        });
                    }
                },
                addBeforeApplyFilter: function (t) {
                    b.push(t);
                },
                applyFilter: function (t, e) {
                    (y.eventType = t),
                        (y.eventInfo = e),
                        u.default.instance.filter.filterLoadingIcon.setShow(!0),
                        d(t, u.default.instance.filter.setData.bind(u.default.instance.filter), u.default.instance.filter.errorFilterCallback.bind(u.default.instance.filter)),
                        c.a.updateAddressBar();
                },
                callFilterApi: g,
                callbackFilterApi: m,
                beforeCall: null,
                afterCall: null,
                beforeCallAsync: null,
                afterCallAsync: null,
            };
        e.default = k;
    },
    52: function (t, e, n) {
        "use strict";
        n.r(e);
        n(11), n(12), n(13), n(31), n(7), n(14), n(15), n(8), n(16), n(10), n(54), n(9);
        var i = n(1),
            r = n.n(i),
            o = n(2),
            a = n(6),
            l = n(0),
            s = {
                filterTree: ".boost-pfs-filter-tree",
                filterTreeVertical: ".boost-pfs-filter-tree-v",
                filterTreeHorizontal: ".boost-pfs-filter-tree-h",
                filterTreeMobileButton: ".boost-pfs-filter-tree-mobile-button",
                filterRefineByVertical: ".boost-pfs-filter-refine-by-wrapper-v",
                filterRefineByHorizontal: ".boost-pfs-filter-refine-by-wrapper-h",
                products: ".boost-pfs-filter-products",
                collections: ".boost-pfs-search-result-collections",
                pages: ".boost-pfs-search-result-pages",
                searchBoxMobile: "#boost-pfs-search-box-mobile",
                searchTopPanels: ".boost-pfs-search-result-panel-controls",
                searchCollectionPagination: ".boost-pfs-search-result-collection-pagination",
                searchPagePagination: ".boost-pfs-search-result-page-pagination",
                searchPanelsProductShow: ".boost-pfs-search-panel-product-show",
                searchPanelsCollectionShow: ".boost-pfs-search-panel-collection-show",
                searchPanelsPageShow: ".boost-pfs-search-panel-page-show",
                searchTotalResult: ".boost-pfs-search-totlal-result",
                topShowLimit: ".boost-pfs-filter-top-show-limit",
                topSorting: ".boost-pfs-filter-top-sorting",
                topDisplayType: ".boost-pfs-filter-top-display-type",
                pagination: ".boost-pfs-filter-bottom-pagination,.boost-pfs-filter-top-pagination",
                bottomPagination: ".boost-pfs-filter-bottom-pagination",
                loadMore: ".boost-pfs-filter-load-more",
                loadMoreButtonContainer: ".boost-pfs-filter-load-more-button-container",
                btnLoadPreviousPageWrapperSelector: ".boost-pfs-filter-btn-load-previous-page-wrapper",
                btnLoadPreviousPageSelector: ".boost-pfs-filter-btn-load-previous-page",
                loadMoreLoading: ".boost-pfs-filter-load-more-loading",
                topNotification: ".boost-pfs-filter-top-notification",
                breadcrumb: ".boost-pfs-filter-breadcrumb",
                scrollToTop: ".boost-pfs-filter-scroll-to-top",
                otpButtons: "",
                otpTopCartLink: 'header a[href="/cart"]',
                otpTopCartCount: "#CartCount",
                trackingProduct: ".boost-pfs-filter-products > *",
                trackingQuickView: ".boost-pfs-quickview-btn",
                trackingAddToCart: 'form[action="/cart/add"] *[type="submit"]',
                trackingBuyNow: ".shopify-payment-button, #dynamic-checkout-cart",
                init: function () {
                    var t = s;
                    "undefined" != typeof boostPFSConfig && boostPFSConfig.hasOwnProperty("selector") && null !== boostPFSConfig.selector && (t = Utils.mergeObject(t, boostPFSConfig.selector)),
                        "undefined" != typeof boostPFSFilterConfig && boostPFSFilterConfig.hasOwnProperty("selector") && null !== boostPFSFilterConfig.selector && (t = Utils.mergeObject(t, boostPFSFilterConfig.selector)),
                        "undefined" != typeof boostPFSInstantSearchConfig &&
                            boostPFSInstantSearchConfig.hasOwnProperty("selector") &&
                            null !== boostPFSInstantSearchConfig.selector &&
                            (t = Utils.mergeObject(t, boostPFSInstantSearchConfig.selector)),
                        (s = t);
                },
            },
            c = s,
            u = n(34),
            p = (n(118), n(19), n(29), n(117), n(51), n(20), n(3)),
            f =
                (n(22),
                n(41),
                n(35),
                n(17),
                n(33),
                n(186),
                {
                    filterTree: "boost-pfs-filter-tree",
                    filterTreeVertical: "boost-pfs-filter-tree-v",
                    filterTreeHorizontal: "boost-pfs-filter-tree-h",
                    filterTreeOpenBody: "boost-pfs-filter-tree-open-body",
                    filterTreeMobileButton: "boost-pfs-filter-tree-mobile-button",
                    filterTreeMobileOpen: "boost-pfs-filter-tree-mobile-open",
                    filterOptionsWrapper: "boost-pfs-filter-options-wrapper",
                    filterOption: "boost-pfs-filter-option",
                    filterOptionTitle: "boost-pfs-filter-option-title",
                    filterOptionContent: "boost-pfs-filter-option-content",
                    filterOptionContentInner: "boost-pfs-filter-option-content-inner",
                    filterOptionItem: "boost-pfs-filter-option-item",
                    filterOptionLabel: "boost-pfs-filter-option-label",
                    filterOptionRange: "boost-pfs-filter-option-range",
                    filterRefineByWrapper: "boost-pfs-filter-refine-by-wrapper",
                    filterRefineBy: "boost-pfs-filter-refine-by",
                    filterSelectedItems: "boost-pfs-filter-refine-by-items",
                    filterSelectedItemsMobile: "boost-pfs-filter-refine-by-items-mobile",
                    filterOptionHidden: "boost-pfs-filter-option-hidden",
                    filterOptionOpenList: "boost-pfs-filter-option-open-list",
                    filterOptionCloseList: "boost-pfs-filter-option-close-list",
                    filterOptionItemList: "boost-pfs-filter-option-item-list",
                    filterOptionItemListSingleList: "boost-pfs-filter-option-item-list-single-list",
                    filterOptionItemListMultipleList: "boost-pfs-filter-option-item-list-multiple-list",
                    filterOptionItemListBox: "boost-pfs-filter-option-item-list-box",
                    filterOptionItemListSwatch: "boost-pfs-filter-option-item-list-swatch",
                    filterOptionItemListRating: "boost-pfs-filter-option-item-list-rating",
                    filterOptionItemListMultiLevelTag: "boost-pfs-filter-option-item-list-multi-level-tag",
                    filterOptiontemListMultiLevelCollections: "boost-pfs-filter-option-item-list-multi-level-collections",
                    filterOptionItemStar: "boost-pfs-filter-icon-star",
                    filterOptionItemStarActive: "boost-pfs-filter-icon-star-active",
                    filterHasViewMore: "boost-pfs-filter-has-view-more",
                    filterOptionViewMore: "boost-pfs-filter-option-view-more-action",
                    filterOptionViewLess: "boost-pfs-filter-option-view-less-action",
                    filterOptionViewMoreList: "boost-pfs-filter-view-more-list-action",
                    filterHasSearchBox: "boost-pfs-filter-has-searchbox",
                    filterOptionShowSearchBox: "boost-pfs-filter-option-show-search-box",
                    filterHasScrollbar: "boost-pfs-filter-has-scrollbar",
                    filterNoScrollbar: "boost-pfs-filter-no-scrollbar",
                    button: "boost-pfs-filter-button",
                    clearButton: "boost-pfs-filter-clear",
                    clearAllButton: "boost-pfs-filter-clear-all",
                    applyButton: "boost-pfs-filter-apply-button",
                    applyAllButton: "boost-pfs-filter-apply-all-button",
                    closeFilterButton: "boost-pfs-filter-close",
                    showResultFilterButton: "boost-pfs-filter-show-result",
                    collectionHeader: "boost-pfs-filter-collection-header",
                    collectionDescription: "boost-pfs-filter-collection-description",
                    collectionImage: "boost-pfs-filter-collection-image",
                    collectionHasImage: "boost-pfs-filter-collection-has-image",
                    collectionNoImage: "boost-pfs-filter-collection-no-image",
                    filterOptionTooltip: "boost-pfs-filter-option-tooltip",
                    searchBox: "boost-pfs-search-box",
                    searchResultHeader: "boost-pfs-search-result-header",
                    searchResultNumber: "boost-pfs-search-result-number",
                    searchResultPanels: "boost-pfs-search-result-panel-controls",
                    searchResultPanelItem: "boost-pfs-search-result-panel-item",
                    searchSuggestion: "boost-pfs-search-suggestion",
                    searchSuggestionWrapper: "boost-pfs-search-suggestion-wrapper",
                    searchSuggestionHeader: "boost-pfs-search-suggestion-header",
                    searchSuggestionGroup: "boost-pfs-search-suggestion-group",
                    searchSuggestionItem: "boost-pfs-search-suggestion-item",
                    searchSuggestionMobile: "boost-pfs-search-suggestion-mobile",
                    searchSuggestionLoading: "boost-pfs-search-suggestion-loading",
                    searchSuggestionOpen: "boost-pfs-search-suggestion-open",
                    searchSuggestionMobileOpen: "boost-pfs-search-suggestion-mobile-open",
                    searchUiAutocompleteItem: "boost-pfs-ui-item",
                    searchSuggestionBtnSubmitMobile: "boost-pfs-search-submit-mobile",
                    searchSuggestionBtnCloseMobile: "boost-pfs-search-btn-close-suggestion",
                    searchSuggestionBtnClearMobile: "boost-pfs-search-btn-clear-suggestion",
                    searchSuggestionNoTabIndex: "boost-pfs-search-no-tabindex",
                    productLoadMore: "boost-pfs-filter-load-more",
                    productWrapLoading: "boost-pfs-filter-product-loading",
                    buttonLoadPreviousPageSelector: "boost-pfs-filter-btn-load-previous-page",
                    productDisplayType: "boost-pfs-filter-display",
                    filterResultItem: "boost-pfs-search-result-list-item",
                    filterSkeleton: "boost-pfs-filter-skeleton",
                    filterProductSkeleton: "boost-pfs-filter-product-skeleton",
                    filterSkeletonText: "boost-pfs-filter-skeleton-text",
                    filterSkeletonButton: "boost-pfs-filter-skeleton-button",
                    atcForm: "boost-pfs-addtocart-product-form",
                    atcAvailable: "boost-pfs-addtocart-available",
                    atcSelectOptions: "boost-pfs-addtocart-select-options",
                    atcSoldOut: "boost-pfs-addtocart-sold-out",
                    mobileButtonOpen: "boost-pfs-filter-tree-mobile-button-open",
                    mobileDetectiOS: "boost-pfs-filter-mobile-detect-ios",
                    hidden: "boost-hidden",
                });
        n(76);
        function h(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        var y = (function () {
                function t() {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        (this.isInit = !1),
                        (this.isRendered = !1),
                        (this.isBoundEvent = !1),
                        (this.children = []),
                        (this.parent = null);
                }
                var e, n, i;
                return (
                    (e = t),
                    (n = [
                        {
                            key: "refresh",
                            value: function () {
                                this._callAllInit(), this._callAllRender(), this._callAllBindEvents();
                            },
                        },
                        { key: "beforeInit", value: function () {} },
                        { key: "init", value: function () {} },
                        { key: "afterInit", value: function () {} },
                        {
                            key: "isLoopThroughChild",
                            value: function () {
                                return !0;
                            },
                        },
                        {
                            key: "isRender",
                            value: function () {
                                return !0;
                            },
                        },
                        { key: "beforeRender", value: function () {} },
                        { key: "render", value: function () {} },
                        { key: "afterRender", value: function () {} },
                        {
                            key: "isBindEvents",
                            value: function () {
                                return !0;
                            },
                        },
                        { key: "beforeBindEvents", value: function () {} },
                        { key: "bindEvents", value: function () {} },
                        { key: "afterBindEvents", value: function () {} },
                        {
                            key: "addComponent",
                            value: function (t) {
                                (t.parent = this), this.children.push(t);
                            },
                        },
                        {
                            key: "removeComponent",
                            value: function (t) {
                                if (this.children && this.children.length > 0) {
                                    var e = this.children.indexOf(t);
                                    -1 !== e && this.children.splice(e, 1);
                                }
                            },
                        },
                        {
                            key: "_callAllInit",
                            value: function () {
                                this.isInit || (this.beforeInit(), this.init()),
                                    this.children &&
                                        this.children.length > 0 &&
                                        this.isLoopThroughChild() &&
                                        this.children.forEach(function (t) {
                                            t._callAllInit();
                                        }),
                                    this.isInit || (this.afterInit(), (this.isInit = !0));
                            },
                        },
                        {
                            key: "_callAllRender",
                            value: function () {
                                this.isRender() && this.beforeRender(),
                                    this.children &&
                                        this.children.length > 0 &&
                                        this.isLoopThroughChild() &&
                                        this.children.forEach(function (t) {
                                            t._callAllRender();
                                        }),
                                    this.isRender() && (this.render(), this.afterRender(), (this.isRendered = !0));
                            },
                        },
                        {
                            key: "_callAllBindEvents",
                            value: function () {
                                this.isBindEvents() && this.beforeBindEvents(),
                                    this.children &&
                                        this.children.length > 0 &&
                                        this.isLoopThroughChild() &&
                                        this.children.forEach(function (t) {
                                            t._callAllBindEvents();
                                        }),
                                    this.isBindEvents() && (this.bindEvents(), this.afterBindEvents(), (this.isBoundEvent = !0));
                            },
                        },
                    ]) && h(e.prototype, n),
                    i && h(e, i),
                    t
                );
            })(),
            d = n(66),
            g = {
                ResultType: {
                    ALL_EMPTY: "all_empty",
                    TOTAL_PRODUCT: "total_product",
                    PREV_TOTAL_PRODUCT: "prev_total_product",
                    SUGGESTIONS: "suggestions",
                    COLLECTIONS: "collections",
                    PRODUCTS: "products",
                    PAGES: "pages",
                    DID_YOU_MEAN: "did_you_mean",
                    REDIRECT: "redirect",
                    QUERY: "query",
                    SUGGEST_QUERY: "suggest_query",
                    EVENT_TYPE: "event_type",
                },
                Mobile: { SuggestionType: { FULL_SCREEN: "style1", STYLE_2: "style2" } },
            };
        n(140), n(144), n(32);
        function m(t) {
            return (m =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function b(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function v(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function S(t, e) {
            return !e || ("object" !== m(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function O(t) {
            return (O = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function T(t, e) {
            return (T =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var P = (function (t) {
            function e() {
                return b(this, e), S(this, O(e).apply(this, arguments));
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && T(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "_highlightSuggestionResult",
                        value: function (t, e) {
                            if (o.a.getSettingValue("search.highlightSuggestionResult") && e.length > 1 && t) {
                                var n,
                                    i = function (t) {
                                        return new RegExp(t.replace(/([\(\)\{\}\[\]\.\+\-\=\\\/])/g, "\\$&"), "ig");
                                    },
                                    r = e.split(" "),
                                    a = r.length;
                                for (n = 0; n < a; n++) {
                                    var l = i(r[n]),
                                        s = t.match(l);
                                    if (null !== s && s.length > 0) {
                                        var c,
                                            u = (s = s.filter(function (t, e) {
                                                return s.indexOf(t) == e && "" != t;
                                            })).length;
                                        for (c = 0; c < u; c++) s[c].length > 1 && ((l = i(s[c])), (t = t.replace(l, "<b>" + s[c] + "</b>")));
                                    }
                                }
                            }
                            return t;
                        },
                    },
                ]) && v(n.prototype, i),
                r && v(n, r),
                e
            );
        })(y);
        function w(t) {
            return (w =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function _(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function C(t, e) {
            return !e || ("object" !== w(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function k(t) {
            return (k = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function E(t, e) {
            return (E =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var I = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = C(this, k(e).call(this))).data = ""),
                    t
                );
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && E(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<li class="{{class.searchSuggestionItem}} {{class.searchUiAutocompleteItem}}" aria-label="{{escapedBlockType}}: {{escapedData}}">\n\t\t\t\t<a href="{{searchLink}}">{{highlightedSuggestionResult}}</a>\n\t\t\t</li>\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            if (!this.isShow) return "";
                            var t = p.a.escape(l.a.currentTerm),
                                e = p.a.reBuildUrlBaseOnLocale("/search?" + l.a.searchTermKey + "=" + p.a.encodeURIParamValue(this.data)),
                                n = this._highlightSuggestionResult(this.data, t);
                            return this.getTemplate()
                                .replace(/{{escapedBlockType}}/g, p.a.escape(this.parent.type))
                                .replace(/{{escapedData}}/g, p.a.escape(this.data))
                                .replace(/{{class.searchSuggestionItem}}/g, f.searchSuggestionItem)
                                .replace(/{{class.searchUiAutocompleteItem}}/g, f.searchUiAutocompleteItem)
                                .replace(/{{searchLink}}/g, e)
                                .replace(/{{highlightedSuggestionResult}}/g, n);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            if (this.data) {
                                this.$element = r()(this.compileTemplate());
                                var t = p.a.escape(this.data),
                                    e = p.a.escape(this.parent.type);
                                this.$element.data("ui-autocomplete-item", { label: e + ": " + t, value: t });
                            } else this.$element = null;
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            (this.data = t), (this.isShow = !!this.data);
                        },
                    },
                ]) && _(n.prototype, i),
                o && _(n, o),
                e
            );
        })(P);
        function L(t) {
            return (L =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function A(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function F(t, e) {
            return !e || ("object" !== L(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function R(t) {
            return (R = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function j(t, e) {
            return (j =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var $ = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = F(this, R(e).call(this))).id = ""),
                    (t.title = ""),
                    (t.imageUrl = ""),
                    (t.url = ""),
                    (t.sku = ""),
                    (t.label = ""),
                    (t.vendor = ""),
                    (t.isShow = !1),
                    t
                );
            }
            var n, i, a;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && j(t, e);
                })(e, t),
                (n = e),
                (a = [
                    {
                        key: "tempType",
                        get: function () {
                            return { SKU: "sku", VENDOR: "vendor", IMAGE: "thumb", PRICE: "regular_price", PRICE_SALE: "sale_price" };
                        },
                    },
                ]),
                (i = [
                    {
                        key: "getTemplate",
                        value: function (t) {
                            switch (t) {
                                case e.tempType.IMAGE:
                                    return '\n\t\t\t\t\t<div class="{{class.searchSuggestion}}-left">\n\t\t\t\t\t\t<img src="{{imageUrl}}">\n\t\t\t\t\t</div>\n\t\t\t\t';
                                case e.tempType.SKU:
                                    return '\n\t\t\t\t\t<p class="{{class.searchSuggestion}}-product-sku">SKU: {{sku}}</p>\n\t\t\t\t';
                                case e.tempType.VENDOR:
                                    return '\n\t\t\t\t\t<p class="{{class.searchSuggestion}}-product-vendor">{{vendor}}</p>\n\t\t\t\t';
                                case e.tempType.PRICE:
                                    return '\n\t\t\t\t\t<p class="{{class.searchSuggestion}}-product-price">\n\t\t\t\t\t\t<span class="{{class.searchSuggestion}}-product-regular-price">{{regularPrice}}</span>\n\t\t\t\t\t</p>\n\t\t\t\t';
                                case e.tempType.PRICE_SALE:
                                    return '\n\t\t\t\t\t<p class="{{class.searchSuggestion}}-product-price">\n\t\t\t\t\t\t<s>{{compareAtPrice}}</s>&nbsp;\n\t\t\t\t\t\t<span class="{{class.searchSuggestion}}-product-sale-price">{{regularPrice}}</span>\n\t\t\t\t\t</p>\n\t\t\t\t';
                                default:
                                    return '\n\t\t\t\t\t<li class="{{class.searchSuggestionItem}} {{class.searchSuggestionItem}}-product {{class.searchUiAutocompleteItem}}" aria-label="{{escapedBlockType}}: {{escapedTitle}}" data-id="{{id}}">\n\t\t\t\t\t\t<a href="{{url}}" {{newTabAttribute}}>\n\t\t\t\t\t\t\t{{itemProductImage}}\n\t\t\t\t\t\t\t<div class="{{class.searchSuggestion}}-right">\n\t\t\t\t\t\t\t\t<p class="{{class.searchSuggestion}}-product-title">{{title}}</p>\n\t\t\t\t\t\t\t\t{{itemProductSku}}\n\t\t\t\t\t\t\t\t{{itemProductVendor}}\n\t\t\t\t\t\t\t\t{{itemProductPrice}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t';
                            }
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            if (this.isShow) {
                                var t = p.a.escape(l.a.currentTerm),
                                    n = "";
                                o.a.getSettingValue("search.showSuggestionProductImage") && this.imageUrl.length && (n = (n = this.getTemplate(e.tempType.IMAGE)).replace(/{{imageUrl}}/g, this.imageUrl));
                                var i = this.customizeProductTitle();
                                i = this._highlightSuggestionResult(i, t);
                                var r = "";
                                o.a.getSettingValue("search.showSuggestionProductSku") && this.sku.length && (r = (r = this.getTemplate(e.tempType.SKU)).replace(/{{sku}}/g, this.sku));
                                var a = "";
                                o.a.getSettingValue("search.showSuggestionProductVendor") && this.vendor.length && (a = (a = this.getTemplate(e.tempType.VENDOR)).replace(/{{vendor}}/g, this.vendor));
                                var s = this.compileSuggestionProductPrice(),
                                    c = o.a.getSettingValue("search.openProductNewTab") ? 'target="_blank"' : "";
                                return this.getTemplate()
                                    .replace(/{{id}}/g, this.id)
                                    .replace(/{{escapedTitle}}/g, p.a.escape(i))
                                    .replace(/{{escapedBlockType}}/g, p.a.escape(this.parent.type))
                                    .replace(/{{url}}/g, this.url)
                                    .replace(/{{newTabAttribute}}/g, c)
                                    .replace(/{{itemProductImage}}/g, n)
                                    .replace(/{{title}}/g, i)
                                    .replace(/{{itemProductSku}}/g, r)
                                    .replace(/{{itemProductVendor}}/g, a)
                                    .replace(/{{itemProductPrice}}/, s)
                                    .replace(/{{class.searchSuggestion}}/g, f.searchSuggestion)
                                    .replace(/{{class.searchSuggestionItem}}/g, f.searchSuggestionItem)
                                    .replace(/{{class.searchUiAutocompleteItem}}/g, f.searchUiAutocompleteItem);
                            }
                            return "";
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            if (this.isShow) {
                                this.$element = r()(this.compileTemplate());
                                var t = p.a.escape(this.parent.type),
                                    e = p.a.escape(this.title);
                                this.$element.data("ui-autocomplete-item", { label: t + ": " + e, value: e });
                            } else this.$element = null;
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            t
                                ? ((this.data = t),
                                  (this.id = t.id),
                                  (this.title = t.title),
                                  (this.imageUrl = t.images_info.length > 0 ? p.a.optimizeImage(t.images_info[0].src, "200x") : boostPFSConfig.general.no_image_url),
                                  (this.url = p.a.buildProductItemUrl(t, !1)),
                                  (this.sku = t.skus && t.skus.length > 0 ? t.skus[0] : ""),
                                  (this.label = t.label),
                                  (this.vendor = t.vendor),
                                  (this.isShow = !0))
                                : ((this.data = null), (this.id = ""), (this.title = ""), (this.imageUrl = ""), (this.url = ""), (this.sku = ""), (this.label = ""), (this.vendor = ""), (this.isShow = !1));
                        },
                    },
                    {
                        key: "compileSuggestionProductPrice",
                        value: function () {
                            this.prepareSuggestionProductPriceData();
                            var t = this.data.compare_at_price_min > this.data.price_min,
                                n = p.a.formatMoney(this.data.price_min),
                                i = "";
                            this.data &&
                                this.data.compare_at_price_min &&
                                ((i = p.a.formatMoney(this.data.compare_at_price_min)), o.a.getSettingValue("search.removePriceDecimal") && ((n = this.removeDecimal(n)), (i = this.removeDecimal(i))));
                            var r = "";
                            return (
                                o.a.getSettingValue("search.showSuggestionProductPrice") &&
                                    (r = t && o.a.getSettingValue("search.showSuggestionProductSalePrice") ? this.getTemplate(e.tempType.PRICE_SALE) : this.getTemplate(e.tempType.PRICE)),
                                r.replace(/{{regularPrice}}/g, n).replace(/{{compareAtPrice}}/g, i)
                            );
                        },
                    },
                    {
                        key: "customizeProductTitle",
                        value: function () {
                            return this.title;
                        },
                    },
                    {
                        key: "prepareSuggestionProductPriceData",
                        value: function () {
                            var t = this,
                                e = o.a.getSettingValue("general.currencies");
                            if (void 0 !== e && e.length > 1) {
                                var n = o.a.getSettingValue("general.current_currency").toLowerCase().trim();
                                ["price_min", "price_max", "compare_at_price_min", "compare_at_price_max"].forEach(function (e) {
                                    var i = e + "_" + n;
                                    void 0 !== t.data[i] && (t.data[e] = t.data[i]);
                                });
                            }
                        },
                    },
                ]) && A(n.prototype, i),
                a && A(n, a),
                e
            );
        })(P);
        function B(t) {
            return (B =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function x(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function M(t, e) {
            return !e || ("object" !== B(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function D(t) {
            return (D = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function V(t, e) {
            return (V =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var N = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = M(this, D(e).call(this))).data = ""),
                    t
                );
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && V(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<li class="{{class.searchSuggestionItem}} {{class.searchUiAutocompleteItem}}" aria-label="{{escapedBlockType}}: {{escapedDataTitle}}">\n\t\t\t\t<a href="{{searchLink}}">{{highlightedSuggestionResult}}</a>\n\t\t\t</li>\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            if (!this.isShow) return "";
                            this.searchTerm = p.a.escape(l.a.currentTerm);
                            var t = p.a.reBuildUrlBaseOnLocale("/collections/" + this.data.handle),
                                e = this._highlightSuggestionResult(this.data.title, this.searchTerm);
                            return this.getTemplate()
                                .replace(/{{escapedBlockType}}/g, p.a.escape(this.parent.type))
                                .replace(/{{escapedDataTitle}}/g, p.a.escape(this.data.title))
                                .replace(/{{escapedDataId}}/g, p.a.escape(this.data.id))
                                .replace(/{{class.searchSuggestionItem}}/g, f.searchSuggestionItem)
                                .replace(/{{class.searchUiAutocompleteItem}}/g, f.searchUiAutocompleteItem)
                                .replace(/{{searchLink}}/g, t)
                                .replace(/{{highlightedSuggestionResult}}/g, e);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            if (this.data) {
                                this.$element = r()(this.compileTemplate());
                                var t = p.a.escape(this.data.title),
                                    e = p.a.escape(this.parent.type) + ": " + t;
                                this.$element.data("ui-autocomplete-item", { label: e, value: t });
                            } else this.$element = null;
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            (this.data = t), (this.isShow = !!this.data);
                        },
                    },
                ]) && x(n.prototype, i),
                o && x(n, o),
                e
            );
        })(P);
        function U(t) {
            return (U =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function q(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function H(t, e) {
            return !e || ("object" !== U(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function G(t) {
            return (G = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function W(t, e) {
            return (W =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var z = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = H(this, G(e).call(this))).data = ""),
                    t
                );
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && W(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<li class="{{class.searchSuggestionItem}} {{class.searchUiAutocompleteItem}}" aria-label="{{escapedBlockType}}: {{escapedDataTitle}}">\n\t\t\t\t<a href="{{searchLink}}">{{highlightedSuggestionResult}}</a>\n\t\t\t</li>\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            if (!this.isShow) return "";
                            var t = p.a.escape(l.a.currentTerm),
                                e = p.a.reBuildUrlBaseOnLocale(this.data.url),
                                n = this._highlightSuggestionResult(this.data.title, t);
                            return this.getTemplate()
                                .replace(/{{escapedBlockType}}/g, p.a.escape(this.parent.type))
                                .replace(/{{escapedDataTitle}}/g, p.a.escape(this.data.title))
                                .replace(/{{class.searchSuggestionItem}}/g, f.searchSuggestionItem)
                                .replace(/{{class.searchUiAutocompleteItem}}/g, f.searchUiAutocompleteItem)
                                .replace(/{{searchLink}}/g, e)
                                .replace(/{{highlightedSuggestionResult}}/g, n);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            if (this.data) {
                                this.$element = r()(this.compileTemplate());
                                var t = p.a.escape(this.data.title),
                                    e = p.a.escape(this.parent.type);
                                this.$element.data("ui-autocomplete-item", { label: e + ": " + t, value: t });
                            } else this.$element = null;
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            (this.data = t), (this.isShow = !!this.data);
                        },
                    },
                ]) && q(n.prototype, i),
                o && q(n, o),
                e
            );
        })(P);
        function K(t) {
            return (K =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Y(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Q(t, e) {
            return !e || ("object" !== K(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function J(t) {
            return (J = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Z(t, e) {
            return (Z =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var X = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = Q(this, J(e).call(this))).data = ""),
                    (t.$element = null),
                    t
                );
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Z(t, e);
                })(e, t),
                (n = e),
                (o = [
                    {
                        key: "tempType",
                        get: function () {
                            return { LINK: "link", SEPARATOR: "separator", STRONG: "strong", P: "p" };
                        },
                    },
                ]),
                (i = [
                    {
                        key: "getTemplate",
                        value: function (t) {
                            switch (t) {
                                case e.tempType.LINK:
                                    return '\n\t\t\t\t\t<a href="{{url}}">{{content}}</a>\n\t\t\t\t';
                                case e.tempType.SEPARATOR:
                                    return "\n\t\t\t\t\t<span>,</span>&nbsp;\n\t\t\t\t";
                                case e.tempType.STRONG:
                                    return "\n\t\t\t\t\t<strong>{{content}}</strong>\n\t\t\t\t";
                                case e.tempType.P:
                                    return "\n\t\t\t\t\t<p>{{content}}</p>\n\t\t\t\t";
                                default:
                                    return '\n\t\t\t\t\t<li class="{{class.searchSuggestionItem}} {{class.searchSuggestion}}-dym" aria-label="Did you mean">{{dymContent}}</li>\n\t\t\t\t';
                            }
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            var t = this;
                            if (this.isShow) {
                                var n = "";
                                "" != this.dymList &&
                                    this.dymList.length > 0 &&
                                    this.dymList.forEach(function (i, r) {
                                        var o = "/search?" + l.a.searchTermKey + "=" + p.a.encodeURIParamValue(i);
                                        (n += t
                                            .getTemplate(e.tempType.LINK)
                                            .replace(/{{url}}/g, o)
                                            .replace(/{{content}}/g, i)),
                                            r < t.dymList.length - 1 && (n += t.getTemplate(e.tempType.SEPARATOR));
                                    });
                                var i = "";
                                if (this.suggestQuery != l.a.currentTerm) {
                                    if (0 == this.totalProduct) {
                                        var r = this.getTemplate(e.tempType.STRONG).replace(/{{content}}/g, l.a.currentTerm);
                                        i += "<p>" + a.a.error.noSuggestionProducts.replace(/{{ terms }}/g, r) + "</p>";
                                    }
                                    if ("" != this.suggestQuery) {
                                        var o = "/search?" + l.a.searchTermKey + "=" + p.a.encodeURIParamValue(this.suggestQuery),
                                            s = this.getTemplate(e.tempType.LINK)
                                                .replace(/{{url}}/g, o)
                                                .replace(/{{content}}/g, this.suggestQuery),
                                            c = a.a.suggestion.suggestQuery.replace(/{{ terms }}/g, s);
                                        i += this.getTemplate(e.tempType.P).replace(/{{content}}/g, c);
                                    }
                                    "" != n && (i += this.getTemplate(e.tempType.P).replace(/{{content}}/g, a.a.suggestion.didYouMean.replace(/{{ terms }}/g, n)));
                                }
                                return this.getTemplate()
                                    .replace(/{{dymContent}}/g, i)
                                    .replace(/{{class.searchSuggestion}}/g, f.searchSuggestion)
                                    .replace(/{{class.searchSuggestionItem}}/g, f.searchSuggestionItem);
                            }
                            return "";
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            this.isShow ? (this.$element = r()(this.compileTemplate())) : (this.$element = null);
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            if (((this.data = t), (this.isShow = !1), t)) {
                                (this.productData = p.a.getValueInObjectArray(g.ResultType.PRODUCTS, this.data)), (this.suggestQuery = p.a.getValueInObjectArray(g.ResultType.SUGGEST_QUERY, this.data));
                                var e = p.a.getValueInObjectArray(g.ResultType.TOTAL_PRODUCT, this.data),
                                    n = p.a.getValueInObjectArray(g.ResultType.PREV_TOTAL_PRODUCT, this.data);
                                (this.totalProduct = "" !== n && e > 0 ? n : e), (this.dymList = p.a.getValueInObjectArray(g.ResultType.DID_YOU_MEAN, this.data)), this.dymList && this.dymList.length > 0 && (this.isShow = !0);
                            } else (this.productData = []), (this.suggestQuery = ""), (this.totalProduct = 0), (this.prevTotalProduct = ""), (this.dymList = "");
                        },
                    },
                ]) && Y(n.prototype, i),
                o && Y(n, o),
                e
            );
        })(y);
        function tt(t) {
            return (tt =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function et(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function nt(t, e) {
            return !e || ("object" !== tt(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function it(t) {
            return (it = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function rt(t, e) {
            return (rt =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var ot = (function (t) {
            function e(t) {
                var n;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((n = nt(this, it(e).call(this))).type = t.type),
                    (n.status = t.status),
                    (n.maxSuggesionItems = t.number),
                    (n.label = t.label),
                    (n.notFoundLabel = t.label),
                    (n.isShow = !1),
                    (n.isShowDYM = !1),
                    n.type && n.type === g.ResultType.PRODUCTS && (n.blockDym = new X()),
                    (n.settings = { suggesionMaxItems: o.a.getSettingValue("search.suggesionMaxItems") }),
                    n
                );
            }
            var n, i, a;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && rt(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            switch (this.type) {
                                case g.ResultType.SUGGESTIONS:
                                    this.maxSuggesionItems = this.settings.suggesionMaxItems;
                                    for (var t = 0; t < this.maxSuggesionItems; t++) this.addComponent(new I());
                                    break;
                                case g.ResultType.PRODUCTS:
                                    for (this.maxSuggesionItems = this.settings.suggesionMaxItems, t = 0; t < this.maxSuggesionItems; t++) this.addComponent(new $());
                                    break;
                                case g.ResultType.COLLECTIONS:
                                    for (t = 0; t < this.maxSuggesionItems; t++) this.addComponent(new N());
                                    break;
                                case g.ResultType.PAGES:
                                    for (t = 0; t < this.maxSuggesionItems; t++) this.addComponent(new z());
                            }
                        },
                    },
                    {
                        key: "getTemplate",
                        value: function (t) {
                            switch (t) {
                                case "dym":
                                    return '\n\t\t\t\t\t<li class="{{class.searchSuggestionItem}} {{class.searchSuggestion}}-dym" aria-label="Did you mean">{{dymContent}}</li>\n\t\t\t\t';
                                default:
                                    return '\n\t\t\t\t\t<li class="{{class.searchSuggestionGroup}}" data-group="{{type}}" aria-label="{{label}}">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class="{{class.searchSuggestionHeader}}-{{type}} {{class.searchSuggestionHeader}}" aria-label="{{label}}">{{label}}</li>\n\t\t\t\t\t\t\t{{resultItems}}\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t';
                            }
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            if (!(("active" == this.status && this.isShow) || this._isShowDYM())) return "";
                            var t = this.isAllEmpty ? this.notFoundLabel : this.label;
                            return this.getTemplate()
                                .replace(/{{type}}/g, this.type)
                                .replace(/{{label}}/g, t)
                                .replace(/{{class.searchSuggestionHeader}}/g, f.searchSuggestionHeader)
                                .replace(/{{class.searchSuggestionGroup}}/g, f.searchSuggestionGroup)
                                .replace(/{{resultItems}}/g, "");
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t = this;
                            (this.$element = r()(this.compileTemplate())),
                                this.type &&
                                    this.type === g.ResultType.PRODUCTS &&
                                    (this.blockDym.render(), this.blockDym.$element && ((this.$element = r()(this.compileTemplate())), this.$element.find("> ul").append(this.blockDym.$element))),
                                this.children.forEach(function (e) {
                                    e.$element && t.$element.find("> ul").append(e.$element);
                                });
                        },
                    },
                    {
                        key: "_isShowDYM",
                        value: function () {
                            return this.isShowDYM && this.type == g.ResultType.PRODUCTS;
                        },
                    },
                    {
                        key: "setData",
                        value: function (t, e) {
                            (this.data = t),
                                (this.isAllEmpty = e),
                                t.hasOwnProperty("notFoundLabel") && (this.notFoundLabel = t.notFoundLabel),
                                this.children.forEach(function (e, n) {
                                    t && t.length > n ? e.setData(t[n]) : e.setData(null);
                                }),
                                this.blockDym && (this.blockDym.setData(this.parent.data), (this.isShowDYM = this.blockDym.isShow)),
                                (this.isShow = t && t.length > 0);
                        },
                    },
                ]) && et(n.prototype, i),
                a && et(n, a),
                e
            );
        })(y);
        function at(t) {
            return (at =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function lt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function st(t, e) {
            return !e || ("object" !== at(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function ct(t) {
            return (ct = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function ut(t, e) {
            return (ut =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var pt = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = st(this, ct(e).call(this))).data = ""),
                    (t.$element = null),
                    t
                );
            }
            var n, i, s;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && ut(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<li class="{{class.searchSuggestionHeader}}-view-all {{class.searchSuggestionHeader}}" aria-label="View All">\n\t\t\t\t<a href="{{viewAllUrl}}">{{label.suggestion.viewAll}}</a>\n\t\t\t</li>\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            if ("" !== p.a.getValueInObjectArray("suggest_query", this.data)) return "";
                            var t = p.a.getValueInObjectArray("total_product", this.data),
                                e = p.a.getValueInObjectArray("suggest_total_product", this.data);
                            "" !== e && (t = e);
                            var n = o.a.getSettingValue("search.suggestionBlocks"),
                                i = p.a.getValueInObjectArray("products", n, "type", "number");
                            if (0 == t || t <= i) return "";
                            var r = p.a.reBuildUrlBaseOnLocale("/search?" + l.a.searchTermKey + "=" + p.a.encodeURIParamValue(l.a.currentTerm));
                            return this.getTemplate()
                                .replace(/{{class.searchSuggestionHeader}}/g, f.searchSuggestionHeader)
                                .replace(/{{label.suggestion.viewAll}}/g, a.a.suggestion.viewAll)
                                .replace(/{{ count }}/g, t)
                                .replace(/{{viewAllUrl}}/g, r);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            this.$element = r()(this.compileTemplate());
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            this.data = t || null;
                        },
                    },
                ]) && lt(n.prototype, i),
                s && lt(n, s),
                e
            );
        })(y);
        function ft(t) {
            return (ft =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function ht(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function yt(t, e) {
            return !e || ("object" !== ft(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function dt(t) {
            return (dt = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function gt(t, e) {
            return (gt =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var mt = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = yt(this, dt(e).call(this))).$element = null),
                    t
                );
            }
            var n, i, a;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && gt(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<li class="{{class.searchSuggestionLoading}}">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class="{{class.searchSuggestionLoading}}-img"></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class="{{class.searchSuggestionLoading}}-img"></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class="{{class.searchSuggestionLoading}}-img"></div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return this.getTemplate().replace(/{{class.searchSuggestionLoading}}/g, f.searchSuggestionLoading);
                        },
                    },
                    {
                        key: "isRender",
                        value: function () {
                            return o.a.getSettingValue("search.showSuggestionLoading");
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            this.$element = r()(this.compileTemplate());
                        },
                    },
                ]) && ht(n.prototype, i),
                a && ht(n, a),
                e
            );
        })(y);
        function bt(t) {
            return (bt =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function vt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function St(t, e) {
            return !e || ("object" !== bt(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Ot(t) {
            return (Ot = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Tt(t, e) {
            return (Tt =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Pt = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = St(this, Ot(e).call(this))).$element = null),
                    t
                );
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Tt(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<li class="{{class.searchSuggestion}}-no-result {{class.searchSuggestionItem}}" data-label="No Results: {{searchTerm}}" data-value="{{searchTerm}}" aria-label="No Results">\n\t\t\t\t<span>{{noResultLabel}}</span>\n\t\t\t</li>\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            var t = p.a.escape(l.a.currentTerm),
                                e = a.a.error.noSuggestionResult.replace(/{{ terms }}/g, "<strong>" + t + "</strong>");
                            return this.getTemplate()
                                .replace(/{{class.searchSuggestion}}/g, f.searchSuggestion)
                                .replace(/{{class.searchSuggestionItem}}/g, f.searchSuggestionItem)
                                .replace(/{{searchTerm}}/g, t)
                                .replace(/{{noResultLabel}}/g, e);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            this.hasRedirect ? (this.$element = null) : (this.$element = r()(this.compileTemplate()));
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            t ? ((this.data = t), (this.hasRedirect = p.a.getValueInObjectArray(g.ResultType.REDIRECT, this.data))) : ((this.data = null), (this.hasRedirect = !1));
                        },
                    },
                ]) && vt(n.prototype, i),
                o && vt(n, o),
                e
            );
        })(y);
        function wt(t) {
            return (wt =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function _t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Ct(t, e) {
            return !e || ("object" !== wt(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function kt(t) {
            return (kt = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Et(t, e) {
            return (Et =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var It = (function (t) {
            function e(t, n) {
                var i;
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    ((i = Ct(this, kt(e).call(this))).searchInputId = t),
                    (i.isLoading = !1),
                    (i.isFirstLoad = !0),
                    (i.blocks = []),
                    (i.loadingBlock = null);
                var a = "." + f.searchSuggestionWrapper + '[data-search-box-id="' + i.searchInputId + '"]';
                return (
                    (i.selector = { wrapper: a, popover: a + " ." + f.searchSuggestion + "-popover", loading: a + " ." + f.searchSuggestion + "-loading" }),
                    (i.$scriptInstantSearchNotFoundJson = r()("#boost-pfs-instant-search-products-not-found-json")),
                    (i.$searchInputElement = n),
                    (i.$instantSearchResult = null),
                    (i.$wrapper = null),
                    (i.$popoverElement = null),
                    (i.$loadingElement = null),
                    (i.suggestionDirection = i._getSuggestionDirection()),
                    (i.position = ""),
                    (i.settings = { suggestionNoResult: o.a.getSettingValue("search.suggestionNoResult") }),
                    i
                );
            }
            var n, i, a;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Et(t, e);
                })(e, t),
                (n = e),
                (a = [
                    {
                        key: "isActive",
                        value: function () {
                            return !0;
                        },
                    },
                ]),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            var t = this;
                            (this.loadingBlock = new mt()),
                                this.addComponent(this.loadingBlock),
                                (this.blockSettings = o.a.getSettingValue("search.suggestionBlocks")),
                                this._applyFilterBlockSettings(),
                                this.blockSettings.forEach(function (e) {
                                    var n = new ot(e);
                                    t.addComponent(n), t.blocks.push(n);
                                });
                            var e = new pt();
                            this.addComponent(e), (this.blockViewAll = e);
                            var n = new Pt();
                            this.addComponent(n), (this.blockEmpty = n);
                        },
                    },
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<div class="{{class.searchSuggestionWrapper}}" data-search-box-id="{{searchInputId}}">\n\t\t\t\t<div class="{{class.searchSuggestion}}-popover" data-direction="{{suggestionDirection}}"></div>\n\t\t\t</div>\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return this.getTemplate()
                                .replace(/{{searchInputId}}/g, this.searchInputId)
                                .replace(/{{suggestionDirection}}/g, this.suggestionDirection)
                                .replace(/{{class.searchSuggestionWrapper}}/g, f.searchSuggestionWrapper)
                                .replace(/{{class.searchSuggestion}}/g, f.searchSuggestion);
                        },
                    },
                    { key: "_applyFilterBlockSettings", value: function () {} },
                    {
                        key: "render",
                        value: function () {
                            if (this.isFirstLoad) {
                                var t = this.compileTemplate();
                                (this.appendToSelector = "body"),
                                    this._applyFilterAutocompleteAppendElement(),
                                    r()(this.appendToSelector).append(t),
                                    (this.$wrapper = r()(this.selector.wrapper)),
                                    (this.$popoverElement = r()(this.selector.popover)),
                                    (this.isFirstLoad = !1);
                            } else this.$instantSearchResult.siblings().show(), this.$wrapper.show(), this.isLoading ? (this._renderSuggestionLoading(), this._renderWrapper()) : (this._renderWrapper(), this._renderSuggestion());
                        },
                    },
                    { key: "_applyFilterAutocompleteAppendElement", value: function () {} },
                    {
                        key: "_renderWrapper",
                        value: function () {
                            var t = p.a.InstantSearch.isFullWidthMobile() ? f.searchSuggestionMobile : "";
                            "" !== t && this.$wrapper.addClass(t);
                            var e = this._setSuggestionPosition();
                            e.setSuggetionPosition(), e.setSuggetionPopoverPosition();
                            var n = "";
                            (n = "auto" == o.a.getSettingValue("search.suggestionWidth") || p.a.isMobile() ? this.$searchInputElement.outerWidth() : o.a.getSettingValue("search.suggestionWidth")), this.$wrapper.outerWidth(n);
                        },
                    },
                    {
                        key: "_setSuggestionPosition",
                        value: function () {
                            var t = this,
                                e = p.a.InstantSearch.isFullWidthMobile() ? "top" : "top+12";
                            if ("left" == this.suggestionDirection) {
                                this.$wrapper.position({ my: "left " + e, at: "left bottom", of: this.$searchInputElement[0] });
                                var n = function () {
                                        t.$instantSearchResult.position({ my: "left " + e, at: "left bottom", of: t.$searchInputElement[0] });
                                    },
                                    i = function () {
                                        t.$popoverElement.position({ my: "left+20 top-8" + e, at: "left bottom", of: t.$searchInputElement[0] });
                                    };
                            } else
                                this.$wrapper.position({ my: "right " + e, at: "right bottom", of: this.$searchInputElement[0] }),
                                    (n = function () {
                                        t.$instantSearchResult.position({ my: "right " + e, at: "right bottom", of: t.$searchInputElement[0] });
                                    }),
                                    (i = function () {
                                        t.$popoverElement.position({ my: "right-20 top-8", at: "right bottom", of: t.$searchInputElement[0] });
                                    });
                            return { setSuggetionPosition: n, setSuggetionPopoverPosition: i };
                        },
                    },
                    {
                        key: "_renderSuggestion",
                        value: function () {
                            if ((this.$instantSearchResult && this.$instantSearchResult.attr("data-search-box", this.id), this.data)) {
                                var t = [];
                                p.a.getValueInObjectArray(g.ResultType.ALL_EMPTY, this.data)
                                    ? this.blockEmpty.$element
                                        ? (t.push(this.blockEmpty.$element),
                                          this.blocks.forEach(function (e) {
                                              t.push(e.$element);
                                          }))
                                        : this.$wrapper.hide()
                                    : (this.blocks.forEach(function (e) {
                                          t.push(e.$element);
                                      }),
                                      t.push(this.blockViewAll.$element)),
                                    this.$instantSearchResult.append(t);
                            }
                        },
                    },
                    {
                        key: "_renderSuggestionLoading",
                        value: function () {
                            this.loadingBlock.$element &&
                                !r()(this.selector.loading).length &&
                                (this.$instantSearchResult.children().hide(),
                                this.$instantSearchResult.prepend(this.loadingBlock.$element),
                                (this.$loadingElement = r()(this.selector.loading)),
                                this.$wrapper.addClass(f.searchSuggestionOpen),
                                this.$instantSearchResult.show(),
                                this.$loadingElement.show());
                        },
                    },
                    {
                        key: "_getSuggestionDirection",
                        value: function () {
                            var t = o.a.getSettingValue("search.suggestionPosition");
                            if ("" != t) return t;
                            var e = r()(window).width() / 2;
                            return this.$searchInputElement.offset().left < e ? "left" : "right";
                        },
                    },
                    {
                        key: "setData",
                        value: function (t, e, n) {
                            var i = this;
                            if (((this.$instantSearchResult = t), (this.data = e), (this.isLoading = n), this.data)) {
                                var r = p.a.getValueInObjectArray(g.ResultType.ALL_EMPTY, this.data),
                                    o = [];
                                this.$scriptInstantSearchNotFoundJson.length && (o = JSON.parse(this.$scriptInstantSearchNotFoundJson.html())),
                                    this.blocks.forEach(function (t) {
                                        var e = p.a.getValueInObjectArray(t.type, i.data);
                                        r &&
                                            (t.type == g.ResultType.PRODUCTS && o.hasOwnProperty("products") && i.settings.suggestionNoResult.products.status
                                                ? (i._preparePopularProducts(o.products), (e = o.products), (t.notFoundLabel = i.settings.suggestionNoResult.products.label))
                                                : t.type == g.ResultType.SUGGESTIONS &&
                                                  o.hasOwnProperty("search_terms") &&
                                                  i.settings.suggestionNoResult.search_terms.status &&
                                                  ((e = o.search_terms), (t.notFoundLabel = i.settings.suggestionNoResult.search_terms.label))),
                                            t.setData(e, r);
                                    }),
                                    this.blockEmpty.setData(this.data),
                                    this.blockViewAll.setData(this.data);
                            }
                        },
                    },
                    {
                        key: "_preparePopularProducts",
                        value: function (t) {
                            return (
                                t.forEach(function (t) {
                                    var e = [];
                                    t.media.forEach(function (t) {
                                        "image" == t.media_type && e.push({ id: t.id, position: t.position, src: t.src, width: t.width, height: t.height });
                                    }),
                                        (t.images_info = e),
                                        (t.price /= 100),
                                        (t.price_min /= 100),
                                        (t.price_max /= 100),
                                        (t.compare_at_price /= 100),
                                        (t.compare_at_price_min /= 100),
                                        (t.compare_at_price_max /= 100);
                                }),
                                t
                            );
                        },
                    },
                ]) && _t(n.prototype, i),
                a && _t(n, a),
                e
            );
        })(y);
        n(190);
        function Lt(t) {
            return (Lt =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function At(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Ft(t, e) {
            return !e || ("object" !== Lt(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Rt(t) {
            return (Rt = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function jt(t, e) {
            return (jt =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var $t = (function (t) {
            function e(t, n) {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    Ft(this, Rt(e).call(this, t, n))
                );
            }
            var n, i, a;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && jt(t, e);
                })(e, t),
                (n = e),
                (a = [
                    {
                        key: "isActive",
                        value: function () {
                            return !p.a.isMobile() && "style2" === o.a.getSettingValue("search.suggestionStyle");
                        },
                    },
                ]),
                (i = [
                    {
                        key: "_applyFilterBlockSettings",
                        value: function () {
                            if (this.blockSettings[0].type !== g.ResultType.PRODUCTS) {
                                var t = this.blockSettings.findIndex(function (t) {
                                        return t.type == g.ResultType.PRODUCTS;
                                    }),
                                    e = this.blockSettings[t];
                                this.blockSettings.splice(t, 1), o.a.getSettingValue("search.suggestionStyle2ReverseProductBlock") ? this.blockSettings.push(e) : this.blockSettings.unshift(e);
                            }
                        },
                    },
                    {
                        key: "_applyFilterAutocompleteAppendElement",
                        value: function (t) {
                            this.appendToSelector = o.a.getSettingValue("search.suggestionStyle2MainContainerSelector") || "header:first";
                        },
                    },
                    {
                        key: "_renderWrapper",
                        value: function () {
                            var t = p.a.InstantSearch.isFullWidthMobile() ? f.searchSuggestionMobile : "";
                            if (("" !== t && this.$wrapper.addClass(t), this.$wrapper.length)) {
                                var e = f.searchSuggestionWrapper + "-" + o.a.getSettingValue("search.suggestionStyle");
                                this.$wrapper
                                    .addClass(e)
                                    .addClass(e + "-width-fullwidth")
                                    .addClass(f.searchSuggestion + "-products-per-row-" + o.a.getSettingValue("search.suggestionStyle2ProductPerRow"))
                                    .addClass(f.searchSuggestion + "-reverse-product-block-" + o.a.getSettingValue("search.suggestionStyle2ReverseProductBlock"));
                            }
                            var n = this._setSuggestionPosition();
                            n.setSuggetionPosition(),
                                n.setSuggetionPopoverPosition(),
                                r()(window).resize(function () {
                                    n.setSuggetionPopoverPosition();
                                });
                        },
                    },
                ]) && At(n.prototype, i),
                a && At(n, a),
                e
            );
        })(It);
        function Bt(t) {
            return (Bt =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function xt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Mt(t, e) {
            return !e || ("object" !== Bt(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Dt(t) {
            return (Dt = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Vt(t, e) {
            return (Vt =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Nt = (function (t) {
                function e() {
                    var t;
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        ((t = Mt(this, Dt(e).call(this))).data = ""),
                        (t.isBoundEvents = !1),
                        (t.isOpen = !1),
                        (t.inputMobileId = c.searchBoxMobile.substr(1)),
                        (t.searchBox = null),
                        (t.selector = {
                            searchInput: c.searchBoxMobile,
                            clearButton: "." + f.searchSuggestionBtnClearMobile,
                            closebutton: "." + f.searchSuggestionBtnCloseMobile,
                            submitButton: "." + f.searchSuggestionBtnSubmitMobile,
                            topPanel: "." + f.searchSuggestion + "-mobile-top-panel",
                            overlay: "." + f.searchSuggestion + "-mobile-overlay",
                            searchInputs: 'input[name="' + o.a.getSettingValue("search.termKey") + '"]',
                        }),
                        t
                    );
                }
                var n, i, s;
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Vt(t, e);
                    })(e, t),
                    (n = e),
                    (s = [
                        {
                            key: "isActive",
                            value: function () {
                                return !0;
                            },
                        },
                        {
                            key: "tempType",
                            get: function () {
                                return { SEARCH_BTN: "search_btn", DEFAULT: "default" };
                            },
                        },
                    ]),
                    (i = [
                        {
                            key: "getTemplate",
                            value: function (t) {
                                switch (t) {
                                    case e.tempType.SEARCH_BTN:
                                        return '\n\t\t\t\t\t<a href="javascript:;" class="{{class.searchSuggestionBtnSubmitMobile}}"><span>Submit</span></a>\n\t\t\t\t';
                                    default:
                                        return '\n\t\t\t\t\t<div class="{{class.searchSuggestion}}-mobile-overlay"></div>\n\t\t\t\t\t<div class="{{class.searchSuggestion}}-mobile-top-panel">\n\t\t\t\t\t\t<form action="/search" method="get">\n\t\t\t\t\t\t\t<button type="button" class="{{class.searchSuggestionBtnCloseMobile}}"><-</button>\n\t\t\t\t\t\t\t{{btnSearch}}\n\t\t\t\t\t\t\t<input type="text" name="{{searchTermKey}}" placeholder="{{searchBoxPlaceholder}}" id="{{searchId}}" />\n\t\t\t\t\t\t\t<button type="button" class="{{class.searchSuggestionBtnClearMobile}}">X</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t';
                                }
                            },
                        },
                        {
                            key: "compileTemplate",
                            value: function () {
                                var t = "";
                                return (
                                    o.a.getSettingValue("search.showSearchBtnMobile") && (t = this.getTemplate(e.tempType.SEARCH_BTN)),
                                    this.getTemplate()
                                        .replace(/{{btnSearch}}/g, t)
                                        .replace(/{{searchTermKey}}/g, o.a.getSettingValue("search.termKey"))
                                        .replace(/{{searchBoxPlaceholder}}/g, a.a.suggestion.searchBoxPlaceholder)
                                        .replace(/{{searchId}}/g, this.inputMobileId)
                                        .replace(/{{class.searchSuggestion}}/g, f.searchSuggestion)
                                        .replace(/{{class.searchSuggestionBtnSubmitMobile}}/g, f.searchSuggestionBtnSubmitMobile)
                                        .replace(/{{class.searchSuggestionBtnCloseMobile}}/g, f.searchSuggestionBtnCloseMobile)
                                        .replace(/{{class.searchSuggestionBtnClearMobile}}/g, f.searchSuggestionBtnClearMobile)
                                );
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                r()("body").append(this.compileTemplate());
                            },
                        },
                        {
                            key: "isBindEvents",
                            value: function () {
                                return !this.isBoundEvents;
                            },
                        },
                        {
                            key: "bindEvents",
                            value: function () {
                                (this.$searchInput = r()(this.selector.searchInput)),
                                    (this.$clearButtonElement = r()(this.selector.clearButton)),
                                    (this.$closebuttonElement = r()(this.selector.closebutton)),
                                    (this.$submitButtonElement = r()(this.selector.submitButton)),
                                    (this.$topPanelElement = r()(this.selector.topPanel)),
                                    (this.$overlayElement = r()(this.selector.overlay)),
                                    (this.searchBox = new Xt(this.inputMobileId, this.$searchInput)),
                                    this.searchBox.refresh(),
                                    this.$closebuttonElement.on("click", this.closeInstantSearchMobile.bind(this, !0)),
                                    this.$clearButtonElement.on("click", this.clearInstantSearchMobile.bind(this)),
                                    (this.$searchInputs = r()(this.selector.searchInputs)),
                                    this.$searchInputs.on("click", this._onClickSearchBox.bind(this)).on("focus", this._onFocusSearchBox.bind(this)).on("keyup", this._onTypeSearchBoxEvent.bind(this)),
                                    (this.$targetInput = null),
                                    (this.isBoundEvents = !0);
                            },
                        },
                        {
                            key: "_onClickSearchBox",
                            value: function (t) {
                                p.a.isFullWidthMobile() &&
                                    (this.$targetInput && "" !== this.$targetInput.val() && this.$searchInputs.val(this.$targetInput.val()), this.$searchInput && "" !== this.$searchInput.val() && this.openSuggestionMobile());
                            },
                        },
                        {
                            key: "_onFocusSearchBox",
                            value: function (t) {
                                p.a.isFullWidthMobile() && (r()(t.target).is(this.$searchInput) || ((this.$targetInput = r()(t.target)), this.showSearchBoxMobile(), this.$searchInput.trigger("click")));
                            },
                        },
                        {
                            key: "_onTypeSearchBoxEvent",
                            value: function (t) {
                                p.a.InstantSearch.isFullWidthMobile() &&
                                    (this.searchBox.instantSearchResult.$wrapper.show(), "" == t.target.value ? (this.closeInstantSearchMobile(), this.$clearButtonElement.hide()) : this.$clearButtonElement.show());
                            },
                        },
                        {
                            key: "showSearchBoxMobile",
                            value: function () {
                                var t = this;
                                (this.isOpen = !0),
                                    this.onClickOutsideSuggestionMobileEvent(),
                                    this.scrollSuggestionMobileEvent(),
                                    "" == this.$searchInput.val() ? this.$clearButtonElement.hide() : this.$clearButtonElement.show(),
                                    this.$searchInput.is(":focus") ||
                                        (this.$topPanelElement.show(),
                                        this.$overlayElement.show(),
                                        r()("[tabindex=-1]").removeAttr("tabindex").addClass(f.searchSuggestionNoTabIndex),
                                        p.a.isMobile() && r()("[data-open=true]").length > 0 && r()("[data-open=true]").attr("data-open", !1),
                                        setTimeout(function () {
                                            t.$searchInput.focus();
                                        }, 100),
                                        this.afterShowSearchBoxMobile());
                            },
                        },
                        {
                            key: "closeInstantSearchMobile",
                            value: function (t) {
                                this.$searchInput.autocomplete("close"),
                                    this.searchBox.instantSearchResult.$wrapper.hide(),
                                    (t = void 0 !== t && t) && (this.$topPanelElement.hide(), this.$overlayElement.hide()),
                                    this._setValueAllSearchBoxes(),
                                    r()("." + f.searchSuggestionNoTabIndex).attr("tabindex", -1),
                                    r()("body").hasClass(f.searchSuggestionMobileOpen) && r()("body").removeClass(f.searchSuggestionMobileOpen),
                                    this.afterCloseInstantSearchMobile(t);
                            },
                        },
                        {
                            key: "clearInstantSearchMobile",
                            value: function () {
                                this.$clearButtonElement.hide(), (l.a.currentTerm = ""), this._setValueAllSearchBoxes(), this.closeInstantSearchMobile(), this.$searchInput.focus();
                            },
                        },
                        { key: "afterCloseInstantSearchMobile", value: function (t) {} },
                        {
                            key: "_setValueAllSearchBoxes",
                            value: function (t) {
                                (t = void 0 !== t ? searchTerm : l.a.currentTerm), this.$searchInputs.val(t);
                            },
                        },
                        {
                            key: "onClickOutsideSuggestionMobileEvent",
                            value: function () {
                                var t = this;
                                r()(document).on("touchstart", function (e) {
                                    var n = r()("." + f.searchSuggestion + "-mobile-top-panel");
                                    !n.is(e.target) && 0 == n.has(e.target).length && t.searchBox && 0 == t.searchBox.instantSearchResult.$wrapper.has(e.target).length && t.closeInstantSearchMobile(!0);
                                });
                            },
                        },
                        {
                            key: "scrollSuggestionMobileEvent",
                            value: function () {
                                var t = this;
                                r()(document).on("touchmove", function (e) {
                                    t.$searchInput.is(":focus") && t.$searchInput.blur();
                                });
                            },
                        },
                        { key: "afterShowSearchBoxMobile", value: function () {} },
                        {
                            key: "openSuggestionMobile",
                            value: function () {
                                this.beforeOpenSuggestionMobile(),
                                    r()("body").hasClass(f.searchSuggestionMobileOpen) || r()("body").addClass(f.searchSuggestionMobileOpen),
                                    this.showSearchBoxMobile(),
                                    this.$searchInput.autocomplete("search"),
                                    this.searchBox.instantSearchResult.$wrapper.show(),
                                    r()("html,body").scrollTop(),
                                    this.afterOpenSuggestionMobile();
                            },
                        },
                        { key: "beforeOpenSuggestionMobile", value: function () {} },
                        { key: "afterOpenSuggestionMobile", value: function () {} },
                    ]) && xt(n.prototype, i),
                    s && xt(n, s),
                    e
                );
            })(y),
            Ut = { InstantSearchResult: It, InstantSearchResultStyle2: $t, InstantSearchMobile: Nt },
            qt = {
                instantSearchResult: function (t, e) {
                    var n = o.a.getSettingValue("search.suggestionStyle"),
                        i = "InstantSearchResult" + p.a.capitalize(n, !0, !0);
                    return (Ut[i] && Ut[i].isActive()) || (i = "InstantSearchResult"), new Ut[i](t, e);
                },
                instantSearchMobile: function () {
                    var t = o.a.getSettingValue("search.suggestionMobileStyle");
                    "style1" == t && (t = "");
                    var e = "InstantSearchMobile" + p.a.capitalize(t, !0, !0);
                    return (Ut[e] && Ut[e].isActive()) || (e = "InstantSearchMobile"), new Ut[e]();
                },
            },
            Ht = function () {
                "string" != typeof l.a.currentTerm && (l.a.currentTerm = l.a.currentTerm.toString()), (l.a.currentTerm = l.a.currentTerm.trim());
                var t = "";
                l.a.suggestionCache.hasOwnProperty(l.a.currentTerm) &&
                    l.a.suggestionCache[l.a.currentTerm].forEach(function (e) {
                        "redirect" == e.key && e.values && (t = (t = (t = e.values).replace("https://" + l.a.shopDomain, "")).replace("http://" + l.a.shopDomain, ""));
                    });
                return t;
            },
            Gt = {
                getSearchRedirectUrl: Ht,
                checkForSearchRedirect: function (t) {
                    if (t.data("search-submit")) {
                        t.removeData("search-submit");
                        var e = Ht();
                        e ? (window.location.href = e) : t.closest("form").trigger("submit", [!0]);
                    }
                },
            };
        function Wt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        var zt = (function () {
            function t(e) {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                    (this.autocomplete = e),
                    this.init()
                );
            }
            var e, n, i;
            return (
                (e = t),
                (n = [
                    {
                        key: "init",
                        value: function () {
                            var t = this.autocomplete.menu,
                                e = "." + f.searchSuggestionItem + "." + f.searchUiAutocompleteItem;
                            return (
                                t._setOption("items", e), t._setOption("blur", this._blur.bind(t)), (t.isFirstItem = this._isFirstItem.bind(t)), (t.isLastItem = this._isLastItem.bind(t)), (t._move = this._move.bind(t)), this.autocomplete
                            );
                        },
                    },
                    {
                        key: "_blur",
                        value: function (t, e) {
                            e.item && r()(e.item).removeClass("selected");
                        },
                    },
                    {
                        key: "_isFirstItem",
                        value: function () {
                            return !!this.active && !this.element.find(this.options.items).index(this.active);
                        },
                    },
                    {
                        key: "_isLastItem",
                        value: function () {
                            if (this.active) {
                                var t = this.element.find(this.options.items),
                                    e = t.index(this.active) + 1;
                                return !(t.length - e);
                            }
                            return !1;
                        },
                    },
                    {
                        key: "_move",
                        value: function (t, e, n) {
                            var i,
                                r = this.element.find(this.options.items);
                            if (this.active)
                                if ("first" === t || "last" === t);
                                else {
                                    var o = 0;
                                    (o = "next" == t ? r.index(this.active) + 1 : r.index(this.active) - 1), (i = r.eq(o));
                                }
                            (i && i.length && this.active) || (i = this.element.find(this.options.items)[e]()), i.addClass("selected"), this.focus(n, i);
                        },
                    },
                ]) && Wt(e.prototype, n),
                i && Wt(e, i),
                t
            );
        })();
        function Kt(t) {
            return (Kt =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Yt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Qt(t, e) {
            return !e || ("object" !== Kt(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Jt(t) {
            return (Jt = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Zt(t, e) {
            return (Zt =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Xt = (function (t) {
            function e(t, n) {
                var i;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((i = Qt(this, Jt(e).call(this))).id = t),
                    (i.autocomplete = null),
                    (i.instantSearchResult = null),
                    (i.isRendered = !1),
                    (i.isBoundEvents = !1),
                    (i.$element = n || r()("#" + i.id)),
                    (i.$searchForm = i.$element.closest("form")),
                    (i.$uiMenuElement = null),
                    i
                );
            }
            var n, i, s;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Zt(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            (this.instantSearchResult = qt.instantSearchResult(this.id, this.$element)), this.addComponent(this.instantSearchResult);
                        },
                    },
                    {
                        key: "isRender",
                        value: function () {
                            return !this.isRendered;
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t = p.a.getParam(l.a.searchTermKey);
                            this.$element
                                .val(t)
                                .addClass(f.searchBox)
                                .attr("id", this.id)
                                .attr("data-search-box", this.id)
                                .attr("aria-live", "assertive")
                                .attr("aria-label", a.a.suggestion.searchBoxPlaceholder)
                                .attr("placeholder", a.a.suggestion.searchBoxPlaceholder),
                                (this.isRendered = !0);
                        },
                    },
                    {
                        key: "isBindEvents",
                        value: function () {
                            return !this.isBoundEvents;
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            this.$element.autocomplete({
                                appendTo: this.instantSearchResult.selector.wrapper,
                                minLength: o.a.getSettingValue("search.suggestionMinLength"),
                                delay: o.a.getSettingValue("search.suggestionDelay"),
                                classes: { "ui-autocomplete": f.searchSuggestion },
                                source: this._bindAutoCompleteSource.bind(this),
                                response: this._bindAutoCompleteResponse.bind(this),
                                position: {
                                    using: function () {
                                        return !1;
                                    },
                                },
                                focus: this.onFocusAutocomplete.bind(this),
                                select: this.onSelectAutocomplete.bind(this),
                                open: this.onOpenAutocomplete.bind(this),
                                close: this.onCloseAutocomplete.bind(this),
                            }),
                                (this.autocomplete = this.$element.autocomplete("instance")),
                                (this.$uiMenuElement = this.autocomplete.menu.element),
                                (this.autocomplete._renderMenu = this._bindAutoCompleteRenderMenu.bind(this)),
                                (this.autocomplete._resizeMenu = this._bindAutoCompleteResizeMenu.bind(this)),
                                (this.autocomplete = new zt(this.autocomplete)),
                                this.$element.on("click", this._onClickSearchBox.bind(this)).on("focus", this._onFocusSearchBox.bind(this)).on("keyup", this._onTypeSearchBoxEvent.bind(this)),
                                this.$searchForm.length && this.$searchForm.on("submit", this._onSubmit.bind(this)),
                                (this.isBoundEvents = !0);
                        },
                    },
                    {
                        key: "_bindAutoCompleteSource",
                        value: function (t, e) {
                            (window.suggestionCallback = e), (l.a.currentTerm = t.term);
                            var n = t.term.trim().replace(/\s+/g, " ");
                            if ("" != (n = encodeURIComponent(n))) {
                                var i = this.autocomplete.menu.element;
                                if ((this.instantSearchResult.setData(i, null, !0), this.instantSearchResult.refresh(), n in l.a.suggestionCache)) return void window.suggestionCallback(l.a.suggestionCache[n]);
                                d.default.getSuggestionData(n, 0, "suggest");
                            }
                        },
                    },
                    {
                        key: "_bindAutoCompleteResponse",
                        value: function (t, e) {
                            var n = e.content,
                                i = p.a.getValueInObjectArray("query", n),
                                r = p.a.getValueInObjectArray("event_type", n),
                                o = p.a.getValueInObjectArray("suggest_query", n),
                                a = p.a.getValueInObjectArray("local_cache", n);
                            p.a.getValueInObjectArray("redirect", n),
                                25 == Object.keys(l.a.suggestionCache).length && (l.a.suggestionCache = {}),
                                i in l.a.suggestionCache || "suggest_dym" == r || (l.a.suggestionCache[i] = n),
                                "" == o || "suggest" != r || a || d.default.getSuggestionData(o, 0, "suggest_dym", i),
                                Gt.checkForSearchRedirect(this.$element);
                        },
                    },
                    {
                        key: "_bindAutoCompleteRenderMenu",
                        value: function (t, e) {
                            this.instantSearchResult.setData(r()(t), e, !1), this.instantSearchResult.refresh();
                        },
                    },
                    {
                        key: "_bindAutoCompleteResizeMenu",
                        value: function () {
                            this.customizeInstantSearch();
                        },
                    },
                    { key: "customizeInstantSearch", value: function () {} },
                    {
                        key: "onFocusAutocomplete",
                        value: function (t, e) {
                            return this.autocomplete.widget(), !(!e.item || void 0 === e.item.label);
                        },
                    },
                    {
                        key: "onOpenAutocomplete",
                        value: function (t, e) {
                            var n = this;
                            p.a.isiOS() &&
                                r()("." + f.searchSuggestionItem + " a")
                                    .on("touchstart", function () {
                                        isScrolling = !1;
                                    })
                                    .on("touchmove", function () {
                                        isScrolling = !0;
                                    })
                                    .on("touchend", function () {
                                        isScrolling || (window.location = r()(n).attr("href"));
                                    }),
                                p.a.InstantSearch.isFullWidthMobile() && !r()("body").hasClass(f.searchSuggestionMobileOpen) && r()("body").addClass(f.searchSuggestionMobileOpen),
                                this.instantSearchResult.$wrapper.addClass(f.searchSuggestionOpen);
                        },
                    },
                    {
                        key: "onCloseAutocomplete",
                        value: function (t, e) {
                            "test" == o.a.getSettingValue("search.suggestionMode") || p.a.InstantSearch.isFullWidthMobile()
                                ? this.instantSearchResult.$instantSearchResult.show()
                                : this.instantSearchResult.$instantSearchResult.siblings().hide(),
                                this.instantSearchResult.$wrapper.removeClass(f.searchSuggestionOpen);
                        },
                    },
                    {
                        key: "onSelectAutocomplete",
                        value: function (t, e) {
                            var n = this.autocomplete.widget().find("." + f.searchSuggestionItem + ".selected");
                            if (n.length) {
                                var i = n.find("> a");
                                i.length && (window.location.href = i.eq(0).attr("href"));
                            }
                            return !1;
                        },
                    },
                    {
                        key: "_onClickSearchBox",
                        value: function (t) {
                            "" != this.$element.val() && (p.a.InstantSearch.isFullWidthMobile() || (this.$element.data("ui-autocomplete") && this.$element.autocomplete("search", this.$element.val())));
                        },
                    },
                    { key: "_onFocusSearchBox", value: function (t) {} },
                    {
                        key: "_onTypeSearchBoxEvent",
                        value: function (t) {
                            l.a.currentTerm = t.target.value;
                        },
                    },
                    {
                        key: "_onSubmit",
                        value: function (t, e) {
                            if (!e) {
                                t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), (l.a.currentTerm = this.$element.val()), !l.a.currentTerm && t && t.target && (l.a.searchTerm = t.target.value);
                                var n = Gt.getSearchRedirectUrl();
                                l.a.suggestionCache.hasOwnProperty(l.a.currentTerm.toString().trim()) ? (n ? (window.location.href = n) : this.$searchForm.trigger("submit", [!0])) : this.$element.data("search-submit", !0);
                            }
                        },
                    },
                ]) && Yt(n.prototype, i),
                s && Yt(n, s),
                e
            );
        })(y);
        n(39), n(96);
        function te(t) {
            return (te =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function ee(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function ne(t, e) {
            return !e || ("object" !== te(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function ie(t) {
            return (ie = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function re(t, e) {
            return (re =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var oe = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = ne(this, ie(e).call(this))).data = null),
                    (t.id = null),
                    (t.totalProduct = null),
                    (t.$element = null),
                    (t.$productList = r()(c.products)),
                    (t.settings = { enableKeepScrollbackPosition: o.a.getSettingValue("general.enableKeepScrollbackPosition") }),
                    t
                );
            }
            var n, i, a;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && re(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            window.BoostOTP &&
                                BoostOTP.QuickView &&
                                BoostOTP.AddToCart &&
                                (o.a.getSettingValue("actionlist.atcEnable") && ((this.addToCart = new BoostOTP.AddToCart()), this.addComponent(this.addToCart)),
                                o.a.getSettingValue("actionlist.qvEnable") && ((this.quickView = new BoostOTP.QuickView()), this.addComponent(this.quickView)));
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return "";
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            if (!this.$element || 0 == this.$element.length)
                                if (this.parent.isRender()) {
                                    var t = this.compileTemplate();
                                    t && "string" == typeof t && (this.$element = r()(t));
                                } else this.$element = this.$productList.children().eq(this.index);
                            this.$element && (this.$element.attr("data-id", this.id), this.$element.data("page", l.a.queryParams.page), this.renderOTP());
                        },
                    },
                    {
                        key: "renderOTP",
                        value: function () {
                            if ((this.quickView && this.quickView.$element) || (this.addToCart && this.addToCart.$element)) {
                                var t = '<div class="boost-pfs-action-list-wrapper boost-pfs-action-extend"></div>';
                                c.otpButtons ? this.$element.find(c.otpButtons).append(t) : this.$element.append(t),
                                    this.$element.addClass("boost-pfs-action-list-enabled"),
                                    this.$element.find("img").parent().addClass("boost-pfs-action-overlay"),
                                    ((this.quickView && !this.addToCart) || (this.addToCart && !this.quickView)) && this.$element.addClass("boost-pfs-action-list-single-button"),
                                    ((this.quickView && !this.addToCart) || (this.addToCart && !this.quickView)) && this.$element.addClass("boost-pfs-action-list-single-button");
                                var e = o.a.getSettingValue("actionlist.alStyle");
                                ["bc-al-style3", "bc-al-style4"].includes(e)
                                    ? (this.addToCart && this.addToCart.$element && this.$element.find(".boost-pfs-action-list-wrapper").append(this.addToCart.$element),
                                      this.quickView && this.quickView.$element && this.$element.find(".boost-pfs-action-list-wrapper").append(this.quickView.$element))
                                    : (this.quickView && this.quickView.$element && this.$element.find(".boost-pfs-action-list-wrapper").append(this.quickView.$element),
                                      this.addToCart && this.addToCart.$element && this.$element.find(".boost-pfs-action-list-wrapper").append(this.addToCart.$element)),
                                    this.$productList.hasClass(e) || this.$productList.addClass(e);
                            }
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            this._bindKeepScrollbackPositionEvent(),
                                this.$element && this.$element.find(".boost-pfs-action-list-wrapper").length > 0 && (this._calculateOTPPosition(), this.$element.on("mouseenter", this._calculateOTPPosition.bind(this)));
                        },
                    },
                    {
                        key: "_calculateOTPPosition",
                        value: function () {
                            var t = this.$element.find("img"),
                                e = this.$element.find(".boost-pfs-action-list-wrapper"),
                                n = this.$element.outerWidth() - parseInt(this.$element.css("padding-left")) - parseInt(this.$element.css("padding-right"));
                            if (t.length > 0 && e.length > 0) {
                                var i = this.$element[0].getBoundingClientRect(),
                                    r = t[0].getBoundingClientRect(),
                                    a = e[0].getBoundingClientRect(),
                                    l = o.a.getSettingValue("actionlist.alStyle"),
                                    s = 0;
                                if ((s = ["bc-al-style5", "bc-al-style6"].includes(l) ? (r.bottom - i.top - a.height) / 2 : r.bottom - i.top - a.height) <= 0) return;
                                this.$element.find(".boost-pfs-action-list-wrapper").css({ top: s + "px", width: n + "px", visibility: "visible" });
                            }
                        },
                    },
                    {
                        key: "_bindKeepScrollbackPositionEvent",
                        value: function () {
                            if (this.$element && this.settings.enableKeepScrollbackPosition)
                                if (p.a.isMobile()) {
                                    var t = !1;
                                    this.$element
                                        .on("touchstart", function () {
                                            t = !1;
                                        })
                                        .on("touchmove", function () {
                                            t = !0;
                                        })
                                        .on("touchend", this._onClickKeepPositionEvent.bind(this, t));
                                } else this.$element.on("click", this._onClickKeepPositionEvent.bind(this, !1));
                        },
                    },
                    {
                        key: "_onClickKeepPositionEvent",
                        value: function (t, e) {
                            if (!t && this.id) {
                                var n = new URL(window.location.href),
                                    i = { productId: this.id, page: this.$element.data("page") };
                                null !== n.searchParams.get("page") && n.searchParams.delete("page"),
                                    i.page > 1 && p.a.FilterResult.isAdvancedPaginationType() && n.searchParams.append("page", i.page),
                                    window.history.replaceState(i, "", n.toString().replace(/\+/g, "%20"));
                            }
                        },
                    },
                    {
                        key: "setData",
                        value: function (t, e) {
                            (this.data = t), (this.id = t.id), (this.index = e), (this.totalProduct = this.parent.totalProduct);
                        },
                    },
                ]) && ee(n.prototype, i),
                a && ee(n, a),
                e
            );
        })(y);
        function ae(t) {
            return (ae =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function le(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function se(t, e) {
            return !e || ("object" !== ae(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function ce(t) {
            return (ce = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function ue(t, e) {
            return (ue =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var pe = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    se(this, ce(e).call(this))
                );
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && ue(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "compileTemplate",
                        value: function () {
                            throw Error("Missing buildProductGridItem function in theme lib");
                        },
                    },
                ]) && le(n.prototype, i),
                r && le(n, r),
                e
            );
        })(oe);
        function fe(t) {
            return (fe =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function he(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function ye(t, e) {
            return !e || ("object" !== fe(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function de(t) {
            return (de = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function ge(t, e) {
            return (ge =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var me = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ye(this, de(e).call(this))
                );
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && ge(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "compileTemplate",
                        value: function () {
                            throw Error("Missing buildProductListItem function in theme lib");
                        },
                    },
                ]) && he(n.prototype, i),
                r && he(n, r),
                e
            );
        })(oe);
        function be(t) {
            return (be =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function ve(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Se(t, e) {
            return !e || ("object" !== be(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Oe(t) {
            return (Oe = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Te(t, e) {
            return (Te =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Pe = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    Se(this, Oe(e).call(this))
                );
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Te(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "compileTemplate",
                        value: function () {
                            throw Error("Missing buildProductCollageItem function in theme lib");
                        },
                    },
                ]) && ve(n.prototype, i),
                r && ve(n, r),
                e
            );
        })(oe);
        n(59), n(77), n(162);
        function we(t) {
            return (we =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function _e(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Ce(t, e) {
            return !e || ("object" !== we(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function ke(t) {
            return (ke = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Ee(t, e) {
            return (Ee =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Ie = (function (t) {
                function e() {
                    var t;
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        ((t = Ce(this, ke(e).call(this))).$element = r()(c.searchTopPanels)),
                        (t.data = null),
                        (t.panelItems = []),
                        (t.eventType = "init"),
                        (t.selector = {
                            products: c.products,
                            collections: c.collections,
                            pages: c.pages,
                            filterTree: c.filterTree,
                            pagination: c.pagination,
                            searchPanelsProductShow: c.searchPanelsProductShow,
                            searchPanelsCollectionShow: c.searchPanelsCollectionShow,
                            searchPanelsPageShow: c.searchPanelsPageShow,
                        }),
                        (t.settings = {
                            searchPanelDefault: o.a.getSettingValue("search.searchPanelDefault"),
                            searchPanelList: o.a.getSettingValue("search.searchPanelList"),
                            searchPanelBlocks: o.a.getSettingValue("search.searchPanelBlocks"),
                        }),
                        (t.isFetchedFilterData = !1),
                        t
                    );
                }
                var n, i, a;
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Ee(t, e);
                    })(e, t),
                    (n = e),
                    (a = [
                        {
                            key: "isPanelActive",
                            value: function (t) {
                                return !p.a.isSearchPage() || e.getPanelActive() == t;
                            },
                        },
                        {
                            key: "getPanelActive",
                            value: function () {
                                return Globals.hasOwnProperty("searchDisplay") && Object.values(Ke.Enum).indexOf(Globals.searchDisplay) > -1 ? Globals.searchDisplay : o.a.getSettingValue("search.searchPanelDefault");
                            },
                        },
                    ]),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                var t = this;
                                (this.panelItems = []),
                                    this.settings.searchPanelList.forEach(function (e) {
                                        var n = t.settings.searchPanelBlocks[e],
                                            i = new Ke(n, e);
                                        t.addComponent(i), t.panelItems.push(i);
                                    });
                            },
                        },
                        {
                            key: "isRender",
                            value: function () {
                                return p.a.isSearchPage() && "init" == this.eventType && this.isFetchedFilterData;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = [];
                                switch (
                                    (this.panelItems.forEach(function (e) {
                                        t.push(e.$element);
                                    }),
                                    this.$element.html(t),
                                    e.getPanelActive())
                                ) {
                                    case Ke.Enum.COLLECTION:
                                        this.showPanelCollection();
                                        break;
                                    case Ke.Enum.PAGE:
                                        this.showPanelPage();
                                        break;
                                    default:
                                        this.showPanelProduct();
                                }
                            },
                        },
                        {
                            key: "hidePanelProduct",
                            value: function () {
                                r()(this.selector.products).addClass(f.hidden),
                                    r()(this.selector.filterTree).addClass(f.hidden),
                                    r()(this.selector.pagination).addClass(f.hidden),
                                    r()(this.selector.searchPanelsProductShow).addClass(f.hidden);
                            },
                        },
                        {
                            key: "hidePanelCollection",
                            value: function () {
                                r()(this.selector.collections).parent().addClass(f.hidden), r()(this.selector.searchPanelsCollectionShow).addClass(f.hidden);
                            },
                        },
                        {
                            key: "hidePanelPage",
                            value: function () {
                                r()(this.selector.pages).parent().addClass(f.hidden), r()(this.selector.searchPanelsPageShow).addClass(f.hidden);
                            },
                        },
                        {
                            key: "showPanelCollection",
                            value: function () {
                                this.hidePanelProduct(), this.hidePanelPage(), r()(this.selector.collections).parent().removeClass(f.hidden), r()(this.selector.searchPanelsCollectionShow).removeClass(f.hidden);
                            },
                        },
                        {
                            key: "showPanelPage",
                            value: function () {
                                this.hidePanelProduct(), this.hidePanelCollection(), r()(this.selector.pages).parent().removeClass(f.hidden), r()(this.selector.searchPanelsPageShow).removeClass(f.hidden);
                            },
                        },
                        {
                            key: "showPanelProduct",
                            value: function () {
                                this.hidePanelCollection(),
                                    this.hidePanelPage(),
                                    r()(this.selector.products).removeClass(f.hidden),
                                    r()(this.selector.filterTree).removeClass(f.hidden),
                                    r()(this.selector.pagination).removeClass(f.hidden),
                                    r()(this.selector.searchPanelsProductShow).removeClass(f.hidden);
                            },
                        },
                        {
                            key: "setData",
                            value: function (t, e) {
                                (this.isFetchedFilterData = !0),
                                    t && (this.data = t),
                                    (this.eventType = e),
                                    this.panelItems.forEach(function (n) {
                                        n.setData(t, e);
                                    });
                            },
                        },
                    ]) && _e(n.prototype, i),
                    a && _e(n, a),
                    e
                );
            })(y),
            Le = n(5);
        function Ae(t) {
            return (Ae =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Fe(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Re(t, e) {
            return !e || ("object" !== Ae(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function je(t) {
            return (je = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function $e(t, e) {
            return ($e =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Be = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = Re(this, je(e).call(this))).data = null),
                    (t.totalProduct = null),
                    (t.paginationType = ""),
                    (t.$loadMore = r()(c.loadMore)),
                    (t.settings = { limit: o.a.getSettingValue("general.limit"), showLoading: o.a.getSettingValue("general.showLoading"), showLoadMoreLoading: o.a.getSettingValue("general.showLoadMoreLoading") }),
                    t
                );
            }
            var n, i, a;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && $e(t, e);
                })(e, t),
                (n = e),
                (a = [
                    {
                        key: "Type",
                        get: function () {
                            return { DEFAULT: "default", LOAD_MORE: "load_more", INFINITE: "infinite" };
                        },
                    },
                ]),
                (i = [
                    {
                        key: "isRender",
                        value: function () {
                            return null !== this.data;
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            t && (this.data = t), (this.totalProduct = this.parent.totalProduct), (this.paginationType = o.a.getSettingValue("general.paginationType"));
                        },
                    },
                    {
                        key: "showLoading",
                        value: function () {
                            this.settings.showLoadMoreLoading && !1 === this.settings.showLoading && this.$loadMore.find(c.loadMoreLoading).show();
                        },
                    },
                    {
                        key: "hideLoading",
                        value: function () {
                            this.settings.showLoadMoreLoading && this.$loadMore.find(c.loadMoreLoading).hide();
                        },
                    },
                ]) && Fe(n.prototype, i),
                a && Fe(n, a),
                e
            );
        })(y);
        function xe(t) {
            return (xe =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Me(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function De(t, e) {
            return !e || ("object" !== xe(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Ve(t) {
            return (Ve = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Ne(t, e) {
            return (Ne =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Ue = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = De(this, Ve(e).call(this))).$element = r()(c.pagination)),
                    (t.$buttomElement = r()(c.bottomPagination)),
                    (t.$productList = r()(c.products)),
                    t
                );
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Ne(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "compileTemplate",
                        value: function () {
                            return "";
                        },
                    },
                    {
                        key: "isRender",
                        value: function () {
                            return null !== this.data;
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            r()(c.pagination).html(this.compileTemplate());
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            this.$element.show(), this.$element.find("a").unbind("click"), this.$element.find("a").on("click", this._onClickEvent.bind(this));
                        },
                    },
                    {
                        key: "_onClickEvent",
                        value: function (t) {
                            t.preventDefault(), (l.a.internalClick = !0);
                            var e = r()(t.currentTarget).attr("href");
                            Le.default.updateParamsFromUrl(e), Le.default.applyFilter("page"), r()("body,html").animate({ scrollTop: this.$productList.offset().top - 50 }, 600);
                        },
                    },
                ]) && Me(n.prototype, i),
                o && Me(n, o),
                e
            );
        })(Be);
        function qe(t) {
            return (qe =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function He(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Ge(t, e) {
            return !e || ("object" !== qe(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function We(t) {
            return (We = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function ze(t, e) {
            return (ze =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Ke = (function (t) {
            function e(t, n) {
                var i;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((i = Ge(this, We(e).call(this))).$element = null),
                    (i.data = t),
                    (i.type = n),
                    (i.eventType = "init"),
                    (i.isRenderPanelContent = !1),
                    (i.limit = 25),
                    (i.page = 1),
                    (i.active = t.active),
                    i.type == e.Enum.PRODUCT ? ((i.limit = Settings.getSettingValue("general.limit")), (i.page = l.a.queryParams.page)) : t.hasOwnProperty("pageSize") && (i.limit = parseInt(t.pageSize)),
                    i
                );
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && ze(t, e);
                })(e, t),
                (n = e),
                (o = [
                    {
                        key: "Enum",
                        get: function () {
                            return { COLLECTION: "collections", PRODUCT: "products", PAGE: "pages" };
                        },
                    },
                ]),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<li class="{{class.searchResultPanelItem}}">\n\t\t\t\t<button>{{panelItemLabel}} ({{panelItemCount}})</button>\n\t\t\t</li>\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            var t = "";
                            switch (this.type) {
                                case e.Enum.COLLECTION:
                                    t = a.a.search.searchPanelCollection;
                                    break;
                                case e.Enum.PAGE:
                                    t = a.a.search.searchPanelPage;
                                    break;
                                default:
                                    t = a.a.search.searchPanelProduct;
                            }
                            var n = this.data.hasOwnProperty("label") ? this.data.label : t;
                            return this.getTemplate()
                                .replace(/{{panelItemLabel}}/g, n)
                                .replace(/{{panelItemCount}}/g, this.totalResult)
                                .replace(/{{class.searchResultPanelItem}}/g, f.searchResultPanelItem);
                        },
                    },
                    {
                        key: "isActive",
                        value: function () {
                            return Ie.isPanelActive(this.type);
                        },
                    },
                    {
                        key: "isRender",
                        value: function () {
                            return this.type == e.Enum.PRODUCT || (this.active && this.totalResult && "init" == this.eventType);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            (this.$element = r()(this.compileTemplate())), this.isActive() && this.$element.addClass("active");
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            this.$element && this.$element.on("click", this._onClickPanelItem.bind(this));
                        },
                    },
                    {
                        key: "setData",
                        value: function (t, n) {
                            var i = 0;
                            switch (((this.eventType = n), this.type)) {
                                case e.Enum.COLLECTION:
                                    i = t.total_collection;
                                    break;
                                case e.Enum.PAGE:
                                    i = t.total_page;
                                    break;
                                default:
                                    i = t.total_product;
                            }
                            (this.totalResult = i), this.type == e.Enum.PRODUCT && (this.page = l.a.queryParams.page);
                        },
                    },
                    {
                        key: "_onClickPanelItem",
                        value: function (t) {
                            t.preventDefault(), (l.a.searchDisplay = this.type), Le.default.setParam("limit", this.limit), Le.default.setParam("page", this.page);
                            var n = this.parent,
                                i = n.parent.searchResultTotal;
                            switch (
                                (this.isRenderPanelContent || this.type === e.Enum.PRODUCT || Le.default.getFilterData("search", this._searchPanelCallback.bind(this)),
                                this.$element.addClass("active"),
                                this.$element.siblings().removeClass("active"),
                                this.type)
                            ) {
                                case e.Enum.COLLECTION:
                                    n.showPanelCollection();
                                    break;
                                case e.Enum.PAGE:
                                    n.showPanelPage();
                                    break;
                                default:
                                    n.showPanelProduct();
                            }
                            i.setData(this.totalResult, this.type), i.refresh(), (this.isRenderPanelContent = !0);
                        },
                    },
                    {
                        key: "_searchPanelCallback",
                        value: function (t) {
                            var n = this.parent.parent.collectionList,
                                i = this.parent.parent.collectionListPagination,
                                r = !!t.hasOwnProperty("total_collection") && t.total_collection;
                            l.a.searchDisplay === e.Enum.PAGE && ((n = this.parent.parent.pageList), (i = this.parent.parent.pageListPagination), (r = !!t.hasOwnProperty("total_page") && t.total_page)),
                                n.setData(t),
                                n.refresh(),
                                i.setData(t, r, this.limit, this.page),
                                i.refresh();
                        },
                    },
                    {
                        key: "_onClickEvent",
                        value: function (t) {
                            t.preventDefault();
                        },
                    },
                    {
                        key: "_refreshPagination",
                        value: function () {
                            var t = this.parent.parent.pagination;
                            (t.totalProduct = this.totalResult), t.refresh();
                        },
                    },
                ]) && He(n.prototype, i),
                o && He(n, o),
                e
            );
        })(y);
        function Ye(t) {
            return (Ye =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Qe(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Je(t, e) {
            return !e || ("object" !== Ye(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Ze(t) {
            return (Ze = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Xe(t, e) {
            return (Xe =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var tn = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = Je(this, Ze(e).call(this))).data = null),
                    (t.totalProduct = null),
                    (t.$element = r()(c.products)),
                    (t.settings = {
                        loadProductFromLiquid: o.a.getSettingValue("general.loadProductFromLiquid"),
                        loadProductFromLiquidType: o.a.getSettingValue("general.loadProductFromLiquidType"),
                        sessionStoragePreviousPageEvent: o.a.getSettingValue("general.sessionStoragePreviousPageEvent"),
                        themeId: o.a.getSettingValue("general.theme_id"),
                        productAndVariantAvailable: o.a.getSettingValue("general.productAndVariantAvailable"),
                        sortingAvailableFirst: o.a.getSettingValue("general.sortingAvailableFirst"),
                    }),
                    t
                );
            }
            var n, i, s;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Xe(t, e);
                })(e, t),
                (n = e),
                (s = [
                    {
                        key: "Enum",
                        get: function () {
                            return { itemStyle: { GRID: "grid", LIST: "list", COLLAGE: "collage" }, loadProductType: { JS: "js", AJAX: "ajax", SYNC: "sync" } };
                        },
                    },
                ]),
                (i = [
                    {
                        key: "isRender",
                        value: function () {
                            return (
                                null != this.data &&
                                Ie.isPanelActive(Ke.Enum.PRODUCT) &&
                                (!l.a.loadProductFirst ||
                                    p.a.isSearchPage() ||
                                    p.a.isVendorPage() ||
                                    p.a.isTagPage() ||
                                    p.a.isTypePage() ||
                                    "best-selling" === l.a.defaultSorting ||
                                    this.settings.productAndVariantAvailable ||
                                    this.settings.sortingAvailableFirst ||
                                    (l.a.loadProductFirst && (l.a.hasFilterOptionParam || "init" != this.eventType)))
                            );
                        },
                    },
                    {
                        key: "getNoResultTemplate",
                        value: function () {
                            return '\n\t\t\t<div class="boost-pfs-filter-message"><p><em>{{content}}</em></p></div>\n\t\t';
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            this._catchError(), this.totalProduct > 0 && (this.settings.loadProductFromLiquid ? this.buildProductListDataFromLiquid() : this.buildProductList());
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            this._bindKeepScrollbackPositionEvent();
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            var e = this;
                            if (
                                ((this.data = t),
                                (this.totalProduct = this.parent.totalProduct),
                                this.prepareProductData(),
                                (this.eventType = this.parent.eventType),
                                (this.children = []),
                                (this.productItems = []),
                                (this.ajaxPage = 0),
                                this.totalProduct > 0)
                            ) {
                                var n = this._getProductItemClass();
                                t.forEach(function (t, i) {
                                    var r = new n();
                                    e.addComponent(r), r.setData(t, i), e.productItems.push(r);
                                });
                            }
                        },
                    },
                    {
                        key: "_getProductItemClass",
                        value: function () {
                            switch (l.a.queryParams.display) {
                                case e.Enum.itemStyle.LIST:
                                    return me;
                                case e.Enum.itemStyle.COLLAGE:
                                    return Pe;
                                default:
                                    return pe;
                            }
                        },
                    },
                    {
                        key: "buildProductListDataFromLiquid",
                        value: function () {
                            p.a.isDefaultPaginationType() || "page" != this.eventType || r()(window).off("scroll"),
                                this.settings.loadProductFromLiquidType == e.Enum.loadProductType.SYNC ? this._getProductListHtmlBySync() : this._getProductListHtmlByAjax();
                        },
                    },
                    {
                        key: "prepareProductData",
                        value: function () {
                            var t = this.data;
                            return Array.isArray(t)
                                ? (t.forEach(function (t) {
                                      var e = [];
                                      t.options_with_values.forEach(function (t) {
                                          e.push(t.name);
                                      }),
                                          (t.options = e);
                                      var n = t.variants[0],
                                          i = !0;
                                      n.hasOwnProperty("fulfillment_service") && "gift_card" == n.fulfillment_service && (i = !1),
                                          (t.price_min = p.a.convertPriceBasedOnActiveCurrency(t.price_min, i)),
                                          (t.price_max = p.a.convertPriceBasedOnActiveCurrency(t.price_max, i)),
                                          (t.compare_at_price_min = p.a.convertPriceBasedOnActiveCurrency(t.compare_at_price_min, i)),
                                          (t.compare_at_price_max = p.a.convertPriceBasedOnActiveCurrency(t.compare_at_price_max, i)),
                                          t.variants.forEach(function (t) {
                                              var e = [],
                                                  n = t.merged_options;
                                              if (Array.isArray(n)) {
                                                  for (var r = 0; r < n.length; r++) {
                                                      var o = n[r].split(":");
                                                      (t["option" + (parseInt(r) + 1)] = o[1]), (t["option_" + o[0]] = o[1]), e.push(o[1]);
                                                  }
                                                  t.options = e;
                                              }
                                              if (null != t.compare_at_price) {
                                                  var a = parseFloat(t.compare_at_price);
                                                  (a = p.a.convertPriceBasedOnActiveCurrency(a, i)), (t.compare_at_price = a);
                                              }
                                              var l = parseFloat(t.price);
                                              (l = p.a.convertPriceBasedOnActiveCurrency(l, i)), (t.price = l);
                                          }),
                                          (t.description = t.body_html),
                                          (t.featured_image = Array.isArray(t.images) && t.images.length > 0 ? t.images[0] : boostPFSConfig.general.no_image_url);
                                  }),
                                  t)
                                : [];
                        },
                    },
                    {
                        key: "buildProductList",
                        value: function () {
                            var t = [];
                            this.productItems.forEach(function (e) {
                                t.push(e.$element);
                            }),
                                this.$element.removeAttr("data-boost-sort"),
                                (p.a.isDefaultPaginationType() || (!p.a.isDefaultPaginationType() && "page" != this.eventType)) && (this.$element.html(""), r()(window).unbind("scroll")),
                                p.a.isLoadPreviousPagePaginationType() && parseInt(window.sessionStorage.getItem(this.settings.sessionStoragePreviousPageEvent)) ? this.$element.prepend(t) : this.$element.append(t),
                                this.settings.loadProductFromLiquid && this.settings.loadProductFromLiquidType == e.Enum.loadProductType.AJAX && this.afterRender();
                        },
                    },
                    {
                        key: "buildExtrasProductListByAjax",
                        value: function (t, e, n, i, o, a) {
                            o || (o = 0), a || (a = []), (!i || i > 20) && (i = 20);
                            for (var l = i * o, s = Math.min(t.length, i * (o + 1)), c = [], u = l; u < s; u++) c.push(t[u].handle);
                            var p = "/collections/all/" + c.join("+") + "?view=" + e;
                            r.a.ajax({
                                type: "GET",
                                url: p,
                                success: function (r) {
                                    this._onExtraProductListAjaxSuccess(t, e, n, i, o, r, a);
                                }.bind(this),
                            });
                        },
                    },
                    {
                        key: "_getProductListHtmlByAjax",
                        value: function () {
                            (this.isFetchedAjaxProductData = !1), this.$element.addClass(f.productWrapLoading);
                            for (var t = 20 * this.ajaxPage, e = Math.min(this.data.length, 20 * (this.ajaxPage + 1)), n = [], i = t; i < e; i++) n.push(this.data[i].handle);
                            var o = n.join("+");
                            r.a.ajax({ type: "GET", url: "/collections/all/" + o + "?view=boost-pfs-product-item", success: this._onProductListAjaxSuccess.bind(this) });
                        },
                    },
                    {
                        key: "_getProductListHtmlBySync",
                        value: function () {
                            var t = this.settings.themeId,
                                e = !1;
                            this.productItems.forEach(function (n, i) {
                                e || (n.data.html && n.data.html.value && t && t == n.data.html.theme_id ? ((n.data.html = n.data.html.value), n.refresh()) : (e = !0));
                            }),
                                e ? this._getProductListHtmlByAjax() : this.buildProductList();
                        },
                    },
                    {
                        key: "_onProductListAjaxSuccess",
                        value: function (t) {
                            var e = this,
                                n = [];
                            try {
                                /<\!--.*?-->/.test(t) && (t = t.replace(/<\!--.*?-->/g, "")), (n = JSON.parse(t).products);
                            } catch (t) {
                                throw new Error("Could not parse json from collection.boost-pfs-product-item.liquid");
                            }
                            n.forEach(function (t) {
                                e.data.forEach(function (e, n) {
                                    e.id == t.id && (e.html = t.html.value);
                                });
                            });
                            for (var i = 20 * this.ajaxPage, r = i; r < i + n.length; r++)
                                this.productItems.forEach(function (t) {
                                    t.id == e.data[r].id
                                        ? (t.setData(e.data[r]), t.refresh())
                                        : e.productItems.forEach(function (t) {
                                              t.bindEvents();
                                          });
                                });
                            0 == this.ajaxPage && (p.a.isDefaultPaginationType() || "page" !== this.eventType) && this.$element.html(""),
                                this.buildProductList(),
                                20 * (this.ajaxPage + 1) < this.data.length
                                    ? (this.ajaxPage++, this._getProductListHtmlByAjax())
                                    : ((this.isFetchedAjaxProductData = !0), this.parent.pagination.refresh(), this.parent.productPlaceholder.refresh(), this.$element.removeClass(f.productWrapLoading));
                        },
                    },
                    {
                        key: "_onExtraProductListAjaxSuccess",
                        value: function (t, e, n, i, r, o, a) {
                            try {
                                /<\!--.*?-->/.test(o) && (o = o.replace(/<\!--.*?-->/g, "")), (a = a.concat(JSON.parse(o).products));
                            } catch (t) {
                                throw new Error("Could not parse json from " + e + ": " + t.message);
                            }
                            i * r < t.length - 1 ? (r++, this.buildExtrasProductListByAjax(t, e, n, i, r, a)) : "function" == typeof n && n(a);
                        },
                    },
                    {
                        key: "_bindKeepScrollbackPositionEvent",
                        value: function () {
                            if (this.eventType && "init" == this.eventType && ("scrollRestoration" in history && (history.scrollRestoration = "manual"), null !== history.state && history.state.hasOwnProperty("productId"))) {
                                var t = new URL(window.location.href),
                                    e = history.state.productId;
                                if (null !== e) {
                                    window.history.replaceState("", "", t.toString().replace(/\+/g, "%20"));
                                    var n = this.$element.find("[data-id=" + e + "]").first();
                                    n.length > 0 && r()("html, body").animate({ scrollTop: n.offset().top }, 0);
                                }
                            }
                        },
                    },
                    {
                        key: "_catchError",
                        value: function () {
                            if (p.a.isNoFilterResult(this.totalProduct, this.eventType)) {
                                var t = a.a.error.noProducts;
                                if ((p.a.checkExistFilterOptionParam() ? (t = a.a.error.noFilterResult) : p.a.isSearchPage() && (t = a.a.error.noSearchResult), "" !== t)) {
                                    var e = this.getNoResultTemplate().replace(/{{content}}/g, t);
                                    this.$element.html(e);
                                }
                            }
                        },
                    },
                ]) && Qe(n.prototype, i),
                s && Qe(n, s),
                e
            );
        })(y);
        function en(t) {
            return (en =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function nn(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function rn(t, e) {
            return !e || ("object" !== en(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function on(t) {
            return (on = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function an(t, e) {
            return (an =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var ln = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = rn(this, on(e).call(this))).$element = r()(c.topDisplayType)),
                    (t.selector = { productDisplayTypeItem: "." + f.productDisplayType + "-item", productDisplayTypeGrid: "." + f.productDisplayType + "-grid", productDisplayTypeList: "." + f.productDisplayType + "-list" }),
                    t
                );
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && an(t, e);
                })(e, t),
                (n = e),
                (i = [
                    { key: "compileTemplate", value: function () {} },
                    {
                        key: "render",
                        value: function () {
                            this.$element.html(this.compileTemplate()),
                                this.$element.length &&
                                    (this.$element.find(this.selector.productDisplayTypeList).removeClass("active"),
                                    this.$element.find(this.selector.productDisplayTypeGrid).removeClass("active"),
                                    "list" == l.a.queryParams.display
                                        ? this.$element.find(this.selector.productDisplayTypeList).addClass("active")
                                        : "grid" == l.a.queryParams.display && this.$element.find(this.selector.productDisplayTypeGrid).addClass("active"));
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            r()(c.topDisplayType + " a").on("click", this._onClickEvent.bind(this));
                        },
                    },
                    {
                        key: "_onClickEvent",
                        value: function (t) {
                            t.preventDefault(), (l.a.internalClick = !0);
                            var e = r()(t.currentTarget);
                            e.siblings().removeClass("active"), e.addClass("active");
                            var n = e.data("display");
                            if (n) Le.default.setParam("display", n);
                            else {
                                var i = e.attr("href");
                                Le.default.updateParamsFromUrl(i);
                            }
                            Le.default.applyFilter("display");
                        },
                    },
                ]) && nn(n.prototype, i),
                o && nn(n, o),
                e
            );
        })(y);
        n(90);
        function sn(t) {
            return (sn =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function cn(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function un(t, e) {
            return !e || ("object" !== sn(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function pn(t) {
            return (pn = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function fn(t, e) {
            return (fn =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var hn = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    un(this, pn(e).call(this))
                );
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && fn(t, e);
                })(e, t),
                (n = e),
                (i = [
                    { key: "compileTemplate", value: function () {} },
                    {
                        key: "render",
                        value: function () {
                            r()(c.topSorting).html(this.compileTemplate());
                            var t = r()(c.topSorting + " select");
                            t.length && t.val(l.a.queryParams.sort);
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            r()(c.topSorting + " select").change(function (t) {
                                Le.default.setParam("sort", r()(this).val()), Le.default.setParam("page", 1), Le.default.applyFilter("sort");
                            });
                        },
                    },
                ]) && cn(n.prototype, i),
                o && cn(n, o),
                e
            );
        })(y);
        function yn(t) {
            return (yn =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function dn(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function gn(t, e) {
            return !e || ("object" !== yn(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function mn(t) {
            return (mn = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function bn(t, e) {
            return (bn =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var vn = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    gn(this, mn(e).call(this))
                );
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && bn(t, e);
                })(e, t),
                (n = e),
                (i = [
                    { key: "compileTemplate", value: function () {} },
                    {
                        key: "render",
                        value: function () {
                            r()(c.topShowLimit).html(this.compileTemplate());
                            var t = r()(c.topShowLimit + " select");
                            t.length && t.val(Globals.queryParams.limit);
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            r()(c.topShowLimit + " select").change(function (t) {
                                Le.default.setParam("limit", r()(this).val()), Le.default.applyFilter();
                            });
                        },
                    },
                ]) && dn(n.prototype, i),
                o && dn(n, o),
                e
            );
        })(y);
        function Sn(t) {
            return (Sn =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function On(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Tn(t, e) {
            return !e || ("object" !== Sn(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Pn(t) {
            return (Pn = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function wn(t, e) {
            return (wn =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var _n = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = Tn(this, Pn(e).call(this))).data = null),
                    (l.a.currentTerm = p.a.getSearchTerm()),
                    (t.$searchResultHeader = r()("." + f.searchResultHeader)),
                    (t.$searchResultNumber = r()("." + f.searchResultNumber)),
                    t
                );
            }
            var n, i, s;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && wn(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            l.a.currentTerm && (this.searchTerm = p.a.escape(l.a.currentTerm.trim()));
                        },
                    },
                    {
                        key: "compileSEOTitleTemplate",
                        value: function () {
                            var t = this.data.total_product <= 1 ? a.a.search.seoTitleOne : a.a.search.seoTitleOther;
                            return t && (t = t.replace(/{{ count }}/g, this.data.total_product).replace(/{{ terms }}/g, this.searchTerm)), t;
                        },
                    },
                    {
                        key: "compileSearchResultHeader",
                        value: function () {
                            if (this.searchTerm) var t = this.data.total_product > 0 ? a.a.search.resultHeader : a.a.search.resultEmpty;
                            else t = a.a.search.generalTitle;
                            return t.replace(/{{ terms }}/g, this.searchTerm);
                        },
                    },
                    {
                        key: "compileSearchResultNumber",
                        value: function () {
                            var t = "";
                            return this.searchTerm && (t = a.a.search.resultNumber), t.replace(/{{ count }}/g, "<strong>" + this.data.total_product + "</strong>").replace(/{{ terms }}/g, "<strong>" + this.searchTerm + "</strong>");
                        },
                    },
                    {
                        key: "isRender",
                        value: function () {
                            return !!this.data;
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            this._buildSEOTitle(), this._buildSearchResultHeader(), this._buildSearchResultNumber();
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            t && (this.data = t);
                        },
                    },
                    {
                        key: "_buildSEOTitle",
                        value: function () {
                            if (o.a.getSettingValue("search.enableFixHeadTitle")) {
                                var t = this.compileSEOTitleTemplate();
                                t && this.searchTerm && "" !== this.searchTerm && (document.title = t.replace(/&quot;/g, '"'));
                            }
                        },
                    },
                    {
                        key: "_buildSearchResultHeader",
                        value: function () {
                            var t = this.compileSearchResultHeader();
                            this.$searchResultHeader.html(t);
                        },
                    },
                    {
                        key: "_buildSearchResultNumber",
                        value: function () {
                            var t = this.compileSearchResultNumber();
                            this.$searchResultNumber.html(t);
                        },
                    },
                ]) && On(n.prototype, i),
                s && On(n, s),
                e
            );
        })(y);
        function Cn(t) {
            return (Cn =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function kn(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function En(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function In(t, e) {
            return !e || ("object" !== Cn(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Ln(t) {
            return (Ln = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function An(t, e) {
            return (An =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Fn = (function (t) {
            function e() {
                return kn(this, e), In(this, Ln(e).apply(this, arguments));
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && An(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "compileTemplate",
                        value: function () {
                            return "";
                        },
                    },
                    {
                        key: "buildBreadcrumb",
                        value: function () {
                            if (((this.collectionData = this.parent.collectionData), this.collectionData && this.collectionData.collection)) {
                                var t = r()(c.breadcrumb);
                                t.length && t.html(this.compileTemplate());
                            }
                        },
                    },
                ]) && En(n.prototype, i),
                o && En(n, o),
                e
            );
        })(y);
        function Rn(t) {
            return (Rn =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function jn(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function $n(t, e) {
            return !e || ("object" !== Rn(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Bn(t) {
            return (Bn = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function xn(t, e) {
            return (xn =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Mn = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = $n(this, Bn(e).call(this))).data = null),
                    (t.defaultCollectionData = { collection: { description: "", handle: o.a.getSettingValue("general.collection_handle"), title: a.a.collectionAll } }),
                    (t.collectionData = {}),
                    (t.$collectionHeader = r()("." + f.collectionHeader)),
                    (t.$collectionDescription = r()("." + f.collectionDescription)),
                    (t.$collectionImage = r()("." + f.collectionImage)),
                    t
                );
            }
            var n, i, s;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && xn(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            (this.breadcrumb = new Fn()), this.addComponent(this.breadcrumb);
                        },
                    },
                    {
                        key: "isRender",
                        value: function () {
                            return !!this.data && "collection" == this.parent.eventType;
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t = window.location.pathname;
                            if (t && "/" != t) {
                                if ("/collections/all" == t) this.collectionData = this.defaultCollectionData;
                                else if (p.a.isVendorPage() || p.a.isTypePage()) this.collectionData = { collection: { description: "", handle: "", title: p.a.getSearchTerm() } };
                                else if (!p.a.isSearchPage()) {
                                    var e = window.location.href.split("?")[0] + "?view=desc";
                                    r.a.ajax({ method: "GET", url: e, dataType: "json", success: this._onGetCollectionDataSuccess.bind(this), error: this._onGetCollectionDataError.bind(this) });
                                }
                                this._buildPageInfo();
                            }
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            t && (this.data = t);
                        },
                    },
                    {
                        key: "_buildPageInfo",
                        value: function () {
                            this.breadcrumb && this.breadcrumb.buildBreadcrumb(), this.buildCollectionDetail(), this.buildDocumentInfo();
                        },
                    },
                    {
                        key: "buildCollectionDetail",
                        value: function () {
                            if (void 0 !== this.collectionData && this.collectionData.hasOwnProperty("collection")) {
                                var t = this.collectionData.collection,
                                    e = t.hasOwnProperty("title") && "" != t.title ? t.title : null,
                                    n = t.hasOwnProperty("description") && "" != t.description ? t.description : null,
                                    i = t.hasOwnProperty("image") && t.image && t.image.src ? t.image.src : null;
                                e ? this.$collectionHeader.html(e).show() : this.$collectionHeader.hide(),
                                    n ? this.$collectionDescription.html(n).show() : this.$collectionDescription.hide(),
                                    i
                                        ? this.$collectionImage
                                              .attr("src", i)
                                              .css("background-image", "url(" + i + ")")
                                              .removeClass(f.collectionNoImage)
                                              .addClass(f.collectionHasImage)
                                        : this.$collectionImage.attr("src", "").css("background-image", "none").removeClass(f.collectionHasImage).addClass(f.collectionNoImage);
                            }
                        },
                    },
                    {
                        key: "buildDocumentInfo",
                        value: function () {
                            if (void 0 !== this.collectionData && this.collectionData.hasOwnProperty("collection")) {
                                var t = this.collectionData.collection.title + " - " + l.a.shopName;
                                document.title = t;
                            }
                        },
                    },
                    {
                        key: "_onGetCollectionDataSuccess",
                        value: function (t) {
                            (this.collectionData = t), this._buildPageInfo();
                        },
                    },
                    {
                        key: "_onGetCollectionDataError",
                        value: function () {
                            (this.collectionData = this.defaultCollectionData), this._buildPageInfo();
                        },
                    },
                ]) && jn(n.prototype, i),
                s && jn(n, s),
                e
            );
        })(y);
        function Dn(t) {
            return (Dn =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Vn(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Nn(t, e) {
            return !e || ("object" !== Dn(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Un(t) {
            return (Un = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function qn(t, e) {
            return (qn =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Hn = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = Nn(this, Un(e).call(this))).selecor = { robots: 'meta[content="noindex,nofollow"]' }),
                    (t.currentCollection = boostPFSConfig.general.collection_handle),
                    (t.settings = { boostCollection: o.a.getSettingValue("general.boostCollection") }),
                    t
                );
            }
            var n, i, a;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && qn(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<meta name="robots" content="noindex,nofollow">\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return this.getTemplate();
                        },
                    },
                    {
                        key: "isRender",
                        value: function () {
                            return o.a.getSettingValue("general.enableSeo") && !r()(this.selecor.robots).length && (0 == this.currentCollection.indexOf(this.settings.boostCollection) || p.a.checkExistFilterOptionParam());
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            r()("head").append(this.compileTemplate());
                        },
                    },
                ]) && Vn(n.prototype, i),
                a && Vn(n, a),
                e
            );
        })(y);
        function Gn(t) {
            return (Gn =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Wn(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function zn(t, e) {
            return !e || ("object" !== Gn(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Kn(t) {
            return (Kn = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Yn(t, e) {
            return (Yn =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Qn = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = zn(this, Kn(e).call(this))).$loadMoreContainer = null),
                    (t.$defaultElement = r()(c.pagination)),
                    (t.$element = r()(c.loadMore)),
                    (t.selector = { loadMoreButton: "." + f.productLoadMore + "-button", loadMoreTotal: c.loadMore + "-total" }),
                    r.a.extend(t.settings, { sessionStorageCurrentNextPage: o.a.getSettingValue("general.sessionStorageCurrentNextPage"), sessionStoragePreviousPageEvent: o.a.getSettingValue("general.sessionStoragePreviousPageEvent") }),
                    t
                );
            }
            var n, i, s;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Yn(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function (t) {
                            switch (t) {
                                case "total":
                                    return '\n\t\t\t\t\t<div class="{{class.productLoadMore}}-total">{{progressLable}}</div>\n\t\t\t\t';
                                default:
                                    return '\n\t\t\t\t\t{{loadMoreProgress}}\n\t\t\t\t\t<div class="{{class.productLoadMore}}-button-container">\n\t\t\t\t\t\t<button aria-label="{{label.loadMore}}" class="{{class.productLoadMore}}-button">{{label.loadMore}}</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="{{class.productLoadMore}}-loading" style="display: none;">\n\t\t\t\t\t\t<div class="{{class.productLoadMore}}-icon"></div>\n\t\t\t\t\t</div>\n\t\t\t\t';
                            }
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            var t = this.compileTotalTemplate();
                            l.a.queryParams.page || (l.a.queryParams.page = 1);
                            var e = this.totalProduct - l.a.queryParams.page * l.a.queryParams.limit;
                            return (
                                (e = Math.min(e, l.a.queryParams.limit)),
                                this.getTemplate()
                                    .replace(/{{loadMoreProgress}}/g, t)
                                    .replace(/{{label.loadMore}}/g, a.a.loadMore)
                                    .replace(/{{class.productLoadMore}}/g, f.productLoadMore)
                                    .replace(/{{ amountProduct }}/g, e)
                            );
                        },
                    },
                    {
                        key: "compileTotalTemplate",
                        value: function () {
                            p.a.isLoadPreviousPagePaginationType() && "page" == this.parent.eventType
                                ? (this.nextPage = parseInt(window.sessionStorage.getItem(this.settings.sessionStorageCurrentNextPage)))
                                : (this.nextPage = l.a.queryParams.page);
                            var t = (this.nextPage - 1) * l.a.queryParams.limit + 1;
                            r()(c.products + " > *").length && (t -= r()(c.products + " > *").length - l.a.queryParams.limit);
                            var e = (this.nextPage - 1) * l.a.queryParams.limit + 1 + this.data.products.length - 1;
                            return this.getTemplate("total")
                                .replace(/{{progressLable}}/g, a.a.loadMoreTotal)
                                .replace(/{{ from }}/g, t)
                                .replace(/{{ to }}/g, e)
                                .replace(/{{ total }}/g, this.totalProduct)
                                .replace(/{{class.productLoadMore}}/g, f.productLoadMore);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            this.$defaultElement.empty();
                            var t = l.a.queryParams,
                                e = this.compileTemplate();
                            if ((this.$element.html(e), r()(c.loadMoreButtonContainer).length > 0)) {
                                var n = this.compileTotalTemplate();
                                r()(this.selector.loadMoreTotal).replaceWith(n);
                            }
                            (this.$loadMoreContainer = r()(c.loadMoreButtonContainer)), this.hideLoading();
                            var i = Math.ceil(this.totalProduct / t.limit);
                            parseInt(t.page) < i ? (this.$element.show(), this.$loadMoreContainer.show()) : this.$element.hide();
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            p.a.isLoadPreviousPagePaginationType() ? (this.nextPage = parseInt(window.sessionStorage.getItem(this.settings.sessionStorageCurrentNextPage))) : (this.nextPage = l.a.queryParams.page),
                                this.$element.find(this.selector.loadMoreButton).off("click").on("click", this._onClickEvent.bind(this));
                        },
                    },
                    {
                        key: "_onClickEvent",
                        value: function (t) {
                            if (
                                (t.preventDefault(),
                                this.$loadMoreContainer.hide(),
                                this.showLoading(),
                                this.nextPage++,
                                (l.a.internalClick = !0),
                                Le.default.setParam("limit", this.settings.limit),
                                Le.default.setParam("page", this.nextPage),
                                p.a.FilterResult.isAdvancedPaginationType())
                            )
                                p.a.isLoadPreviousPagePaginationType() &&
                                    (window.sessionStorage.setItem(this.settings.sessionStorageCurrentNextPage, this.nextPage), window.sessionStorage.setItem(this.settings.sessionStoragePreviousPageEvent, 0)),
                                    Le.default.applyFilter("page");
                            else {
                                var e = Hc.instance.filter;
                                Le.default.getFilterData("page", e.setData.bind(e));
                            }
                        },
                    },
                ]) && Wn(n.prototype, i),
                s && Wn(n, s),
                e
            );
        })(Be);
        function Jn(t) {
            return (Jn =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Zn(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Xn(t, e) {
            return !e || ("object" !== Jn(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function ti(t) {
            return (ti = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function ei(t, e) {
            return (ei =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var ni = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = Xn(this, ti(e).call(this))).$element = r()(c.bottomPagination)),
                    r.a.extend(t.settings, {
                        positionShowInfiniteLoading: o.a.getSettingValue("general.positionShowInfiniteLoading"),
                        sessionStorageCurrentNextPage: o.a.getSettingValue("general.sessionStorageCurrentNextPage"),
                        sessionStoragePreviousPageEvent: o.a.getSettingValue("general.sessionStoragePreviousPageEvent"),
                    }),
                    t
                );
            }
            var n, i, a;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && ei(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<div class="{{class.productLoadMore}}-loading" style="display: none;">\n\t\t\t\t<div class="{{class.productLoadMore}}-icon"></div>\n\t\t\t</div>\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return this.getTemplate().replace(/{{class.productLoadMore}}/g, f.productLoadMore);
                        },
                    },
                    {
                        key: "isRender",
                        value: function () {
                            return null !== this.data && Ie.isPanelActive(Ke.Enum.PRODUCT);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            if ((this.$element.empty(), this.$element.show(), 0 == this.$loadMore.find(c.loadMoreLoading).length)) {
                                var t = this.compileTemplate();
                                this.$loadMore.prepend(t), this.$loadMore.show();
                            }
                            this.hideLoading();
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            p.a.isLoadPreviousPagePaginationType() ? (this.nextPage = parseInt(window.sessionStorage.getItem(this.settings.sessionStorageCurrentNextPage))) : (this.nextPage = l.a.queryParams.page),
                                this.totalProduct > this.settings.limit * this.nextPage && ((this.scrolling = !1), (this.scrollToBottom = !1), this.$element.length > 0 && r()(window).on("scroll", this._onScrollEvent.bind(this)));
                        },
                    },
                    {
                        key: "_onScrollEvent",
                        value: function (t) {
                            if ((t.preventDefault(), t.stopPropagation(), r()(c.products).hasClass(f.productWrapLoading))) return !1;
                            this._isScrollToBottom() && this._loadMoreProducts();
                        },
                    },
                    {
                        key: "_isScrollToBottom",
                        value: function () {
                            var t = r()(window).height() * (r()(window).height() / r()(document).outerHeight()),
                                e = parseInt(this.$element.offset().top),
                                n = parseInt(r()(window).scrollTop()) + t + parseInt(this.settings.positionShowInfiniteLoading);
                            return (
                                r()(window).scrollTop() + r()(window).height() + t >= r()(document).outerHeight() - 100 && (this.scrollToBottom = !0),
                                !this.scrolling && this.data.products.length > 0 && (n >= e || (n < e && this.scrollToBottom))
                            );
                        },
                    },
                    {
                        key: "_loadMoreProducts",
                        value: function () {
                            this.showLoading(), (this.scrolling = !0), this.nextPage++;
                            var t = Math.ceil(this.totalProduct / this.settings.limit);
                            if (this.nextPage <= t)
                                if (((l.a.internalClick = !0), Le.default.setParam("limit", this.settings.limit), Le.default.setParam("page", this.nextPage), p.a.FilterResult.isAdvancedPaginationType()))
                                    p.a.isLoadPreviousPagePaginationType() &&
                                        (window.sessionStorage.setItem(this.settings.sessionStorageCurrentNextPage, this.nextPage), window.sessionStorage.setItem(this.settings.sessionStoragePreviousPageEvent, 0)),
                                        Le.default.applyFilter("page");
                                else {
                                    var e = Hc.instance.filter;
                                    Le.default.getFilterData("page", e.setData.bind(e));
                                }
                        },
                    },
                ]) && Zn(n.prototype, i),
                a && Zn(n, a),
                e
            );
        })(Be);
        function ii(t) {
            return (ii =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function ri(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function oi(t, e) {
            return !e || ("object" !== ii(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function ai(t) {
            return (ai = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function li(t, e) {
            return (li =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var si = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = oi(this, ai(e).call(this))).$wrapper = r()(c.btnLoadPreviousPageWrapperSelector)),
                    (t.$element = r()(c.btnLoadPreviousPageSelector)),
                    r.a.extend(t.settings, {
                        sessionStorageCurrentPreviousPage: o.a.getSettingValue("general.sessionStorageCurrentPreviousPage"),
                        sessionStorageCurrentPage: o.a.getSettingValue("general.sessionStorageCurrentPage"),
                        sessionStorageCurrentNextPage: o.a.getSettingValue("general.sessionStorageCurrentNextPage"),
                        sessionStoragePreviousPageEvent: o.a.getSettingValue("general.sessionStoragePreviousPageEvent"),
                    }),
                    t
                );
            }
            var n, i, s;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && li(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<div class="{{class.buttonLoadPreviousPageSelector}}">\n\t\t\t\t<a href="javascript:void(0)" aria-label="{{label.loadPreviousPage}}" class="js-{{class.buttonLoadPreviousPageSelector}}">{{label.loadPreviousPage}}</a>\n\t\t\t</div>\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return this.getTemplate()
                                .replace(/{{class.buttonLoadPreviousPageSelector}}/g, f.buttonLoadPreviousPageSelector)
                                .replace(/{{label.loadPreviousPage}}/g, a.a.loadPreviousPage);
                        },
                    },
                    {
                        key: "isRender",
                        value: function () {
                            return this.data && p.a.isLoadPreviousPagePaginationType() && "page" != this.parent.eventType;
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            this.$element.length || ((this.$element = r()(this.compileTemplate())), this.$wrapper.html(this.$element));
                            var t = Math.ceil(this.totalProduct / l.a.queryParams.limit),
                                e = l.a.queryParams.page,
                                n = t > 1 && e > 1;
                            window.sessionStorage.setItem(this.settings.sessionStorageCurrentPreviousPage, e),
                                window.sessionStorage.setItem(this.settings.sessionStorageCurrentPage, e),
                                window.sessionStorage.setItem(this.settings.sessionStorageCurrentNextPage, e),
                                window.sessionStorage.setItem(this.settings.sessionStoragePreviousPageEvent, 1),
                                n ? this.$wrapper.show() : this.$wrapper.hide();
                        },
                    },
                    {
                        key: "isBindEvents",
                        value: function () {
                            return p.a.isLoadPreviousPagePaginationType();
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            this.$element.unbind("click"), this.$element.on("click", this._onClickEvent.bind(this));
                        },
                    },
                    {
                        key: "_onClickEvent",
                        value: function (t) {
                            t.preventDefault();
                            var e = l.a.queryParams.page;
                            if (
                                (null !== window.sessionStorage.getItem(this.settings.sessionStorageCurrentPreviousPage)
                                    ? (this.currentPreviousPage = parseInt(window.sessionStorage.getItem(this.settings.sessionStorageCurrentPreviousPage)))
                                    : (this.currentPreviousPage = e),
                                this.currentPreviousPage < 2)
                            )
                                return this.$wrapper.hide(), !1;
                            (l.a.internalClick = !0),
                                Le.default.setParam("limit", this.settings.limit),
                                this.currentPreviousPage--,
                                window.sessionStorage.setItem(this.settings.sessionStorageCurrentPreviousPage, this.currentPreviousPage),
                                window.sessionStorage.setItem(this.settings.sessionStoragePreviousPageEvent, 1),
                                Le.default.setParam("page", this.currentPreviousPage),
                                Le.default.applyFilter("page"),
                                this.currentPreviousPage < 2 && this.$wrapper.hide();
                        },
                    },
                ]) && ri(n.prototype, i),
                s && ri(n, s),
                e
            );
        })(Be);
        function ci(t) {
            return (ci =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function ui(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function pi(t, e) {
            return !e || ("object" !== ci(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function fi(t) {
            return (fi = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function hi(t, e) {
            return (hi =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var yi = (function (t) {
            function e(t, n) {
                var i;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    (i = pi(this, fi(e).call(this))),
                    t || (t = c.searchPagePagination),
                    (i.type = n),
                    (i.$element = r()(t)),
                    (i.$productList = r()(c.products)),
                    (i.filterResult = i.parent),
                    i
                );
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && hi(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "isRender",
                        value: function () {
                            return l.a.hasOwnProperty("searchDisplay") && l.a.searchDisplay === this.type;
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            this.$element.html(this.compileTemplate());
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            this.$element.show(), this.$element.find("a").unbind("click"), this.$element.find("a").on("click", this._onClickEvent.bind(this));
                        },
                    },
                    {
                        key: "setData",
                        value: function (t, e, n, i) {
                            t && (this.data = t);
                            var r = this.parent.searchResultPanels.children,
                                o = this.type;
                            (this.panelItem = r.find(function (t) {
                                return t.type == o;
                            })),
                                (this.totalProduct = e),
                                (this.limit = n),
                                (this.page = i),
                                (this.paginationType = Settings.getSettingValue("general.paginationType"));
                        },
                    },
                    {
                        key: "_onClickEvent",
                        value: function (t) {
                            t.preventDefault(), (l.a.internalClick = !0);
                            var e = r()(t.currentTarget).attr("href");
                            Le.default.updateParamsFromUrl(e),
                                Le.default.setParam("limit", this.limit),
                                Le.default.getFilterData("search", this.panelItem._searchPanelCallback.bind(this.panelItem)),
                                r()("body,html").animate({ scrollTop: this.$productList.offset().top - 50 }, 600);
                        },
                    },
                ]) && ui(n.prototype, i),
                o && ui(n, o),
                e
            );
        })(Ue);
        function di(t) {
            return (di =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function gi(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function mi(t, e) {
            return !e || ("object" !== di(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function bi(t) {
            return (bi = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function vi(t, e) {
            return (vi =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Si = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = mi(this, bi(e).call(this))).$productList = r()(c.products)),
                    (t.$element = []),
                    (t.isFetchedProductData = !1),
                    (t.settings = {
                        showPlaceholderProductList: o.a.getSettingValue("general.showPlaceholderProductList"),
                        placeholderImageRatio: o.a.getSettingValue("general.placeholderImageRatio"),
                        productGridClass: o.a.getSettingValue("custom.product_grid_class"),
                        placeholderProductGridItemClass: o.a.getSettingValue("general.placeholderProductGridItemClass"),
                        productsPerRow: o.a.getSettingValue("custom.products_per_row"),
                        placeholderProductPerRow: o.a.getSettingValue("general.placeholderProductPerRow"),
                        sessionStoragePreviousPageEvent: o.a.getSettingValue("general.sessionStoragePreviousPageEvent"),
                    }),
                    t
                );
            }
            var n, i, a;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && vi(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            (this.eventType = this.parent.eventType), Le.default.addBeforeApplyFilter(this.renderBeforeApplyFilter.bind(this));
                        },
                    },
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<div class="{{wrapperClass}} {{class.filterProductSkeleton}}">\n\t\t\t\t<div class="{{class.filterProductSkeleton}}-image" style="padding-top: {{paddingTop}}%"></div>\n\t\t\t\t<div class="{{class.filterProductSkeleton}}-meta">\n\t\t\t\t\t<span class="{{class.filterSkeletonText}} {{class.filterSkeleton}}"></span>\n\t\t\t\t\t<span class="{{class.filterSkeletonText}} {{class.filterSkeleton}}-width1"></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return void 0 !== l.a.queryParams.display && "grid" != l.a.queryParams.display && this.compileTemplateExtra ? this.compileTemplateExtra() : this.compileTemplateGridType();
                        },
                    },
                    {
                        key: "compileTemplateGridType",
                        value: function () {
                            var t = parseFloat(this.settings.placeholderImageRatio),
                                e = t > 0 ? t : 1.4,
                                n = "";
                            return (
                                "" == (n = this.settings.productGridClass && "" !== this.settings.productGridClass ? this.settings.productGridClass : this.settings.placeholderProductGridItemClass) &&
                                    (n = this.$productList.find("> *").length > 0 ? this.$productList.find("> *").first().attr("class") : f.filterSkeleton + "-def-width"),
                                this.getTemplate()
                                    .replace(/{{class.filterProductSkeleton}}/g, f.filterProductSkeleton)
                                    .replace(/{{class.filterSkeleton}}/g, f.filterSkeleton)
                                    .replace(/{{class.filterSkeletonText}}/g, f.filterSkeletonText)
                                    .replace(/{{paddingTop}}/g, 100 * e)
                                    .replace(/{{wrapperClass}}/g, n)
                            );
                        },
                    },
                    {
                        key: "compileTemplateExtra",
                        value: function () {
                            return !1;
                        },
                    },
                    {
                        key: "isRender",
                        value: function () {
                            return (
                                this.settings.showPlaceholderProductList &&
                                Ie.isPanelActive(Ke.Enum.PRODUCT) &&
                                (!l.a.loadProductFirst ||
                                    p.a.isSearchPage() ||
                                    p.a.isVendorPage() ||
                                    p.a.isTagPage() ||
                                    p.a.isTypePage() ||
                                    "best-selling" === l.a.defaultSorting ||
                                    o.a.getSettingValue("general.productAndVariantAvailable") ||
                                    o.a.getSettingValue("general.sortingAvailableFirst") ||
                                    (l.a.loadProductFirst && (l.a.hasFilterOptionParam || "init" != this.eventType)))
                            );
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t = this.settings.productsPerRow || this.settings.placeholderProductPerRow,
                                e = this.compileTemplate();
                            this.$element = [];
                            for (var n = 0; n < t; n++) this.$element.push(r()(e));
                            var i = this.parent.productList,
                                o = i.settings.loadProductFromLiquid && i.settings.loadProductFromLiquidType == ProductList.Enum.loadProductType.AJAX;
                            this.isFetchedProductData ? (o && !i.isFetchedAjaxProductData) || this.setHide() : this.setShow();
                        },
                    },
                    {
                        key: "renderBeforeApplyFilter",
                        value: function (t) {
                            (this.eventType = t), this.refresh();
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            t && this.isRender() && (this.isFetchedProductData = !0);
                        },
                    },
                    {
                        key: "setShow",
                        value: function () {
                            this.$productList.addClass(f.productWrapLoading),
                                this.$productList.css("min-height", this.$productList.height()),
                                (p.a.isDefaultPaginationType() || (!p.a.isDefaultPaginationType() && "page" !== this.eventType)) && this.$productList.html(""),
                                p.a.isLoadPreviousPagePaginationType() && parseInt(window.sessionStorage.getItem(this.settings.sessionStoragePreviousPageEvent))
                                    ? this.$productList.prepend(this.$element)
                                    : this.$productList.append(this.$element);
                        },
                    },
                    {
                        key: "setHide",
                        value: function () {
                            var t = this;
                            this.$productList.find("." + f.filterProductSkeleton).remove(),
                                setTimeout(function () {
                                    t.$productList.removeClass(f.productWrapLoading), t.$productList.css("min-height", 0);
                                }),
                                (this.isFetchedProductData = !1);
                        },
                    },
                ]) && gi(n.prototype, i),
                a && gi(n, a),
                e
            );
        })(y);
        function Oi(t) {
            return (Oi =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Ti(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Pi(t, e) {
            return !e || ("object" !== Oi(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function wi(t) {
            return (wi = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function _i(t, e) {
            return (_i =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        function Ci(t) {
            return (Ci =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function ki(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Ei(t, e) {
            return !e || ("object" !== Ci(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Ii(t) {
            return (Ii = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Li(t, e) {
            return (Li =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Ai = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    Ei(this, Ii(e).call(this))
                );
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Li(t, e);
                })(e, t),
                (n = e),
                (r = [
                    {
                        key: "Enum",
                        get: function () {
                            return { tempType: { ITEM: "collection_item", IMAGE: "image" } };
                        },
                    },
                ]),
                (i = [
                    {
                        key: "getTemplate",
                        value: function (t) {
                            switch (t) {
                                case e.Enum.tempType.IMAGE:
                                    return '\n\t\t\t\t\t<div class="{{class.filterResultItem}}-image">\n\t\t\t\t\t\t<img src="{{itemThumbSrc}}" alt="{{itemTitle}}" />\n\t\t\t\t\t</div>\n\t\t\t\t';
                                default:
                                    return '\n\t\t\t\t\t<div class="{{class.filterResultItem}} {{class.filterResultItem}}-collection">\n\t\t\t\t\t\t<a href="{{itemUrl}}" aria-label="{{itemTitle}}" title="{{itemTitle}}">\n\t\t\t\t\t\t\t{{itemThumbnail}}\n\t\t\t\t\t\t\t<div class="{{class.filterResultItem}}-content">\n\t\t\t\t\t\t\t\t<h3 class="{{class.filterResultItem}}-title">{{itemTitle}}</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t';
                            }
                        },
                    },
                ]) && ki(n.prototype, i),
                r && ki(n, r),
                e
            );
        })(
            (function (t) {
                function e() {
                    var t;
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        ((t = Pi(this, wi(e).call(this))).data = null),
                        (t.id = null),
                        (t.index = 0),
                        (t.$element = null),
                        t
                    );
                }
                var n, i, o;
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && _i(t, e);
                    })(e, t),
                    (n = e),
                    (i = [
                        {
                            key: "compileTemplate",
                            value: function () {
                                var t = "/collections/" + this.data.handle,
                                    e = "";
                                this.data.image && this.data.image.hasOwnProperty("src") && "" !== this.data.image.src && (e = p.a.optimizeImage(this.data.image.src, "200x"));
                                var n = "";
                                return (
                                    e.length > 0 && (n = this.getTemplate(Ai.Enum.tempType.IMAGE)),
                                    this.getTemplate()
                                        .replace(/{{itemThumbnail}}/g, n)
                                        .replace(/{{itemThumbSrc}}/g, e)
                                        .replace(/{{class.filterResultItem}}/g, f.filterResultItem)
                                        .replace(/{{itemUrl}}/g, t)
                                        .replace(/{{itemTitle}}/g, p.a.escape(this.data.title))
                                );
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                this.$element = r()(this.compileTemplate());
                            },
                        },
                        {
                            key: "setData",
                            value: function (t, e) {
                                (this.data = t), (this.id = t.id), (this.index = e);
                            },
                        },
                    ]) && Ti(n.prototype, i),
                    o && Ti(n, o),
                    e
                );
            })(y)
        );
        function Fi(t) {
            return (Fi =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Ri(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function ji(t, e) {
            return !e || ("object" !== Fi(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function $i(t) {
            return ($i = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Bi(t, e) {
            return (Bi =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var xi = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = ji(this, $i(e).call(this))).$element = r()(c.collections)),
                    (t.data = null),
                    (t.totalCollection = 0),
                    t
                );
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Bi(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "isRender",
                        value: function () {
                            return null != this.data && Ie.isPanelActive(Ke.Enum.COLLECTION);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t = [];
                            this.collectionItems.forEach(function (e) {
                                t.push(e.$element);
                            }),
                                this.$element.html(""),
                                this.$element.append(t);
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            var e = this;
                            t &&
                                t.collections &&
                                t.collections.length &&
                                ((this.data = t.collections),
                                (this.totalCollection = t.total_collection ? t.total_collection : 0),
                                (this.collectionItems = []),
                                this.data.forEach(function (t, n) {
                                    var i = new Ai();
                                    e.addComponent(i), i.setData(t), e.collectionItems.push(i);
                                }));
                        },
                    },
                ]) && Ri(n.prototype, i),
                o && Ri(n, o),
                e
            );
        })(y);
        function Mi(t) {
            return (Mi =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Di(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Vi(t, e) {
            return !e || ("object" !== Mi(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Ni(t) {
            return (Ni = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Ui(t, e) {
            return (Ui =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        function qi(t) {
            return (qi =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Hi(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Gi(t, e) {
            return !e || ("object" !== qi(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Wi(t) {
            return (Wi = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function zi(t, e) {
            return (zi =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Ki = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    Gi(this, Wi(e).call(this))
                );
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && zi(t, e);
                })(e, t),
                (n = e),
                (r = [
                    {
                        key: "Enum",
                        get: function () {
                            return { tempType: { ITEM: "page_item", IMAGE: "image" } };
                        },
                    },
                ]),
                (i = [
                    {
                        key: "getTemplate",
                        value: function (t) {
                            switch (t) {
                                case e.Enum.tempType.IMAGE:
                                    return '\n\t\t\t\t\t<div class="{{class.filterResultItem}}-image">\n\t\t\t\t\t\t<img src="{{itemThumbSrc}}" alt="{{itemTitle}}" />\n\t\t\t\t\t</div>\n\t\t\t\t';
                                default:
                                    return '\n\t\t\t\t\t<div class="{{class.filterResultItem}} {{class.filterResultItem}}-page">\n\t\t\t\t\t\t<a href="{{itemUrl}}" aria-label="{{itemTitle}}" title="{{itemTitle}}">\n\t\t\t\t\t\t\t{{itemThumbnail}}\n\t\t\t\t\t\t\t<div class="{{class.filterResultItem}}-content">\n\t\t\t\t\t\t\t\t<h3 class="{{class.filterResultItem}}-title">{{itemTitle}}</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t';
                            }
                        },
                    },
                ]) && Hi(n.prototype, i),
                r && Hi(n, r),
                e
            );
        })(
            (function (t) {
                function e() {
                    var t;
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        ((t = Vi(this, Ni(e).call(this))).data = null),
                        (t.id = null),
                        (t.index = 0),
                        (t.$element = null),
                        t
                    );
                }
                var n, i, o;
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Ui(t, e);
                    })(e, t),
                    (n = e),
                    (i = [
                        {
                            key: "compileTemplate",
                            value: function () {
                                var t = this.data.hasOwnProperty("url") ? this.data.url : "#",
                                    e = "";
                                this.data.image && this.data.image.hasOwnProperty("src") && "" !== this.data.image.src && (e = p.a.optimizeImage(this.data.image.src, "200x"));
                                var n = "";
                                return (
                                    e.length > 0 && (n = this.getTemplate(Ki.Enum.tempType.IMAGE)),
                                    this.getTemplate()
                                        .replace(/{{itemThumbnail}}/g, n)
                                        .replace(/{{itemThumbSrc}}/g, e)
                                        .replace(/{{class.filterResultItem}}/g, f.filterResultItem)
                                        .replace(/{{itemUrl}}/g, t)
                                        .replace(/{{itemTitle}}/g, p.a.escape(this.data.title))
                                );
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                this.$element = r()(this.compileTemplate());
                            },
                        },
                        {
                            key: "setData",
                            value: function (t, e) {
                                (this.data = t), (this.id = t.id), (this.index = e);
                            },
                        },
                    ]) && Di(n.prototype, i),
                    o && Di(n, o),
                    e
                );
            })(y)
        );
        function Yi(t) {
            return (Yi =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Qi(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Ji(t, e) {
            return !e || ("object" !== Yi(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Zi(t) {
            return (Zi = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Xi(t, e) {
            return (Xi =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var tr = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = Ji(this, Zi(e).call(this))).$element = r()(c.pages)),
                    (t.data = null),
                    (t.totalPage = 0),
                    t
                );
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Xi(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "isRender",
                        value: function () {
                            return null != this.data && Ie.isPanelActive(Ke.Enum.PAGE);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t = [];
                            this.pageItems.forEach(function (e) {
                                t.push(e.$element);
                            }),
                                this.$element.html(""),
                                this.$element.append(t);
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            var e = this;
                            t &&
                                t.pages &&
                                t.pages.length &&
                                ((this.data = t.pages),
                                (this.totalPage = t.total_page ? t.total_page : 0),
                                (this.pageItems = []),
                                this.data.forEach(function (t, n) {
                                    var i = new Ki();
                                    e.addComponent(i), i.setData(t), e.pageItems.push(i);
                                }));
                        },
                    },
                ]) && Qi(n.prototype, i),
                o && Qi(n, o),
                e
            );
        })(y);
        function er(t) {
            return (er =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function nr(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function ir(t, e) {
            return !e || ("object" !== er(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function rr(t) {
            return (rr = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function or(t, e) {
            return (or =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var ar = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = ir(this, rr(e).call(this))).$element = r()(c.searchTotalResult)),
                    (t.total = 0),
                    (t.panalType = Ke.Enum.PRODUCT),
                    t
                );
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && or(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "compileTemplate",
                        value: function () {
                            return (this.total > 1 ? a.a.search.searchTotalResults : a.a.search.searchTotalResult).replace(/{{ count }}/g, "<strong>" + this.total + "</strong>");
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t = this.compileTemplate();
                            this.$element.html(t);
                        },
                    },
                    {
                        key: "setData",
                        value: function (t, e) {
                            t && (this.total = t), e && (this.panalType = e);
                        },
                    },
                ]) && nr(n.prototype, i),
                o && nr(n, o),
                e
            );
        })(y);
        function lr(t) {
            return (lr =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function sr(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function cr(t, e) {
            return !e || ("object" !== lr(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function ur(t) {
            return (ur = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function pr(t, e) {
            return (pr =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var fr = (function (t) {
                function e() {
                    var t;
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        ((t = cr(this, ur(e).call(this))).data = null),
                        (t.productList = null),
                        (t.totalProduct = 0),
                        (t.pagination = ""),
                        (t.sorting = ""),
                        (t.breadcrumbs = ""),
                        (t.eventType = ""),
                        (t.displayType = ""),
                        (t.$element = r()(c.products)),
                        (t.settngs = { paginationType: o.a.getSettingValue("general.paginationType") }),
                        t
                    );
                }
                var n, i, a;
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && pr(t, e);
                    })(e, t),
                    (n = e),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                (this.productPlaceholder = new Si()), this.addComponent(this.productPlaceholder), (this.productList = new tn()), this.addComponent(this.productList);
                                var t = this._getProductPaginationClass();
                                (this.pagination = new t()),
                                    this.addComponent(this.pagination),
                                    p.a.isLoadPreviousPagePaginationType() && ((this.loadPrevious = new si()), this.addComponent(this.loadPrevious)),
                                    (this.sorting = new hn()),
                                    this.addComponent(this.sorting),
                                    (this.limit = new vn()),
                                    this.addComponent(this.limit),
                                    (this.displayType = new ln()),
                                    this.addComponent(this.displayType);
                                var e = this._getPageInfoClass();
                                (this.pageInfo = new e()),
                                    this.addComponent(this.pageInfo),
                                    (this.rebotsMeta = new Hn()),
                                    this.addComponent(this.rebotsMeta),
                                    p.a.isSearchPage() &&
                                        ((this.searchResultPanels = new Ie()),
                                        this.addComponent(this.searchResultPanels),
                                        (this.collectionList = new xi()),
                                        this.addComponent(this.collectionList),
                                        (this.collectionListPagination = new yi(c.searchCollectionPagination, Ke.Enum.COLLECTION)),
                                        this.addComponent(this.collectionListPagination),
                                        (this.pageList = new tr()),
                                        this.addComponent(this.pageList),
                                        (this.pageListPagination = new yi(c.searchPagePagination, Ke.Enum.PAGE)),
                                        this.addComponent(this.pageListPagination),
                                        (this.searchResultTotal = new ar()),
                                        this.addComponent(this.searchResultTotal));
                            },
                        },
                        {
                            key: "isRender",
                            value: function () {
                                return this.parent.isFetchedProductData;
                            },
                        },
                        {
                            key: "setData",
                            value: function (t) {
                                (this.data = t),
                                    (this.totalProduct = t.total_product),
                                    (this.eventType = t.event_type),
                                    this.productList.setData(t.products),
                                    this.pagination.setData(t),
                                    this.loadPrevious && this.loadPrevious.setData(t),
                                    p.a.isSearchPage() &&
                                        (this.searchResultPanels.setData(t, this.eventType),
                                        this.collectionList.setData(t, this.eventType),
                                        this.pageList.setData(t, this.eventType),
                                        t.hasOwnProperty("total_product") && this.searchResultTotal.setData(t.total_product)),
                                    this.productPlaceholder.setData(t),
                                    this.pageInfo.setData(t);
                            },
                        },
                        {
                            key: "_getProductPaginationClass",
                            value: function () {
                                switch (o.a.getSettingValue("general.paginationType")) {
                                    case Be.Type.DEFAULT:
                                        return Ue;
                                    case Be.Type.LOAD_MORE:
                                        return Qn;
                                    default:
                                        return ni;
                                }
                            },
                        },
                        {
                            key: "_getPageInfoClass",
                            value: function () {
                                return p.a.isSearchPage() ? _n : Mn;
                            },
                        },
                    ]) && sr(n.prototype, i),
                    a && sr(n, a),
                    e
                );
            })(y),
            hr = n(4);
        function yr(t) {
            return (yr =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function dr(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function gr(t) {
            return (gr = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function mr(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        }
        function br(t, e) {
            return (br =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var vr = (function (t) {
            function e(t) {
                var n, i, r;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    (i = this),
                    ((n = !(r = gr(e).call(this)) || ("object" !== yr(r) && "function" != typeof r) ? mr(i) : r).filterTree = t),
                    (n.filterTree.mobileButton = mr(n)),
                    (n.isCollapsed = !0),
                    (n.label = a.a.refineMobile),
                    (n.$element = null),
                    n
                );
            }
            var n, i, l;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && br(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t\t<button type="button">{{label}}</button>\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return this.getTemplate()
                                .replace(/{{filterTreeMobileButton}}/g, f.filterTreeMobileButton)
                                .replace(/{{label}}/g, this.label);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            this.$element || (this.$element = r()(this.compileTemplate())), this.parent.isFetchedFilterData && (this.filterTree.filterOptions.size > 0 || this.$element.hide());
                        },
                    },
                    {
                        key: "isBindEvents",
                        value: function () {
                            return !this.isBoundEvent;
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            this.$element && this.filterTree && this.$element.on("click", this.onClick.bind(this));
                        },
                    },
                    {
                        key: "onClick",
                        value: function () {
                            "function" == typeof this.filterTree.onClickMobileButton ? this.filterTree.onClickMobileButton() : this.toggleFilterTree(), r()("body").toggleClass(f.filterTreeOpenBody);
                        },
                    },
                    {
                        key: "toggleFilterTree",
                        value: function () {
                            var t = r()("#" + this.filterTree.id);
                            t &&
                                !t.hasClass("toggling") &&
                                ((this.isCollapsed = !this.isCollapsed),
                                o.a.getSettingValue("general.changeMobileButtonLabel") && ((this.label = this.isCollapsed ? a.a.refineMobile : a.a.refineMobileCollapse), this.$element.text(this.label)),
                                t.slideToggle(400, this.afterToggleFilterTree.bind(this)));
                        },
                    },
                    {
                        key: "afterToggleFilterTree",
                        value: function () {
                            this.isCollapsed ||
                                this.filterTree.filterOptions.forEach(function (t) {
                                    t.displayType != hr.a.DisplayType.BOX ||
                                        t.isCollapsed ||
                                        t.filterItems.forEach(function (t) {
                                            t.setBoxItemSize();
                                        });
                                });
                        },
                    },
                ]) && dr(n.prototype, i),
                l && dr(n, l),
                e
            );
        })(y);
        function Sr(t) {
            return (Sr =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Or(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function Tr(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Pr(t, e) {
            return !e || ("object" !== Sr(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function wr(t) {
            return (wr = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function _r(t, e) {
            return (_r =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Cr = (function (t) {
            function e() {
                return Or(this, e), Pr(this, wr(e).apply(this, arguments));
            }
            var n, i, a;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && _r(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<div class="boost-pfs-filter-loading" style="display: none;"><span class="boost-pfs-filter-loading-icon"></span></div>\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return this.getTemplate();
                        },
                    },
                    {
                        key: "setShow",
                        value: function (t) {
                            this.$element || ((this.$element = r()(this.compileTemplate())), r()("body").append(this.$element)), this.isEnabled() && (t ? this.$element.show() : this.$element.hide());
                        },
                    },
                    {
                        key: "isEnabled",
                        value: function () {
                            var t = p.a.isMobile();
                            return (!t && o.a.getSettingValue("general.showLoading")) || (t && o.a.getSettingValue("general.showMobileLoading"));
                        },
                    },
                ]) && Tr(n.prototype, i),
                a && Tr(n, a),
                e
            );
        })(y);
        function kr(t) {
            return (kr =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Er(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Ir(t, e) {
            return !e || ("object" !== kr(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Lr(t) {
            return (Lr = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Ar(t, e) {
            return (Ar =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Fr = (function (t) {
                function e() {
                    var t;
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        ((t = Ir(this, Lr(e).call(this))).style = o.a.getSettingValue("general.styleScrollToTop")),
                        (t.$element = null),
                        t
                    );
                }
                var n, i, a;
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Ar(t, e);
                    })(e, t),
                    (n = e),
                    (i = [
                        {
                            key: "getTemplate",
                            value: function () {
                                return '\n\t\t\t<a href="javascript:;" aria-label="Back to top" class="boost-pfs-filter-scroll-to-top {{style}}" style="display: inline;">\n\t\t\t\t<span>Back to top</span>\n\t\t\t</a>\n\t\t';
                            },
                        },
                        {
                            key: "compileTemplate",
                            value: function () {
                                return this.getTemplate().replace(/{{style}}/g, this.style);
                            },
                        },
                        {
                            key: "isRender",
                            value: function () {
                                return !this.$element;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                !this.$element && this.isShow() && ((this.$element = r()(this.compileTemplate())), r()("body").append(this.$element));
                            },
                        },
                        {
                            key: "isBindEvents",
                            value: function () {
                                return !this.isBoundEvent;
                            },
                        },
                        {
                            key: "bindEvents",
                            value: function () {
                                this.$element && (this.$element.on("click", this.scrollToTop.bind(this)), r()(document).scroll(this.setVisibility.bind(this)));
                            },
                        },
                        {
                            key: "scrollToTop",
                            value: function () {
                                r()("html,body").stop().animate({ scrollTop: 0 });
                            },
                        },
                        {
                            key: "setVisibility",
                            value: function () {
                                r()(document).scrollTop() > 100 ? this.$element.show() : this.$element.hide();
                            },
                        },
                        {
                            key: "isShow",
                            value: function () {
                                return o.a.getSettingValue("general.activeScrollToTop");
                            },
                        },
                    ]) && Er(n.prototype, i),
                    a && Er(n, a),
                    e
                );
            })(y),
            Rr = { FilterTreeType: { VERTICAL: "vertical", HORIZONTAL: "horizontal" } };
        n(49), n(42), n(43), n(44), n(192), n(120), n(91), n(50);
        function jr(t) {
            return (jr =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function $r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Br(t, e) {
            return !e || ("object" !== jr(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function xr(t) {
            return (xr = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Mr(t, e) {
            return (Mr =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Dr = (function (t) {
            function e(t, n) {
                var i;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((i = Br(this, xr(e).call(this))).filterTreeType = t),
                    (i.clearType = n),
                    (i.requestInstantly = !0),
                    (i.label = i.clearType == e.ClearType.CLEAR_ALL ? a.a.clearAll : a.a.clear),
                    i
                );
            }
            var n, i, s;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Mr(t, e);
                })(e, t),
                (n = e),
                (s = [
                    {
                        key: "ClearType",
                        get: function () {
                            return { CLEAR_SINGLE_VALUE: "clear-single-value", CLEAR_OPTION_VALUES: "clear-option-values", CLEAR_ALL: "clear-all" };
                        },
                    },
                ]),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            switch (this.clearType) {
                                case e.ClearType.CLEAR_SINGLE_VALUE:
                                    return '\n\t\t\t\t\t<button aria-label="{{label}}" class="{{class.button}} {{class.clearButton}}"></button>\n\t\t\t\t';
                                case e.ClearType.CLEAR_OPTION_VALUES:
                                    return '\n\t\t\t\t\t<button class="{{class.button}} {{class.clearButton}}">{{label}}</button>\n\t\t\t\t';
                                case e.ClearType.CLEAR_ALL:
                                    return '\n\t\t\t\t\t<button class="{{class.button}} {{class.clearAllButton}}">{{label}}</button>\n\t\t\t\t';
                                default:
                                    throw Error("Wrong filter clear type");
                            }
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return this.getTemplate()
                                .replace(/{{label.clear}}/g, a.a.clear)
                                .replace(/{{class.button}}/g, f.button)
                                .replace(/{{class.clearButton}}/g, f.clearButton)
                                .replace(/{{class.clearAllButton}}/g, f.clearAllButton)
                                .replace(/{{label}}/g, this.label);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            this.$element || (this.$element = r()(this.compileTemplate())), this.isVisible() ? this.$element.show() : this.$element.hide();
                        },
                    },
                    {
                        key: "isVisible",
                        value: function () {
                            var t = !0;
                            switch (this.clearType) {
                                case e.ClearType.CLEAR_OPTION_VALUES:
                                    var n = this.parent;
                                    if (n.displayType == hr.a.DisplayType.MULTI_LEVEL_COLLECTIONS) {
                                        var i = n.filterOptionId.replace(l.a.prefix + "_c_", l.a.prefix + "_ct_");
                                        t = l.a.queryParams[n.filterOptionId] || l.a.queryParams[i];
                                    } else t = l.a.queryParams[n.filterOptionId];
                                    break;
                                case e.ClearType.CLEAR_ALL:
                                    (t = !1),
                                        Object.keys(l.a.queryParams).forEach(function (e) {
                                            if (e.startsWith(l.a.prefix)) {
                                                var n = l.a.queryParams[e];
                                                (p.a.isSearchPage() && e.startsWith(l.a.prefix + "_c_") && 0 == n) || (t = !0);
                                            }
                                        });
                            }
                            return !!t;
                        },
                    },
                    {
                        key: "isBindEvents",
                        value: function () {
                            return !this.isBoundEvent;
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            this.$element && this.$element.on("click", this.onClick.bind(this));
                        },
                    },
                    {
                        key: "onClick",
                        value: function (t) {
                            if ((t && t.preventDefault(), this.requestInstantly))
                                switch (this.clearType) {
                                    case e.ClearType.CLEAR_SINGLE_VALUE:
                                        this.onClearSingleValue();
                                        break;
                                    case e.ClearType.CLEAR_OPTION_VALUES:
                                        this.onClearOptionValues();
                                        break;
                                    case e.ClearType.CLEAR_ALL:
                                        this.onClearAll();
                                }
                            else
                                switch (this.clearType) {
                                    case e.ClearType.CLEAR_OPTION_VALUES:
                                        this.onDeselectOptionValues();
                                }
                        },
                    },
                    {
                        key: "onClearSingleValue",
                        value: function () {
                            var t = this.parent,
                                e = t.filterOptionId,
                                n = t.filterItemId,
                                i = l.a.queryParams[e];
                            if (null != i) {
                                Array.isArray(i) || (i = [i]);
                                var r = i.indexOf(n),
                                    o = [];
                                if (
                                    (r > -1 &&
                                        (o = i.filter(function (t, e) {
                                            return e != r;
                                        })),
                                    0 == o.length ? (Le.default.setParam(e, null), Le.default.setParam(e + "_and_condition", null), Le.default.setParam(e + "_show_exact_rating", null)) : Le.default.setParam(e, o),
                                    p.a.isSearchPage() && e.startsWith(l.a.prefix + "_ct_"))
                                ) {
                                    var a = e.replace(l.a.prefix + "_ct_", l.a.prefix + "_c_");
                                    Le.default.setParam(a, null);
                                }
                                Le.default.setParam("page", 1);
                                var s = { filterOptionId: e, filterOptionValue: n };
                                Le.default.applyFilter("clear", s);
                            }
                        },
                    },
                    {
                        key: "onClearOptionValues",
                        value: function () {
                            var t = this.parent;
                            t.filterTreeType == Rr.FilterTreeType.HORIZONTAL && !o.a.getSettingValue("general.keepTabOpenState") && t.collapse && this.parent.collapse.onToggleHorizontal(), (l.a.internalClick = !0);
                            var e = t.filterOptionId;
                            t.displayType != hr.a.DisplayType.MULTI_LEVEL_COLLECTIONS || p.a.isSearchPage() || (e = e.replace(l.a.prefix + "_c_", l.a.prefix + "_ct_"));
                            var n = { filterOptionId: e };
                            Le.default.setParam("page", 1), Le.default.setParam(e, null), Le.default.setParam(e + "_and_condition", null), Le.default.setParam(e + "_show_exact_rating", null), Le.default.applyFilter("clear", n);
                        },
                    },
                    {
                        key: "onClearAll",
                        value: function () {
                            var t = [];
                            Object.keys(l.a.queryParams).forEach(function (e) {
                                e.startsWith(l.a.prefix) && t.push(e);
                            }),
                                t.forEach(function (t) {
                                    Le.default.setParam(t, null);
                                }),
                                Le.default.setParam("page", 1),
                                Le.default.applyFilter("clearAll", {});
                        },
                    },
                    {
                        key: "onDeselectOptionValues",
                        value: function () {
                            this.parent.filterItems &&
                                this.parent.filterItems.forEach(function (t) {
                                    t.$element.removeClass("selected"), (t.isSelected = !1);
                                });
                        },
                    },
                ]) && $r(n.prototype, i),
                s && $r(n, s),
                e
            );
        })(y);
        function Vr(t) {
            return (Vr =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Nr(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Ur(t, e) {
            return !e || ("object" !== Vr(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function qr(t) {
            return (qr = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Hr(t, e) {
            return (Hr =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Gr = (function (t) {
            function e(t, n) {
                var i;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((i = Ur(this, qr(e).call(this))).filterTreeType = t || Rr.FilterTreeType.HORIZONTAL),
                    (i.applyType = n || e.ApplyType.APPLY_OPTION_VALUES),
                    i
                );
            }
            var n, i, l;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Hr(t, e);
                })(e, t),
                (n = e),
                (l = [
                    {
                        key: "ApplyType",
                        get: function () {
                            return { APPLY_OPTION_VALUES: "apply-option-values", APPLY_ALL: "apply-all" };
                        },
                    },
                ]),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            this.label = this.filterTreeType == Rr.FilterTreeType.HORIZONTAL && o.a.getSettingValue("general.requestInstantly") ? a.a.close : a.a.apply;
                        },
                    },
                    {
                        key: "getTemplate",
                        value: function () {
                            return this.applyType == e.ApplyType.APPLY_ALL
                                ? '\n\t\t\t\t<button class="{{class.button}} {{class.applyAllButton}}">{{label.applyAll}}</button>\n\t\t\t'
                                : '\n\t\t\t\t<button class="{{class.button}} {{class.applyButton}}">{{label.apply}}</button>\n\t\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return this.getTemplate()
                                .replace(/{{label.apply}}/g, this.label)
                                .replace(/{{label.applyAll}}/g, a.a.applyAll)
                                .replace(/{{class.button}}/g, f.button)
                                .replace(/{{class.applyButton}}/g, f.applyButton)
                                .replace(/{{class.applyAllButton}}/g, f.applyAllButton);
                        },
                    },
                    {
                        key: "isRender",
                        value: function () {
                            return !(this.parent.filterType == hr.a.FilterType.COLLECTION);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            this.$element || (this.$element = r()(this.compileTemplate()));
                        },
                    },
                    {
                        key: "isBindEvents",
                        value: function () {
                            return !this.isBoundEvent;
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            this.$element && this.$element.on("click", this.onClick.bind(this));
                        },
                    },
                    {
                        key: "onClick",
                        value: function (t) {
                            if ((t && t.preventDefault(), this.applyType == e.ApplyType.APPLY_ALL)) this.onApplyAll();
                            else {
                                if (
                                    this.filterTreeType == Rr.FilterTreeType.HORIZONTAL &&
                                    (!o.a.getSettingValue("general.keepTabOpenState") && this.parent.collapse && this.parent.collapse.onToggleHorizontal(), o.a.getSettingValue("general.requestInstantly"))
                                )
                                    return;
                                this.onApplyOptionValues();
                            }
                        },
                    },
                    {
                        key: "onApplyOptionValues",
                        value: function () {
                            var t = [],
                                e = this.parent.filterOptionId,
                                n = this.parent.filterItems;
                            this.parent.displayType == hr.a.DisplayType.MULTI_LEVEL_TAG && (n = this.parent.allNestedFilterItems),
                                n.forEach(function (e) {
                                    e.isSelected && t.push(e.value);
                                }),
                                Le.default.setParam(e, t),
                                Le.default.setParam(e + "_and_condition", !!(this.parent.useAndCondition && t.length > 0) || null),
                                Le.default.setParam(e + "_show_exact_rating", !!(this.parent.showExactRating && t.length > 0) || null),
                                Le.default.setParam("page", 1);
                            var i = { filterOptionId: e, filterOptionValue: t };
                            Le.default.applyFilter("filter", i);
                        },
                    },
                    {
                        key: "onApplyAll",
                        value: function () {
                            (this.filterTreeType == Rr.FilterTreeType.HORIZONTAL &&
                                (this.parent.filterOptions &&
                                    this.parent.filterOptions.forEach(function (t) {
                                        t.collapse && !t.collapse.isCollapsed && t.collapse.onToggleHorizontal();
                                    }),
                                o.a.getSettingValue("general.requestInstantly"))) ||
                                (this.parent.filterOptions &&
                                    this.parent.filterOptions.forEach(function (t) {
                                        var e = [],
                                            n = t.filterOptionId;
                                        (t.displayType == hr.a.DisplayType.MULTI_LEVEL_TAG ? t.allNestedFilterItems : t.filterItems).forEach(function (t) {
                                            t.isSelected && e.push(t.value);
                                        }),
                                            Le.default.setParam(n, e),
                                            Le.default.setParam(n + "_and_condition", !!(t.useAndCondition && e.length > 0) || null),
                                            Le.default.setParam(n + "_show_exact_rating", !!(t.showExactRating && e.length > 0) || null);
                                    }),
                                Le.default.setParam("page", 1),
                                Le.default.applyFilter("filter"));
                        },
                    },
                ]) && Nr(n.prototype, i),
                l && Nr(n, l),
                e
            );
        })(y);
        n(138);
        function Wr(t) {
            return (Wr =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function zr(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Kr(t, e) {
            return !e || ("object" !== Wr(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Yr(t) {
            return (Yr = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Qr(t, e) {
            return (Qr =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Jr = (function (t) {
            function e(t) {
                var n;
                if (
                    ((function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    (n = Kr(this, Yr(e).call(this))),
                    !t)
                )
                    throw Error("Pass filterTreeType into FilterOptionItem constructor.");
                return (n.requestInstantly = !0), (n.filterTreeType = t), (n.$element = null), (n.settings = { enable3rdCurrencySupport: o.a.getSettingValue("general.enable3rdCurrencySupport") }), n;
            }
            var n, i, s;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Qr(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            this.requestInstantly = this.filterTreeType == Rr.FilterTreeType.VERTICAL || o.a.getSettingValue("general.requestInstantly");
                        },
                    },
                    {
                        key: "getTemplate",
                        value: function () {
                            throw Error("Override this method");
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            throw Error("Override this method");
                        },
                    },
                    {
                        key: "isRender",
                        value: function () {
                            var t = this.filterOption ? this.filterOption : this.parent,
                                e = this.hasOwnProperty("docCount") && (this.docCount > 0 || null === this.docCount),
                                n = t.filterType == hr.a.FilterType.REVIEW_RATINGS && t.showExactRating,
                                i = t.filterType == hr.a.FilterType.COLLECTION && (t.keepValuesStatic || "all" == this.handle),
                                r = (t.displayType == hr.a.DisplayType.MULTI_LEVEL_COLLECTIONS && 1 != this.level) || t.displayType == hr.a.DisplayType.MULTI_LEVEL_TAG,
                                a = o.a.getSettingValue("general.showOutOfStockOption");
                            return n || i || r || e || a;
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            this.$element || (this.$element = r()(this.compileTemplate())), (this.isSelected = this.isAppliedFilter()), this.isSelected ? this.$element.addClass("selected") : this.$element.removeClass("selected");
                        },
                    },
                    {
                        key: "buildCount",
                        value: function () {
                            var t = "";
                            if (o.a.getSettingValue("general.showFilterOptionCount") && "box" != this.parent.displayType) {
                                var e = !1;
                                (this.docCount > 0 || o.a.getSettingValue("general.showOutOfStockOption") || (this.parent.filterType == hr.a.FilterType.REVIEW_RATINGS && this.parent.showExactRating)) && (e = !0);
                                var n = "all" == this.handle && 0 == this.docCount;
                                !e || this.parent.keepValuesStatic || n || (t = "(" + this.docCount + ")");
                            }
                            return t;
                        },
                    },
                    {
                        key: "buildLabel",
                        value: function () {
                            var t = this.filterOption ? this.filterOption : this.parent,
                                e = this.label,
                                n = t.prefix;
                            return "string" != typeof e
                                ? ""
                                : ("string" == typeof n && ((n = n.replace(/\\/g, "")), (e = e.replace(n, "").trim())),
                                  (e = p.a.stripScriptTag(e)),
                                  this.settings.enable3rdCurrencySupport || (e = p.a.stripHtml(e)),
                                  e.indexOf("boost-pfs-filter-icon-star") > -1
                                      ? e
                                      : ((t.displayAllValuesInUppercaseForm = t.displayAllValuesInUppercaseForm || !1),
                                        t.displayAllValuesInUppercaseForm
                                            ? e.toUpperCase()
                                            : o.a.getSettingValue("general.forceCapitalizeFilterOptionValues")
                                            ? p.a.capitalize(e, !0)
                                            : o.a.getSettingValue("general.capitalizeFirstLetterFilterOptionValues")
                                            ? p.a.capitalize(e, !0, !0)
                                            : o.a.getSettingValue("general.capitalizeFilterOptionValues")
                                            ? p.a.capitalize(e)
                                            : e));
                        },
                    },
                    {
                        key: "buildPercentSaleLabel",
                        value: function () {
                            return this.from ? (this.to ? this.from + "% - " + this.to + "%" : a.a.above + " " + this.from + "%") : a.a.under + " " + this.to + "%";
                        },
                    },
                    {
                        key: "buildPriceListLabel",
                        value: function () {
                            return this.from
                                ? this.to
                                    ? p.a.formatMoney(this.from, l.a.moneyFormat, !0) + " - " + p.a.formatMoney(this.to, l.a.moneyFormat, !0)
                                    : a.a.above + " " + p.a.formatMoney(this.from, l.a.moneyFormat, !0)
                                : a.a.under + " " + p.a.formatMoney(this.to, l.a.moneyFormat, !0);
                        },
                    },
                    {
                        key: "isBindEvents",
                        value: function () {
                            return !this.isBoundEvent;
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            this.$element && this.$element.on("click", this.onClick.bind(this));
                        },
                    },
                    {
                        key: "onClick",
                        value: function (t) {
                            t && t.preventDefault(), this.isDisabled() || (this.requestInstantly || this.parent.filterType == hr.a.FilterType.COLLECTION ? this.onApplyFilter() : this.onSelectFilter());
                        },
                    },
                    {
                        key: "isDisabled",
                        value: function () {
                            return this.parent.filterType == hr.a.FilterType.COLLECTION ? !this.parent.keepValuesStatic && "all" != this.handle && 0 == this.docCount : 0 == this.docCount;
                        },
                    },
                    {
                        key: "isAppliedFilter",
                        value: function () {
                            var t = this.parent.filterOptionId;
                            if (this.parent.filterType == hr.a.FilterType.COLLECTION) {
                                if (l.a.queryParams.collection_scope == this.collectionId) return !0;
                            } else {
                                var e = l.a.queryParams[t];
                                if (Array.isArray(e) && e.includes(this.value)) return !0;
                            }
                            return !1;
                        },
                    },
                    {
                        key: "onSelectFilter",
                        value: function () {
                            var t = this;
                            (this.isSelected = !this.isSelected),
                                this.$element.toggleClass("selected"),
                                this.isSelected &&
                                    this.parent.selectType == hr.a.SelectType.SINGLE &&
                                    this.parent.filterItems.forEach(function (e) {
                                        e != t && (e.$element && e.$element.removeClass("selected"), (e.isSelected = !1));
                                    });
                        },
                    },
                    {
                        key: "onApplyFilter",
                        value: function () {
                            var t = this,
                                e = this.parent.filterType,
                                n = this.parent.displayType,
                                i = this.parent.selectType,
                                r = this.parent.filterOptionId,
                                o = "all" == this.handle && 0 == this.docCount && e == hr.a.FilterType.COLLECTION;
                            if (this.docCount > 0 || this.parent.keepValuesStatic || n == hr.a.DisplayType.RANGE || o) {
                                l.a.internalClick = !0;
                                var a = "";
                                if (e == hr.a.FilterType.COLLECTION) {
                                    (this.isSelected = !0),
                                        (l.a.collectionId = this.collectionId),
                                        Le.default.setParam("collection_scope", this.collectionId),
                                        Le.default.setParam("sort", this.sortOrder),
                                        p.a.isSearchPage() ? Le.default.setParam(r, this.collectionId) : (u.a.setAddressBarPathAfterFilter("/collections/" + this.handle), u.a.setWindowTitleAfterFilter(this.label + " - " + l.a.shopName));
                                    var s = [];
                                    Object.keys(l.a.queryParams).forEach(function (t) {
                                        t.startsWith(l.a.prefix) && !t.startsWith(l.a.prefix + "_c") && s.push(t);
                                    }),
                                        s.forEach(function (t) {
                                            Le.default.setParam(t, null);
                                        }),
                                        (a = "collection");
                                } else {
                                    this.isSelected = !this.isSelected;
                                    var c = null;
                                    i == hr.a.SelectType.SINGLE
                                        ? (c = this.isSelected ? [this.value] : [])
                                        : ((c = l.a.queryParams[r]),
                                          Array.isArray(c) || (c = []),
                                          this.isSelected
                                              ? c.includes(this.value) || c.push(this.value)
                                              : (c = c.filter(function (e) {
                                                    return e !== t.value;
                                                }))),
                                        Le.default.setParam(r, c),
                                        Le.default.setParam(r + "_and_condition", !!(this.parent.useAndCondition && c.length > 0) || null),
                                        Le.default.setParam(r + "_show_exact_rating", !!(this.parent.showExactRating && c.length > 0) || null),
                                        (a = "filter");
                                }
                                Le.default.setParam("page", 1);
                                var f = { filterOptionId: r, filterValue: this.value };
                                Le.default.applyFilter(a, f);
                            }
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            switch (((this.value = t.key), (this.label = t.key), (this.docCount = t.doc_count ? t.doc_count : 0), (this.isRenderOnScroll = t.isRenderOnScroll), this.parent.filterType)) {
                                case hr.a.FilterType.COLLECTION:
                                    (this.collectionId = t.key),
                                        (this.label = t.displayName ? t.displayName : t.label),
                                        (this.handle = t.handle),
                                        (this.href = p.a.isSearchPage() ? "javascript:void(0);" : "/collections/" + this.handle),
                                        (this.sortOrder = t.sort_order ? t.sort_order : l.a.defaultSorting);
                                    break;
                                case hr.a.FilterType.REVIEW_RATINGS:
                                    (this.from = parseFloat(t.from).toFixed()), (this.value = this.from);
                                    break;
                                case hr.a.FilterType.STOCK:
                                    (this.value = "in-stock" == t.key ? "true" : "false"), (this.label = t.label);
                                    break;
                                case hr.a.FilterType.PERCENT_SALE:
                                    (this.from = t.from), (this.to = t.to), (this.label = this.buildPercentSaleLabel()), (this.value = (this.from ? this.from : "") + ":" + (this.to ? this.to : ""));
                                    break;
                                case hr.a.FilterType.PRICE:
                                case hr.a.FilterType.VARIANTS_PRICE:
                                    (this.from = t.from), (this.to = t.to), (this.label = this.buildPriceListLabel()), (this.value = (this.from ? this.from : "") + ":" + (this.to ? this.to : ""));
                            }
                            (this.label = this.buildLabel()), (this.countLabel = this.buildCount()), (this.isSelected = this.isAppliedFilter());
                        },
                    },
                ]) && zr(n.prototype, i),
                s && zr(n, s),
                e
            );
        })(y);
        function Zr(t) {
            return (Zr =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Xr(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function to(t, e) {
            return !e || ("object" !== Zr(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function eo(t) {
            return (eo = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function no(t, e) {
            return (no =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var io = (function (t) {
            function e(t) {
                var n;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((n = to(this, eo(e).call(this, t))).$element = null),
                    n
                );
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && no(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return this.parent.filterType == hr.a.FilterType.COLLECTION
                                ? '\n\t\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{disabled}}">\n\t\t\t\t\t<a class="{{class.button}}" href="{{href}}">\n\t\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-amount">{{countLabel}}</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t'
                                : '\n\t\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{disabled}}">\n\t\t\t\t\t<button class="{{class.button}}">\n\t\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-amount">{{countLabel}}</span>\n\t\t\t\t\t</button>\n\t\t\t\t</li>\n\t\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return this.getTemplate()
                                .replace(/{{class.filterOptionItem}}/g, f.filterOptionItem)
                                .replace(/{{class.filterOptionLabel}}/g, f.filterOptionLabel)
                                .replace(/{{class.button}}/g, f.button)
                                .replace(/{{disabled}}/g, this.isDisabled() ? "disabled" : "")
                                .replace(/{{label}}/g, this.label)
                                .replace(/{{href}}/g, this.href)
                                .replace(/{{countLabel}}/g, this.countLabel);
                        },
                    },
                ]) && Xr(n.prototype, i),
                r && Xr(n, r),
                e
            );
        })(Jr);
        function ro(t) {
            return (ro =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function oo(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function ao(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function lo(t, e) {
            return !e || ("object" !== ro(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function so(t, e, n) {
            return (so =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (t, e, n) {
                          var i = (function (t, e) {
                              for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = co(t)); );
                              return t;
                          })(t, e);
                          if (i) {
                              var r = Object.getOwnPropertyDescriptor(i, e);
                              return r.get ? r.get.call(n) : r.value;
                          }
                      })(t, e, n || t);
        }
        function co(t) {
            return (co = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function uo(t, e) {
            return (uo =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var po = (function (t) {
            function e() {
                return oo(this, e), lo(this, co(e).apply(this, arguments));
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && uo(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{disabled}}">\n\t\t\t\t<button class="{{class.button}}">\n\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t<span class="boost-pfs-filter-option-amount">{{countLabel}}</span>\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return this.getTemplate()
                                .replace(/{{class.filterOptionItem}}/g, f.filterOptionItem)
                                .replace(/{{class.filterOptionLabel}}/g, f.filterOptionLabel)
                                .replace(/{{disabled}}/g, this.isDisabled() ? "disabled" : "")
                                .replace(/{{class.button}}/g, f.button)
                                .replace(/{{label}}/g, this.label)
                                .replace(/{{countLabel}}/g, this.countLabel);
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            so(co(e.prototype), "bindEvents", this).call(this), this.setBoxItemSize();
                        },
                    },
                    {
                        key: "setBoxItemSize",
                        value: function () {
                            this.filterTreeType == Rr.FilterTreeType.VERTICAL && this.$element && this.$element.css("width", this.parent.calculateBoxItemSize());
                        },
                    },
                ]) && ao(n.prototype, i),
                r && ao(n, r),
                e
            );
        })(Jr);
        function fo(t) {
            return (fo =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function ho(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function yo(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function go(t, e) {
            return !e || ("object" !== fo(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function mo(t, e, n) {
            return (mo =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (t, e, n) {
                          var i = (function (t, e) {
                              for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = bo(t)); );
                              return t;
                          })(t, e);
                          if (i) {
                              var r = Object.getOwnPropertyDescriptor(i, e);
                              return r.get ? r.get.call(n) : r.value;
                          }
                      })(t, e, n || t);
        }
        function bo(t) {
            return (bo = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function vo(t, e) {
            return (vo =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var So = (function (t) {
            function e() {
                return ho(this, e), go(this, bo(e).apply(this, arguments));
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && vo(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<li class="{{class.filterOptionItem}} {{disabled}} {{swatchBorder}}">\n\t\t\t\t<span class="boost-pfs-filter-option-swatch-image" \n\t\t\t\t\tstyle="background-color: {{backgroundColor}}; \n\t\t\t\t\tbackground-image: url({{swatchFileUrl}});" title="{{label}}">\n\t\t\t\t</span>\n\t\t\t\t<button class="{{class.button}}">\n\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t<span class="boost-pfs-filter-option-amount">{{countLabel}}</span>\n\t\t\t\t</button>\n\t\t\t</li> \n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return this.getTemplate()
                                .replace(/{{class.filterOptionItem}}/g, f.filterOptionItem)
                                .replace(/{{class.filterOptionLabel}}/g, f.filterOptionLabel)
                                .replace(/{{disabled}}/g, this.isDisabled() ? "disabled" : "")
                                .replace(/{{class.button}}/g, f.button)
                                .replace(/{{label}}/g, this.label)
                                .replace(/{{countLabel}}/g, this.countLabel)
                                .replace(/{{backgroundColor}}/g, this.backgroundColor)
                                .replace(/{{swatchBorder}}/g, this.swatchBorder)
                                .replace(/{{swatchFileUrl}}/g, this.swatchFileUrl);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            (this.swatchFileName = this.buildSwatchFileName()),
                                (this.swatchFileUrl = p.a.getFilePath(this.swatchFileName, l.a.swatchExtension, o.a.getSettingValue("general.swatchImageVersion"))),
                                (this.backgroundColor = this.buildBackgroundColor()),
                                (this.swatchBorder = "white" == this.backgroundColor ? "has-border" : ""),
                                mo(bo(e.prototype), "render", this).call(this);
                        },
                    },
                    {
                        key: "buildSwatchFileName",
                        value: function () {
                            this.parent.filterOptionId;
                            var t = this.parent.prefix,
                                e = this.value;
                            this.parent.filterType == hr.a.FilterType.COLLECTION && (e = this.label);
                            var n = this.parent.label.trim().toLowerCase();
                            if (o.a.getSettingValue("general.removePrefixFromSwatchFile") && t) {
                                var i = t.replace(/\\/g, "");
                                e = e.replace(i, "");
                            }
                            return n + "-" + p.a.slugify(e).replace(/\#/g, "");
                        },
                    },
                    {
                        key: "buildBackgroundColor",
                        value: function () {
                            return p.a.slugify(this.label).split("-").pop();
                        },
                    },
                ]) && yo(n.prototype, i),
                r && yo(n, r),
                e
            );
        })(Jr);
        function Oo(t) {
            return (Oo =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function To(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function Po(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function wo(t, e) {
            return !e || ("object" !== Oo(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function _o(t, e, n) {
            return (_o =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (t, e, n) {
                          var i = (function (t, e) {
                              for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Co(t)); );
                              return t;
                          })(t, e);
                          if (i) {
                              var r = Object.getOwnPropertyDescriptor(i, e);
                              return r.get ? r.get.call(n) : r.value;
                          }
                      })(t, e, n || t);
        }
        function Co(t) {
            return (Co = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function ko(t, e) {
            return (ko =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Eo = (function (t) {
            function e() {
                return To(this, e), wo(this, Co(e).apply(this, arguments));
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && ko(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{disabled}}">\n\t\t\t\t<button class="{{class.button}}">\n\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t<span class="boost-pfs-filter-option-value">\n\t\t\t\t\t\t<i style="color: {{starColor}}" class="{{class.filterOptionItemStar}} {{active}}">&#9733;</i>\x3c!--\n\t\t\t\t\t\t--\x3e<i style="color: {{starColor}}" class="{{class.filterOptionItemStar}} {{active}}">&#9733;</i>\x3c!--\n\t\t\t\t\t\t--\x3e<i style="color: {{starColor}}" class="{{class.filterOptionItemStar}} {{active}}">&#9733;</i>\x3c!--\n\t\t\t\t\t\t--\x3e<i style="color: {{starColor}}" class="{{class.filterOptionItemStar}} {{active}}">&#9733;</i>\x3c!--\n\t\t\t\t\t\t--\x3e<i style="color: {{starColor}}" class="{{class.filterOptionItemStar}} {{active}}">&#9733;</i>\n\t\t\t\t\t\t<span>{{label}}</span>\n\t\t\t\t\t</span>\t\n\t\t\t\t\t<span class="boost-pfs-filter-option-amount">{{countLabel}}</span>\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            for (var t = this.getTemplate(), e = 0; e < this.from; e++) t = t.replace(/{{active}}/, "{{class.filterOptionItemStarActive}}");
                            return (t = t.replace(/{{active}}/g, ""))
                                .replace(/{{class.filterOptionItem}}/g, f.filterOptionItem)
                                .replace(/{{class.filterOptionLabel}}/g, f.filterOptionLabel)
                                .replace(/{{class.filterOptionItemStar}}/g, f.filterOptionItemStar)
                                .replace(/{{class.filterOptionItemStarActive}}/g, f.filterOptionItemStarActive)
                                .replace(/{{class.button}}/g, f.button)
                                .replace(/{{disabled}}/g, this.isDisabled() ? "disabled" : "")
                                .replace(/{{label}}/g, this.label)
                                .replace(/{{countLabel}}/g, this.countLabel)
                                .replace(/{{starColor}}/g, this.parent.starColor)
                                .replace(/{{class.button}}/g, f.button)
                                .replace(/\r?\n|\r/g, "");
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            (this.label = this.parent.showExactRating ? "" : a.a.ratingUp), _o(Co(e.prototype), "render", this).call(this);
                        },
                    },
                ]) && Po(n.prototype, i),
                r && Po(n, r),
                e
            );
        })(Jr);
        function Io(t) {
            return (Io =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Lo(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function Ao(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Fo(t, e) {
            return !e || ("object" !== Io(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Ro(t, e, n) {
            return (Ro =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (t, e, n) {
                          var i = (function (t, e) {
                              for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = jo(t)); );
                              return t;
                          })(t, e);
                          if (i) {
                              var r = Object.getOwnPropertyDescriptor(i, e);
                              return r.get ? r.get.call(n) : r.value;
                          }
                      })(t, e, n || t);
        }
        function jo(t) {
            return (jo = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function $o(t, e) {
            return ($o =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Bo = (function (t) {
            function e() {
                return Lo(this, e), Fo(this, jo(e).apply(this, arguments));
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && $o(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t<div class="boost-pfs-filter-option-item-parent-category">\n\t\t\t\t\t<span role="button" aria-controls="sub-category-{{value}}" aria-expanded="true" class="sub-icon {{closeClass}}"></span>\n\t\t\t\t\t<a href="javascript:;" class="{{class.filterOptionItem}} {{class.filterOptionLabel}} boost-pfs-filter-option-main-cat">\n\t\t\t\t\t\t{{label}}\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<ul class="boost-pfs-filter-option-item-sub-category-list">\n\t\t\t\t\t{{subItems}}\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t';
                        },
                    },
                    {
                        key: "getSubItemTemplate",
                        value: function () {
                            return '\n\t\t\t<li class="{{class.filterOptionItem}} {{class.filterOptionLabel}} {{selected}} boost-pfs-filter-option-item-sub-category">\n\t\t\t\t<a href="javascript:;">\n\t\t\t\t\t{{subLabel}}\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            var t = this,
                                e = "";
                            return (
                                Array.isArray(this.tags) &&
                                    this.tags.forEach(function (n) {
                                        var i = t.isSubCategorySelected(n);
                                        e += t
                                            .getSubItemTemplate()
                                            .replace(/{{subLabel}}/g, n)
                                            .replace(/{{selected}}/g, i ? "selected" : "");
                                    }),
                                this.getTemplate()
                                    .replace(/{{subItems}}/g, e)
                                    .replace(/{{class.filterOptionItem}}/g, f.filterOptionItem)
                                    .replace(/{{class.filterOptionLabel}}/g, f.filterOptionLabel)
                                    .replace(/{{disabled}}/g, this.isDisabled() ? "disabled" : "")
                                    .replace(/{{label}}/g, this.label)
                                    .replace(/{{value}}/g, this.value)
                                    .replace(/{{countLabel}}/g, this.countLabel)
                            );
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            this.$element.on("click", this.redirectToCollection.bind(this)), this.$element.find("ul > li").on("click", this.redirectToSubCategory.bind(this));
                        },
                    },
                    {
                        key: "isSubCategorySelected",
                        value: function (t) {
                            return !p.a.isSearchPage() && decodeURIComponent(window.location.pathname).split("/").pop() == p.a.slugify(t) && ((this.isAnyTagSelected = !0), !0);
                        },
                    },
                    {
                        key: "redirectToCollection",
                        value: function (t) {
                            t.preventDefault(), t.stopPropagation();
                            var e = "/collections/" + this.handle;
                            window.location.href = e;
                        },
                    },
                    {
                        key: "redirectToSubCategory",
                        value: function (t) {
                            t.preventDefault(), t.stopPropagation();
                            var e = r()(t.currentTarget).find("a").html(),
                                n = p.a.slugify(e),
                                i = "/collections/" + this.handle + "/" + n;
                            window.location.href = i;
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            Ro(jo(e.prototype), "setData", this).call(this, t), (this.tags = t.tags);
                        },
                    },
                ]) && Ao(n.prototype, i),
                o && Ao(n, o),
                e
            );
        })(Jr);
        function xo(t) {
            return (xo =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Mo(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function Do(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Vo(t, e) {
            return !e || ("object" !== xo(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function No(t, e, n) {
            return (No =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (t, e, n) {
                          var i = (function (t, e) {
                              for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Uo(t)); );
                              return t;
                          })(t, e);
                          if (i) {
                              var r = Object.getOwnPropertyDescriptor(i, e);
                              return r.get ? r.get.call(n) : r.value;
                          }
                      })(t, e, n || t);
        }
        function Uo(t) {
            return (Uo = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function qo(t, e) {
            return (qo =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Ho = (function (t) {
            function e() {
                return Mo(this, e), Vo(this, Uo(e).apply(this, arguments));
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && qo(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "isRender",
                        value: function () {
                            return !1;
                        },
                    },
                    {
                        key: "setValue",
                        value: function (t, e) {
                            (this.value = t + ":" + e), (this.isSelected = this.min != t || this.max != e);
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            No(Uo(e.prototype), "setData", this).call(this, t), null != t.min && null != t.max && ((this.min = t.min), (this.max = t.max), (this.key = this.parent.filterOptionId), (this.value = t.min + ":" + t.max));
                        },
                    },
                ]) && Do(n.prototype, i),
                r && Do(n, r),
                e
            );
        })(Jr);
        n(157), n(115), n(163);
        function Go(t) {
            return (Go =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Wo(t, e) {
            return (
                (function (t) {
                    if (Array.isArray(t)) return t;
                })(t) ||
                (function (t, e) {
                    if (!(Symbol.iterator in Object(t)) && "[object Arguments]" !== Object.prototype.toString.call(t)) return;
                    var n = [],
                        i = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var a, l = t[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
                    } catch (t) {
                        (r = !0), (o = t);
                    } finally {
                        try {
                            i || null == l.return || l.return();
                        } finally {
                            if (r) throw o;
                        }
                    }
                    return n;
                })(t, e) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                })()
            );
        }
        function zo(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Ko(t, e) {
            return !e || ("object" !== Go(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Yo(t) {
            return (Yo = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Qo(t, e) {
            return (Qo =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Jo = (function (t) {
                function e(t) {
                    var n;
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        ((n = Ko(this, Yo(e).call(this))).filterTreeType = t),
                        (n.isExpanded = !1),
                        (n.label = a.a.viewMore),
                        (n.class = f.filterOptionViewMore),
                        (n.isVisible = !0),
                        (n.$element = null),
                        n
                    );
                }
                var n, i, l;
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Qo(t, e);
                    })(e, t),
                    (n = e),
                    (l = [
                        {
                            key: "getViewMoreStateData",
                            value: function (t) {
                                return Zo.get(t);
                            },
                        },
                        {
                            key: "setViewMoreStateData",
                            value: function (t, e) {
                                Zo.set(t, e);
                            },
                        },
                    ]),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                this.numberVisibleItems = this.getNumberVisibleItems();
                            },
                        },
                        {
                            key: "getTemplate",
                            value: function () {
                                switch (this.filterTreeType) {
                                    case Rr.FilterTreeType.VERTICAL:
                                        return '\n\t\t\t\t\t<div class="{{class.button}} {{class}}"><button>{{label}}</button></div>\n\t\t\t\t';
                                    case Rr.FilterTreeType.HORIZONTAL:
                                        return '\n\t\t\t\t\t<div class="{{class.button}} {{class}}"><button aria-label="{{label}}"></button></div>\n\t\t\t\t';
                                    default:
                                        throw Error("Pass a filter tree type into the constructor");
                                }
                            },
                        },
                        {
                            key: "compileTemplate",
                            value: function () {
                                return this.getTemplate()
                                    .replace(/{{class.button}}/g, f.button)
                                    .replace(/{{class}}/g, this.class)
                                    .replace(/{{label}}/g, this.label);
                            },
                        },
                        {
                            key: "isRender",
                            value: function () {
                                return this.parent.displayType != hr.a.DisplayType.RANGE && (this.parent.showMoreType == hr.a.ShowMoreType.VIEWMORE || this.parent.showMoreType == hr.a.ShowMoreType.VIEWMORE_SCROLLBAR);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                this.$element || (this.$element = r()(this.compileTemplate())), this.setVisibility();
                            },
                        },
                        {
                            key: "bindEvents",
                            value: function () {
                                this.$element &&
                                    (this.isBoundEvent || this.$element.on("click", this.onClick.bind(this)),
                                    this.parent.$filterOptionContentElement && this.parent.$filterOptionContentElement.addClass(f.filterHasViewMore),
                                    !this.isExpanded && e.getViewMoreStateData(this.parent.filterOptionId) ? this.onClick() : this.setFilterItemsVisibility());
                            },
                        },
                        {
                            key: "onClick",
                            value: function () {
                                (this.isExpanded = !this.isExpanded), e.setViewMoreStateData(this.parent.filterOptionId, this.isExpanded);
                                var t = "";
                                this.isExpanded
                                    ? ((this.label = a.a.viewLess), (this.class = f.filterOptionViewLess), (t = f.filterOptionViewMore))
                                    : ((this.label = a.a.viewMore), (this.class = f.filterOptionViewMore), (t = f.filterOptionViewLess)),
                                    this.filterTreeType == Rr.FilterTreeType.VERTICAL ? this.$element.find("button").html(this.label) : this.$element.removeClass(t).addClass(this.class),
                                    this.setFilterItemsVisibility();
                            },
                        },
                        {
                            key: "getNumberVisibleItems",
                            value: function () {
                                var t = o.a.getSettingValue("general.startViewMore")[this.parent.displayType];
                                if (this.filterTreeType == Rr.FilterTreeType.HORIZONTAL) {
                                    var e = o.a.getSettingValue("general.filterHorizontalColumn");
                                    Number.isInteger(e) ? (t *= e) : (t = o.a.getSettingValue("general.startViewMoreH")[this.parent.displayType]);
                                }
                                return (!t || t <= 1) && (t = 5), t;
                            },
                        },
                        {
                            key: "setVisibility",
                            value: function () {
                                if (this.$element) {
                                    var t = this.parent.filterItems.size;
                                    this.parent.keepValuesStatic ||
                                        o.a.getSettingValue("general.showOutOfStockOption") ||
                                        (t = Array.from(this.parent.filterItems, function (t) {
                                            var e = Wo(t, 2);
                                            return { key: e[0], value: e[1] };
                                        }).filter(function (t) {
                                            return t.value.docCount > 0;
                                        }).length),
                                        this.parent.$filterItemsContainerElement && (t = this.parent.$filterItemsContainerElement.find("li").length),
                                        (this.isVisible = t > this.numberVisibleItems),
                                        this.isVisible ? this.$element.show() : this.$element.hide();
                                } else this.isVisible = !1;
                            },
                        },
                        {
                            key: "setFilterItemsVisibility",
                            value: function () {
                                if (this.parent.$filterItemsContainerElement) {
                                    var t = this.parent.$filterItemsContainerElement.find("li");
                                    if ((t.show(), !this.isExpanded)) {
                                        var e = this.numberVisibleItems,
                                            n = t.length;
                                        t.slice(e, n).hide();
                                    }
                                }
                            },
                        },
                    ]) && zo(n.prototype, i),
                    l && zo(n, l),
                    e
                );
            })(y),
            Zo = new Map(),
            Xo = Jo;
        function ta(t) {
            return (ta =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function ea(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function na(t, e) {
            return !e || ("object" !== ta(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function ia(t) {
            return (ia = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function ra(t, e) {
            return (ra =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var oa = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = na(this, ia(e).call(this))).$element = null),
                    (t.searchValue = ""),
                    t
                );
            }
            var n, i, l;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && ra(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            return '\n\t\t\t<div class="{{class.filterOptionShowSearchBox}}-wrapper">\n\t\t\t\t<input aria-label="Search Options" class="{{class.filterOptionShowSearchBox}}" type="text" autocomplete="on" placeholder="{{label.searchOptions}}" />\n\t\t\t</div>\n        ';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return this.getTemplate()
                                .replace(/{{class.filterOptionShowSearchBox}}/g, f.filterOptionShowSearchBox)
                                .replace(/{{label.searchOptions}}/g, a.a.searchOptions);
                        },
                    },
                    {
                        key: "isRender",
                        value: function () {
                            if (this.parent.filterTreeType == Rr.FilterTreeType.HORIZONTAL) return !1;
                            var t = this.parent.showSearchBoxFilterPC || o.a.getSettingValue("general.showSearchBoxFilterPCByDefault"),
                                e = this.parent.showSearchBoxFilterMobile || o.a.getSettingValue("general.showSearchBoxFilterMobileByDefault"),
                                n = [hr.a.FilterType.PRICE, hr.a.FilterType.PERCENT_SALE, hr.a.FilterType.STOCK],
                                i = [hr.a.DisplayType.RANGE, hr.a.DisplayType.MULTI_LEVEL_TAG, hr.a.DisplayType.MULTI_LEVEL_COLLECTIONS],
                                r = !n.includes(this.parent.filterType) && !i.includes(this.parent.displayType),
                                a = p.a.isMobile();
                            return r && ((!a && t) || (a && e));
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            this.$element || (this.$element = r()(this.compileTemplate()));
                        },
                    },
                    {
                        key: "isBindEvents",
                        value: function () {
                            return !this.isBoundEvent;
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            this.$element && (this.$element.find("input").on("keyup", this.onKeyUp.bind(this)), this.parent.$filterOptionContentElement && this.parent.$filterOptionContentElement.addClass(f.filterHasSearchBox));
                        },
                    },
                    {
                        key: "onKeyUp",
                        value: function (t) {
                            this.setSearchValue(t), this.setFilterItemsList();
                        },
                    },
                    {
                        key: "setSearchValue",
                        value: function (t) {
                            if (t && t.target) {
                                var e = t.target.value;
                                (e = "function" == typeof e.toString ? e.toLowerCase().trim() : ""), (this.searchValue = e);
                            } else this.searchValue = "";
                        },
                    },
                    {
                        key: "setFilterItemsList",
                        value: function () {
                            var t = this;
                            if (this.parent.$filterItemsContainerElement) {
                                if (this.searchValue)
                                    this.parent.filterItems.forEach(function (e) {
                                        e.$element && (e.label && e.label.toLowerCase().includes(t.searchValue) ? e.$element.appendTo(t.parent.$filterItemsContainerElement) : e.$element.detach());
                                    });
                                else {
                                    var e = 0,
                                        n = o.a.getSettingValue("general.scrollFirstLoadLength");
                                    this.parent.filterItems.forEach(function (i) {
                                        (i.isRenderOnScroll = t.parent.isLoadMoreOnScroll && e >= n), i.$element && (i.isRenderOnScroll ? i.$element.detach() : i.$element.appendTo(t.parent.$filterItemsContainerElement)), e++;
                                    }),
                                        (this.parent.scrollbar.numberFilterItemsRendered = n);
                                }
                                this.parent.viewMore && this.parent.viewMore.isRender() && (this.parent.viewMore.setVisibility(), this.parent.viewMore.setFilterItemsVisibility());
                            }
                        },
                    },
                ]) && ea(n.prototype, i),
                l && ea(n, l),
                e
            );
        })(y);
        function aa(t) {
            return (aa =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function la(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function sa(t, e) {
            return !e || ("object" !== aa(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function ca(t) {
            return (ca = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function ua(t, e) {
            return (ua =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var pa = (function (t) {
            function e(t) {
                var n;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((n = sa(this, ca(e).call(this))).tooltipText = "string" == typeof t ? p.a.escape(p.a.stripHtml(t)).trim() : null),
                    (n.$element = null),
                    (n.$popupElement = null),
                    n
                );
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && ua(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function (t) {
                            switch (t) {
                                case "popup":
                                    return '\n\t\t\t\t\t<div class="boost-pfs-filter-tooltip-wrapper">\n\t\t\t\t\t\t<div class="boost-pfs-filter-qtip-content">{{tooltipText}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t';
                                default:
                                    return '\n\t\t\t\t\t<div class="{{class.filterOptionTooltip}}">\n\t\t\t\t\t\t<span class="boost-pfs-filter-tooltip-arrow"></span>\n\t\t\t\t\t</div>\n\t\t\t\t';
                            }
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function (t) {
                            return this.getTemplate(t)
                                .replace(/{{tooltipText}}/g, this.tooltipText)
                                .replace(/{{class.filterOptionTooltip}}/g, f.filterOptionTooltip);
                        },
                    },
                    {
                        key: "isRender",
                        value: function () {
                            return !!this.tooltipText;
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            this.$element || (this.$element = r()(this.compileTemplate())), this.$popupElement || (this.$popupElement = r()(this.compileTemplate("popup")));
                        },
                    },
                    {
                        key: "isBindEvents",
                        value: function () {
                            return !this.isBoundEvent;
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            this.$element && this.$popupElement && this.$element.on("mouseover", this.showTooltipPopup.bind(this));
                        },
                    },
                    {
                        key: "showTooltipPopup",
                        value: function () {
                            var t = this.$element.position(),
                                e = this.$popupElement.find(".boost-pfs-filter-qtip-content").outerWidth();
                            this.$popupElement.css("left", t.left + "px"), e / 2 < t.left ? this.$popupElement.css("margin-left", -(e / 2 - 12) + "px") : e / 2 > t.left && this.$popupElement.css("margin-left", -t.left / 2 + "px");
                        },
                    },
                ]) && la(n.prototype, i),
                o && la(n, o),
                e
            );
        })(y);
        function fa(t) {
            return (fa =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function ha(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function ya(t, e) {
            return !e || ("object" !== fa(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function da(t) {
            return (da = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function ga(t, e) {
            return (ga =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var ma = (function (t) {
                function e() {
                    var t;
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        ((t = ya(this, da(e).call(this))).placeHolderHeight = ""),
                        (t.numberFilterItemsRendered = 0),
                        (t.$scrollElement = null),
                        t
                    );
                }
                var n, i, r;
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && ga(t, e);
                    })(e, t),
                    (n = e),
                    (r = [
                        {
                            key: "getScrollStateData",
                            value: function (t) {
                                return ba.get(t);
                            },
                        },
                        {
                            key: "setScrollStateData",
                            value: function (t, e) {
                                ba.set(t, e);
                            },
                        },
                        {
                            key: "isEnabled",
                            value: function (t, e, n) {
                                var i = [hr.a.DisplayType.RANGE],
                                    r = [hr.a.FilterType.REVIEW_RATINGS, hr.a.FilterType.STOCK, hr.a.FilterType.PERCENT_SALE, hr.a.FilterType.PRICE, hr.a.FilterType.VARIANTS_PRICE],
                                    a = n == hr.a.ShowMoreType.SCROLLBAR || n == hr.a.ShowMoreType.VIEWMORE_SCROLLBAR,
                                    l = p.a.isMobile(),
                                    s = (l && o.a.getSettingValue("general.activeFilterScrollbarMobile")) || (!l && o.a.getSettingValue("general.activeFilterScrollbarPC"));
                                return !i.includes(t) && !r.includes(e) && a && s;
                            },
                        },
                    ]),
                    (i = [
                        {
                            key: "isBindEvents",
                            value: function () {
                                return !this.isBoundEvent;
                            },
                        },
                        {
                            key: "bindEvents",
                            value: function () {
                                if (this.parent.$element && e.isEnabled(this.parent.displayType, this.parent.filterType, this.parent.showMoreType)) {
                                    var t = this.parent.$element.find("." + f.filterOptionContentInner);
                                    if (
                                        t.length > 0 &&
                                        ((this.$scrollElement = t),
                                        (this.parent.isLoadMoreOnScroll || o.a.getSettingValue("general.keepScrollState")) && this.$scrollElement.on("scroll", this.onScroll.bind(this)),
                                        o.a.getSettingValue("general.keepScrollState"))
                                    ) {
                                        var n = e.getScrollStateData(this.parent.filterOptionId);
                                        isNaN(n) || (this.$scrollElement[0].scrollTop = n);
                                    }
                                }
                            },
                        },
                        {
                            key: "onScroll",
                            value: function () {
                                if (o.a.getSettingValue("general.keepScrollState")) {
                                    var t = this.$scrollElement[0].scrollTop;
                                    e.setScrollStateData(this.parent.filterOptionId, t);
                                }
                                this.parent.isLoadMoreOnScroll && this.isScrollToBottom() && ((this.parent.searchBox && this.parent.searchBox.searchValue) || this.appendFilterItems());
                            },
                        },
                        {
                            key: "isScrollToBottom",
                            value: function () {
                                return !!this.$scrollElement && this.$scrollElement[0].scrollHeight - this.$scrollElement.scrollTop() - this.$scrollElement.outerHeight() < 1;
                            },
                        },
                        {
                            key: "appendFilterItems",
                            value: function () {
                                var t = this;
                                if (this.parent.$filterItemsContainerElement) {
                                    var e = o.a.getSettingValue("general.scrollFirstLoadLength");
                                    if (0 == this.numberFilterItemsRendered) this.numberFilterItemsRendered = e;
                                    else if (this.numberFilterItemsRendered == this.parent.filterItems.size) return;
                                    this.parent.$element.addClass("boost-pfs-filter-scrollbar-loading");
                                    var n = 0;
                                    this.parent.filterItems.forEach(function (i) {
                                        i.isRenderOnScroll && n < e && (t.parent.$filterItemsContainerElement.append(i.$element), (i.isRenderOnScroll = !1), n++, t.numberFilterItemsRendered++);
                                    }),
                                        setTimeout(
                                            function () {
                                                this.parent.$element.removeClass("boost-pfs-filter-scrollbar-loading");
                                            }.bind(this),
                                            200
                                        );
                                }
                            },
                        },
                    ]) && ha(n.prototype, i),
                    r && ha(n, r),
                    e
                );
            })(y),
            ba = new Map(),
            va = ma;
        function Sa(t) {
            return (Sa =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Oa(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function Ta(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Pa(t, e, n) {
            return e && Ta(t.prototype, e), n && Ta(t, n), t;
        }
        function wa(t, e) {
            return !e || ("object" !== Sa(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function _a(t, e, n) {
            return (_a =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (t, e, n) {
                          var i = (function (t, e) {
                              for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Ca(t)); );
                              return t;
                          })(t, e);
                          if (i) {
                              var r = Object.getOwnPropertyDescriptor(i, e);
                              return r.get ? r.get.call(n) : r.value;
                          }
                      })(t, e, n || t);
        }
        function Ca(t) {
            return (Ca = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function ka(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Ea(t, e);
        }
        function Ea(t, e) {
            return (Ea =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Ia = (function (t) {
                function e(t) {
                    var n;
                    return Oa(this, e), ((n = wa(this, Ca(e).call(this, t))).$element = null), (n.$itemElement = null), (n.$childContainerElement = null), n;
                }
                return (
                    ka(e, t),
                    Pa(
                        e,
                        [
                            {
                                key: "init",
                                value: function () {
                                    var t = this.filterOption ? this.filterOption.selectType : this.parent.selectType;
                                    this.requestInstantly = this.filterTreeType == Rr.FilterTreeType.VERTICAL || t == hr.a.SelectType.SINGLE || o.a.getSettingValue("general.requestInstantly");
                                },
                            },
                            {
                                key: "getTemplate",
                                value: function () {
                                    return '\n\t\t\t<li class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-first-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t<a class="{{class.button}}" data-action="select-filter-item" href="{{href}}">\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t{{arrow}}\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-second-level-list">\n\t\t\t\t\t{{childItems}}\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t';
                                },
                            },
                            {
                                key: "getArrowTemplate",
                                value: function () {
                                    return '\n\t\t\t<button class="{{class.button}} {{class.button}}-arrow" data-action="expand-filter-item">\n\t\t\t\t<span class="boost-pfs-arrow"></span>\n\t\t\t</button>\n\t\t';
                                },
                            },
                            {
                                key: "compileArrowTemplate",
                                value: function () {
                                    return 3 != this.level && this.children && this.children.length > 0 ? this.getArrowTemplate() : "";
                                },
                            },
                            {
                                key: "compileTemplate",
                                value: function () {
                                    return this.getTemplate()
                                        .replace(/{{class.filterOptionItem}}/g, f.filterOptionItem)
                                        .replace(/{{class.filterOptionLabel}}/g, f.filterOptionLabel)
                                        .replace(/{{label}}/g, this.label)
                                        .replace(/{{href}}/g, this.href)
                                        .replace(/{{arrow}}/g, this.compileArrowTemplate())
                                        .replace(/{{class.button}}/g, f.button)
                                        .replace(/{{childItems}}/g, "");
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var t = this;
                                    if (
                                        (this.$element ||
                                            ((this.$element = r()(this.compileTemplate())),
                                            (this.$itemElement = this.$element.find("> ." + f.filterOptionItem)),
                                            (this.$itemClickElement = this.$itemElement.find('[data-action="select-filter-item"]')),
                                            (this.$toggleClickElement = this.$itemElement.find('[data-action="expand-filter-item"]')),
                                            (this.$childContainerElement = this.$element.find("> .boost-pfs-filter-option-multi-level-list")),
                                            this.$childContainerElement &&
                                                this.children &&
                                                this.children.length > 0 &&
                                                this.children.forEach(function (e) {
                                                    e.$element && t.$childContainerElement.append(e.$element);
                                                })),
                                        this.$itemElement)
                                    ) {
                                        this.isSelected || this.isSelectedChild ? this.$itemElement.addClass("selected") : this.$itemElement.removeClass("selected");
                                        var n = e.getLevelOpenStateData(this),
                                            i = o.a.getSettingValue("general.openMultiLevelByDefault");
                                        n || (Array.isArray(i) && i.includes(this.level)) || (null == n && this.isSelectedChild)
                                            ? (this.$itemElement.addClass("boost-pfs-open"), e.setLevelOpenStateData(this, !0))
                                            : e.setLevelOpenStateData(this, !1);
                                    }
                                },
                            },
                            {
                                key: "bindEvents",
                                value: function () {
                                    this.$itemClickElement && this.$itemClickElement.on("click", this.onClick.bind(this)), this.$toggleClickElement && this.$toggleClickElement.on("click", this.onClickToggle.bind(this));
                                },
                            },
                            {
                                key: "onClick",
                                value: function (t) {
                                    t && t.preventDefault(),
                                        this.setCollectionParams(),
                                        this.clearAllTagParams(),
                                        Le.default.setParam("page", 1),
                                        this.children && this.children.length > 0 && e.setLevelOpenStateData(this, !0),
                                        this.requestInstantly && Le.default.applyFilter("collection");
                                },
                            },
                            {
                                key: "onClickToggle",
                                value: function () {
                                    this.$itemElement.toggleClass("boost-pfs-open"), this.$itemElement.hasClass("boost-pfs-open") ? e.setLevelOpenStateData(this, !0) : e.setLevelOpenStateData(this, !1);
                                },
                            },
                            {
                                key: "isAppliedFilter",
                                value: function () {
                                    return l.a.collectionId == this.collectionId;
                                },
                            },
                            {
                                key: "setCollectionParams",
                                value: function () {
                                    p.a.isSearchPage()
                                        ? Le.default.setParam(this.filterOption.filterOptionId, this.collectionId)
                                        : (u.a.setAddressBarPathAfterFilter(this.href), u.a.setWindowTitleAfterFilter(this.label + " - " + l.a.shopName)),
                                        (l.a.collectionId = this.collectionId),
                                        Le.default.setParam("sort", this.sortOrder);
                                },
                            },
                            {
                                key: "clearAllTagParams",
                                value: function () {
                                    var t = this.filterOption.filterOptionId.replace(l.a.prefix + "_c", l.a.prefix + "_ct");
                                    Le.default.setParam(t, null), (l.a.collectionTags = []);
                                    var e = [];
                                    Object.keys(l.a.queryParams).forEach(function (t) {
                                        t.startsWith(l.a.prefix) && !t.startsWith(l.a.prefix + "_c") && e.push(t);
                                    }),
                                        e.forEach(function (t) {
                                            Le.default.setParam(t, null);
                                        });
                                },
                            },
                            {
                                key: "setData",
                                value: function (t) {
                                    var n = this;
                                    _a(Ca(e.prototype), "setData", this).call(this, t),
                                        (this.filterOption = this.parent),
                                        (this.level = 1),
                                        (this.href = p.a.isSearchPage() ? "javascript:void(0);" : "/collections/" + this.handle),
                                        (this.sortOrder = t.sort_order ? t.sort_order : l.a.defaultSorting),
                                        (this.children = []),
                                        Array.isArray(t.tags) &&
                                            t.tags.forEach(function (t) {
                                                if (t.tag) {
                                                    var e = new La(n.filterTreeType);
                                                    n.addComponent(e), e.setData(t);
                                                }
                                            }),
                                        (this.isSelected = this.isAppliedFilter()),
                                        (this.isSelectedChild = this.children.some(function (t) {
                                            return t.isSelected || t.isSelectedChild;
                                        })),
                                        this.filterOption.allNestedFilterItems.set(this.collectionId, this);
                                },
                            },
                        ],
                        [
                            {
                                key: "getLevelOpenStateData",
                                value: function (t) {
                                    var e = t.filterOption.filterOptionId,
                                        n = t.collectionId,
                                        i = t.tag,
                                        r = e + ":" + n + (i ? ":" + i : "");
                                    return Fa.get(r);
                                },
                            },
                            {
                                key: "setLevelOpenStateData",
                                value: function (t, e) {
                                    var n = t.filterOption.filterOptionId,
                                        i = t.collectionId,
                                        r = t.tag,
                                        o = n + ":" + i + (r ? ":" + r : "");
                                    Fa.set(o, e);
                                },
                            },
                        ]
                    ),
                    e
                );
            })(Jr),
            La = (function (t) {
                function e() {
                    return Oa(this, e), wa(this, Ca(e).apply(this, arguments));
                }
                return (
                    ka(e, t),
                    Pa(e, [
                        {
                            key: "getTemplate",
                            value: function () {
                                return '\n\t\t\t<div class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-second-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t<a class="{{class.button}}" data-action="select-filter-item" href="{{href}}">\n\t\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t{{arrow}}\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-third-level-list">\n\t\t\t\t\t{{childItems}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t';
                            },
                        },
                        {
                            key: "onClick",
                            value: function (t) {
                                t && t.preventDefault(),
                                    (this.collectionId == l.a.collectionId && o.a.getSettingValue("general.multiLevelCollectionSelectType") != hr.a.SelectType.SINGLE) || this.clearAllTagParams(),
                                    this.setCollectionParams(),
                                    this.setTagParams(),
                                    Le.default.setParam("page", 1),
                                    this.children && this.children.length > 0 && Ia.setLevelOpenStateData(this, !0),
                                    this.requestInstantly && Le.default.applyFilter("collection");
                            },
                        },
                        {
                            key: "setTagParams",
                            value: function () {
                                if (p.a.isSearchPage() || o.a.getSettingValue("general.multiLevelCollectionSelectType") == hr.a.SelectType.MULTIPLE) {
                                    Array.isArray(l.a.collectionTags) || (l.a.collectionTags = []);
                                    var t = l.a.collectionTags.indexOf(this.tag);
                                    t > -1 ? l.a.collectionTags.splice(t, 1) : l.a.collectionTags.push(this.tag), (o.a.general.tagMode = "2");
                                    var e = this.filterOption.filterOptionId.replace(l.a.prefix + "_c_", l.a.prefix + "_ct_");
                                    Array.isArray(l.a.collectionTags) && l.a.collectionTags.length > 0 ? Le.default.setParam(e, l.a.collectionTags) : Le.default.setParam(e, null);
                                } else (l.a.collectionTags = this.tag), u.a.setAddressBarPathAfterFilter(this.href);
                            },
                        },
                        {
                            key: "isAppliedFilter",
                            value: function () {
                                var t = (Array.isArray(l.a.collectionTags) && l.a.collectionTags.includes(this.tag)) || l.a.collectionTags == this.tag;
                                return l.a.collectionId == this.collectionId && t;
                            },
                        },
                        {
                            key: "setData",
                            value: function (t) {
                                var e = this;
                                (this.tag = t.tag),
                                    (this.slugifyTag = p.a.slugify(this.tag)),
                                    (this.label = t.displayName ? t.displayName : t.tag),
                                    (this.filterOption = this.parent.filterOption),
                                    (this.requestInstantly = this.parent.requestInstantly),
                                    (this.collectionId = this.parent.collectionId),
                                    (this.handle = this.parent.handle),
                                    (this.level = 2),
                                    (this.href =
                                        p.a.isSearchPage() || o.a.getSettingValue("general.multiLevelCollectionSelectType") == hr.a.SelectType.MULTIPLE ? "javascript:void(0);" : "/collections/" + this.handle + "/" + this.slugifyTag),
                                    (this.sortOrder = t.sort_order ? t.sort_order : l.a.defaultSorting),
                                    (this.children = []),
                                    Array.isArray(t.subTags) &&
                                        t.subTags.forEach(function (t) {
                                            if (t.tag) {
                                                var n = new Aa(e.filterTreeType);
                                                e.addComponent(n), n.setData(t);
                                            }
                                        }),
                                    (this.label = this.buildLabel()),
                                    (this.isSelected = this.isAppliedFilter()),
                                    (this.isSelectedChild = this.children.some(function (t) {
                                        return t.isSelected || t.isSelectedChild;
                                    })),
                                    this.filterOption.allNestedFilterItems.set(this.collectionId + ":" + this.tag, this);
                            },
                        },
                    ]),
                    e
                );
            })(Ia),
            Aa = (function (t) {
                function e() {
                    return Oa(this, e), wa(this, Ca(e).apply(this, arguments));
                }
                return (
                    ka(e, t),
                    Pa(e, [
                        {
                            key: "getTemplate",
                            value: function () {
                                return '\n\t\t\t<div class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-third-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t<a class="{{class.button}}" data-action="select-filter-item" href="{{href}}">\n\t\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t';
                            },
                        },
                        {
                            key: "setData",
                            value: function (t) {
                                (this.tag = t.tag),
                                    (this.slugifyTag = p.a.slugify(this.tag)),
                                    (this.label = t.displayName ? t.displayName : t.tag),
                                    (this.filterOption = this.parent.filterOption),
                                    (this.requestInstantly = this.parent.requestInstantly),
                                    (this.collectionId = this.parent.collectionId),
                                    (this.handle = this.parent.handle),
                                    (this.level = 3),
                                    (this.href =
                                        p.a.isSearchPage() || o.a.getSettingValue("general.multiLevelCollectionSelectType") == hr.a.SelectType.MULTIPLE ? "javascript:void(0);" : "/collections/" + this.handle + "/" + this.slugifyTag),
                                    this.filterOption.allNestedFilterItems.set(this.collectionId + ":" + this.tag, this),
                                    (this.sortOrder = t.sort_order ? t.sort_order : l.a.defaultSorting),
                                    (this.label = this.buildLabel()),
                                    (this.isSelected = this.isAppliedFilter());
                            },
                        },
                    ]),
                    e
                );
            })(La),
            Fa = new Map(),
            Ra = Ia;
        function ja(t) {
            return (ja =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function $a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function Ba(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function xa(t, e, n) {
            return e && Ba(t.prototype, e), n && Ba(t, n), t;
        }
        function Ma(t, e) {
            return !e || ("object" !== ja(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Da(t) {
            return (Da = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Va(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Na(t, e);
        }
        function Na(t, e) {
            return (Na =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Ua = (function (t) {
                function e(t) {
                    var n;
                    return $a(this, e), ((n = Ma(this, Da(e).call(this, t))).$element = null), (n.$itemElement = null), (n.$childContainerElement = null), n;
                }
                return (
                    Va(e, t),
                    xa(
                        e,
                        [
                            {
                                key: "init",
                                value: function () {
                                    this.filterOption ? this.filterOption.selectType : this.parent.selectType;
                                    this.requestInstantly = this.filterTreeType == Rr.FilterTreeType.VERTICAL || o.a.getSettingValue("general.requestInstantly");
                                },
                            },
                            {
                                key: "getTemplate",
                                value: function () {
                                    return '\n\t\t\t<li class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-first-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t{{swatch}}\n\t\t\t\t\t<button class="{{class.button}}" data-action="select-filter-item">\n\t\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t{{arrow}}\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-second-level-list">\n\t\t\t\t\t{{childItems}}\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t';
                                },
                            },
                            {
                                key: "getSwatchTemplate",
                                value: function () {
                                    return '\n\t\t\t<span class="boost-pfs-filter-option-swatch-image" \n\t\t\t\tstyle="background-color: {{backgroundColor}}; \n\t\t\t\tbackground-image: url({{swatchFileUrl}});" title="{{label}}">\n\t\t\t</span>\n\t\t';
                                },
                            },
                            {
                                key: "getArrowTemplate",
                                value: function () {
                                    return '\n\t\t\t<button class="{{class.button}} {{class.button}}-arrow" data-action="expand-filter-item">\n\t\t\t\t<span class="boost-pfs-arrow"></span>\n\t\t\t</button>\n\t\t';
                                },
                            },
                            {
                                key: "compileSwatchTemplate",
                                value: function () {
                                    return this.getSwatchTemplate()
                                        .replace(/{{backgroundColor}}/g, this.backgroundColor)
                                        .replace(/{{swatchFileUrl}}/g, this.swatchFileUrl);
                                },
                            },
                            {
                                key: "compileArrowTemplate",
                                value: function () {
                                    return 3 != this.level && this.children && this.children.length > 0 ? this.getArrowTemplate() : "";
                                },
                            },
                            {
                                key: "compileTemplate",
                                value: function () {
                                    return this.getTemplate()
                                        .replace(/{{class.filterOptionItem}}/g, f.filterOptionItem)
                                        .replace(/{{class.filterOptionLabel}}/g, f.filterOptionLabel)
                                        .replace(/{{label}}/g, this.label)
                                        .replace(/{{swatch}}/g, this.filterOption.displayTypeItem == hr.a.DisplayType.SWATCH ? this.compileSwatchTemplate() : "")
                                        .replace(/{{arrow}}/g, this.compileArrowTemplate())
                                        .replace(/{{class.button}}/g, f.button)
                                        .replace(/{{childItems}}/g, "");
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var t = this;
                                    if (
                                        (this.$element ||
                                            ((this.$element = r()(this.compileTemplate())),
                                            (this.$itemElement = this.$element.find("> ." + f.filterOptionItem)),
                                            (this.$itemClickElement = this.$itemElement.find('[data-action="select-filter-item"]')),
                                            (this.$toggleClickElement = this.$itemElement.find('[data-action="expand-filter-item"]')),
                                            (this.$childContainerElement = this.$element.find("> .boost-pfs-filter-option-multi-level-list")),
                                            this.$childContainerElement &&
                                                this.children &&
                                                this.children.length > 0 &&
                                                this.children.forEach(function (e) {
                                                    e.$element && t.$childContainerElement.append(e.$element);
                                                })),
                                        (this.isSelected = this.isAppliedFilter()),
                                        (this.isSelectedChild = !1),
                                        Array.isArray(this.children) &&
                                            (this.isSelectedChild = this.children.some(function (t) {
                                                return t.isSelected || t.isSelectedChild;
                                            })),
                                        this.$itemElement)
                                    ) {
                                        this.isSelected || (this.filterOption.selectType == hr.a.SelectType.SINGLE && this.isSelectedChild) ? this.$itemElement.addClass("selected") : this.$itemElement.removeClass("selected");
                                        var n = e.getLevelOpenStateData(this),
                                            i = o.a.getSettingValue("general.openMultiLevelByDefault");
                                        n || (Array.isArray(i) && i.includes(this.level)) || (null == n && this.isSelectedChild)
                                            ? (this.$itemElement.addClass("boost-pfs-open"), e.setLevelOpenStateData(this, !0))
                                            : e.setLevelOpenStateData(this, !1);
                                    }
                                },
                            },
                            {
                                key: "bindEvents",
                                value: function () {
                                    this.$itemClickElement && this.$itemClickElement.on("click", this.onClick.bind(this)), this.$toggleClickElement && this.$toggleClickElement.on("click", this.onClickToggle.bind(this));
                                },
                            },
                            {
                                key: "isAppliedFilter",
                                value: function () {
                                    var t = l.a.queryParams[this.filterOption.filterOptionId];
                                    return !(!Array.isArray(t) || !t.includes(this.value));
                                },
                            },
                            {
                                key: "onSelectFilter",
                                value: function () {
                                    this.children && this.children.length > 0 && (this.$itemElement.addClass("boost-pfs-open"), e.setLevelOpenStateData(this, !0)),
                                        this.filterOption.selectType == hr.a.SelectType.SINGLE &&
                                            this.filterOption.allNestedFilterItems.forEach(function (t) {
                                                t.$itemElement && (t.$itemElement.removeClass("selected"), (t.isSelected = !1));
                                            }),
                                        this.filterOption.selectType == hr.a.SelectType.SINGLE
                                            ? ((this.isSelected = !0),
                                              this.$itemElement.addClass("selected"),
                                              this.level > 1 && this.parent.$itemElement.addClass("selected"),
                                              this.level > 2 && this.parent.parent.$itemElement.addClass("selected"))
                                            : ((this.isSelected = !this.isSelected), this.$itemElement.toggleClass("selected"));
                                },
                            },
                            {
                                key: "onApplyFilter",
                                value: function () {
                                    var t = this;
                                    if (this.isSelected && this.filterOption.selectType == hr.a.SelectType.SINGLE)
                                        this.children && this.children.length > 0 && (this.$itemElement.addClass("boost-pfs-open"), e.setLevelOpenStateData(this, !0));
                                    else {
                                        this.children && this.children.length > 0 && e.setLevelOpenStateData(this, !0);
                                        var n = this.filterOption.filterOptionId;
                                        this.isSelected = !this.isSelected;
                                        var i = null;
                                        this.filterOption.selectType == hr.a.SelectType.SINGLE
                                            ? (i = this.isSelected ? [this.value] : [])
                                            : ((i = l.a.queryParams[n]),
                                              Array.isArray(i) || (i = []),
                                              this.isSelected
                                                  ? i.includes(this.value) || i.push(this.value)
                                                  : (i = i.filter(function (e) {
                                                        return e !== t.value;
                                                    }))),
                                            Le.default.setParam(n, i),
                                            Le.default.setParam(n + "_and_condition", !!(this.filterOption.useAndCondition && i.length > 0) || null),
                                            Le.default.setParam("page", 1);
                                        var r = { filterOptionId: n, filterValue: this.value };
                                        Le.default.applyFilter("filter", r);
                                    }
                                },
                            },
                            {
                                key: "onClickToggle",
                                value: function () {
                                    this.$itemElement.toggleClass("boost-pfs-open"), this.$itemElement.hasClass("boost-pfs-open") ? e.setLevelOpenStateData(this, !0) : e.setLevelOpenStateData(this, !1);
                                },
                            },
                            {
                                key: "setData",
                                value: function (t) {
                                    var e = this;
                                    (this.value = t.tag),
                                        (this.label = t.displayName ? t.displayName : t.tag),
                                        (this.level = 1),
                                        (this.id = this.value),
                                        (this.filterOption = this.parent),
                                        (this.label = this.buildLabel()),
                                        this.filterOption.displayTypeItem == hr.a.DisplayType.SWATCH && this.setSwatchData(),
                                        (this.children = []),
                                        Array.isArray(t.subTags) &&
                                            t.subTags.forEach(function (t) {
                                                if (t.tag) {
                                                    var n = new qa(e.filterTreeType);
                                                    e.addComponent(n), n.setData(t);
                                                }
                                            }),
                                        this.filterOption.allNestedFilterItems.set(this.value, this);
                                },
                            },
                            {
                                key: "setSwatchData",
                                value: function () {
                                    var t = this.filterOption.filterOptionId.replace("pf_t_", "").replace("pf_opt_", "");
                                    (this.swatchFileName = t + "-" + p.a.slugify(this.label).replace(/\#/g, "")),
                                        (this.swatchFileUrl = p.a.getFilePath(this.swatchFileName, l.a.swatchExtension, o.a.getSettingValue("general.swatchImageVersion"))),
                                        (this.backgroundColor = p.a.slugify(this.label).split("-").pop());
                                },
                            },
                        ],
                        [
                            {
                                key: "getLevelOpenStateData",
                                value: function (t) {
                                    var e = t.filterOption.filterOptionId + ":" + t.value;
                                    return Ga.get(e);
                                },
                            },
                            {
                                key: "setLevelOpenStateData",
                                value: function (t, e) {
                                    var n = t.filterOption.filterOptionId + ":" + t.value;
                                    Ga.set(n, e);
                                },
                            },
                        ]
                    ),
                    e
                );
            })(Jr),
            qa = (function (t) {
                function e() {
                    return $a(this, e), Ma(this, Da(e).apply(this, arguments));
                }
                return (
                    Va(e, t),
                    xa(e, [
                        {
                            key: "getTemplate",
                            value: function () {
                                return '\n\t\t\t<div class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-second-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t{{swatch}}\n\t\t\t\t\t<button class="{{class.button}}" data-action="select-filter-item">\n\t\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t{{arrow}}\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-third-level-list">\n\t\t\t\t\t{{childItems}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t';
                            },
                        },
                        {
                            key: "setData",
                            value: function (t) {
                                var e = this;
                                (this.value = t.tag),
                                    (this.label = t.displayName ? t.displayName : t.tag),
                                    (this.level = 2),
                                    this.parent && ((this.requestInstantly = this.parent.requestInstantly), (this.filterOption = this.parent.filterOption)),
                                    (this.label = this.buildLabel()),
                                    this.filterOption.displayTypeItem == hr.a.DisplayType.SWATCH && this.setSwatchData(),
                                    (this.children = []),
                                    Array.isArray(t.subTags) &&
                                        t.subTags.forEach(function (t) {
                                            if (t.tag) {
                                                var n = new Ha(e.filterTreeType);
                                                e.addComponent(n), n.setData(t);
                                            }
                                        }),
                                    this.filterOption.allNestedFilterItems.set(this.value, this);
                            },
                        },
                    ]),
                    e
                );
            })(Ua),
            Ha = (function (t) {
                function e() {
                    return $a(this, e), Ma(this, Da(e).apply(this, arguments));
                }
                return (
                    Va(e, t),
                    xa(e, [
                        {
                            key: "getTemplate",
                            value: function () {
                                return '\n\t\t\t<div class="boost-pfs-filter-option-multi-level-item boost-pfs-filter-option-third-level-item">\n\t\t\t\t<div class="{{class.filterOptionItem}} {{class.filterOptionLabel}}">\n\t\t\t\t\t{{swatch}}\n\t\t\t\t\t<button class="{{class.button}}" data-action="select-filter-item">\n\t\t\t\t\t\t<span class="boost-pfs-check-box"></span>\n\t\t\t\t\t\t<span class="boost-pfs-filter-option-value">{{label}}</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t';
                            },
                        },
                        {
                            key: "setData",
                            value: function (t) {
                                (this.value = t.tag),
                                    (this.label = t.displayName ? t.displayName : t.tag),
                                    (this.level = 3),
                                    this.parent && ((this.requestInstantly = this.parent.requestInstantly), (this.filterOption = this.parent.filterOption)),
                                    (this.label = this.buildLabel()),
                                    this.filterOption.displayTypeItem == hr.a.DisplayType.SWATCH && this.setSwatchData(),
                                    this.filterOption.allNestedFilterItems.set(this.value, this);
                            },
                        },
                    ]),
                    e
                );
            })(qa),
            Ga = new Map(),
            Wa = Ua;
        function za(t) {
            return (za =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Ka(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Ya(t, e) {
            return !e || ("object" !== za(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Qa(t) {
            return (Qa = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Ja(t, e) {
            return (Ja =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Za = (function (t) {
                function e(t) {
                    var n;
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        ((n = Ya(this, Qa(e).call(this))).filterTreeType = t),
                        (n.$clickElement = null),
                        (n.$toggleElement = null),
                        n
                    );
                }
                var n, i, a;
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Ja(t, e);
                    })(e, t),
                    (n = e),
                    (a = [
                        {
                            key: "getCollapsedStateData",
                            value: function (t) {
                                return tl.get(t);
                            },
                        },
                        {
                            key: "setCollapsedStateData",
                            value: function (t, e) {
                                tl.set(t, e);
                            },
                        },
                    ]),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                var t;
                                if (((this.isCollapsed = !1), this.filterTreeType == Rr.FilterTreeType.HORIZONTAL)) this.isCollapsed = !0;
                                else if ((o.a.getSettingValue("general.keepToggleState") && (t = e.getCollapsedStateData(this.parent.filterOptionId)), void 0 === t)) {
                                    var n = p.a.isMobile();
                                    this.isCollapsed =
                                        (n && (this.parent.isCollapseMobile || o.a.getSettingValue("general.collapseOnMobileByDefault"))) || (!n && (this.parent.isCollapsePC || o.a.getSettingValue("general.collapseOnPCByDefault")));
                                } else this.isCollapsed = t;
                            },
                        },
                        {
                            key: "isBindEvents",
                            value: function () {
                                return !(this.isBoundEvent || !this.parent.$element || !this.parent.$filterOptionContentElement || !this.parent.$filterOptionTitleElement);
                            },
                        },
                        {
                            key: "bindEvents",
                            value: function () {
                                (this.$clickElement = this.parent.$filterOptionTitleElement),
                                    (this.$toggleElement = this.parent.$filterOptionContentElement),
                                    this.filterTreeType == Rr.FilterTreeType.VERTICAL
                                        ? this.$clickElement.on("click", this.onToggleVertical.bind(this))
                                        : (this.$clickElement.on("click", this.onToggleHorizontal.bind(this)),
                                          el || ((el = !0), r()("body").on("click", this.onClickOutSideHorizontal.bind(this))),
                                          this.parent.filterOptionId == Xa && ((Xa = ""), this.onToggleHorizontal()));
                            },
                        },
                        {
                            key: "onToggleVertical",
                            value: function () {
                                (this.isCollapsed = !this.isCollapsed),
                                    o.a.getSettingValue("general.keepToggleState") && e.setCollapsedStateData(this.parent.filterOptionId, this.isCollapsed),
                                    this.parent.$element.toggleClass("boost-pfs-filter-option-collapsed"),
                                    this.$toggleElement.slideToggle(400, this.afterToggle.bind(this));
                            },
                        },
                        {
                            key: "onToggleHorizontal",
                            value: function () {
                                var t = !this.isCollapsed;
                                this.calculateHorizontalColumn();
                                var e = this.closeAllHorizontalTabs();
                                t || (e ? (Xa = this.parent.filterOptionId) : ((Xa = ""), this.parent.$element.removeClass("boost-pfs-filter-option-collapsed"), this.$toggleElement.show(), (this.isCollapsed = !1))), this.afterToggle();
                            },
                        },
                        {
                            key: "onClickOutSideHorizontal",
                            value: function (t) {
                                if (t && t.target) {
                                    var e = r()(t.target);
                                    e.closest(c.filterTreeHorizontal + " ." + f.filterOption).length > 0 ||
                                        e.closest(c.filterTreeHorizontal + " ." + f.clearButton).length > 0 ||
                                        e.closest(c.filterTreeHorizontal + " ." + f.clearAllButton).length > 0 ||
                                        this.closeAllHorizontalTabs();
                                }
                            },
                        },
                        {
                            key: "closeAllHorizontalTabs",
                            value: function () {
                                var t = this.parent.parent,
                                    e = !1;
                                return (
                                    t.filterOptions.forEach(function (t) {
                                        t.$element &&
                                            t.collapse &&
                                            !t.collapse.isCollapsed &&
                                            (t.$element.addClass("boost-pfs-filter-option-collapsed"),
                                            (t.collapse.isCollapsed = !0),
                                            t.collapse.$toggleElement.hide(),
                                            (t.allNestedFilterItems ? t.allNestedFilterItems : t.filterItems).forEach(function (n) {
                                                e || (n.isAppliedFilter() != n.isSelected && (e = t));
                                            }));
                                    }),
                                    !!e && (e.applyButton.onApplyOptionValues(), !0)
                                );
                            },
                        },
                        { key: "afterToggle", value: function () {} },
                        {
                            key: "calculateHorizontalColumn",
                            value: function () {
                                var t = this.parent.displayColumn,
                                    e = "left",
                                    n = this.parent.$filterOptionTitleElement.offset();
                                if (((1 != t && "1" != t) || this.parent.displayType != FilterOptionEnum.DisplayType.RANGE || (t = 2), n && n.left))
                                    switch (t) {
                                        case 1:
                                        case "1":
                                            n.left + 250 > r()(window).width() && (e = "right");
                                            break;
                                        case 2:
                                        case "2":
                                            n.left + 532 > r()(window).width() && (e = n.left < 532 ? "center" : "right");
                                            break;
                                        case 3:
                                        case "3":
                                            n.left + 700 > r()(window).width() && (e = "right");
                                    }
                                "left" == e
                                    ? (this.parent.$element.removeClass("boost-pfs-filter-option-right"), this.parent.$element.addClass("boost-pfs-filter-option-left"))
                                    : "center" == e
                                    ? (this.parent.$element.removeClass("boost-pfs-filter-option-left"), this.parent.$element.removeClass("boost-pfs-filter-option-right"), this.parent.$element.addClass("boost-pfs-filter-option-center"))
                                    : (this.parent.$element.removeClass("boost-pfs-filter-option-left"), this.parent.$element.addClass("boost-pfs-filter-option-right"));
                            },
                        },
                    ]) && Ka(n.prototype, i),
                    a && Ka(n, a),
                    e
                );
            })(y),
            Xa = "",
            tl = new Map(),
            el = !1,
            nl = Za;
        function il(t) {
            return (il =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function rl(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function ol(t, e) {
            return !e || ("object" !== il(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function al(t) {
            return (al = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function ll(t, e) {
            return (ll =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var sl = (function (t) {
            function e(t) {
                var n;
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                    ((n = ol(this, al(e).call(this))).filterItems = new Map()),
                    (n.clearButton = null),
                    (n.applyButton = null),
                    (n.searchBox = null),
                    (n.filterTreeType = t),
                    (n.$element = null),
                    (n.$filterOptionTitleElement = null),
                    (n.$filterOptionContentElement = null),
                    (n.$filterItemsContainerElement = null);
                var i = n.filterTreeType == Rr.FilterTreeType.VERTICAL;
                return (
                    (n.selector = {
                        filterOptionTitle: "." + f.filterOptionTitle + " > button",
                        filterOptionContent: "." + f.filterOptionContent,
                        filterItemsContainer: "ul",
                        clearButtonContainer: i ? "." + f.filterOptionTitle : "." + f.filterOptionContent,
                        applyButtonContainer: "." + f.filterOptionContent,
                        viewMoreContainer: "." + f.filterOptionContent,
                        searchBoxContainer: "." + f.filterOptionContent,
                        tooltipContainer: "." + f.filterOptionTitle + " > ." + f.filterOptionTitle + "-heading",
                        numberFilterItemsContainer: "." + f.filterOptionTitle + "-count",
                    }),
                    n
                );
            }
            var n, i, a;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && ll(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            (this.collapse = new nl(this.filterTreeType)),
                                this.addComponent(this.collapse),
                                (this.clearButton = new Dr(this.filterTreeType, Dr.ClearType.CLEAR_OPTION_VALUES)),
                                this.addComponent(this.clearButton),
                                (this.applyButton = new Gr(this.filterTreeType, Gr.ApplyType.APPLY_OPTION_VALUES)),
                                this.addComponent(this.applyButton),
                                (this.viewMore = new Xo(this.filterTreeType)),
                                this.addComponent(this.viewMore),
                                (this.scrollbar = new va()),
                                this.addComponent(this.scrollbar),
                                (this.searchBox = new oa()),
                                this.addComponent(this.searchBox),
                                (this.filterTooltip = new pa(this.tooltip)),
                                this.addComponent(this.filterTooltip);
                        },
                    },
                    {
                        key: "getTemplate",
                        value: function () {
                            switch (this.filterTreeType) {
                                case "vertical":
                                    return '\n        \t\t<div class="{{class.filterOption}} {{blockTypeClass}} {{blockId}} {{class.filterScrollbar}} {{displayColumn}}">\n        \t\t\t<div class="{{class.filterOptionTitle}}">\n        \t\t\t\t<button tabindex="0" class="{{class.button}} {{class.filterOptionTitle}}-heading">\n        \t\t\t\t\t<span class="{{class.filterOptionTitle}}-text">\n        \t\t\t\t\t\t{{blockTitle}}\n        \t\t\t\t\t\t<span class="{{class.filterOptionTitle}}-count">\n        \t\t\t\t\t\t\t{{numberAppliedFilterItems}}\n\t\t\t\t\t\t\t\t</span>\n        \t\t\t\t\t</span>\n        \t\t\t\t\t{{tooltip}}\n        \t\t\t\t</button>\n        \t\t\t\t<p class="boost-pfs-filter-selected-items-mobile"></p>\n        \t\t\t\t{{clearButton}}\n        \t\t\t</div>\n        \t\t\t<div class="{{class.filterOptionContent}}">\n        \t\t\t\t{{searchBox}}\n        \t\t\t\t<div class="{{class.filterOptionContentInner}}">\n        \t\t\t\t\t{{blockContent}}\n        \t\t\t\t</div>\n        \t\t\t\t{{viewMore}}\n        \t\t\t</div>\n        \t\t</div>\n        \t';
                                case "horizontal":
                                    return '\n        \t\t<div class="{{class.filterOption}} {{blockTypeClass}} {{blockId}} {{class.filterScrollbar}} {{displayColumn}}">\n        \t\t\t<div class="{{class.filterOptionTitle}}">\n        \t\t\t\t<button tabindex="0" class="{{class.button}} {{class.filterOptionTitle}}-heading">\n        \t\t\t\t\t<span class="{{class.filterOptionTitle}}-text">\n        \t\t\t\t\t\t{{blockTitle}}\n        \t\t\t\t\t\t<span class="{{class.filterOptionTitle}}-count">\n        \t\t\t\t\t\t\t{{numberAppliedFilterItems}}\n\t\t\t\t\t\t\t\t</span>\n        \t\t\t\t\t</span>\n        \t\t\t\t\t{{tooltip}}\n        \t\t\t\t</button>\n        \t\t\t</div>\n        \t\t\t<div class="{{class.filterOptionContent}}">\n        \t\t\t\t<div class="{{class.filterOptionContentInner}}">\n        \t\t\t\t \t{{blockContent}}\n        \t\t\t\t</div>\n        \t\t\t\t{{viewMore}}\n        \t\t\t\t{{applyButton}}\n        \t\t\t\t{{clearButton}}\n        \t\t\t</div>\n        \t\t</div>\n        \t';
                                default:
                                    throw Error("filterTreeType is wrong");
                            }
                        },
                    },
                    {
                        key: "getBlockContentTemplate",
                        value: function () {
                            throw Error("Override this method");
                        },
                    },
                    {
                        key: "compileBlockContentTemplate",
                        value: function () {
                            return this.getBlockContentTemplate();
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            var t = p.a.slugify(this.label),
                                e = p.a.slugify(this.displayType),
                                n = va.isEnabled(this.displayType, this.filterType, this.showMoreType) ? f.filterHasScrollbar : f.filterNoScrollbar,
                                i = "boost-pfs-filter-option-column-" + this.displayColumn;
                            return this.getTemplate()
                                .replace(/{{blockTitle}}/g, this.label)
                                .replace(/{{blockTypeClass}}/g, f.filterOption + "-" + e)
                                .replace(/{{blockId}}/g, f.filterOption + "-" + t)
                                .replace(/{{blockContent}}/g, this.compileBlockContentTemplate())
                                .replace(/{{blockContentId}}/g, f.filterOptionContent + "-" + t)
                                .replace(/{{displayColumn}}/g, i)
                                .replace(/{{class.filterOption}}/g, f.filterOption)
                                .replace(/{{class.filterOptionContent}}/g, f.filterOptionContent)
                                .replace(/{{class.filterOptionContentInner}}/g, f.filterOptionContentInner)
                                .replace(/{{class.filterOptionTitle}}/g, f.filterOptionTitle)
                                .replace(/{{class.filterScrollbar}}/g, n)
                                .replace(/{{class.filterOptionItemList}}/g, f.filterOptionItemList)
                                .replace(/{{class.filterOptionItemListSingleList}}/g, f.filterOptionItemListSingleList)
                                .replace(/{{class.filterOptionItemListMultipleList}}/g, f.filterOptionItemListMultipleList)
                                .replace(/{{class.filterOptionItemListBox}}/g, f.filterOptionItemListBox)
                                .replace(/{{class.filterOptionItemListSwatch}}/g, f.filterOptionItemListSwatch)
                                .replace(/{{class.filterOptionItemListRating}}/g, f.filterOptionItemListRating)
                                .replace(/{{class.filterOptionMultiLevelTag}}/g, f.filterOptionMultiLevelTag)
                                .replace(/{{class.filterOptiontemListMultiLevelCollections}}/g, f.filterOptiontemListMultiLevelCollections)
                                .replace(/{{class.button}}/g, f.button)
                                .replace(/{{tooltip}}/g, "")
                                .replace(/{{clearButton}}/g, "")
                                .replace(/{{applyButton}}/g, "")
                                .replace(/{{searchBox}}/g, "")
                                .replace(/{{viewMore}}/g, "")
                                .replace(/{{filterItems}}/g, "");
                        },
                    },
                    {
                        key: "isRender",
                        value: function () {
                            if (this.status == hr.a.Status.ACTIVE) {
                                var t = o.a.getSettingValue("general.showSingleOption"),
                                    e = 0,
                                    n = this.displayType == hr.a.DisplayType.MULTI_LEVEL_COLLECTIONS || this.displayType == hr.a.DisplayType.MULTI_LEVEL_TAG;
                                return (
                                    this.filterItems.forEach(function (t) {
                                        t.$element && t.$element.length && (e++, n && Array.isArray(t.children) && t.children.length > 0 && (e += t.children.length));
                                    }),
                                    t ? e > 1 : e > 0
                                );
                            }
                            return !1;
                        },
                    },
                    {
                        key: "isBindEvents",
                        value: function () {
                            return !this.isBoundEvent;
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t = this;
                            if (!this.$element) {
                                (this.$element = r()(this.compileTemplate())),
                                    (this.$filterOptionContentElement = this.$element.find(this.selector.filterOptionContent)),
                                    (this.$filterOptionTitleElement = this.$element.find(this.selector.filterOptionTitle)),
                                    (this.$filterItemsContainerElement = this.$element.find(this.selector.filterItemsContainer).html("")),
                                    this.filterItems.forEach(function (e) {
                                        e.isRenderOnScroll || t.$filterItemsContainerElement.append(e.$element);
                                    }),
                                    this.$element.find(this.selector.searchBoxContainer).prepend(this.searchBox.$element),
                                    this.$element.find(this.selector.viewMoreContainer).append(this.viewMore.$element),
                                    this.$element.find(this.selector.applyButtonContainer).append(this.applyButton.$element),
                                    this.$element.find(this.selector.clearButtonContainer).append(this.clearButton.$element);
                                var e = this.$element.find(this.selector.tooltipContainer);
                                e.append(this.filterTooltip.$element),
                                    e.append(this.filterTooltip.$popupElement),
                                    this.collapse.isCollapsed && (this.$element.addClass("boost-pfs-filter-option-collapsed"), this.$filterOptionContentElement.hide());
                            }
                            (this.numberAppliedFilterItems = this.getNumberAppliedFilterItems()), this.$element.find(this.selector.numberFilterItemsContainer).html(this.numberAppliedFilterItems > 0 ? this.numberAppliedFilterItems : "");
                        },
                    },
                    {
                        key: "getNumberAppliedFilterItems",
                        value: function () {
                            var t = 0,
                                e = [hr.a.DisplayType.LIST, hr.a.DisplayType.BOX, hr.a.DisplayType.SWATCH, hr.a.DisplayType.RATING, hr.a.DisplayType.MULTI_LEVEL_TAG];
                            return (
                                this.filterItems &&
                                    e.includes(this.displayType) &&
                                    this.filterItems.forEach(function (e) {
                                        e.isSelected && t++;
                                    }),
                                t
                            );
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            var e = this;
                            (this.status = t.status),
                                (this.position = t.position),
                                (this.label = p.a.stripHtml(p.a.stripScriptTag(t.label))),
                                (this.filterOptionId = t.filterOptionId),
                                (this.filterType = t.filterType),
                                (this.displayType = t.displayType),
                                (this.selectType = t.selectType),
                                (this.valueType = t.valueType),
                                (this.displayTypeItem = t.displayTypeItem),
                                (this.manualValues = t.manualValues ? t.manualValues : []),
                                (this.prefix = t.prefix),
                                (this.isCollapsePC = t.isCollapsePC),
                                (this.isCollapseMobile = t.isCollapseMobile),
                                (this.showSearchBoxFilterPC = t.showSearchBoxFilterPC),
                                (this.showSearchBoxFilterMobile = t.showSearchBoxFilterMobile),
                                (this.keepValuesStatic = t.keepValuesStatic),
                                (this.activeCollectionAll = t.activeCollectionAll),
                                (this.tooltip = t.tooltip),
                                (this.showMoreType = null == t.showMoreType || "" == t.showMoreType ? hr.a.ShowMoreType.SCROLLBAR : t.showMoreType),
                                (this.sortType = t.sortType),
                                (this.sortManualValues = t.sortManualValues),
                                (this.displayAllValuesInUppercaseForm = t.displayAllValuesInUppercaseForm),
                                (this.useAndCondition = t.useAndCondition),
                                (this.showExactRating = t.showExactRating),
                                (this.starColor = p.a.stripHtml(p.a.stripScriptTag(t.starColor))),
                                (this.displayColumn = t.displayColumn ? t.displayColumn : o.a.getSettingValue("general.filterHorizontalColumn")),
                                (this.children = []),
                                (this.filterItems = new Map());
                            var n = [];
                            t.values ? (n = Array.isArray(t.values) ? t.values : [t.values]) : t.manualValues && (n = Array.isArray(t.manualValues) ? t.manualValues : [t.manualValues]),
                                this.isSortValues() && this.sortValues(n),
                                this.modifyValues(n),
                                this.markValuesAsNoRender(n),
                                n.forEach(function (t) {
                                    var n = null;
                                    switch (e.displayType) {
                                        case hr.a.DisplayType.LIST:
                                            n = new io(e.filterTreeType);
                                            break;
                                        case hr.a.DisplayType.BOX:
                                            n = new po(e.filterTreeType);
                                            break;
                                        case hr.a.DisplayType.SWATCH:
                                            n = new So(e.filterTreeType);
                                            break;
                                        case hr.a.DisplayType.RATING:
                                            n = new Eo(e.filterTreeType);
                                            break;
                                        case hr.a.DisplayType.RANGE:
                                            n = new Ho(e.filterTreeType);
                                            break;
                                        case hr.a.DisplayType.SUB_CATEGORY:
                                            n = new Bo(e.filterTreeType);
                                            break;
                                        case hr.a.DisplayType.MULTI_LEVEL_COLLECTIONS:
                                            n = new Ra(e.filterTreeType);
                                            break;
                                        case hr.a.DisplayType.MULTI_LEVEL_TAG:
                                            n = new Wa(e.filterTreeType);
                                    }
                                    if (n) {
                                        e.addComponent(n), n.setData(t);
                                        var i = n.key ? n.key : n.value;
                                        e.filterItems.set(i, n);
                                    }
                                });
                        },
                    },
                    {
                        key: "isSortValues",
                        value: function () {
                            if ([hr.a.FilterType.REVIEW_RATINGS, hr.a.FilterType.PERCENT_SALE].includes(this.filterType)) return !0;
                            var t = [hr.a.FilterType.COLLECTION, hr.a.FilterType.STOCK],
                                e = [hr.a.DisplayType.RANGE, hr.a.DisplayType.SUB_CATEGORY],
                                n = this.valueType == hr.a.ValueType.ALL,
                                i = this.valueType != hr.a.ValueType.ALL && (this.sortManualValues || o.a.getSettingValue("general.sortManualValues")),
                                r = this.displayType == hr.a.DisplayType.RANGE && 0 == this.isNumberRangeSlider;
                            return !t.includes(this.filterType) && (!e.includes(this.displayType) || r) && (n || i);
                        },
                    },
                    {
                        key: "sortValues",
                        value: function (t) {
                            var e = this.sortType ? this.sortType : hr.a.SortType.KEY_ASCENDING,
                                n = e.split("-")[0],
                                i = "key" == n ? "doc_count" : "key";
                            this.filterType == hr.a.FilterType.COLLECTION && "key" == n && (n = "label"),
                                t &&
                                    t.length > 0 &&
                                    t.sort(
                                        function (t, e) {
                                            var r = -1;
                                            if (null != t[n] && null != e[n]) {
                                                var o = t[n].toString().toLowerCase(),
                                                    a = e[n].toString().toLowerCase();
                                                if (0 == (r = this.naturalSortFunction(o, a)) && null != t[i] && null != e[i]) {
                                                    var l = t[i].toString().toLowerCase(),
                                                        s = e[i].toString().toLowerCase();
                                                    r = this.naturalSortFunction(l, s);
                                                }
                                            }
                                            return r;
                                        }.bind(this)
                                    ),
                                (e.indexOf("desc") > -1 || this.filterType == hr.a.FilterType.REVIEW_RATINGS || this.filterType == hr.a.FilterType.PERCENT_SALE) && t.reverse();
                        },
                    },
                    {
                        key: "naturalSortFunction",
                        value: function (t, e) {
                            function n(t) {
                                for (var e, n, i = [], r = 0, o = -1, a = 0; (e = (n = t.charAt(r++)).charCodeAt(0)); ) {
                                    var l = 46 == e || (e >= 48 && e <= 57);
                                    l !== a && ((i[++o] = ""), (a = l)), (i[o] += n);
                                }
                                return i;
                            }
                            for (var i = n(t), r = n(e), o = 0; i[o] && r[o]; o++)
                                if (i[o] !== r[o]) {
                                    var a = Number(i[o]),
                                        l = Number(r[o]);
                                    return a == i[o] && l == r[o] ? a - l : i[o] > r[o] ? 1 : -1;
                                }
                            return i.length - r.length;
                        },
                    },
                    {
                        key: "modifyValues",
                        value: function (t) {
                            if (
                                this.filterType == hr.a.FilterType.COLLECTION &&
                                this.activeCollectionAll &&
                                !t.some(function (t) {
                                    return "all" == t.handle;
                                })
                            ) {
                                var e = { key: "0", label: Labels.collectionAll, handle: "all" };
                                t.unshift(e);
                            }
                        },
                    },
                    {
                        key: "markValuesAsNoRender",
                        value: function (t) {
                            var e = o.a.getSettingValue("general.scrollFirstLoadLength"),
                                n = [hr.a.DisplayType.LIST, hr.a.DisplayType.BOX, hr.a.DisplayType.SWATCH];
                            p.a.isMobile() ? (n = [hr.a.DisplayType.LIST, hr.a.DisplayType.SWATCH]) : this.filterTreeType == Rr.FilterTreeType.VERTICAL && (n = [hr.a.DisplayType.LIST, hr.a.DisplayType.BOX]),
                                Array.isArray(t) &&
                                    t.length > e &&
                                    n.includes(this.displayType) &&
                                    va.isEnabled(this.displayType, this.filterType, this.showMoreType) &&
                                    ((this.isLoadMoreOnScroll = !0),
                                    t.forEach(function (t, n) {
                                        t.isRenderOnScroll = n >= e;
                                    }));
                        },
                    },
                ]) && rl(n.prototype, i),
                a && rl(n, a),
                e
            );
        })(y);
        function cl(t) {
            return (cl =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function ul(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function pl(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function fl(t, e) {
            return !e || ("object" !== cl(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function hl(t, e, n) {
            return (hl =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (t, e, n) {
                          var i = (function (t, e) {
                              for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = yl(t)); );
                              return t;
                          })(t, e);
                          if (i) {
                              var r = Object.getOwnPropertyDescriptor(i, e);
                              return r.get ? r.get.call(n) : r.value;
                          }
                      })(t, e, n || t);
        }
        function yl(t) {
            return (yl = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function dl(t, e) {
            return (dl =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var gl = (function (t) {
            function e() {
                return ul(this, e), fl(this, yl(e).apply(this, arguments));
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && dl(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getBlockContentTemplate",
                        value: function () {
                            return this.selectType == hr.a.SelectType.SINGLE
                                ? '\n\t\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListSingleList}}">\n\t\t\t\t\t{{filterItems}}\n\t\t\t\t</ul>\n\t\t\t'
                                : '\n\t\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListMultipleList}}">\n\t\t\t\t\t{{filterItems}}\n\t\t\t\t</ul>\n\t\t\t';
                        },
                    },
                    {
                        key: "prepareFilterOptionData",
                        value: function (t) {
                            if (("price" == t.filterType || "variants_price" == t.filterType) && t.values && jQ.isArray(t.values))
                                for (var e = 0; e < t.values.length; e++) {
                                    var n = !1,
                                        i = !1;
                                    t.values[e].hasOwnProperty("to") && ((n = !0), (t.values[e].to = p.a.convertPriceBasedOnActiveCurrency(t.values[e].to))),
                                        t.values[e].hasOwnProperty("from") && ((i = !0), (t.values[e].from = p.a.convertPriceBasedOnActiveCurrency(t.values[e].from))),
                                        (t.values[e].key = n && i ? t.values[e].from + "-" + t.values[e].to : n ? "*-" + t.values[e].to : t.values[e].from + "-*");
                                }
                            return t;
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            (t = this.prepareFilterOptionData(t)), hl(yl(e.prototype), "setData", this).call(this, t);
                        },
                    },
                ]) && pl(n.prototype, i),
                r && pl(n, r),
                e
            );
        })(sl);
        function ml(t) {
            return (ml =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function bl(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function vl(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Sl(t, e) {
            return !e || ("object" !== ml(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Ol(t) {
            return (Ol = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Tl(t, e) {
            return (Tl =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Pl = (function (t) {
            function e() {
                return bl(this, e), Sl(this, Ol(e).apply(this, arguments));
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Tl(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getBlockContentTemplate",
                        value: function () {
                            return '\n\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListBox}}">{{filterItems}}</ul>\n\t\t';
                        },
                    },
                    {
                        key: "calculateBoxItemSize",
                        value: function () {
                            if (!o.a.getSettingValue("general.enableFilterOptionBoxStyle")) return "";
                            var t = this.$element ? this.$element.width() : 0;
                            if (!t || t < 0) return "100%";
                            if (!this.boxItemSize) {
                                var e = 4,
                                    n = o.a.getSettingValue("general.filterOptionBoxCharWidth") || 14;
                                this.filterItems.forEach(function (t) {
                                    var i = t.label.length * n;
                                    e = Math.max(i, e);
                                });
                                var i = 100 / (Math.floor(this.$element.width() / (e + 8)) || 1) - 2;
                                i < 1 && (i = 100), (this.boxItemSize = i + "%");
                            }
                            return this.boxItemSize;
                        },
                    },
                ]) && vl(n.prototype, i),
                r && vl(n, r),
                e
            );
        })(sl);
        function wl(t) {
            return (wl =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function _l(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function Cl(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function kl(t, e) {
            return !e || ("object" !== wl(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function El(t) {
            return (El = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Il(t, e) {
            return (Il =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Ll = (function (t) {
            function e() {
                return _l(this, e), kl(this, El(e).apply(this, arguments));
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Il(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getBlockContentTemplate",
                        value: function () {
                            return '\n\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListSwatch}} {{swatchStyle}}">\n\t\t\t\t{{filterItems}}\n\t\t\t</ul>\n\t\t';
                        },
                    },
                    {
                        key: "compileBlockContentTemplate",
                        value: function () {
                            return (this.swatchStyle = this.buildSwatchStyle()), this.getBlockContentTemplate().replace(/{{swatchStyle}}/g, this.swatchStyle);
                        },
                    },
                    {
                        key: "buildSwatchStyle",
                        value: function () {
                            var t = o.a.getSettingValue("general.swatchStyle");
                            return t || (this.filterTreeType == Rr.FilterTreeType.HORIZONTAL || (p.a.isMobile() && "style2" == o.a.getSettingValue("general.filterTreeMobileStyle")) ? "circle-list" : "circle-grid");
                        },
                    },
                ]) && Cl(n.prototype, i),
                r && Cl(n, r),
                e
            );
        })(sl);
        function Al(t) {
            return (Al =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Fl(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function Rl(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function jl(t, e) {
            return !e || ("object" !== Al(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function $l(t) {
            return ($l = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Bl(t, e) {
            return (Bl =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var xl = (function (t) {
            function e() {
                return Fl(this, e), jl(this, $l(e).apply(this, arguments));
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Bl(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getBlockContentTemplate",
                        value: function () {
                            return this.selectType == hr.a.SelectType.MULTIPLE && this.showExactRating
                                ? '\n\t\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListRating}} {{class.filterOptionItemListMultipleList}}">\n\t\t\t\t\t{{filterItems}}\n\t\t\t\t</ul>\n\t\t\t'
                                : '\n\t\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListRating}}">\n\t\t\t\t\t{{filterItems}}\n\t\t\t\t</ul>\n\t\t\t';
                        },
                    },
                ]) && Rl(n.prototype, i),
                r && Rl(n, r),
                e
            );
        })(sl);
        function Ml(t) {
            return (Ml =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Dl(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Vl(t, e) {
            return !e || ("object" !== Ml(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Nl(t) {
            return (Nl = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Ul(t, e) {
            return (Ul =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var ql = (function (t) {
            function e(t) {
                var n;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((n = Vl(this, Nl(e).call(this))).filterTreeType = t),
                    (n.$element = null),
                    n
                );
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Ul(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            (this.clearButton = new Dr(this.filterTreeType, Dr.ClearType.CLEAR_SINGLE_VALUE)), this.addComponent(this.clearButton);
                        },
                    },
                    {
                        key: "getTemplate",
                        value: function () {
                            switch (this.filterTreeType) {
                                case Rr.FilterTreeType.VERTICAL:
                                    return '\n\t\t\t\t\t<div class="refine-by-item {{class.filterOptionLabel}}">\n\t\t\t\t\t\t<a tabindex="0" role="button" href="javascript:;">\n\t\t\t\t\t\t\t<span class="refine-by-type">\n\t\t\t\t\t\t\t\t<span>{{type}}</span><strong>{{label}}</strong>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t{{clearButton}}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t';
                                case Rr.FilterTreeType.HORIZONTAL:
                                    return '\n\t\t\t\t\t<div class="refine-by-item">\n\t\t\t\t\t\t<a tabindex="0" role="button" href="javascript:;">\n\t\t\t\t\t\t\t<span class="{{class.filterOptionLabel}} refine-by-type">{{label}}</span>\n\t\t\t\t\t\t\t{{clearButton}}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t';
                                default:
                                    throw Error("Wrong filterTreeType");
                            }
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return this.getTemplate()
                                .replace(/{{class.filterOptionLabel}}/g, f.filterOptionLabel)
                                .replace(/{{type}}/g, this.type ? this.type + ": " : "")
                                .replace(/{{label}}/g, this.label)
                                .replace(/{{clearButton}}/g, "");
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            (this.$element = r()(this.compileTemplate())), this.$element.find("a").append(this.clearButton.$element);
                        },
                    },
                    {
                        key: "setData",
                        value: function (t, e, n) {
                            (this.filterOption = t), (this.filterItem = e), (this.filterOptionId = t.filterOptionId), (this.filterItemId = n), (this.type = t.label), (this.label = this.buildLabel());
                        },
                    },
                    {
                        key: "buildLabel",
                        value: function () {
                            var t = this.filterItemId;
                            if (this.filterOption)
                                switch (this.filterOption.displayType) {
                                    case hr.a.DisplayType.RANGE:
                                        t = this.buildLabelRange();
                                        break;
                                    case hr.a.DisplayType.RATING:
                                        t = this.buildLabelRating();
                                        break;
                                    case hr.a.DisplayType.MULTI_LEVEL_COLLECTIONS:
                                    case hr.a.DisplayType.MULTI_LEVEL_TAG:
                                        t = this.buildLabelMultiLevel();
                                        break;
                                    default:
                                        if (this.filterItem) t = this.filterItem.label;
                                        else {
                                            var e = new Jr(this.filterOption.filterTreeType);
                                            (e.filterOption = this.filterOption), (e.label = this.filterItemId), (t = e.buildLabel());
                                        }
                                }
                            return t;
                        },
                    },
                    {
                        key: "buildLabelRating",
                        value: function () {
                            var t = "";
                            if (this.filterItem) {
                                var e = this.filterItem.from;
                                (t = Math.ceil(e) + " "), 1 == Math.ceil(e) ? (t += a.a.ratingStar) : (t += a.a.ratingStars), this.filterOption.showExactRating || (t += " " + a.a.ratingUp);
                            }
                            return t;
                        },
                    },
                    {
                        key: "buildLabelRange",
                        value: function () {
                            var t = "";
                            if (this.filterOption)
                                if (this.filterOption.isNumberRangeSlider)
                                    (e = this.filterItemId.split(":")) && 2 == e.length && (t = (n = this.filterOption.buildLabel(e[0])) == (i = this.filterOption.buildLabel(e[1])) ? n : n + " - " + i);
                                else {
                                    var e = this.filterItemId,
                                        n = "",
                                        i = "";
                                    if (
                                        (this.filterOption.currentMax - 1 > 0 && this.filterOption.currentMax - 1 < this.filterOption.valuesData.length
                                            ? ((n = this.filterOption.valuesData[this.filterOption.currentMin].key), (i = this.filterOption.valuesData[this.filterOption.currentMax - 1].key))
                                            : Array.isArray(e) && e.length > 0 && ((n = e[0]), (i = e[e.length - 1])),
                                        this.filterOption.prefix)
                                    ) {
                                        var r = this.filterOption.prefix.replace(/\\/g, "");
                                        (n = n.replace(r, "").trim()), (i = i.replace(r, "").trim());
                                    }
                                    t = n == i ? n : n + " - " + i;
                                }
                            return t;
                        },
                    },
                    {
                        key: "buildLabelMultiLevel",
                        value: function () {
                            var t = "";
                            if (this.filterOption && this.filterItem && (this.filterOption.displayType == hr.a.DisplayType.MULTI_LEVEL_COLLECTIONS || this.filterOption.displayType == hr.a.DisplayType.MULTI_LEVEL_TAG))
                                switch (this.filterItem.level) {
                                    case 1:
                                        (this.type = this.filterOption.label), (t = this.filterItem.buildLabel());
                                        break;
                                    case 2:
                                    case 3:
                                        (this.filterOptionId = this.filterOptionId.replace(Globals.prefix + "_c_", Globals.prefix + "_ct_")), (this.type = this.filterOption.label), (t = this.filterItem.buildLabel());
                                }
                            return t || this.filterItemId;
                        },
                    },
                ]) && Dl(n.prototype, i),
                o && Dl(n, o),
                e
            );
        })(y);
        function Hl(t) {
            return (Hl =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Gl(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Wl(t, e) {
            return !e || ("object" !== Hl(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function zl(t) {
            return (zl = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Kl(t, e) {
            return (Kl =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Yl = (function (t) {
            function e(t) {
                var n;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((n = Wl(this, zl(e).call(this))).refineByItems = []),
                    (n.clearAllButton = null),
                    (n.filterTreeType = t),
                    (n.$element = null),
                    n
                );
            }
            var n, i, o;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Kl(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            Settings.getSettingValue("general.separateRefineByFromFilter") &&
                                (r()(c.filterRefineByHorizontal).length > 0 ? (this.filterTreeType = Rr.FilterTreeType.HORIZONTAL) : r()(c.filterRefineByVertical).length > 0 && (this.filterTreeType = Rr.FilterTreeType.VERTICAL)),
                                (this.clearAllButton = new Dr(this.filterTreeType, Dr.ClearType.CLEAR_ALL)),
                                this.addComponent(this.clearAllButton);
                        },
                    },
                    {
                        key: "getTemplate",
                        value: function () {
                            switch (this.filterTreeType) {
                                case Rr.FilterTreeType.VERTICAL:
                                    return '\n\t\t\t\t\t<div class="{{class.filterRefineBy}}">\n\t\t\t\t\t\t<div class="{{class.filterOptionTitle}}">\n\t\t\t\t\t\t\t<h3><span>{{label}}</span></h3>\n\t\t\t\t\t\t\t{{clearAllButton}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="{{class.filterSelectedItems}}">{{refineByItems}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t';
                                case Rr.FilterTreeType.HORIZONTAL:
                                    return '\n\t\t\t\t\t<div class="boost-pfs-filter-pc {{class.filterRefineBy}}">\n\t\t\t\t\t\t<span>{{label}}</span>\n\t\t\t\t\t\t<div class="{{class.filterSelectedItems}}">{{refineByItems}}</div>\n\t\t\t\t\t\t{{clearAllButton}}\n\t\t\t\t\t</div>\n\t\t\t\t';
                                default:
                                    throw Error("Wrong filterTreeType");
                            }
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return this.getTemplate()
                                .replace(/{{class.filterRefineBy}}/g, f.filterRefineBy)
                                .replace(/{{class.filterOptionTitle}}/g, f.filterOptionTitle)
                                .replace(/{{class.filterSelectedItems}}/g, f.filterSelectedItems)
                                .replace(/{{label}}/g, a.a.refine)
                                .replace(/{{refineByItems}}/g, "")
                                .replace(/{{clearAllButton}}/g, "");
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t = this;
                            this.refineByItems && this.refineByItems.length > 0
                                ? ((this.$element = r()(this.compileTemplate())),
                                  (this.$refineByItemsContainer = this.$element.find("." + f.filterSelectedItems)),
                                  this.refineByItems.forEach(function (e) {
                                      t.$refineByItemsContainer.append(e.$element);
                                  }),
                                  (this.$clearAllButtonContainer = this.filterTreeType == Rr.FilterTreeType.VERTICAL ? this.$element.find("." + f.filterOptionTitle) : this.$element),
                                  this.$clearAllButtonContainer.append(this.clearAllButton.$element))
                                : (this.$element = null);
                        },
                    },
                    {
                        key: "setData",
                        value: function () {
                            var t = this;
                            this.refineByItems = [];
                            var e = Object.keys(l.a.queryParams).filter(function (t) {
                                return t.startsWith(l.a.prefix);
                            });
                            e &&
                                e.length > 0 &&
                                e.forEach(function (e) {
                                    var n = t.parent.filterOptions.get(e),
                                        i = e.startsWith(l.a.prefix + "_ct_");
                                    i && (n = t.parent.filterOptions.get(e.replace(l.a.prefix + "_ct_", l.a.prefix + "_c_")));
                                    var r = l.a.queryParams[e],
                                        o = e.startsWith(l.a.prefix + "_c_");
                                    if ((o && !Array.isArray(r) && (r = [r]), n && r)) {
                                        var a = n.displayType == hr.a.DisplayType.MULTI_LEVEL_COLLECTIONS || n.displayType == hr.a.DisplayType.MULTI_LEVEL_TAG;
                                        if (n.displayType == hr.a.DisplayType.RANGE) {
                                            var s = new ql(t.filterTreeType),
                                                c = "";
                                            (c = n.isNumberRangeSlider ? r[0] : r), s.setData(n, null, c), t.refineByItems.push(s), t.addComponent(s);
                                        } else if (a) {
                                            var u =
                                                (n.displayType == hr.a.DisplayType.MULTI_LEVEL_COLLECTIONS && Settings.getSettingValue("general.multiLevelCollectionSelectType") == hr.a.SelectType.SINGLE) ||
                                                (n.displayType == hr.a.DisplayType.MULTI_LEVEL_TAG && n.selectType == hr.a.SelectType.SINGLE);
                                            Object.values(r).forEach(function (e) {
                                                var r = e;
                                                i && (r = l.a.collectionId + ":" + e);
                                                var a = n.allNestedFilterItems.get(r);
                                                if (!(u && o && a && a.isSelectedChild)) {
                                                    var s = new ql(t.filterTreeType);
                                                    s.setData(n, a, e), t.refineByItems.push(s), t.addComponent(s);
                                                }
                                            });
                                        } else
                                            Object.values(r).forEach(function (e) {
                                                var i = n.filterItems.get(e),
                                                    r = new ql(t.filterTreeType);
                                                r.setData(n, i, e), t.refineByItems.push(r), t.addComponent(r);
                                            });
                                    }
                                });
                        },
                    },
                ]) && Gl(n.prototype, i),
                o && Gl(n, o),
                e
            );
        })(y);
        function Ql(t) {
            return (Ql =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Jl(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function Zl(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Xl(t, e) {
            return !e || ("object" !== Ql(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function ts(t) {
            return (ts = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function es(t, e) {
            return (es =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var ns = (function (t) {
                function e() {
                    return Jl(this, e), Xl(this, ts(e).apply(this, arguments));
                }
                var n, i, r;
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && es(t, e);
                    })(e, t),
                    (n = e),
                    (i = [
                        {
                            key: "getBlockContentTemplate",
                            value: function () {
                                return '\n\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptionItemListSingleList}}">\n\t\t\t\t{{filterItems}}\n\t\t\t</ul>\n\t\t';
                            },
                        },
                    ]) && Zl(n.prototype, i),
                    r && Zl(n, r),
                    e
                );
            })(sl),
            is = (n(88), n(97)),
            rs = n.n(is);
        function os(t) {
            return (os =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function as(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function ls(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function ss(t, e) {
            return !e || ("object" !== os(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function cs(t, e, n) {
            return (cs =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (t, e, n) {
                          var i = (function (t, e) {
                              for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = us(t)); );
                              return t;
                          })(t, e);
                          if (i) {
                              var r = Object.getOwnPropertyDescriptor(i, e);
                              return r.get ? r.get.call(n) : r.value;
                          }
                      })(t, e, n || t);
        }
        function us(t) {
            return (us = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function ps(t, e) {
            return (ps =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var fs = (function (t) {
            function e() {
                return as(this, e), ss(this, us(e).apply(this, arguments));
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && ps(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            cs(us(e.prototype), "init", this).call(this), (this.requestInstantly = this.filterTreeType == Rr.FilterTreeType.VERTICAL || o.a.getSettingValue("general.requestInstantly"));
                        },
                    },
                    {
                        key: "getBlockContentTemplate",
                        value: function () {
                            return this.hideInputElement
                                ? '\n\t\t\t\t<div>\n\t\t\t\t\t<div class="boost-pfs-filter-option-range-slider"></div>\n\t\t\t\t</div>\n\t\t\t'
                                : "style3" == this.style
                                ? '\n\t\t\t\t<div class="boost-pfs-filter-block-content-inner">\n\t\t\t\t\t<div class="boost-pfs-filter-option-range-slider"></div>\n\t\t\t\t\t<div class="boost-pfs-filter-option-range-amount">\n\t\t\t\t\t\t<input id="boost-pfs-filter-option-range-amount-min" class="boost-pfs-filter-option-range-amount-min" aria-label="Min Price" type="text" readonly />\n\t\t\t\t\t\t<input class="boost-pfs-filter-option-range-amount-max" aria-label="Max Price" type="text" readonly />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t'
                                : '\n\t\t\t\t<div class="boost-pfs-filter-block-content-inner">\n\t\t\t\t\t<div class="boost-pfs-filter-option-range-amount">\n\t\t\t\t\t\t<input id="boost-pfs-filter-option-range-amount-min" class="boost-pfs-filter-option-range-amount-min" aria-label="Min Price" type="text" />\n\t\t\t\t\t\t<div class="boost-pfs-filter-option-range-amount-split"> - </div>\n\t\t\t\t\t\t<input id="boost-pfs-filter-option-range-amount-max" class="boost-pfs-filter-option-range-amount-max" aria-label="Max Price" type="text" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="boost-pfs-filter-option-range-slider"></div>\n\t\t\t\t</div>\n\t\t\t\t';
                        },
                    },
                    {
                        key: "isRender",
                        value: function () {
                            if (this.status == hr.a.Status.ACTIVE) {
                                var t = o.a.getSettingValue("general.oneValueRangeSlider");
                                return !(this.isNumberRangeSlider ? this.rangeMax == this.rangeMin : this.valuesData.length <= 1) || t;
                            }
                            return !1;
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            cs(us(e.prototype), "render", this).call(this), this.$element.addClass("boost-pfs-filter-option-range-" + this.style), this.renderRangeValue(), this.renderInputField();
                        },
                    },
                    {
                        key: "renderRangeValue",
                        value: function () {
                            this.setCurrentValues(), this.noUiSlider && this.noUiSlider.set([this.currentMin, this.currentMax]);
                        },
                    },
                    {
                        key: "renderInputField",
                        value: function () {
                            if (this.$element && !this.hideInputElement) {
                                (this.$minInputElement && this.$maxInputElement) ||
                                    ((this.$minInputElement = this.$element.find(".boost-pfs-filter-option-range-amount-min")), (this.$maxInputElement = this.$element.find(".boost-pfs-filter-option-range-amount-max")));
                                var t = this.buildNumberLabel(this.currentMin),
                                    e = this.buildNumberLabel(this.currentMax);
                                this.$minInputElement.val(t), this.$maxInputElement.val(e);
                            }
                        },
                    },
                    {
                        key: "renderTextLabelPosition",
                        value: function () {
                            var t = this.$element.find(".noUi-value"),
                                e = 100 / (2 * this.valuesData.length);
                            t.each(function (t, n) {
                                var i = n.style.left;
                                if ("string" == typeof i) {
                                    var r = parseFloat(i.replace("%", "")) + e;
                                    n.style.left = r + "%";
                                }
                            });
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            cs(us(e.prototype), "bindEvents", this).call(this),
                                this.$element &&
                                    ((this.$rangeSliderElement = this.$element.find(".boost-pfs-filter-option-range-slider")),
                                    (this.noUiSlider = rs.a.create(this.$rangeSliderElement[0], this.getSliderConfig())),
                                    this.noUiSlider.on("slide", this.onDrag.bind(this)),
                                    this.noUiSlider.on("change", this.onFinishDragging.bind(this)),
                                    this.hideInputElement || (this.$minInputElement.on("change", this.onChangeInput.bind(this, "min")), this.$maxInputElement.on("change", this.onChangeInput.bind(this, "max"))),
                                    this.isNumberRangeSlider || this.renderTextLabelPosition());
                        },
                    },
                    {
                        key: "onChangeInput",
                        value: function (t) {
                            var e = "min" == t ? this.$minInputElement.val().trim() : this.currentMin.toString(),
                                n = "max" == t ? this.$maxInputElement.val().trim() : this.currentMax.toString();
                            this.thousandSeparator && ((e = e.split(this.thousandSeparator).join("")), (n = n.split(this.thousandSeparator).join(""))),
                                this.decimalSeparator && "." != this.decimalSeparator && ((e = e.replace(this.decimalSeparator, ".")), (n = n.replace(this.decimalSeparator, "."))),
                                !this.isNumberRangeSlider || null == e || null == n || "" == e || "" == n || isNaN(e) || isNaN(n) || (e = parseFloat(e)) > (n = parseFloat(n))
                                    ? this.renderInputField()
                                    : ((this.currentMin = Math.max(e, this.rangeMin)), (this.currentMax = Math.min(n, this.rangeMax)), this.noUiSlider && this.noUiSlider.set([this.currentMin, this.currentMax]), this.onFinishDragging());
                        },
                    },
                    {
                        key: "onDrag",
                        value: function () {
                            var t = this.noUiSlider.get();
                            if (null != t)
                                if (Array.isArray(t) && 2 == t.length) {
                                    if (this.isNumberRangeSlider) (this.currentMin = t[0]), (this.currentMax = t[1]);
                                    else {
                                        var e = Math.round(t[0]),
                                            n = Math.round(t[1]);
                                        n <= e ? this.noUiSlider.set([this.currentMin, this.currentMax]) : ((this.currentMin = e), (this.currentMax = n));
                                    }
                                    this.renderInputField();
                                } else ("string" != typeof t && "number" != typeof t) || ((this.currentMin = t), (this.currentMax = t));
                        },
                    },
                    {
                        key: "onFinishDragging",
                        value: function () {
                            var t = this;
                            if (this.isNumberRangeSlider)
                                this.filterItems.forEach(function (e) {
                                    e.setValue(t.currentMin, t.currentMax);
                                });
                            else {
                                var e = [];
                                if (this.currentMin != this.rangeMin || this.currentMax != this.rangeMax) for (var n = this.currentMin; n <= this.currentMax - 1; n++) e.push(this.valuesData[n].key);
                                this.filterItems.forEach(function (t) {
                                    t.isSelected = e.includes(t.value);
                                });
                            }
                            if (this.requestInstantly) {
                                var i = [];
                                this.filterItems.forEach(function (t) {
                                    t.isSelected && i.push(t.value);
                                }),
                                    Le.default.setParam(this.filterOptionId, i),
                                    Le.default.setParam("page", 1);
                                var r = { filterOptionId: this.filterOptionId, filterOptionValue: i };
                                Le.default.applyFilter("filter", r);
                            }
                        },
                    },
                    {
                        key: "getSliderConfig",
                        value: function () {
                            var t = {
                                start: this.isSingleHandle ? [this.currentMin] : [this.currentMin, this.currentMax],
                                step: this.sliderStep,
                                connect: !0,
                                snap: !this.isNumberRangeSlider,
                                animate: !0,
                                animationDuration: 300,
                                range: this.getSliderRange(),
                                pips: this.getSliderPipsConfig(),
                            };
                            if (this.isShowTooltip) {
                                var e = { to: this.buildLabel.bind(this) };
                                t.tooltips = [e, e];
                            }
                            return t;
                        },
                    },
                    {
                        key: "getSliderRange",
                        value: function () {
                            var t = { min: this.rangeMin, max: this.rangeMax };
                            if (!this.isNumberRangeSlider) for (var e = 1; e < this.valuesData.length; e++) t[e * (100 / this.valuesData.length) + "%"] = e;
                            return t;
                        },
                    },
                    {
                        key: "getSliderPipsConfig",
                        value: function () {
                            return {
                                mode: "count",
                                values: this.isNumberRangeSlider ? this.sliderRange + 1 : this.valuesData.length + 1,
                                filter: function (t, e) {
                                    return 1 == e ? e : -1;
                                },
                                format: { to: this.buildLabel.bind(this) },
                            };
                        },
                    },
                    {
                        key: "buildLabel",
                        value: function (t) {
                            var e = "";
                            return (
                                this.isNumberRangeSlider
                                    ? (e = this.isPriceFilter ? this.buildMoneyLabel(t) : this.buildNumberLabel(t, !0))
                                    : Number.isInteger(t) && t >= 0 && t < this.valuesData.length && ((e = this.valuesData[t].key), (e = this.buildTextLabel(e))),
                                e
                            );
                        },
                    },
                    {
                        key: "buildMoneyLabel",
                        value: function (t) {
                            var e = o.a.getSettingValue("general.enable3rdCurrencySupport"),
                                n = this.buildNumberLabel(t, !0),
                                i = this.moneyFormat.replace(/{{\s*(\w+)\s*}}/, n);
                            return (i = i.replace(/[A-Z][A-Z][A-Z]/, "")), e && (i = p.a.moneyWrapper(i)), i;
                        },
                    },
                    {
                        key: "buildNumberLabel",
                        value: function (t, e) {
                            if (o.a.getSettingValue("general.shortenPipsRange") && e) {
                                var n = o.a.getSettingValue("general.formatPipsRange");
                                if (Array.isArray(n) && n.length > 0)
                                    for (var i = 0, r = 0, a = n.length - 1; a >= 0; a--) {
                                        var l = n[a];
                                        if (t >= l.node)
                                            return (
                                                (i = Math.floor(t / l.node).toString()),
                                                (r = (r = Math.round(t % l.node)) > 0 ? r.toString() : "").length > l.fix && (r = r.substring(0, l.fix)),
                                                l.suffix ? i + this.decimalSeparator + r + l.symbol : i + l.symbol + r
                                            );
                                    }
                            }
                            var s = !o.a.getSettingValue("general.removePriceDecimal");
                            return p.a.formatNumberWithSeparator(t, this.precision, this.thousandSeparator, this.decimalSeparator, s);
                        },
                    },
                    {
                        key: "buildTextLabel",
                        value: function (t) {
                            if (this.prefix) {
                                var e = this.prefix.replace(/\\/g, "");
                                t = t.replace(e, "").trim();
                            }
                            return t;
                        },
                    },
                    {
                        key: "setMoneyFormat",
                        value: function () {
                            if (this.isPriceFilter) {
                                var t = o.a.getSettingValue("general.rangeSliderMoneyFormat");
                                this.moneyFormat = t || "{{amount}}";
                            }
                        },
                    },
                    {
                        key: "setCurrentValues",
                        value: function () {
                            var t = this,
                                e = this.rangeMin,
                                n = this.rangeMax,
                                i = null;
                            if (l.a.queryParams.hasOwnProperty(this.filterOptionId))
                                if (this.isNumberRangeSlider) (i = l.a.queryParams[this.filterOptionId][0].split(":")) && 2 == i.length && ((e = i[0]), (n = i[1]));
                                else if (((i = l.a.queryParams[this.filterOptionId]), Array.isArray(i))) {
                                    var r = this.valuesData.map(function (t) {
                                        return t.key;
                                    });
                                    (e = this.rangeMax),
                                        (n = this.rangeMin),
                                        i.forEach(function (i) {
                                            var o = r.indexOf(i);
                                            o >= t.rangeMin && o <= t.rangeMax && (o < e && (e = o), o + 1 > n && (n = o + 1));
                                        });
                                }
                            (this.currentMin = e), (this.currentMax = n);
                        },
                    },
                    {
                        key: "setDisplayStyle",
                        value: function () {
                            var t = o.a.getSettingValue("general.rangeSlidersStyle3"),
                                e = o.a.getSettingValue("general.rangeSlidersSingleHandle");
                            this.isNumberRangeSlider
                                ? Array.isArray(e) && e.includes(this.filterOptionId)
                                    ? ((this.style = "style4"), (this.hideInputElement = !0), (this.isSingleHandle = !0), (this.currentMax = this.currentMin))
                                    : Array.isArray(t) && t.includes(this.filterOptionId)
                                    ? ((this.style = "style3"), (this.hideInputElement = !1))
                                    : this.hideInputElement
                                    ? ((this.style = "style2"), (this.isShowTooltip = !0))
                                    : (this.style = "style1")
                                : ((this.style = "style5"), (this.hideInputElement = !0)),
                                o.a.getSettingValue("general.enable3rdCurrencySupport") && ["style1", "style3"].indexOf(this.style) > -1 && ((this.style = "style2"), (this.hideInputElement = !0), (this.isShowTooltip = !0));
                        },
                    },
                    {
                        key: "prepareFilterOptionData",
                        value: function (t) {
                            return (
                                t.values.max && t.values.min && ((t.values.max = Math.ceil(100 * t.values.max) / 100), (t.values.min = Math.floor(100 * t.values.min) / 100)),
                                ("price" != t.filterType && "variants_price" != t.filterType) ||
                                    !t.values ||
                                    ((t.values.min = p.a.convertPriceBasedOnActiveCurrency(t.values.min)), (t.values.max = p.a.convertPriceBasedOnActiveCurrency(t.values.max))),
                                t
                            );
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            if (((t = this.prepareFilterOptionData(t)), cs(us(e.prototype), "setData", this).call(this, t), "price" == this.filterType || "variants_price" == this.filterType)) {
                                var n = [],
                                    i = o.a.getSettingValue("general.rangeSliderMoneyFormat");
                                i ? ((n[0] = i.split("{{")[0].trim() || ""), (n[1] = i.split("}}")[1].trim() || "")) : ((n[0] = l.a.moneyFormat.split("{{")[0].trim() || ""), (n[1] = l.a.moneyFormat.split("}}")[1].trim() || "")),
                                    n[0] ? (this.label += " (" + n[0] + ")") : n[1] && (this.label += " (" + n[1] + ")");
                            }
                            if (
                                ((this.isNumberRangeSlider = !Array.isArray(t.values)),
                                (this.isPriceFilter = t.filterType == hr.a.FilterType.PRICE || t.filterType == hr.a.FilterType.VARIANTS_PRICE),
                                this.isPriceFilter && this.setMoneyFormat(),
                                this.isSortValues() && this.sortValues(t.values),
                                (this.valuesData = JSON.parse(JSON.stringify(t.values))),
                                this.isNumberRangeSlider && null != t.values.min && null != t.values.max && t.values.min != t.values.max)
                            ) {
                                if (
                                    ((this.hideInputElement = t.hideTextBoxes),
                                    (this.sliderRange = parseFloat(t.sliderRange)),
                                    isNaN(this.sliderRange) && (this.sliderRange = 4),
                                    (this.sliderStep = parseFloat(t.sliderStep)),
                                    (isNaN(this.sliderStep) || this.sliderStep > t.values.max) && (this.sliderStep = 1),
                                    (this.precision = 0),
                                    Math.floor(this.sliderStep) != this.sliderStep)
                                ) {
                                    var r = this.sliderStep.toString().split(".");
                                    r.length > 1 && (this.precision = r[1].length);
                                }
                                (this.thousandSeparator = t.sliderDelimiter ? t.sliderDelimiter : ""),
                                    "." == this.thousandSeparator ? (this.decimalSeparator = ",") : (this.decimalSeparator = "."),
                                    (this.rangeMin = parseFloat(t.values.min)),
                                    (this.rangeMax = parseFloat(t.values.max)),
                                    this.setCurrentValues(),
                                    this.setDisplayStyle();
                            } else
                                Array.isArray(t.values) && t.values.length > 1
                                    ? ((this.hideInputElement = !0), (this.sliderStep = 1), (this.rangeMin = 0), (this.rangeMax = this.valuesData.length), this.setCurrentValues(), this.setDisplayStyle())
                                    : (this.status = hr.a.Status.DISABLED);
                        },
                    },
                ]) && ls(n.prototype, i),
                r && ls(n, r),
                e
            );
        })(sl);
        function hs(t) {
            return (hs =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function ys(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function ds(t, e) {
            return !e || ("object" !== hs(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function gs(t) {
            return (gs = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function ms(t, e) {
            return (ms =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var bs = (function (t) {
            function e(t) {
                var n;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((n = ds(this, gs(e).call(this, t))).allNestedFilterItems = new Map()),
                    n
                );
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && ms(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getBlockContentTemplate",
                        value: function () {
                            return '\n\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptiontemListMultiLevelCollections}} {{class.filterOptionItemListSingleList}} boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-first-level-list">\n\t\t\t\t{{filterItems}}\n\t\t\t</ul>\n\t\t';
                        },
                    },
                ]) && ys(n.prototype, i),
                r && ys(n, r),
                e
            );
        })(sl);
        function vs(t) {
            return (vs =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Ss(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Os(t, e) {
            return !e || ("object" !== vs(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Ts(t) {
            return (Ts = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Ps(t, e) {
            return (Ps =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var ws = (function (t) {
            function e(t) {
                var n;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((n = Os(this, Ts(e).call(this, t))).allNestedFilterItems = new Map()),
                    n
                );
            }
            var n, i, r;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Ps(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getBlockContentTemplate",
                        value: function () {
                            return '\n\t\t\t<ul class="{{class.filterOptionItemList}} {{class.filterOptiontemListMultiLevelCollections}} {{displayTypeClass}} boost-pfs-filter-option-multi-level-list boost-pfs-filter-option-first-level-list">\n\t\t\t\t{{filterItems}}\n\t\t\t</ul>\n\t\t';
                        },
                    },
                    {
                        key: "compileBlockContentTemplate",
                        value: function () {
                            var t = this.getDisplayTypeClass();
                            return this.getBlockContentTemplate().replace(/{{displayTypeClass}}/g, t);
                        },
                    },
                    {
                        key: "getDisplayTypeClass",
                        value: function () {
                            var t = "";
                            switch (this.displayTypeItem) {
                                case hr.a.DisplayType.LIST:
                                    t = this.selectType == hr.a.SelectType.SINGLE ? f.filterOptionItemListSingleList : f.filterOptionItemListMultipleList;
                                    break;
                                case hr.a.DisplayType.BOX:
                                    t = f.filterOptionItemListBox;
                                    break;
                                case hr.a.DisplayType.SWATCH:
                                    t = f.filterOptionItemListSwatch;
                                    var e = o.a.getSettingValue("general.swatchStyle");
                                    t += " " + (e = e ? e.replace("grid", "list") : "circle-list");
                            }
                            return t;
                        },
                    },
                ]) && Ss(n.prototype, i),
                r && Ss(n, r),
                e
            );
        })(sl);
        function _s(t) {
            return (_s =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Cs(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function ks(t, e) {
            return !e || ("object" !== _s(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Es(t) {
            return (Es = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Is(t, e) {
            return (Is =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Ls = (function (t) {
            function e(t, n) {
                var i;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((i = ks(this, Es(e).call(this))).id = t),
                    (i.idSelector = "#" + i.id),
                    (i.filterTreeType = n),
                    (i.isMobileOnly = !1),
                    (i.isDesktopOnly = !1),
                    (i.isRenderOnDOM = !0),
                    (i.collectionId = l.a.collectionId),
                    (i.clickedFilterOption = null),
                    (i.refineBy = null),
                    (i.filterOptions = new Map()),
                    (i.$element = null),
                    (i.selector = {
                        refineByWrapper: "." + f.filterRefineByWrapper,
                        filterOptionsWrapper: "." + f.filterOptionsWrapper,
                        clearAllButton: ".boost-pfs-filter-mobile-toolbar-bottom ." + f.clearAllButton,
                        clearAllButtonContainer: ".boost-pfs-filter-mobile-toolbar-bottom",
                        applyAllButton: ".boost-pfs-filter-mobile-toolbar-bottom ." + f.applyAllFilterOptionButton,
                        applyAllButtonContainer: ".boost-pfs-filter-mobile-footer",
                        closeFilter: "." + f.closeFilterButton + ",." + f.showResultFilterButton,
                        filterHeader: ".boost-pfs-filter-mobile-toolbar",
                        filterHeaderTop: ".boost-pfs-filter-mobile-toolbar .boost-pfs-filter-mobile-toolbar-top",
                        filterHeaderBottom: ".boost-pfs-filter-mobile-toolbar .boost-pfs-filter-mobile-toolbar-bottom",
                        filterFooter: ".boost-pfs-filter-mobile-footer",
                    }),
                    i
                );
            }
            var n, i, s;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Is(t, e);
                })(e, t),
                (n = e),
                (i = [
                    {
                        key: "getTemplate",
                        value: function () {
                            switch (this.filterTreeType) {
                                case "vertical":
                                    return '\n\t\t\t\t\t<div class="boost-pfs-filter-tree-content" aria-live="polite" role="navigation" aria-label="{{label.productFilter}}">\n\t\t\t\t\t\t{{header}}\n\t\t\t\t\t\t<div class="{{class.filterRefineByWrapper}}">\n\t\t\t\t\t\t\t{{refineBy}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="{{class.filterOptionsWrapper}}">\n\t\t\t\t\t\t\t{{filterOptions}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{footer}}\n\t\t\t\t\t</div>\n\t\t\t\t';
                                case "horizontal":
                                    return "top" == o.a.getSettingValue("general.refineByHorizontalPosition")
                                        ? '\n\t\t\t\t\t\t<div class="boost-pfs-filter-tree-content" aria-live="polite" role="navigation" aria-label="{{label.productFilter}}">\n\t\t\t\t\t\t\t{{header}}\n\t\t\t\t\t\t\t<div class="{{class.filterRefineByWrapper}}">\n\t\t\t\t\t\t\t\t{{refineBy}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="{{class.filterOptionsWrapper}}">\n\t\t\t\t\t\t\t\t{{filterOptions}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{footer}}\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t'
                                        : '\n\t\t\t\t\t\t<div class="boost-pfs-filter-tree-content" aria-live="polite" role="navigation" aria-label="{{label.productFilter}}">\n\t\t\t\t\t\t\t{{header}}\n\t\t\t\t\t\t\t<div class="{{class.filterOptionsWrapper}}">\n\t\t\t\t\t\t\t\t{{filterOptions}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="{{class.filterRefineByWrapper}}">\n\t\t\t\t\t\t\t\t{{refineBy}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{footer}}\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t';
                                default:
                                    throw Error("filterTreeType is wrong");
                            }
                        },
                    },
                    {
                        key: "getHeaderTemplate",
                        value: function () {
                            return '\n\t\t\t<div class="boost-pfs-filter-mobile-toolbar">\n\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-top">\n\t\t\t\t\t<a href="#" class="{{class.closeFilterButton}}"><span>{{label.close}}</span></a>\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-header">{{label.refineMobile}}</div>\n\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-bottom">\n\t\t\t\t\t{{clearButton}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t';
                        },
                    },
                    {
                        key: "getFooterTemplate",
                        value: function () {
                            return '\n\t\t\t<div class="boost-pfs-filter-mobile-footer">\n\t\t\t\t<button class="{{class.showResultFilterButton}}" type="button">{{label.showResult}}</button>\n\t\t\t</div>\n\t\t';
                        },
                    },
                    {
                        key: "compileTemplate",
                        value: function () {
                            return this.getTemplate()
                                .replace(/{{header}}/g, this.getHeaderTemplate())
                                .replace(/{{footer}}/g, this.getFooterTemplate())
                                .replace(/{{label.productFilter}}/g, a.a.productFilter)
                                .replace(/{{label.showResult}}/g, a.a.showResult)
                                .replace(/{{label.refineMobile}}/g, a.a.refineMobile)
                                .replace(/{{label.apply}}/g, a.a.apply)
                                .replace(/{{label.close}}/g, a.a.close)
                                .replace(/{{class.filterOptionsWrapper}}/g, f.filterOptionsWrapper)
                                .replace(/{{class.filterRefineByWrapper}}/g, f.filterRefineByWrapper)
                                .replace(/{{class.closeFilterButton}}/g, f.closeFilterButton)
                                .replace(/{{class.showResultFilterButton}}/g, f.showResultFilterButton)
                                .replace(/{{refineBy}}/g, "")
                                .replace(/{{clearButton}}/g, "")
                                .replace(/{{applyButton}}/g, "")
                                .replace(/{{filterOptions}}/g, "");
                        },
                    },
                    {
                        key: "init",
                        value: function () {
                            var t = r()(this.idSelector);
                            if (1 == t.length)
                                if (
                                    ((this.isMobileOnly = t[0].hasAttribute("data-is-mobile")),
                                    (this.isDesktopOnly = t[0].hasAttribute("data-is-desktop")),
                                    (this.isDesktopOnly && this.isMobileOnly) || (!this.isMobileOnly && !this.isDesktopOnly))
                                )
                                    (this.isDesktopOnly = !1), (this.isMobileOnly = !1);
                                else {
                                    var e = p.a.isMobile();
                                    this.isRenderOnDOM = (e && this.isMobileOnly) || (!e && this.isDesktopOnly);
                                }
                            (this.clearAllButton = new Dr(this.filterTreeType, Dr.ClearType.CLEAR_ALL)), (this.applyAllButton = new FilterApplyButton(this.filterTreeType, FilterApplyButton.ApplyType.APPLY_ALL));
                        },
                    },
                    {
                        key: "isRender",
                        value: function () {
                            return this.parent.isFetchedFilterData && this.isRenderOnDOM && Ie.isPanelActive(Ke.Enum.PRODUCT);
                        },
                    },
                    {
                        key: "isLoopThroughChild",
                        value: function () {
                            return this.isRenderOnDOM && this.parent.isFetchedFilterData;
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            !0 === l.a.queryParams.build_filter_tree && this.filterOptions && (this.isRenderPartially ? this.renderPartially() : this.renderFull(), this.renderRefineBy(), this.renderExtraElements());
                        },
                    },
                    {
                        key: "renderFull",
                        value: function () {
                            var t = this;
                            (this.$element = r()(this.compileTemplate())),
                                (this.$filterOptionsContainerElement = this.$element.find(this.selector.filterOptionsWrapper)),
                                this.filterOptions.forEach(function (e) {
                                    t.$filterOptionsContainerElement.append(e.$element);
                                });
                        },
                    },
                    {
                        key: "renderPartially",
                        value: function () {
                            var t = this;
                            this.$filterOptionsContainerElement = this.$element.find(this.selector.filterOptionsWrapper);
                            var e = !1;
                            this.clickedFilterOption.$element.siblings().remove(),
                                this.filterOptions.forEach(function (n) {
                                    if (n.$element) {
                                        if (n == t.clickedFilterOption) return void (e = !0);
                                        e ? t.$filterOptionsContainerElement.append(n.$element) : n.$element.insertBefore(t.clickedFilterOption.$element);
                                    }
                                });
                        },
                    },
                    {
                        key: "renderRefineBy",
                        value: function () {
                            o.a.getSettingValue("general.separateRefineByFromFilter") ? this.renderSeparateRefineBy() : this.renderAttachedRefineBy();
                        },
                    },
                    {
                        key: "renderAttachedRefineBy",
                        value: function () {
                            this.refineBy &&
                                this.$element &&
                                ((this.$refineByElementContainer = this.$element.find(this.selector.refineByWrapper)),
                                this.$refineByElementContainer.length > 0 && (this.$refineByElementContainer.first().html("").append(this.refineBy.$element), (this.$refineByElement = this.refineBy.$element)));
                        },
                    },
                    {
                        key: "renderSeparateRefineBy",
                        value: function () {
                            if (this.refineBy) {
                                var t = this.refineBy.filterTreeType == Rr.FilterTreeType.VERTICAL ? c.filterRefineByVertical : c.filterRefineByHorizontal;
                                r()(t).length > 0 && r()(t).first().html("").append(this.refineBy.$element);
                            }
                        },
                    },
                    {
                        key: "renderExtraElements",
                        value: function () {
                            0 == this.$element.find(this.selector.clearAllButton).length && this.$element.find(this.selector.clearAllButtonContainer).append(this.clearAllButton.$element),
                                0 == this.$element.find(this.selector.applyAllButton).length && this.$element.find(this.selector.applyAllButtonContainer).append(this.applyAllButton.$element);
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            (this.isMobileOnly || this.isDesktopOnly) &&
                                ((this.resizeTimer = null),
                                r()(window).on(
                                    "resize",
                                    function () {
                                        this.resizeTimer && clearTimeout(this.resizeTimer), (this.resizeTimer = setTimeout(this.onScreenResize.bind(this), 500));
                                    }.bind(this)
                                )),
                                this.$element &&
                                    this.$element.find(this.selector.closeFilter).length > 0 &&
                                    (this.$element.find(this.selector.closeFilter).off("click"), this.$element.find(this.selector.closeFilter).on("click", this.onCloseFilterTree.bind(this)));
                        },
                    },
                    {
                        key: "onScreenResize",
                        value: function () {
                            var t = p.a.isMobile(),
                                e = (t && this.isMobileOnly) || (!t && this.isDesktopOnly);
                            this.isRenderOnDOM != e &&
                                ((this.isRenderOnDOM = e),
                                this.isRenderOnDOM ? ((this.isRenderPartially = !1), this.refresh(), r()(this.idSelector).first().html("").append(this.$element)) : this.$element && (this.$element.detach(), (this.$element = null)));
                        },
                    },
                    {
                        key: "onCloseFilterTree",
                        value: function () {
                            var t = r()(this.idSelector);
                            t &&
                                ((this.mobileButton.isCollapsed = !0),
                                t.removeClass(f.filterTreeMobileOpen),
                                r()("body").removeClass(f.filterTreeOpenBody).removeClass("boost-pfs-body-no-scroll"),
                                r()("html").removeClass(f.filterTreeOpenBody).removeClass("boost-pfs-body-no-scroll"));
                        },
                    },
                    {
                        key: "setData",
                        value: function (t) {
                            var e = this;
                            this.collectionId == l.a.collectionId ? (this.clickedFilterOption = this.filterOptions.get(this.parent.clickedFilterOptionId)) : ((this.collectionId = l.a.collectionId), (this.clickedFilterOption = null)),
                                (this.isRenderPartially = !!(this.$element && this.clickedFilterOption && this.clickedFilterOption.$element)),
                                this.modifyOptionsData(t.options),
                                (this.children = []),
                                (this.filterOptions = new Map()),
                                t.options.forEach(function (t) {
                                    if (!(t.status != hr.a.Status.ACTIVE || (Array.isArray(t.values) && 0 == t.values.length && Array.isArray(t.manualValues) && 0 == t.manualValues.length))) {
                                        var n = null;
                                        if ((e.clickedFilterOption && t.filterOptionId == e.clickedFilterOption.filterOptionId && (n = e.clickedFilterOption), null == n)) {
                                            switch (t.displayType) {
                                                case hr.a.DisplayType.LIST:
                                                    n = new gl(e.filterTreeType);
                                                    break;
                                                case hr.a.DisplayType.BOX:
                                                    n = new Pl(e.filterTreeType);
                                                    break;
                                                case hr.a.DisplayType.RANGE:
                                                    n = new fs(e.filterTreeType);
                                                    break;
                                                case hr.a.DisplayType.SWATCH:
                                                    n = new Ll(e.filterTreeType);
                                                    break;
                                                case hr.a.DisplayType.RATING:
                                                    n = new xl(e.filterTreeType);
                                                    break;
                                                case hr.a.DisplayType.SUB_CATEGORY:
                                                    n = new ns(e.filterTreeType);
                                                    break;
                                                case hr.a.DisplayType.MULTI_LEVEL_COLLECTIONS:
                                                    n = new bs(e.filterTreeType);
                                                    break;
                                                case hr.a.DisplayType.MULTI_LEVEL_TAG:
                                                    n = new ws(e.filterTreeType);
                                            }
                                            if (!n) return;
                                            n.setData(t);
                                        }
                                        e.addComponent(n), e.filterOptions.set(t.filterOptionId, n);
                                    }
                                }),
                                o.a.getSettingValue("general.showRefineBy") && ((this.refineBy = new Yl(this.filterTreeType)), this.addComponent(this.refineBy), this.refineBy.setData()),
                                this.addComponent(this.clearAllButton),
                                this.addComponent(this.applyAllButton);
                        },
                    },
                    {
                        key: "modifyOptionsData",
                        value: function (t) {
                            var e = o.a.getSettingValue("general.advancedRangeSliders");
                            t.forEach(function (t) {
                                if ((Array.isArray(e) && e.includes(t.filterOptionId) && t.selectType == hr.a.SelectType.MULTIPLE && (t.displayType = hr.a.DisplayType.RANGE), t.filterType == hr.a.FilterType.MULTI_LEVEL_TAG)) {
                                    switch (t.displayType) {
                                        case hr.a.DisplayType.LIST:
                                            t.displayTypeItem = hr.a.DisplayType.LIST;
                                            break;
                                        case hr.a.DisplayType.BOX:
                                            t.displayTypeItem = hr.a.DisplayType.BOX;
                                            break;
                                        case hr.a.DisplayType.SWATCH:
                                            t.displayTypeItem = hr.a.DisplayType.SWATCH;
                                            break;
                                        default:
                                            return;
                                    }
                                    t.displayType = hr.a.DisplayType.MULTI_LEVEL_TAG;
                                }
                                ((p.a.isVendorPage() && t.filterType == hr.a.FilterType.VENDOR) || (p.a.isTypePage() && t.filterType == hr.a.FilterType.PRODUCT_TYPE)) && (t.status = hr.a.Status.DISABLED),
                                    t.displayType == hr.a.DisplayType.SUB_CATEGORY && (t.status = hr.a.Status.DISABLED);
                            });
                        },
                    },
                ]) && Cs(n.prototype, i),
                s && Cs(n, s),
                e
            );
        })(y);
        function As(t) {
            return (As =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Fs(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Rs(t, e) {
            return !e || ("object" !== As(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function js(t, e, n) {
            return (js =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (t, e, n) {
                          var i = (function (t, e) {
                              for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = $s(t)); );
                              return t;
                          })(t, e);
                          if (i) {
                              var r = Object.getOwnPropertyDescriptor(i, e);
                              return r.get ? r.get.call(n) : r.value;
                          }
                      })(t, e, n || t);
        }
        function $s(t) {
            return ($s = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Bs(t, e) {
            return (Bs =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var xs = (function (t) {
            function e(t, n) {
                var i;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((i = Rs(this, $s(e).call(this, t, n))).style = "style2"),
                    (i.selector.clearAllButtonContainer = ".boost-pfs-filter-mobile-toolbar-right"),
                    (i.selector.backButton = ".boost-pfs-filter-back-btn"),
                    (i.selector.refineByOnTitle = ".boost-pfs-filter-selected-items-mobile"),
                    (i.selector.headerTitle = ".boost-pfs-filter-mobile-toolbar-middle"),
                    (i.style2ActiveFilterOption = null),
                    i
                );
            }
            var n, i, s;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Bs(t, e);
                })(e, t),
                (n = e),
                (s = [
                    {
                        key: "isActive",
                        value: function (t) {
                            return t == Rr.FilterTreeType.VERTICAL && "style2" == o.a.getSettingValue("general.filterTreeMobileStyle");
                        },
                    },
                ]),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            js($s(e.prototype), "init", this).call(this),
                                r()(this.idSelector).length > 0 &&
                                    (r()(this.idSelector).addClass("boost-pfs-filter-tree-mobile-style2").addClass("boost-pfs-filter-tree-mobile-sticky"),
                                    o.a.getSettingValue("general.filterTreeMobileStyleFullWidth") && r()(this.idSelector).addClass("boost-pfs-filter-tree-mobile-full-width-style"));
                        },
                    },
                    {
                        key: "getHeaderTemplate",
                        value: function () {
                            return '\n\t\t\t<div class="boost-pfs-filter-mobile-toolbar">\n\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-top">\n\t\t\t\t\t<a href="#" class="{{class.closeFilterButton}}"><span>{{label.close}}</span></a>\n\t\t\t\t</div>\n\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-items">\n\t\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-left">\n\t\t\t\t\t\t<a href="#" class="boost-pfs-filter-back-btn"></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-middle">{{label.refineMobile}}</div>\n\t\t\t\t\t<div class="boost-pfs-filter-mobile-toolbar-right">\n\t\t\t\t\t\t{{clearButton}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t';
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t = this;
                            if ((js($s(e.prototype), "render", this).call(this), this.$element && p.a.isMobile())) {
                                var n = null;
                                this.filterOptions.forEach(function (e) {
                                    t.style2ActiveFilterOption && t.style2ActiveFilterOption.filterOptionId == e.filterOptionId && (n = e);
                                }),
                                    (this.style2ActiveFilterOption = n),
                                    this.renderFilterTreeHeader(),
                                    this.renderFilterTreeFooter(),
                                    this.renderFilterOptionCollapse(),
                                    this.renderFilterOptionClear(),
                                    this.renderRefineByOnTitle();
                            }
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function () {
                            var t = this;
                            js($s(e.prototype), "bindEvents", this).call(this),
                                this.$element &&
                                    p.a.isMobile() &&
                                    (this.$element.find(this.selector.backButton).on("click", this.closeFilterOption.bind(this)),
                                    this.filterOptions.forEach(function (e) {
                                        e.$filterOptionTitleElement && (e.$filterOptionTitleElement.off("click"), e.$filterOptionTitleElement.on("click", t.openFilterOption.bind(t, e)));
                                    }));
                        },
                    },
                    {
                        key: "renderFilterTreeHeader",
                        value: function () {
                            this.style2ActiveFilterOption
                                ? (this.$element.find(this.selector.headerTitle).html(this.style2ActiveFilterOption.label), this.$element.find(this.selector.backButton).show())
                                : (this.$element.find(this.selector.headerTitle).html(a.a.refineMobile), this.$element.find(this.selector.backButton).hide()),
                                this.mathHeightToolbarHeader();
                        },
                    },
                    {
                        key: "renderFilterTreeFooter",
                        value: function () {
                            var t = this.parent && this.parent.data ? " (" + this.parent.data.total_product + ")" : "";
                            this.$element.find("." + f.showResultFilterButton).html(a.a.showResult + t);
                        },
                    },
                    {
                        key: "renderFilterOptionCollapse",
                        value: function () {
                            var t = this;
                            this.filterOptions.forEach(function (e) {
                                if (e.$filterOptionTitleElement && e.$filterOptionContentElement && e.collapse) {
                                    e.$element.removeClass("boost-pfs-filter-option-collapsed");
                                    var n = e.$element.find(".boost-pfs-filter-option-title"),
                                        i = e.$filterOptionContentElement;
                                    t.style2ActiveFilterOption ? (e == t.style2ActiveFilterOption ? (n.hide(), i.show()) : (n.hide(), i.hide())) : (n.show(), i.hide());
                                }
                            });
                        },
                    },
                    {
                        key: "renderFilterOptionClear",
                        value: function () {
                            var t = this.clearAllButton.$element,
                                e = this.$element.find(this.selector.clearAllButtonContainer);
                            e &&
                                (t && (null == this.style2ActiveFilterOption && l.a.hasFilterOptionParam ? e.append(t) : t.detach()),
                                this.filterOptions.forEach(function (t) {
                                    t.clearButton && t.clearButton.$element && t.clearButton.$element.detach();
                                }),
                                this.style2ActiveFilterOption && this.style2ActiveFilterOption.clearButton && this.style2ActiveFilterOption.clearButton.$element && e.append(this.style2ActiveFilterOption.clearButton.$element));
                        },
                    },
                    {
                        key: "renderRefineByOnTitle",
                        value: function () {
                            var t = this;
                            this.filterOptions.forEach(function (e) {
                                if (e.$element) {
                                    var n = "";
                                    if (e.filterOptionId.startsWith(l.a.prefix + "_c_")) {
                                        var i = e.displayType == hr.a.DisplayType.MULTI_LEVEL_COLLECTIONS ? e.allNestedFilterItems : e.filterItems;
                                        if (i && i.size > 0) {
                                            var r = "",
                                                o = [];
                                            i.forEach(function (t) {
                                                t.isSelected && (2 == t.level || 3 == t.level ? o.push(t.label) : (r = t.label));
                                            }),
                                                (n = r && o.length > 0 ? r + ": " + o.join(", ") : r);
                                        }
                                    } else if (t.refineBy && t.refineBy.refineByItems) {
                                        var a = [];
                                        t.refineBy.refineByItems.forEach(function (t) {
                                            if (t.filterOptionId == e.filterOptionId) {
                                                var n = t.label;
                                                n && a.push(n);
                                            }
                                        }),
                                            (n = a.join(", "));
                                    }
                                    var s = n ? "<span>" + n + "</span>" : "";
                                    e.$element.find(t.selector.refineByOnTitle).html(s);
                                }
                            });
                        },
                    },
                    {
                        key: "openFilterOption",
                        value: function (t) {
                            (this.style2ActiveFilterOption = t), this.renderFilterTreeHeader(), this.renderFilterOptionCollapse(), this.renderFilterOptionClear(), this.mathHeightToolbarHeader();
                        },
                    },
                    {
                        key: "closeFilterOption",
                        value: function () {
                            (this.style2ActiveFilterOption = null), this.renderFilterTreeHeader(), this.renderFilterOptionCollapse(), this.renderFilterOptionClear();
                        },
                    },
                    {
                        key: "onClickMobileButton",
                        value: function (t) {
                            t && (t.stopImmediatePropagation(), t.stopPropagation()), (this.style2ActiveFilterOption = null);
                            var e = r()(this.idSelector);
                            e &&
                                ((this.mobileButton.isCollapsed = !this.mobileButton.isCollapsed),
                                this.mobileButton.isCollapsed
                                    ? (e.removeClass(f.filterTreeMobileOpen), r()("body").removeClass("boost-pfs-body-no-scroll"), r()("html").removeClass("boost-pfs-body-no-scroll"))
                                    : (e.addClass(f.filterTreeMobileOpen), r()("body").addClass("boost-pfs-body-no-scroll"), r()("html").addClass("boost-pfs-body-no-scroll"))),
                                this.mobileButton.afterToggleFilterTree();
                        },
                    },
                    {
                        key: "mathHeightToolbarHeader",
                        value: function () {
                            var t = r()(".boost-pfs-filter-mobile-toolbar").height();
                            r()(".boost-pfs-filter-options-wrapper").css("top", t + "px");
                        },
                    },
                ]) && Fs(n.prototype, i),
                s && Fs(n, s),
                e
            );
        })(Ls);
        function Ms(t) {
            return (Ms =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Ds(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Vs(t, e) {
            return !e || ("object" !== Ms(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Ns(t, e, n) {
            return (Ns =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (t, e, n) {
                          var i = (function (t, e) {
                              for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Us(t)); );
                              return t;
                          })(t, e);
                          if (i) {
                              var r = Object.getOwnPropertyDescriptor(i, e);
                              return r.get ? r.get.call(n) : r.value;
                          }
                      })(t, e, n || t);
        }
        function Us(t) {
            return (Us = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function qs(t, e) {
            return (qs =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Hs = (function (t) {
            function e(t, n) {
                var i;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((i = Vs(this, Us(e).call(this, t, n))).style = "style3"),
                    (i.selector.refineByOnTitle = ".boost-pfs-filter-selected-items-mobile"),
                    i
                );
            }
            var n, i, a;
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && qs(t, e);
                })(e, t),
                (n = e),
                (a = [
                    {
                        key: "isActive",
                        value: function (t) {
                            return t == Rr.FilterTreeType.VERTICAL && "style3" == o.a.getSettingValue("general.filterTreeMobileStyle");
                        },
                    },
                ]),
                (i = [
                    {
                        key: "init",
                        value: function () {
                            Ns(Us(e.prototype), "init", this).call(this),
                                r()(this.idSelector).length > 0 &&
                                    (r()(this.idSelector).addClass("boost-pfs-filter-tree-mobile-style3").addClass("boost-pfs-filter-tree-mobile-sticky"),
                                    o.a.getSettingValue("general.filterTreeMobileStyleFullWidth") && r()(this.idSelector).addClass("boost-pfs-filter-tree-mobile-full-width-style"));
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t = this;
                            Ns(Us(e.prototype), "render", this).call(this),
                                this.$element &&
                                    p.a.isMobile() &&
                                    this.filterOptions.forEach(function (e) {
                                        if (e.$element && t.refineBy && t.refineBy.refineByItems) {
                                            var n = [];
                                            t.refineBy.refineByItems.forEach(function (t) {
                                                if (t.filterOptionId == e.filterOptionId) {
                                                    var i = t.buildLabel();
                                                    i && n.push(i);
                                                }
                                            }),
                                                e.$element.find(t.selector.refineByOnTitle).html(n.join(", "));
                                        }
                                    });
                        },
                    },
                    {
                        key: "renderFilterTreeFooter",
                        value: function () {
                            var t = this.parent && this.parent.data ? " (" + this.parent.data.total_product + ")" : "";
                            this.$element.find("." + f.showResultFilterButton).html(Labels.showResult + t);
                        },
                    },
                    {
                        key: "onClickMobileButton",
                        value: function (t) {
                            t && (t.stopImmediatePropagation(), t.stopPropagation());
                            var e = r()(this.idSelector);
                            e &&
                                ((this.mobileButton.isCollapsed = !this.mobileButton.isCollapsed),
                                this.mobileButton.isCollapsed
                                    ? (e.removeClass(f.filterTreeMobileOpen), r()("body").removeClass("boost-pfs-body-no-scroll"), r()("html").removeClass("boost-pfs-body-no-scroll"))
                                    : (e.addClass(f.filterTreeMobileOpen), r()("body").addClass("boost-pfs-body-no-scroll"), r()("html").addClass("boost-pfs-body-no-scroll"))),
                                this.mobileButton.afterToggleFilterTree();
                        },
                    },
                ]) && Ds(n.prototype, i),
                a && Ds(n, a),
                e
            );
        })(Ls);
        function Gs(t) {
            return (Gs =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Ws(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function zs(t, e) {
            return !e || ("object" !== Gs(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Ks(t, e, n) {
            return (Ks =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (t, e, n) {
                          var i = (function (t, e) {
                              for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Ys(t)); );
                              return t;
                          })(t, e);
                          if (i) {
                              var r = Object.getOwnPropertyDescriptor(i, e);
                              return r.get ? r.get.call(n) : r.value;
                          }
                      })(t, e, n || t);
        }
        function Ys(t) {
            return (Ys = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Qs(t, e) {
            return (Qs =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Js = (function (t) {
                function e(t, n) {
                    var i;
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        ((i = zs(this, Ys(e).call(this, t, n))).style = "style4"),
                        (i.selector.clearAllButtonContainer = ".boost-pfs-filter-mobile-toolbar-right"),
                        (i.selector.backButton = ".boost-pfs-filter-back-btn"),
                        (i.selector.refineByOnTitle = ".boost-pfs-filter-selected-items-mobile"),
                        (i.selector.headerTitle = ".bc-sf-filter-mobile-toolbar-header"),
                        (i.selector.headerClose = ".boost-pfs-filter-close"),
                        (i.style4ActiveFilterOption = null),
                        (o.a.activeFilterScrollbarMobile = !1),
                        i
                    );
                }
                var n, i, s;
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Qs(t, e);
                    })(e, t),
                    (n = e),
                    (s = [
                        {
                            key: "isActive",
                            value: function (t) {
                                return t == Rr.FilterTreeType.VERTICAL && "style4" == o.a.getSettingValue("general.filterTreeMobileStyle");
                            },
                        },
                    ]),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                Ks(Ys(e.prototype), "init", this).call(this),
                                    r()(this.idSelector).length > 0 &&
                                        (r()(this.idSelector).addClass("boost-pfs-filter-tree-mobile-style4").addClass("boost-pfs-filter-tree-mobile-sticky"),
                                        o.a.getSettingValue("general.filterTreeMobileStyleFullWidth") && r()(this.idSelector).addClass("boost-pfs-filter-tree-mobile-full-width-style"));
                            },
                        },
                        {
                            key: "getHeaderTemplate",
                            value: function () {
                                return '\n      <div class="boost-pfs-filter-mobile-toolbar">\n                <div class="bc-sf-filter-mobile-toolbar-header">{{label.refineMobile}}</div>\n        <div class="boost-pfs-filter-mobile-toolbar-items">\n          <div class="boost-pfs-filter-mobile-toolbar-left">\n            <a href="#" class="{{class.closeFilterButton}}"><span>{{label.close}}</span></a>\n            <a href="#" class="boost-pfs-filter-back-btn">{{label.apply}}</a>\n          </div>\n          <div class="boost-pfs-filter-mobile-toolbar-right">\n            {{clearButton}}\n          </div>\n        </div>\n      </div>\n    ';
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this;
                                if ((Ks(Ys(e.prototype), "render", this).call(this), this.$element && p.a.isMobile())) {
                                    var n = null;
                                    this.filterOptions.forEach(function (e) {
                                        t.style4ActiveFilterOption && t.style4ActiveFilterOption.filterOptionId == e.filterOptionId && (n = e);
                                    }),
                                        (this.style4ActiveFilterOption = n),
                                        this.renderFilterTreeHeader(),
                                        this.renderFilterTreeFooter(),
                                        this.renderFilterOptionCollapse(),
                                        this.renderFilterOptionClear(),
                                        this.renderRefineByOnTitle();
                                }
                            },
                        },
                        {
                            key: "bindEvents",
                            value: function () {
                                var t = this;
                                Ks(Ys(e.prototype), "bindEvents", this).call(this),
                                    this.$element &&
                                        p.a.isMobile() &&
                                        (this.$element.find(this.selector.backButton).on("click", this.closeFilterOption.bind(this)),
                                        this.filterOptions.forEach(function (e) {
                                            e.$filterOptionTitleElement && (e.$filterOptionTitleElement.off("click"), e.$filterOptionTitleElement.on("click", t.openFilterOption.bind(t, e)));
                                        }));
                            },
                        },
                        {
                            key: "renderFilterTreeHeader",
                            value: function () {
                                this.style4ActiveFilterOption
                                    ? (this.$element.find(this.selector.headerTitle).html(this.style4ActiveFilterOption.label), this.$element.find(this.selector.backButton).show(), this.$element.find(this.selector.headerClose).hide())
                                    : (this.$element.find(this.selector.headerTitle).html(a.a.refineMobile), this.$element.find(this.selector.backButton).hide(), this.$element.find(this.selector.headerClose).show());
                            },
                        },
                        {
                            key: "renderFilterTreeFooter",
                            value: function () {
                                var t = this.parent && this.parent.data ? " (" + this.parent.data.total_product + ")" : "";
                                this.$element.find("." + f.showResultFilterButton).html(a.a.showResult + '<span class="boost-pfs-number-result">' + t + "</span>");
                            },
                        },
                        {
                            key: "renderFilterOptionCollapse",
                            value: function () {
                                var t = this;
                                this.filterOptions.forEach(function (e) {
                                    if (e.$filterOptionTitleElement && e.$filterOptionContentElement && e.collapse) {
                                        e.$element.removeClass("boost-pfs-filter-option-collapsed");
                                        var n = e.$element.find(".boost-pfs-filter-option-title"),
                                            i = e.$filterOptionContentElement;
                                        t.style4ActiveFilterOption ? (e == t.style4ActiveFilterOption ? (n.hide(), i.show()) : (n.hide(), i.hide())) : (n.show(), i.hide());
                                    }
                                });
                            },
                        },
                        {
                            key: "renderFilterOptionClear",
                            value: function () {
                                var t = this.clearAllButton.$element,
                                    e = this.$element.find(this.selector.clearAllButtonContainer);
                                e &&
                                    (t && (null == this.style4ActiveFilterOption && l.a.hasFilterOptionParam ? e.append(t) : t.detach()),
                                    this.filterOptions.forEach(function (t) {
                                        t.clearButton && t.clearButton.$element && t.clearButton.$element.detach();
                                    }),
                                    this.style4ActiveFilterOption && this.style4ActiveFilterOption.clearButton && this.style4ActiveFilterOption.clearButton.$element && e.append(this.style4ActiveFilterOption.clearButton.$element));
                            },
                        },
                        {
                            key: "renderRefineByOnTitle",
                            value: function () {
                                var t = this;
                                this.filterOptions.forEach(function (e) {
                                    if (e.$element) {
                                        var n = "";
                                        if (e.filterOptionId.startsWith(l.a.prefix + "_c_")) {
                                            var i = e.displayType == hr.a.DisplayType.MULTI_LEVEL_COLLECTIONS ? e.allNestedFilterItems : e.filterItems;
                                            if (i && i.size > 0) {
                                                var r = "",
                                                    o = [];
                                                i.forEach(function (t) {
                                                    t.isSelected && (2 == t.level || 3 == t.level ? o.push(t.label) : (r = t.label));
                                                }),
                                                    (n = r && o.length > 0 ? r + ": " + o.join(", ") : r);
                                            }
                                        } else if (t.refineBy && t.refineBy.refineByItems) {
                                            var a = [];
                                            t.refineBy.refineByItems.forEach(function (t) {
                                                if (t.filterOptionId == e.filterOptionId) {
                                                    var n = t.label;
                                                    n && a.push(n);
                                                }
                                            }),
                                                (n = a.join(", "));
                                        }
                                        var s = n ? "<span>" + n + "</span>" : "";
                                        e.$element.find(t.selector.refineByOnTitle).html(s);
                                    }
                                });
                            },
                        },
                        {
                            key: "openFilterOption",
                            value: function (t) {
                                (this.style4ActiveFilterOption = t), this.renderFilterTreeHeader(), this.renderFilterOptionCollapse(), this.renderFilterOptionClear();
                                var e = r()(".boost-pfs-filter-mobile-toolbar").height();
                                r()(".boost-pfs-filter-options-wrapper").css("top", e + "px");
                            },
                        },
                        {
                            key: "closeFilterOption",
                            value: function () {
                                (this.style4ActiveFilterOption = null), this.renderFilterTreeHeader(), this.renderFilterOptionCollapse(), this.renderFilterOptionClear();
                            },
                        },
                        {
                            key: "onClickMobileButton",
                            value: function (t) {
                                t && (t.stopImmediatePropagation(), t.stopPropagation()), (this.style4ActiveFilterOption = null);
                                var e = r()(this.idSelector);
                                e &&
                                    ((this.mobileButton.isCollapsed = !this.mobileButton.isCollapsed),
                                    this.mobileButton.isCollapsed
                                        ? (e.removeClass(f.filterTreeMobileOpen), r()("html").removeClass("boost-pfs-body-no-scroll"), r()("body").removeClass("boost-pfs-body-no-scroll"))
                                        : (e.addClass(f.filterTreeMobileOpen), r()("html").addClass("boost-pfs-body-no-scroll"), r()("body").addClass("boost-pfs-body-no-scroll"))),
                                    this.mobileButton.afterToggleFilterTree();
                            },
                        },
                    ]) && Ws(n.prototype, i),
                    s && Ws(n, s),
                    e
                );
            })(Ls),
            Zs = {
                newFilterTree: function (t, e) {
                    return Hs.isActive(e) ? new Hs(t, e) : xs.isActive(e) ? new xs(t, e) : Js.isActive(e) ? new Js(t, e) : new Ls(t, e);
                },
            };
        function Xs(t) {
            return (Xs =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function tc(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function ec(t, e) {
            return !e || ("object" !== Xs(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function nc(t) {
            return (nc = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function ic(t, e) {
            return (ic =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var rc = (function (t) {
                function e() {
                    var t;
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        ((t = ec(this, nc(e).call(this))).filterTrees = []),
                        (t.filterMobileButton = null),
                        (t.filterResult = null),
                        (t.filterLoadingIcon = null),
                        (t.filterScrollToTop = null),
                        (t.data = null),
                        (t.fromCache = !1),
                        (t.eventType = ""),
                        (t.error = ""),
                        (t.isFetchedFilterData = !1),
                        t
                    );
                }
                var n, i, o;
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && ic(t, e);
                    })(e, t),
                    (n = e),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                this.initFilterTrees(),
                                    this.initFilterMobileButton(),
                                    (this.filterResult = new fr()),
                                    this.addComponent(this.filterResult),
                                    (this.filterLoadingIcon = new Cr()),
                                    this.addComponent(this.filterLoadingIcon),
                                    (this.filterScrollToTop = new Fr()),
                                    this.addComponent(this.filterScrollToTop),
                                    this.filterLoadingIcon.setShow(!0);
                            },
                        },
                        {
                            key: "afterInit",
                            value: function () {
                                Le.default.updateParamsFromUrl(), Le.default.getFilterData("init", this.setData.bind(this), this.errorFilterCallback.bind(this));
                            },
                        },
                        {
                            key: "initFilterTrees",
                            value: function () {
                                var t = this;
                                r()(c.filterTree).each(function (e, n) {
                                    var i = r()(n),
                                        o = "";
                                    if ((i.hasClass(f.filterTreeVertical) ? (o = Rr.FilterTreeType.VERTICAL) : i.hasClass(f.filterTreeHorizontal) && (o = Rr.FilterTreeType.HORIZONTAL), o)) {
                                        var a = f.filterTree + (0 == e ? "" : (e + 1).toString());
                                        i.attr("id", a);
                                        var l = Zs.newFilterTree(a, o);
                                        t.addComponent(l), t.filterTrees.push(l);
                                    }
                                });
                            },
                        },
                        {
                            key: "initFilterMobileButton",
                            value: function () {
                                if (r()(c.filterTreeMobileButton).length > 0) {
                                    var t = r()(c.filterTreeMobileButton).first().attr("data-filter-tree-id");
                                    this.filterMobileButton = null;
                                    for (var e = this.filterTrees.length, n = 0; n < e; n++)
                                        this.filterMobileButton ||
                                            (0 != r()("#" + this.filterTrees[n].id).not("[data-is-desktop]").length &&
                                                ((t && this.filterTrees[n].id == t) || (!t && this.filterTrees[n].filterTreeType == Rr.FilterTreeType.VERTICAL)) &&
                                                ((this.filterMobileButton = new vr(this.filterTrees[n])), this.addComponent(this.filterMobileButton)));
                                }
                            },
                        },
                        {
                            key: "isRender",
                            value: function () {
                                return this.isFetchedFilterData || this.isFetchedProductData;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                this.isFetchedFilterData &&
                                    (this.filterTrees.forEach(function (t) {
                                        r()(t.idSelector).length > 0 && !t.isRenderPartially && r()(t.idSelector).first().html("").append(t.$element);
                                    }),
                                    r()(c.filterTreeMobileButton).length > 0 && "init" == this.eventType && this.filterMobileButton && r()(c.filterTreeMobileButton).first().html("").append(this.filterMobileButton.$element));
                            },
                        },
                        {
                            key: "setData",
                            value: function (t, e, n) {
                                (this.isFetchedFilterData = !1), (this.isFetchedProductData = !1), (this.data = JSON.parse(JSON.stringify(t))), (this.fromCache = t.from_cache), (this.error = t.error);
                                var i = JSON.parse(JSON.stringify(l.a.queryParams));
                                (l.a.queryParams = i),
                                    void 0 !== l.a.activeCurrencyPrices && r.a.extend(l.a.queryParams, l.a.activeCurrencyPrices),
                                    (this.eventType = e || t.event_type),
                                    (this.clickedFilterOptionId = n && n.filterOptionId && "clear" != e ? n.filterOptionId : ""),
                                    (t = this.modifyData(t)).filter &&
                                        t.filter.options &&
                                        -1 == l.a.imutableFilterTree.indexOf(this.eventType) &&
                                        ((this.isFetchedFilterData = !0),
                                        this.filterTrees.forEach(function (e) {
                                            e.setData(t.filter);
                                        })),
                                    (t.products || t.collections || t.pages) && ((this.isFetchedProductData = !0), this.filterResult.setData(t)),
                                    this.refresh(),
                                    this.filterLoadingIcon.setShow(!1);
                            },
                        },
                        {
                            key: "modifyData",
                            value: function (t) {
                                return t;
                            },
                        },
                        {
                            key: "errorFilterCallback",
                            value: function () {
                                if (!(p.a.isiOS() && p.a.isSafari() && p.a.isBackButton())) {
                                    var t = window.location.href.split("?")[0],
                                        e = p.a.isSearchPage() && l.a.queryParams.hasOwnProperty("q") ? "&q=" + l.a.queryParams.q : "";
                                    window.location.replace(t + "?view=boost-pfs-original" + e);
                                }
                            },
                        },
                    ]) && tc(n.prototype, i),
                    o && tc(n, o),
                    e
                );
            })(y),
            oc = [
                {
                    name: "getSettingValue",
                    mapToFunction: function (t, e) {
                        return o.a.getSettingValue(t, e);
                    },
                },
                {
                    name: "getSortingList",
                    mapToFunction: function () {
                        return p.a.FilterResult.getSortingList();
                    },
                },
                {
                    name: "buildToolbarLink",
                    mapToFunction: function (t, e, n) {
                        return p.a.buildToolbarLink(t, e, n);
                    },
                },
                {
                    name: "optimizeImage",
                    mapToFunction: function (t, e) {
                        return p.a.optimizeImage(t, e);
                    },
                },
                {
                    name: "buildProductItemUrl",
                    mapToFunction: function (t, e) {
                        return p.a.buildProductItemUrl(t, e);
                    },
                },
                {
                    name: "refreshProperties",
                    mapToFunction: function () {
                        (BoostPFS.prototype.selector = c), (BoostPFS.prototype.queryParams = l.a.queryParams);
                    },
                },
            ],
            ac = [
                { name: "beforeBuildSearchBox", mapToFunction: "beforeBindEvents", mapArguments: ["id"], component: Xt },
                { name: "afterBuildSearchBox", mapToFunction: "afterBindEvents", mapArguments: ["id"], component: Xt },
                { name: "customizeSuggestion", mapToFunction: "customizeAutoCompleteResizeMenu", mapArguments: ["$uiMenuElement", "$element", "id"], component: Xt },
                { name: "afterShowSearchBoxMobile", mapToFunction: "afterShowSearchBoxMobile", mapArguments: ["inputMobileId"], component: Nt },
                { name: "afterCloseSuggestionMobile", mapToFunction: "afterCloseInstantSearchMobile", mapArguments: ["inputMobileId", "@0"], component: Nt },
                { name: "customizeSuggetionProductTitle", mapToFunction: "customizeProductTitle", mapArguments: ["title", "currentTerm", "data"], component: $ },
                { name: "buildProductGridItem", mapToFunction: "compileTemplate", mapArguments: ["data", "index", "totalProduct"], component: pe },
                { name: "buildProductListItem", mapToFunction: "compileTemplate", mapArguments: ["data", "index", "totalProduct"], component: me },
                { name: "buildProductCollageItem", mapToFunction: "compileTemplate", mapArguments: ["data", "index", "totalProduct"], component: Pe },
                { name: "prepareProductData", mapToFunction: "prepareProductData", mapArguments: ["data"], component: tn },
                { name: "buildExtrasProductList", mapToFunction: "afterRender", mapArguments: ["data", "eventType"], component: tn },
                { name: "buildAdditionalElements", mapToFunction: "afterRender", mapArguments: ["data", "totalProduct", "eventType"], component: rc },
                { name: "buildPagination", mapToFunction: "render", mapArguments: ["totalProduct", "paginationType"], component: Ue },
                { name: "buildFilterDisplayType", mapToFunction: "render", mapArguments: [], component: ln },
                { name: "buildFilterSorting", mapToFunction: "compileTemplate", mapArguments: [], component: hn },
                { name: "buildFilterShowLimit", mapToFunction: "compileTemplate", mapArguments: [], component: vn },
                { name: "buildBreadcrumb", mapToFunction: "buildBreadcrumb", mapArguments: ["collectionData", "data"], component: Mn },
            ],
            lc = function (t, e) {
                BoostPFS.prototype.hasOwnProperty(t) || (BoostPFS.prototype[t] = e);
            },
            sc = function (t, e, n, i) {
                if (BoostPFS.prototype.hasOwnProperty(t)) {
                    i.prototype[e] = function () {
                        var e,
                            i = [];
                        if (n && n.length > 0)
                            for (var r = 0; r < n.length; r++) {
                                var o = n[r];
                                if (this.hasOwnProperty(o)) i.push(this[o]);
                                else if (0 == o.indexOf("@")) {
                                    var a = parseInt(o.substr(1));
                                    void 0 !== arguments[a] ? i.push(arguments[a]) : i.push(null);
                                } else i.push(null);
                            }
                        return (e = BoostPFS.prototype[t]).call.apply(e, [BoostPFS.instance].concat(i));
                    };
                }
            },
            cc = {
                mapLegacyFunctions: function () {
                    oc.forEach(function (t) {
                        lc(t.name, t.mapToFunction);
                    }),
                        ac.forEach(function (t) {
                            sc(t.name, t.mapToFunction, t.mapArguments, t.component);
                        });
                },
                mapLegacyFunctionCall: lc,
                mapLegacyFunctionOverride: sc,
            },
            uc = (n(119), n(45)),
            pc = { UserAction: { VIEW_PRODUCT: "view_product", QUICK_VIEW: "quick_view", ADD_TO_CART: "add_to_cart", BUY_NOW: "buy_now" }, Action: { FILTER: "filter", SEARCH: "search", SUGGEST: "suggest" } },
            fc = "boostPFSAnalytics",
            hc = "",
            yc = "",
            dc = null,
            gc = function () {
                o.a.getSettingValue("search.enableSuggestion") &&
                    r()("." + f.searchSuggestionWrapper).length > 0 &&
                    r()("." + f.searchSuggestionWrapper).each(function (t, e) {
                        e.addEventListener("click", Oc, !0), document.addEventListener("keydown", Oc, !0);
                    });
            },
            mc = function () {
                c.trackingProduct && r()(c.products).length > 0 && document.addEventListener("click", Sc, !0);
            },
            bc = function () {
                var t = Cc(fc);
                Array.isArray(t) &&
                    (t.forEach(function (t) {
                        Ec(t), t.pid == boostPFSAppConfig.general.product_id && (dc = t);
                    }),
                    p.a.isProductPage() &&
                        (c.trackingAddToCart && r()(c.trackingAddToCart).length > 0 && r()(c.trackingAddToCart)[0].addEventListener("click", Tc, !0),
                        c.trackingBuyNow && r()(c.trackingBuyNow).length > 0 && r()(c.trackingBuyNow)[0].addEventListener("click", Pc, !0)));
            },
            vc = function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                    var e = (16 * Math.random()) | 0;
                    return ("x" == t ? e : (3 & e) | 8).toString(16);
                });
            },
            Sc = function (t) {
                if (t && t.target) {
                    var e = r()(t.target),
                        n = p.a.isSearchPage() ? pc.Action.SEARCH : pc.Action.FILTER,
                        i = pc.UserAction.VIEW_PRODUCT;
                    c.trackingQuickView && e.closest(c.trackingQuickView).length > 0 && (i = pc.UserAction.QUICK_VIEW),
                        c.trackingAddToCart && e.closest(c.trackingAddToCart).length > 0 && (i = pc.UserAction.ADD_TO_CART),
                        c.trackingBuyNow && e.closest(c.trackingBuyNow).length > 0 && (i = pc.UserAction.BUY_NOW);
                    var o = "",
                        a = e.closest(c.trackingProduct);
                    if ((a.length > 0 ? (o = a.attr("data-id")) : dc && ((i != pc.UserAction.ADD_TO_CART && i != pc.UserAction.BUY_NOW) || (o = dc.pid)), o)) {
                        var l = wc(o, i, n);
                        _c(l), Ec(l), (dc = i == pc.UserAction.QUICK_VIEW ? l : null);
                    }
                }
            },
            Oc = function (t) {
                if (t && t.target && ("keydown" != t.type || 13 == t.keyCode)) {
                    var e = r()(t.target).closest("." + f.searchSuggestionItem + "-product");
                    if (e) {
                        var n = e.attr("data-id");
                        if (n) {
                            var i = wc(n, pc.UserAction.VIEW_PRODUCT, pc.Action.SUGGEST);
                            _c(i);
                        }
                    }
                }
            },
            Tc = function (t) {
                var e = { tid: l.a.shopDomain, pid: boostPFSAppConfig.general.product_id.toString(), u: pc.UserAction.ADD_TO_CART, ct: hc };
                _c(e), Ec(e);
            },
            Pc = function (t) {
                var e = { tid: l.a.shopDomain, pid: boostPFSAppConfig.general.product_id.toString(), u: pc.UserAction.BUY_NOW };
                _c(e), Ec(e);
            },
            wc = function (t, e, n) {
                var i = new Date(),
                    r = hc,
                    o = e == pc.UserAction.QUICK_VIEW ? pc.UserAction.VIEW_PRODUCT : e,
                    a = "";
                if ((n == pc.Action.FILTER ? (a += "collection_scope=" + l.a.collectionId) : (a += "q=" + l.a.currentTerm), n == pc.Action.FILTER || n == pc.Action.SEARCH)) {
                    var s = Object.keys(l.a.queryParams).filter(function (t) {
                        return t.startsWith(l.a.prefix);
                    });
                    s &&
                        s.length > 0 &&
                        s.forEach(function (t) {
                            var e = l.a.queryParams[t];
                            Array.isArray(e)
                                ? e.forEach(function (e) {
                                      a += "&" + t + "=" + encodeURIComponent(e);
                                  })
                                : (a += "&" + t + "=" + encodeURIComponent(e));
                        });
                }
                return { tid: l.a.shopDomain, ct: r, pid: t, t: i.toISOString(), u: o, a: n, qs: a, r: document.referrer };
            },
            _c = function (t) {
                var e = Cc(fc);
                Array.isArray(e) || (e = []);
                var n = e.filter(function (e) {
                    return e.pid != t.productId;
                });
                n.push(t), kc(fc, n);
            },
            Cc = function (t) {
                try {
                    return JSON.parse(localStorage.getItem(t));
                } catch (t) {
                    return null;
                }
            },
            kc = function (t, e) {
                try {
                    null != e ? localStorage.setItem(t, JSON.stringify(e)) : localStorage.setItem(t, "");
                } catch (t) {}
            },
            Ec = function (t, e) {
                if (e || t.ct) {
                    t.sid = yc;
                    var n = new XMLHttpRequest();
                    n.open("POST", uc.a.getApiUrl("analytics")),
                        n.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
                        (n.onload = function () {
                            n.readyState > 3 &&
                                200 == n.status &&
                                (function (t) {
                                    var e = Cc(fc);
                                    if (Array.isArray(e)) {
                                        var n = e.filter(function (e) {
                                            return e.pid != t;
                                        });
                                        kc(fc, n);
                                    }
                                })(t.pid);
                        }),
                        n.send(JSON.stringify(t));
                } else
                    setTimeout(function () {
                        !(function (t) {
                            var e = new XMLHttpRequest();
                            e.open("GET", "/cart.js"),
                                (e.onload = function () {
                                    if (e.readyState > 3 && 200 == e.status) {
                                        var n = JSON.parse(e.responseText),
                                            i = n.item_count <= 0 ? "" : n.token;
                                        (hc = i), t && ((t.ct = i), Ec(t, !0));
                                    }
                                }),
                                e.send();
                        })(t);
                    }, 1e3);
            },
            Ic = {
                init: function () {
                    window.XMLHttpRequest && ((hc = ""), (yc = Cc("boostPFSSessionId")) || ((yc = vc()), kc("boostPFSSessionId", yc)), gc(), mc(), bc());
                },
            };
        function Lc(t) {
            return (Lc =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Ac(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Fc(t, e) {
            return !e || ("object" !== Lc(e) && "function" != typeof e)
                ? (function (t) {
                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return t;
                  })(t)
                : e;
        }
        function Rc(t) {
            return (Rc = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function jc(t, e) {
            return (jc =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var $c = (function (t) {
                function e() {
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        Fc(this, Rc(e).call(this))
                    );
                }
                var n, i, a;
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && jc(t, e);
                    })(e, t),
                    (n = e),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                var t = this;
                                if (
                                    (r()('input[name="' + o.a.getSettingValue("search.termKey") + '"]:not([data-disable-instant-search])').each(function (e, n) {
                                        var i = new Xt("boost-pfs-search-box-" + e, r()(n));
                                        t.addComponent(i);
                                    }),
                                    p.a.isMobile() &&
                                        ((window.onpageshow = function (t) {
                                            t.persisted && window.location.reload();
                                        }),
                                        o.a.getSettingValue("search.suggestionMobileStyle") !== g.Mobile.SuggestionType.STYLE_2))
                                ) {
                                    var e = qt.instantSearchMobile();
                                    this.addComponent(e);
                                }
                            },
                        },
                    ]) && Ac(n.prototype, i),
                    a && Ac(n, a),
                    e
                );
            })(y),
            Bc = {
                inject: function (t) {
                    (t.jQ = r.a),
                        (t.noUiSlider = rs.a),
                        (t.Analytics = Ic),
                        (t.Class = f),
                        (t.Globals = l.a),
                        (t.Labels = a.a),
                        (t.Navigation = u.a),
                        (t.Selector = c),
                        (t.Settings = o.a),
                        (t.Utils = p.a),
                        (t.FunctionMapper = cc),
                        (t.Api = uc.a),
                        (t.FilterApi = Le.default),
                        (t.InstantSearchApi = d.default),
                        (t.FilterTreeEnum = Rr),
                        (t.FilterOptionEnum = hr.a),
                        (t.InstantSearchEnum = g),
                        (t.Filter = rc),
                        (t.FilterTree = Ls),
                        (t.FilterStyle = Zs),
                        (t.FilterTreeStyle2 = xs),
                        (t.FilterTreeStyle3 = Hs),
                        (t.FilterOption = sl),
                        (t.FilterOptionList = gl),
                        (t.FilterOptionBox = Pl),
                        (t.FilterOptionSwatch = Ll),
                        (t.FilterOptionMultiLevelCollections = bs),
                        (t.FilterOptionMultiLevelTag = ws),
                        (t.FilterOptionRangeSlider = fs),
                        (t.FilterOptionRating = xl),
                        (t.FilterOptionSubCategory = ns),
                        (t.FilterApplyButton = Gr),
                        (t.FilterClearButton = Dr),
                        (t.FilterCollapse = nl),
                        (t.FilterScrollbar = va),
                        (t.FilterSearchBox = oa),
                        (t.FilterTooltip = pa),
                        (t.FilterViewMore = Xo),
                        (t.FilterOptionItem = Jr),
                        (t.FilterOptionItemList = io),
                        (t.FilterOptionItemBox = po),
                        (t.FilterOptionItemSwatch = So),
                        (t.FilterOptionItemMultiLevelCollections = Ra),
                        (t.FilterOptionItemMultiLevelTag = Wa),
                        (t.FilterOptionItemRangeSlider = Ho),
                        (t.FilterOptionItemRating = Eo),
                        (t.FilterOptionItemSubCategory = Bo),
                        (t.FilterRefineBy = Yl),
                        (t.FilterRefineByItem = ql),
                        (t.FilterLoadingIcon = Cr),
                        (t.FilterMobileButton = vr),
                        (t.FilterScrollToTop = Fr),
                        (t.FilterResult = fr),
                        (t.ProductList = tn),
                        (t.ProductListPlaceholder = Si),
                        (t.ProductItem = oe),
                        (t.ProductGridItem = pe),
                        (t.ProductListItem = me),
                        (t.ProductCollageItem = Pe),
                        (t.Breadcrumb = Fn),
                        (t.PageInfoCollection = Mn),
                        (t.PageInfoSearch = _n),
                        (t.ProductDisplayType = ln),
                        (t.ProductLimit = vn),
                        (t.ProductSorting = hn),
                        (t.RobotsMeta = Hn),
                        (t.ProductPagination = Be),
                        (t.ProductPaginationDefault = Ue),
                        (t.ProductPaginationInfinite = ni),
                        (t.ProductPaginationLoadMore = Qn),
                        (t.ProductPaginationLoadPrevious = si),
                        (t.SearchInput = Xt),
                        (t.InstantSearch = $c),
                        (t.InstantSearchMobile = Nt),
                        (t.InstantSearchResult = It),
                        (t.InstantSearchStyle = qt),
                        (t.InstantSearchResultStyle2 = $t),
                        (t.InstantSearchResultBlock = ot),
                        (t.InstantSearchResultBlockDym = X),
                        (t.InstantSearchResultBlockEmpty = Pt),
                        (t.InstantSearchResultBlockLoading = mt),
                        (t.InstantSearchResultBlockViewAll = pt),
                        (t.InstantSearchResultItem = P),
                        (t.InstantSearchResultItemCollection = N),
                        (t.InstantSearchResultItemPage = z),
                        (t.InstantSearchResultItemPopular = I),
                        (t.InstantSearchResultItemProduct = $),
                        (t.AutocompleteMenuCustom = zt),
                        (t.InstantSearchResultRedirect = Gt);
                },
            };
        function xc(t) {
            return (xc =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function Mc(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        function Dc(t) {
            return (Dc = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function Vc(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        }
        function Nc(t, e) {
            return (Nc =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        var Uc = (function (t) {
                function e() {
                    var t, n, i;
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        (n = this),
                        ((t = !(i = Dc(e).call(this)) || ("object" !== xc(i) && "function" != typeof i) ? Vc(n) : i).search = null),
                        (t.filter = null),
                        (qc = Vc(t)),
                        t
                    );
                }
                var n, i, s;
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Nc(t, e);
                    })(e, t),
                    (n = e),
                    (s = [
                        {
                            key: "inject",
                            value: function (t) {
                                Bc.inject(t);
                            },
                        },
                        {
                            key: "instance",
                            get: function () {
                                return qc;
                            },
                        },
                        {
                            key: "jQ",
                            get: function () {
                                return r.a;
                            },
                        },
                        {
                            key: "Globals",
                            get: function () {
                                return l.a;
                            },
                        },
                        {
                            key: "Labels",
                            get: function () {
                                return a.a;
                            },
                        },
                        {
                            key: "Selector",
                            get: function () {
                                return c;
                            },
                        },
                        {
                            key: "Settings",
                            get: function () {
                                return o.a;
                            },
                        },
                        {
                            key: "Utils",
                            get: function () {
                                return p.a;
                            },
                        },
                    ]),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                cc.mapLegacyFunctions(), o.a.init(), a.a.init(), c.init(), l.a.init(), u.a.init(), this.initOTP();
                            },
                        },
                        {
                            key: "initSearchBox",
                            value: function (t) {
                                if (o.a.getSettingValue("search.enableSuggestion") && !p.a.isGLHMobile()) {
                                    if (((this.search = new $c()), this.addComponent(this.search), t)) {
                                        var e = new Xt(t);
                                        this.search.addComponent(e);
                                    }
                                    this.search.refresh();
                                }
                            },
                        },
                        {
                            key: "initFilter",
                            value: function () {
                                o.a.getSettingValue("general.enableFilter") && !p.a.isGLHMobile() && ((this.filter = new rc()), this.addComponent(this.filter), this.filter.refresh());
                            },
                        },
                        {
                            key: "initAnalytics",
                            value: function () {
                                o.a.getSettingValue("general.enableTrackingOrderRevenue") && !p.a.isGLHMobile() && Ic.init();
                            },
                        },
                        {
                            key: "initOTP",
                            value: function () {
                                window.BoostOTP &&
                                    "function" == typeof window.BoostOTP.init &&
                                    r()(window).on("load", function () {
                                        BoostOTP.init();
                                    });
                            },
                        },
                    ]) && Mc(n.prototype, i),
                    s && Mc(n, s),
                    e
                );
            })(y),
            qc = null,
            Hc = (e.default = Uc);
    },
    6: function (t, e, n) {
        "use strict";
        var i = n(3),
            r = n(2),
            o = function (t, e, n) {
                return boostPFSConfig.hasOwnProperty(t) && boostPFSConfig[t].hasOwnProperty(e) ? boostPFSConfig[t][e] : n;
            },
            a = {
                productFilter: "Product filter",
                refine: "Refine By",
                refineMobile: "Refine By",
                refineMobileCollapse: "Hide Filter",
                clear: "Clear",
                clearAll: "Clear All",
                apply: "Apply",
                applyAll: "Apply All",
                close: "Close",
                loadMore: "Load more {{ amountProduct }} Products",
                loadMoreTotal: "{{ from }} - {{ to }} of {{ total }} Products",
                loadPreviousPage: "Load Previous Page",
                searchOptions: "Search options",
                collectionAll: "All",
                viewMore: "View More",
                viewLess: "View Less",
                under: "Under",
                above: "Above",
                ratingStar: "Star",
                ratingStars: "Stars",
                ratingUp: "& Up",
                showResult: "Show Results",
                showLimit: "Show",
                sortingList: {
                    "best-selling": "Best Selling",
                    manual: "Featured",
                    "price-ascending": "Lowest Price",
                    "price-descending": "Highest Price",
                    "title-ascending": "Alphabetically, A-Z",
                    "title-descending": "Alphabetically, Z-A",
                    "created-descending": "Date, New to Old",
                    "created-ascending": "Date, Old to New",
                    "published-descending": "Date, New to Old",
                    "published-ascending": "Date, Old to New",
                    "sale-descending": "% Off",
                    relevance: "Relevance",
                },
                search: {
                    generalTitle: "Search",
                    resultHeader: 'Search Results for "{{ terms }}"',
                    resultEmpty: "Your search for {{ terms }} didn't match any results",
                    resultNumber: 'Showing {{ count }} results for "{{ terms }}"',
                    searchPanelProduct: "Products",
                    searchPanelCollection: "Collections",
                    searchPanelPage: "Pages",
                    searchTotalResult: "Showing {{ count }} result",
                    searchTotalResults: "Showing {{ count }} results",
                },
                suggestion: {
                    placeholder: "Search",
                    popularHeader: "Popular Suggestions",
                    productHeader: "Products",
                    didYouMeanHeader: "Did you mean",
                    viewAll: "View all {{ count }} product(s)",
                    suggestQuery: "Showing results for {{ terms }}.",
                    didYouMean: "Did you mean: {{ terms }}?",
                    searchBoxPlaceholder: "Search",
                },
                error: {
                    noFilterResult: "Sorry, no products matched your selection",
                    noSearchResult: "Sorry, no products matched the keyword",
                    noProducts: "No products found in this collection",
                    noSuggestionProducts: 'Sorry, nothing found for "{{ terms }}"',
                    noSuggestionResult: 'Sorry, nothing found for "{{ terms }}"',
                },
                action_list: {
                    qvBtnLabel: "Quick View",
                    qvAddToCartBtnLabel: "Add To Cart",
                    qvSoldOutLabel: "Sold Out",
                    qvSaleLabel: "Sale",
                    qvQtyLeftLabel: "Hurry, there are only {{item}} item(s) left!",
                    qvNotifyMeSuccessfullyLabel: "Thanks! We will notify you when this product becomes available!",
                    qvNotifyMeErrorLabel: "Please provide a valid email address.",
                    qvNotifyMeMessageLabel: "Notify me when {{item}} becomes available",
                    qvNotifyMeFormBodyLabel: "Please notify me when {{item}} becomes available.",
                    atcAvailableLabel: "Add To Cart",
                    atcSelectOptionsLabel: "Select Options",
                    atcSoldOutLabel: "Sold Out",
                    atcAddingToCartBtnLabel: "Adding...",
                    atcAddedToCartBtnLabel: "Added!",
                    atcPopupAddedToCartLabel: "has been added to shopping cart",
                    atcPopupSubtotalLabel: "Cart Subtotal",
                    atcPopupCheckoutLabel: "Checkout",
                    atcPopupGoToCartLabel: "Your Cart",
                    atcPopupTotalItemsLabel: "item(s)",
                    atcPopupCrossSellHeadingLabel: "Frequently bought with",
                    atcMiniCartTotalItemsLabel: "Total Items",
                    atcMiniCartSubtotalLabel: "Subtotal",
                    atcMiniCartCheckoutLabel: "Process Checkout",
                    atcMiniCartViewCartLabel: "View and edit cart",
                    atcMiniCartEmptyCartLabel: "Your Cart Is Currently Empty",
                    atcMiniCartRemoveItemLabel: "Remove This Item",
                    atcMiniCartShopingCartLabel: "Shopping Cart",
                },
                init: function () {
                    var t = {
                            refine: o("label", "refine", "Refine By"),
                            refineMobile: o("label", "refine_mobile", "Refine By"),
                            refineMobileCollapse: o("label", "refine_mobile_collapse", "Hide Filter"),
                            clear: o("label", "clear", "Clear"),
                            clearAll: o("label", "clear_all", "Clear All"),
                            apply: o("label", "apply", "Apply"),
                            applyAll: o("label", "apply_all", "Apply All"),
                            close: o("label", "close", "Close"),
                            loadMore: o("label", "load_more", "Load more {{ amountProduct }} Products"),
                            loadMoreTotal: o("label", "load_more_total", "{{ from }} - {{ to }} of {{ total }} Products"),
                            loadPreviousPage: o("label", "load_previous_page", "Load Previous Page"),
                            searchOptions: "Search options",
                            collectionAll: "All",
                            viewMore: "View More",
                            viewLess: "View Less",
                            under: "Under",
                            above: "Above",
                            ratingStar: "Star",
                            ratingStars: "Stars",
                            ratingUp: "& Up",
                            showResult: "Show Results",
                            showLimit: "Show",
                            sortingList: {
                                "best-selling": o("label", "sorting_best_selling", "Best Selling"),
                                manual: o("label", "sorting_featured", "Featured"),
                                "price-ascending": o("label", "sorting_price_ascending", "Lowest Price"),
                                "price-descending": o("label", "sorting_price_descending", "Highest Price"),
                                "title-ascending": o("label", "sorting_title_ascending", "Alphabetically, A-Z"),
                                "title-descending": o("label", "sorting_title_descending", "Alphabetically, Z-A"),
                                "created-descending": o("label", "sorting_date_descending", "Date, New to Old"),
                                "created-ascending": o("label", "sorting_date_ascending", "Date, Old to New"),
                                "published-descending": o("label", "sorting_date_descending", "Date, New to Old"),
                                "published-ascending": o("label", "sorting_date_ascending", "Date, Old to New"),
                                "sale-descending": o("label", "sorting_sale_descending", "% Off"),
                                relevance: o("label", "sorting_relevance", "Relevance"),
                            },
                            search: {
                                seoTitleOne: o("label", "search_seo_title_one", "Search result: {{ count }} result for &quot;{{ terms }}&quot;"),
                                seoTitleOther: o("label", "search_seo_title_other", "Search results: {{ count }} results for &quot;{{ terms }}&quot;"),
                                generalTitle: o("label", "search_general_title", "Search"),
                                resultHeader: o("label", "search_result_header", 'Search Results for "{{ terms }}"'),
                                resultEmpty: o("label", "search_result_empty", 'Your search for "{{ terms }}" didn\'t match any results'),
                                resultNumber: o("label", "search_result_number", 'Showing {{ count }} results for "{{ terms }}"'),
                                searchPanelProduct: o("label", "search_panel_product", "Products ({% raw %}{{ count }}{% endraw %})"),
                                searchPanelCollection: o("label", "search_panel_collection", "Collections ({% raw %}{{ count }}{% endraw %})"),
                                searchPanelPage: o("label", "search_panel_page", "Pages ({% raw %}{{ count }}{% endraw %})"),
                                searchTotalResult: o("label", "search_total_result_one", "Showing {{ count }} result"),
                                searchTotalResults: o("label", "search_total_result_other", "Showing {{ count }} results"),
                            },
                            suggestion: {
                                placeholder: o("label_suggestion", "suggestion_placeholder", "Search"),
                                popularHeader: o("label_suggestion", "suggestion_popular_header", "Popular Suggestions"),
                                productHeader: o("label_suggestion", "suggestion_product_header", "Products"),
                                didYouMeanHeader: o("label_suggestion", "suggestion_did_you_mean_header", "Did you mean"),
                                viewAll: o("label_suggestion", "suggestion_view_all", "View all {{ count }} product(s)"),
                                suggestQuery: o("label_suggestion", "suggestion_suggest_query", "Showing results for {{ terms }}."),
                                didYouMean: o("label_suggestion", "suggestion_did_you_mean", "Did you mean: {{ terms }}?"),
                                searchBoxPlaceholder: o("label_suggestion", "suggestion_placeholder", "Search"),
                            },
                            error: {
                                noFilterResult: o("label_error", "error_no_filter_result", "Sorry, no products matched your selection"),
                                noSearchResult: o("label_error", "error_no_search_result", "Sorry, no products matched the keyword"),
                                noProducts: o("label_error", "error_no_products", "No products found in this collection"),
                                noSuggestionProducts: 'Sorry, nothing found for "{{ terms }}"',
                                noSuggestionResult: 'Sorry, nothing found for "{{ terms }}"',
                            },
                        },
                        e = i.a.mergeObject(a, t);
                    void 0 !== r.a.label && (e = i.a.mergeObject(e, r.a.label)), (a = e);
                },
            };
        e.a = a;
    },
    66: function (t, e, n) {
        "use strict";
        n.r(e);
        n(19), n(7), n(88), n(115), n(119), n(189), n(8), n(20), n(9);
        var i = n(1),
            r = n.n(i),
            o = n(0),
            a = n(2),
            l = n(3),
            s = n(45),
            c = function t(e, n, i, o) {
                (n = void 0 !== n ? n : 0), (o = void 0 !== o ? o : "");
                var a = p(e, i);
                "" != o && (a.prev_query = o);
                var l = document.createElement("script");
                (l.type = "text/javascript"),
                    (l.src = s.a.getApiUrl("suggestion") + "?q=" + e + "&" + r.a.param(a)),
                    (l.async = !0),
                    l.addEventListener("error", function (a) {
                        r()(this).remove(), n < 3 && (n++, t(e, i, o, n));
                    }),
                    document.getElementsByTagName("head")[0].appendChild(l),
                    l.addEventListener("load", function (t) {
                        r()(this).remove();
                    });
            },
            u = function (t) {
                var e = o.a.suggestionCache;
                if (t.hasOwnProperty("prev_query")) {
                    var n = t.prev_query;
                    if (e.hasOwnProperty(n)) {
                        var i,
                            a = e[n],
                            s = ["collections", "did_you_mean", "pages", "suggestions", "suggest_query"],
                            c = s.length;
                        for (i = 0; i < c; i++) t[s[i]] = l.a.getValueInObjectArray(s[i], a);
                        (t.prev_total_product = l.a.getValueInObjectArray("total_product", a)),
                            (a[l.a.findIndexArray("products", a, "key")].values = t.products),
                            a.push({ key: "local_cache", values: !0 }),
                            a.push({ key: "suggest_total_product", values: t.total_product }),
                            (o.a.suggestionCache[n] = a);
                    }
                }
                window.suggestionCallback(
                    r.a.map(t, function (t, e) {
                        return { key: e, values: t };
                    })
                );
            },
            p = function (t, e) {
                var n = {};
                (n.shop = o.a.shopDomain), (n.t = new Date().getTime()), a.a.getSettingValue("search.enableDefaultResult") || (n.enable_default_result = !1);
                var i = a.a.getSettingValue("search.enableFuzzy");
                !0 !== i && (n.fuzzy = i),
                    a.a.getSettingValue("search.fullMinMatch") && (n.full_min_match = !0),
                    !1 !== a.a.getSettingValue("search.reduceMinMatch") && (n.reduce_min_match = a.a.getSettingValue("search.reduceMinMatch")),
                    a.a.getSettingValue("search.enablePlusCharacterSearch") && (n.enable_plus_character_search = !0),
                    1 == a.a.getSettingValue("search.productAvailable") && (n.product_available = !0);
                var r,
                    l = a.a.getSettingValue("search.suggestionBlocks"),
                    c = l.length;
                for (r = 0; r < c; r++) {
                    n[l[r].type.slice(0, -1) + "_limit"] = l[r].number;
                }
                n.dym_limit = a.a.getSettingValue("search.suggestionDymLimit");
                var u = a.a.getSettingValue("search.skipFields");
                u.length > 0 && (param.skipFields = u), (n.callback = "BoostPFSInstantSearchCallback"), (n.event_type = e);
                var p = "suggest_dym" == e ? ["products"] : a.a.getSettingValue("search.suggestionTypes");
                return (n.suggest_types = p), (n = s.a.setApiLocaleParams(n)), Object.assign(n, o.a.instantSearchQueryParams);
            },
            f = {
                BoostPFSInstantSearchCallback: function (t) {
                    f.setDefaultValueForExcludedFields(t), "function" == typeof f.afterCall && f.afterCall(t), "function" != typeof f.afterCallAsync ? u(t) : f.afterCallAsync(t, u);
                },
                getSuggestionData: function (t, e, n, i) {
                    if (("function" == typeof f.beforeCall && f.beforeCall(t), "function" != typeof f.beforeCallAsync)) c(t, 0, n, i);
                    else {
                        f.beforeCallAsync(t, function () {
                            c(t, 0, n, i);
                        });
                    }
                },
                prepareSuggestionParams: p,
                setDefaultValueForExcludedFields: function (t) {
                    if (Array.isArray(t.products)) {
                        var e = new Date().toISOString();
                        t.products.forEach(function (t) {
                            t.hasOwnProperty("variants") || (t.variant = []),
                                t.hasOwnProperty("images_info") || (t.images_info = []),
                                t.hasOwnProperty("collections") || (t.collections = []),
                                t.hasOwnProperty("tags") || (t.tags = []),
                                t.hasOwnProperty("skus") || (t.skus = []),
                                t.hasOwnProperty("options_with_values") || (t.options_with_values = []),
                                t.hasOwnProperty("barcodes") || (t.barcodes = []),
                                t.hasOwnProperty("created_at") || (t.created_at = e),
                                t.hasOwnProperty("updated_at") || (t.updated_at = e),
                                t.hasOwnProperty("published_at") || (t.published_at = e);
                        });
                    }
                },
                callInstantSearchApi: c,
                callbackInstantSearchApi: u,
                beforeCall: null,
                afterCall: null,
                beforeCallAsync: null,
                afterCallAsync: null,
            };
        e.default = f;
    },
});
