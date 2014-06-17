function drawDonut(sortorder , reason) {
			var elem_id = "#donut_selector"
			
			var timer = setTimeout(function() {

  			var complete = true;//flag to wait for ajax completion
  			var purposes = [{"purpose":"Health"},{"purpose":"Education"},{"purpose":"Agriculture"},{"purpose":"Law & Justice"},{"purpose":"Water"}];

			var purpose_yearly = [
      					[0,0,0,0,0,0,0,0,0,0,12149800.0,72333461.0,175918800.0,709266787.0,709636417.0,725466412.0,736469770.0,775327387.0,1182315068.0,900906227.0,1337742269.0,1705711360.0,1848544951.0,1790615504.0,1672048014.0,2469482187.0,2608382608.0,1934633801.0,2578186052.0,3679023354.0,3027209927.0,3978458469.0,3777686026.0,4261173701.0,3575982442.0,4228628491.0,6013996607.0,4521398522.0,6504225618.0,6125307722.0,6207836347.0,5987718200.0,6637314366.0,10728849025.0,10256559995.0,11385752120.0,12701779643.0,11745111523.0,13343679876.0,15033170878.0,15250848163.0],
      					[0,0,37082900.0,32848800.0,157080500.0,229549100.0,371891900.0,142890000.0,288392300.0,482529000.0,709546208.0,922442320.0,1280706142.0,2132552884.0,1162484751.0,1358889337.0,1743578379.0,2129963857.0,2091002857.0,1987275490.0,2355896103.0,2937576031.0,2990501477.0,2819095701.0,3250006415.0,4321863334.0,2982970227.0,3341695628.0,3201645057.0,4538021980.0,4662925969.0,6505801510.0,4518814207.0,5188577237.0,6407395033.0,3946696595.0,5951934230.0,7134755608.0,7244683982.0,7533706871.0,7400258836.0,8206490137.0,10215708463.0,10905581953.0,10895290588.0,8962028267.0,10453077587.0,10804734044.0,10633366882.0,12845590339.0,13074019459.0],
      					[0.0,632413460.0,407911700.0,720283200.0,703720800.0,1136884600.0,1092837700.0,1460830400.0,782484239.0,3006509748.0,4009182563.0,3477458547.0,3356333121.0,6636181637.0,7751866951.0,9465081705.0,9622952194.0,13069988534.0,14643635714.0,14364029971.0,15782102763.0,16280152719.0,16205376396.0,19225846171.0,16828260396.0,16967528385.0,19558293054.0,14334467418.0,15827233775.0,14258603238.0,14495712381.0,14145197746.0,12397434544.0,10904929364.0,10465603971.0,9929669162.0,11308692639.0,9757542640.0,10331501169.0,9443896009.0,9004092794.0,11526003616.0,9398571608.0,7191186560.0,7958437700.0,10494705994.0,8440356738.0,11914702212.0,11365753211.0,14846679811.0,12929144218.0],
						[0,0,0,0,0,0,0,0,12961400.0,0,21753546.0,97400173.0,4371895.0,536550379.0,1213776038.0,585310106.0,721576601.0,546519440.0,665720717.0,410642365.0,509047059.0,715986566.0,1115875531.0,1018130579.0,1269844030.0,1966832574.0,1895728049.0,2584802198.0,3590533022.0,4212417273.0,6304689921.0,4337119377.0,5767369188.0,4607964689.0,5255397885.0,9472724618.0,10488628760.0,8299421494.0,13601051440.0,17524752385.0,16841126257.0,19763065067.0,17701389102.0,22662020666.0,22456871742.0,23363774414.0,23099191415.0,22146112709.0,25606232588.0,36925180993.0,30766332121.0],
						[0.0,49359100.0,37082900.0,382045900.0,141023000.0,46318500.0,149558360.0,188262700.0,298307670.0,112291958.0,490227192.0,1515522064.0,1178992415.0,2155503760.0,2431539362.0,2601987342.0,2938876055.0,3776659821.0,4924359980.0,3598209667.0,4065871570.0,4616724787.0,4520625582.0,5714483554.0,5551103544.0,7085953870.0,5194173634.0,5052815142.0,5029831715.0,4802511314.0,5900402253.0,5257016116.0,6523361327.0,7899823108.0,7093191394.0,7729245294.0,7450800732.0,8157499603.0,6772904853.0,7237078271.0,9277523039.0,8948231463.0,6991153671.0,6837429699.0,7032142460.0,9393276410.0,8546211973.0,10231815664.0,8496848037.0,11619529857.0,10573003408.0],
						[0.0,681772560.0,482077500.0,1135177900.0,1001824300.0,1412752200.0,1614287960.0,1791983100.0,1382145609.0,3601330706.0,5242859309.0,6085156565.0,5996322373.0,12170055444.0,13269303518.0,14736734902.0,15763452996.0,20298459036.0,23507034337.0,21261063719.0,24050659759.0,26256151460.0,26680923939.0,30568171508.0,28571262391.0,32811660342.0,32239547560.0,27248414185.0,30227429624.0,31490577159.0,34390940436.0,34223593208.0,32984665293.0,32862468088.0,32797570709.0,35306964137.0,41214052962.0,37870617869.0,44454367058.0,47864741255.0,48730837271.0,54431508482.0,50944137205.0,58325067887.0,58599302486.0,63599537194.0,63240617355.0,66842476161.0,69445880586.0,91270151866.0,82593347366.0]]

			var stockdata = purpose_yearly[5];
			//alert(JSON.stringify(stockdata));
      		var images = ["images/health.png","images/education.png","images/agriculture.png","images/law&justice.png","images/water.png"]
      		
      		// this is the main function after reading data
			var selected_year = "Avg: $1103";
			var margin = 0,
				width = 165 - margin*2,
				height = width,
    			radius = Math.min(width, height) / 2 -2,
    			outerRadius = radius,
    			arcWidth = 24,
				innerRadius = radius - arcWidth;
					
			var lock = [];
			var complaints = [];
					
			var svg = d3.select(elem_id).append("svg")
    					.attr("width", width)
    					.attr("height", height)
  						.append("g")
    					.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
			//Just select your colors for donut parts 
			var colors = ["#A03737","#BC6F1D","#6FBC1D","#B6BC1D","#1D95B9"]	
			//var colors = ["#BC7171","#D4A36E","#AED980","#D0D46E","#A4D4E3"]				
			var arc = d3.svg.arc()
    					.outerRadius(outerRadius)
    					.innerRadius(innerRadius);

			var pie = d3.layout.pie()
    					.sort(null)
    					.value(function(d) { return 1; })
    					.startAngle(1*Math.PI)
    					.endAngle(3*Math.PI);

  			var g = svg.selectAll(".arc")
      					.data(pie(purposes))
    					.enter().append("g")
      					.attr("class", "arc")
      					.attr("id", function(d,i){return "sa"+i;});

  			g.append("path")
      			.style("fill", function(d,i) { return colors[i]; })
      			.transition().delay(function(d, i) { return 100; }).duration(400)
  				.attrTween('d', function(d) {
       				var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
       				return function(t) {
           				d.endAngle = i(t);
         				return arc(d);
       				}
  				})
  				.attr("id", function(d,i){return "sa"+i;});
					
			 /*Create the circle for each block */
    		var circle = g.append("circle")
	    					 .attr("r", function(d){return innerRadius-2} )
	    					 //.attr("fill","#FFAD33")
	    					 .attr("fill","#eee")
	    					 //.attr("fill","#E0F8F7")
	    					 .attr("stroke-width",0)
	    					 .style("cursor","default")
	    						    						     		    		     
      		var circle_text = g.append('text')
      							 .attr("transform","translate(0, -8)")
      						     .attr('class', 'donut_hover')
      						     .style("fill","#666")
      						     //.style("fill","#fff")
      							 .text("Select a Purpose")	
      							 .style("cursor","default")
	
      		var circle_image = g.append("svg:image")
   						.attr('width', 28)
   						.attr('height', 28)
   						.attr("transform","translate(-14, -48)")
   						.style("visibility", "hidden")
   						.style("cursor","default")
   			
   			
      		g.attr("id", "thing")
    			.append("text")
    			.attr("dy", ((arcWidth+10)/2))
    			.attr('fill', '#fff')
    			.attr('font-size',11)
    			.style("letter-spacing",2)
    			.attr("text-anchor", "middle")
    			.attr("pointer-events", "none")
    			.append("textPath")
    			.attr('startOffset', '23%')
  				.text(function(d){ return d.data["purpose"]})
  				.attr("xlink:href",function(d,i){return "#sa"+i;})	    	
      		
      		
      		// SPARK LINE
  	 		var sparkline = svg.append("g")
              				  .attr('class', 'sparkline')
              				  //.attr('visibility','hidden')
              				  .attr('transform',"translate(-32,2)")
              				  .style("stroke","#666")
 	 		
 	 		var x = d3.scale.linear().range([0, 2*radius]);
  			var y = d3.scale.linear().range([80, 0]);
  			var parseDate = d3.time.format("%b %d, %Y").parse,
  				bisectDate = d3.bisector(function(d) { return d.date; }).right;
  			var line = d3.svg.line()
            			 .interpolate("basis")
             			 .x(function(d,i) { return x(i); })
             			 .y(function(d) { return y(d); });
  
  		
			
  			x.domain(d3.extent(stockdata, function(d,i) { return i; }));
  			y.domain(d3.extent(stockdata, function(d) { return d; }));
  			
  			 
  			sparkline.append('path')
  			  	 		.data([stockdata])
						.attr("d", line)
     					.attr("transform", "scale(.4,.33)")	
  			     				
	    	function mouseOver(d,i)
	 		{	
	 	 		circle.style("visibility", "visible")
      					.attr("fill",colors[i])
      					
      			circle_text.text(d.data["purpose"])
      						 .style("fill","#fff")
      						 
      			//year_text.attr('visibility','visible')
      						    
      			circle_image.attr("xlink:href",images[i])
      						.style("visibility", "visible")	
      			
      			stockdata = purpose_yearly[i]
   				x.domain(d3.extent(stockdata, function(d,i) { return i; }));
  				y.domain(d3.extent(stockdata, function(d) { return d; }));
      			sparkline
      					 .style("stroke","#fff")
      					 .selectAll('path')
      				     .data([stockdata])
    					 .attr("d", line) 				
	 	 	}
					
					
			function mouseOut(d,i) {
				if(lock.length == 0)
				{
      				circle.attr("fill","#eee")
      				circle_text.style("fill","#666")
      							 .text("Select a Purpose")	
      				
      				 
      				circle_image.style("visibility", "hidden")	
      						
      				stockdata = purpose_yearly[5]
   					x.domain(d3.extent(stockdata, function(d,i) { return i; }));
  					y.domain(d3.extent(stockdata, function(d) { return d; }));
      				sparkline
      					 .style("stroke","#666")
      					 .selectAll('path')
      				     .data([stockdata])
    					 .attr("d", line) 
				}
				else
				{
					circle.attr("fill",colors[lock[2]])
      				
      				circle_text.text(lock[1].data["purpose"])
      							 .style("fill","#fff") 
      							       				
      				circle_image.attr("xlink:href",images[lock[2]])
      						
      				stockdata = purpose_yearly[lock[2]]
   					x.domain(d3.extent(stockdata, function(d,i) { return i; }));
  					y.domain(d3.extent(stockdata, function(d) { return d; }));
      				sparkline
      					 .style("stroke","#fff")
      					 .selectAll('path')
      				     .data([stockdata])
    					 .attr("d", line) 
				}
			}

            /*
			//curser over spark line bring value 
            var sparkline_cursor = sparkline.append('circle')
     							.attr('class', 'sparkcircle')								
     							.attr('r', 5)
     							.attr('cx', x(stockdata[0].date))
     							.attr('cy', y(stockdata[0].close)) ;
     		*/		  
      							 	 		  

     		/*
						.on("mousemove", function() {
							node = d3.mouse(sparkline.node())
     						sparkline_cursor.attr("cx",node[0])
     										.attr("cy",node[1])
     									

     						var x0 = x.invert(node[0]);
        					i = bisectDate(stockdata, x0, 1),
       						d0 = stockdata[i - 1],
        					d1 = stockdata[i],
        					df = x0 - d0.date > d1.date - x0 ? d1 : d0;
							
        					//console.log(df);
        					selected_year = df.Date;
    	 })
    		*/
    	g.select("path")
      			.on("mouseover", function(d,i) {
    				mouseOver(d,i);
      		 	})
      			.on("mouseout",  function(d,i) {
      				mouseOut(d,i);
      			})
      			.on("click",  function(d,i) {
      				if(lock.length > 0)
      				{
      					lock[0].style("fill-opacity", 1)
      							.style("fill",colors[lock[2]])
      				}
      				lock = [d3.select(this),d,i];
      				pie.startAngle((1+i*0.4)*Math.PI)
    					.endAngle((3+i*0.4)*Math.PI);
      				
      				d3.select(this)
      					.style("fill-opacity", 0.3)
      					.style("fill", "#000")
						 $('#hiddenreason').val(d.data.purpose);
						_reason =d.data.purpose;
						drawDoreen($('#dropselect').val() , d.data.purpose);
						//console.log(d.data.purpose + "   : reason clicked msg from donul selector");
						
      			})
	 }, 300);
}