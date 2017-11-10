StructureTower.prototype.defend = 
    function () {
        var target = this.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        var dmgStr = this.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (str) => str.hits < str.hitsMax && str.structureType != STRUCTURE_WALL && str.structureType != STRUCTURE_RAMPART});
        var ramp = this.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (str) => str.hits < 100000 && str.structureType == STRUCTURE_RAMPART});
        var wall = this.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (str) => str.hits < 100000 && str.structureType == STRUCTURE_WALL});
        if(this.room.name == 'W69N39' || this.room.name == 'W62N39' || this.room.name == 'W62N38'){
            ramp = this.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (str) => str.hits < 1000000 && str.structureType == STRUCTURE_RAMPART});
            wall = this.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (str) => str.hits < 1000000 && str.structureType == STRUCTURE_WALL});
        } 
        //else if(this.room.name == 'W62N38'){
          //  ramp = this.pos.findClosestByRange(FIND_STRUCTURES, {
            //filter: (str) => str.hits < 2000000 && str.structureType == STRUCTURE_RAMPART});
            //wall = this.pos.findClosestByRange(FIND_STRUCTURES, {
            //filter: (str) => str.hits < 2000000 && str.structureType == STRUCTURE_WALL});
    //    }
            
        if(target != undefined){
            this.attack(target);
        } else if(dmgStr != undefined){
            this.repair(dmgStr);
        } else if(ramp != undefined){
            this.repair(ramp);
        } else if(wall != undefined){
            this.repair(wall);
        } 
    }