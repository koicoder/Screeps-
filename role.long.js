var roleBuilder = require('role.builder');
module.exports = {
run: function(creep) {
            var container = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
            filter: (s) => s.structureType == STRUCTURE_STORAGE && s.store[RESOURCE_ENERGY] < s.storeCapacity})
            if (creep.room.name == creep.memory.home && creep.carry.energy != 0) {
                var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;}});
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
                } else if(creep.memory.target == 'W66N37' || creep.memory.target == 'W65N38' || creep.memory.target == 'W66N38' || creep.memory.target == 'W64N38'){
            if(creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(container);
            }
                }
                if(creep.memory.target == 'W63N39'){
                const link = Game.rooms['W62N39'].lookForAt('structure', 2, 12)[0];            
                    creep.moveTo(3,11);
                    creep.transfer(link, RESOURCE_ENERGY);
                } if(creep.memory.target == 'W63N38'){
                const link = Game.rooms['W62N39'].lookForAt('structure', 4, 36)[0];            
                    creep.moveTo(3,37);
                    creep.transfer(link, RESOURCE_ENERGY);
                }if(creep.memory.target == 'W69N38' || creep.memory.target == 'W68N39'){
                const link = Game.getObjectById('597171ff96e6b00bcb79d219');           
                    creep.moveTo(38,16);
                    creep.transfer(link, RESOURCE_ENERGY);
                }
                    } else if(creep.carry.energy < creep.carryCapacity) {
                var exit = creep.room.findExitTo(creep.memory.target);
                creep.moveTo(creep.pos.findClosestByRange(exit));
            } 
            if (creep.room.name == creep.memory.target && creep.carry.energy != creep.carryCapacity) {

                var sources = creep.room.find(FIND_SOURCES)[creep.memory.sourceID];
                if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
                }
            } else if(creep.carry.energy == creep.carryCapacity && creep.room.name != creep.memory.home) {
                var exit = creep.room.findExitTo(creep.memory.home);
                creep.moveTo(creep.pos.findClosestByRange(exit));
            }
            if(creep.room.name == creep.memory.home && creep.carry.energy > 0 && creep.memory.target == 'W63N38'){
                    creep.moveTo(17,35);
                    creep.transfer(container, RESOURCE_ENERGY);
            } else if(creep.room.name == creep.memory.home && creep.carry.energy == 0 && creep.memory.target == 'W63N38')
            creep.moveTo(0,36);
            }
};