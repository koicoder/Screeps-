StructureLink.prototype.linkLogic =
    function () {
    var linkTo = _.filter(Game.structures, s => s.structureType == STRUCTURE_LINK && s.pos.inRangeTo(s.room.controller, 6) == true && s.room.name == this.room.name && s.energy < 400);
    
    if(linkTo[0] == undefined){
    linkTo = _.filter(Game.structures, s => s.structureType == STRUCTURE_LINK && s.pos.inRangeTo(s.room.storage, 3) == true && s.room.name == this.room.name);
    }
    
    
    if(linkTo[0] != undefined){
    if(linkTo[0].energy < linkTo[0].energyCapacity){
        this.transferEnergy(linkTo[0]);
    }    
    }
    
    }