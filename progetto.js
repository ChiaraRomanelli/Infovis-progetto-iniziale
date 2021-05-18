function progettocase(){
	
	
	var CopiaCasa = function () {
        var nuovaCasa = {},
            prop;
        for (prop in Casa) {
            if (Casa.hasOwnProperty(prop)) {
                nuovaCasa[prop] = Casa[prop];
            }
        }
        return nuovaCasa;
    };
	
	var DatiCase = [];
	
	// Varibili che indicano larghezza ed altezza usate per l'ambiente svg
	var w = 1250 
        h = 300 
		
	// Creo l'oggetto svg all'interno del <div> che ha attributo class="case"
    var svg = d3.select(".case")
        .append("svg")
        .attr("width", w )
        .attr("height", h )
	
	
	var Casa = {
        id: -1,
        posizione:-1,
        w: 1250,
        h: 300,
        distanza: 125,
        data: {},
		

        inizializza: function (i, data) {
            this.id = i;
            this.posizione = i;
            this.data = data;
            this.creaCasa();
        },

        creaCasa: function () {
            var x = this.posizione * this.distanza;
            var y = 120;

			
			
			var miaScala = d3.scaleLinear()
				.domain([7, 90])
				.range([20, 130])
			
            var gruppoCasa = svg.append("g")
                .attr('id', 'casa' + this.id)
                .attr('class', 'casa');

            gruppoCasa
               .attr('transform', 'translate(' + (x+12)  + ', '+ y +') ');
			
			// Disegno il corpo della casa
			gruppoCasa
				.append("rect")
				.attr("class", "rettangolo ")
				.attr("x", 0)
				.attr("y", (y-miaScala(this.data.altezza)))
				.attr('width',miaScala(this.data.larghezza))  
				.attr('height', miaScala(this.data.altezza))
				.attr("stroke-width", 3)
				.attr("stroke", "black")
				.attr("fill", "white");
				

			// Disegno il tetto della casa
			gruppoCasa.append('path')  
				.attr("class","lato_tetto")
				.attr('d' , 'M ' + (miaScala(this.data.larghezza)/2) +' '+ (y-miaScala(this.data.altezza)*2)+ ' l '+(miaScala(this.data.lato_tetto)/2)+' '+ miaScala(this.data.altezza)+' l -'+miaScala(this.data.lato_tetto)+' 0 z'   )
				.attr('fill', "#000000");
					
	
			
			// Disegno la porta
			gruppoCasa
				.append("rect")
				.attr("class", "porta ")
				.attr("x", 0)
				.attr("transform", "translate("+(miaScala(this.data.larghezza)/3)+","+(-miaScala(this.data.porta))+")") 
				.attr("y", y) 
				.attr('width', 15 ) 
				.attr('height', miaScala(this.data.porta))
				.attr("stroke-width", 2)
				.attr("stroke", "black")
				.attr("fill", "	#527a7a");	
		},
			
		// Funzione che mi permette di spostare le case con un'animazione fluida
		muoviCasa: function (nuovaPosizione) {
			this.posizione = nuovaPosizione;
			var x = this.posizione * this.distanza;
			var y =120;
			var casa = svg.select("#casa" + this.id);
			casa.transition()
				.duration(3000)
				.attr('transform', 'translate(' + (x+12)  + ', '+ y +') ');
		}
	
			
	}
	
	
	d3.json("data/data2.json").then(function(data){ 
		
		for (var i = 0; i < data.length; i++) {
            var nuovaCasa = CopiaCasa();
            nuovaCasa.inizializza(i, data[i]);
            DatiCase.push(nuovaCasa);
        }
		
		
		 // Cambiamenti altezza e larghezza
		var clickedOnce = false
        d3.selectAll(".rettangolo")
				.on("click", function () {
					if (clickedOnce!= true){
						console.log("altezza cliccata!");
						aggiornamentoCasa('altezza');
						clickedOnce= true;
		
					}
					else if (clickedOnce== true){
					console.log("larghezza cliccata!");
					aggiornamentoCasa('larghezza');
					clickedOnce= false;
					}
					
            });
			
		
			
		// Cambiamenti altezza porta
        d3.selectAll(".porta")
            .on("click", function () {
                console.log("porta cliccata!");
                aggiornamentoCasa('porta');
            }); 

        // Cambiamenti lato_tetto
        d3.selectAll(".lato_tetto")
            .on("click", function () {
                console.log("lato_tetto cliccato!");
                aggiornamentoCasa('lato_tetto');
            })
		
		 
		 
		// Funzione di aggiornamento
        function aggiornamentoCasa(parteCasa) {
            var data = [];
            for (var i = 0; i < DatiCase.length; i++) {
                var newObj = { id: DatiCase[i].id, parteCasa: DatiCase[i].data[parteCasa] };
                data.push(newObj);
            }

            // Ordinamento
            data.sort(function (a, b) {
                return a.parteCasa - b.parteCasa;
            });

            for (var i = 0; i < DatiCase.length; i++) {
                var id = data[i].id;
                DatiCase[id].muoviCasa(i);
            }

            // Visualizzo su console l'array ordinato
            console.log(data);
        }
		});
	
}