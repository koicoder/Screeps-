var roleBuilder = require('role.builder');
module.exports = {
    run: function(creep) {
        if(creep.carry.energy == 0){
            var container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] >= 100 || s.structureType == STRUCTURE_STORAGE && s.store[RESOURCE_ENERGY] >= 100})
            if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(container);
        }
  }
    if(creep.carry.energy != 0){
            var ramps = creep.room.find(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_RAMPART});
            var i = 0;
            var fix = undefined;
            while(ramps.length > i){
                if(ramps[i].hits < 80000){
                    fix = ramps[i];
                    break;
                } else {
                    i = i + 1;
                }
            }
            if(creep.repair(fix) == ERR_NOT_IN_RANGE && fix != undefined){
                creep.moveTo(fix);
            } else {
                roleBuilder.run(creep);
        }
            }
        }
};