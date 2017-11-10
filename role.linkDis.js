var roleBus = require('role.bus');
var roleLinkDis = {
    run: function(creep) {
        if(creep.room.name == 'W62N38'){
        if(creep.carry.energy == 0){
            var container =  Game.getObjectById('59e6d0856e10966c3911fd2e')
            if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(container);
            }
        } else if(creep.carry.energy > 0) {
            var container = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
            filter: (s) => s.structureType == STRUCTURE_STORAGE && s.store[RESOURCE_ENERGY] < s.storeCapacity})
            if(creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(container);
            }
            }
        }
        if(creep.room.name == 'W62N39' || creep.room.name == 'W69N39' || creep.room.name == 'W65N37' || creep.room.name == 'W73N36'){
        if(creep.carry.energy == 0){
            if(creep.room.name == 'W62N39'){
            var container = Game.getObjectById('595b113ebdc4d9371f60579b');
            } else if(creep.room.name == 'W69N39'){
            var container = Game.getObjectById('597fb931a7982e67a1eda2b5');
            } else if(creep.room.name == 'W65N37'){
            var container = Game.getObjectById('599d94e750f8cf238bbff401');
            } else if(creep.room.name == 'W73N36'){
                var terminal = Game.getObjectById('59a171448145622be79b411a');
                var linker = Game.getObjectById('599a6a0e6a13a40af6feeff8');
                if(terminal.store[RESOURCE_ENERGY] > 150000 && linker.energy < 400){
                    var container = Game.getObjectById('59a171448145622be79b411a');
                } else{
                    var container = Game.getObjectById('599a6a0e6a13a40af6feeff8');
                }
            }
            if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(container);
            }
        } else if(creep.carry.energy > 0) {
            var container = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
            filter: (s) => s.structureType == STRUCTURE_STORAGE && s.store[RESOURCE_ENERGY] < s.storeCapacity})
            if(creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(container);
            }
            }    
        }
        }
};
module.exports = roleLinkDis;