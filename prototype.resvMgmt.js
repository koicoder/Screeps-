Flag.prototype.resvMgmt =
function () {
    var rTime = Game.time;
    var obsCounter = this.memory.obsCounter;
    var obs = Game.getObjectById('59943a41c5d5e055540ab6c1');
    var obs2 = Game.getObjectById('59bb5b247ff32a5fac44f370');
    var obs3 = Game.getObjectById('59a2d07a4f90fb72b8d7be4b');
    var obs4 = Game.getObjectById('59d3d8ddcf9f466cdbaea939');
    switch (obsCounter) {
        case 0:
            obs.observeRoom('W63N38');
            obs2.observeRoom('W73N35');
            obs3.observeRoom('W56N38');
            obs4.observeRoom('W73N37');            
            try{
                this.memory.RES6237 = Game.rooms['W62N37'].controller.reservation['ticksToEnd'];
                var invFlg = Game.flags.INVRM6237;
                var hostile = invFlg.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: { owner: { username: 'Invader' } }});
                if(hostile != undefined){
                    invFlg.memory.hostiles = true;
                } else{
                    invFlg.memory.hostiles = false;
                }
            }
            catch(e){
                this.memory.RES6237 = 1;
            }
            this.memory.obsCounter = 1;
            break;
        case 1:
            obs.observeRoom('W63N39');
            obs2.observeRoom('W67N39');
            obs3.observeRoom('W54N38');            
            try{
                this.memory.RES6338 = Game.rooms['W63N38'].controller.reservation['ticksToEnd'];
                this.memory.RES7335 = Game.rooms['W73N35'].controller.reservation['ticksToEnd'];
                this.memory.RES5638 = Game.rooms['W56N38'].controller.reservation['ticksToEnd'];
                this.memory.RES7337 = Game.rooms['W73N37'].controller.reservation['ticksToEnd'];
                var invFlg = Game.flags.INVRM7335;
                var hostile = invFlg.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: { owner: { username: 'Invader' } }});
                if(hostile != undefined){
                    invFlg.memory.hostiles = true;
                } else{
                    invFlg.memory.hostiles = false;
                }
                var invFlg2 = Game.flags.INVRM6338;
                var hostile2 = invFlg2.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: { owner: { username: 'Invader' } }});
                if(hostile2 != undefined){
                    invFlg2.memory.hostiles = true;
                } else{
                    invFlg2.memory.hostiles = false;
                }
                var invFlg3 = Game.flags.INVRM5638;
                var hostile3 = invFlg3.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: { owner: { username: 'Invader' } }});
                if(hostile3 != undefined){
                    invFlg3.memory.hostiles = true;
                } else{
                    invFlg3.memory.hostiles = false;
                }
                var invFlg4 = Game.flags.INVRM7337;
                var hostile4 = invFlg4.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: { owner: { username: 'Invader' } }});
                if(hostile4 != undefined){
                    invFlg4.memory.hostiles = true;
                } else{
                    invFlg4.memory.hostiles = false;
                }
            }
            catch(e){
                console.log('An error: '+ e)
                this.memory.RES6338 = 1;
                this.memory.RES7335 = 1;
            }
            this.memory.obsCounter = 2;
            break;            
        case 2:
            obs.observeRoom('W65N38');
            obs3.observeRoom('W53N37');
            try{
                this.memory.RES6339 = Game.rooms['W63N39'].controller.reservation['ticksToEnd'];
                this.memory.RES6739 = Game.rooms['W67N39'].controller.reservation['ticksToEnd'];
                this.memory.RES5438 = Game.rooms['W54N38'].controller.reservation['ticksToEnd'];
                var invFlg = Game.flags.INVRM6339;
                var hostile = invFlg.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: { owner: { username: 'Invader' } }});
                if(hostile != undefined){
                    invFlg.memory.hostiles = true;
                } else{
                    invFlg.memory.hostiles = false;
                }
                var invFlg2 = Game.flags.INVRM5438;
                var hostile2 = invFlg2.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: { owner: { username: 'Invader' } }});
                if(hostile2 != undefined){
                    invFlg2.memory.hostiles = true;
                } else{
                    invFlg2.memory.hostiles = false;
                }
            }
            catch(e){
                this.memory.RES6339 = 1;
            }
            this.memory.obsCounter = 3;
            break;
        case 3:
            obs.observeRoom('W66N37');
            obs3.observeRoom('W54N37');
            try{
                this.memory.RES6538 = Game.rooms['W65N38'].controller.reservation['ticksToEnd'];
                this.memory.RES5337 = Game.rooms['W53N37'].controller.reservation['ticksToEnd'];
                var invFlg = Game.flags.INVRM6538;
                var hostile = invFlg.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: { owner: { username: 'Invader' } }});
                if(hostile != undefined){
                    invFlg.memory.hostiles = true;
                } else{
                    invFlg.memory.hostiles = false;
                }
                var invFlg1 = Game.flags.INVRM5337;
                var hostile1 = invFlg1.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: { owner: { username: 'Invader' } }});
                if(hostile1 != undefined){
                    invFlg1.memory.hostiles = true;
                } else{
                    invFlg1.memory.hostiles = false;
                }
            }
            catch(e){
                this.memory.RES6538 = 1;
            }
            this.memory.obsCounter = 4;
            break;
        case 4:
            obs.observeRoom('W68N39');
            try{
                this.memory.RES6637 = Game.rooms['W66N37'].controller.reservation['ticksToEnd'];
                this.memory.RES5437 = Game.rooms['W54N37'].controller.reservation['ticksToEnd'];
                var invFlg = Game.flags.INVRM6637;
                var hostile = invFlg.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: { owner: { username: 'Invader' } }});
                if(hostile != undefined){
                    invFlg.memory.hostiles = true;
                } else{
                    invFlg.memory.hostiles = false;
                }
                var invFlg1 = Game.flags.INVRM5437;
                var hostile1 = invFlg1.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: { owner: { username: 'Invader' } }});
                if(hostile1 != undefined){
                    invFlg1.memory.hostiles = true;
                } else{
                    invFlg1.memory.hostiles = false;
                }
                
            }
            catch(e){
                this.memory.RES6637 = 1;
            }
            this.memory.obsCounter = 5;
            break;
        case 5:
            try{
                this.memory.RES6839 = Game.rooms['W68N39'].controller.reservation['ticksToEnd'];
                var invFlg = Game.flags.INVRM6839;
                var hostile = invFlg.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: { owner: { username: 'Invader' } }});
                if(hostile != undefined){
                    invFlg.memory.hostiles = true;
                } else{
                    invFlg.memory.hostiles = false;
                }
            }
            catch(e){
                this.memory.RES6839 = 1;
            }
            obs.observeRoom('W69N38');
            this.memory.obsCounter = 6;
            break;
        case 6:
            try{
                this.memory.RES6938 = Game.rooms['W69N38'].controller.reservation['ticksToEnd'];
                var invFlg = Game.flags.INVRM6938;
                var hostile = invFlg.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: { owner: { username: 'Invader' } }});
                if(hostile != undefined){
                    invFlg.memory.hostiles = true;
                } else{
                    invFlg.memory.hostiles = false;
                }
            }
            catch(e){
                this.memory.RES6938 = 1;
            }
            obs.observeRoom('W58N37');
            this.memory.obsCounter = 7;
            break;
        case 7:
            try{
                this.memory.RES5837 = Game.rooms['W58N37'].controller.reservation['ticksToEnd'];
                var invFlg = Game.flags.INVRM5837;
                var hostile = invFlg.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: { owner: { username: 'Invader' } }});
                if(hostile != undefined){
                    invFlg.memory.hostiles = true;
                } else{
                    invFlg.memory.hostiles = false;
                }
            }
            catch(e){
                this.memory.RES5837 = 1;
            }
            obs.observeRoom('W57N36');
            this.memory.obsCounter = 8;
            break;
        case 8:
            try{
                this.memory.RES5736 = Game.rooms['W57N36'].controller.reservation['ticksToEnd'];
                var invFlg = Game.flags.INVRM5736;
                var hostile = invFlg.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: { owner: { username: 'Invader' } }});
                if(hostile != undefined){
                    invFlg.memory.hostiles = true;
                } else{
                    invFlg.memory.hostiles = false;
                }
            }
            catch(e){
                this.memory.RES5736 = 1;
            }
            obs.observeRoom('W56N37');
            this.memory.obsCounter = 9;
            break;
        case 9:
            try{
                this.memory.RES5637 = Game.rooms['W56N37'].controller.reservation['ticksToEnd'];
                var invFlg = Game.flags.INVRM5637;
                var hostile = invFlg.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: { owner: { username: 'Invader' } }});
                if(hostile != undefined){
                    invFlg.memory.hostiles = true;
                } else{
                    invFlg.memory.hostiles = false;
                }
            }
            catch(e){
                this.memory.RES5637 = 1;
            }
            obs.observeRoom('W57N38');
            this.memory.obsCounter = 10;
            break;
        case 10:
            try{
                this.memory.RES5738 = Game.rooms['W57N38'].controller.reservation['ticksToEnd'];
                var invFlg = Game.flags.INVRM5738;
                var hostile = invFlg.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: { owner: { username: 'Invader' } }});
                if(hostile != undefined){
                    invFlg.memory.hostiles = true;
                } else{
                    invFlg.memory.hostiles = false;
                }
            }
            catch(e){
                this.memory.RES5738 = 1;
            }
            obs.observeRoom('W62N37');
            this.memory.obsCounter = 0;
            break;
        default:
            obs.observeRoom('W62N37');
            this.memory.obsCounter = 0;
            break;
    }
}