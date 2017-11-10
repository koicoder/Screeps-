var roleBusTower = require('role.busTower');
var roleLabNukeTran = {
    run: function(creep) {
        
        
        var deposit = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
            filter: (s) => { return (s.structureType == STRUCTURE_NUKER || s.structureType == STRUCTURE_LAB) && s.energy < 500}})
        var container = creep.room.storage;
        var lLab38 = Game.getObjectById('599f6727dabd0e662b6c971d');
        var uLab38 = Game.getObjectById('599ed323368e7807ef116243');
        var kLab38 = Game.getObjectById('599e995ad0c5ab5e52e0696f');
        var zLab38 = Game.getObjectById('599f19328741635f808a52f7');
        var gLab38 = Game.getObjectById('599c2c883d80a003f6a7f7cd');
        var gLab382 = Game.getObjectById('599da3478223bb209a6f9a12');
        var terminal = creep.room.terminal;
        const total = _.sum(creep.carry);
        if(creep.ticksToLive < 100 && total == 0){
            creep.suicide();
        }
        
        
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
        /*
        Next room is going to be 6939
        */
        if(creep.room.name == 'W69N39'){
        try{
            nuke = Game.getObjectById('59bc65e1cfb2927fc31566bc');
            
            if(nuke.ghodium < 5000){
                if(total == 0){
                if(creep.withdraw(terminal, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                    creep.moveTo(terminal);
                }
                }
                if(creep.carry[RESOURCE_GHODIUM] > 0){
                    if(creep.transfer(nuke, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                        creep.moveTo(nuke);
                    }
                }
            } else if(nuke.energy < nuke.energyCapacity){
                if(total == 0){
                if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(container);
                }
                }
                if(creep.carry[RESOURCE_ENERGY] > 0){
                    if(creep.transfer(nuke, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(nuke);
                    }
                }
            } else{
                if(total == 0 && terminal.store[RESOURCE_ENERGY] < 150000){
                    if(creep.carry.energy == 0){
                        if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.moveTo(container)
                        }
                    }
                    
                }
                 if(creep.carry.energy > 0){
                        if(creep.transfer(terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.moveTo(terminal);
                        }
                    }
               // creep.say('⏱');
        }
        }
        catch(e){
            console.log('Out of Minerals in Term  Error:   ' + e)
        }
        }
        
        /*
        Next Room is W73N36
        */
        if(creep.room.name == 'W73N36'){
            nuke = Game.getObjectById('59d45461a795cc03eb9e5c44');
            if(nuke.ghodium < 5000){
                if(total == 0){
                if(creep.withdraw(terminal, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                    creep.moveTo(terminal);
                }
                }
                if(creep.carry[RESOURCE_GHODIUM] > 0){
                    if(creep.transfer(nuke, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                        creep.moveTo(nuke);
                    }
                }
            } else if(nuke.energy < nuke.energyCapacity){
                if(total == 0){
                if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(container);
                }
                }
                if(creep.carry[RESOURCE_ENERGY] > 0){
                    if(creep.transfer(nuke, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(nuke);
                    }
                }
            } else{
                if(total == 0 && terminal.store[RESOURCE_ENERGY] < 150000){
                    if(creep.carry.energy == 0){
                        if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.moveTo(container)
                        }
                    }
                    
                }
                 if(creep.carry.energy > 0){
                        if(creep.transfer(terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.moveTo(terminal);
                        }
                    }
               // creep.say('⏱');
/*
            var boostLab = Game.getObjectById('59a23110f42c613feaf33191');
            var boostLab2 = Game.getObjectById('59b600b56b4a4f7d6ceaebba');
            
            if(creep.carry[RESOURCE_GHODIUM_ACID] == undefined && boostLab.mineralAmount < 1000 && terminal.store[RESOURCE_GHODIUM_ACID] > 0){
            if(creep.withdraw(terminal, RESOURCE_GHODIUM_ACID) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        } else if(creep.carry.energy == 0 && boostLab.energy < 1000){
            if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(container);
            }
        } else if(creep.carry[RESOURCE_LEMERGIUM_OXIDE] == undefined && boostLab2.mineralAmount < 1000 && terminal.store[RESOURCE_LEMERGIUM_OXIDE] > 0){
            if(creep.withdraw(terminal, RESOURCE_LEMERGIUM_OXIDE) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        } else if(creep.carry.energy == 0 && boostLab2.energy < 1000){
            if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(container);
            }
        }
        
        
        
        
        if(creep.carry[RESOURCE_GHODIUM_ACID] > 0){
            if(creep.transfer(boostLab, RESOURCE_GHODIUM_ACID) == ERR_NOT_IN_RANGE){
                creep.moveTo(boostLab);
            }
        } else if(creep.carry[RESOURCE_ENERGY] > 0 && boostLab.energy < 1000){
            if(creep.transfer(boostLab, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(boostLab);
            }
        } else if(creep.carry[RESOURCE_LEMERGIUM_OXIDE] > 0){
            if(creep.transfer(boostLab2, RESOURCE_LEMERGIUM_OXIDE) == ERR_NOT_IN_RANGE){
                creep.moveTo(boostLab2);
            }
        } else if(creep.carry[RESOURCE_ENERGY] > 0){
            if(creep.transfer(boostLab2, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(boostLab2);
            }
        }
            */
            
            }
        }
        
        /*
        Next Room is Going to be W65N37
        */
        if(creep.room.name == 'W65N37'){
            
            var boostLab = Game.getObjectById('59ba241209681957cc689c55');

            if(creep.carry[RESOURCE_GHODIUM_ACID] == undefined && boostLab.mineralAmount < 1000 && terminal.store[RESOURCE_GHODIUM_ACID] > 0){
            if(creep.withdraw(terminal, RESOURCE_GHODIUM_ACID) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        } else if(creep.carry.energy == 0 && boostLab.energy < 1000){
            if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(container);
            }
        }
        
        
        
        
        if(creep.carry[RESOURCE_GHODIUM_ACID] > 0){
            if(creep.transfer(boostLab, RESOURCE_GHODIUM_ACID) == ERR_NOT_IN_RANGE){
                creep.moveTo(boostLab);
            }
        } else if(creep.carry[RESOURCE_ENERGY] > 0 && boostLab.energy < 1000){
            if(creep.transfer(boostLab, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(boostLab);
            }
        }
        }
        /*
        Next Room is going to be W53N38
        */
        if(creep.room.name == 'W53N38'){
            nuke = Game.getObjectById('59ed917c464ded723b4953b2');
            if(nuke.ghodium < 5000){
                if(total == 0){
                if(creep.withdraw(terminal, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                    creep.moveTo(terminal);
                }
                }
                if(creep.carry[RESOURCE_GHODIUM] > 0){
                    if(creep.transfer(nuke, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                        creep.moveTo(nuke);
                    }
                }
            } else if(nuke.energy < nuke.energyCapacity){
                if(total == 0){
                if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(container);
                }
                }
                if(creep.carry[RESOURCE_ENERGY] > 0){
                    if(creep.transfer(nuke, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(nuke);
                    }
                }
            }  else{
            var gohoLab = Game.getObjectById('59d62874323e0348208bcc64');
            var cataLab = Game.getObjectById('59e04cce0ab84515a1fc3273');
            var boostLab = Game.getObjectById('59d5285503606977a110c8f7');
            
        if(creep.carry[RESOURCE_GHODIUM_ACID] == undefined && gohoLab.mineralAmount < 1500 && terminal.store[RESOURCE_GHODIUM_ACID] > 0){
            if(creep.withdraw(terminal, RESOURCE_GHODIUM_ACID,1500) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            } else if(creep.withdraw(terminal, RESOURCE_GHODIUM_ACID,1500) == ERR_NOT_ENOUGH_RESOURCES){
                creep.withdraw(terminal, RESOURCE_GHODIUM_ACID);
            }
        } else if(creep.carry[RESOURCE_CATALYST] == undefined && cataLab.mineralAmount < 1500 && terminal.store[RESOURCE_CATALYST] > 0){
            if(creep.withdraw(terminal, RESOURCE_CATALYST, 1500) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            } else if(creep.withdraw(terminal, RESOURCE_CATALYST,1500) == ERR_NOT_ENOUGH_RESOURCES){
                creep.withdraw(terminal, RESOURCE_CATALYST);
            }
        } else if(creep.carry.energy == 0 && boostLab.energy < 1000){
            if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(container);
            }
        } else if(creep.carry[RESOURCE_CATALYZED_GHODIUM_ACID] == undefined){
            var getCatGoho = _.filter(Game.structures, (s) => s.structureType == STRUCTURE_LAB && s.room.name == 'W53N38' && s.mineralAmount > 500 && s.mineralType == RESOURCE_CATALYZED_GHODIUM_ACID);
            if(getCatGoho != undefined){
                if(creep.withdraw(getCatGoho[0], RESOURCE_CATALYZED_GHODIUM_ACID) == ERR_NOT_IN_RANGE){
                creep.moveTo(getCatGoho[0]);
                }
            }
        }
        
        if(creep.carry[RESOURCE_GHODIUM_ACID] > 0){
            if(creep.transfer(gohoLab, RESOURCE_GHODIUM_ACID) == ERR_NOT_IN_RANGE){
                creep.moveTo(gohoLab);
            }
        } else if(creep.carry[RESOURCE_CATALYST] > 0){
            if(creep.transfer(cataLab, RESOURCE_CATALYST) == ERR_NOT_IN_RANGE){
                creep.moveTo(cataLab);
            }
        } else if(creep.carry[RESOURCE_ENERGY] > 0 && boostLab.energy < 1000){
            if(creep.transfer(boostLab, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(boostLab);
            }
        } else if(creep.carry[RESOURCE_CATALYZED_GHODIUM_ACID] > 0){
            if(creep.transfer(terminal, RESOURCE_CATALYZED_GHODIUM_ACID) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        }
        }
        }
        
        
        
          /*
        Next room is going to be 6238
        */
        if(creep.room.name == 'W62N38'){
        try{
            if(terminal.store[RESOURCE_ENERGY] < 110000){
            if(total == 0 && terminal.store[RESOURCE_ENERGY] < 110000){
                    if(creep.carry.energy == 0){
                        if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.moveTo(container)
                        }
                    }
                    
                }
                 if(creep.carry.energy > 0){
                        if(creep.transfer(terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.moveTo(terminal);
                        }
                    }
            }else{
        if(creep.carry[RESOURCE_LEMERGIUM] == undefined && lLab38.mineralAmount < 500 && terminal.store[RESOURCE_LEMERGIUM] > 0 && creep.room.name == 'W62N38'){
            if(creep.withdraw(terminal, RESOURCE_LEMERGIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        } else if(creep.carry[RESOURCE_UTRIUM] == undefined && uLab38.mineralAmount < 500 && terminal.store[RESOURCE_UTRIUM] > 0 && creep.room.name == 'W62N38'){
            if(creep.withdraw(terminal, RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        } else if(creep.carry[RESOURCE_KEANIUM] == undefined && kLab38.mineralAmount < 500 && terminal.store[RESOURCE_KEANIUM] > 0 && creep.room.name == 'W62N38'){
            if(creep.withdraw(terminal, RESOURCE_KEANIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        } else if(creep.carry[RESOURCE_ZYNTHIUM] == undefined && zLab38.mineralAmount < 500 && terminal.store[RESOURCE_ZYNTHIUM] > 0 && creep.room.name == 'W62N38'){
            if(creep.withdraw(terminal, RESOURCE_ZYNTHIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        }
        
        if(creep.carry[RESOURCE_LEMERGIUM] > 0 && creep.room.name == 'W62N38'){
            if(creep.transfer(lLab38, RESOURCE_LEMERGIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(lLab38);
            }
        } else if(creep.carry[RESOURCE_UTRIUM] > 0 && creep.room.name == 'W62N38'){
            if(creep.transfer(uLab38, RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(uLab38);
            }
        } else if(creep.carry[RESOURCE_KEANIUM] > 0 && creep.room.name == 'W62N38'){
            if(creep.transfer(kLab38, RESOURCE_KEANIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(kLab38);
            }
        } else if(creep.carry[RESOURCE_ZYNTHIUM] > 0 && creep.room.name == 'W62N38'){
            if(creep.transfer(zLab38, RESOURCE_ZYNTHIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(zLab38);
            }
        }
        
        var nuke = Game.getObjectById('599589888bba9046eac112ba');
        
        if(creep.carry[RESOURCE_GHODIUM] == undefined && gLab38.mineralAmount > 1000 && nuke.ghodium < 5000 && creep.room.name == 'W62N38'){
            if(creep.withdraw(gLab38, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(gLab38);
            }
        } else if(creep.carry[RESOURCE_GHODIUM] == undefined && gLab382.mineralAmount > 1000 && nuke.ghodium < 5000 && creep.room.name == 'W62N38'){
            if(creep.withdraw(gLab382, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(gLab382);
            }
        }
        
        if(creep.carry[RESOURCE_GHODIUM] > 0 && creep.room.name == 'W62N38' && nuke.ghodium < 5000){
            if(creep.transfer(nuke, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(nuke);
            }
        } else if(creep.carry[RESOURCE_GHODIUM] > 0 && creep.room.name == 'W62N38' && nuke.ghodium < 5000){
            if(creep.transfer(nuke, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(nuke);
            }
        }
        // Terminal overflow
        if(creep.carry[RESOURCE_GHODIUM] == undefined && gLab38.mineralAmount > 1000 && nuke.ghodium == 5000 && creep.room.name == 'W62N38'){
            if(creep.withdraw(gLab38, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(gLab38);
            }
        } else if(creep.carry[RESOURCE_GHODIUM] == undefined && gLab382.mineralAmount > 1000 && nuke.ghodium == 5000 && creep.room.name == 'W62N38'){
            if(creep.withdraw(gLab382, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(gLab382);
            }
        }
        
        if(creep.carry[RESOURCE_GHODIUM] > 0 && creep.room.name == 'W62N38' && nuke.ghodium == 5000){
            if(creep.transfer(terminal, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        } else if(creep.carry[RESOURCE_GHODIUM] > 0 && creep.room.name == 'W62N38' && nuke.ghodium == 5000){
            if(creep.transfer(terminal, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        }
        }
        }
        catch(e){
            console.log('Out of Minerals in Term  Error:   ' + e)
        }
        }
        /*
        Next room is going to be 6239
        */
        if(creep.room.name == 'W62N39'){
        try{
            nuke = Game.getObjectById('59ad604a3190814fd6c1ed68');
            pSpawn = Game.getObjectById('59acad7fc05b9277570902c7');
            
            if(nuke.ghodium < 5000){
                if(total == 0){
                if(creep.withdraw(terminal, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                    creep.moveTo(terminal);
                }
                }
                if(creep.carry[RESOURCE_GHODIUM] > 0){
                    if(creep.transfer(nuke, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                        creep.moveTo(nuke);
                    }
                }
            }else if(nuke.energy < nuke.energyCapacity){
                if(total == 0){
                if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(container);
                }
                }
                if(creep.carry[RESOURCE_ENERGY] > 0){
                    if(creep.transfer(nuke, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(nuke);
                    }
                }
            }else if(pSpawn.energy < pSpawn.energyCapacity){
                if(total == 0){
                if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(container);
                }
                }
                if(creep.carry[RESOURCE_ENERGY] > 0){
                    if(creep.transfer(pSpawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(pSpawn);
                    }
                }
            } else if(terminal.store[RESOURCE_ENERGY] < 150000){
                if(total == 0 && terminal.store[RESOURCE_ENERGY] < 150000){
                    if(creep.carry.energy == 0){
                        if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.moveTo(container)
                        }
                    }
                    
                }
                 if(creep.carry.energy > 0){
                        if(creep.transfer(terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.moveTo(terminal);
                        }
                    }
                    } else{
        if(creep.carry[RESOURCE_LEMERGIUM] == undefined && lLab39.mineralAmount < 500 && terminal.store[RESOURCE_LEMERGIUM] > 0){
            if(creep.withdraw(terminal, RESOURCE_LEMERGIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        } else if(creep.carry[RESOURCE_OXYGEN] == undefined && oLab39.mineralAmount < 500 && terminal.store[RESOURCE_OXYGEN] > 0){
            if(creep.withdraw(terminal, RESOURCE_OXYGEN) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        } else if(creep.carry[RESOURCE_OXYGEN] == undefined && oLab392.mineralAmount < 500 && terminal.store[RESOURCE_OXYGEN] > 0){
            if(creep.withdraw(terminal, RESOURCE_OXYGEN) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        } else if(creep.carry[RESOURCE_HYDROGEN] == undefined && hLab39.mineralAmount < 500 && terminal.store[RESOURCE_HYDROGEN] > 0){
            if(creep.withdraw(terminal, RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        }
        
        if(creep.carry[RESOURCE_LEMERGIUM] > 0){
            if(creep.transfer(lLab39, RESOURCE_LEMERGIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(lLab39);
            }
        } else if(creep.carry[RESOURCE_OXYGEN] > 0 && oLab39.mineralAmount < 500){
            if(creep.transfer(oLab39, RESOURCE_OXYGEN) == ERR_NOT_IN_RANGE){
                creep.moveTo(oLab39);
            }
        } else if(creep.carry[RESOURCE_OXYGEN] > 0){
            if(creep.transfer(oLab392, RESOURCE_OXYGEN) == ERR_NOT_IN_RANGE){
                creep.moveTo(oLab392);
            }
        } else if(creep.carry[RESOURCE_HYDROGEN] > 0){
            if(creep.transfer(hLab39, RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE){
                creep.moveTo(hLab39);
            }
        }
        
        // Terminal overflow
        if(creep.carry[RESOURCE_LEMERGIUM_OXIDE] == undefined && loLab39.mineralAmount > 1000){
            if(creep.withdraw(loLab39, RESOURCE_LEMERGIUM_OXIDE) == ERR_NOT_IN_RANGE){
                creep.moveTo(loLab39);
            }
        } else if(creep.carry[RESOURCE_LEMERGIUM_OXIDE] == undefined && loLab392.mineralAmount > 1000){
            if(creep.withdraw(loLab392, RESOURCE_LEMERGIUM_OXIDE) == ERR_NOT_IN_RANGE){
                creep.moveTo(loLab392);
            }
        } else if(creep.carry[RESOURCE_LEMERGIUM_OXIDE] == undefined && loLab393.mineralAmount > 1000){
            if(creep.withdraw(loLab393, RESOURCE_LEMERGIUM_OXIDE) == ERR_NOT_IN_RANGE){
                creep.moveTo(loLab393);
            }
        } else if(creep.carry[RESOURCE_HYDROXIDE] == undefined && hoLab39.mineralAmount > 1000){
            if(creep.withdraw(hoLab39, RESOURCE_HYDROXIDE) == ERR_NOT_IN_RANGE){
                creep.moveTo(hoLab39);
            }
        } else if(creep.carry[RESOURCE_HYDROXIDE] == undefined && hoLab391.mineralAmount > 1000){
            if(creep.withdraw(hoLab391, RESOURCE_HYDROXIDE) == ERR_NOT_IN_RANGE){
                creep.moveTo(hoLab391);
            }
        } else if(creep.carry[RESOURCE_HYDROXIDE] == undefined && hoLab392.mineralAmount > 1000){
            if(creep.withdraw(hoLab392, RESOURCE_HYDROXIDE) == ERR_NOT_IN_RANGE){
                creep.moveTo(hoLab392);
            }
        }
        
        if(creep.carry[RESOURCE_LEMERGIUM_OXIDE] > 0){
            if(creep.transfer(terminal, RESOURCE_LEMERGIUM_OXIDE) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        } else if(creep.carry[RESOURCE_HYDROXIDE] > 0){
            if(creep.transfer(terminal, RESOURCE_HYDROXIDE) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        }
        }
        }
        catch(e){
            console.log('Out of Minerals in Term  Error:   ' + e)
        }
        }
        
        /*
        Start Room W57N37
        */
        
        
        
        if(creep.room.name == 'W57N37'){
            var gLab37 = Game.getObjectById('59958bb51fa93b4f2aba5b0a');
            var hLab37 = Game.getObjectById('59956d5f15e7ad3dabb7898f');
            var ohLab37 = Game.getObjectById('59a5493ef385ac76c4673809');
            var goLab37 = Game.getObjectById('5991fb5574eb505edf149185');
            var goLab372 = Game.getObjectById('59a516468742455de323a255');
            var goLab373 = Game.getObjectById('59a585eb5aca1342fbf3b392');
            var goLab374 = Game.getObjectById('59a5eb7072fd6a799d9f8ff7');
            var go2Lab371 = Game.getObjectById('59a5672eab1d0536ceb33388');
            var go2Lab372 = Game.getObjectById('59a61f262bd5a135afdee7fa');
            var go2Lab373 = Game.getObjectById('59a5cc0a6055135ee1d1409a');
            nuke = Game.getObjectById('59a4e2cb7e4ab22d28dc8197');
            
            if(nuke.ghodium < 5000){
                if(total == 0){
                if(creep.withdraw(terminal, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                    creep.moveTo(terminal);
                }
                }
                if(creep.carry[RESOURCE_GHODIUM] > 0){
                    if(creep.transfer(nuke, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                        creep.moveTo(nuke);
                    }
                }
            } else{
                if(total == 0 && terminal.store[RESOURCE_ENERGY] < 150000){
                    if(creep.carry.energy == 0){
                        if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.moveTo(container)
                        }
                    }
                    
                }
                 if(creep.carry.energy > 0){
                        if(creep.transfer(terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.moveTo(terminal);
                        }
                    }
            var boostLab2 = Game.getObjectById('59a5eb7072fd6a799d9f8ff7');
        if(boostLab2.mineralAmount < 1000 || boostLab2.energy < 1000){
            
        if(creep.carry[RESOURCE_LEMERGIUM_OXIDE] == undefined && boostLab2.mineralAmount < 1000 && terminal.store[RESOURCE_LEMERGIUM_OXIDE] > 0){
            if(creep.withdraw(terminal, RESOURCE_LEMERGIUM_OXIDE) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        } else if(creep.carry.energy == 0 && boostLab2.energy < 1000){
            if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(container);
            }
        }
        
        if(creep.carry[RESOURCE_LEMERGIUM_OXIDE] > 0){
            if(creep.transfer(boostLab2, RESOURCE_LEMERGIUM_OXIDE) == ERR_NOT_IN_RANGE){
                creep.moveTo(boostLab2);
            }
        } else if(creep.carry[RESOURCE_ENERGY] > 0){
            if(creep.transfer(boostLab2, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(boostLab2);
            }
        }
        } else {
                
        try{
        if(creep.carry[RESOURCE_GHODIUM] == undefined && gLab37.mineralAmount < 500 && terminal.store[RESOURCE_GHODIUM] > 0){
            if(creep.withdraw(terminal, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        } else if(creep.carry[RESOURCE_HYDROGEN] == undefined && hLab37.mineralAmount < 500 && terminal.store[RESOURCE_HYDROGEN] > 0){
            if(creep.withdraw(terminal, RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        } else if(creep.carry[RESOURCE_HYDROXIDE] == undefined && ohLab37.mineralAmount < 500 && terminal.store[RESOURCE_HYDROXIDE] > 0){
            if(creep.withdraw(terminal, RESOURCE_HYDROXIDE) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        }
        
        if(creep.carry[RESOURCE_GHODIUM] > 0){
            if(creep.transfer(gLab37, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(gLab37);
            }
        } else if(creep.carry[RESOURCE_HYDROGEN] > 0){
            if(creep.transfer(hLab37, RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE){
                creep.moveTo(hLab37);
            }
        } else if(creep.carry[RESOURCE_HYDROXIDE] > 0){
            if(creep.transfer(ohLab37, RESOURCE_HYDROXIDE) == ERR_NOT_IN_RANGE){
                creep.moveTo(ohLab37);
            }
        } 
        
        // Terminal overflow
        if(creep.carry[RESOURCE_GHODIUM_ACID] == undefined && go2Lab371.mineralAmount > 1000 && total == 0){
            if(creep.withdraw(go2Lab371, RESOURCE_GHODIUM_ACID) == ERR_NOT_IN_RANGE){
                creep.moveTo(go2Lab371);
            }
        } else if(creep.carry[RESOURCE_GHODIUM_ACID] == undefined && go2Lab372.mineralAmount > 1000 && total == 0){
            if(creep.withdraw(go2Lab372, RESOURCE_GHODIUM_ACID) == ERR_NOT_IN_RANGE){
                creep.moveTo(go2Lab372);
            }
        } else if(creep.carry[RESOURCE_GHODIUM_ACID] == undefined && go2Lab373.mineralAmount > 1000 && total == 0){
            if(creep.withdraw(go2Lab373, RESOURCE_GHODIUM_ACID) == ERR_NOT_IN_RANGE){
                creep.moveTo(go2Lab373);
            }
        } else if(creep.carry[RESOURCE_GHODIUM_HYDRIDE] == undefined && goLab373.mineralAmount > 1000 && goLab37.mineralAmount < 1000 && total == 0){
            if(creep.withdraw(goLab373, RESOURCE_GHODIUM_HYDRIDE) == ERR_NOT_IN_RANGE){
                creep.moveTo(goLab373);
            }
        } else if(creep.carry[RESOURCE_GHODIUM_HYDRIDE] == undefined && goLab374.mineralAmount > 1000 && goLab372.mineralAmount < 1000 && total == 0){
            if(creep.withdraw(goLab374, RESOURCE_GHODIUM_HYDRIDE) == ERR_NOT_IN_RANGE){
                creep.moveTo(goLab374);
            }
        }
        
        if(creep.carry[RESOURCE_GHODIUM_ACID] > 0){
            if(creep.transfer(terminal, RESOURCE_GHODIUM_ACID) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        } else if(creep.carry[RESOURCE_GHODIUM_HYDRIDE] > 0){
            if(goLab37.mineralAmount < 1000){
                var transTo = goLab37;
            } else{
                var transTo = goLab372;
            }
            if(creep.transfer(transTo, RESOURCE_GHODIUM_HYDRIDE) == ERR_NOT_IN_RANGE){
                creep.moveTo(transTo);
            }
        }
        }
        catch(e){
            console.log('Out of Minerals in Term  Error:   ' + e)
        }
                
        }
            }
            
            
        }
        
        if(creep.room.name == 'W68N33'){
            var boostLab = Game.getObjectById('59fad56b1da7153fb91c39d0');
            
        if(creep.carry.energy == 0 && boostLab.energy < 1000){
            if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(container);
            }
        } else if(creep.carry[RESOURCE_CATALYZED_GHODIUM_ACID] == undefined && boostLab.mineralAmount < 1500){
            if(creep.withdraw(terminal, RESOURCE_CATALYZED_GHODIUM_ACID) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        }
        
        if(creep.carry[RESOURCE_ENERGY] > 0 && boostLab.energy < 1000){
            if(creep.transfer(boostLab, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(boostLab);
            }
        } else if(creep.carry[RESOURCE_CATALYZED_GHODIUM_ACID] > 0){
            if(creep.transfer(boostLab, RESOURCE_CATALYZED_GHODIUM_ACID) == ERR_NOT_IN_RANGE){
                creep.moveTo(boostLab);
            }
        }
        }
        if(creep.room.name == 'W76N32'){
            var boostLab = Game.getObjectById('59fc47f2f7c99f4d3f7d0e41');
            
        if(creep.carry.energy == 0 && boostLab.energy < 1000){
            if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(container);
            }
        } else if(creep.carry[RESOURCE_CATALYZED_GHODIUM_ACID] == undefined && boostLab.mineralAmount < 1500){
            if(creep.withdraw(terminal, RESOURCE_CATALYZED_GHODIUM_ACID) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
        }
        
        if(creep.carry[RESOURCE_ENERGY] > 0 && boostLab.energy < 1000){
            if(creep.transfer(boostLab, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(boostLab);
            }
        } else if(creep.carry[RESOURCE_CATALYZED_GHODIUM_ACID] > 0){
            if(creep.transfer(boostLab, RESOURCE_CATALYZED_GHODIUM_ACID) == ERR_NOT_IN_RANGE){
                creep.moveTo(boostLab);
            }
        }
        }
        /*
        if(creep.room.name != 'W62N39'){
        if(creep.carry.energy == 0 && creep.room.name != 'W62N38'){
            if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(container);
            }
        } else if(deposit != undefined && creep.room.name != 'W62N38') {
            if(creep.transfer(deposit, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(deposit);
            }
        } else{
            var term = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: (s) => s.structureType == STRUCTURE_TERMINAL && s.store[RESOURCE_ENERGY] <= 200000})
            if(term != undefined && creep.room.name != 'W62N38'){
                if(creep.transfer(term, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(term);
                }
            }
        }
        }   
        */   
            
            
        }
};
module.exports = roleLabNukeTran;