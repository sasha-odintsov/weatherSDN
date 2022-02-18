function Weather(city) {
    this.city = city;
}
Weather.prototype.removeClouds = function() {
    this.condition = 'Sun';
};

Weather.prototype.addSnow = function() {
    this.condition = 'Snow';
};        

Weather.prototype.init = function() {
            // const fn = function (data) {
            //     this.temp = data.temp;
            //     this.condition = data.condition;
            //     console.log(data);
            //     return data;
            // }.bind(this);

    return fetch(`https://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=${this.city}&aqi=no`)
            
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
        return {
            city: data.location.name,
            temp: data.current.temp_c,
            condition: data.current.condition.text
        };         
    })
    // .then(fn)             
};
        