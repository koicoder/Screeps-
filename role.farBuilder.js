var roleFarUpgrader = require('role.farUpgrader');
var roleRepairer = require ('role.repairer');
module.exports = {
run: function(creep) {
    if(creep.room.name == 'W53N38'){
            creep.moveTo(0,44);
        } else{
    if(creep.room.name != creep.memory.target){
        var exit = creep.room.findExitTo(creep.memory.target);
        creep.moveTo(creep.pos.findClosestByRange(exit));
    } else{
        if(creep.carry.energy < creep.carryCapacity && creep.memory.working == false) {
                var container = creep.pos.findClosestByRange(FIND_STRUCTURES, { filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] >= 100 && s.room.name != 'W54N37' || s.structureType == STRUCTURE_TERMINAL && s.store[RESOURCE_ENERGY] >= 100});
                if(container != undefined){
                    if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(container);
                        }
                } else{
                    var source = creep.room.find(FIND_SOURCES, { filter: (s) => s.energy > 0})
                    if(creep.harvest(source[0]) == ERR_NOT_IN_RANGE){
                        creep.moveTo(source[0]);
                    }
                }
                    } else{
                        creep.memory.working = true;
                    }
        if(creep.carry.energy > 0 && creep.memory.working == true){
            var targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
                if(targets.length > 0) {
                    if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                    }
                } else{
                roleFarUpgrader.run(creep);
                }
            
        } else if(creep.carry.energy == 0 && creep.memory.working == true){
            creep.memory.working = false;
        }
    }
    }
    if(creep.room.name == 'W72N33'){
                creep.memory.target = 'W74N32';
            }
    if(creep.room.name == 'W70N34'){
                creep.memory.target = 'W68N33';
            }
    if(creep.room.name == 'W69N34'){
                creep.moveTo(36,49)
            }
    if(creep.room.name == 'W68N33'){
            creep.moveTo(0,39)
        }
    }
    
};