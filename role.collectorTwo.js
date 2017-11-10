module.exports = {
    run: function(creep) {
        try{
            var container = Game.getObjectById(creep.memory.containerID);
            var source = Game.getObjectById(creep.memory.sourceID);
            var deposit = Game.getObjectById(creep.memory.depositID);
            const total = _.sum(container.store);
            
            if(creep.pos.getRangeTo(container) > 0){
                creep.moveTo(container);
            } else{
                if(source.energy > 0 && creep.carry.energy < creep.carryCapacity && total < 2000){
                    creep.harvest(source);
                } else if(deposit.energy < deposit.energyCapacity && creep.carry.energy == creep.carryCapacity){
                    creep.transfer(deposit, RESOURCE_ENERGY);
                } else if(deposit.energy == deposit.energyCapacity && total < 2000){
                    creep.harvest(source);
                } else if(source.energy == 0 && total > 0 && deposit.energy < deposit.energyCapacity){
                    creep.withdraw(container, RESOURCE_ENERGY);
                } else if(total == 2000 && deposit.energy < deposit.energyCapacity){
                    creep.withdraw(container, RESOURCE_ENERGY);
                } else{
                    creep.say('⏱');
                }
            }
        }
        catch(e){
            console.log('Error is: ' + e + '  On Creep name: ' + creep.name + '  In room name:  '+ creep.room.name);
        }
    }
};