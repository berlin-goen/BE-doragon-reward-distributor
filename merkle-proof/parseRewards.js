/**
 * Creator Chain 1.0
 *
 * Description.
 *
 * @link   https://github.com/creator-blockchains/creator-token-distributor
 * @parseRewards.js  a script file to parse reward
 * @author Creator.
 * @since  Aug 25, 2021
 */

const {MerkleTree} = require('merkletreejs');
const ethers = require('ethers');
const BN = ethers.BigNumber;
const solidityKeccak256 = ethers.utils.solidityKeccak256;
const keccak256 = require('keccak256');

module.exports.parseRewards = function (rewardInfo) {
    // verify addresses (check duplicates, invalid) and convert cumulative amounts to BN
    // with account as key
    const mappedTokensAmounts = verifyAddressAndAmounts(rewardInfo);

    // structure data to include account field
    const treeElements = addAccountInMapping(mappedTokensAmounts);

    // hash tree elements to leaves
    const leaves = hashElements(treeElements);
    const tree = new MerkleTree(leaves, keccak256, {sort: true});
    const userRewardsWithProof = treeElements.reduce((memo, {account, ...amount}, index) => {
        memo[account] = {
            index,
            amount: amount.amount.toHexString(),
            proof: tree.getHexProof(leaves[index]),
        };
        return memo;
    }, {});
    return {
        merkleRoot: tree.getHexRoot(),
        claims: userRewardsWithProof,
    };
};

function verifyAddressAndAmounts(claims) {
    return Object.keys(claims).reduce((memo, account) => {
        if (!ethers.utils.isAddress(account)) {
            throw new Error(`[CTR] Found invalid address: ${account}`);
        }
        const parsedAddress = ethers.utils.getAddress(account);
        if (memo[parsedAddress]) throw new Error(`[CTR] Duplicate address: ${parsed}`);
        const parsedAmounts = BN.from(claims[account].amount);
        memo[parsedAddress] = {
            amount: parsedAmounts
        };
        return memo;
    }, {});
}

function addAccountInMapping(mappedTokensAmounts) {
    return Object.keys(mappedTokensAmounts).map((account) => ({
        account,
        amount: mappedTokensAmounts[account].amount
    }));
}

function hashElements(treeElements) {
    return treeElements.map((element, index) => {
        return solidityKeccak256(['uint256', 'address', 'uint256'], [index, element.account, element.amount])
    });
}
