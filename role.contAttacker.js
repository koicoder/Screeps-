module.exports = {
run: function(creep) {
            if(creep.room.name != creep.memory.target) {
                var exit = creep.room.findExitTo(creep.memory.target);
                creep.moveTo(creep.pos.findClosestByRange(exit));
            } 
            if (creep.room.name == creep.memory.target) {
                var controler = creep.room.controller;
                if(controler.my == false && creep.attackController(controler) == ERR_NOT_IN_RANGE) {
                creep.moveTo(controler);
                }
            }
        }
};