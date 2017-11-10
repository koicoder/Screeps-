var roleUpgrader = {
    run: function(creep) {
        
    
    if(creep.carry.energy <= 25){
            var container = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_LINK && s.energy > 100 || s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] >= 200 || s.structureType == STRUCTURE_STORAGE && s.store[RESOURCE_ENERGY] >= 200})
            if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(container);
        }
  }
    if(creep.carry.energy != 0){
        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller);
        }
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
module.exports = roleUpgrader;