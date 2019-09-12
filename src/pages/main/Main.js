import React from 'react';

export default function Main({match}) {
    console.log(match);
    return (
        <h1>{match.params.id}</h1>
    );
}