import React from 'react';

const Home = () => {
    return (
        <div className="container" style={{color: "#d7d7d7", paddingLeft: 30}}>
            <section className="featured">
                <h2>Featured Works</h2>
                <div className="works">
                </div>
            </section>
            <div style={{paddingTop: 70}}></div>
            <section className="new-releases">
                <h2>New Releases</h2>
                <div className="works">
                </div>
            </section>
        </div>
    );
};
export default Home;