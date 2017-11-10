    var collectorsTwoRM9 = _.filter(Game.creeps, (creep) => creep.memory.role == 'collectorTwo' && creep.memory.home == 'W68N33' && creep.memory.sourceID == '57ef9c5b86f108ae6e60c166');
    var collectorsTwoRM91 = _.filter(Game.creeps, (creep) => creep.memory.role == 'collectorTwo' && creep.memory.home == 'W68N33' && creep.memory.sourceID == '57ef9c5b86f108ae6e60c167');
    var busesRM9 = _.filter(Game.creeps, (creep) => creep.memory.role == 'bus' && creep.memory.home == 'W68N33');
    var sweepRM9 = _.filter(Game.creeps, (creep) => creep.memory.role == 'collectorTwo' && creep.memory.home == 'W68N33');
    var upgraderRM9 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.home == 'W68N33');
    var busTowerRM9 = _.filter(Game.creeps, (creep) => creep.memory.role == 'busTower' && creep.memory.home == 'W68N33');


    if (collectorsTwoRM9.length < 1){
        if(Game.spawns['Spawn9'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn9'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '57ef9c5b86f108ae6e60c166', home:'W68N33', containerID: '59fe9f07dacd4908b9fb38a5', depositID: '59f9e79b84ccf84a05db1cc7'});
        }
    } else if (collectorsTwoRM91.length < 1){
        if(Game.spawns['Spawn9'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn9'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'collectorTwo', sourceID: '57ef9c5b86f108ae6e60c167', home:'W68N33', containerID: '59feaa7568b3ca3cececc598', depositID: '59f9e1a7213866612a41d78c'});
        }
    } else if (busesRM9.length < 1){
        if(Game.spawns['Spawn9'].room.energyAvailable > 3000){
            if(Game.spawns['Spawn9'].canCreateCreep() != ERR_BUSY){
                var newName = Game.spawns['Spawn9'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'bus', home: 'W68N33'});
            }     
        } else if(Game.spawns['Spawn9'].room.energyAvailable < 400){
            if(Game.spawns['Spawn9'].canCreateCreep() != ERR_BUSY){
                var newName = Game.spawns['Spawn9'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'bus', home: 'W68N33'});
            }
        } else {
            if(Game.spawns['Spawn9'].canCreateCreep() != ERR_BUSY){
                var newName = Game.spawns['Spawn9'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'bus', home: 'W68N33'});
            }
        }
    } else if (busTowerRM9.length < 1){
        if(Game.spawns['Spawn9'].room.energyAvailable > 3000){
            if(Game.spawns['Spawn9'].canCreateCreep() != ERR_BUSY){
                var newName = Game.spawns['Spawn9'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'busTower', home: 'W68N33'});
            }     
        } else if(Game.spawns['Spawn9'].room.energyAvailable < 400){
            if(Game.spawns['Spawn9'].canCreateCreep() != ERR_BUSY){
                var newName = Game.spawns['Spawn9'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'busTower', home: 'W68N33'});
            }
        } else {
            if(Game.spawns['Spawn9'].canCreateCreep() != ERR_BUSY){
                var newName = Game.spawns['Spawn9'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'busTower', home: 'W68N33'});
            }
        }
    } else if (sweepRM9.length < 1){
        if(Game.spawns['Spawn9'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn9'].createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,MOVE,CARRY,MOVE], undefined, {role: 'sweep', home: 'W68N33'});
        }
    } else if (upgraderRM9.length < 1) {
        if(Game.spawns['Spawn9'].canCreateCreep() != ERR_BUSY){
        var newName = Game.spawns['Spawn9'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'upgrader', home: 'W68N33', target: 'W68N33', working: false, bstLab: '0', boosted: '1'});
        }
    }