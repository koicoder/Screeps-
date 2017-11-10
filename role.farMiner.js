module.exports = {
run: function(creep) {
            if(creep.room.name != creep.memory.target && creep.memory.target != 'W65N38' && creep.memory.target != 'W66N38') {
                var exit = creep.room.findExitTo(creep.memory.target);
                creep.moveTo(creep.pos.findClosestByRange(exit));
            } else if(creep.room.name != creep.memory.target && creep.memory.target == 'W65N38'){
                creep.moveTo(33,0);
            } else if(creep.room.name != creep.memory.target && creep.memory.target == 'W66N38' && creep.room.name == 'W65N37'){
                creep.moveTo(3,0);
            } else if(creep.room.name != creep.memory.target && creep.memory.target == 'W66N38' && creep.room.name == 'W65N38'){
                creep.moveTo(0,36);
            }
            if (creep.room.name == creep.memory.target) {
                var sources = creep.room.find(FIND_SOURCES)[creep.memory.sourceID];
                var container = Game.getObjectById(creep.memory.containerID);
                if(creep.pos.getRangeTo(container) == 0){
                    creep.harvest(sources);
                }else if(creep.memory.containerID == '597027f15071973ba2859c0a'){
                    if(creep.harvest(sources) == ERR_NOT_IN_RANGE){
                        creep.moveTo(sources);
                    }
                } else{
                    creep.moveTo(container);
                }
            }
            }
};
