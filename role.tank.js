module.exports = {
run: function(creep) {
            if(creep.room.name == creep.memory.home || creep.room.name != creep.memory.target) {
                var exit = creep.room.findExitTo(creep.memory.target);
                creep.moveTo(creep.pos.findClosestByRange(exit));
            }
}
};