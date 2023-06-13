# Datalatte Survey Factory

The project is using Hardhat to compile, deploy and verify the contract.

## Compile

```
npx hardhat compile
```

## Deploy

```
npx hardhat run scripts/deploy.js --network mumbai
```

## Verify

To verify provide:

### First address

Address of the contract just deployed.

### Second address

Address to use in the constructor, in this case it needs to be the Ocean Protocol factory address.

```
npx hardhat verify 0x8Faed923fCe2b63c19a988862150352279F0A286 "0x7d46d74023507d30ccc2d3868129fbe4e400e40b" --network mumbai
```
