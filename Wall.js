if(this.memory.exRm5 != undefined){
            if(this.memory.exRm5SourceID1 == undefined){
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm5);
                if(anySpawned[0] == undefined){
                    return this.spawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm5, containerID: this.memory.exRm5ContainerID0, deposit: this.memory.exRm5Deposit0}})
                }
            } else{
                var anySpawned = _.filter(roomCreeps, s => s.memory.role == creepToSpawn && s.memory.target == this.memory.exRm5);
                if(anySpawned[0] == undefined){
                    return this.spawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm5, containerID: this.memory.exRm5ContainerID0, deposit: this.memory.exRm5Deposit0}})
                } else if(anySpawned[0].memory.containerID == this.memory.exRm5ContainerID0) {
                    return this.spawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm5, containerID: this.memory.exRm5ContainerID1, deposit: this.memory.exRm5Deposit0}})
                } else{
                    return this.spawnCreep(body, ('conTranTwo'+Math.floor(Math.random()*1000)), {memory: {role: creepToSpawn, home: this.room.name, target: this.memory.exRm5, containerID: this.memory.exRm5ContainerID0, deposit: this.memory.exRm5Deposit0}})
                }
            }
        }