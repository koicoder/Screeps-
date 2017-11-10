module.exports = {
run: function(creep) {
    try{
    var container = Game.getObjectById(creep.memory.containerID);
    var source = Game.getObjectById(creep.memory.sourceID);
    const total = _.sum(container.store);
    var skNear = container.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_KEEPER_LAIR && s.ticksToSpawn <= 15 && s.pos.getRangeTo(container) < 10});
    var skNearTgt = container.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: (s) => s.pos.getRangeTo(container) < 10});
    var fallFlag = Game.flags.fallBackFlag7436;

    if(skNear != undefined || skNearTgt != undefined){
        if(creep.pos.getRangeTo(skNear) < 5 || creep.pos.getRangeTo(skNearTgt) < 5){
            creep.moveTo(fallFlag);
        } else{
            creep.say('⏱');
        }
    } else {
    if(creep.pos.getRangeTo(container) > 0){
        creep.moveTo(container);
    } else{
        if(source.energy > 0 && container.hits == container.hitsMax && total < 2000){
            creep.harvest(source);
        } else if(container.hits < container.hitsMax && total > 50){
                if(creep.carry.energy == 0){
                    creep.withdraw(container, RESOURCE_ENERGY)
                } else {
                    creep.repair(container);
                }
        } else if(total <= 50 && container.hits < container.hitsMax){
            creep.harvest(source);
        } else{
            creep.say('⏱');
        }
    }
    
    
    }
    }
    catch(e){
        if(creep.room.name != creep.memory.target) {
                var exit = creep.room.findExitTo(creep.memory.target);
                creep.moveTo(creep.pos.findClosestByRange(exit));
            }
    }
    if(creep.room.name == 'W68N33'){
            creep.moveTo(0,39)
        }
    if(creep.room.name == 'W53N38' && creep.memory.target == 'W54N38'){
            creep.moveTo(0,44)
        }
}
};