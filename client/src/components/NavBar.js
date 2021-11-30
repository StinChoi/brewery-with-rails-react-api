import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div style={styles.container}>
            <Link to="/">All Beers</Link>
            <br />
            <Link to="/beers/delete">Delete Beers Page</Link>
        </div>
    );
};

export default NavBar;

const styles = {
    container: {
        backgroundColor: "orange",
        margin: "10px",
        padding: "10px",
    }
};