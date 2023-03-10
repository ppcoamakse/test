const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappazon", () => {

 it('has a name', async() => {
  const Dappazon = await ethers.getContractFactory('Dappazon')
  Dappazon = await Dappazon.deploy()
  expect(await dappazon.name()).to.equal("Dappazon")
 })
})
