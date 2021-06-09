import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Dashboard() {
    return (
        <div className="flexbox">
        <h2 className="title">ROOF CALCULATOR</h2>
        <div className="body home">
            <h4 >
            <span style={{fontWeight:"700"}}>Kalkulator</span><br/><br/>
            Sie möchten ein Dach für Ihre Garage oder für Ihr Gartenhaus decken? Onduline bietet Ihnen Produkte an, die Sie selbst verlegen können. Egal welches Projekt Sie haben, wir sichern Ihnen geeignete Materialien und einfache Verlegung zu.   Der Onduline-Detailplaner hilft Ihnen, die Anzahl der für die Dacheindeckung nötigen Elemente und Zubehörteile zu bestimmen.
            </h4>

            <a href="/calculator">
            <Button  variant="secondary" className="button" style={{padding:"10px"}}>START</Button>
            </a>
        </div>
        
        </div>
    )
}


