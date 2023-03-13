/*
BUILD INFO:
  dir: core/Bloody
  target: main.js
  files: 6
*/



// file: Translations.js





// file: Items.js

﻿
﻿var textureid = FileTools.GetListOfFiles(__dir__+"assets/items-opaque/","png")
﻿for(var i in textureid){
﻿IDRegistry.genItemID(textureid[i]); 
Item.createItem(textureid[i], textureid[i], {name: textureid[i], meta: 0}, {stack: 64});}




// file: Blocks.js

﻿const BLOCK_TYPE_LIQUID = Block.createSpecialType({
    solid: false,
    renderlayer: 1,
    explosionres: 10000
});

 LiquidRegistry.registerLiquid("bloody_liquid", "Blood", ["bloody_liquid_flow"]); 
 
Block.createLiquidBlock("bloody_liquid", 
{ 
 name: "Blood", 
 still: { 
 texture: ["bloody_liquid_still", 0], 
 id: "bloody_liquid_still",
 }, 
 flowing: { 
 texture: ["bloody_liquid_flow", 0], 
 id: "bloody_liquid_flowing",
 }, 
 bucket: { 
 texture: { name: "bucket_blood", meta: 0 }, 
 name: "Bucket of terrible blood",
 id: "bucket_of_blood",
 }, 
}, BLOCK_TYPE_LIQUID);

IDRegistry.genBlockID("bloody_block");
Block.createBlock("bloody_block", [
	{name: "Hardened blood", texture: [["hardened_blood", 0]], inCreative: true}]);




// file: EvilAPI.js

﻿




// file: Structures.js





// file: EvilWork/BloodyWorking.js

TileEntity.registerPrototype(BlockID.bloody_liquid_still, {
    useNetworkItemContainer: true,
    defaultValues: {
     value: true
    },

    tick: function() {
       if(World.getThreadTime()%200==0){this.blockSource.setBlock(this.x,this.y,this.z,BlockID.bloody_block,0)};
       
          },

     }
);




