import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="font-weight-light font-italic">
                &copy; {new Date().getFullYear()} Jodi Nichols
                &nbsp;&bull;&nbsp;
                <a href="https://jodinichols.work/">My Website</a>
                &nbsp;&bull;&nbsp;
                Built with React.js, Bootstrap 4.1, ES6, and Webpack
            </footer>
        );
    }
}