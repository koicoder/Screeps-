module.exports = {
    run: function(creep) {
        if(creep.room.name == 'W53N38' && creep.memory.target == 'W54N38'){
            creep.moveTo(0,44);
        } else{
        try{
            var control = Game.rooms[creep.memory.target].controller;
            if(creep.reserveController(control) == ERR_NOT_IN_RANGE){
                creep.moveTo(control);
            }
        } catch(e){
            if(creep.room.name != creep.memory.target) {
                var exit = creep.room.findExitTo(creep.memory.target);
                creep.moveTo(creep.pos.findClosestByRange(exit));
            }
        }
        }
    }
    
};