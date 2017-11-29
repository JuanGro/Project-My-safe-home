webpackJsonp([0],{

/***/ 138:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 138;

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configuration_configuration__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__family_family__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        // Tab pages
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__family_family__["a" /* FamilyPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__configuration_configuration__["a" /* ConfigurationPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/JuanG/Desktop/mySafeHomeApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Notifications" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Family" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Config" tabIcon="contacts"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/JuanG/Desktop/mySafeHomeApp/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigurationPage = (function () {
    function ConfigurationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ConfigurationPage;
}());
ConfigurationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-configuration',template:/*ion-inline-start:"/Users/JuanG/Desktop/mySafeHomeApp/src/pages/configuration/configuration.html"*/'<ion-header>\n    <ion-navbar>\n        <!-- Title for page -->\n        <ion-title>\n            Configuration\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- Options -->\n    <ion-item>\n        <ion-label> Receive notifications</ion-label>\n        <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/JuanG/Desktop/mySafeHomeApp/src/pages/configuration/configuration.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ConfigurationPage);

//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FamilyPage = (function () {
    function FamilyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return FamilyPage;
}());
FamilyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-family',template:/*ion-inline-start:"/Users/JuanG/Desktop/mySafeHomeApp/src/pages/family/family.html"*/'<ion-header>\n    <ion-navbar>\n        <!-- Title for page -->\n        <ion-title>\n            Family\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n        <ion-list>\n            <button ion-item>\n                <ion-avatar item-start>\n                    <img src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png">\n                </ion-avatar>\n                <!-- Name -->\n                <h2>José Miguel</h2>\n                <!-- Last name -->\n                <p>Hernández Aguirre</p>\n            </button>  \n        </ion-list>\n    </ion-content>'/*ion-inline-end:"/Users/JuanG/Desktop/mySafeHomeApp/src/pages/family/family.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], FamilyPage);

//# sourceMappingURL=family.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_item_model__ = __webpack_require__(573);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Models

var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, httpService) {
        this.navCtrl = navCtrl;
        this.httpService = httpService;
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        this.items = [];
        while (true)
            this.getList();
    };
    NotificationsPage.prototype.getList = function () {
        var _this = this;
        this.httpService.get('http://104.236.109.213/items').subscribe(function (dataReceived) {
            if (dataReceived) {
                for (var _i = 0, dataReceived_1 = dataReceived; _i < dataReceived_1.length; _i++) {
                    var item = dataReceived_1[_i];
                    _this.items.push(new __WEBPACK_IMPORTED_MODULE_3__models_item_model__["a" /* Item */](item));
                }
            }
            else {
                // console.log('error');
            }
        });
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"/Users/JuanG/Desktop/mySafeHomeApp/src/pages/notifications/notifications.html"*/'<ion-header>\n    <ion-navbar>\n        <!-- Title for page -->\n        <ion-title>\n            Notifications\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card *ngFor="let item of items" color="dark">\n        <!-- Notification title -->\n        <ion-item color="danger" *ngIf="item.type == \'Fire\'">\n            <ion-icon name="flame" item-start></ion-icon>\n                {{ item.type }}\n        </ion-item>\n        <ion-item color="primary" *ngIf="item.type == \'Flood\'">\n            <ion-icon name="water" item-start></ion-icon>\n                {{ item.type }}\n        </ion-item>\n        <ion-item color="warning" *ngIf="item.type == \'Gas\'">\n            <ion-icon name="warning" item-start></ion-icon>\n                {{ item.type }}\n        </ion-item>\n        <ion-item color="pulse" *ngIf="item.type == \'Earthquake\'">\n            <ion-icon name="pulse" item-start></ion-icon>\n                {{ item.type }}\n        </ion-item>\n        <ion-item color="secondary" *ngIf="item.type == \'Movement\'">\n            <ion-icon name="walk" item-start></ion-icon>\n                {{ item.type }}\n        </ion-item>\n        <!-- Date -->\n        <ion-item>{{ item.date | date:\'medium\' }}</ion-item>\n        <!-- Photo of the notification -->\n        <img src="{{ item.image }}" />\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/JuanG/Desktop/mySafeHomeApp/src/pages/notifications/notifications.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]) === "function" && _b || Object])
], NotificationsPage);

var _a, _b;
//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.get = function (url) {
        return this.http
            .get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return HttpService;
}());
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], HttpService);

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(260);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_configuration_configuration__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_family_family__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_http_service__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Pages





// Tabs

// Services



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_configuration_configuration__["a" /* ConfigurationPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_family_family__["a" /* FamilyPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_configuration_configuration__["a" /* ConfigurationPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_family_family__["a" /* FamilyPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__services_http_service__["a" /* HttpService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/JuanG/Desktop/mySafeHomeApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/JuanG/Desktop/mySafeHomeApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item(json) {
        if (json) {
            this.id = json.id;
            this.type = json.type;
            this.date = this.tryParseDateFromString(json.date);
            this.location = json.location;
            this.image = json.image;
        }
    }
    // multiple formats (e.g. yyyy/mm/dd or mm-dd-yyyy etc.)
    Item.prototype.tryParseDateFromString = function (dateStringCandidateValue, format) {
        if (format === void 0) { format = "ymd"; }
        if (!dateStringCandidateValue) {
            return null;
        }
        var mapFormat = format
            .split("")
            .reduce(function (a, b, i) { a[b] = i; return a; }, {});
        var dateStr2Array = dateStringCandidateValue.split(/[ :\-\/]/g);
        var datePart = dateStr2Array.slice(0, 3);
        var datePartFormatted = [
            +datePart[mapFormat.y],
            +datePart[mapFormat.m] - 1,
            +datePart[mapFormat.d]
        ];
        if (dateStr2Array.length > 3) {
            dateStr2Array.slice(3).forEach(function (t) { return datePartFormatted.push(+t); });
        }
        // test date validity according to given [format]
        var dateTrial = new Date(Date.UTC.apply(null, datePartFormatted));
        return dateTrial && dateTrial.getFullYear() === datePartFormatted[0] &&
            dateTrial.getMonth() === datePartFormatted[1] &&
            dateTrial.getDate() === datePartFormatted[2]
            ? dateTrial :
            null;
    };
    return Item;
}());

//# sourceMappingURL=item.model.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginPage = (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/JuanG/Desktop/mySafeHomeApp/src/pages/login/login.html"*/'<ion-header>\n    <ion-navbar>\n        <!-- Title for page -->\n        <ion-title>\n            Login\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form>\n        <ion-list>\n            <!-- Email -->\n            <ion-item>\n                <ion-label>\n                    Email\n                </ion-label>\n                <ion-input type="email" placeholder=""></ion-input>\n            </ion-item>\n\n            <!-- Password -->\n            <ion-item>\n                <ion-label>\n                    Password\n                </ion-label>\n                <ion-input type="password" placeholder=""></ion-input>\n            </ion-item>\n        </ion-list>\n\n        <!-- Blank space -->\n        <div class="spacer" style="height:40px;"></div>\n\n        <!-- Button to submit info -->\n        <button ion-button color="stable" block>\n          Log in\n        </button>\n\n        <!-- Button to create a new account -->\n        <button ion-button clear color="positive" block href-inappbrowser="/signup">\n          Or create an account\n        </button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/JuanG/Desktop/mySafeHomeApp/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupPage = (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/JuanG/Desktop/mySafeHomeApp/src/pages/signup/signup.html"*/'<ion-header>\n    <ion-navbar>\n        <!-- Title for page -->\n        <ion-title>\n            Signup\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form>\n        <ion-list>\n            <!-- Name -->\n            <ion-item>\n                <ion-label>\n                    Name\n                </ion-label>\n                <ion-input type="text" placeholder="John"></ion-input>\n            </ion-item>\n            <!-- Last name -->\n            <ion-item>\n                <ion-label>\n                    Last name\n                </ion-label>\n                <ion-input type="text" placeholder="Smith"></ion-input>\n            </ion-item>\n            <!-- Nickname -->\n            <ion-item>\n                <ion-label>\n                    Nickname\n                </ion-label>\n                <ion-input type="text" placeholder="Johny"></ion-input>\n            </ion-item>\n            <!-- Email -->\n            <ion-item>\n                <ion-label>\n                    Email\n                </ion-label>\n                <ion-input type="email" placeholder="user@mail.com"></ion-input>\n            </ion-item>\n            <!-- Password -->\n            <ion-item>\n                <ion-label>\n                    Password\n                </ion-label>\n                <ion-input type="password" placeholder="password"></ion-input>\n            </ion-item>\n            <!-- Confirm password -->\n            <ion-item>\n                <ion-label>\n                    Confirm password\n                </ion-label>\n                <ion-input type="password" placeholder="password"></ion-input>\n            </ion-item>\n        </ion-list>\n\n        <!-- Button to submit the info -->\n        <button ion-button color="stable" block>\n      Sign up\n    </button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/JuanG/Desktop/mySafeHomeApp/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

},[255]);
//# sourceMappingURL=main.js.map