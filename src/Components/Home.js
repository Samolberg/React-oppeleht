import React, {Component} from 'react';



class Home extends Component {
    render() {
        return (
            <div className="p-4 m-4 text-center text-white main-body bg-dark shadow">
                <div className="display-1 mt-3">React</div>
                <div className="display-4">Study Page</div>
                <div className="p-3 lead mt-3">Here you can find examples of react snippets and learning resources</div>
            </div>
        )
    }
}

export default Home;