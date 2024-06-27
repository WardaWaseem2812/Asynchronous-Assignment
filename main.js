var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Warda Waseem
// Thursday Morning 9 to 12
console.log("\n \t \t ***Asynchronous Assignment*** ");
/* Question # 1
Write a simple asynchronous TypeScript function fetchGreeting that returns a greeting message after a 2-second delay using setTimeout.*/
console.log("Task 01");
function fetchGreeting() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setTimeout(function () {
                console.log("Welcome Home!");
            }, 2000);
            return [2 /*return*/];
        });
    });
}
fetchGreeting();
/* OUTPUT:
Task 01
Welcome Home! -- returns after 2 seconds delay */
/*Question # 2
Write a function simulateTask that simulates a task by logging "Task started", waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.*/
console.log("Task 02");
function simulateTask() {
    console.log("Task started");
    setTimeout(function () {
        console.log("Task completed");
    }, 1000);
}
simulateTask();
/* OUTPUT:
Task 02
Task started
Task completed -- returns after 1 seconds delay */
/* Question # 3
Write a function fetchData that returns a Promise which resolves with the string "Data fetched successfully!" after a delay of 1 second. */
console.log("Task 03");
function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
fetchData().then(function (response) {
    console.log(response);
});
/* OUTPUT:
Task 03
Data fetched successfully! -- returns after 1 seconds delay */
/* Question # 4
Write a function fetchWithError that returns a Promise. It should randomly either resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a delay of 1 second. Handle the rejection using .catch*/
console.log("Task 04");
function fetchWithError() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        var random = Math.floor(Math.random() * 100 + 1);
                        console.log("Random Number:", random);
                        if (random % 2 == 0) {
                            resolve("Data fetched successfully! -- due to even number");
                        }
                        else {
                            reject("Data fetch failed! -- due to odd number");
                        }
                    }, 1000);
                })];
        });
    });
}
fetchWithError().then(function (response) { console.log(response); })
    .catch(function (error) { console.log(error); });
/* OUTPUT:
1st time Result:
Task 04
Random Number: 44
Data fetched successfully! -- due to even number -- returns after 1 seconds delay

2nd time Result:
Task 04
Random Number: 1
Data fetch failed! -- due to odd number -- returns after 1 seconds delay */
/* Question # 5
Write a function executeSequentially that executes two functions fetchData and processData sequentially using Promises, and logs the results in the order they are called. */
console.log("Task 05");
var fetchdata = new Promise(function (resolve, reject) {
    resolve("Data Fetched Successfully");
});
var processData = new Promise(function (resolve, reject) {
    resolve("Data Processed Successfully");
});
function executeSequentially() {
    return __awaiter(this, void 0, void 0, function () {
        var fetch, process;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchdata];
                case 1:
                    fetch = _a.sent();
                    console.log(fetch);
                    return [4 /*yield*/, processData];
                case 2:
                    process = _a.sent();
                    console.log(process);
                    return [2 /*return*/];
            }
        });
    });
}
executeSequentially();
/* OUTPUT:
Task 05
Data Fetched Successfully
Data Processed Successfully */ 
