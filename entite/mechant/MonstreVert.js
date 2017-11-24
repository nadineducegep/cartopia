var MonstreVert = function(terrain)
{
	Mechant.call(this, terrain);
	var instanceMonstreVert = this;
	
	this.afficher = function(dessin)
	{
dessin.save();

dessin.translate(instanceMonstreVert.xPixel, instanceMonstreVert.yPixel);
dessin.scale(2,2);

dessin.strokeStyle="rgba(0,0,0,0)";
dessin.miterLimit=4;
dessin.font="normal normal normal normal 15px / 21.4286px ''";
dessin.font="   15px ";
dessin.scale(0.13333333333333333,0.13333333333333333);
dessin.scale(0.13333333333333333,0.13333333333333333);
dessin.save();
var g = dessin.createRadialGradient(330,312.81,0,330,312.81,166.27);
g.addColorStop(0,"#ffffff");
g.addColorStop(1,"#f8f3ba");
dessin.fillStyle=g;
dessin.save();
dessin.strokeStyle="rgba(0,0,0,0)";
dessin.miterLimit=4;
dessin.font="";
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(0,0);
dessin.lineTo(1263,0);
dessin.lineTo(1263,662);
dessin.lineTo(0,662);
dessin.closePath();
dessin.clip();
dessin.save();
dessin.font="   15px ";
if(instanceMonstreVert.droite)
{	
	dessin.transform(1,0,0,1,-209.98938,-142.380007);
}
else
{	
	dessin.transform(1,0,0,1,-160.260727,-145.305221);
}
dessin.save();
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(-10000,-10000);
dessin.lineTo(20000,-10000);
dessin.quadraticCurveTo(20000,-10000,20000,-10000);
dessin.lineTo(20000,20000);
dessin.quadraticCurveTo(20000,20000,20000,20000);
dessin.lineTo(-10000,20000);
dessin.quadraticCurveTo(-10000,20000,-10000,20000);
dessin.lineTo(-10000,-10000);
dessin.quadraticCurveTo(-10000,-10000,-10000,-10000);
dessin.closePath();
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.restore();
dessin.restore();
var p = dessin.createPattern(dessin.canvas,"no-repeat");
dessin.fillStyle=p;
dessin.strokeStyle="#000000";
dessin.lineWidth=8.75;
dessin.font="   15px ";
dessin.beginPath();
if(instanceMonstreVert.droite)
{	
dessin.moveTo(240.01,217.62);
dessin.bezierCurveTo(240.01,286.902,165.01,330.203,105.01,295.562);
dessin.bezierCurveTo(77.164,279.485,60.01,249.774,60.01,217.62);
dessin.bezierCurveTo(60.01,148.338,135.01,105.037,195.01,139.678);
dessin.bezierCurveTo(222.856,155.755,240.01,185.466,240.01,217.62);
}
else
{
dessin.moveTo(289.739,214.695);
dessin.bezierCurveTo(289.739,283.977,214.739,327.278,154.739,292.637);
dessin.bezierCurveTo(126.893,276.56,109.739,246.849,109.739,214.695);
dessin.bezierCurveTo(109.739,145.413,184.739,102.112,244.739,136.753);
dessin.bezierCurveTo(272.585,152.83,289.739,182.541,289.739,214.695);
}


dessin.closePath();
dessin.fill("evenodd");
dessin.stroke();
dessin.restore();
dessin.save();
dessin.font="   15px ";
dessin.beginPath();
if(instanceMonstreVert.droite)
{
dessin.moveTo(158,249.02);
dessin.bezierCurveTo(158,257.199,149.146,262.311,142.063,258.222);
dessin.bezierCurveTo(138.775,256.324,136.75,252.816,136.75,249.02);
dessin.bezierCurveTo(136.75,240.841,145.604,235.729,152.688,239.818);
dessin.bezierCurveTo(155.975,241.716,158,245.224,158,249.02);	
}
else
{
dessin.moveTo(215.042,246.095);
dessin.bezierCurveTo(215.042,254.274,206.188,259.386,199.105,255.297);
dessin.bezierCurveTo(195.817,253.399,193.792,249.891,193.792,246.095);
dessin.bezierCurveTo(193.792,237.916,202.646,232.804,209.73,236.893);
dessin.bezierCurveTo(213.017,238.791,215.042,242.299,215.042,246.095);
}


dessin.closePath();
dessin.fill("evenodd");
dessin.stroke();
dessin.restore();
dessin.save();
var g = dessin.createRadialGradient(330,312.81,0,330,312.81,166.27);
g.addColorStop(0,"#ffffff");
g.addColorStop(1,"#f8f3ba");
dessin.fillStyle=g;
dessin.save();
dessin.strokeStyle="rgba(0,0,0,0)";
dessin.miterLimit=4;
dessin.font="";
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(0,0);
dessin.lineTo(1263,0);
dessin.lineTo(1263,662);
dessin.lineTo(0,662);
dessin.closePath();
dessin.clip();
dessin.save();
dessin.font="   15px ";
if(instanceMonstreVert.droite)
	dessin.transform(1,0,0,1,-209.98938,-142.380007);
else
	dessin.transform(1,0,0,1,-160.260727,-145.305221);

dessin.save();
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(-10000,-10000);
dessin.lineTo(20000,-10000);
dessin.quadraticCurveTo(20000,-10000,20000,-10000);
dessin.lineTo(20000,20000);
dessin.quadraticCurveTo(20000,20000,20000,20000);
dessin.lineTo(-10000,20000);
dessin.quadraticCurveTo(-10000,20000,-10000,20000);
dessin.lineTo(-10000,-10000);
dessin.quadraticCurveTo(-10000,-10000,-10000,-10000);
dessin.closePath();
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.restore();
dessin.restore();
var p = dessin.createPattern(dessin.canvas,"no-repeat");
dessin.fillStyle=p;
dessin.strokeStyle="#000000";
dessin.lineWidth=8.75;
dessin.font="   15px ";
dessin.translate(55.252,-142.38);
dessin.beginPath();
dessin.moveTo(450,360);
dessin.translate(360,360);
dessin.rotate(0);
dessin.arc(0,0,90,0,3.141592653589793,0);
dessin.rotate(0);
dessin.translate(-360,-360);
dessin.translate(360,360);
dessin.rotate(0);
dessin.arc(0,0,90,3.141592653589793,6.283185307179586,0);
dessin.rotate(0);
dessin.translate(-360,-360);
dessin.closePath();
dessin.fill("evenodd");
dessin.stroke();
dessin.restore();
dessin.save();
dessin.font="   15px ";
dessin.translate(249.39,-321.56);
dessin.beginPath();
dessin.moveTo(180,577.99);
dessin.translate(169.375,577.99);
dessin.rotate(0);
dessin.arc(0,0,10.625,0,3.141592653589793,0);
dessin.rotate(0);
dessin.translate(-169.375,-577.99);
dessin.translate(169.375,577.99);
dessin.rotate(0);
dessin.arc(0,0,10.625,3.141592653589793,6.283185307179586,0);
dessin.rotate(0);
dessin.translate(-169.375,-577.99);
dessin.closePath();
dessin.fill("evenodd");
dessin.stroke();
dessin.restore();
dessin.save();
var g = dessin.createRadialGradient(470.59,514.29,0,470.59,514.29,359.8);
g.addColorStop(0,"#5bc660");
g.addColorStop(1,"#006d05");
dessin.fillStyle=g;
dessin.save();
dessin.strokeStyle="rgba(0,0,0,0)";
dessin.miterLimit=4;
dessin.font="";
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(0,0);
dessin.lineTo(1263,0);
dessin.lineTo(1263,662);
dessin.lineTo(0,662);
dessin.closePath();
dessin.clip();
dessin.save();
dessin.font="   15px ";
dessin.transform(0.86426,0,0,1.1571,-72.5,-162.36);
dessin.save();
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(-10000,-10000);
dessin.lineTo(20000,-10000);
dessin.quadraticCurveTo(20000,-10000,20000,-10000);
dessin.lineTo(20000,20000);
dessin.quadraticCurveTo(20000,20000,20000,20000);
dessin.lineTo(-10000,20000);
dessin.quadraticCurveTo(-10000,20000,-10000,20000);
dessin.lineTo(-10000,-10000);
dessin.quadraticCurveTo(-10000,-10000,-10000,-10000);
dessin.closePath();
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.restore();
dessin.restore();
var p = dessin.createPattern(dessin.canvas,"no-repeat");
dessin.fillStyle=p;
dessin.strokeStyle="#000000";
dessin.lineWidth=6.25;
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(121.25,642.5);
dessin.bezierCurveTo(122.5,592.5,127.5,502.5,157.5,472.5);
dessin.bezierCurveTo(136.25,448.75,128.75,418.75,130,418.75);
dessin.bezierCurveTo(131.25,418.75,155,423.75,185,465);
dessin.lineTo(205,461.25);
if(instanceMonstreVert.droite)
{	
dessin.bezierCurveTo(205.833,414.583,165.901,350.42,151.87,312.925);
dessin.lineTo(174.157,305.612);
dessin.bezierCurveTo(187.316,350.36,228.75,418.75,226.25,460);
}	
else
{	
dessin.bezierCurveTo(205.833,414.583,205.391,343.107,191.36,305.612);
dessin.lineTo(213.647,308.537);
dessin.bezierCurveTo(212.18,353.285,228.75,418.75,226.25,460);
}	

dessin.bezierCurveTo(288.75,455,316.25,456.25,376.25,463.75);
dessin.bezierCurveTo(374.583,419.167,385.417,350.83,396.25,310);
dessin.lineTo(420,310);
dessin.bezierCurveTo(401.25,370,397.5,432.5,397.5,466.25);
dessin.lineTo(420.625,473.125);
dessin.bezierCurveTo(445.833,451.25,453.542,440.625,490,430);
dessin.bezierCurveTo(476.667,453.75,472.083,467.5,446.25,490);
dessin.bezierCurveTo(476.667,533.333,460.833,594.17,455,636.25);
dessin.bezierCurveTo(444.167,666.667,434.583,689.583,403.75,690);
dessin.lineTo(405,748.75);
dessin.bezierCurveTo(437.083,745.833,445.417,772.917,437.5,790);
dessin.bezierCurveTo(428.854,810,395.629,805.184,390.625,791.25);
dessin.bezierCurveTo(383.177,812.5,365.807,809.062,357.188,785.156);
dessin.bezierCurveTo(352.318,806.25,327.448,813.125,308.75,791.25);
dessin.bezierCurveTo(295,772.5,307.5,742.5,350,746.25);
dessin.lineTo(350,676.25);
dessin.lineTo(350,697.5);
dessin.bezierCurveTo(301.667,708.333,277.083,707.917,227.5,695);
dessin.lineTo(227.5,675);
dessin.lineTo(226.25,740);
dessin.bezierCurveTo(258.75,748.75,263.75,760,260,782.5);
dessin.bezierCurveTo(256.563,804.687,220.625,814.375,212.812,787.812);
dessin.bezierCurveTo(210.938,818.437,171.458,809.375,171.094,782.969);
dessin.bezierCurveTo(162.786,809.141,134.192,803.695,126.172,791.484);
dessin.bezierCurveTo(113.208,769.725,120.807,741.328,157.5,738.75);
dessin.lineTo(157.5,685);
dessin.bezierCurveTo(140.833,682.083,124.167,664.167,121.25,642.5);
dessin.closePath();
dessin.fill("evenodd");
dessin.stroke();
dessin.restore();
dessin.save();
dessin.fillStyle="rgba(0,0,0,0)";
dessin.strokeStyle="#000000";
dessin.lineWidth=6.25;
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(178.75,591.25);
dessin.bezierCurveTo(187.5,567.5,201.25,558.75,226.25,552.5);
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.save();
dessin.fillStyle="rgba(0,0,0,0)";
dessin.strokeStyle="#000000";
dessin.lineWidth=6.25;
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(362.5,565);
dessin.bezierCurveTo(382.5,565,391.25,576.25,393.75,596.25);
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.save();
dessin.fillStyle="rgba(0,0,0,0)";
dessin.strokeStyle="#000000";
dessin.lineWidth=6.25;
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(195,566.25);
dessin.bezierCurveTo(237.5,621.25,316.25,652.5,383.75,573.75);
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.restore();
	}
}

MonstreVert.prototype = Object.create(Mechant.prototype);
