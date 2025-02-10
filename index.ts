import {Address, TonClient} from "ton"
import {getHttpEndpoint} from "@orbs-network/ton-access";

async function main () {
    const wallet = Address.parse("0QCOOdyD5blUN0j-Vfh8IRY5DYAnsf7Bi_PPz3tmm1bRYCg3");
    const collection = Address.parse("EQDk8N7xM5D669LC2YACrseBJtDyFqwtSPCNhRWXU7kjEptX");

    const endpoint = await getHttpEndpoint({
        network: "testnet",
    })

    // ... previous code

    const miningData = await client.callGetMethod(collection, 'get_mining_data')

    console.log(miningData)

}

main()