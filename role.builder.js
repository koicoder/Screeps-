var roleUpgrader = require('role.upgrader');
var roleBuilder = {
    run: function(creep) {
        if(creep.carry.energy == 0){
            var container = creep.room.storage;
            if(container == undefined){
                container = creep.pos.findClosestByRange(FIND_STRUCTURES, { filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] >= 100})
            }
            if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(container);
            }
        }
        if(creep.carry.energy != 0){
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                if(targets.length > 0) {
                    if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0]);
                    }
                }else{
                    roleUpgrader.run(creep);
                }
        }
    }
};

module.exports = roleBuilder;