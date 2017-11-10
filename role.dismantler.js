var roleAttacker = require('role.attacker');
module.exports = {
run: function(creep) {
            if(creep.room.name != creep.memory.target) {
                var exit = creep.room.findExitTo(creep.memory.target);
                creep.moveTo(creep.pos.findClosestByRange(exit));
            }else{
                var hostileSTR = Game.getObjectById('57b99fc0e2e03c266a35dd19');
                
                // console.log('hostile STR: ' + hostileSTR);
                // creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {filter: (s) => s.structureType != STRUCTURE_CONTROLLER && s.structureType != STRUCTURE_TOWER});
                // Game.getObjectById('58710bb1401947c2217b4dbc');
                if(creep.dismantle(hostileSTR) == ERR_NOT_IN_RANGE){
                       creep.moveTo(hostileSTR);
                }
                }
               
}
};
