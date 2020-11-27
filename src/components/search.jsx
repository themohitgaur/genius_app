import React from "react";
import './search.css';
import Result from'./result';


class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            searchData:[]
        }
    }
    handleChange =(e) =>{
        this.setState({[e.target.name]: [e.target.value]});
    }
    find=(e) =>{
        e.preventDefault();
        const search =this.state.search;
        fetch("https://genius.p.rapidapi.com/search?q="+search, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "315a659eebmshed5929e8129ee16p1c5b40jsna4625f75fb1a",
		"x-rapidapi-host": "genius.p.rapidapi.com"
	}
})

.then(response=> {
    return response.json();
})
.then(data=>{
    console.log("data=",data);
    this.setState({
        searchData:data.response.hits
    })
    console.log("searchData=",this.state.searchData);
})
.catch(err => {
	console.error(err);
});
} 

    render() {
        const resultjsx=this.state.searchData.map(item=>(<Result image={item.result.header_image_thumbnail_url} title={item.result.full_title}/>));

        return(
            <div id="result1">
                <div id="searchform">
                    <form>
                        <input type="search" name="search" value={this.state.search} onChange={this.handleChange}></input>
                        <button onClick={this.find}><i className="fa fa-search"></i></button>
                    </form>
                </div>
                
                <div id="result">
                {resultjsx}
                </div>
                </div>
        );
    }
}
export default Search;