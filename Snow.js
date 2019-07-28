// function Snow(id) {
// 	FireWorm.call(this,id)   // 继承萤火虫所有属性
//     this.ele.css({
//         left:Math.random()*($('body').width()-100),
//         top:0  
//     })
// }
// for (var k in FireWorm.prototype) {  // 遍历萤火虫原型对象
// 	Snow.prototype[k] = FireWorm.prototype[k]  // 复制了对象中所有属性
// }



// Snow.prototype.fall = function() {  // 重写飞的方法
// 	// var y = this.ele.offset().y+10;
// 	// var _this=this;
//     this.ele.animate({top:$('body').height()-100}, 5000,function(){
//         this.remove();  
//     }
//     )
// }


function Snow(id){
    FireWorm.call(this,id);
    this.ele.css({
        left:Math.random()*($('body').width()-100),
        top:0
    })
}
for(var i in FireWorm.prototype)
{
    Snow.prototype[i]=FireWorm.prototype[i];
}
Snow.prototype.fall=function(){
    var y=this.ele.offset().y+10;
    var _this=this;
    this.ele.animate({
        top:500
    },3000,function(){
    //    this.remove();
    })
}