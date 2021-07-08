var Web3 = require('web3');
var ABI = require('../MonkeyBrix.json')
const bigNumber = require('bignumber.js')
var web3 = new Web3(window['ethereum']);
let contract_address = "0xd45a0851805210722fc58e54179fd98af2f4a575"; // rinkeby
var itemPrice = new bigNumber("80000000000000000");
let production = False;

  

async function buttonPress(){
    console.log(ABI)
    if (this.buttonText == "Buy"){
        if (this.buyCount <= 0 || this.buyCount > 20){
            alert('Please input a valid number (1-20)')
        } else {
            let contract = new web3.eth.Contract(ABI, contract_address)
            let sumAmount = itemPrice.multipliedBy(this.buyCount) 
            let res =  await contract.methods.mintMonkey(this.buyCount).send({value:sumAmount, from:this.address})
            alert(`Transaction Sent: hash ${res.transactionHash}`)   
        }
        
    } else {
        if (window['ethereum']){
            const address = await window['ethereum'].enable()
            const returned_address = address.length? address[0]:null;
            if (returned_address) { 
                this.netID = await web3.eth.net.getId();
                this.address = returned_address;
                this.buttonText = "Buy"
            } else {
                alert('No address is connected')
            }
        } else {
            alert('No MetaMask Detected. Please Install MetaMask First')
        }  
    }
    
}
// async connectMetaMask(){
//     const address = await window['ethereum'].enable();
//     return address.length? address[0]: null;
// }
export default buttonPress;