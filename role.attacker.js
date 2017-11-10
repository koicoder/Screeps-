module.exports = {
run: function(creep) {
            var hostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(creep.room.name == creep.memory.target && hostile != undefined) {
                creep.rangedAttack(hostile);
                    if(creep.attack(hostile) == ERR_NOT_IN_RANGE){
                        creep.moveTo(hostile);
                    }
            }
        }
    };