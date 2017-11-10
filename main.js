// Find Sarah Conner Also, import modules
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleBus = require('role.bus');
var roleBusTower = require('role.busTower');
var roleClaimer = require('role.claimer');
var roleAttacker = require('role.attacker');
var roleDismantler = require('role.dismantler');
var roleLinkDis = require('role.linkDis');
var roleSweep = require('role.sweep');
var roleColumbus = require('role.columbus');
var roleFarBuilder = require('role.farBuilder');
var roleFarUpgrader = require('role.farUpgrader');
var roleHealer = require( 'role.healer');
var roleTank = require('role.tank');
var roleFarMiner = require('role.farMiner');
var roleDefender = require('role.defender');
//var roleUpTran = require('role.upTran');
var roleSDef = require('role.sDef');
var roleMinMiner = require('role.minMiner');
var roleLabNukeTran = require('role.labNukeTran')
var roleConTranTwo = require('role.conTranTwo');
var roleFarMinerTwo = require('role.farMinerTwo');
var roleWallRepairer = require('role.wallRepairer');
var roleCollectorTwo = require('role.collectorTwo');
var roleContAttacker = require('role.contAttacker');
var rolePwrAttacker = require('role.pwrAttacker');
var rolePwrHealer = require('role.pwrHealer');
// Import Prototypes
require('prototype.tower');
require('prototype.resvMgmt');
require('prototype.SpawnCreeps');
require('prototype.links');
//Main
module.exports.loop = function () {

    // Declare Flags 
    flg1 = Game.flags.Flag1RM1;
    invFlg7335 = Game.flags.INVRM7335;
    invFlg6237 = Game.flags.INVRM6237;
    invFlg6338 = Game.flags.INVRM6338;
    invFlg6339 = Game.flags.INVRM6339;
    invFlg5837 = Game.flags.INVRM5837;
    invFlg5738 = Game.flags.INVRM5738;
    invFlg5637 = Game.flags.INVRM5637;
    invFlg6538 = Game.flags.INVRM6538;
    invFlg6637 = Game.flags.INVRM6637;
    invFlg6938 = Game.flags.INVRM6938;
    invFlg5736 = Game.flags.INVRM5736;
    invFlg6839 = Game.flags.INVRM6839;
    invFlg5438 = Game.flags.INVRM5438;
    invFlg5638 = Game.flags.INVRM5638;
    invFlg7337 = Game.flags.INVRM7337;
    invFlg5337 = Game.flags.INVRM5337;
    invFlg5437 = Game.flags.INVRM5437;
    invFlg6933 = Game.flags.INVRM6933;
    invFlg7732 = Game.flags.INVRM6933;
    
    flg1.resvMgmt();
    
    
    
    
    // Remove Extra Creep names (less Memory as a non loop?)
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }
    // Tower Logic 
    var towers = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER && s.energy > 0);
    for(let tower of towers) {
        tower.defend();
    }
    // Link logic
    var links = _.filter(Game.structures, s => s.structureType == STRUCTURE_LINK && s.cooldown == 0 && s.energy > 200 != s.pos.inRangeTo(s.room.storage, 3) == true != s.pos.inRangeTo(s.room.controller, 4) == true);
    for(let link of links){
        link.linkLogic();
    }
    
    var obs7 = Game.getObjectById('59ecdc4bdcf9c40e1eb02056');
    obs7.observeRoom('W54N37');
    
        //Mineral declerations
    var min1 = Game.getObjectById('57efa006195b160f02c74e5a');
    var min2 = Game.getObjectById('57efa006195b160f02c74e59');   
    var min3 = Game.getObjectById('579fab82b1f02a3b0cfefe36');
    var min4 = Game.getObjectById('57efa003195b160f02c74b65');
    var min5 = Game.getObjectById('57efa005195b160f02c74d2c');    
    var min6 = Game.getObjectById('5836baa6090e0ab576fdd089');   
    var min7 = Game.getObjectById('579fab83b1f02a3b0cfeff79');
    /*
    var testMemSaveSpawns = _.filter(Game.spawns, (s) => s.memory.spawnMemSaver != 0);
    for(let savingSpawn of testMemSaveSpawns){
        if(savingSpawn.memory.spawnMemSaver < 0){
            savingSpawn.memory.spawnMemSaver = 0;
        }else{
            savingSpawn.memory.spawnMemSaver = (savingSpawn.memory.spawnMemSaver - 1);
        }
    }
    
    var testSpawn = _.filter(Game.spawns, (s) => s.spawning == null && s.room.controller.level != 8 && s.memory.spawnMemSaver == 0)
    if(testSpawn.length > 0){
        for(let currentSpawn of testSpawn){
    if(currentSpawn.room.name == 'W68N33'){
            if(invFlg6933.memory.hostiles == true){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W69N33');
                if(currentAmountCheck[0] == undefined){
                    var rm1Defs = 1;
                    currentSpawn.memory.exRm1Hostiles = true; 
                }
            } else{
                var rm1Defs = 0;
                currentSpawn.memory.exRm1Hostiles = false;
            }
            if(flg1.memory.RES6933 < 2500){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W69N33');
                if(currentAmountCheck[0] == undefined){
                    var rm1Claimers = 1;
                    currentSpawn.memory.exRm1Claimer = true;
                }
                
            } else{
                currentSpawn.memory.exRm1Claimer = false;
            }
            var roleArray = [['bus', '1'],['collectorTwo','2'],['busTower','1'],['upgrader','1'],['sweep','1'],['labNukeTran','1'],['builder','0'],['defender', rm1Defs],['claimer',rm1Claimers],['farBuilder','0'],['farMinerTwo','2'],['conTranTwo','2']]; 
            currentSpawn.rmMgmt(roleArray);
        } else if(currentSpawn.room.name == 'W76N32'){
            if(invFlg7732.memory.hostiles == true){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W77N32');
                if(currentAmountCheck[0] == undefined){
                    var rm1Defs = 1;
                    currentSpawn.memory.exRm1Hostiles = true; 
                }
            } else{
                var rm1Defs = 0;
                currentSpawn.memory.exRm1Hostiles = false;
            }
            if(flg1.memory.RES7732 < 2500){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W77N32');
                if(currentAmountCheck[0] == undefined){
                    var rm1Claimers = 1;
                    currentSpawn.memory.exRm1Claimer = true;
                }
                
            } else{
                currentSpawn.memory.exRm1Claimer = false;
            }
            var roleArray = [['bus', '1'],['collectorTwo','2'],['busTower','1'],['upgrader','1'],['sweep','1'],['labNukeTran','1'],['builder','0'],['defender', rm1Defs],['claimer',rm1Claimers],['farBuilder','0'],['farMinerTwo','2'],['conTranTwo','2']]; 
            currentSpawn.rmMgmt(roleArray);
        }
    }  
    }
    */


    
    // For CyberTron!
    
    var allSpawn = _.filter(Game.spawns, (s) => s.spawning == null && s.room.energyAvailable > 299 && s.memory.spawnMemSaver == 0);
    
    console.log('AllSpawn Length: ' + allSpawn.length)
    if(allSpawn.length > 0){
    for(let currentSpawn of allSpawn){
        if(currentSpawn.room.name == 'W62N38'){
            if(invFlg6237.memory.hostiles == true){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W62N37');
                if(currentAmountCheck[0] == undefined){
                    var rm1Defs = 1;
                    currentSpawn.memory.exRm1Hostiles = true; 
                }
            } else{
                var rm1Defs = 0;
                currentSpawn.memory.exRm1Hostiles = false;
            }
            if(flg1.memory.RES6237 < 2500){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W62N37');
                if(currentAmountCheck[0] == undefined){
                    var rm1Claimers = 1;
                    currentSpawn.memory.exRm1Claimer = true;
                } else{
                var rm1Claimers = 0;
                currentSpawn.memory.exRm1Claimer = false;
            }
                
            } else{
                currentSpawn.memory.exRm1Claimer = false;
            }
            if(min1.ticksToRegeneration == undefined){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'minMiner' && creep.memory.home == currentSpawn.room.name);
                if(currentAmountCheck[0] == undefined){
                    var rm1MinMiners = 1;
                    currentSpawn.memory.rmMin = true;
                }
            } else{
                var rm1MinMiners = 0;
                currentSpawn.memory.rmMin = false;
            }
            if(Game.rooms['W62N38'].storage > 800000){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallRepairer' && creep.memory.target == currentSpawn.room.name);
                if(currentAmountCheck[0] == undefined){
                    var rm1WallRepairers = 1;
                }
            } else{
                var rm1WallRepairers = 0;
            }
            var roleArray = [['bus', '1'],['collectorTwo','2'],['busTower','1'],['upgrader','1'],['linker','1'],['labNukeTran','1'],['builder','0'],['defender', rm1Defs],['claimer', rm1Claimers],['farMinerTwo','2'],['conTranTwo','2'],['minMiner', rm1MinMiners],['wallRepairer', '0']]; 
            currentSpawn.rmMgmt(roleArray);
        } else if(currentSpawn.room.name == 'W62N39'){
            if(invFlg6338.memory.hostiles == true || invFlg6339.memory.hostiles == true){
                var rm2Defs = 0;
                if(invFlg6338.memory.hostiles == true){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W63N38');
                    if(currentAmountCheck[0] == undefined){
                        rm2Defs = rm2Defs + 1;
                        currentSpawn.memory.exRm1Hostiles = true;
                    }
                } else{
                    currentSpawn.memory.exRm1Hostiles = false;
                }
                if(invFlg6339.memory.hostiles == true){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W63N39');
                    if(currentAmountCheck[0] == undefined){
                        rm2Defs = rm2Defs + 1;
                        currentSpawn.memory.exRm2Hostiles = true;
                    }
                } else{
                    currentSpawn.memory.exRm2Hostiles = false;
                }
            }
            if(flg1.memory.RES6339 < 2500 || flg1.memory.RES6338 < 3000){
                var rm2Claimers = 0;
                if(flg1.memory.RES6338 < 2500){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W63N38');
                    if(currentAmountCheck[0] == undefined){
                        rm2Claimers = rm2Claimers + 1;
                        currentSpawn.memory.exRm1Claimer = true;
                    } else{
                    currentSpawn.memory.exRm1Claimer = false;
                }
                } else{
                    currentSpawn.memory.exRm1Claimer = false;
                }
                if(flg1.memory.RES6339 < 2500){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W62N37');
                    if(currentAmountCheck[0] == undefined){
                        rm2Claimers = rm2Claimers + 1;
                        currentSpawn.memory.exRm2Claimer = true;
                    } else{
                    currentSpawn.memory.exRm2Claimer = false;
                }
                } else{
                    currentSpawn.memory.exRm2Claimer = false;
                }
            }
            if(min2.ticksToRegeneration == undefined){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'minMiner' && creep.memory.home == currentSpawn.room.name);
                if(currentAmountCheck[0] == undefined){
                    var rm2MinMiners = 1;
                }
            } else{
                var rm2MinMiners = 0;
            }
            if(Game.rooms['W62N39'].storage > 800000){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallRepairer' && creep.memory.target == currentSpawn.room.name);
                if(currentAmountCheck[0] == undefined){
                    var rm2WallRepairers = 1;
                }
            } else{
                var rm2WallRepairers = 0;
            }
            var roleArray = [['bus', '1'],['collectorTwo','2'],['busTower','1'],['upgrader','1'],['sweep','1'],['labNukeTran','1'],['builder','0'],['defender', rm2Defs],['claimer', rm2Claimers],['farMinerTwo','2'],['conTranTwo','2'],['minMiner', rm2MinMiners],['wallRepairer', '0']]; 
            currentSpawn.rmMgmt(roleArray);
        } else if(currentSpawn.room.name == 'W57N37'){
            if(invFlg5736.memory.hostiles == true || invFlg5738.memory.hostiles == true || invFlg5637.memory.hostiles == true || invFlg5837.memory.hostiles == true || invFlg5638.memory.hostiles == true){
                var rm3Defs = 0;
                if(invFlg5736.memory.hostiles == true){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W57N36');
                    if(currentAmountCheck[0] == undefined){
                    currentSpawn.memory.exRm1Hostiles = true;
                    rm3Defs = rm3Defs + 1
                    }
                } else{
                    currentSpawn.memory.exRm1Hostiles = false;
                }
                if(invFlg5738.memory.hostiles == true){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W57N38');
                    if(currentAmountCheck[0] == undefined){
                    currentSpawn.memory.exRm2Hostiles = true;
                    rm3Defs = rm3Defs + 1;
                    }
                } else{
                    currentSpawn.memory.exRm2Hostiles = false;
                }
                if(invFlg5637.memory.hostiles == true){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W56N37');
                    if(currentAmountCheck[0] == undefined){
                    currentSpawn.memory.exRm3Hostiles = true;
                    rm3Defs = rm3Defs + 1;
                    }
                } else{
                    currentSpawn.memory.exRm3Hostiles = false;
                }
                if(invFlg5837.memory.hostiles == true){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W58N37');
                    if(currentAmountCheck[0] == undefined){
                    currentSpawn.memory.exRm4Hostiles = true;
                    rm3Defs = rm3Defs + 1;
                    }
                } else{
                    currentSpawn.memory.exRm4Hostiles = false;
                }
                if(invFlg5638.memory.hostiles == true){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W56N38');
                    if(currentAmountCheck[0] == undefined){
                    currentSpawn.memory.exRm5Hostiles = true;
                    rm3Defs = rm3Defs + 1;
                    }
                } else{
                    currentSpawn.memory.exRm5Hostiles = false;
                }
            } else{
                var rm3Defs = 0;
            }
            if(flg1.memory.RES5736 < 2500 || flg1.memory.RES5738 < 2500 || flg1.memory.RES5637 < 2500 || flg1.memory.RE5837 < 2500 || flg1.memory.RES5638 < 2500){
                var rm3Claimers = 0;
                if(flg1.memory.RES5736 < 2500){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W57N36');
                    if(currentAmountCheck[0] == undefined){
                        rm3Claimers = rm3Claimers + 1;
                        currentSpawn.memory.exRm1Claimer = true;
                    } else{
                    currentSpawn.memory.exRm1Claimer = false;
                }
                } else{
                    currentSpawn.memory.exRm1Claimer = false;
                }
                if(flg1.memory.RES5738 < 2500){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W57N38');
                    if(currentAmountCheck[0] == undefined){
                        rm3Claimers = rm3Claimers + 1;
                        currentSpawn.memory.exRm4Claimer = true;
                    } else{
                    currentSpawn.memory.exRm4Claimer = false;
                }
                } else{
                    currentSpawn.memory.exRm4Claimer = false;
                }
                if(flg1.memory.RES5637 < 2500){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W56N37');
                    if(currentAmountCheck[0] == undefined){
                    rm3Claimers = rm3Claimers + 1;
                    currentSpawn.memory.exRm3Claimer = true;
                    } else{
                    currentSpawn.memory.exRm3Claimer = false;
                }
                } else{
                    currentSpawn.memory.exRm3Claimer = false;
                }
                if(flg1.memory.RES5837 < 2500){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W58N37');
                    if(currentAmountCheck[0] == undefined){
                    rm3Claimers = rm3Claimers + 1;
                    currentSpawn.memory.exRm2Claimer = true;
                    } else{
                    currentSpawn.memory.exRm2Claimer = false;
                }
                } else{
                    currentSpawn.memory.exRm2Claimer = false;
                }
                if(flg1.memory.RES5638 < 2500){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W56N38');
                    if(currentAmountCheck[0] == undefined){
                    rm3Claimers = rm3Claimers + 1;
                    currentSpawn.memory.exRm5Claimer = true;
                    } else{
                    currentSpawn.memory.exRm5Claimer = false;
                }
                } else{
                    currentSpawn.memory.exRm5Claimer = false;
                }
            } else{
                var rm3Claimers = 0;
            }
            if(min3.ticksToRegeneration == undefined){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'minMiner' && creep.memory.home == currentSpawn.room.name);
                if(currentAmountCheck[0] == undefined){
                var rm3MinMiners = 1;
                }
            } else{
                var rm3MinMiners = 0;
            }
            if(Game.rooms['W57N37'].storage > 800000){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallRepairer' && creep.memory.target == currentSpawn.room.name);
                if(currentAmountCheck[0] == undefined){
                var rm3WallRepairers = 1;
                }
            } else{
                var rm3WallRepairers = 0;
            }
            var roleArray = [['bus', '1'],['collectorTwo','2'],['busTower','1'],['upgrader','1'],['sweep','1'],['labNukeTran','1'],['builder','0'],['defender', rm3Defs],['claimer', rm3Claimers],['farMinerTwo','7'],['conTranTwo','7'],['minMiner', rm3MinMiners],['wallRepairer', '0']]; 
            currentSpawn.rmMgmt(roleArray);
        } else if(currentSpawn.room.name == 'W69N39'){
            if(invFlg6839.memory.hostiles == true || invFlg6938.memory.hostiles == true){
                var rm4Defs = 0;
                if(invFlg6839.memory.hostiles == true){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W68N39');
                    if(currentAmountCheck[0] == undefined){
                    rm4Defs = rm4Defs + 1;
                    currentSpawn.memory.exRm2Hostiles = true;
                    }
                } else{
                    currentSpawn.memory.exRm2Hostiles = false;
                }
                if(invFlg6938.memory.hostiles == true){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W69N38');
                    if(currentAmountCheck[0] == undefined){
                    rm4Defs = rm4Defs + 1;
                    currentSpawn.memory.exRm1Hostiles = true;
                    }
                } else{
                    currentSpawn.memory.exRm1Hostiles = false;
                }
            } else{
                var rm4Defs = 0;
            }
            if(flg1.memory.RES6839 < 2500 || flg1.memory.RES6938 < 2500 || flg1.memory.RES6739 < 2500){
                var rm4Claimers = 0;
                if(flg1.memory.RES6839 < 2500){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W68N39');
                    if(currentAmountCheck[0] == undefined){
                    rm4Claimers = rm4Claimers + 1;
                    currentSpawn.memory.exRm2Claimer = true;
                    } else{
                    currentSpawn.memory.exRm2Claimer = false;
                }
                } else{
                    currentSpawn.memory.exRm2Claimer = false;
                }
                if(flg1.memory.RES6938 < 2500){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W69N38');
                    if(currentAmountCheck[0] == undefined){
                    rm4Claimers = rm4Claimers + 1;
                    currentSpawn.memory.exRm1Claimer = true;
                    } else{
                    currentSpawn.memory.exRm1Claimer = false;
                }
                } else{
                    currentSpawn.memory.exRm1Claimer = false;
                }
                if(flg1.memory.RES6739 < 2500){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W67N39');
                    if(currentAmountCheck[0] == undefined){
                    rm4Claimers = rm4Claimers + 1;
                    currentSpawn.memory.exRm3Claimer = true;
                    } else{
                    currentSpawn.memory.exRm3Claimer = false;
                }
                } else{
                    currentSpawn.memory.exRm3Claimer = false;
                }
            } else{
                var rm4Claimers = 0;
            }
            if(min4.ticksToRegeneration == undefined){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'minMiner' && creep.memory.home == currentSpawn.room.name);
                if(currentAmountCheck[0] == undefined){
                var rm4MinMiners = 1;
                }
            } else{
                var rm4MinMiners = 0;
            }
            if(Game.rooms['W69N39'].storage > 800000){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallRepairer' && creep.memory.target == currentSpawn.room.name);
                if(currentAmountCheck[0] == undefined){
                var rm4WallRepairers = 1;
                }
            } else{
                var rm4WallRepairers = 0;
            }
            var roleArray = [['bus', '1'],['collectorTwo','2'],['busTower','1'],['upgrader','1'],['sweep','1'],['labNukeTran','1'],['builder','0'],['defender', rm4Defs],['claimer', rm4Claimers],['farMinerTwo','5'],['conTranTwo','5'],['minMiner', rm4MinMiners],['farBuilder','2'],['farUpgrader','0'],['wallRepairer', '0']]; 
            currentSpawn.rmMgmt(roleArray);
        } else if(currentSpawn.room.name == 'W65N37'){
            if(invFlg6637.memory.hostiles == true || invFlg6538.memory.hostiles == true){
                var rm5Defs = 0;
                if(invFlg6637.memory.hostiles == true){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W66N37');
                    if(currentAmountCheck[0] == undefined){
                    rm5Defs = rm5Defs + 1;
                    currentSpawn.memory.exRm1Hostiles = true;
                    }
                } else{
                    currentSpawn.memory.exRm1Hostiles = false;
                }
                if(invFlg6538.memory.hostiles == true){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W65N38');
                    if(currentAmountCheck[0] == undefined){
                    rm5Defs = rm5Defs + 1;
                    currentSpawn.memory.exRm2Hostiles = true;
                    }
                } else{
                    currentSpawn.memory.exRm2Hostiles = false;
                }
            } else{
                var rm5Defs = 0;
            }
            if(flg1.memory.RES6637 < 2500 || flg1.memory.RES6538 < 2500){
                var rm5Claimers = 0;
                if(flg1.memory.RES6637 < 2500){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W66N37');
                    if(currentAmountCheck[0] == undefined){
                    rm5Claimers = rm5Claimers + 1;
                    currentSpawn.memory.exRm1Claimer = true;
                    } else{
                    currentSpawn.memory.exRm1Claimer = false;
                }
                } else{
                    currentSpawn.memory.exRm1Claimer = false;
                }
                if(flg1.memory.RES6538 < 2500){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W65N38');
                    if(currentAmountCheck[0] == undefined){
                    rm5Claimers = rm5Claimers + 1;
                    currentSpawn.memory.exRm2Claimer = true;
                    } else{
                    currentSpawn.memory.exRm2Claimer = false;
                }
                }else{
                    currentSpawn.memory.exRm2Claimer = false;
                }
            } else{
                var rm5Claimers = 0;
            }
            if(min5.ticksToRegeneration == undefined){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'minMiner' && creep.memory.home == currentSpawn.room.name);
                if(currentAmountCheck[0] == undefined){
                var rm5MinMiners = 1;
                }
            } else{
                var rm5MinMiners = 0;
            }
            if(Game.rooms['W65N37'].storage > 950000){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallRepairer' && creep.memory.target == currentSpawn.room.name);
                if(currentAmountCheck[0] == undefined){
                var rm5WallRepairers = 1;
                }
            } else{
                var rm5WallRepairers = 0;
            }
            var roleArray = [['bus', '1'],['collectorTwo','1'],['busTower','1'],['upgrader','1'],['sweep','1'],['labNukeTran','1'],['builder','0'],['defender', rm5Defs],['claimer', rm5Claimers],['farMinerTwo','5'],['conTranTwo','5'],['minMiner', rm5MinMiners],['wallRepairer', '0']]; 
            currentSpawn.rmMgmt(roleArray);
        } else if(currentSpawn.room.name == 'W73N36'){
            if(invFlg7335.memory.hostiles == true || invFlg7337.memory.hostiles == true){
                var rm6Defs = 0;
                if(invFlg7335.memory.hostiles == true){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W73N35');
                    if(currentAmountCheck[0] == undefined){
                    rm6Defs = rm6Defs + 1;
                    currentSpawn.memory.exRm1Hostiles = true;
                    }
                } else{
                    currentSpawn.memory.exRm1Hostiles = false;
                }
                if(invFlg7337.memory.hostiles == true){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W73N37');
                    if(currentAmountCheck[0] == undefined){
                    rm6Defs = rm6Defs + 1;
                    currentSpawn.memory.exRm2Hostiles = true;
                    }
                } else{
                    currentSpawn.memory.exRm2Hostiles = false;
                }
            } else{
                var rm6Defs = 0;
            }
            if(flg1.memory.RES7335 < 2500 || flg1.memory.RES7337 < 2500){
                var rm6Claimers = 0;
                if(flg1.memory.RES7335 < 2500){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W73N35');
                    if(currentAmountCheck[0] == undefined){
                    rm6Claimers = rm6Claimers + 1;
                    currentSpawn.memory.exRm1Claimer = true;
                    } else{
                    currentSpawn.memory.exRm1Claimer = false;
                }
                }
                if(flg1.memory.RES7337 < 2500){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W73N37');
                    if(currentAmountCheck[0] == undefined){
                    rm6Claimers = rm6Claimers + 1;
                    currentSpawn.memory.exRm2Claimer = true;
                    } else{
                    currentSpawn.memory.exRm2Claimer = false;
                }
                }
            } else{
                var rm6Claimers = 0;
            }
            if(min6.ticksToRegeneration == undefined){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'minMiner' && creep.memory.home == currentSpawn.room.name);
                if(currentAmountCheck[0] == undefined){
                var rm6MinMiners = 1;
                }
            } else{
                var rm6MinMiners = 0;
            }
            if(Game.rooms['W73N36'].storage > 950000){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallRepairer' && creep.memory.target == currentSpawn.room.name);
                if(currentAmountCheck[0] == undefined){
                var rm6WallRepairers = 1;
                }
            } else{
                var rm6WallRepairers = 0;
            }
            var roleArray = [['bus', '1'],['collectorTwo','2'],['busTower','1'],['upgrader','1'],['labNukeTran','1'],['builder','0'],['linker','1'],['defender', rm6Defs],['claimer', rm6Claimers],['farMinerTwo','3'],['conTranTwo','3'],['minMiner', rm6MinMiners],['wallRepairer', '0']]; 
            currentSpawn.rmMgmt(roleArray);
        } else if(currentSpawn.room.name == 'W53N38'){
            if(invFlg5438.memory.hostiles == true || invFlg5437.memory.hostiles == true || invFlg5337.memory.hostiles == true){
                var rm7Defs = 0;
                if(invFlg5438.memory.hostiles == true){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W54N38');
                    if(currentAmountCheck[0] == undefined){
                    rm7Defs = rm7Defs + 1;
                    currentSpawn.memory.exRm1Hostiles = true;
                    }
                } else{
                    currentSpawn.memory.exRm1Hostiles = false;
                }
                if(invFlg5337.memory.hostiles == true){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W53N37');
                    if(currentAmountCheck[0] == undefined){
                    rm7Defs = rm7Defs + 1;
                    currentSpawn.memory.exRm2Hostiles = true;
                    }
                } else{
                    currentSpawn.memory.exRm2Hostiles = false;
                }
                if(invFlg5437.memory.hostiles == true){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W54N37');
                    if(currentAmountCheck[0] == undefined){
                    rm7Defs = rm7Defs + 1;
                    currentSpawn.memory.exRm3Hostiles = true;
                    }
                } else{
                    currentSpawn.memory.exRm3Hostiles = false;
                }
            } else{
                var rm7Defs = 0;
            }
            if(flg1.memory.RES5438 < 2500 || flg1.memory.RES5337 < 2500 || flg1.memory.RES5437 < 2500){
                var rm7Claimers = 0;
                if(flg1.memory.RES5438 < 2500){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W54N38');
                    if(currentAmountCheck[0] == undefined){
                    rm7Claimers = rm7Claimers + 1;
                    currentSpawn.memory.exRm1Claimer = true;
                    } else{
                    currentSpawn.memory.exRm1Claimer = false;
                }
                }
                if(flg1.memory.RES5337 < 2500){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W53N37');
                    if(currentAmountCheck[0] == undefined){
                    rm7Claimers = rm7Claimers + 1;
                    currentSpawn.memory.exRm2Claimer = true;
                    } else{
                    currentSpawn.memory.exRm2Claimer = false;
                }
                }
                if(flg1.memory.RES5437 < 2500){
                    var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W54N37');
                    if(currentAmountCheck[0] == undefined){
                    rm7Claimers = rm7Claimers + 1;
                    currentSpawn.memory.exRm3Claimer = true;
                    } else{
                    currentSpawn.memory.exRm3Claimer = false;
                }
                } else{
                    currentSpawn.memory.exRm3Claimer = false;
                }
            } else{
                var rm7Claimers = 0;
            }
            if(min7.ticksToRegeneration == undefined){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'minMiner' && creep.memory.home == currentSpawn.room.name);
                if(currentAmountCheck[0] == undefined){
                var rm7MinMiners = 1;
                }
            } else{
                var rm7MinMiners = 0;
            }
            if(Game.rooms['W53N38'].storage > 950000){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallRepairer' && creep.memory.target == currentSpawn.room.name);
                if(currentAmountCheck[0] == undefined){
                var rm7WallRepairers = 1;
                }
            } else{
                var rm7WallRepairers = 0;
            }
            var roleArray = [['bus', '1'],['collectorTwo','2'],['busTower','1'],['upgrader','1'],['sweep','1'],['labNukeTran','1'],['builder','0'],['defender', rm7Defs],['claimer', rm7Claimers],['farMinerTwo','6'],['conTranTwo','6'],['minMiner', rm7MinMiners],['wallRepairer', '0']]; 
            currentSpawn.rmMgmt(roleArray);
        } else if(currentSpawn.room.name == 'W68N33'){
            if(invFlg6933.memory.hostiles == true){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W69N33');
                if(currentAmountCheck[0] == undefined){
                    var rm1Defs = 1;
                    currentSpawn.memory.exRm1Hostiles = true; 
                }
            } else{
                var rm1Defs = 0;
                currentSpawn.memory.exRm1Hostiles = false;
            }
            if(flg1.memory.RES6933 < 2500){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W69N33');
                if(currentAmountCheck[0] == undefined){
                    var rm1Claimers = 1;
                    currentSpawn.memory.exRm1Claimer = true;
                } else{
                currentSpawn.memory.exRm1Claimer = false;
            }
                
            }
            var roleArray = [['bus', '1'],['collectorTwo','2'],['busTower','1'],['upgrader','1'],['sweep','1'],['labNukeTran','1'],['builder','0'],['defender', rm1Defs],['claimer',rm1Claimers],['farBuilder','0'],['farMinerTwo','2'],['conTranTwo','2']]; 
            currentSpawn.rmMgmt(roleArray);
        } else if(currentSpawn.room.name == 'W76N32'){
            if(invFlg7732.memory.hostiles == true){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W77N32');
                if(currentAmountCheck[0] == undefined){
                    var rm1Defs = 1;
                    currentSpawn.memory.exRm1Hostiles = true; 
                }
            } else{
                var rm1Defs = 0;
                currentSpawn.memory.exRm1Hostiles = false;
            }
            if(flg1.memory.RES7732 < 2500){
                var currentAmountCheck = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W77N32');
                if(currentAmountCheck[0] == undefined){
                    var rm1Claimers = 1;
                    currentSpawn.memory.exRm1Claimer = true;
                } else{
                currentSpawn.memory.exRm1Claimer = false;
            }
                
            }
            var roleArray = [['bus', '1'],['collectorTwo','2'],['busTower','1'],['upgrader','1'],['sweep','1'],['labNukeTran','1'],['builder','0'],['defender', rm1Defs],['claimer',rm1Claimers],['farBuilder','0'],['farMinerTwo','2'],['conTranTwo','2']]; 
            currentSpawn.rmMgmt(roleArray);
        }
    }
    }
    var allSpawnCooldown = _.filter(Game.spawns, (s) => s.memory.spawnMemSaver != 0);
    for(let currentSpawnTgt of allSpawnCooldown){
        if(currentSpawnTgt.memory.spawnMemSaver < 0){
            currentSpawnTgt.memory.spawnMemSaver = 0;
        } else{
            currentSpawnTgt.memory.spawnMemSaver = (currentSpawnTgt.memory.spawnMemSaver - 1);
        }
    }
    
    
        
    // Terminal Managment
    var termRM1 = Game.rooms['W62N38'].terminal
    var termRM2 = Game.rooms['W62N39'].terminal
    var termRM3 = Game.rooms['W57N37'].terminal
    var termRM4 = Game.rooms['W69N39'].terminal
    var termRM5 = Game.rooms['W65N37'].terminal
    var termRM6 = Game.rooms['W73N36'].terminal
    var termRM7 = Game.rooms['W53N38'].terminal
   
    //Lab Mgmt
    var lLab38 = Game.getObjectById('599f6727dabd0e662b6c971d');
    var uLab38 = Game.getObjectById('599ed323368e7807ef116243');
    var kLab38 = Game.getObjectById('599e995ad0c5ab5e52e0696f');
    var zLab38 = Game.getObjectById('599f19328741635f808a52f7');
    
    var ulLab38 = Game.getObjectById('599bb2a2c2173e5f8479054b');
    var ulLab382 = Game.getObjectById('599d1a6aa1371511970c8272');
    var zkLab38 = Game.getObjectById('599ca8953b22232925d0b2d8');
    var zkLab382 = Game.getObjectById('599e53c587c8af58cdc17c64');
        
    var gLab38 = Game.getObjectById('599c2c883d80a003f6a7f7cd');
    var gLab382 = Game.getObjectById('599da3478223bb209a6f9a12');
    
    var oLab39 = Game.getObjectById('59ae65c3a2f9632a7cab802a');
    var lLab39 = Game.getObjectById('59ae991b69e97274fe419b05');
    var oLab392 = Game.getObjectById('59adbff0a29e8d4f1fc2e08b');
    var hLab39 = Game.getObjectById('59ad9b5f33f9051ee34fd324');
    
    var loLab39 = Game.getObjectById('59adfdf18d35fa295a5470a2');
    var loLab392 = Game.getObjectById('59ae7dfc09801d07667f74d0');
    var loLab393 = Game.getObjectById('59ae42dfdf090b482e8fc833');
    
    var hoLab39 = Game.getObjectById('59addce5ed93a17b74ab6ade');
    var hoLab391 = Game.getObjectById('59ae13c34f106f6a3a9c366b');
    var hoLab392 = Game.getObjectById('59ae2adab429572b12ce9731');
    
    var gLab37 = Game.getObjectById('59958bb51fa93b4f2aba5b0a');
    var hLab37 = Game.getObjectById('59956d5f15e7ad3dabb7898f');
    var ohLab37 = Game.getObjectById('59a5493ef385ac76c4673809');
    
    var goLab37 = Game.getObjectById('5991fb5574eb505edf149185');
    var goLab372 = Game.getObjectById('59a516468742455de323a255');
    var goLab373 = Game.getObjectById('59a585eb5aca1342fbf3b392');

    var go2Lab371 = Game.getObjectById('59a5672eab1d0536ceb33388');
    var go2Lab372 = Game.getObjectById('59a61f262bd5a135afdee7fa');
    var go2Lab373 = Game.getObjectById('59a5cc0a6055135ee1d1409a');
    
    var bstLab1 = Game.getObjectById('59fad56b1da7153fb91c39d0');
    var bstLab2 = Game.getObjectById('59a5eb7072fd6a799d9f8ff7');
    var bstLab3 = Game.getObjectById('59fc47f2f7c99f4d3f7d0e41');
    
    var xLab = Game.getObjectById('59e04cce0ab84515a1fc3273');
    var gohoLab = Game.getObjectById('59d62874323e0348208bcc64');
    var gohocatLab = Game.getObjectById('59df6472fcd5e5377e86d35e');
    var gohocatLab1 = Game.getObjectById('59e0869f8b8723690f6a9d6e');
    var gohocatLab2 = Game.getObjectById('59d5b8f1837889501e49f142');
    var gohocatLab3 = Game.getObjectById('59d5285503606977a110c8f7');
    var gohocatLab4 = Game.getObjectById('59ed1decff5a0135b5e52a44');
    var gohocatLab5 = Game.getObjectById('59ed44c4f1ae2a3e5643f2ba');
    var gohocatLab6 = Game.getObjectById('59ed656dfe746b399f69ae19');
    var gohocatLab7 = Game.getObjectById('59ed8159159a8b154b43d522');

    if(xLab.mineralAmount > 5 && gohoLab.mineralAmount > 5){
        if(gohocatLab.cooldown == 0){
            gohocatLab.runReaction(xLab, gohoLab);
        }
        if(gohocatLab1.cooldown == 0){
            gohocatLab1.runReaction(xLab, gohoLab);
        }
        if(gohocatLab2.cooldown == 0){
            gohocatLab2.runReaction(xLab, gohoLab);
        }
        if(gohocatLab3.cooldown == 0){
            gohocatLab3.runReaction(xLab, gohoLab);
        }
        if(gohocatLab4.cooldown == 0){
            gohocatLab4.runReaction(xLab, gohoLab);
        }
        if(gohocatLab5.cooldown == 0){
            gohocatLab5.runReaction(xLab, gohoLab);
        }
        if(gohocatLab6.cooldown == 0){
            gohocatLab6.runReaction(xLab, gohoLab);
        }
        if(gohocatLab7.cooldown == 0){
            gohocatLab7.runReaction(xLab, gohoLab);
        }
    }
    
    if(gLab37.mineralAmount > 0 && hLab37.mineralAmount > 0 && goLab37.cooldown == 0){
        goLab37.runReaction(gLab37, hLab37);
    }
    if(gLab37.mineralAmount > 0 && hLab37.mineralAmount > 0 && goLab372.cooldown == 0){
        goLab372.runReaction(gLab37, hLab37);
    }
    if(gLab37.mineralAmount > 0 && hLab37.mineralAmount > 0 && goLab373.cooldown == 0){
        goLab373.runReaction(gLab37, hLab37);
    }
    if(goLab37.mineralAmount > 0 && ohLab37.mineralAmount > 0 && go2Lab371.cooldown == 0){
        go2Lab371.runReaction(goLab37, ohLab37);
    }
    if(goLab37.mineralAmount > 0 && ohLab37.mineralAmount > 0 && go2Lab372.cooldown == 0){
        go2Lab372.runReaction(goLab37, ohLab37);
    }
    if(goLab372.mineralAmount > 0 && ohLab37.mineralAmount > 0 && go2Lab373.cooldown == 0){
        go2Lab373.runReaction(goLab372, ohLab37);
    }
    
    
    if(lLab38.mineralAmount > 5 && uLab38.mineralAmount > 5 && kLab38.mineralAmount > 5 && zLab38.mineralAmount > 5){
    if(lLab38.mineralAmount > 0 && uLab38.mineralAmount > 0 && ulLab38.cooldown == 0){
        ulLab38.runReaction(lLab38, uLab38);
    }
    if(lLab38.mineralAmount > 0 && uLab38.mineralAmount > 0 && ulLab382.cooldown == 0){
        ulLab382.runReaction(lLab38, uLab38);
    }
    if(zLab38.mineralAmount > 0 && kLab38.mineralAmount > 0 && zkLab38.cooldown == 0){
        zkLab38.runReaction(kLab38, zLab38);
    }
    if(zLab38.mineralAmount > 0 && kLab38.mineralAmount > 0 && zkLab382.cooldown == 0){
        zkLab382.runReaction(kLab38, zLab38);
    }
    if(zkLab38.mineralAmount > 0 && ulLab38.mineralAmount > 0 && gLab38.cooldown == 0){
        gLab38.runReaction(ulLab38, zkLab38);
    }
    if(zkLab38.mineralAmount > 0 && ulLab38.mineralAmount > 0 && gLab382.cooldown == 0){
        gLab382.runReaction(ulLab382, zkLab382);
    }
    }
    
    if(hLab39.mineralAmount > 5){
    if(oLab392.mineralAmount > 0 && hLab39.mineralAmount > 0 && hoLab39.cooldown == 0){
        hoLab39.runReaction(oLab392, hLab39);
    }
    if(oLab392.mineralAmount > 0 && hLab39.mineralAmount > 0 && hoLab391.cooldown == 0){
        hoLab391.runReaction(oLab392, hLab39);
    }
    if(oLab392.mineralAmount > 0 && hLab39.mineralAmount > 0 && hoLab392.cooldown == 0){
        hoLab392.runReaction(oLab392, hLab39);
    }
    }
    if(lLab39.mineralAmount > 5){
    if(oLab39.mineralAmount > 0 && lLab39.mineralAmount > 0 && loLab39.cooldown == 0){
        loLab39.runReaction(oLab39, lLab39);
    }
    if(oLab39.mineralAmount > 0 && lLab39.mineralAmount > 0 && loLab392.cooldown == 0){
        loLab392.runReaction(oLab39, lLab39);
    }
    if(oLab39.mineralAmount > 0 && lLab39.mineralAmount > 0 && loLab393.cooldown == 0){
        loLab393.runReaction(oLab39, lLab39);
    }
    }
    
    var creepTgt = bstLab1.pos.findClosestByRange(FIND_MY_CREEPS, {filter: (s) => s.memory.role == 'upgrader' });
    var rngTgt = bstLab1.pos.getRangeTo(creepTgt);

    if(rngTgt <= 1){
        bstLab1.boostCreep(creepTgt);
    }
    
    var creepTgt = bstLab2.pos.findClosestByRange(FIND_MY_CREEPS, {filter: (s) => s.getActiveBodyparts(HEAL) > 2})
    var rngTgt = bstLab2.pos.getRangeTo(creepTgt);
    if(rngTgt <= 1){
        bstLab2.boostCreep(creepTgt);
    }
    
    var creepTgt = bstLab3.pos.findClosestByRange(FIND_MY_CREEPS, {filter: (s) => s.memory.role == 'upgrader' });
    var rngTgt = bstLab3.pos.getRangeTo(creepTgt);

    if(rngTgt <= 1){
        bstLab3.boostCreep(creepTgt);
    }

    if(termRM1.store[RESOURCE_ENERGY] < 50000 && termRM3.store[RESOURCE_ENERGY] > 60000 && termRM3.cooldown == 0){
        var ammount = (50000-termRM1.store[RESOURCE_ENERGY]);
        termRM3.send(RESOURCE_ENERGY, ammount, 'W62N38', 'Eng')
    } else if(termRM2.store[RESOURCE_ENERGY] < 50000 && termRM3.store[RESOURCE_ENERGY] > 60000 && termRM3.cooldown == 0){
        var ammount = (50000-termRM2.store[RESOURCE_ENERGY]);
        termRM3.send(RESOURCE_ENERGY, ammount, 'W62N39', 'Eng')
    } else if(termRM4.store[RESOURCE_ENERGY] < 50000 && termRM3.store[RESOURCE_ENERGY] > 60000 && termRM3.cooldown == 0){
        var ammount = (50000-termRM4.store[RESOURCE_ENERGY]);
        termRM3.send(RESOURCE_ENERGY, ammount, 'W69N39', 'Eng')
    } else if(termRM5.store[RESOURCE_ENERGY] < 50000 && termRM3.store[RESOURCE_ENERGY] > 60000 && termRM3.cooldown == 0){
        var ammount = (50000-termRM5.store[RESOURCE_ENERGY]);
        termRM3.send(RESOURCE_ENERGY, ammount, 'W65N37', 'Eng')
    }
    
    try{
    if(termRM3.store[RESOURCE_ZYNTHIUM] > 100 && termRM3.store[RESOURCE_ENERGY] > 10000 && termRM3.cooldown == 0){
        var ammount = (termRM3.store[RESOURCE_ZYNTHIUM] - 100);
        termRM3.send(RESOURCE_ZYNTHIUM, ammount, 'W62N38', 'ResZ');
    } else if(termRM4.store[RESOURCE_KEANIUM] > 100 && termRM4.store[RESOURCE_ENERGY] > 10000 && termRM4.cooldown == 0){
        var ammount = (termRM4.store[RESOURCE_KEANIUM] - 100);
        termRM4.send(RESOURCE_KEANIUM, ammount, 'W62N38', 'ResK');
    } else if(termRM5.store[RESOURCE_UTRIUM] > 100 && termRM5.store[RESOURCE_ENERGY] > 10000 && termRM5.cooldown == 0){
        var ammount = (termRM5.store[RESOURCE_UTRIUM] - 100);
        termRM5.send(RESOURCE_UTRIUM, ammount, 'W62N38', 'ResU');
    } else if(termRM6.store[RESOURCE_LEMERGIUM] > 100 && termRM6.store[RESOURCE_ENERGY] > 10000 && termRM6.cooldown == 0 && termRM1.store[RESOURCE_LEMERGIUM] < 10000){
        var ammount = (termRM6.store[RESOURCE_LEMERGIUM] - 100);
        termRM6.send(RESOURCE_LEMERGIUM, ammount, 'W62N38', 'ResL');
    }  
    if(termRM1.store[RESOURCE_OXYGEN] > 100 && termRM1.store[RESOURCE_ENERGY] > 10000 && termRM1.cooldown == 0 && termRM3.store[RESOURCE_HYDROXIDE] < 5000){
        var ammount = (termRM1.store[RESOURCE_OXYGEN] - 100);
        termRM1.send(RESOURCE_OXYGEN, ammount, 'W62N39', 'ResZ');
    }   
    }catch(e){
        console.log('ERROR: ' + e)
    }
    try{
    if(termRM1.store[RESOURCE_GHODIUM] > 100 && termRM1.store[RESOURCE_ENERGY] > 10000 && termRM1.cooldown == 0 && (termRM3.store[RESOURCE_GHODIUM] < 10000 || termRM3.store[RESOURCE_GHODIUM] == undefined)){
        var ammount = (termRM1.store[RESOURCE_GHODIUM] - 100);
        console.log('Ammount: ' + ammount)
        termRM1.send(RESOURCE_GHODIUM, ammount, 'W57N37', 'ResZ');
    } else if(termRM2.store[RESOURCE_HYDROGEN] > 5000 && termRM2.store[RESOURCE_ENERGY] > 5000 && termRM2.cooldown == 0){
        var ammount = (termRM2.store[RESOURCE_HYDROGEN] - 5000);
        termRM2.send(RESOURCE_HYDROGEN, ammount, 'W57N37', 'ResZ');
    } else if(termRM2.store[RESOURCE_HYDROXIDE] > 100 && termRM2.store[RESOURCE_ENERGY] > 10000 && termRM2.cooldown == 0){
        var ammount = (termRM2.store[RESOURCE_HYDROXIDE] - 100);
        termRM2.send(RESOURCE_HYDROXIDE, ammount, 'W57N37', 'ResZ');
    } else if(termRM3.store[RESOURCE_HYDROGEN] > 10000 && termRM3.store[RESOURCE_ENERGY] > 5000 && termRM3.cooldown == 0){
        var ammount = (termRM3.store[RESOURCE_HYDROGEN] - 10000);
        termRM3.send(RESOURCE_HYDROGEN, ammount, 'W62N39', 'ResZ');
    } else if(termRM3.store[RESOURCE_GHODIUM_ACID] > 101 && termRM3.store[RESOURCE_ENERGY] > 5000 && termRM3.cooldown == 0){
        var ammount = (termRM3.store[RESOURCE_GHODIUM_ACID] - 100);
        termRM3.send(RESOURCE_GHODIUM_ACID, ammount, 'W53N38', 'ResZ');
    }
        
    }catch(e){
        console.log('ERROR: ' + e)
    }

       // Visuals RM1
    new RoomVisual('W62N38').text("Total Energy: " + Game.rooms['W62N38'].energyAvailable + " / " + Game.rooms['W62N38'].energyCapacityAvailable, 36, 13, {color: 'yellow', font: 0.8});
    // Room 2 Visual
    new RoomVisual('W62N39').text("Total Energy: " + Game.rooms['W62N39'].energyAvailable + " / " + Game.rooms['W62N39'].energyCapacityAvailable, 32, 21, {color: 'yellow', font: 0.8});
    // Room 3
    new RoomVisual('W57N37').text("Total Energy: " + Game.rooms['W57N37'].energyAvailable + " / " + Game.rooms['W57N37'].energyCapacityAvailable + " - " + Math.floor((Game.rooms['W57N37'].energyAvailable/Game.rooms['W57N37'].energyCapacityAvailable)*100)+"%", 25, 22, {color: 'yellow', font: 0.8});
    new RoomVisual('W57N37').text("CPU Bucket: " + Game.cpu['bucket'], 25, 23, {color: 'yellow', font: 0.8});
    new RoomVisual('W57N37').text("GCL to Next LVL: " + Math.floor((Game.gcl['progress']/Game.gcl['progressTotal'])*100)+"%", 25, 24, {color: 'yellow', font: 0.8});
    new RoomVisual('W57N37').text("Est Time: ~" + Math.floor((((((Game.gcl['progressTotal'] - Game.gcl['progress'])/((15*6)+ 33))*5)/60)/60)/24)+" Days Till GCL Upgrade", 26, 25, {color: 'yellow', font: 0.8});
    // Visual RM4
    new RoomVisual('W69N39').text("Total Energy: " + Game.rooms['W69N39'].energyAvailable + " / " + Game.rooms['W69N39'].energyCapacityAvailable, 32, 10, {color: 'yellow', font: 0.8});
    // Room 5 Visual
    new RoomVisual('W65N37').text("Total Energy: " + Game.rooms['W65N37'].energyAvailable + " / " + Game.rooms['W65N37'].energyCapacityAvailable, 29, 19, {color: 'yellow', font: 0.8});
    // RM6 visuals 
    new RoomVisual('W73N36').text("Total Energy: " + Game.rooms['W73N36'].energyAvailable + " / " + Game.rooms['W73N36'].energyCapacityAvailable, 22, 22, {color: 'yellow', font: 0.8});
     // RM7 visuals 
    new RoomVisual('W53N38').text("Total Energy: " + Game.rooms['W53N38'].energyAvailable + " / " + Game.rooms['W53N38'].energyCapacityAvailable, 33, 15, {color: 'yellow', font: 0.8});
    new RoomVisual('W53N38').text("Till Upgrade: " + ((Game.rooms['W53N38'].controller.progressTotal) - (Game.rooms['W53N38'].controller.progress)), 33, 16, {color: 'yellow', font: 0.8});
     // RM8 Visuals 
    new RoomVisual('W76N32').text("Total Energy: " + Game.rooms['W76N32'].energyAvailable + " / " + Game.rooms['W76N32'].energyCapacityAvailable, 28, 12, {color: 'yellow', font: 0.8});
    // RM 9 Visuals
    new RoomVisual('W68N33').text("Total Energy: " + Game.rooms['W68N33'].energyAvailable + " / " + Game.rooms['W68N33'].energyCapacityAvailable, 23, 26, {color: 'yellow', font: 0.8});

   

    
    // Storage dec
    var storeRM3 = Game.getObjectById('596159a622491078e05327cf');
    
    
    
    
    /*
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        
    // set 'lengths' for each type of creep so we can compair them.

    // Room 1 Lengths
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.home == 'W62N38');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.home == 'W62N38');
    var collectorsTwo = _.filter(Game.creeps, (creep) => creep.memory.role == 'collectorTwo' && creep.memory.sourceID == '57ef9cd886f108ae6e60ce67' && creep.memory.home == 'W62N38');
    var collectorsTwoRM1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'collectorTwo' && creep.memory.sourceID == '57ef9cd886f108ae6e60ce68' && creep.memory.home == 'W62N38');
    var buses = _.filter(Game.creeps, (creep) => creep.memory.role == 'bus' && creep.memory.home == 'W62N38');
    var busesTowers = _.filter(Game.creeps, (creep) => creep.memory.role == 'busTower' && creep.memory.home == 'W62N38');
    var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W62N37' && creep.memory.home == 'W62N38');
    var linkDisers = _.filter(Game.creeps, (creep) => creep.memory.role == 'linker' && creep.memory.home == 'W62N38');
    var farMinersTwo = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W62N37' && creep.memory.sourceID == '57ef9cd886f108ae6e60ce6c' && creep.memory.home == 'W62N38');
    var conTransTwo = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W62N37' && creep.memory.containerID == '59a46bdcabdd8d0c5b81c797' && creep.memory.home == 'W62N38');
    var farMinersTwoRM1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W62N37' && creep.memory.sourceID == '57ef9cd886f108ae6e60ce6d' && creep.memory.home == 'W62N38');
    var conTransTwoRM1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W62N37' && creep.memory.containerID == '59a49ac4b65af643fd0481c6' && creep.memory.home == 'W62N38');
    var defendersRM1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W62N37' && creep.memory.farBuilder == 'yes' && creep.memory.home == 'W62N38');
    var labNukeTrans = _.filter(Game.creeps, (creep) => creep.memory.role == 'labNukeTran' && creep.memory.home == 'W62N38');
    var minMinersRM1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'minMiner' && creep.memory.home == 'W62N38');
    var wallRepairersRM1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallRepairer' && creep.memory.home == 'W62N38');
    
    
    
    // Room 2 Lengths
    var collectorsTwoRM2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'collectorTwo' && creep.memory.sourceID == '57ef9cd786f108ae6e60ce64' && creep.memory.target == 'W62N39');
    var collectorsTwoRM21 = _.filter(Game.creeps, (creep) => creep.memory.role == 'collectorTwo' && creep.memory.sourceID == '57ef9cd786f108ae6e60ce65' && creep.memory.target == 'W62N39');
    var busesTowersRM2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'busTower' && creep.memory.target == 'W62N39');
    var busRM2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'bus' && creep.memory.target == 'W62N39');
    var sweepsRM2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'sweep' && creep.memory.target == 'W62N39');
    var upgradersRM2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.target == 'W62N39');
    var buildersRM2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.target == 'W62N39');
    var defendersRM2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W63N39' && creep.memory.farBuilder == 'yes');
    var farMinersTwoRM2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W63N39' && creep.memory.sourceID == '57ef9cc286f108ae6e60cc9d');
    var conTransTwoRM2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W63N39' && creep.memory.containerID == '59a469b12d2aa2606fe20d97');
    var defendersRM22 = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W63N38' && creep.memory.farBuilder == 'yes');
    var farMinersTwoRM22 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W63N38' && creep.memory.sourceID == '57ef9cc286f108ae6e60cca0');
    var conTransTwoRM22 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W63N38' && creep.memory.containerID == '59a46ca3bbf8450c23e5ff4e');
    var claimersRM2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W63N39');
    var claimersRM22 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W63N38');
    var minMinersRM2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'minMiner' && creep.memory.home == 'W62N39');
    var labNukeTransRM2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'labNukeTran' && creep.memory.home == 'W62N39');
    var linkDisersRM2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'linker' && creep.memory.home == 'W62N39');
    var pwrAttackerRM2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'pwrAttacker');
    var pwrHealerRM2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'pwrHealer');
    
    // Room 3 Lengths
    var collectorsTwoRM31 = _.filter(Game.creeps, (creep) => creep.memory.role == 'collectorTwo' && creep.memory.sourceID == '579fa8750700be0674d2da41' && creep.memory.target == 'W57N37');
    var collectorsTwoRM3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'collectorTwo' && creep.memory.sourceID == '579fa8750700be0674d2da42' && creep.memory.target == 'W57N37');
    var busRM3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'bus' && creep.memory.target == 'W57N37');
    var busesTowersRM3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'busTower' && creep.memory.target == 'W57N37');
    var sweepsRM3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'sweep' && creep.memory.target == 'W57N37');
    var buildersRM3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.target == 'W57N37');
    var upgradersRM3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.target == 'W57N37');
    var defendersRM3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W57N36' && creep.memory.farBuilder == 'yes');
    var farMinersTwoRM32 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W57N36' && creep.memory.sourceID == '579fa8750700be0674d2da44');
    var conTransTwoRM31 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W57N36' && creep.memory.containerID == '59f52aa6e2d04f0f991b2164');
    var defendersRM31 = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W57N38' && creep.memory.farBuilder == 'yes');
    var farMinersTwoRM33 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W57N38' && creep.memory.sourceID == '579fa8750700be0674d2da3e');
    var conTransTwoRM32 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W57N38' && creep.memory.containerID == '59f279795cacab1ac8c4fee2');
    var defendersRM32 = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W56N37' && creep.memory.farBuilder == 'yes');
    var farMinersTwoRM34 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W58N37' && creep.memory.sourceID == '579fa8650700be0674d2d8bd');
    var conTransTwoRM33 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W58N37' && creep.memory.containerID == '59f27793e6a8cc1d9d42fbb5');
    var defendersRM33 = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W58N37' && creep.memory.farBuilder == 'yes');
    var farMinersTwoRM35 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W56N37' && creep.memory.sourceID == '579fa8840700be0674d2dbea');
    var conTransTwoRM34 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W56N37' && creep.memory.containerID == '59f278bd05d7a725de95124f');
    var farMinersTwoRM36 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W57N36' && creep.memory.sourceID == '579fa8750700be0674d2da46');
    var conTransTwoRM35 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W57N36' && creep.memory.containerID == '59f3c18b3d60f632fb9e7729');
    var claimersRM3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W57N36');
    var claimersRM31 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W57N38');
    var claimersRM32 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W58N37');
    var claimersRM33 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W56N37');
    var minMinersRM3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'minMiner' && creep.memory.home == 'W57N37' && creep.memory.target == undefined);
    var labNukeTransRM3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'labNukeTran' && creep.memory.home == 'W57N37');
    var wallRepairersRM3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallRepairer' && creep.memory.home == 'W57N37');
    var defendersRM36 = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W56N38' && creep.memory.farBuilder == 'yes');
    var farMinersTwoRM37 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W56N38' && creep.memory.sourceID == '579fa8840700be0674d2dbe6');
    var conTransTwoRM36 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W56N38' && creep.memory.containerID == '59f3d542c76935721c59bf5d');
    var farMinersTwoRM38 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W56N38' && creep.memory.sourceID == '579fa8840700be0674d2dbe7');
    var conTransTwoRM37 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W56N38' && creep.memory.containerID == '59f3df2d5fa6b509dbb969ec');
    var claimersRM34 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W56N38');
    var sDefRM3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'sDef' && creep.memory.target == 'W56N36');
    var minMinersRM31 = _.filter(Game.creeps, (creep) => creep.memory.role == 'minMiner' && creep.memory.home == 'W57N37' && creep.memory.target == 'W56N36');
    var farMinersTwoRM39 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W56N36' && creep.memory.sourceID == '579fa8840700be0674d2dbee');
    var conTransTwoRM38 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W56N36' && creep.memory.containerID == '59f3d3e9e999fb5d672bf268');
    var farMinersTwoRM310 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W56N36' && creep.memory.sourceID == '579fa8840700be0674d2dbf1');
    var conTransTwoRM39 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W56N36' && creep.memory.containerID == '59f3e2b8cee32660e68e1843');
    var farMinersTwoRM311 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W56N36' && creep.memory.sourceID == '579fa8840700be0674d2dbf2');
    var conTransTwoRM310 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W56N36' && creep.memory.containerID == '59f3f63ee15e76052350739a');
    var farBuilderRM3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farBuilder' && creep.memory.target == 'W57N36');
    var farBuilderRM31 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farBuilder' && creep.memory.target == 'W58N37');
    var farBuilderRM32 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farBuilder' && creep.memory.target == 'W56N37');
    var farBuilderRM33 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farBuilder' && creep.memory.target == 'W56N38');



    // Room 4 lengths W71N35
    var collectorsTwoRM4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'collectorTwo' && creep.memory.sourceID == '57ef9c4586f108ae6e60bf8d' && creep.memory.target == 'W69N39');
    var collectorsTwoRM41 = _.filter(Game.creeps, (creep) => creep.memory.role == 'collectorTwo' && creep.memory.sourceID == '57ef9c4586f108ae6e60bf8e' && creep.memory.target == 'W69N39');
    var busRM4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'bus' && creep.memory.target == 'W69N39');
    var busesTowersRM4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'busTower' && creep.memory.target == 'W69N39');
    var upgradersRM4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.target == 'W69N39');
    var sweepsRM4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'sweep' && creep.memory.target == 'W69N39');
    var buildersRM4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.target == 'W69N39');
    var defendersRM4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W68N39' && creep.memory.farBuilder == 'yes');
    var defendersRM41 = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W69N38' && creep.memory.farBuilder == 'yes');
    var farMinersTwoRM42 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W68N39' && creep.memory.sourceID == '57ef9c5a86f108ae6e60c151');
    var conTransTwoRM4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W68N39' && creep.memory.containerID == '59a4690eba10c92008a4901a');
    var claimersRM4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W68N39');
    var farMinersTwoRM43 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W68N39' && creep.memory.sourceID == '57ef9c5a86f108ae6e60c150');
    var conTransTwoRM41 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W68N39' && creep.memory.containerID == '59c3553eb69b434ebfc16639');
    var farMinersTwoRM44 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W69N38' && creep.memory.sourceID == '57ef9c4586f108ae6e60bf90');
    var conTransTwoRM42 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W69N38' && creep.memory.containerID == '59a469b1384656283332cdaa');
    var claimersRM41 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W69N38');
    var minMinersRM4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'minMiner' && creep.memory.home == 'W69N39');
    var labNukeTransRM4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'labNukeTran' && creep.memory.home == 'W69N39');
    var wallRepairersRM4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallRepairer' && creep.memory.home == 'W69N39');
    var farMinersTwoRM45 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W67N39' && creep.memory.sourceID == '57ef9c6f86f108ae6e60c314');
    var conTransTwoRM43 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W67N39' && creep.memory.containerID == '59c585d794ccb0735220fafd');
    var farMinersTwoRM46 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W67N39' && creep.memory.sourceID == '57ef9c6f86f108ae6e60c315');
    var conTransTwoRM44 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W67N39' && creep.memory.containerID == '59c59c643e9a6a4f0dfa659b');    
    var claimersRM42 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W67N39');
    var farBuilderRM4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farBuilder' && creep.memory.home == 'W69N39');
    var farUpgraderRM4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farUpgrader' && creep.memory.home == 'W69N39');
    
    // Room 5 lengths
    var collectorsTwoRM5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'collectorTwo' && creep.memory.sourceID == '57ef9c9786f108ae6e60c7b9' && creep.memory.target == 'W65N37');
    var busRM5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'bus' && creep.memory.target == 'W65N37');
    var busesTowersRM5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'busTower' && creep.memory.target == 'W65N37');
    var upgradersRM5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.target == 'W65N37');
    var sweepsRM5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'sweep' && creep.memory.target == 'W65N37');
    var buildersRM5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.target == 'W65N37');
    var defendersRM5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W66N37' && creep.memory.farBuilder == 'yes');
    var farMinersTwoRM52 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W66N37' && creep.memory.sourceID == '57ef9c8486f108ae6e60c512');
    var conTransTwoRM51 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W66N37');
    var claimersRM5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W66N37');
    var defendersRM52 = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W65N38' && creep.memory.farBuilder == 'yes');
    var farMinersTwoRM51 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W65N38' && creep.memory.sourceID == '57ef9c9786f108ae6e60c7b6');
    var conTransTwoRM5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W65N38');
    var claimersRM51 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W65N38');
    var minMinersRM5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'minMiner' && creep.memory.home == 'W65N37');
    var labNukeTransRM5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'labNukeTran' && creep.memory.home == 'W65N37');

    // Room 6 Lengths
    var collectorsTwoRM6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'collectorTwo' && creep.memory.sourceID == '5836b6d48b8b9619519ef6ee' && creep.memory.target == 'W73N36');
    var collectorsTwoRM61 = _.filter(Game.creeps, (creep) => creep.memory.role == 'collectorTwo' && creep.memory.sourceID == '5836b6d48b8b9619519ef6f0' && creep.memory.target == 'W73N36');
    var busRM6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'bus' && creep.memory.target == 'W73N36');
    var linkDisersRM6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'linker' && creep.memory.home == 'W73N36');
    var busesTowersRM6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'busTower' && creep.memory.target == 'W73N36');
    var upgradersRM6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.target == 'W73N36');
    var buildersRM6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.target == 'W73N36');
    var defendersRM6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W73N35' && creep.memory.farBuilder == 'yes');
    var farMinersTwoRM6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W73N35' && creep.memory.sourceID == '5836b6d48b8b9619519ef6f2');
    var farMinersTwoRM61 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W73N35' && creep.memory.sourceID == '5836b6d48b8b9619519ef6f3');
    var conTransTwoRM6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W73N35' && creep.memory.containerID == '59a4644ead493a63f53674c3');
    var conTransTwoRM61 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W73N35' && creep.memory.containerID == '59be962882b37a02a08bb67c');
    var claimersRM6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W73N35');
    var defendersRM61 = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W73N37' && creep.memory.farBuilder == 'yes');
    var farMinersTwoRM62 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.target == 'W73N37' && creep.memory.sourceID == '5836b6d38b8b9619519ef6eb');
    var conTransTwoRM62 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.target == 'W73N37' && creep.memory.containerID == '59cc48dd74d9605546c33cba');
    var claimersRM61 = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W73N37');
    var minMinersRM6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'minMiner' && creep.memory.home == 'W73N36');
    var labNukeTransRM6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'labNukeTran' && creep.memory.home == 'W73N36');
    var farBuilderRM6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farBuilder' && creep.memory.home == 'W73N36');
    var farUpgraderRM6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farUpgrader' && creep.memory.home == 'W73N36');
    var columbusRM6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'columbus' && creep.memory.home == 'W73N36');


    // RM1 Spawn activities.
    if (collectorsTwo.length < 1){
        if(Game.spawns['Spawn1'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '57ef9cd886f108ae6e60ce67', home:'W62N38', containerID: '594316d5f4e5f28558258259', depositID: '59487c260be3c3e16b057357'});
        } else{
        var newName2 = Game.spawns['Spawn12'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '57ef9cd886f108ae6e60ce67', home:'W62N38', containerID: '594316d5f4e5f28558258259', depositID: '59487c260be3c3e16b057357'});
        }
    } else if (collectorsTwoRM1.length < 1){
        if(Game.spawns['Spawn1'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '57ef9cd886f108ae6e60ce68', home:'W62N38', containerID: '5941a11fe390c1d17c1771ea', depositID: '59512d29375d592c4939c1a2'});
        } else{
        var newName2 = Game.spawns['Spawn12'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '57ef9cd886f108ae6e60ce68', home:'W62N38', containerID: '5941a11fe390c1d17c1771ea', depositID: '59512d29375d592c4939c1a2'});    
        }
    } else if (buses.length < 1){
        if(Game.spawns['Spawn1'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn1'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'bus', home:'W62N38'});
        } else{
        var newName2 = Game.spawns['Spawn12'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'bus', home:'W62N38'});
        }
    } else if (linkDisers.length < 1) {
        if(Game.spawns['Spawn1'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn1'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'linker', home: 'W62N38'});
    } else {
        var newName2 = Game.spawns['Spawn12'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'linker', home: 'W62N38'});
        }
    } else if (upgraders.length < 1) {
        if(Game.spawns['Spawn1'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', home:'W62N38', bstLab: '0', boosted: '1'});
    } else {
        var newName2 = Game.spawns['Spawn12'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', home:'W62N38', bstLab: '0', boosted: '1'});
        }
    } else if (builders.length < 0){
        if(Game.spawns['Spawn1'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', home:'W62N38'});
    } else {
        var newName2 = Game.spawns['Spawn12'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', home:'W62N38'});
        }
    } else if (busesTowers.length < 1){
        if(Game.spawns['Spawn1'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn1'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'busTower', home:'W62N38'});
    } else {
        var newName2 = Game.spawns['Spawn12'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'busTower', home:'W62N38'});
        }
    } else if (defendersRM1.length < 1 && invFlg6237.memory.hostiles == true){
        if(Game.spawns['Spawn1'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn1'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W62N38', target: 'W62N37', working: false, farBuilder: 'yes'});
    } else {
        var newName2 = Game.spawns['Spawn12'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W62N38', target: 'W62N37', working: false, farBuilder: 'yes'});
        }
    }else if (farMinersTwo.length < 1){
        if(Game.spawns['Spawn1'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W62N38', target: 'W62N37', sourceID: '57ef9cd886f108ae6e60ce6c', containerID: '59a46bdcabdd8d0c5b81c797'});
    } else {
        var newName2 = Game.spawns['Spawn12'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W62N38', target: 'W62N37', sourceID: '57ef9cd886f108ae6e60ce6c', containerID: '59a46bdcabdd8d0c5b81c797'});
        }
    } else if (conTransTwo.length < 1){
        if(Game.spawns['Spawn1'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn1'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W62N38', target: 'W62N37', containerID: '59a46bdcabdd8d0c5b81c797', deposit: '5965755d87ea8e12499eaefe'});
    } else {
        var newName2 = Game.spawns['Spawn12'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W62N38', target: 'W62N37', containerID: '59a46bdcabdd8d0c5b81c797', deposit: '5965755d87ea8e12499eaefe'});
        }
    }  else if (farMinersTwoRM1.length < 1){
        if(Game.spawns['Spawn1'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W62N38', target: 'W62N37', sourceID: '57ef9cd886f108ae6e60ce6d', containerID: '59a49ac4b65af643fd0481c6'});
    } else {
        var newName2 = Game.spawns['Spawn12'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W62N38', target: 'W62N37', sourceID: '57ef9cd886f108ae6e60ce6d', containerID: '59a49ac4b65af643fd0481c6'});
        }
    } else if (conTransTwoRM1.length < 1){
        if(Game.spawns['Spawn1'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn1'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'conTranTwo', home: 'W62N38', target: 'W62N37', containerID: '59a49ac4b65af643fd0481c6', deposit: '5965755d87ea8e12499eaefe'});
    } else {
        var newName2 = Game.spawns['Spawn12'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'conTranTwo', home: 'W62N38', target: 'W62N37', containerID: '59a49ac4b65af643fd0481c6', deposit: '5965755d87ea8e12499eaefe'});
        }
    } else if (claimers.length < 1 && flg1.memory.RES6237 < 3000){
        if(Game.spawns['Spawn1'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn1'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W62N38', target: 'W62N37'});
    } else {
        var newName2 = Game.spawns['Spawn12'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W62N38', target: 'W62N37'});
        }
    } else if (labNukeTrans.length < 1){
        if(Game.spawns['Spawn1'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn1'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'labNukeTran', home: 'W62N38'});
    } else {
        var newName2 = Game.spawns['Spawn12'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'labNukeTran', home: 'W62N38'});
        }
    } else if (minMinersRM1.length < 1 && min1.ticksToRegeneration == undefined){
        if(Game.spawns['Spawn1'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'minMiner', home: 'W62N38'});
    } else {
        var newName1 = Game.spawns['Spawn12'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'minMiner', home: 'W62N38'});
        }
    } else if (wallRepairersRM1.length < 0){
        if(Game.spawns['Spawn1'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'wallRepairer', home: 'W62N38', target: '0'});
    } else {
        var newName1 = Game.spawns['Spawn12'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'wallRepairer', home: 'W62N38', target: '0'});
        }
    }
    
    
    

    // Room 2 spawning activites
    if (collectorsTwoRM2.length < 1){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '57ef9cd786f108ae6e60ce64', target:'W62N39', containerID: '594b0be72ebe216c02095d25', depositID: '596f132940ee304fac42d24b'});
        } else{
        var newName2 = Game.spawns['Spawn21'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '57ef9cd786f108ae6e60ce64', target:'W62N39', containerID: '594b0be72ebe216c02095d25', depositID: '596f132940ee304fac42d24b'});
        }
    } else if (collectorsTwoRM21.length < 1){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '57ef9cd786f108ae6e60ce65', target:'W62N39', containerID: '594b1df3dd7f393da485dc7a', depositID: '59ad634bfb26160aae2a282a'});
        } else{
        var newName2 = Game.spawns['Spawn21'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '57ef9cd786f108ae6e60ce65', target:'W62N39', containerID: '594b1df3dd7f393da485dc7a', depositID: '59ad634bfb26160aae2a282a'});    
        }
    } else if (busRM2.length < 1){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'bus', sourceID: '0', target: 'W62N39'});
    } else {
        var newName1 = Game.spawns['Spawn21'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'bus', sourceID: '0', target: 'W62N39'});
        }
    } else if (busesTowersRM2.length < 1){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'busTower', sourceID: '0', target: 'W62N39'});
    } else {
        var newName1 = Game.spawns['Spawn21'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'busTower', sourceID: '0', target: 'W62N39'});
        }
    } else if (sweepsRM2.length < 1){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'sweep', sourceID: '0', target: 'W62N39'});
    } else {
        var newName1 = Game.spawns['Spawn21'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'sweep', sourceID: '0', target: 'W62N39'});
        }
    } else if (upgradersRM2.length < 1){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', sourceID: '0', target: 'W62N39', bstLab: '0', boosted: '1'});
    } else {
        var newName1 = Game.spawns['Spawn21'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', sourceID: '0', target: 'W62N39', bstLab: '0', boosted: '1'});
        }
    } else if (buildersRM2.length < 0){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', sourceID: '0', target: 'W62N39'});
    } else {
        var newName1 = Game.spawns['Spawn21'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', sourceID: '0', target: 'W62N39'});
        }
    } else if (defendersRM2.length < 1 && invFlg6339.memory.hostiles == true){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W62N39', target: 'W63N39', working: false, farBuilder: 'yes'});
    } else {
        var newName1 = Game.spawns['Spawn21'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W62N39', target: 'W63N39', working: false, farBuilder: 'yes'});
        }
    } else if (farMinersTwoRM2.length < 1){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W62N39', target: 'W63N39', sourceID: '57ef9cc286f108ae6e60cc9d', containerID: '59a469b12d2aa2606fe20d97'});
    } else {
        var newName1 = Game.spawns['Spawn21'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W62N39', target: 'W63N39', sourceID: '57ef9cc286f108ae6e60cc9d', containerID: '59a469b12d2aa2606fe20d97'});
        }
    } else if (conTransTwoRM2.length < 1){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W62N39', target: 'W63N39', containerID: '59a469b12d2aa2606fe20d97', deposit: '5954877d6d1e9153274d25d9'});
    } else {
        var newName1 = Game.spawns['Spawn21'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W62N39', target: 'W63N39', containerID: '59a469b12d2aa2606fe20d97', deposit: '5954877d6d1e9153274d25d9'});
        }
    } else if (defendersRM22.length < 1 && invFlg6338.memory.hostiles == true){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W62N39', target: 'W63N38', working: false, farBuilder: 'yes'});
    } else {
        var newName1 = Game.spawns['Spawn21'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W62N39', target: 'W63N38', working: false, farBuilder: 'yes'});
        }
    } else if (farMinersTwoRM22.length < 1){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W62N39', target: 'W63N38', sourceID: '57ef9cc286f108ae6e60cca0', containerID: '59a46ca3bbf8450c23e5ff4e'});
    } else {
        var newName1 = Game.spawns['Spawn21'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W62N39', target: 'W63N38', sourceID: '57ef9cc286f108ae6e60cca0', containerID: '59a46ca3bbf8450c23e5ff4e'});
        }
    } else if (conTransTwoRM22.length < 1){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W62N39', target: 'W63N38', containerID: '59a46ca3bbf8450c23e5ff4e', deposit: '595ac12cbe708765b52eabe1'});
    } else {
        var newName1 = Game.spawns['Spawn21'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W62N39', target: 'W63N38', containerID: '59a46ca3bbf8450c23e5ff4e', deposit: '595ac12cbe708765b52eabe1'});
        }
    } else if (claimersRM2.length < 1 && flg1.memory.RES6339 < 3000){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W62N39', target: 'W63N39'});
    } else {
        var newName1 = Game.spawns['Spawn21'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W62N39', target: 'W63N39'});
        }
    } else if (claimersRM22.length < 1 && flg1.memory.RES6338 < 3000){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W62N39', target: 'W63N38'});
    } else {
        var newName1 = Game.spawns['Spawn21'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W62N39', target: 'W63N38'});
        }
    } else if (minMinersRM2.length < 1 && min2.ticksToRegeneration == undefined){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'minMiner', home: 'W62N39'});
    } else {
        var newName1 = Game.spawns['Spawn21'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'minMiner', home: 'W62N39'});
        }
    } else if (linkDisersRM2.length < 0) {
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'linker', home: 'W62N39'});
    } else {
        var newName2 = Game.spawns['Spawn21'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'linker', home: 'W62N39'});
        }
    } else if (labNukeTransRM2.length < 1){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'labNukeTran', home: 'W62N39'});
    } else {
        var newName2 = Game.spawns['Spawn21'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'labNukeTran', home: 'W62N39'});
        }
    } else if (pwrAttackerRM2.length < 0){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK], undefined, {role: 'pwrAttacker', home: 'W62N39', target: 'W62N40', pwrID: '59ed3758d776223087871f04'});
    } else if(Game.spawns['Spawn21'].canCreateCreep() != ERR_BUSY) {
        var newName = Game.spawns['Spawn21'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK], undefined, {role: 'pwrAttacker', home: 'W62N39', target: 'W62N40', pwrID: '59ed3758d776223087871f04'});
        } else{
        var newName = Game.spawns['Spawn22'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK], undefined, {role: 'pwrAttacker', home: 'W62N39', target: 'W62N40', pwrID: '59ed3758d776223087871f04'});
        }
    } else if (pwrHealerRM2.length < 0){
        if(Game.spawns['Spawn2'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn2'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL], undefined, {role: 'pwrHealer', home: 'W62N39', target: 'W62N40', pwrID: '59ed3758d776223087871f04'});
    } else if(Game.spawns['Spawn21'].canCreateCreep() != ERR_BUSY) {
        var newName = Game.spawns['Spawn21'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL], undefined, {role: 'pwrHealer', home: 'W62N39', target: 'W62N40', pwrID: '59ed3758d776223087871f04'});
        } else{
        var newName = Game.spawns['Spawn22'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL], undefined, {role: 'pwrHealer', home: 'W62N39', target: 'W62N40', pwrID: '59ed3758d776223087871f04'});
        }
    }
  
  
  // RM3 Spawning Activities.
    if (collectorsTwoRM31.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '579fa8750700be0674d2da41', target:'W57N37', containerID: '595dd218b82aa8768c187121', depositID: '59eebf5d820bc62ff69d78df'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '579fa8750700be0674d2da41', target:'W57N37', containerID: '595dd218b82aa8768c187121', depositID: '59eebf5d820bc62ff69d78df'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '579fa8750700be0674d2da41', target:'W57N37', containerID: '595dd218b82aa8768c187121', depositID: '59eebf5d820bc62ff69d78df'});
        }
    } else if (collectorsTwoRM3.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '579fa8750700be0674d2da42', target:'W57N37', containerID: '59953406c009eb4713e6a171', depositID: '5965904698188537b0c44ec5'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '579fa8750700be0674d2da42', target:'W57N37', containerID: '59953406c009eb4713e6a171', depositID: '5965904698188537b0c44ec5'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '579fa8750700be0674d2da42', target:'W57N37', containerID: '59953406c009eb4713e6a171', depositID: '5965904698188537b0c44ec5'});
        }
    } else if (busRM3.length < 1){
        if(Game.spawns['Spawn3'].room.energyAvailable > 3000){
            if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
                var newName = Game.spawns['Spawn3'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'bus', sourceID: '0', target: 'W57N37'});
            } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
                var newName = Game.spawns['Spawn31'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'bus', sourceID: '0', target: 'W57N37'});
            } else{
                var newName = Game.spawns['Spawn32'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'bus', sourceID: '0', target: 'W57N37'});
                }        
        } else if(Game.spawns['Spawn3'].room.energyAvailable < 3000){
            if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
                var newName = Game.spawns['Spawn3'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'bus', sourceID: '0', target: 'W57N37'});
            } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
                var newName = Game.spawns['Spawn31'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'bus', sourceID: '0', target: 'W57N37'});
            } else{
                var newName = Game.spawns['Spawn32'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'bus', sourceID: '0', target: 'W57N37'});
                }
        } else{
            if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
                var newName = Game.spawns['Spawn3'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'bus', sourceID: '0', target: 'W57N37'});
            } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
                var newName = Game.spawns['Spawn31'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'bus', sourceID: '0', target: 'W57N37'});
            } else{
                var newName = Game.spawns['Spawn32'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'bus', sourceID: '0', target: 'W57N37'});
                }
        }
       
    } else if (busesTowersRM3.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'busTower', sourceID: '0', target: 'W57N37'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'busTower', sourceID: '0', target: 'W57N37'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'busTower', sourceID: '0', target: 'W57N37'});
        }
    } else if (sweepsRM3.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'sweep', sourceID: '0', target: 'W57N37'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'sweep', sourceID: '0', target: 'W57N37'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'sweep', sourceID: '0', target: 'W57N37'});
        }
    } else if (buildersRM3.length < 0){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', sourceID: '0', target: 'W57N37', working: false});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', sourceID: '0', target: 'W57N37', working: false});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', sourceID: '0', target: 'W57N37', working: false});
        }
    } else if (upgradersRM3.length < 1) {
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', target: 'W57N37', bstLab: '0', boosted: '1'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', target: 'W57N37', bstLab: '0', boosted: '1'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', target: 'W57N37', bstLab: '0', boosted: '1'});
        }
    } else if (defendersRM3.length < 1 && invFlg5736.memory.hostiles == true){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W57N37', target: 'W57N36', working: false, farBuilder: 'yes'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W57N37', target: 'W57N36', working: false, farBuilder: 'yes'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W57N37', target: 'W57N36', working: false, farBuilder: 'yes'});
        }
    } else if (farMinersTwoRM32.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W57N36', sourceID: '579fa8750700be0674d2da44', containerID: '59f52aa6e2d04f0f991b2164'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W57N36', sourceID: '579fa8750700be0674d2da44', containerID: '59f52aa6e2d04f0f991b2164'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W57N36', sourceID: '579fa8750700be0674d2da44', containerID: '59f52aa6e2d04f0f991b2164'});
        }
    } else if (conTransTwoRM31.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W57N36', containerID: '59f52aa6e2d04f0f991b2164', deposit: '596159a622491078e05327cf'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W57N36', containerID: '59f52aa6e2d04f0f991b2164', deposit: '596159a622491078e05327cf'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W57N36', containerID: '59f52aa6e2d04f0f991b2164', deposit: '596159a622491078e05327cf'});
        }
    } else if (defendersRM31.length < 1 && invFlg5738.memory.hostiles == true){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W57N37', target: 'W57N38', working: false, farBuilder: 'yes'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W57N37', target: 'W57N38', working: false, farBuilder: 'yes'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W57N37', target: 'W57N38', working: false, farBuilder: 'yes'});
        }
    } else if (farMinersTwoRM33.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W57N38', sourceID: '579fa8750700be0674d2da3e', containerID: '59f279795cacab1ac8c4fee2'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W57N38', sourceID: '579fa8750700be0674d2da3e', containerID: '59f279795cacab1ac8c4fee2'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W57N38', sourceID: '579fa8750700be0674d2da3e', containerID: '59f279795cacab1ac8c4fee2'});
        }
    } else if (conTransTwoRM32.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W57N38', containerID: '59f279795cacab1ac8c4fee2', deposit: '597bc02b527d4e07fd68190a'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W57N38', containerID: '59f279795cacab1ac8c4fee2', deposit: '597bc02b527d4e07fd68190a'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W57N38', containerID: '59f279795cacab1ac8c4fee2', deposit: '597bc02b527d4e07fd68190a'});
        }
    } else if (defendersRM32.length < 1 && invFlg5637.memory.hostiles == true){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W57N37', target: 'W56N37', working: false, farBuilder: 'yes'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W57N37', target: 'W56N37', working: false, farBuilder: 'yes'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W57N37', target: 'W56N37', working: false, farBuilder: 'yes'});
        }
    } else if (farMinersTwoRM34.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W58N37', sourceID: '579fa8650700be0674d2d8bd', containerID: '59f27793e6a8cc1d9d42fbb5'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W58N37', sourceID: '579fa8650700be0674d2d8bd', containerID: '59f27793e6a8cc1d9d42fbb5'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W58N37', sourceID: '579fa8650700be0674d2d8bd', containerID: '59f27793e6a8cc1d9d42fbb5'});
        }
    } else if (conTransTwoRM33.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W58N37', containerID: '59f27793e6a8cc1d9d42fbb5', deposit: '596159a622491078e05327cf'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W58N37', containerID: '59f27793e6a8cc1d9d42fbb5', deposit: '596159a622491078e05327cf'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W58N37', containerID: '59f27793e6a8cc1d9d42fbb5', deposit: '596159a622491078e05327cf'});
        }
    } else if (defendersRM33.length < 1 && invFlg5837.memory.hostiles == true){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W57N37', target: 'W58N37', working: false, farBuilder: 'yes'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W57N37', target: 'W58N37', working: false, farBuilder: 'yes'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W57N37', target: 'W58N37', working: false, farBuilder: 'yes'});
        }
    } else if (farMinersTwoRM35.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N37', sourceID: '579fa8840700be0674d2dbea', containerID: '59f278bd05d7a725de95124f'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N37', sourceID: '579fa8840700be0674d2dbea', containerID: '59f278bd05d7a725de95124f'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N37', sourceID: '579fa8840700be0674d2dbea', containerID: '59f278bd05d7a725de95124f'});
        }
    } else if (conTransTwoRM34.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N37', containerID: '59f278bd05d7a725de95124f', deposit: '596159a622491078e05327cf'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N37', containerID: '59f278bd05d7a725de95124f', deposit: '596159a622491078e05327cf'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N37', containerID: '59f278bd05d7a725de95124f', deposit: '596159a622491078e05327cf'});
        }
    } else if (farMinersTwoRM36.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W57N36', sourceID: '579fa8750700be0674d2da46', containerID: '59f3c18b3d60f632fb9e7729'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W57N36', sourceID: '579fa8750700be0674d2da46', containerID: '59f3c18b3d60f632fb9e7729'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W57N36', sourceID: '579fa8750700be0674d2da46', containerID: '59f3c18b3d60f632fb9e7729'});
        }
    } else if (conTransTwoRM35.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W57N36', containerID: '59f3c18b3d60f632fb9e7729', deposit: '59c4447ba5080c4de4edc4fc'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W57N36', containerID: '59f3c18b3d60f632fb9e7729', deposit: '59c4447ba5080c4de4edc4fc'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W57N36', containerID: '59f3c18b3d60f632fb9e7729', deposit: '59c4447ba5080c4de4edc4fc'});
        }
    } else if (claimersRM3.length < 1 && flg1.memory.RES5736 < 3000){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W57N37', target: 'W57N36'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W57N37', target: 'W57N36'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W57N37', target: 'W57N36'});
        }
    } else if (claimersRM31.length < 1 && flg1.memory.RES5738 < 3000){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W57N37', target: 'W57N38'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W57N37', target: 'W57N38'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W57N37', target: 'W57N38'});
        }
    } else if (claimersRM32.length < 1 && flg1.memory.RES5837 < 3000){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W57N37', target: 'W58N37'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W57N37', target: 'W58N37'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W57N37', target: 'W58N37'});
        }
    } else if (claimersRM33.length < 1 && flg1.memory.RES5637 < 3000){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W57N37', target: 'W56N37'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W57N37', target: 'W56N37'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W57N37', target: 'W56N37'});
        }
    } else if (minMinersRM3.length < 1 && min3.ticksToRegeneration == undefined){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'minMiner', home: 'W57N37'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'minMiner', home: 'W57N37'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'minMiner', home: 'W57N37'});
        }
    } else if (labNukeTransRM3.length < 1 && storeRM3.store[RESOURCE_ENERGY] > 250000){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'labNukeTran', home: 'W57N37'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'labNukeTran', home: 'W57N37'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'labNukeTran', home: 'W57N37'});
        }
    } else if (wallRepairersRM3.length < 0){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'wallRepairer', home: 'W57N37', target: '0'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'wallRepairer', home: 'W57N37', target: '0'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'wallRepairer', home: 'W57N37', target: '0'});
        }
    } else if (defendersRM36.length < 1 && invFlg5638.memory.hostiles == true){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W57N37', target: 'W56N38', working: false, farBuilder: 'yes'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W57N37', target: 'W56N38', working: false, farBuilder: 'yes'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W57N37', target: 'W56N38', working: false, farBuilder: 'yes'});
        }
    } else if (farMinersTwoRM37.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N38', sourceID: '579fa8840700be0674d2dbe6', containerID: '59f3d542c76935721c59bf5d'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N38', sourceID: '579fa8840700be0674d2dbe6', containerID: '59f3d542c76935721c59bf5d'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N38', sourceID: '579fa8840700be0674d2dbe6', containerID: '59f3d542c76935721c59bf5d'});
        }
    } else if (conTransTwoRM36.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N38', containerID: '59f3d542c76935721c59bf5d', deposit: '597bc02b527d4e07fd68190a'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N38', containerID: '59f3d542c76935721c59bf5d', deposit: '597bc02b527d4e07fd68190a'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N38', containerID: '59f3d542c76935721c59bf5d', deposit: '597bc02b527d4e07fd68190a'});
        }
    } else if (farMinersTwoRM38.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N38', sourceID: '579fa8840700be0674d2dbe7', containerID: '59f3df2d5fa6b509dbb969ec'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N38', sourceID: '579fa8840700be0674d2dbe7', containerID: '59f3df2d5fa6b509dbb969ec'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N38', sourceID: '579fa8840700be0674d2dbe7', containerID: '59f3df2d5fa6b509dbb969ec'});
        }
    } else if (conTransTwoRM37.length < 1){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N38', containerID: '59f3df2d5fa6b509dbb969ec', deposit: '597bc02b527d4e07fd68190a'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N38', containerID: '59f3df2d5fa6b509dbb969ec', deposit: '597bc02b527d4e07fd68190a'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N38', containerID: '59f3df2d5fa6b509dbb969ec', deposit: '597bc02b527d4e07fd68190a'});
        }
    } else if (claimersRM34.length < 1 && flg1.memory.RES5638 < 3000){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W57N37', target: 'W56N38'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W57N37', target: 'W56N38'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W57N37', target: 'W56N38'});
        }
    } else if (sDefRM3.length < 0){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,HEAL,HEAL,HEAL,HEAL], undefined, {role: 'sDef', home: 'W57N37', target: 'W56N36', bstLab: '59a5eb7072fd6a799d9f8ff7', boosted: '0'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,HEAL,HEAL,HEAL,HEAL], undefined, {role: 'sDef', home: 'W57N37', target: 'W56N36', bstLab: '59a5eb7072fd6a799d9f8ff7', boosted: '0'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,HEAL,HEAL,HEAL,HEAL], undefined, {role: 'sDef', home: 'W57N37', target: 'W56N36', bstLab: '59a5eb7072fd6a799d9f8ff7', boosted: '0'});
        }
    } else if (minMinersRM31.length < 0){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE,WORK,MOVE,WORK,MOVE,WORK,MOVE,WORK,MOVE], undefined, {role: 'minMiner', home: 'W57N37', target: 'W56N36', minID: '579fab9d43bc207b0c99a0c5'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE,WORK,MOVE,WORK,MOVE,WORK,MOVE,WORK,MOVE], undefined, {role: 'minMiner', home: 'W57N37', target: 'W56N36', minID: '579fab9d43bc207b0c99a0c5'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE,WORK,MOVE,WORK,MOVE,WORK,MOVE,WORK,MOVE], undefined, {role: 'minMiner', home: 'W57N37', target: 'W56N36', minID: '579fab9d43bc207b0c99a0c5'});
        }
    } else if (farMinersTwoRM39.length < 0){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N36', sourceID: '579fa8840700be0674d2dbee', containerID: '59f3d3e9e999fb5d672bf268'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N36', sourceID: '579fa8840700be0674d2dbee', containerID: '59f3d3e9e999fb5d672bf268'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N36', sourceID: '579fa8840700be0674d2dbee', containerID: '59f3d3e9e999fb5d672bf268'});
        }
    } else if (conTransTwoRM38.length < 0){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N36', containerID: '59f3d3e9e999fb5d672bf268', deposit: '59c4447ba5080c4de4edc4fc'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N36', containerID: '59f3d3e9e999fb5d672bf268', deposit: '59c4447ba5080c4de4edc4fc'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N36', containerID: '59f3d3e9e999fb5d672bf268', deposit: '59c4447ba5080c4de4edc4fc'});
        }
    } else if (farBuilderRM3.length < 0){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', home: 'W57N37', target: 'W56N36'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName7 = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', home: 'W57N37', target: 'W56N36'});
        } else{
        var newName7 = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', home: 'W57N37', target: 'W56N36'});
        }
    } else if (farMinersTwoRM310.length < 0){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N36', sourceID: '579fa8840700be0674d2dbf1', containerID: '59f3e2b8cee32660e68e1843'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N36', sourceID: '579fa8840700be0674d2dbf1', containerID: '59f3e2b8cee32660e68e1843'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N36', sourceID: '579fa8840700be0674d2dbf1', containerID: '59f3e2b8cee32660e68e1843'});
        }
    } else if (conTransTwoRM39.length < 0){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N36', containerID: '59f3e2b8cee32660e68e1843', deposit: '596159a622491078e05327cf'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N36', containerID: '59f3e2b8cee32660e68e1843', deposit: '596159a622491078e05327cf'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N36', containerID: '59f3e2b8cee32660e68e1843', deposit: '596159a622491078e05327cf'});
        }
    } else if (farMinersTwoRM311.length < 0){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N36', sourceID: '579fa8840700be0674d2dbf2', containerID: '59f3f63ee15e76052350739a'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N36', sourceID: '579fa8840700be0674d2dbf2', containerID: '59f3f63ee15e76052350739a'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W57N37', target: 'W56N36', sourceID: '579fa8840700be0674d2dbf2', containerID: '59f3f63ee15e76052350739a'});
        }
    } else if (conTransTwoRM310.length < 0){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N36', containerID: '59f3f63ee15e76052350739a', deposit: '596159a622491078e05327cf'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn31'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N36', containerID: '59f3f63ee15e76052350739a', deposit: '596159a622491078e05327cf'});
        } else{
        var newName = Game.spawns['Spawn32'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W57N37', target: 'W56N36', containerID: '59f3f63ee15e76052350739a', deposit: '596159a622491078e05327cf'});
        }
    } else if (farBuilderRM3.length < 0){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', home: 'W57N37', target: 'W57N36'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName7 = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', home: 'W57N37', target: 'W57N36'});
        } else{
        var newName7 = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', home: 'W57N37', target: 'W57N36'});
        }
    } else if (farBuilderRM33.length < 0){
        if(Game.spawns['Spawn3'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn3'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', home: 'W57N37', target: 'W56N38'});
    } else if(Game.spawns['Spawn31'].canCreateCreep() != ERR_BUSY){
        var newName7 = Game.spawns['Spawn31'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', home: 'W57N37', target: 'W56N38'});
        } else{
        var newName7 = Game.spawns['Spawn32'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', home: 'W57N37', target: 'W56N38'});
        }
    }
    

    // Room 4 Spawning Activities
    if (collectorsTwoRM4.length < 1){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '57ef9c4586f108ae6e60bf8d', target:'W69N39', containerID: '596dac318e1cba7b4806a812', depositID: '5975c13d8b909a78b9477862'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '57ef9c4586f108ae6e60bf8d', target:'W69N39', containerID: '596dac318e1cba7b4806a812', depositID: '5975c13d8b909a78b9477862'});
        }
    }  else if (collectorsTwoRM41.length < 1){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '57ef9c4586f108ae6e60bf8e', target:'W69N39', containerID: '596d946cf77b3d0843a80a7b', depositID: '59bb12a1c32c8f3b538c341b'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '57ef9c4586f108ae6e60bf8e', target:'W69N39', containerID: '596d946cf77b3d0843a80a7b', depositID: '59bb12a1c32c8f3b538c341b'});
        }
    } else if (busRM4.length < 1){
        //CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'bus', sourceID: '0', target: 'W69N39'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'bus', sourceID: '0', target: 'W69N39'});
        }
    } else if (busesTowersRM4.length < 1){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'busTower', target: 'W69N39'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'busTower', target: 'W69N39'});
        }
    } else if (upgradersRM4.length < 1){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', home: 'W69N39', target: 'W69N39', working: false, bstLab: '0', boosted: '1'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', home: 'W69N39', target: 'W69N39', working: false, bstLab: '0', boosted: '1'});
        }
    } else if (sweepsRM4.length < 1){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'sweep', sourceID: '0', target: 'W69N39'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'sweep', sourceID: '0', target: 'W69N39'});
        }
    } else if (buildersRM4.length < 0){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', sourceID: '0', target: 'W69N39', working: false});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', sourceID: '0', target: 'W69N39', working: false});
        }
    } else if (defendersRM4.length < 1 && invFlg6839.memory.hostiles == true){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W69N39', target: 'W68N39', working: false, farBuilder: 'yes'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W69N39', target: 'W68N39', working: false, farBuilder: 'yes'});
        }
    } else if (defendersRM41.length < 1 && invFlg6938.memory.hostiles == true){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W69N39', target: 'W69N38', working: false, farBuilder: 'yes'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W69N39', target: 'W69N38', working: false, farBuilder: 'yes'});
        }
    } else if (farMinersTwoRM42.length < 1){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W69N39', target: 'W68N39', sourceID: '57ef9c5a86f108ae6e60c151', containerID: '59a4690eba10c92008a4901a'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W69N39', target: 'W68N39', sourceID: '57ef9c5a86f108ae6e60c151', containerID: '59a4690eba10c92008a4901a'});
        }
    } else if (conTransTwoRM4.length < 1){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W69N39', target: 'W68N39', containerID: '59a4690eba10c92008a4901a', deposit: '597e992563b9375f3babc5eb'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W69N39', target: 'W68N39', containerID: '59a4690eba10c92008a4901a', deposit: '597e992563b9375f3babc5eb'});
        }
    } else if (claimersRM4.length < 1 && flg1.memory.RES6839 < 3000){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W69N39', target: 'W68N39'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W69N39', target: 'W68N39'});
        }
    } else if (farMinersTwoRM43.length < 1){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W69N39', target: 'W68N39', sourceID: '57ef9c5a86f108ae6e60c150', containerID: '59c3553eb69b434ebfc16639'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W69N39', target: 'W68N39', sourceID: '57ef9c5a86f108ae6e60c150', containerID: '59c3553eb69b434ebfc16639'});
        }
    } else if (conTransTwoRM41.length < 1){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W69N39', target: 'W68N39', containerID: '59c3553eb69b434ebfc16639', deposit: '597e992563b9375f3babc5eb'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W69N39', target: 'W68N39', containerID: '59c3553eb69b434ebfc16639', deposit: '597e992563b9375f3babc5eb'});
        }
    } else if (farMinersTwoRM44.length < 1){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W69N39', target: 'W69N38', sourceID: '57ef9c4586f108ae6e60bf90', containerID: '59a469b1384656283332cdaa'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W69N39', target: 'W69N38', sourceID: '57ef9c4586f108ae6e60bf90', containerID: '59a469b1384656283332cdaa'});
        }
    } else if (conTransTwoRM42.length < 1){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W69N39', target: 'W69N38', containerID: '59a469b1384656283332cdaa', deposit: '598e9b0f38743b46c2e1f7e3'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W69N39', target: 'W69N38', containerID: '59a469b1384656283332cdaa', deposit: '598e9b0f38743b46c2e1f7e3'});
        }
    } else if (claimersRM41.length < 1 && flg1.memory.RES6938 < 3000){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W69N39', target: 'W69N38'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W69N39', target: 'W69N38'});
        }
    } else if (minMinersRM4.length < 1 && min4.ticksToRegeneration == undefined){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'minMiner', home: 'W69N39'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'minMiner', home: 'W69N39'});
        }
    } else if (labNukeTransRM4.length < 1){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'labNukeTran', home: 'W69N39'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'labNukeTran', home: 'W69N39'});
        }
    } else if (wallRepairersRM4.length < 0){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'wallRepairer', home: 'W69N39', target: '0'});
    } else {
        var newName1 = Game.spawns['Spawn41'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'wallRepairer', home: 'W69N39', target: '0'});
        }
    } else if (farMinersTwoRM45.length < 1){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W69N39', target: 'W67N39', sourceID: '57ef9c6f86f108ae6e60c314', containerID: '59c585d794ccb0735220fafd'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W69N39', target: 'W67N39', sourceID: '57ef9c6f86f108ae6e60c314', containerID: '59c585d794ccb0735220fafd'});
        }
    } else if (conTransTwoRM43.length < 1){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W69N39', target: 'W67N39', containerID: '59c585d794ccb0735220fafd', deposit: '597e992563b9375f3babc5eb'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W69N39', target: 'W67N39', containerID: '59c585d794ccb0735220fafd', deposit: '597e992563b9375f3babc5eb'});
        }
    } else if (farMinersTwoRM46.length < 1){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W69N39', target: 'W67N39', sourceID: '57ef9c6f86f108ae6e60c315', containerID: '59c59c643e9a6a4f0dfa659b'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W69N39', target: 'W67N39', sourceID: '57ef9c6f86f108ae6e60c315', containerID: '59c59c643e9a6a4f0dfa659b'});
        }
    } else if (conTransTwoRM44.length < 1){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W69N39', target: 'W67N39', containerID: '59c59c643e9a6a4f0dfa659b', deposit: '597e992563b9375f3babc5eb'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W69N39', target: 'W67N39', containerID: '59c59c643e9a6a4f0dfa659b', deposit: '597e992563b9375f3babc5eb'});
        }
    } else if (claimersRM42.length < 1 && flg1.memory.RES6739 < 3000){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W69N39', target: 'W67N39'});
    } else {
        var newName2 = Game.spawns['Spawn41'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W69N39', target: 'W67N39'});
        }
    } else if (farBuilderRM4.length < 0){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', target: 'W70N34', home: 'W69N39'});
    } else if(Game.spawns['Spawn41'].canCreateCreep() != ERR_BUSY) {
        var newName6 = Game.spawns['Spawn41'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', target: 'W70N34', home: 'W69N39'});
        } else{
        var newName6 = Game.spawns['Spawn42'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', target: 'W70N34', home: 'W69N39'});
        }
    } else if (farUpgraderRM4.length < 0){
        if(Game.spawns['Spawn4'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn4'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farUpgrader', target: 'W70N34', home: 'W69N39'});
    } else if(Game.spawns['Spawn41'].canCreateCreep() != ERR_BUSY) {
        var newName6 = Game.spawns['Spawn41'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farUpgrader', target: 'W70N34', home: 'W69N39'});
        } else{
        var newName6 = Game.spawns['Spawn42'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farUpgrader', target: 'W70N34', home: 'W69N39'});
        }
    }

    
    
    

    // Room 5 Spawning Activities
    if (collectorsTwoRM5.length < 1){
        if(Game.spawns['Spawn5'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn5'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '57ef9c9786f108ae6e60c7b9', target:'W65N37', containerID: '597f978617a9796ff99b0fcc', depositID: '59dd7a9cab4ffd7b2b61c55a'});
        } else{
        var newName5 = Game.spawns['Spawn51'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '57ef9c9786f108ae6e60c7b9', target:'W65N37', containerID: '597f978617a9796ff99b0fcc', depositID: '59dd7a9cab4ffd7b2b61c55a'});
        }
    } else if (busRM5.length < 1){
        if(Game.spawns['Spawn5'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn5'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'bus', sourceID: '0', target: 'W65N37'});
        } else{
        var newName5 = Game.spawns['Spawn51'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'bus', sourceID: '0', target: 'W65N37'});
        }
    } else if (busesTowersRM5.length < 1){
        if(Game.spawns['Spawn5'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn5'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'busTower', target: 'W65N37'});
        } else{
        var newName5 = Game.spawns['Spawn51'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'busTower', target: 'W65N37'});
        }
    } else if (upgradersRM5.length < 1){
        if(Game.spawns['Spawn5'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn5'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', home: 'W65N37', target: 'W65N37', working: false, bstLab: '59ba241209681957cc689c55', boosted: '1'});
        } else{
        var newName5 = Game.spawns['Spawn51'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', home: 'W65N37', target: 'W65N37', working: false, bstLab: '59ba241209681957cc689c55', boosted: '1'});
        }
    } else if (sweepsRM5.length < 1){
        if(Game.spawns['Spawn5'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn5'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'sweep', sourceID: '0', target: 'W65N37'});
        } else{
        var newName5 = Game.spawns['Spawn51'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'sweep', sourceID: '0', target: 'W65N37'});
        }
    } else if (buildersRM5.length < 0){
        if(Game.spawns['Spawn5'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn5'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', sourceID: '0', target: 'W65N37', working: false});
        } else{
        var newName5 = Game.spawns['Spawn51'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', sourceID: '0', target: 'W65N37', working: false});
        }
    } else if (defendersRM5.length < 1 && invFlg6637.memory.hostiles == true){
        if(Game.spawns['Spawn5'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn5'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W65N37', target: 'W66N37', working: false, farBuilder: 'yes'});
        } else{
        var newName5 = Game.spawns['Spawn51'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W65N37', target: 'W66N37', working: false, farBuilder: 'yes'});
        }
    } else if (farMinersTwoRM52.length < 1){
        if(Game.spawns['Spawn5'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn5'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W65N37', target: 'W66N37', sourceID: '57ef9c8486f108ae6e60c512', containerID: '59a46a011796087a683777b1'});
        } else{
        var newName5 = Game.spawns['Spawn51'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W65N37', target: 'W66N37', sourceID: '57ef9c8486f108ae6e60c512', containerID: '59a46a011796087a683777b1'});
        }
    } else if (conTransTwoRM51.length < 1){
        if(Game.spawns['Spawn5'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn5'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W65N37', target: 'W66N37', containerID: '59a46a011796087a683777b1', deposit: '59990319bb56b5609d0464da'});
        } else{
        var newName5 = Game.spawns['Spawn51'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W65N37', target: 'W66N37', containerID: '59a46a011796087a683777b1', deposit: '59990319bb56b5609d0464da'});
        }
    } else if (claimersRM5.length < 1 && flg1.memory.RES6637 < 3000){
        if(Game.spawns['Spawn5'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn5'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W65N37', target: 'W66N37'});
        } else{
        var newName5 = Game.spawns['Spawn51'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W65N37', target: 'W66N37'});
        }
    } else if (defendersRM52.length < 1 && invFlg6538.memory.hostiles == true){
        if(Game.spawns['Spawn5'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn5'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W65N37', target: 'W65N38', working: false, farBuilder: 'yes'});
        } else{
        var newName5 = Game.spawns['Spawn51'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W65N37', target: 'W65N38', working: false, farBuilder: 'yes'});
        }
    } else if (farMinersTwoRM51.length < 1){
        if(Game.spawns['Spawn5'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn5'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W65N37', target: 'W65N38', sourceID: '57ef9c9786f108ae6e60c7b6', containerID: '59a46c809424810b3265b664'});
        } else{
        var newName5 = Game.spawns['Spawn51'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W65N37', target: 'W65N38', sourceID: '57ef9c9786f108ae6e60c7b6', containerID: '59a46c809424810b3265b664'});
        }
    } else if (conTransTwoRM5.length < 1){
        if(Game.spawns['Spawn5'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn5'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W65N37', target: 'W65N38', containerID: '59a46c809424810b3265b664', deposit: '598ac3b0218b8e2857a3e9f9'});
        } else{
        var newName5 = Game.spawns['Spawn51'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W65N37', target: 'W65N38', containerID: '59a46c809424810b3265b664', deposit: '598ac3b0218b8e2857a3e9f9'});
        }
    } else if (claimersRM51.length < 1 && flg1.memory.RES6538 < 3000){
        if(Game.spawns['Spawn5'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn5'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W65N37', target: 'W65N38'});
        } else{
        var newName5 = Game.spawns['Spawn51'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W65N37', target: 'W65N38'});
        }
    } else if (minMinersRM5.length < 1 && min5.ticksToRegeneration == undefined){
        if(Game.spawns['Spawn5'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn5'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'minMiner', home: 'W65N37'});
        } else{
        var newName5 = Game.spawns['Spawn51'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'minMiner', home: 'W65N37'});
        }
    } else if (labNukeTransRM5.length < 0){
        if(Game.spawns['Spawn5'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn5'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'labNukeTran', home: 'W65N37'});
    } else {
        var newName2 = Game.spawns['Spawn51'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'labNukeTran', home: 'W65N37'});
        }
    }
    
    
    
    // RM6 Spawning activities
    if (collectorsTwoRM6.length < 1){
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '5836b6d48b8b9619519ef6ee', target:'W73N36', containerID: '5993b32576035a514a873dc5', depositID: '59b5595a79b06656136323a2'});
        } else{
        var newName6 = Game.spawns['Spawn61'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '5836b6d48b8b9619519ef6ee', target:'W73N36', containerID: '5993b32576035a514a873dc5', depositID: '59b5595a79b06656136323a2'});
        }
    } else if (collectorsTwoRM61.length < 1){
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '5836b6d48b8b9619519ef6f0', target:'W73N36', containerID: '5992c5cf917b71701ddcb31a', depositID: '59b5a2b1b5e86c17b516aa9e'});
        } else{
        var newName6 = Game.spawns['Spawn61'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '5836b6d48b8b9619519ef6f0', target:'W73N36', containerID: '5992c5cf917b71701ddcb31a', depositID: '59b5a2b1b5e86c17b516aa9e'});    
        }
    } else if (busRM6.length < 1){
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'bus', target: 'W73N36'});
        } else{
        var newName6 = Game.spawns['Spawn61'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'bus', target: 'W73N36'});
        }
    } else if (linkDisersRM6.length < 1) {
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'linker', home: 'W73N36'});
    } else {
        var newName6 = Game.spawns['Spawn61'].createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'linker', home: 'W73N36'});
        }
    } else if (busesTowersRM6.length < 1) {
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'busTower', target: 'W73N36'});
    } else {
        var newName6 = Game.spawns['Spawn61'].createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'busTower', target: 'W73N36'});
        }
    } else if (upgradersRM6.length < 1) {
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', home: 'W73N36', target: 'W73N36', working: false, bstLab: '59a23110f42c613feaf33191', boosted: '0'});
    } else {
        var newName6 = Game.spawns['Spawn61'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', home: 'W73N36', target: 'W73N36', working: false, bstLab: '59a23110f42c613feaf33191', boosted: '0'});
        }
    } else if (buildersRM6.length < 0) {
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', sourceID: '0', target: 'W73N36', working: false});
    } else {
        var newName6 = Game.spawns['Spawn61'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', sourceID: '0', target: 'W73N36', working: false});
        }
    } else if (defendersRM6.length < 1 && invFlg7335.memory.hostiles == true) {
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W73N36', target: 'W73N35', working: false, farBuilder: 'yes'});
    } else {
        var newName6 = Game.spawns['Spawn61'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W73N36', target: 'W73N35', working: false, farBuilder: 'yes'});
        }
    } else if (farMinersTwoRM6.length < 1) {
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W73N36', target: 'W73N35', containerID: '59a4644ead493a63f53674c3', sourceID: '5836b6d48b8b9619519ef6f2'});
    } else {
        var newName6 = Game.spawns['Spawn61'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W73N36', target: 'W73N35', containerID: '59a4644ead493a63f53674c3', sourceID: '5836b6d48b8b9619519ef6f2'});
        }
    } else if (farMinersTwoRM61.length < 1) {
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W73N36', target: 'W73N35', containerID: '59be962882b37a02a08bb67c', sourceID: '5836b6d48b8b9619519ef6f3'});
    } else {
        var newName6 = Game.spawns['Spawn61'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W73N36', target: 'W73N35', containerID: '59be962882b37a02a08bb67c', sourceID: '5836b6d48b8b9619519ef6f3'});
        }
    } else if (conTransTwoRM6.length < 1) {
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W73N36', target: 'W73N35', containerID: '59a4644ead493a63f53674c3', deposit: '59d3d06ba7719f7d59225af3'});
    } else {
        var newName6 = Game.spawns['Spawn61'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W73N36', target: 'W73N35', containerID: '59a4644ead493a63f53674c3', deposit: '59d3d06ba7719f7d59225af3'});
        }
    } else if (conTransTwoRM61.length < 1) {
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W73N36', target: 'W73N35', containerID: '59be962882b37a02a08bb67c', deposit: '59d3d06ba7719f7d59225af3'});
    } else {
        var newName6 = Game.spawns['Spawn61'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W73N36', target: 'W73N35', containerID: '59be962882b37a02a08bb67c', deposit: '59d3d06ba7719f7d59225af3'});
        }
    } else if (claimersRM6.length < 1 && flg1.memory.RES7335 < 3000) {
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W73N36', target: 'W73N35'});
    } else {
        var newName6 = Game.spawns['Spawn61'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W73N36', target: 'W73N35'});
        }
    } else if (defendersRM61.length < 1 && invFlg7337.memory.hostiles == true) {
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W73N36', target: 'W73N37', working: false, farBuilder: 'yes'});
    } else {
        var newName6 = Game.spawns['Spawn61'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W73N36', target: 'W73N37', working: false, farBuilder: 'yes'});
        }
    } else if (farMinersTwoRM62.length < 1) {
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W73N36', target: 'W73N37', containerID: '59cc48dd74d9605546c33cba', sourceID: '5836b6d38b8b9619519ef6eb'});
    } else {
        var newName6 = Game.spawns['Spawn61'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W73N36', target: 'W73N37', containerID: '59cc48dd74d9605546c33cba', sourceID: '5836b6d38b8b9619519ef6eb'});
        }
    } else if (conTransTwoRM62.length < 1) {
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W73N36', target: 'W73N37', containerID: '59cc48dd74d9605546c33cba', deposit: '59d3c76a5465b0070585437d'});
    } else {
        var newName6 = Game.spawns['Spawn61'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W73N36', target: 'W73N37', containerID: '59cc48dd74d9605546c33cba', deposit: '59d3c76a5465b0070585437d'});
        }
    } else if (claimersRM61.length < 1) {
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([CLAIM,CLAIM,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'claimer', home: 'W73N36', target: 'W73N37'});
    } else {
        var newName6 = Game.spawns['Spawn61'].createCreep([CLAIM,CLAIM,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'claimer', home: 'W73N36', target: 'W73N37'});
        }
    } else if (minMinersRM6.length < 1 && min6.ticksToRegeneration == undefined) {
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'minMiner', home: 'W73N36'});
    } else {
        var newName6 = Game.spawns['Spawn61'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'minMiner', home: 'W73N36'});
        }
    } else if (labNukeTransRM6.length < 1){
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'labNukeTran', home: 'W73N36'});
    } else {
        var newName6 = Game.spawns['Spawn61'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'labNukeTran', home: 'W73N36'});
        }
    } else if (farBuilderRM6.length < 2){
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', target: 'W72N32', home: 'W73N36'});
    } else if(Game.spawns['Spawn61'].canCreateCreep() != ERR_BUSY) {
        var newName6 = Game.spawns['Spawn61'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', target: 'W72N32', home: 'W73N36'});
        } else{
        var newName6 = Game.spawns['Spawn62'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', target: 'W72N32', home: 'W73N36'});
        }
    } else if (farUpgraderRM6.length < 2){
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farUpgrader', target: 'W72N32', home: 'W73N36'});
    } else if(Game.spawns['Spawn61'].canCreateCreep() != ERR_BUSY) {
        var newName6 = Game.spawns['Spawn61'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farUpgrader', target: 'W72N32', home: 'W73N36'});
        } else{
        var newName6 = Game.spawns['Spawn62'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farUpgrader', target: 'W72N32', home: 'W73N36'});
        }
    } else if (columbusRM6.length < 0){
        if(Game.spawns['Spawn6'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn6'].createCreep([CLAIM,MOVE,MOVE,MOVE], undefined, {role: 'columbus', target: 'W72N32', home: 'W73N36'});
    } else if(Game.spawns['Spawn61'].canCreateCreep() != ERR_BUSY) {
        var newName6 = Game.spawns['Spawn61'].createCreep([CLAIM,MOVE,MOVE,MOVE], undefined, {role: 'columbus', target: 'W72N32', home: 'W73N36'});
        } else{
        var newName6 = Game.spawns['Spawn62'].createCreep([CLAIM,MOVE,MOVE,MOVE], undefined, {role: 'columbus', target: 'W72N32', home: 'W73N36'});
        }
    }
    
    
    var busesTowersRM7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'busTower' && creep.memory.home == 'W53N38');
    var busesRM7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'bus' && creep.memory.home == 'W53N38');
    var collectorsTwoRM7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'collectorTwo' && creep.memory.sourceID == '579fa8b40700be0674d2e281' && creep.memory.target == 'W53N38');
    var collectorsTwoRM71 = _.filter(Game.creeps, (creep) => creep.memory.role == 'collectorTwo' && creep.memory.sourceID == '579fa8b40700be0674d2e283' && creep.memory.target == 'W53N38');
    var farMinersTwoRM72 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.sourceID == '579fa8a50700be0674d2e050');
    var farMinersTwoRM73 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.sourceID == '579fa8a50700be0674d2e051');
    var farMinersTwoRM74 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.sourceID == '579fa8b40700be0674d2e285');
    var farMinersTwoRM75 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.sourceID == '579fa8b40700be0674d2e286');
    var farMinersTwoRM76 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.sourceID == '579fa8a50700be0674d2e055');
    var farMinersTwoRM77 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farMinerTwo' && creep.memory.sourceID == '579fa8a50700be0674d2e053');
    var upgradersRM7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.home == 'W53N38');
    var buildersRM7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.home == 'W53N38');
    var conTransTwoRM7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.containerID == '59c96cd1833dd147b1d094a7');
    var conTransTwoRM71 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.containerID == '59c96392c3721e3606d6f0e1');
    var conTransTwoRM72 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.containerID == '59e549c754c518662e3058d4');
    var conTransTwoRM73 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.containerID == '59e561eb6b81aa2d49e13648');
    var conTransTwoRM74 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.containerID == '59e6bdc51deb6b258b6a01ca');
    var conTransTwoRM75 = _.filter(Game.creeps, (creep) => creep.memory.role == 'conTranTwo' && creep.memory.containerID == '5a038665d1858b6f963d61f7');
    var claimersRM7  = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W54N38');
    var claimersRM71  = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W53N37');
    var claimersRM72  = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W54N37');
    var claimersRM73  = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer' && creep.memory.target == 'W55N37');
    var sweepRM7  = _.filter(Game.creeps, (creep) => creep.memory.role == 'sweep' && creep.memory.home == 'W53N38');
    var defendersRM7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W54N38');
    var defendersRM71 = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W54N37');
    var defendersRM72 = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender' && creep.memory.target == 'W53N37');
    var farBuilderRM7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'farBuilder' && creep.memory.target == 'W54N38');
    var labNukeTransRM7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'labNukeTran' && creep.memory.home == 'W53N38');
    var minMinersRM7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'minMiner' && creep.memory.home == 'W53N38');
    // Room 7 spawning 
    
    
    
    
    if (collectorsTwoRM7.length < 1){
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '579fa8b40700be0674d2e281', target:'W53N38', containerID: '59c793ba01f08b691554a94c', depositID: '59ded5698fbf0d0496cc4485'});
        } else {
        var newName7 = Game.spawns['Spawn71'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '579fa8b40700be0674d2e281', target:'W53N38', containerID: '59c793ba01f08b691554a94c', depositID: '59ded5698fbf0d0496cc4485'});
        }
    } else if (collectorsTwoRM71.length < 1){
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '579fa8b40700be0674d2e283', target:'W53N38', containerID: '59c7a753f00029500df7c643', depositID: '59ded2bdffe7317693e4adb7'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '579fa8b40700be0674d2e283', target:'W53N38', containerID: '59c7a753f00029500df7c643', depositID: '59ded2bdffe7317693e4adb7'});
        }
    } else if (busesRM7.length < 1){
        if(Game.spawns['Spawn7'].room.energyAvailable > 3000){
            if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
                var newName = Game.spawns['Spawn7'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'bus', home: 'W53N38'});
            } else {
                var newName7 = Game.spawns['Spawn71'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'bus', home: 'W53N38'});
            }        
        } else if(Game.spawns['Spawn7'].room.energyAvailable < 400){
            if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
                var newName = Game.spawns['Spawn7'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'bus', home: 'W53N38'});
            } else {
                var newName7 = Game.spawns['Spawn71'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'bus', home: 'W53N38'});
            }
        } else {
            if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
                var newName = Game.spawns['Spawn7'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'bus', home: 'W53N38'});
            } else {
                var newName7 = Game.spawns['Spawn71'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'bus', home: 'W53N38'});
            }
        }
    } else if (busesTowersRM7.length < 1){
        if(Game.spawns['Spawn7'].room.energyAvailable > 3000){
            if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'busTower', home: 'W53N38'});
            } else {
        var newName = Game.spawns['Spawn7'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'busTower', home: 'W53N38'});
            }        
        } else if(Game.spawns['Spawn7'].room.energyAvailable < 400){
            if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([CARRY,CARRY,MOVE,MOVE,CARRY,MOVE], undefined, {role: 'busTower', home: 'W53N38'});
            } else {
        var newName = Game.spawns['Spawn7'].createCreep([CARRY,CARRY,MOVE,MOVE,CARRY,MOVE], undefined, {role: 'busTower', home: 'W53N38'});
            }
        } else {
            if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'busTower', home: 'W53N38'});
            } else {
        var newName = Game.spawns['Spawn7'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'busTower', home: 'W53N38'});
            }
        }
    } else if (sweepRM7.length < 1){
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,CARRY,MOVE], undefined, {role: 'sweep', home: 'W53N38'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,CARRY,MOVE], undefined, {role: 'sweep', home: 'W53N38'});
        }
    } else if (upgradersRM7.length < 1) {
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', home: 'W53N38', target: 'W53N38', working: false, bstLab: '59d5285503606977a110c8f7', boosted: '1'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', home: 'W53N38', target: 'W53N38', working: false, bstLab: '59d5285503606977a110c8f7', boosted: '1'});
        }
    } else if (buildersRM7.length < 0) {
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', home: 'W53N38', target: 'W53N38', working: false, bstLab: '0', boosted: '0'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'builder', home: 'W53N38', target: 'W53N38', working: false, bstLab: '0', boosted: '0'});
        }
    } else if (defendersRM7.length < 1 && invFlg5438.memory.hostiles == true){
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W62N38', target: 'W54N38', working: false, farBuilder: 'yes'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W62N38', target: 'W54N38', working: false, farBuilder: 'yes'});
        }
    } else if (farMinersTwoRM72.length < 1){
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W53N38', target: 'W54N38', sourceID: '579fa8a50700be0674d2e050', containerID: '59c96cd1833dd147b1d094a7'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W53N38', target: 'W54N38', sourceID: '579fa8a50700be0674d2e050', containerID: '59c96cd1833dd147b1d094a7'});
        }
    } else if (farMinersTwoRM73.length < 1){
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W53N38', target: 'W54N38', sourceID: '579fa8a50700be0674d2e051', containerID: '59c96392c3721e3606d6f0e1'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W53N38', target: 'W54N38', sourceID: '579fa8a50700be0674d2e051', containerID: '59c96392c3721e3606d6f0e1'});
        }
    } else if (conTransTwoRM7.length < 1) {
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W53N38', target: 'W54N38', containerID: '59c96cd1833dd147b1d094a7', deposit: '59cdb70dcddb6a0754e8345e'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W53N38', target: 'W54N38', containerID: '59c96cd1833dd147b1d094a7', deposit: '59cdb70dcddb6a0754e8345e'});
        }
    } else if (conTransTwoRM71.length < 1) {
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W53N38', target: 'W54N38', containerID: '59c96392c3721e3606d6f0e1', deposit: '59cdb70dcddb6a0754e8345e'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W53N38', target: 'W54N38', containerID: '59c96392c3721e3606d6f0e1', deposit: '59cdb70dcddb6a0754e8345e'});
        }
    } else if (claimersRM7.length < 1 && flg1.memory.RES5438 < 3000) {
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W53N38', target: 'W54N38'});
        }else{
        var newName7 = Game.spawns['Spawn71'].createCreep([CLAIM,CLAIM,MOVE,MOVE], undefined, {role: 'claimer', home: 'W53N38', target: 'W54N38'});
        }
    } else if (minMinersRM7.length < 1 && min7.ticksToRegeneration == undefined){
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'minMiner', home: 'W53N38'});
    } else {
        var newName7 = Game.spawns['Spawn71'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'minMiner', home: 'W53N38'});
        }
    } else if (labNukeTransRM7.length < 1){
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'labNukeTran', home: 'W53N38'});
    } else {
        var newName7 = Game.spawns['Spawn71'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'labNukeTran', home: 'W53N38'});
        }
    } else if (defendersRM72.length < 0 && invFlg5337.memory.hostiles == true){
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W62N38', target: 'W53N37', working: false, farBuilder: 'yes'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W62N38', target: 'W53N37', working: false, farBuilder: 'yes'});
        }
    } else if (claimersRM71.length < 1 && flg1.memory.RES5337 < 3000) {
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([CLAIM,CLAIM,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'claimer', home: 'W53N38', target: 'W53N37'});
    } else {
        var newName6 = Game.spawns['Spawn71'].createCreep([CLAIM,CLAIM,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'claimer', home: 'W53N38', target: 'W53N37'});
        }
    } else if (farBuilderRM7.length < 0){
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', home: 'W53N38', target: 'W54N38'});
    } else {
        var newName7 = Game.spawns['Spawn71'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', home: 'W53N38', target: 'W54N38'});
        }
    } else if (farMinersTwoRM74.length < 1){
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W53N38', target: 'W53N37', sourceID: '579fa8b40700be0674d2e285', containerID: '59e549c754c518662e3058d4'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W53N38', target: 'W53N37', sourceID: '579fa8b40700be0674d2e285', containerID: '59e549c754c518662e3058d4'});
        }
    } else if (conTransTwoRM72.length < 1) {
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W53N38', target: 'W53N37', containerID: '59e549c754c518662e3058d4', deposit: '59ecb966cb0d283b7d1bb0bf'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W53N38', target: 'W53N37', containerID: '59e549c754c518662e3058d4', deposit: '59ecb966cb0d283b7d1bb0bf'});
        }
    } else if (farMinersTwoRM75.length < 1){
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W53N38', target: 'W53N37', sourceID: '579fa8b40700be0674d2e286', containerID: '59e561eb6b81aa2d49e13648'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W53N38', target: 'W53N37', sourceID: '579fa8b40700be0674d2e286', containerID: '59e561eb6b81aa2d49e13648'});
        }
    } else if (conTransTwoRM73.length < 1) {
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W53N38', target: 'W53N37', containerID: '59e561eb6b81aa2d49e13648', deposit: '59ecb966cb0d283b7d1bb0bf'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W53N38', target: 'W53N37', containerID: '59e561eb6b81aa2d49e13648', deposit: '59ecb966cb0d283b7d1bb0bf'});
        }
    } else if (defendersRM71.length < 1 && invFlg5437.memory.hostiles == true){
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W62N38', target: 'W54N37', working: false, farBuilder: 'yes'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'defender', home: 'W62N38', target: 'W54N37', working: false, farBuilder: 'yes'});
        }
    }  else if (claimersRM72.length < 1 && flg1.memory.RES5437 < 3000) {
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([CLAIM,CLAIM,MOVE,MOVE,MOVE], undefined, {role: 'claimer', home: 'W53N38', target: 'W54N37'});
    } else {
        var newName6 = Game.spawns['Spawn71'].createCreep([CLAIM,CLAIM,MOVE,MOVE,MOVE], undefined, {role: 'claimer', home: 'W53N38', target: 'W54N37'});
        }
    } else if (farMinersTwoRM76.length < 1){
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W53N38', target: 'W54N37', sourceID: '579fa8a50700be0674d2e055', containerID: '59e6bdc51deb6b258b6a01ca'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W53N38', target: 'W54N37', sourceID: '579fa8a50700be0674d2e055', containerID: '59e6bdc51deb6b258b6a01ca'});
        }
    } else if (conTransTwoRM74.length < 2) {
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W53N38', target: 'W54N37', containerID: '59e6bdc51deb6b258b6a01ca', deposit: '59c9628ab2ba3d31290a82bd'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W53N38', target: 'W54N37', containerID: '59e6bdc51deb6b258b6a01ca', deposit: '59c9628ab2ba3d31290a82bd'});
        }
    } else if (farMinersTwoRM77.length < 1){
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W53N38', target: 'W54N37', sourceID: '579fa8a50700be0674d2e053', containerID: '5a038665d1858b6f963d61f7'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farMinerTwo', home: 'W53N38', target: 'W54N37', sourceID: '579fa8a50700be0674d2e053', containerID: '5a038665d1858b6f963d61f7'});
        }
    } else if (conTransTwoRM75.length < 2) {
        if(Game.spawns['Spawn7'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn7'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W53N38', target: 'W54N37', containerID: '5a038665d1858b6f963d61f7', deposit: '59c9628ab2ba3d31290a82bd'});
        } else{
        var newName7 = Game.spawns['Spawn71'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,WORK,MOVE], undefined, {role: 'conTranTwo', home: 'W53N38', target: 'W54N37', containerID: '5a038665d1858b6f963d61f7', deposit: '59c9628ab2ba3d31290a82bd'});
        }
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    */






    
    // loop to run all creeps logic
    var activeCreeps = _.filter(Game.creeps, s => s.spawning == false);
    for(var name in activeCreeps) {
        var creep = activeCreeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        } else if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        } else if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        } else if(creep.memory.role == 'bus'){
            roleBus.run(creep);
        } else if(creep.memory.role == 'collectorTwo'){
            roleCollectorTwo.run(creep);
        } else if(creep.memory.role == 'busTower'){
            roleBusTower.run(creep);
        } else if(creep.memory.role == 'conTranTwo'){
            roleConTranTwo.run(creep);
        } else if(creep.memory.role == 'claimer'){
            roleClaimer.run(creep);
        } else if(creep.memory.role == 'attacker'){
            roleAttacker.run(creep);
        } else if(creep.memory.role == 'dismantler'){
            roleDismantler.run(creep);
        } else if(creep.memory.role == 'linker'){
            roleLinkDis.run(creep);
        } else if(creep.memory.role == 'sweep'){
            roleSweep.run(creep);
        } else if(creep.memory.role == 'columbus'){
            roleColumbus.run(creep);
        } else if(creep.memory.role == 'farBuilder'){
            roleFarBuilder.run(creep);
        } else if(creep.memory.role == 'farUpgrader'){
            roleFarUpgrader.run(creep);
        } else if(creep.memory.role == 'healer'){
            roleHealer.run(creep);
        } else if(creep.memory.role == 'tank'){
            roleTank.run(creep);
        } else if(creep.memory.role == 'attacker'){
            roleAttacker.run(creep);
        } else if(creep.memory.role == 'farMiner'){
            roleFarMiner.run(creep);
        } else if(creep.memory.role == 'farMinerTwo'){
            roleFarMinerTwo.run(creep);
        } else if(creep.memory.role == 'defender'){
            roleDefender.run(creep);
        } else if(creep.memory.role == 'sDef'){
            roleSDef.run(creep);
        } else if(creep.memory.role == 'minMiner'){
            roleMinMiner.run(creep);
        } else if(creep.memory.role == 'labNukeTran'){
            roleLabNukeTran.run(creep);
        } else if(creep.memory.role == 'wallRepairer'){
            roleWallRepairer.run(creep);
        } else if(creep.memory.role == 'contAttacker'){
            roleContAttacker.run(creep);
        } else if(creep.memory.role == 'pwrAttacker'){
            rolePwrAttacker.run(creep);
        } else if(creep.memory.role == 'pwrHealer'){
            rolePwrHealer.run(creep);
        }
    }
}