module.exports = {
    run: function(creep) {
            if(creep.room.name != creep.memory.target) {
                var exit = creep.room.findExitTo(creep.memory.target);
                creep.moveTo(creep.pos.findClosestByRange(exit));
            } 
            if (creep.room.name == creep.memory.target && creep.room.name != 'W73N32') {
                var controler = creep.room.controller;
                if(creep.claimController(controler) == ERR_NOT_IN_RANGE) {
                creep.moveTo(controler);
                }
            }
            if(creep.room.name == 'W72N32'){
                creep.memory.target = 'W76N32';
            }
            if(creep.room.name == 'W70N34'){
                creep.memory.target = 'W68N33';
            }
            if(creep.room.name == 'W69N34'){
                creep.moveTo(36,49)
            }
    }
};