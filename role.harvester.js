var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleHarvester = {
    run: function(creep) {
        if(creep.carry.energy < creep.carryCapacity) {
            var source = creep.room.find(FIND_SOURCES, { filter: (s) => s.energy > 0})
                    if(creep.harvest(source[0]) == ERR_NOT_IN_RANGE){
                        creep.moveTo(source[0]);
                    }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;}});
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            } else if(creep.carry.energy > 0){
              roleBuilder.run(creep);
            }
        }
    }
};
module.exports = roleHarvester;