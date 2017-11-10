var roleBus = require('role.bus');
module.exports = {
 run: function(creep) {

     if(creep.room.name == 'W57N37'){
        var containers = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 400 || s.structureType == STRUCTURE_LINK && s.pos.inRangeTo(s.room.storage, 3) == true && s.energy > 200});
        if(containers != undefined && creep.carry.energy == 0){
            if(creep.carry.energy == 0){
                if(creep.withdraw(containers, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(containers);
                }
            }
        } else if(creep.carry.energy > 0){
                if(creep.transfer(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(creep.room.storage);
                }
            } else {
            creep.say('Waiting');
                }
     } else{
        var dropped = creep.room.find(FIND_DROPPED_RESOURCES, RESOURCE_ENERGY);
         var thing = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_CONTAINER})
         if(thing == null){
            thing = Game.rooms[creep.memory.target].storage;
         }
         if(creep.memory.target == 'W62N39'){
         var linkCon = Game.rooms['W62N39'].lookForAt('structure', 15, 35)[0];
         } else if(creep.memory.target == 'W57N37'){
         var linkCon = Game.rooms['W57N37'].lookForAt('structure', 16, 21)[0];
         } else if(creep.memory.target == 'W69N39'){
         var linkCon = Game.rooms['W69N39'].lookForAt('structure', 41, 17)[0];
         } else if(creep.memory.target == 'W65N37'){
             
         var linkCon = Game.getObjectById('598a95a0157cba08f9f40d53');
         var terminal = Game.getObjectById('599d94e750f8cf238bbff401');
         if(linkCon.energy < 200 && terminal.store[RESOURCE_ENERGY] > 50000)
            linkCon = terminal;
         } else if(creep.room.name == 'W53N38'){
            var linkCon = Game.getObjectById('59cd580cdbb4270d0d6a18d9');
            var terminal = Game.getObjectById('59d3eb5d33a7b85349cd761d');
            if(linkCon.energy < 200 && terminal.store[RESOURCE_ENERGY] > 50000)
                linkCon = terminal;
         }
         
         if(creep.carry.energy == 0){
             if(creep.withdraw(linkCon, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(linkCon);
            }
         } else if(thing.store[RESOURCE_ENERGY] > 100 && creep.carry.energy == 0){

             if(creep.withdraw(thing, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                 creep.moveTo(thing);
             }
         } else if(creep.carry.energy == 0 && dropped.length > 0){
         if(creep.pickup(dropped[0]) == ERR_NOT_IN_RANGE){
             creep.moveTo(dropped[0]);
         }
     } else if (creep.carry.energy > 0){
            var container = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
            filter: (s) => s.structureType == STRUCTURE_STORAGE && s.store[RESOURCE_ENERGY] < s.storeCapacity})
            if(creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(container);
        } 
         
     }else{
                    roleBus.run(creep);
                }     }
     

}
};