var countryStateInfo = {
    "Emirats_Arabes_Unis": ["Abu Dhabi", "Ajman", "Al Ain", "Al Gharbia", "Dibba", "Dubai", "Fujairah",
        "Ras Al Khaimah", "Sharjah", "Um Al Quwain"],
    "France": ["Agen", "Ajaccio", "Albi", "Alençon", "Amiens", "Angers", "Angoulême", "Annecy", "Arras", "Auch", "Aurilac", "Auxerre", "Avignon", "Bar-le-duc", "Bastia", "Beauvais", "Belfort", "Besançon", "Blois", "Bobigny", "Bordeaux", "Bour-en-bresse", "Bourges", "Caen", "Cahors", "Carcassonne", "Chambéry", "Charleville-mézières", "Chartres", "Chateauroux", "Chaumont", "Châlons-en-champagne", "Clermont-ferrand", "Colmar", "Creteil", "Digne", "Dijon", "Epinal", "Evreux", "Evry", "Foix", "Gap", "Grenoble", "Guéret", "La-roche-sur-yon", "Laon", "Larochelle", "Laval", "Lemans", "Lepuy-en-velay", "Lille", "Limoges", "Lons-le-saunier", "Lyon", "Marseille", "Melun", "Mende", "Metz", "Mont-de-marsan", "Montauban", "Montpellier", "Moulins", "Mâcon", "Nancy", "Nanterre", "Nantes", "Nevers", "Nice", "Niort", "Nîmes", "Orléans", "Paris", "Pau", "Perpignan", "Poitiers", "Pontoise", "Privas", "Périgueux", "Quimper", "Rennes", "Rodez", "Rouen", "Saint-brieuc", "Saint-etienne ", "Saint-lô ", "Strasbourg ", "Tarbes ", "Toulon ", "Toulouse ", "Tours ", "Troyes ", "Tulle ", "Valence ", "Vannes ", "Versailles ", "Vesoul"],
    "Maroc": ["Agadir", "Al Hoceïma", "Assilah", "Azilal", "Benslimane", "Berkane", "Casablanca", "El Jadida", "Fès", "Marrakech", "Mohammédia", "Oujda", "Rabat", "Safi", "Salé", "Tanger"],
    "Qatar": ["Al Ghuwariyah", "Al Khor", "Al Rayyan", "Al Wakrah", "Doha"],
    "États Unis": ["Alabama", "California", "Colorado", "District Of Columbia", "Florida", "Georgia", "Hawaii", "Illinois", "Michigan", "New Jersey", "New York"]
};
/*
var countryStateInfo = {
    "Emirats_Arabes_Unis": ["Abu Dhabi", "Ajman", "Al Ain", "Al Gharbia", "Dibba", "Dubai", "Fujairah",
        "Ras Al Khaimah", "Sharjah", "Um Al Quwain"],
    "France": ["Agen", "Ajaccio", "Albi", "Alençon", "Amiens", "Angers", "Angoulême", "Annecy", "Arras", "Auch", "Aurilac", "Auxerre", "Avignon", "Bar-le-duc", "Bastia", "Beauvais", "Belfort", "Besançon", "Blois", "Bobigny", "Bordeaux", "Bour-en-bresse", "Bourges", "Caen", "Cahors", "Carcassonne", "Chambéry", "Charleville-mézières", "Chartres", "Chateauroux", "Chaumont", "Châlons-en-champagne", "Clermont-ferrand", "Colmar", "Creteil", "Digne", "Dijon", "Epinal", "Evreux", "Evry", "Foix", "Gap", "Grenoble", "Guéret", "La-roche-sur-yon", "Laon", "Larochelle", "Laval", "Lemans", "Lepuy-en-velay", "Lille", "Limoges", "Lons-le-saunier", "Lyon", "Marseille", "Melun", "Mende", "Metz", "Mont-de-marsan", "Montauban", "Montpellier", "Moulins", "Mâcon", "Nancy", "Nanterre", "Nantes", "Nevers", "Nice", "Niort", "Nîmes", "Orléans", "Paris", "Pau", "Perpignan", "Poitiers", "Pontoise", "Privas", "Périgueux", "Quimper", "Rennes", "Rodez", "Rouen", "Saint-brieuc", "Saint-etienne ", "Saint-lô ", "Strasbourg ", "Tarbes ", "Toulon ", "Toulouse ", "Tours ", "Troyes ", "Tulle ", "Valence ", "Vannes ", "Versailles ", "Vesoul"],
    "Maroc": ["Agadir", "Al Hoceïma", "Assilah", "Azilal", "Benslimane", "Berkane", "Boulemane", "Béni Mellal", "Casablanca", "Chefchaouen", "Chichaoua", "El Jadida", "Errachidia", "Essaouira", "Figuig", "Fès", "Guelmim", "Ifrane", "Khouribga", "Khémisset", "Khénifra", "Kénitra", "Larache", "Marrakech", "Meknès", "Merzouga", "Midelt", "Mohammédia", "Nador", "Ouarzazate", "Ouezzane", "Oujda", "Rabat", "Safi", "Salé", "Settat", "Sidi Kacem", "Séfrou", "Tan-Tan", "Tanger", "Taounate", "Taourirt", "Taroudant", "Tata", "Taza", "Tinghir", "Tiznit", "Témara", "Tétouan", "Zagora"],
    "Qatar": ["Al Ghuwariyah", "Al Khor", "Al Rayyan", "Al Wakrah", "Al-Shahaniya", "Ash Shamal", "Doha", "Dukhan", "Mesaieed", "Umm Salal Mohammed"],
    "États Unis": ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
}
*/

window.onload = function () {

    //Get html elements
    var countySel = document.getElementById("countySel");
    // var stateSel = document.getElementById("stateSel");
    var citySel = document.getElementById("citySel");
    // var zipSel = document.getElementById("zipSel");

    //Load countries
    for (var country in countryStateInfo) {
        countySel.options[countySel.options.length] = new Option(country, country);
    }

    //County Changed
    countySel.onchange = function () {

        // stateSel.length = 1; // remove all options bar first
        citySel.length = 1; // remove all options bar first
        // zipSel.length = 1; // remove all options bar first

        if (this.selectedIndex < 1)
            return; // done

        // for (var state in countryStateInfo[this.value]) {
        // stateSel.options[stateSel.options.length] = new Option(state, state);
        // }


        // for (var city in countryStateInfo[countySel.value][this.value]) {
        // citySel.options[citySel.options.length] = new Option(city, city);
        // }


        var cities = countryStateInfo[this.value];
        for (var i = 0; i < cities.length; i++) {
            citySel.options[citySel.options.length] = new Option(cities[i], cities[i]);
        }
    }

    //State Changed
    /*

    stateSel.onchange = function() {

      citySel.length = 1; // remove all options bar first
      zipSel.length = 1; // remove all options bar first

      if (this.selectedIndex < 1)
        return; // done

      for (var city in countryStateInfo[countySel.value][this.value]) {
        citySel.options[citySel.options.length] = new Option(city, city);
      }
    }

    //City Changed
    citySel.onchange = function() {
      zipSel.length = 1; // remove all options bar first

      if (this.selectedIndex < 1)
        return; // done

      var zips = countryStateInfo[countySel.value][stateSel.value][this.value];
      for (var i = 0; i < zips.length; i++) {
        zipSel.options[zipSel.options.length] = new Option(zips[i], zips[i]);
      }
    }

    */
}