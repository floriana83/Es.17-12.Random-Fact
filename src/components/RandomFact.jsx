const RandomFact = (props) => {
    const data = props.data || {
      
        text: '', 
        permalink: ''

    };  
    return (
        <div>
        <h1>Random Fact</h1>
            <p>{data.text}</p>
            <a href={data.permalink}>Link</a>   
        </div>
    );
};

export default RandomFact;