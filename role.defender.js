var roleAttacker = require('role.attacker');
module.exports = {
run: function(creep) {
    if(creep.room.name != creep.memory.target){
        var exit = creep.room.findExitTo(creep.memory.target);
        creep.moveTo(creep.pos.findClosestByRange(exit));
    } else{
    var hostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
    filter: { owner: { username: 'Invader' } }
});
    if(creep.room.name == creep.memory.target && hostile != undefined){
    roleAttacker.run(creep);
    } else if(creep.room.name == creep.memory.target && hostile == undefined){
        creep.suicide();    
    }

}
if(creep.room.name == 'W53N38'){
    creep.moveTo(0,44);
}
}
    };