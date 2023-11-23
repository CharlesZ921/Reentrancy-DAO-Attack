async function main() {
    const [owner] = await ethers.getSigners();
    let dao, daoAddress;
    console.log("Deploying Dao contracts with the account:", owner.address);
  
    const Dao = await ethers.getContractFactory("Dao");
    dao = await Dao.deploy();
    daoAddress = await dao.getAddress();
    console.log("DAO address:", daoAddress);

}
    
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
    });