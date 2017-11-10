var roleFarBuilder = require('role.farBuilder');
var roleSDef = {
    run: function(creep) {
        if(creep.room.name != creep.memory.target){
            var exit = creep.room.findExitTo(creep.memory.target)
            creep.moveTo(creep.pos.findClosestByRange(exit));
        }
        
        var target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(target == undefined){
                target = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_KEEPER_LAIR && s.ticksToSpawn <= 85});;
            }
        if(creep.hits < creep.hitsMax && creep.pos.getRangeTo(target) > 5){
            creep.moveTo(target);
            creep.heal(creep);
        } else{
            if(creep.room.name == creep.memory.target){
            if(target != undefined){
                if(creep.attack(target) == ERR_NOT_IN_RANGE){
                creep.moveTo(target);
                }
            } else{
                var nextKeeper = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_KEEPER_LAIR && s.ticksToSpawn <= 75});
                if(nextKeeper != undefined){
                    creep.moveTo(nextKeeper);
                }
            }
            }
        }
        if(target == undefined && creep.hits < creep.hitsMax){
            creep.heal(creep);
        }
        if(creep.memory.boosted == 0){
        var lab = Game.getObjectById(creep.memory.bstLab);
        if(creep.pos.getRangeTo(lab) > 1){
            creep.moveTo(lab)
        } else{
            creep.memory.boosted = 1;
        }
    }
    }
};
module.exports = roleSDef;