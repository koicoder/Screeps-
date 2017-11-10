        /*
        } else if(creep.memory.role == 'farBuilder'){
        } else if(creep.memory.role == 'farUpgrader'){
*/

StructureSpawn.prototype.rmMgmt = 
    function(roleArray){
        // locate all creeps that are spawned from this room
        var roomCreeps = _.filter(Game.creeps, (s) => s.memory.home == this.room.name);
        
        // for all roles for this room, check if each role has needed ammount per room, if creep not found, break the loop and send to spawning logistics, if all spawned, send spawn to sleep for 50 ticks to save CPU useage
        for(i=0; i < roleArray.length; i++){
            var currentCreep = _.filter(roomCreeps, (s) => s.memory.home == this.room.name && s.memory.role == roleArray[i][0]);
            if(currentCreep = undefined || currentCreep.length < roleArray[i][1]){
                var creepToSpawn = roleArray[i][0];
                var ammountToSpawn = roleArray[i][1];
                break;
            } else if(i == roleArray.length){
                this.memory.spawnMemSaver == 15;
            }
        }
        
        // if the creep to spawn is a harvester, spawn harevester
        if(creepToSpawn == 'harvester'){
            return this.spawnCreep([WORK,CARRY,MOVE], ('harvester'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name}});
        }
        // if the creep to spawn is a bus, and the energy is at or less than 300, spawn a 300 energy bus, or send spawn to idle till energy Builds to 300, elsewise use busSpawn to spawn maximum level bus for given energy.
        if(creepToSpawn == 'bus'){
            if(this.room.energyAvailable <= 300){
                if(this.room.energyAvailable == 300){
                    return this.spawnCreep([CARRY,CARRY,MOVE], ('bus'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name}});
                } else if(this.room.energyAvailable < 300){
                    this.memory.spawnMemSaver == (300 - this.room.energyAvailable);
                }
            } else{
                return this.busSpawn(creepToSpawn);
            }
        }
        // spawn a busTower using busSpawn
        if(creepToSpawn == 'busTower' || creepToSpawn == 'sweep' || creepToSpawn == 'upTran' ||  creepToSpawn == 'labNukeTran' || creepToSpawn == 'linker'){
            return this.busSpawn(creepToSpawn);
        }
        if(creepToSpawn == 'farMiner'){
            return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE], ('farMiner'+Math.floor(Math.random()*1000)),{memory:{home: this.room.name, role: 'farMiner', containerID: '595dd218b82aa8768c187121'}});
        }

        if(creepToSpawn == 'builder' || creepToSpawn == 'minMiner' || creepToSpawn == 'wallRepairer'){
            return this.workerSpawn(creepToSpawn);
        }
        
        if(creepToSpawn == 'conTranTwo'){
            return this.conTranTwoSpawn();
        }
        
        if(creepToSpawn == 'collectorTwo'){
            return this.collectorTwoSpawn(roomCreeps, creepToSpawn);
        }
        
        if(creepToSpawn == 'defender'){
            return this.defenderSpawn();
        }
        
        if(creepToSpawn == 'farBuilder'){
            if(this.room.name == 'W73N36'){
                return Game.spawns['Spawn6'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farBuilder', target: 'W72N32', home: 'W73N36'});
            } else if(this.room.name == ''){
                
            }
        }
        
        if(creepToSpawn == 'farUpgrader'){
            if(this.room.name == 'W73N36'){
                
            } else if(this.room.name == ''){
                return Game.spawns['Spawn4'].createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'farUpgrader', target: 'W70N34', home: 'W69N39'});
            }
        }
        
        if(creepToSpawn == 'upgrader'){
            if(this.room.controller.level == 8){
                return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], ('upgrader'+Math.floor(Math.random()*1000)), {memory: {home: this.room.name, role: 'upgrader'}})
            } else{
                return this.upgradeSpawn();
            }
        }
        
        if(creepToSpawn == 'farMinerTwo'){
            return this.farMinerTwoSpawn(roomCreeps, creepToSpawn)
        }
        
        if(creepToSpawn == 'claimer'){
            return this.claimerSpawn();
        }
        if(creepToSpawn == 'sDef'){
            if(this.room.skRm1 != undefined){
                return this.spawnCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,HEAL,HEAL,HEAL,HEAL], ('sDef'+Math.floor(Math.random()*1000)), {memory: {home: this.room.name, target: this.room.skRm1}});
            }
        }
        if(creepToSpawn == 'farMinerTwoSK'){
            return this.farMinerTwoSKSpawn(roomCreeps);
        }
    }

StructureSpawn.prototype.collectorTwoSpawn = 
    function(roomCreeps, creepToSpawn){
    
        var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn);
        if(anySpawned == undefined){
            return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('collectorTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, sourceID: this.memory.rmSource0, containerID: this.memory.rmContainer0, depositID: this.memory.rmDeposit0}});
        } else if(anySpawned[0].memory.sourceID == this.memory.rmSource0) {
            return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('collectorTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, sourceID: this.memory.rmSource1, containerID: this.memory.rmContainer1, depositID: this.memory.rmDeposit1}});
        } else{
            return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('collectorTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, sourceID: this.memory.rmSource0, containerID: this.memory.rmContainer0, depositID: this.memory.rmDeposit0}});
        }
    }

StructureSpawn.prototype.farMinerTwoSKSpawn = 
    function(roomCreeps) {
        
        if(this.memory.skRm1 != undefined){
            var anySpawned = _.filter(roomCreeps, s => s.memory.role == 'farMiner' && s.memory.target == this.memory.skRm1);
            if(anySpawned == undefined){
                return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: 'farMinerTwo', home: this.room.name, target: this.memory.skRm1, sourceID: this.memory.skRm1Source0, containerID: this.memory.skRm1Container0, depositID: this.memory.skRm1DepositID0}});
            } else {
                if(anySpawned.length == 1){
                    if(anySpawned[0].memory.sourceID == this.memory.skRm1SourceID0){
                        return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: 'farMinerTwo', home: this.room.name, target: this.memory.skRm1, sourceID: this.memory.skRm1Source1, containerID: this.memory.skRm1Container1, depositID: this.memory.skRm1DepositID0}});
                    } else if(anySpawned[0].memory.sourceID == this.memory.skRm1SourceID1){
                        return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: 'farMinerTwo', home: this.room.name, target: this.memory.skRm1, sourceID: this.memory.skRm1Source0, containerID: this.memory.skRm1Container0, depositID: this.memory.skRm1DepositID0}});
                    } else if(anySpawned[0].memory.sourceID == this.memory.skRm1SourceID2){
                        return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: 'farMinerTwo', home: this.room.name, target: this.memory.skRm1, sourceID: this.memory.skRm1Source0, containerID: this.memory.skRm1Container0, depositID: this.memory.skRm1DepositID0}});
                    }
                } else if(anySpawned.length == 2){
                    if(anySpawned[0].memory.sourceID == this.memory.skRm1SourceID0 && anySpawned[1].memory.sourceID == this.memory.skRm1SourceID1 || anySpawned[0].memory.sourceID == this.memory.skRm1SourceID1 && anySpawned[1].memory.sourceID == this.memory.skRm1SourceID0){
                        return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: 'farMinerTwo', home: this.room.name, target: this.memory.skRm1, sourceID: this.memory.skRm1Source2, containerID: this.memory.skRm1Container2, depositID: this.memory.skRm1DepositID0}});
                    } else if(anySpawned[0].memory.sourceID == this.memory.skRm1SourceID0 && anySpawned[1].memory.sourceID == this.memory.skRm1SourceID2 || anySpawned[0].memory.sourceID == this.memory.skRm1SourceID2 && anySpawned[1].memory.sourceID == this.memory.skRm1SourceID0){
                        return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: 'farMinerTwo', home: this.room.name, target: this.memory.skRm1, sourceID: this.memory.skRm1Source1, containerID: this.memory.skRm1Container1, depositID: this.memory.skRm1DepositID0}});
                    } else if(anySpawned[0].memory.sourceID == this.memory.skRm1SourceID1 && anySpawned[1].memory.sourceID == this.memory.skRm1SourceID2 || anySpawned[0].memory.sourceID == this.memory.skRm1SourceID2 && anySpawned[1].memory.sourceID == this.memory.skRm1SourceID1){
                        return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: 'farMinerTwo', home: this.room.name, target: this.memory.skRm1, sourceID: this.memory.skRm1Source0, containerID: this.memory.skRm1Container0, depositID: this.memory.skRm1DepositID0}});
                    }
                }
            }
        }
    }

StructureSpawn.prototype.busSpawn = 
    function(creepToSpawn) {
        var parts = Math.floor(this.room.energyAvailable / 150);
        parts = Math.min(parts, Math.floor(50/3));
        var body = [];
        
        for(let i = 0; i < parts; i++){
            body.push(CARRY);
            body.push(CARRY);
            body.push(MOVE);
        }
        return this.spawnCreep(body, (creepToSpawn+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name}});
    }
    
StructureSpawn.prototype.collectorTwoSpawn = 
    function(roomCreeps, creepToSpawn) {
    
        var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn);
        if(anySpawned == undefined){
            return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('collectorTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, sourceID: this.memory.rmSource0, containerID: this.memory.rmContainer0, depositID: this.memory.rmDeposit0}});
        } else if(anySpawned[0].memory.sourceID == this.memory.rmSource0) {
            return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('collectorTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, sourceID: this.memory.rmSource1, containerID: this.memory.rmContainer1, depositID: this.memory.rmDeposit1}});
        } else{
            return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('collectorTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, sourceID: this.memory.rmSource0, containerID: this.memory.rmContainer0, depositID: this.memory.rmDeposit0}});
        }
    }

StructureSpawn.prototype.farMinerTwoSpawn = 
    function(roomCreeps, creepToSpawn) {
        if(this.memory.exRm1 != undefined){
            if(this.memory.exRm1SourceID1 == undefined){
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm1);
                if(anySpawned == undefined){
                    return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm1, sourceID: this.memory.exRm1Source0, containerID: this.memory.exRm1Container0, depositID: this.memory.exRm1DepositID0}});
                }
            } else{
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm1);
                if(anySpawned == undefined){
                    return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm1, sourceID: this.memory.exRm1Source0, containerID: this.memory.exRm1Container0, depositID: this.memory.exRm1DepositID0}});
                } else if(anySpawned[0].memory.sourceID == this.memory.ExRm1Source0) {
                    return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm1, sourceID: this.memory.exRm1Source1, containerID: this.memory.exRm1RmContainer1, depositID: this.memory.exRm1DepositID0}});
                } else{
                    return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm1, sourceID: this.memory.exRm1Source0, containerID: this.memory.exRm1Container0, depositID: this.memory.exRm1DepositID0}});
                }
            }
        }
        if(this.memory.exRm2 != undefined){
            if(this.memory.exRm2SourceID1 == undefined){
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm2);
                if(anySpawned == undefined){
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm2, containerID: this.memory.exRm2Container0, depositID: this.memory.exRm2DepositID0}})
                }
            } else{
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm2);
                if(anySpawned == undefined){
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm2, containerID: this.memory.exRm2Container0, depositID: this.memory.exRm2DepositID0}})
                } else if(anySpawned[0].memory.containerID == this.memory.exRm2Container0) {
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm2, containerID: this.memory.exRm2Container1, depositID: this.memory.exRm2DepositID0}})
                } else{
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm2, containerID: this.memory.exRm2Container0, depositID: this.memory.exRm2DepositID0}})
                }
            }
        }
        if(this.memory.exRm3 != undefined){
            if(this.memory.exRm3SourceID1 == undefined){
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm3);
                if(anySpawned == undefined){
                    return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm3, sourceID: this.memory.exRm3Source0, containerID: this.memory.exRm3Container0, depositID: this.memory.exRm3DepositID0}});
                }
            } else{
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm3);
                if(anySpawned == undefined){
                    return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm3, sourceID: this.memory.exRm3Source0, containerID: this.memory.exRm3Container0, depositID: this.memory.exRm3DepositID0}});
                } else if(anySpawned[0].memory.sourceID == this.memory.exRm3Source0) {
                    return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm3, sourceID: this.memory.exRm3Source1, containerID: this.memory.exRm3RmContainer1, depositID: this.memory.exRm3DepositID0}});
                } else{
                    return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm3, sourceID: this.memory.exRm3Source0, containerID: this.memory.exRm3Container0, depositID: this.memory.exRm3DepositID0}});
                }
            }
        }
        if(this.memory.exRm4 != undefined){
            if(this.memory.exRm4SourceID1 == undefined){
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm4);
                if(anySpawned == undefined){
                    return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm4, sourceID: this.memory.exRm4Source0, containerID: this.memory.exRm4Container0, depositID: this.memory.exRm4DepositID0}});
                }
            } else{
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm4);
                if(anySpawned == undefined){
                    return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm4, sourceID: this.memory.exRm4Source0, containerID: this.memory.exRm4Container0, depositID: this.memory.exRm4DepositID0}});
                } else if(anySpawned[0].memory.sourceID == this.memory.exRm4Source0) {
                    return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm4, sourceID: this.memory.exRm4Source1, containerID: this.memory.exRm4RmContainer1, depositID: this.memory.exRm4DepositID0}});
                } else{
                    return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm4, sourceID: this.memory.exRm4Source0, containerID: this.memory.exRm4Container0, depositID: this.memory.exRm4DepositID0}});
                }
            }
        }
        if(this.memory.exRm5 != undefined){
            if(this.memory.exRm5SourceID1 == undefined){
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm5);
                if(anySpawned == undefined){
                    return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm5, sourceID: this.memory.exRm5Source0, containerID: this.memory.exRm5Container0, depositID: this.memory.exRm5DepositID0}});
                }
            } else{
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm5);
                if(anySpawned == undefined){
                    return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm5, sourceID: this.memory.exRm5Source0, containerID: this.memory.exRm5Container0, depositID: this.memory.exRm5DepositID0}});
                } else if(anySpawned[0].memory.sourceID == this.memory.exRm5Source0) {
                    return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm5, sourceID: this.memory.exRm5Source1, containerID: this.memory.exRm5RmContainer1, depositID: this.memory.exRm5DepositID0}});
                } else{
                    return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], ('farMinerTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm5, sourceID: this.memory.exRm5Source0, containerID: this.memory.exRm5Container0, depositID: this.memory.exRm5DepositID0}});
                }
            }
        }
    }

StructureSpawn.prototype.upgradeSpawn = 
    function() {
        var parts = Math.floor((this.room.energyAvailable - 150) / 250);
        parts = Math.min(parts, Math.floor(47/3));
        var body = [];
        body.push(CARRY);
        body.push(CARRY);
        body.push(MOVE);
        
        for(let i = 0; i < parts; i++){
            body.push(WORK);
            body.push(WORK);
            body.push(MOVE);
        }
        return this.spawnCreep(body,('upgrader'+Math.floor(Math.random()*1000)),{memory: {role: 'upgrader', home: this.room.name}});
    }
    
StructureSpawn.prototype.defenderSpawn = 
    function() {
        if(this.memory.exRm1Hostiles == true){
            return this.spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], ('defender'+Math.floor(Math.random()*1000)), {memory: {role: 'defender', home: this.room.name, target: this.memory.exRm1}})
        } else if(this.memory.exRm2Hostiles == true){
            return this.spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], ('defender'+Math.floor(Math.random()*1000)), {memory: {role: 'defender', home: this.room.name, target: this.memory.exRm2}})
        } else if(this.memory.exRm3Hostiles == true){
            return this.spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], ('defender'+Math.floor(Math.random()*1000)), {memory: {role: 'defender', home: this.room.name, target: this.memory.exRm3}})
        } else if(this.memory.exRm4Hostiles == true){
            return this.spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], ('defender'+Math.floor(Math.random()*1000)), {memory: {role: 'defender', home: this.room.name, target: this.memory.exRm4}})
        } else if(this.memory.exRm5Hostiles == true){
            return this.spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], ('defender'+Math.floor(Math.random()*1000)), {memory: {role: 'defender', home: this.room.name, target: this.memory.exRm5}})
        }
    }
    
StructureSpawn.prototype.claimerSpawn = 
    function() {
        var parts = Math.floor(this.room.energyAvailable / 650);
        parts = Math.min(parts, Math.floor(6/2));
        var body = [];
        
        for(let i = 0; i < parts; i++){
            body.push(CLAIM);
            body.push(MOVE);
        }
        
        if(this.memory.exRm1Claimer == true){
            return this.spawnCreep(body, ('claimer'+Math.floor(Math.random()*1000)), {memory: {role: 'claimer', home: this.room.name, target: this.memory.exRm1}});
        } else if(this.memory.exRm2Claimer == true){
            return this.spawnCreep(body, ('claimer'+Math.floor(Math.random()*1000)), {memory: {role: 'claimer', home: this.room.name, target: this.memory.exRm2}});
        } else if(this.memory.exRm3Claimer == true){
            return this.spawnCreep(body, ('claimer'+Math.floor(Math.random()*1000)), {memory: {role: 'claimer', home: this.room.name, target: this.memory.exRm3}});
        } else if(this.memory.exRm4Claimer == true){
            return this.spawnCreep(body, ('claimer'+Math.floor(Math.random()*1000)), {memory: {role: 'claimer', home: this.room.name, target: this.memory.exRm4}});
        } else if(this.memory.exRm5Claimer == true){
            return this.spawnCreep(body, ('claimer'+Math.floor(Math.random()*1000)), {memory: {role: 'claimer', home: this.room.name, target: this.memory.exRm5}});
        }
    }

StructureSpawn.prototype.workerSpawn = 
    function(creepToSpawn) {
        var parts = Math.floor(this.room.energyAvailable / 350);
        parts = Math.min(parts, Math.floor(50/5));
        var body = [];
        
        for(let i = 0; i < parts; i++){
            body.push(WORK);
            body.push(WORK);
            body.push(CARRY);
            body.push(MOVE);
            body.push(MOVE);
        }
        return this.spawnCreep(body, (creepToSpawn + Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name}})
    }

StructureSpawn.prototype.conTranTwoSpawn = 
    function() {
        var parts = Math.floor((this.room.energyAvailable - 150) / 150);
        parts = Math.min(parts, Math.floor(48/3));
        var body = [];
        body.push(WORK);
        body.push(MOVE);
        
        for(let i = 0; i < parts; i++){
            body.push(CARRY);
            body.push(CARRY);
            body.push(MOVE);
        }
        if(this.memory.exRm1 != undefined){
            if(this.memory.exRm1SourceID1 == undefined){
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm1);
                if(anySpawned == undefined){
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm1, containerID: this.memory.exRm1Container0, depositID: this.memory.exRm1DepositID0}})
                }
            } else{
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm1);
                if(anySpawned == undefined){
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm1, containerID: this.memory.exRm1Container0, depositID: this.memory.exRm1DepositID0}})
                } else if(anySpawned[0].memory.containerID == this.memory.ExRm1Container0) {
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm1, containerID: this.memory.exRm1Container1, depositID: this.memory.exRm1DepositID0}})
                } else{
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm1, containerID: this.memory.exRm1Container0, depositID: this.memory.exRm1DepositID0}})
                }
            }
        }
        if(this.memory.exRm2 != undefined){
            if(this.memory.exRm2SourceID1 == undefined){
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm2);
                if(anySpawned == undefined){
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm1, containerID: this.memory.exRm1Container0, depositID: this.memory.exRm1DepositID0}})
                }
            } else{
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm2);
                if(anySpawned == undefined){
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm1, containerID: this.memory.exRm1Container0, depositID: this.memory.exRm1DepositID0}})
                } else if(anySpawned[0].memory.containerID == this.memory.exRm2Container0) {
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm1, containerID: this.memory.exRm1Container1, depositID: this.memory.exRm1DepositID0}})
                } else{
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm1, containerID: this.memory.exRm1Container0, depositID: this.memory.exRm1DepositID0}})
                }
            }
        }
        if(this.memory.exRm3 != undefined){
            if(this.memory.exRm3SourceID1 == undefined){
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm3);
                if(anySpawned == undefined){
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm3, containerID: this.memory.exRm3Container0, depositID: this.memory.exRm3DepositID0}})
                }
            } else{
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm3);
                if(anySpawned == undefined){
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm3, containerID: this.memory.exRm3Container0, depositID: this.memory.exRm3DepositID0}})
                } else if(anySpawned[0].memory.containerID == this.memory.exRm3Container0) {
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm3, containerID: this.memory.exRm3Container1, depositID: this.memory.exRm3DepositID0}})
                } else{
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm3, containerID: this.memory.exRm3Container0, depositID: this.memory.exRm3DepositID0}})
                }
            }
        }
        if(this.memory.exRm4 != undefined){
            if(this.memory.exRm4SourceID1 == undefined){
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm4);
                if(anySpawned == undefined){
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm4, containerID: this.memory.exRm4Container0, depositID: this.memory.exRm4DepositID0}})
                }
            } else{
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm4);
                if(anySpawned == undefined){
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm4, containerID: this.memory.exRm4Container0, depositID: this.memory.exRm4DepositID0}})
                } else if(anySpawned[0].memory.containerID == this.memory.exRm4Container0) {
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm4, containerID: this.memory.exRm4Container1, depositID: this.memory.exRm4DepositID0}})
                } else{
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm4, containerID: this.memory.exRm4Container0, depositID: this.memory.exRm4DepositID0}})
                }
            }
        }
        if(this.memory.exRm5 != undefined){
            if(this.memory.exRm5SourceID1 == undefined){
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm5);
                if(anySpawned == undefined){
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm5, containerID: this.memory.exRm5Container0, depositID: this.memory.exRm5DepositID0}})
                }
            } else{
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm5);
                if(anySpawned == undefined){
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm5, containerID: this.memory.exRm5Container0, depositID: this.memory.exRm5DepositID0}})
                } else if(anySpawned[0].memory.containerID == this.memory.exRm5Container0) {
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm5, containerID: this.memory.exRm5Container1, depositID: this.memory.exRm5DepositID0}})
                } else{
                    return this.SpawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm5, containerID: this.memory.exRm5Container0, depositID: this.memory.exRm5DepositID0}})
                }
            }
        }
    }
