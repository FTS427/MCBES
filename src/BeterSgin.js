// LiteLoader-AIDS automatic generated
/// <reference path="c:\Users\FTS42\Documents\MCBES\Lib/dts/helperlib/src/index.d.ts"/> 

ll.registerPlugin(
    /* name */ "BetterSign",
    /* introduction */ "A tool for better apeaer",
    /* version */ [0,0,1],
    /* otherInformation */ null
); 

mc.listen("onJoin",function(pl){
    pl.sendText("Hello")
    pl.tell("欢迎加入ZH-Server!") //对玩家输出
})