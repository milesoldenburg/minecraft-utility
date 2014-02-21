define(function(){
	
	var recipes = {
        'Wood Planks' : {
        	produces : 4,
        	materials : {
            	'Wood' : 1
        	}
    	},
    	'Sticks' : {
        	produces : 4,
        	materials : {
            	'Wood Planks' : 2
        	}
    	},
    	'Crafting Table' : {
        	produces : 1,
        	materials : {
            	'Wood Planks' : 4
        	}
    	},
    	'Furnace' : {
    		produces : 1,
    		materials : {
    			'Cobblestone' : 8
    		}
    	},
    	'Chest' : {
        	produces : 1,
        	materials : {
            	'Wood Planks' : 8
        	}
    	},
    	'Torches' : {
        	produces : 4,
        	materials : {
            	'Coal' : 1,
            	'Sticks' : 1
        	}
    	},
    	'Glowstone' : {
        	produces : 1,
        	materials : {
            	'Glowstone Dust' : 4
        	}
    	},
    	'Wool' : {
        	produces : 1,
        	materials : {
            	'String' : 4
        	}
    	},
    	'TNT' : {
        	produces : 1,
        	materials : {
            	'Sand' : 4,
            	'Gunpowder' : 5
        	}
    	},
    	'Wood Slabs' : {
        	produces : 6,
        	materials : {
            	'Wood Planks' : 3
        	}
    	},
    	'Stone Slabs' : {
        	produces : 6,
        	materials : {
            	'Stone' : 3
        	}
    	},
    	'Sandstone Slabs' : {
        	produces : 6,
        	materials : {
            	'Sandstone' : 3
        	}
    	},
    	'Quartz Slabs' : {
        	produces : 6,
        	materials : {
            	'Block of Quartz' : 3
        	}
    	},
    	'Wood Stairs' : {
        	produces : 4,
        	materials : {
            	'Wood Planks' : 6
        	}
    	},
    	'Stone Stairs' : {
        	produces : 4,
        	materials : {
            	'Stone' : 6
        	}
    	},
    	'Snow Block' : {
        	produces : 1,
        	materials : {
            	'Snowballs' : 4
        	}
    	},
    	'Clay Block' : {
        	produces : 1,
        	materials : {
            	'Clay' : 4
        	}
    	},
    	'Bricks' : {
        	produces : 1,
        	materials : {
            	'Brick' : 4
        	}
    	},
    	'Stone Brick' : {
        	produces : 4,
        	materials : {
            	'Stone' : 4
        	}
    	},
    	'Nether Brick' : {
        	produces : 4,
        	materials : {
            	'Nether Brick (item)' : 4
        	}
    	},
    	'Bookshelf' : {
        	produces : 1,
        	materials : {
            	'Wood Planks' : 6,
            	'Books' : 3
        	}
    	},
    	'Books' : {
        	produces : 1,
        	materials : {
            	'Paper' : 3,
            	'Leather' : 1
        	}
    	},
    	'Paper' : {
        	produces : 3,
        	materials : {
            	'Sugar Cane' : 3
        	}
    	},
    	'Sandstone' : {
        	produces : 1,
        	materials : {
            	'Sand' : 4
        	}
    	},
    	'Smooth Sandstone' : {
        	produces : 4,
        	materials : {
            	'Sandstone' : 4
        	}
    	},
    	'Chiseled Sandstone' : {
        	produces : 1,
        	materials : {
            	'Sandstone Slabs' : 4
        	}
    	},
    	'Block of Quartz' : {
        	produces : 1,
        	materials : {
            	'Nether Quartz' : 4
        	}
    	},
    	'Pillar Quartz Block' : {
        	produces : 2,
        	materials : {
            	'Block of Quartz' : 2
        	}
    	},
    	'Chiseled Quartz Block' : {
        	produces : 1,
        	materials : {
            	'Quartz Slabs' : 2
        	}
    	},
    	'Jack o Lantern' : {
        	produces : 1,
        	materials : {
            	'Pumpkin' : 1,
            	'Torch' : 1
        	}
    	},
    	'Ender Chest' : {
        	produces : 1,
        	materials : {
            	'Obsidian' : 8,
            	'Eye of Ender' : 1
        	}
    	},
    	'Eye of Ender' : {
        	produces : 1,
        	materials : {
            	'Blaze Powder' : 1,
            	'Ender Pearl' : 1
        	}
    	},
    	'Anvil' : {
        	produces : 1,
        	materials : {
            	'Block of Iron' : 3,
            	'Iron Ingot' : 4
        	}
    	},
    	'Block of Iron' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 9
        	}
    	},
    	'Beacon' : {
        	produces : 1,
        	materials : {
            	'Nether Star' : 1,
            	'Glass' : 5,
            	'Obsidian' : 3
        	}
    	},
    	'Rail' : {
        	produces : 16,
        	materials : {
            	'Sticks' : 1,
            	'Iron Ingot' : 6
        	}
    	},
    	'Powered Rail' : {
        	produces : 6,
        	materials : {
            	'Sticks' : 1,
            	'Gold Ingot' : 6,
            	'Redstone' : 1
        	}
    	},
    	'Detector Rail' : {
        	produces : 6,
        	materials : {
            	'Stone Pressure Plate' : 1,
            	'Iron Ingot' : 6,
            	'Redstone' : 1
        	}
    	},
    	'Stone Pressure Plate' : {
        	produces : 1,
        	materials : {
            	'Stone' : 2
        	}
    	},
    	'Wood Pressure Plate' : {
        	produces : 1,
        	materials : {
            	'Wood Planks' : 2
        	}
    	},
    	'Activator Rail' : {
        	produces : 6,
        	materials : {
            	'Iron Ingot' : 6,
            	'Sticks' : 2,
            	'Redstone Torch' : 1
        	}
    	},
    	'Redstone Torch' : {
        	produces : 1,
        	materials : {
            	'Redstone' : 1,
            	'Sticks' : 1
        	}
    	},
    	'Minecart' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 5
        	}
    	},
    	'Minecart with Furnace' : {
        	produces : 1,
        	materials : {
            	'Furnace' : 1,
            	'Minecart' : 1
        	}
    	},
    	'Minecart with Chest' : {
        	produces : 1,
        	materials : {
            	'Chest' : 1,
            	'Minecart' : 1
        	}
    	},
    	'Minecart with TNT' : {
        	produces : 1,
        	materials : {
            	'TNT' : 1,
            	'Minecart' : 1
        	}
    	},
    	'Minecart with Hopper' : {
        	produces : 1,
        	materials : {
            	'Hopper' : 1,
            	'Minecart' : 1
        	}
    	},
    	'Hopper' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 5,
            	'Chest' : 1
        	}
    	},
    	'Boat' : {
        	produces : 1,
        	materials : {
            	'Wood Planks' : 5
        	}
    	},
    	'Iron Axe' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 3,
            	'Sticks' : 2
        	}
    	},
    	'Iron Pickaxe' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 3,
            	'Sticks' : 2
        	}
    	},
    	'Iron Shovel' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 1,
            	'Sticks' : 2
        	}
    	},
    	'Iron Hoe' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 2,
            	'Sticks' : 2
        	}
    	},
    	'Wooden Axe' : {
        	produces : 1,
        	materials : {
            	'Wood Planks' : 3,
            	'Sticks' : 2
        	}
    	},
    	'Wooden Pickaxe' : {
        	produces : 1,
        	materials : {
            	'Wood Planks' : 3,
            	'Sticks' : 2
        	}
    	},
    	'Wooden Shovel' : {
        	produces : 1,
        	materials : {
            	'Wood Planks' : 1,
            	'Sticks' : 2
        	}
    	},
    	'Wooden Hoe' : {
        	produces : 1,
        	materials : {
            	'Wood Planks' : 2,
            	'Sticks' : 2
        	}
    	},
    	'Golden Axe' : {
        	produces : 1,
        	materials : {
            	'Gold Ingot' : 3,
            	'Sticks' : 2
        	}
    	},
    	'Golden Pickaxe' : {
        	produces : 1,
        	materials : {
            	'Gold Ingot' : 3,
            	'Sticks' : 2
        	}
    	},
    	'Golden Shovel' : {
        	produces : 1,
        	materials : {
            	'Gold Ingot' : 1,
            	'Sticks' : 2
        	}
    	},
    	'Golden Hoe' : {
        	produces : 1,
        	materials : {
            	'Gold Ingot' : 2,
            	'Sticks' : 2
        	}
    	},
    	'Diamond Axe' : {
        	produces : 1,
        	materials : {
            	'Diamond' : 3,
            	'Sticks' : 2
        	}
    	},
    	'Diamond Pickaxe' : {
        	produces : 1,
        	materials : {
            	'Diamond' : 3,
            	'Sticks' : 2
        	}
    	},
    	'Diamond Shovel' : {
        	produces : 1,
        	materials : {
            	'Diamond' : 1,
            	'Sticks' : 2
        	}
    	},
    	'Diamond Hoe' : {
        	produces : 1,
        	materials : {
            	'Diamond' : 2,
            	'Sticks' : 2
        	}
    	},
    	'Bucket' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 3
        	}
    	},
    	'Compass' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 4,
            	'Redstone' : 1
        	}
    	},
    	'Map' : {
        	produces : 1,
        	materials : {
            	'Paper' : 8,
            	'Compass' : 1
        	}
    	},
    	'Clock' : {
        	produces : 1,
        	materials : {
            	'Gold Ingot' : 4,
            	'Redstone' : 1
        	}
    	},
    	'Fishing Rod' : {
        	produces : 1,
        	materials : {
            	'Sticks' : 3,
            	'String' : 2
        	}
    	},
    	'Carrot on a Stick' : {
        	produces : 1,
        	materials : {
            	'Fishing Rod' : 1,
            	'Carrot' : 1
        	}
    	},
    	'Shears' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 2
        	}
    	},
    	'Fire Charge' : {
        	produces : 3,
        	materials : {
            	'Blaze Powder' : 1,
            	'Coal' : 1,
            	'Gunpowder' : 1
        	}
    	},
    	'Iron Sword' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 2,
            	'Sticks' : 1
        	}
    	},
    	'Bow' : {
        	produces : 1,
        	materials : {
            	'Sticks' : 3,
            	'String' : 3
        	}
    	},
    	'Arrows' : {
        	produces : 4,
        	materials : {
            	'Flint' : 1,
            	'Sticks' : 1,
            	'Feather' : 1
        	}
    	},
    	'Iron Helmet' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 5
        	}
    	},
    	'Iron Chestplate' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 8
        	}
    	},
    	'Iron Leggings' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 7
        	}
    	},
    	'Iron Boots' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 4
        	}
    	},
        
    	'Golden Chestplate' : {
        	produces : 1,
        	materials : {
            	'Gold Ingot' : 8
        	}
    	},
    	'Golden Leggings' : {
        	produces : 1,
        	materials : {
            	'Gold Ingot' : 7
        	}
    	},
    	'Golden Boots' : {
        	produces : 1,
        	materials : {
            	'Gold Ingot' : 4
        	}
    	},
    	'Diamond Chestplate' : {
        	produces : 1,
        	materials : {
            	'Diamond' : 8
        	}
    	},
    	'Diamond Leggings' : {
        	produces : 1,
        	materials : {
            	'Diamond' : 7
        	}
    	},
    	'Diamond Boots' : {
        	produces : 1,
        	materials : {
            	'Diamond' : 4
        	}
    	},
    	'Trapdoors' : {
        	produces : 2,
        	materials : {
            	'Wood Planks' : 6
        	}
    	},
    	'Weighted Pressure Plate' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 2
        	}
    	},
    	'Wood Button' : {
        	produces : 1,
        	materials : {
            	'Wood Planks' : 1
        	}
    	},
    	'Stone Button' : {
        	produces : 1,
        	materials : {
            	'Stone' : 1
        	}
    	},
    	'Note Block' : {
        	produces : 1,
        	materials : {
            	'Wood Planks' : 8,
            	'Diamond' : 1
        	}
    	},
    	'Dispenser' : {
        	produces : 1,
        	materials : {
            	'Cobblestone' : 7,
            	'Bow' : 1,
            	'Redstone' : 1
        	}
    	},
    	'Dropper' : {
        	produces : 1,
        	materials : {
            	'Cobblestone' : 7,
            	'Redstone' : 1
        	}
    	},
    	'Piston' : {
        	produces : 1,
        	materials : {
            	'Wood Planks' : 3,
            	'Iron Ingot' : 1,
            	'Cobblestone' : 4,
            	'Redstone' : 1
        	}
    	},
    	'Sticky Piston' : {
        	produces : 1,
        	materials : {
        	    'Slimeball' : 1,
            	'Piston' : 1
        	}
    	},
    	'Redstone Lamp' : {
        	produces : 1,
        	materials : {
            	'Glowstone' : 1,
            	'Redstone' : 4
        	}
    	},
    	'Lever' : {
        	produces : 1,
        	materials : {
            	'Sticks' : 1,
            	'Cobblestone' : 1
        	}
    	},
    	'Tripwire Hook' : {
        	produces : 2,
        	materials : {
            	'Iron Ingot' : 1,
            	'Sticks' : 1,
            	'Wood Planks' : 1
        	}
    	},
    	'Daylight Sensor' : {
        	produces : 1,
        	materials : {
            	'Glass' : 3,
            	'Nether Quartz' : 3,
            	'Wooden Slabs' : 3
        	}
    	},
    	'Trapped Chest' : {
        	produces : 1,
        	materials : {
            	'Chest' : 1,
            	'Tripwire Hook' : 1
        	}
    	},
        'Wooden Door' : {
        	produces : 1,
        	materials : {
            	'Wood Planks' : 6
        	}
    	},
    	'Iron Door' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 6
        	}
    	},
    	'Redstone Repeater' : {
        	produces : 1,
        	materials : {
            	'Stone' : 3,
            	'Redstone' : 1,
            	'Redstone Torch' : 2
        	}
    	},
    	'Redstone Comparator' : {
        	produces : 1,
        	materials : {
            	'Redstone Torch' : 3,
            	'Nether Quartz' : 1,
            	'Stone' : 3
        	}
    	},
    	'Glass Pane' : {
    		produces : 16,
    		materials : {
    			'Glass' : 6
    		}
    	},
    	'Iron Bars' : {
        	produces : 16,
        	materials : {
            	'Iron Ingot' : 6
        	}
    	},
    	'Glass' : {
        	produces : 1,
        	materials : {
            	'Sand' : 1
        	}
    	},
    	'Bowls' : {
        	produces : 4,
        	materials : {
            	'Wood Planks' : 3
        	}
    	},
    	'Mushroom Stew' : {
        	produces : 1,
        	materials : {
            	'Bowls' : 1,
            	'Red Mushroom' : 1,
            	'Brown Mushroom' : 1
        	}
    	},
    	'Bread' : {
        	produces : 1,
        	materials : {
            	'Wheat' : 3
        	}
    	},
    	'Sugar' : {
        	produces : 1,
        	materials : {
            	'Sugar Cane' : 1
        	}
    	},
    	'Cake' : {
        	produces : 1,
        	materials : {
            	'Milk' : 3,
            	'Sugar' : 2,
            	'Egg' : 1,
            	'Wheat' : 3
        	}
    	},
    	'Cookie' : {
        	produces : 8,
        	materials : {
            	'Wheat' : 2,
            	'Cocoa Beans' : 1
        	}
    	},
    	'Golden Apple' : {
        	produces : 1,
        	materials : {
            	'Gold Ingot' : 8,
            	'Apple' : 1
        	}
    	},
    	'Enchanted Golden Apple' : {
        	produces : 1,
        	materials : {
            	'Gold Block' : 8,
            	'Apple' : 1
        	}
    	},
    	'Gold Block' : {
        	produces : 1,
        	materials : {
                'Gold Ingot' : 9
        	}
    	},
        'Pumpkin Pie' : {
        	produces : 1,
        	materials : {
            	'Egg' : 1,
            	'Sugar' : 1,
            	'Pumpkin' : 1
        	}
    	},
    	'Hay Bale' : {
        	produces : 1,
        	materials : {
            	'Wheat' : 9
        	}
    	},
    	'Golden Carrot' : {
        	produces : 1,
        	materials : {
            	'Gold Nuggets' : 8,
            	'Carrot' : 1
        	}
    	},
    	'Gold Nuggets' : {
        	produces : 9,
        	materials : {
            	'Gold Ingot' : 1
        	}
    	},
    	'Lead' : {
        	produces : 2,
        	materials : {
            	'String' : 4,
            	'Slimeball' : 1
        	}
    	},
    	'Ladders' : {
        	produces : 3,
        	materials : {
            	'Sticks' : 7
        	}
    	},
    	'Fences' : {
        	produces : 2,
        	materials : {
            	'Sticks' : 6
        	}
    	},
    	'Fence Gate' : {
        	produces : 1,
        	materials : {
            	'Sticks' : 4,
            	'Wood Planks' : 2
        	}
    	},
    	'Cobblestone Wall' : {
        	produces : 6,
        	materials : {
            	'Cobblestone' : 6
        	}
    	},
    	'Painting' : {
        	produces : 1,
        	materials : {
            	'Sticks' : 8,
            	'Wool' : 1
        	}
    	},
    	'Item Frame' : {
        	produces : 1,
        	materials : {
            	'Sticks' : 8,
            	'Leather' : 1
        	}
    	},
    	'Sign' : {
        	produces : 3,
        	materials : {
            	'Wood Planks' : 6,
            	'Sticks' : 1
        	}
    	},
    	'Book and Quill' : {
        	produces : 1,
        	materials : {
            	'Feather' : 1,
            	'Ink Sac' : 1,
            	'Books' : 1
        	}
    	},
    	'Bed' : {
        	produces : 1,
        	materials : {
            	'Wool' : 3,
            	'Wood Planks' : 3
        	}
    	},
    	'Flower Pot' : {
        	produces : 1,
        	materials : {
            	'Bricks' : 3
        	}
    	},
    	'Bone Meal' : {
        	produces : 3,
        	materials : {
            	'Bone': 1
        	}
    	},
    	'Light Gray Dye' : {
        	produces : 2,
        	materials : {
            	'Gray Dye' : 1,
            	'Bone Meal' : 1
        	}
    	},
    	'Gray Dye' : {
        	produces : 2,
        	materials : {
            	'Ink Sac' : 1,
            	'Bone Meal' : 1
        	}
    	},
    	'Rose Red' : {
        	produces : 2,
        	materials : {
            	'Rose' : 1
        	}
    	},
    	'Orange Dye' : {
        	produces : 2,
        	materials : {
            	'Rose Red' : 1,
            	'Dandelion Yellow' : 1
        	}
    	},
    	'Dandelion Yellow' : {
        	produces : 2,
        	materials : {
            	'Dandelion' : 1
        	}
    	},
    	'Lime Dye' : {
        	produces : 2,
        	materials : {
            	'Cactus Green' : 1,
            	'Bone Meal' : 1
        	}
    	},
    	'Cactus Green' : {
        	produces : 1,
        	materials : {
            	'Cactus' : 1
        	}
    	},
    	'Light Blue Dye' : {
        	produces : 2,
        	materials : {
            	'Lapis Lazuli' : 1,
            	'Bone Meal' : 1
        	}
    	},
    	'Cyan Dye' : {
        	produces : 2,
        	materials : {
            	'Lapis Lazuli' : 1,
            	'Cactus Green' : 1
        	}
    	},
    	'Purple Dye' : {
        	produces : 2,
        	materials : {
            	'Lapis Lazuli' : 1,
            	'Rose Red' : 1
        	}
    	},
    	'Magenta Dye' : {
        	produces : 2,
        	materials : {
            	'Purple Dye' : 1,
            	'Pink Dye' : 2
        	}
    	},
    	'Pink Dye' : {
        	produces : 2,
        	materials : {
            	'Rose Red' : 1,
            	'Bone Meal' : 1
        	}
    	},
    	'Enchantment Table' : {
        	produces : 1,
        	materials : {
            	'Diamond' : 2,
            	'Obsidian' : 2,
            	'Books' : 1
        	}
    	},
    	'Glass Bottle' : {
        	produces : 3,
        	materials : {
            	'Glass' : 3
        	}
    	},
    	'Cauldron' : {
        	produces : 1,
        	materials : {
            	'Iron Ingot' : 7
        	}
    	},
    	'Brewing Stand' : {
        	produces : 1,
        	materials : {
            	'Blaze Rod' : 1,
            	'Cobblestone' : 3
        	}
    	},
    	'Blaze Powder' : {
        	produces : 2,
        	materials : {
            	'Blaze Rod' : 1
        	}
    	},
    	'Magma Cream' : {
        	produces : 1,
        	materials : {
            	'Slimeball' : 1,
            	'Blaze Powder' : 1
        	}
    	},
    	'Fermented Spider Eye' : {
        	produces : 1,
        	materials : {
            	'Spider Eye' : 1,
            	'Brown Mushroom' : 1,
            	'Sugar' : 1
        	}
    	},
    	'Glistering Melon' : {
        	produces : 1,
        	materials : {
            	'Gold Nuggets' : 8,
            	'Melon' : 1
        	}
    	}
    };
	
	return {
		'recipes' : recipes
	};
	
});