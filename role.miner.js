var roleMiner = {
    run: function(creep) {
            var sources = creep.room.find(FIND_SOURCES)[creep.memory.sourceID];
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
        }
    };
module.exports = roleMiner;