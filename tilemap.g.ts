// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "tmap_trees":
            case "tmap_trees1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202010404040404040404040404040404020205050505050404040404040505040202040404040504040504040505040402020404040405050405040505050404020204040404040504040504040404040202040405050405050404040404040402020404040504040504040405050504020204050404040405040405050404040202040504040404040404050404040402020405040404040405050504040505020204050404050505050404040505040202040504040404040404040405040402020405040405050505050505050404020204040404040404040404040404040302020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 . . . . . . 2 2 . 2 
2 . . . . 2 . . 2 . . 2 2 . . 2 
2 . . . . 2 2 . 2 . 2 2 2 . . 2 
2 . . . . . 2 . . 2 . . . . . 2 
2 . . 2 2 . 2 2 . . . . . . . 2 
2 . . . 2 . . 2 . . . 2 2 2 . 2 
2 . 2 . . . . 2 . . 2 2 . . . 2 
2 . 2 . . . . . . . 2 . . . . 2 
2 . 2 . . . . . 2 2 2 . . 2 2 2 
2 . 2 . . 2 2 2 2 . . . 2 2 . 2 
2 . 2 . . . . . . . . . 2 . . 2 
2 . 2 . . 2 2 2 2 2 2 2 2 . . 2 
2 . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileDarkGrass2,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
