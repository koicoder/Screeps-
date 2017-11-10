module.exports = {
    run: function(creep) {
    if (creep.room.name == creep.memory.home && creep.carry.energy != 0) {
            var container = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
            filter: (s) => s.structureType == STRUCTURE_STORAGE && s.store[RESOURCE_ENERGY] < s.storeCapacity})
            if(creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(container);
            }
            }
            else if(creep.carry.energy < creep.carryCapacity) {
                var exit = creep.room.findExitTo(creep.memory.target);
                creep.moveTo(creep.pos.findClosestByRange(exit));
            } 
            if (creep.room.name == creep.memory.target && creep.carry.energy != creep.carryCapacity) {
            var dropped = creep.room.find(FIND_DROPPED_RESOURCES, RESOURCE_ENERGY);
              
     if(creep.carry.energy == 0 && dropped.length > 0){

         if(creep.pickup(dropped[0]) == ERR_NOT_IN_RANGE){
             creep.moveTo(dropped[0]);
         }
            creep.moveTo(dropped[0]);
            creep.say('SNEAKING!!');
                }
            } else if(creep.carry.energy == creep.carryCapacity && creep.room.name != creep.memory.home) {
                var exit = creep.room.findExitTo(creep.memory.home);
                creep.moveTo(creep.pos.findClosestByRange(exit));
                creep.say('RUNNING!!');
            }
    }
};
