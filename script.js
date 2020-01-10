var m1=$('#m1');
var m2=$('#m2');
var m3=$('#m3');
var s1=$('#s1');
var s2=$('#s2');
var s3=$('#s3');
var mm1=$('#mm1')
var ss1=$('#ss1')
var mm2=$('#mm2')
var ss2=$('#ss2')
var mm3=$('#mm3')
var ss3=$('#ss3')
s1.hide();
m1.mouseenter(()=>{
    s1.show()
})
m1.mouseleave(()=>{
    s1.hide()
})
s2.hide();
m2.mouseenter(()=>{
    s2.show()
})
m2.mouseleave(()=>{
    s2.hide()
})

s3.hide();
m3.mouseenter(()=>{
    s3.show()
})
m3.mouseleave(()=>{
    s3.hide()
})
//submenu
ss1.hide();
mm1.mouseenter(()=>{
    ss1.show()
})
mm1.mouseleave(()=>{
    ss1.hide()
})

ss2.hide();
mm2.mouseenter(()=>{
    ss2.show()
})
mm2.mouseleave(()=>{
    ss2.hide()
})

ss3.hide();
mm3.mouseenter(()=>{
    ss3.show()
})
mm3.mouseleave(()=>{
    ss3.hide()
})