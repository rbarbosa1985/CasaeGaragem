import React from 'react'

import { Button } from './style'
import { Link } from 'react-router-dom'

function Sobre() {
    return (
        <Link to='/'>
            <Button>Sobre</Button>
        </Link>
    );
}

export default Sobre