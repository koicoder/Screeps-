var roleBusTower = require('role.busTower');
var roleUpTran = {
    run: function(creep) {
        if(creep.carry.energy == 0){
            var container = Game.getObjectById(creep.memory.storeID);
            if(creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(container);
            }
        } else {
            if(creep.room.name == 'W62N39'){
                var depo1 = Game.getObjectById('596070c646b10a2fe04613ab');
                var depo2 = Game.getObjectById('59604d46fb1137743f3b0a02');
                if(depo1.store[RESOURCE_ENERGY] < 2000 && creep.transfer(depo1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(depo1);    
                } else if(depo2.store[RESOURCE_ENERGY] < 2000 && creep.transfer(depo2, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(depo2);    
                } else {
                    roleBusTower.run(creep);
                }
            }
            if(creep.room.name == 'W65N37'){
                var depo1 = Game.getObjectById('5982819ab778ac1ce58b9ebb');
                var depo2 = Game.getObjectById('598046dd00130b05267952d7');
                if(depo1.store[RESOURCE_ENERGY] < 500000 && creep.transfer(depo1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(depo1);    
                } else if(depo2.store[RESOURCE_ENERGY] < 2000 && creep.transfer(depo2, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(depo2);    
                } else {
                    roleBusTower.run(creep);
                }
            }
            if(creep.room.name == 'W73N36'){
                var depo1 = Game.getObjectById('5997b7092273077b5c732a92');
                var depo2 = Game.getObjectById('5997ca434e9ddc3dbc853ee9');
                if(depo1.store[RESOURCE_ENERGY] < 500000 && creep.transfer(depo1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(depo1);    
                } else if(depo2.store[RESOURCE_ENERGY] < 2000 && creep.transfer(depo2, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(depo2);    
                } else {
                    roleBusTower.run(creep);
                }
            }
            if(creep.room.name == 'W57N37'){
                var depo4 = Game.getObjectById('595ef905824d561b67bca059');
                 if(depo4.store[RESOURCE_ENERGY] < 2000 && creep.transfer(depo4, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(depo4);    
                }
            }
            if(creep.room.name == 'W69N39'){
                var depo5 = Game.getObjectById('596ed53293f95575bbcda9f8');
                var store5 = Game.getObjectById('597171ff96e6b00bcb79d219');
                 if(depo5.store[RESOURCE_ENERGY] < 2000 && creep.transfer(depo5, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(depo5);    
                } else if(store5.store[RESOURCE_ENERGY] < 1000 && creep.transfer(store5, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(store5);    
                } else {
                    roleBusTower.run(creep);
                }
            }
            }
        }
};
module.exports = roleUpTran;