const movies = [
    {
        title: "Bracula: Condemor II",
        duration: 192,
        categories: ["comedia", "aventura"],
    },
    {
        title: "Spider-Man: No Way Home",
        duration: 122,
        categories: ["aventura", "acción"],
    },
    {
        title: "The Voices",
        duration: 223,
        categories: ["comedia", "thriller"],
    },
    {
        title: "Shrek",
        duration: 111,
        categories: ["comedia", "aventura", "animación"],
    },
];
const categories= []
for (movie of movies){
    for (i in movie.categories){
        if (categories.includes(movie.categories[i])){
            
        }else{
            categories.push(movie.categories[i])
        }
    
    }
    
}
console.log(categories)