module.exports = {
run: function(creep) {
            var terminal = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TERMINAL})
            var container = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ZYNTHIUM] >= 200 || s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_HYDROGEN] >= 200})
            console.log('Term: ' + terminal);
            console.log('Cont: ' + container);
            const total = _.sum(creep.carry);
            if(total == 0){
                if(creep.withdraw(container, RESOURCE_ZYNTHIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(container);
            }
            } else{
                if(creep.transfer(terminal, RESOURCE_ZYNTHIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(terminal);
            }
            }
            }
};