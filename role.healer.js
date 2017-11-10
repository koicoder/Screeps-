module.exports = {
run: function(creep) {
            //if(creep.room.name == 'W71N36'){
              //  creep.moveTo(7,48);
            // }else
            if(creep.room.name == creep.memory.home || creep.room.name != creep.memory.target) {
                var exit = creep.room.findExitTo(creep.memory.target);
                creep.moveTo(creep.pos.findClosestByRange(exit));
            }
            const target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
            filter: function(object) {return object.hits < object.hitsMax;}});
if(target) {
    if(creep.heal(target) == ERR_NOT_IN_RANGE) {
            creep.moveTo(target);
    }
}
}
};