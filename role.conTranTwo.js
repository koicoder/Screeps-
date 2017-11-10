module.exports = {
    run: function(creep) {
        var container = Game.getObjectById(creep.memory.containerID);
        if(container == undefined){
            if(creep.room.name != creep.memory.target) {
                var exit = creep.room.findExitTo(creep.memory.target);
                creep.moveTo(creep.pos.findClosestByRange(exit));
            }
        }else{
        var skNear = container.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_KEEPER_LAIR && s.ticksToSpawn <= 15 && s.pos.getRangeTo(container) < 10});
        var fallFlag = Game.flags.fallBackFlag7436;
        var skNearTgt = container.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: (s) => s.pos.getRangeTo(container) < 10});
    
        if(skNear != undefined && creep.carry.energy == 0 || skNearTgt != undefined && creep.carry.energy == 0){
            if(creep.pos.getRangeTo(skNear) < 5 || creep.pos.getRangeTo(skNearTgt) < 5){
                creep.moveTo(fallFlag);
            } else{
                creep.say('⏱');
            }
        } else {
            if(creep.carry.energy == 0){
                if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(container);
                }
            }
            if(creep.carry.energy > 0){
                var target = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART});
              //  if(creep.room.name == 'W53N37'){
                    //var target = creep.pos.findClosestByRange(FIND_MY_CONSTRUCTION_SITES);
                  //  if(target != undefined){
                 //   creep.build(target);
               // }
              //  } else{
                    if(target != undefined){
                        creep.repair(target);
                    }
               // }
                
            var deposit = Game.getObjectById(creep.memory.deposit);
            if(creep.transfer(deposit, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(deposit);
            }
        }
        }
        }
}
}
