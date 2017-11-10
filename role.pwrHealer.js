var rolePwrHealer = {
    run: function(creep) {
        var pwrAttacker =  _.filter(Game.creeps, (s) => s.memory.role == 'pwrAttacker' && s.memory.target == creep.memory.target);
        if(pwrAttacker == undefined || creep.room.name == creep.memory.home){
            if(creep.room.name != creep.memory.target) {
                var exit = creep.room.findExitTo(creep.memory.target);
                creep.moveTo(creep.pos.findClosestByRange(exit));
            } else if(creep.room.name == creep.memory.target){
                var pwr = Game.getObjectById(creep.memory.pwrID);
                if(pwr == undefined){
                    creep.suicide();
                } else{
                    creep.moveTo(pwr, {reusePath: 50});
                }
            }
        }else{
            console.log('here? + '+creep.heal(pwrAttacker[0]))
            
            if(creep.heal(pwrAttacker[0]) == ERR_NOT_IN_RANGE){
                creep.moveTo(pwrAttacker[0]);
                console.log('making it?')
            }
        }

        
    }
};
module.exports = rolePwrHealer;