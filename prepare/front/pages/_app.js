import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import wrapper from '../store/configureStore';

const nodeBird = ({ Component }) => {
    return(
        <>
            <Head>
                <title>NodeBird</title>
            </Head>
            <Component/>
        </>
    )
}

nodeBird.proptypes = {
    Component : PropTypes.element.isRequired,
}

export default wrapper.withRedux(nodeBird);