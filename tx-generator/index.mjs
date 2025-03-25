import { ethers } from "ethers";
(async () => {
    const provider = new ethers.JsonRpcProvider('http://127.0.0.1:8547'); // Rollup RPC URL
    const signer = new ethers.Wallet('4d592eba0460d9628207ed3e751bd8cfab8c08d057acd1ba37d69b8b4ec92d65', provider);

    const tx = await signer.sendTransaction({
        to: '0xb723A5D23E7BB52c28Db05a8e11498515C459b51',
        value: ethers.parseUnits('1', 'wei'),
        gasPrice: ethers.parseUnits('1', 'gwei'),
        gasLimit: 26000,
    });
    console.log(tx);
})();
