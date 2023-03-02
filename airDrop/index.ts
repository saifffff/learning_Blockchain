// airdrop sol to wallet

import {PublicKey,Connection,clusterApiUrl, LAMPORTS_PER_SOL} from "@solana/web3.js";

export const airDrop  = async (address:string, amount : number)=>{
    const pk = new PublicKey(address);
    const connect = new Connection(clusterApiUrl('devnet'));
    const sign = await connect.requestAirdrop(pk,amount * LAMPORTS_PER_SOL);
    await connect.confirmTransaction(sign);
}



airDrop('2BDe4nW6ERmNw4tPCJHbM59BkEGHkptGaV48Ev34eLXf',2);

// ** max Airdrop limit is 2 sol 
// ==> Instructions to run 
// in the parent dir (solana in our case )
// make sure there is tsconfig.json if not `npm run build` && `npx tsc --init`
// now run npm run build ==> it should add a .js version of our .ts file
// now run this .js file using node airDrop/index.js 
