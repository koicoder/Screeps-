module.exports = {
    run: function(creep) {
        if(creep.memory.target == '0'){
            var target = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_WALL && s.hits < 5000000 || s.structureType == STRUCTURE_RAMPART && s.hits < 5000000})
            creep.memory.target = target.id;
        }
        
        if(creep.carry.energy == 0 && creep.memory.target != '0'){
            var container = creep.room.storage;
            if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(container);
            }
        } else if(creep.carry.energy != 0 && creep.memory.target != '0'){
            var target = Game.getObjectById(creep.memory.target);
            if(target.hits >= 5000000){
                creep.memory.target = '0';
            } else{
                if(creep.repair(target) == ERR_NOT_IN_RANGE){
                creep.moveTo(target);
            }
            }
        }
        }
};