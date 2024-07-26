const Movie = require("../model/movie");
const slug = require("slug"); 

module.exports.Home = async(req, res) => {
    console.log("Request recieved..Home")
    return res.json({msg: "initial test successfull...!"})  ;
}

module.exports.addMovie = async (req, res, next) => {
    console.log("My post request...");
    const {_id, name, date, frameLink, downloadLink, avatar, summary, categories} = req.body;
    let urlSlug = slug(name);
    console.log(req.body);
    console.log(slug(name));
    if(_id === undefined) {
        const movie = await Movie.create({
            name,
            urlSlug,
            date,
            frameLink,
            downloadLink,
            avatar,
            summary,
            categories
        })
        return res.json({status: 200, movie: movie, msg: "Creating movie.."});
    } else {
        let movie = await Movie.findById({_id: _id})
        movie = {...movie._doc,_id,name,date,frameLink,downloadLink,avatar,summary, urlSlug, categories};
        const updatedMovie = await Movie.updateOne({_id: _id},{$set: movie});
        console.log(updatedMovie);
        return res.json({status: 200, msg: "Updating movie", movie: movie})
    }
    
}

function compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name){
      return 1;
    }
    return 0;
}

module.exports.getAllMovies = async (req, res) => {
    const movies = await Movie.find();
    console.log(movies);
    
    movies.sort(compare);
    return res.json({status: 200, list: movies})
}

module.exports.deleteMovie = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    // const dbRes = await Movie.find({_id: id});
    const dbRes = await Movie.deleteOne({_id: id});
    return res.json({
        id: id,
        status: 200,
        dbRes: dbRes
    });
}