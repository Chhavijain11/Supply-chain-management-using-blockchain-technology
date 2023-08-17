// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <0.9.0;
contract PMD{
enum state{NOTEXIST,CREATED,ONTHEWAY,ATSTORE,SOLD}
state constant defaultChoice=state.NOTEXIST;
//dis->distributor, Man->manefacturer, Ret->retailer, prod->Product
struct prodMan{
string loc;
string org;
string name;
uint produce;
}
struct prodDis{
string loc;
string name;
string org;
uint del;
}
struct prodRet{
string loc;
string org;
string name;
uint sold;
}
struct prodData{
string name;
uint manId;
uint[] disId;
uint retId;
state curstate;
string des;
}
uint counterDis=0;
uint counterRet=0;
uint counterMan=0;
uint counterProd=0;
mapping(uint256=>prodMan) prodManInfo;
mapping(uint256=>prodDis) prodDisInfo;
mapping(uint256=>prodRet) prodRetInfo;
mapping(uint256=>prodData) prodInfo;
event prodAdd(uint,uint,string,uint);//man and prod
event pmanAdd(uint,string);//new man added
event pdisAdd(uint,string);//new dis added
event pretAdd(uint,string);//new ret added
event pdistrans(uint,uint);// dis transferred
event pmandis(uint,uint,uint);//man -> dis,prod
event pdisret(uint,uint,uint);//dis -> ret,prod
event psold(uint,uint);//ret,prod
function addProd(uint256 _manID,string memory _name,string memory _des)
public{
require(_manID<counterMan);
prodData memory nprod;
nprod.manId=_manID;
nprod.curstate=state.CREATED;
nprod.name=_name;
nprod.des=_des;
prodInfo[counterProd]=nprod;
emit prodAdd(_manID,counterProd,_name,counterProd);
counterProd++;
}
function addProdDis(uint256 _id,uint256 _disId ) public{
require(_id<counterProd,"counterProd");
require(prodInfo[_id].curstate==state.ONTHEWAY||
prodInfo[_id].curstate==state.CREATED,"product is not available for shipment");
if(prodInfo[_id].curstate==state.CREATED){
prodInfo[_id].curstate=state.ONTHEWAY;
prodInfo[_id].disId.push(_disId);
prodManInfo[prodInfo[_id].manId].produce++;
emit pmandis(prodInfo[_id].manId,_disId,_id);
}
else{
prodInfo[_id].disId.push(_disId);
uint x=prodInfo[_id].disId.length-2;
prodDisInfo[prodInfo[_id].disId[x]].del++;
emit pdistrans(prodInfo[_id].disId[x],_disId);
}
}
function addProdRet(uint256 _id,uint256 _retId) public{
require(_id<counterProd,"counterProd");
require(_retId<counterRet,"counterRet");
require(prodInfo[_id].curstate==state.ONTHEWAY,"product is not available for dispatch");
prodInfo[_id].retId=_retId;
prodInfo[_id].curstate=state.ATSTORE;
uint x=prodInfo[_id].disId.length-1;
prodDisInfo[prodInfo[_id].disId[x]].del++;
emit pdisret(prodInfo[_id].disId[prodInfo[_id].disId.length1],_retId,_id);
}
function SellProd(uint256 _id)public {
require(_id<counterProd,"counterProd");
require(prodInfo[_id].curstate==state.ATSTORE,"product is not available at store");
require(verify(_id,prodInfo[_id].retId),"invalid product!");
prodInfo[_id].curstate=state.SOLD;
prodRetInfo[prodInfo[_id].retId].sold++;
emit psold(prodInfo[_id].retId,_id);
}
function addMan(string memory _loc,string memory _org,string memory
_name)public returns (prodMan memory){
prodMan memory nMan;
nMan.loc=_loc;
nMan.org=_org;
nMan.name=_name;
nMan.produce=0;
prodManInfo[counterMan]=nMan;
emit pmanAdd(counterMan,_org);
counterMan++;
return nMan;
}
function addDis(string memory _loc,string memory _org,string memory
_name)public returns(prodDis memory){
prodDis memory nDis;
nDis.loc=_loc;
nDis.org=_org;
nDis.name=_name;
nDis.del=0;
prodDisInfo[counterDis]=nDis;
emit pdisAdd(counterDis,_org);
counterDis++;
return nDis;
}
function addRet(string memory _loc,string memory _org,string memory
_name)public returns(prodRet memory){
prodRet memory nRet;
nRet.loc=_loc;
nRet.org=_org;
nRet.name=_name;
nRet.sold=0;
prodRetInfo[counterRet]=nRet;
emit pretAdd(counterRet,_org);
counterRet++;
return nRet;
}
function verify(uint _id,uint _retId) public view returns (bool){
return (prodInfo[_id].curstate!=state.NOTEXIST)&&
(prodInfo[_id].retId==_retId)&&(prodInfo[_id].curstate==state.ATSTORE);
}
function viewRet(uint _id) public view returns(prodRet memory){
return prodRetInfo[_id];
}
function viewDis(uint _id) public view returns(prodDis memory){
return prodDisInfo[_id];
}
function viewMan(uint _id) public view returns(prodMan memory){
return prodManInfo[_id];
}
function viewinfo(uint _id) public view returns(prodData memory){
return prodInfo[_id];
}
function viewstate(uint _id) public view returns(state){
return prodInfo[_id].curstate;
}
//demo only
function viewProdRoute(uint _id) public view returns(string memory){
prodData memory x=prodInfo[_id];
string memory res;
if(x.curstate==state.NOTEXIST){
res="item does not exist!";
}
if(x.curstate>=state.CREATED){
res=string.concat("item created by: ",prodManInfo[x.manId].name);
}
if(x.curstate>=state.ONTHEWAY){
res=string.concat(res," distributors: ");
for(uint i=0;i<x.disId.length;i++){
res=string.concat(res,prodDisInfo[x.disId[i]].name);
res=string.concat(res," ");
}
}
if(x.curstate>=state.ATSTORE){
res=string.concat(res," retailer: ");
res=string.concat(res,prodRetInfo[x.retId].name);
}
if(x.curstate==state.SOLD){
res=string.concat(res," item sold");
}
return res;
}
}
