var rolePwrAttacker = {
    run: function(creep) {
       var pwr = Game.getObjectById(creep.memory.pwrID);
        if(pwr == undefined){
            if(creep.room.name != creep.memory.target) {
                var exit = creep.room.findExitTo(creep.memory.target);
                creep.moveTo(creep.pos.findClosestByRange(exit));
            }
        }else{
            if(creep.hits < (creep.hitsMax/2)){
                creep.say('Need Heal');
            } else {
                if(creep.attack(pwr) == ERR_NOT_IN_RANGE){
                    creep.moveTo(pwr,{reusePath: 15});
                }
            }
        }
        }
    };
module.exports = rolePwrAttacker;