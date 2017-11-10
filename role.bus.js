var roleBus = {
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
            var deposit = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (s) => { return (s.structureType == STRUCTURE_EXTENSION || s.structureType == STRUCTURE_SPAWN) && s.energy < s.energyCapacity}})
            if(creep.transfer(deposit, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(deposit);
            }
        }
    }
};
module.exports = roleBus;