var roleMinMiner = {
    run: function(creep) {
        if(creep.memory.target != undefined){
            try{
                var terminal = Game.rooms[creep.memory.home].terminal;
                const total = _.sum(creep.carry);
                minerals = Game.getObjectById(creep.memory.minID);
                if(creep.room.name != creep.memory.target && creep.carryCapacity != total){
                        var exit = creep.room.findExitTo(creep.memory.target);
                        creep.moveTo(creep.pos.findClosestByRange(exit));
                }
                if(creep.room.name == creep.memory.target && creep.carryCapacity != total){
                    var skNear = minerals.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_KEEPER_LAIR && s.ticksToSpawn <= 15 && s.pos.getRangeTo(minerals) < 10});
                    var fallFlag = Game.flags.fallBackFlag7436;
                    var skNearTgt = minerals.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: (s) => s.pos.getRangeTo(minerals) < 10});
    
                    if(skNear != undefined || skNearTgt != undefined){
                        if(creep.pos.getRangeTo(skNear) < 5 || creep.pos.getRangeTo(skNearTgt) < 5){
                            creep.moveTo(fallFlag);
                        } else{
                            creep.say('⏱');
                            }
                    } else{
                        if(creep.harvest(minerals) == ERR_NOT_IN_RANGE && creep.carryCapacity != total) {
                            creep.moveTo(minerals);
                        }
                    }
                } else if(creep.room.name != creep.memory.home && creep.carryCapacity == total || creep.room.name == creep.memory.home && creep.carryCapacity == total){
                    if(creep.transfer(terminal, RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE && creep.carryCapacity == total){
                        creep.moveTo(terminal);
                    }
                }
                
            }catch(e){
                console.log('Error is: '+e)
            }
        }else{
        var terminal = creep.room.terminal;
        var minerals = creep.room.find(FIND_MINERALS);
            if(creep.room.name == 'W62N39'){
                minerals = Game.getObjectById('57efa006195b160f02c74e59');
            } else if(creep.room.name == 'W69N39'){
                minerals = Game.getObjectById('57efa003195b160f02c74b65');
            } else if(creep.room.name == 'W65N37'){
                minerals = Game.getObjectById('57efa005195b160f02c74d2c');
            } else if(creep.room.name == 'W73N36'){
                minerals = Game.getObjectById('5836baa6090e0ab576fdd089');
            } else if(creep.room.name == 'W62N38'){
                minerals = Game.getObjectById('57efa006195b160f02c74e5a');
            } else if(creep.room.name == 'W57N37'){
                minerals = Game.getObjectById('579fab82b1f02a3b0cfefe36');
            } else if(creep.room.name == 'W53N38'){
                minerals = Game.getObjectById('579fab83b1f02a3b0cfeff79');
            }
        const total = _.sum(creep.carry);
            if(creep.harvest(minerals) == ERR_NOT_IN_RANGE && creep.carryCapacity != total) {
                creep.moveTo(minerals);
            }else{
                if(creep.transfer(terminal, minerals.mineralType) == ERR_NOT_IN_RANGE && creep.carryCapacity == total){
                    creep.moveTo(terminal);
                }
            }
            }
        }
    };
module.exports = roleMinMiner;