var roleBuilder = require('role.builder');

var roleRepairer = {
    run: function(creep) {
        
        if(creep.carry.energy == 0){
            var container = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] >= 100 || s.structureType == STRUCTURE_STORAGE && s.store[RESOURCE_ENERGY] >= 100})
            if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(container);
        }
  }
    if(creep.carry.energy != 0){
            var structure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART
            });
            if (structure != undefined) {
                if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
            }
            else {
                 roleBuilder.run(creep);
            }
        }
    }
};
module.exports = roleRepairer;