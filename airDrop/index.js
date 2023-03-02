"use strict";
// airdrop sol to wallet
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.airDrop = void 0;
const web3_js_1 = require("@solana/web3.js");
const airDrop = (address, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const pk = new web3_js_1.PublicKey(address);
    const connect = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)('devnet'));
    const sign = yield connect.requestAirdrop(pk, amount * web3_js_1.LAMPORTS_PER_SOL);
    yield connect.confirmTransaction(sign);
});
exports.airDrop = airDrop;
(0, exports.airDrop)('2BDe4nW6ERmNw4tPCJHbM59BkEGHkptGaV48Ev34eLXf', 2);
