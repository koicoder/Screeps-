var roleBus = require('role.bus');
var roleBusTower = {
    run: function(creep) {
        if(creep.carry.energy == 0){
            var container = creep.room.storage;
            if(container == undefined){
                container = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] >= 100})
            }
            if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(container);
            }
        } else {
            var targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_TOWER) && structure.energy < 500;}});
            var targets2 = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;}});
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }else if(targets2.length > 0){
                if(creep.transfer(targets2[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets2[0]);
                }
            } else{
                    roleBus.run(creep);
                }
        }
    }
};
module.exports = roleBusTower; 