Game.spawns['Spawn3'].memory.skRm1 = 'W56N36';
Game.spawns['Spawn3'].memory.skRm1Hostiles = false;
Game.spawns['Spawn3'].memory.skRm1Claimer = false;
Game.spawns['Spawn3'].memory.skRm1SourceID0 = '579fa8840700be0674d2dbee';
Game.spawns['Spawn3'].memory.skRm1SourceID1 = '579fa8840700be0674d2dbf1';
Game.spawns['Spawn3'].memory.skRm1SourceID2 = '579fa8840700be0674d2dbf2';
Game.spawns['Spawn3'].memory.skRm1ContainerID0 = '59f3d3e9e999fb5d672bf268';
Game.spawns['Spawn3'].memory.skRm1ContainerID1 = '59f3e2b8cee32660e68e1843';
Game.spawns['Spawn3'].memory.skRm1ContainerID2 = '59f3f63ee15e76052350739a';
Game.spawns['Spawn3'].memory.skRm1DepositID0 = '59c4447ba5080c4de4edc4fc';


var testSpawn = _.filter(Game.spawns, (s) => s.spawning == null && s.room.controller.level != 8)
    for(let currentSpawn of testSpawn){
    if(currentSpawn.room.name == 'W68N33'){
            var roleArray = [['bus', '1'],['collectorTwo','2'],['busTower','1'],['upgrader','1'],['sweep','1'],['labNukeTran','1'],['builder','1']]; 
            currentSpawn.rmMgmt(roleArray);
        } else if(currentSpawn.room.name == 'W76N32'){
            var roleArray = [['bus', '1'],['collectorTwo','2'],['busTower','1'],['upgrader','1'],['sweep','1'],['labNukeTran','1'],['builder','1']]; 
            currentSpawn.rmMgmt(roleArray);
        }
    }