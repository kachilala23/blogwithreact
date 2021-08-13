const Home = () => {

    const handleClick = () => {
        console.log('hello kachilala');
    }

    return (
    <div className="home">
      <h2>Homepage</h2>
        <button onClick={handleClick()}></button>
    </div>
  );
}
 
export default Home;